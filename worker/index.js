// Cloudflare Worker for the AAS homepage.
// - Serves the built SPA from the ASSETS binding (with index.html fallback for client routes).
// - Handles POST /api/contact by relaying the inquiry through Resend.
//
// Secrets / vars (set outside the repo):
//   RESEND_API_KEY  — Worker secret (wrangler secret put RESEND_API_KEY)
//   CONTACT_TO      — recipient inbox (wrangler.toml [vars])
//   CONTACT_FROM    — verified Resend sender (wrangler.toml [vars])

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const isEmail = (v) =>
  typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  );

async function handleContact(request, env) {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    return json(500, { ok: false, error: 'Email service is not configured yet.' });
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, error: 'Invalid request body.' });
  }

  // Honeypot — real users never fill this hidden field.
  if (clean(data.company, 200)) return json(200, { ok: true });

  const firstName = clean(data.firstName, 100);
  const lastName = clean(data.lastName, 100);
  const email = clean(data.email, 200);
  const subject = clean(data.subject, 200) || 'New inquiry';
  const message = clean(data.message, 5000);

  const errors = {};
  if (!firstName) errors.firstName = 'Required';
  if (!lastName) errors.lastName = 'Required';
  if (!isEmail(email)) errors.email = 'Valid email required';
  if (!message) errors.message = 'Required';
  if (Object.keys(errors).length) return json(422, { ok: false, errors });

  const name = `${firstName} ${lastName}`;
  const html =
    `<h2>New contact inquiry</h2>` +
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
    `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` +
    `<p><strong>Message:</strong></p>` +
    `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;
  const text =
    `New contact inquiry\n\n` +
    `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`;

  let resp;
  try {
    resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM,
        to: [env.CONTACT_TO],
        reply_to: email,
        subject: `[AAS] ${subject} — ${name}`,
        html,
        text,
      }),
    });
  } catch (err) {
    console.error('Resend request failed', err);
    return json(502, { ok: false, error: 'Could not send message. Please email us directly.' });
  }

  if (!resp.ok) {
    const detail = await resp.text().catch(() => '');
    console.error('Resend error', resp.status, detail);
    return json(502, { ok: false, error: 'Could not send message. Please email us directly.' });
  }

  return json(200, { ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return json(405, { ok: false, error: 'Method not allowed' });
      }
      return handleContact(request, env);
    }

    // Static assets; fall back to index.html for client-side (SPA) routes.
    const assetRes = await env.ASSETS.fetch(request);
    if (assetRes.status === 404 && request.method === 'GET') {
      const accept = request.headers.get('accept') || '';
      const looksLikeFile = /\.[a-zA-Z0-9]+$/.test(url.pathname); // e.g. /foo.png
      if (accept.includes('text/html') || !looksLikeFile) {
        return env.ASSETS.fetch(new Request(new URL('/index.html', url), request));
      }
    }
    return assetRes;
  },
};

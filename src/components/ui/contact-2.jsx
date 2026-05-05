import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const initial = { firstName: '', lastName: '', email: '', subject: '', message: '' };

const Contact2 = ({
  title = 'Contact Us',
  description,
  phone,
  email,
  web,
  className,
}) => {
  const { toast } = useToast();
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setField = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!form.firstName.trim()) next.firstName = 'Required';
    if (!form.lastName.trim()) next.lastName = 'Required';
    if (!form.email.trim()) next.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Invalid email';
    if (!form.message.trim()) next.message = 'Required';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: 'Message sent',
        description: `Thanks ${form.firstName}. We'll respond to ${form.email} within 24-48 hours.`,
      });
      setForm(initial);
      setIsSubmitting(false);
    }, 900);
  };

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-20">
          {/* Left: heading + contact details */}
          <div className="flex max-w-md flex-col justify-between gap-10">
            <div>
              <h1 className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                {title}
              </h1>
              <div className="mt-6 h-1 w-20 bg-accent" />
              {description && (
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {description}
                </p>
              )}
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Contact Details
              </h3>
              <ul className="space-y-2 text-base text-foreground">
                {phone && (
                  <li>
                    <span className="font-semibold text-primary">Phone:</span>{' '}
                    <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="hover:underline">
                      {phone}
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <span className="font-semibold text-primary">Email:</span>{' '}
                    <a href={`mailto:${email}`} className="hover:underline">
                      {email}
                    </a>
                  </li>
                )}
                {web && (
                  <li>
                    <span className="font-semibold text-primary">Web:</span>{' '}
                    <a
                      href={web.url}
                      target={web.url.startsWith('http') ? '_blank' : undefined}
                      rel={web.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hover:underline"
                    >
                      {web.label}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex w-full max-w-xl flex-col gap-6 rounded-lg border border-border bg-card p-8 md:p-10"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={setField('firstName')}
                  aria-invalid={Boolean(errors.firstName)}
                  className={errors.firstName ? 'border-destructive' : undefined}
                />
                {errors.firstName && (
                  <p className="text-xs text-destructive">{errors.firstName}</p>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={setField('lastName')}
                  aria-invalid={Boolean(errors.lastName)}
                  className={errors.lastName ? 'border-destructive' : undefined}
                />
                {errors.lastName && (
                  <p className="text-xs text-destructive">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="you@institution.edu"
                value={form.email}
                onChange={setField('email')}
                aria-invalid={Boolean(errors.email)}
                className={errors.email ? 'border-destructive' : undefined}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                placeholder="Deployment, licensing, research, investment…"
                value={form.subject}
                onChange={setField('subject')}
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us a little about your role and what you'd like to discuss."
                value={form.message}
                onChange={setField('message')}
                rows={5}
                aria-invalid={Boolean(errors.message)}
                className={errors.message ? 'border-destructive' : undefined}
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Contact2 };
export default Contact2;

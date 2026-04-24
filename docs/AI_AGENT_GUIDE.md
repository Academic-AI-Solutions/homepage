# AI Agent Operational Guide — AAS Homepage

## Quick Reference

| Item | Value |
|------|-------|
| Project | Academic AI Solutions Homepage |
| Tech Stack | React 18, Vite 4, Tailwind CSS 3, Framer Motion |
| Package Manager | pnpm |
| Node Version | 22 (.nvmrc) |
| Deployment | Cloudflare Workers (static assets) |
| CI/CD | GitHub Actions (3-job pattern) |
| Repository | github.com/Event-Solutions-Global/aas-homepage |

## Environment Matrix

| Branch | Environment | Worker Name | Domain |
|--------|-------------|-------------|--------|
| development | development | aas-homepage-dev | — |
| staging | staging | aas-homepage-staging | — |
| main | production | aas-homepage | academicaisolutions.com |

## Common Tasks

### Local Development

```bash
pnpm install
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
```

### Deployment

Deployments are automatic via GitHub Actions on push to development/staging/main branches.

Manual deployment:

```bash
pnpm build
pnpm wrangler deploy                    # Deploy to production
pnpm wrangler deploy --env staging      # Deploy to staging
pnpm wrangler deploy --env development  # Deploy to development
```

### Required Secrets (GitHub)

- `CLOUDFLARE_API_TOKEN` — Wrangler authentication
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account

## Architecture

Single-page scrolling React application. All content lives in `src/pages/HomePage.jsx` with anchor-based navigation (#home, #platform, #financial-impact, #licensing, #contact).

Static assets are served from Cloudflare Workers using the `[assets]` configuration in `wrangler.toml` with `not_found_handling = "single-page-application"` for SPA routing.

## Design System

- Primary Gold: #d4af37
- Primary Blue: #1e3a8a
- Font: Inter (400, 500, 600, 700)
- Icons: Lucide React
- Animations: Framer Motion (scroll-triggered)

## CI/CD Workflow

3-job GitHub Actions pattern:

1. **resolve-env** — Maps branch to environment (development/staging/production)
2. **ci-gate** — Lint + build verification
3. **deploy** — Build + wrangler deploy to Cloudflare

## Troubleshooting

### Build fails

- Check Node version matches .nvmrc (22)
- Run `pnpm install` to sync dependencies
- Check `pnpm lint` for ESLint errors

### Deployment fails

- Verify CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID secrets are set
- Check wrangler.toml environment configuration
- Run `pnpm wrangler whoami` to verify authentication

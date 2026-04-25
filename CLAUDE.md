# Academic AI Solutions - Homepage

Single-page React application for Academic AI Solutions, a higher education AI platform company. The site presents the product offering, financial impact, licensing model, and contact form as a scrolling single-page experience.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS 3, shadcn/ui (New York style), Framer Motion
- **Icons**: Lucide React
- **SEO**: React Helmet
- **Routing**: React Router DOM (used for SPA shell, not multi-page routing)
- **Deployment**: Cloudflare Workers (static assets)
- **Package Manager**: pnpm
- **Node**: 22 (.nvmrc)
- **CI/CD**: GitHub Actions (3-job pattern)

## Commands

```bash
pnpm dev           # Start dev server
pnpm build         # Production build (output: dist/)
pnpm preview       # Preview production build
pnpm lint          # ESLint (quiet mode)
```

## Project Structure

```
src/
  pages/           # Page components (HomePage is the main content)
  components/      # Custom components (Navigation, Footer, Logo, ProductCard, etc.)
  components/ui/   # shadcn/ui components
  hooks/           # Custom hooks (use-mobile, use-toast)
  lib/             # Utilities (utils.js — cn helper for Tailwind class merging)
public/              # Static assets copied to dist/
```

## Architecture

- `App.jsx` renders Navigation, HomePage, Footer, and Toaster
- `HomePage.jsx` contains all page sections as a single scrolling page with anchor IDs: `#home`, `#platform`, `#financial-impact`, `#licensing`, `#contact`
- Navigation uses smooth scroll-to-section with anchor IDs and an 80px offset
- Other page files in `src/pages/` (PlatformPage, FinancialImpactPage, LicensingPage, ContactPage) exist but are not routed — all content lives in HomePage

## Design System

- **Primary Gold**: `#d4af37` | **Secondary Gold**: `#f4d03f`
- **Primary Blue**: `#1e3a8a`
- **Font**: Inter (Google Fonts, weights 400-700)
- **Icons**: Lucide React
- **Component Library**: shadcn/ui (New York style, JSX, cssVariables enabled)
- **Custom CSS classes** (defined in `src/index.css`):
  - `.glass` — glassmorphism (blur + transparency)
  - `.gold-gradient` — gold linear gradient background
  - `.text-gradient` — blue-to-gold gradient text

## Animations

All animations use **Framer Motion**:
- `fadeInUp` variant with `whileInView` for scroll-triggered reveals
- Hover scale on cards
- Stagger delays for lists
- `AnimatePresence` for mobile nav toggle

## Deployment

**Cloudflare Workers (static assets)**
- Build command: `pnpm build`
- Output directory: `dist/`
- Config: `wrangler.toml` (asset-only Worker with SPA routing)
- SPA fallback: `not_found_handling = "single-page-application"` in wrangler.toml

## CI/CD

**GitHub Actions** — `.github/workflows/deploy.yml`
- 3-job pattern: `resolve-env` → `ci-gate` → `deploy`
- Branches: `development` → `staging` → `main`
- Environment mapping: development→development, staging→staging, main→production
- Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- Worker names: `aas-homepage-dev`, `aas-homepage-staging`, `aas-homepage`

## Path Alias

`@/` maps to `src/` (configured in `jsconfig.json` and `vite.config.js`)

## Key Conventions

- Components use **JSX** (not TSX) — no TypeScript
- shadcn/ui components live in `src/components/ui/`
- Custom hooks in `src/hooks/`
- Single utility file: `src/lib/utils.js` (exports `cn` for Tailwind class merging)
- Base color: neutral (shadcn/ui theme)

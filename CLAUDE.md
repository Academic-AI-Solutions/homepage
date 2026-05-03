# Academic AI Solutions - Homepage

Multi-page React application for Academic AI Solutions, a higher education AI platform company. The home route is a long scrolling page covering product, financial impact, licensing, team, and contact; dedicated routes exist for `/platform`, `/financial-impact`, and `/licensing`.

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

- `App.jsx` renders `Navigation`, the routed page, `Footer`, and `Toaster`
- Routes (`react-router-dom`): `/` → `HomePage`, `/platform` → `PlatformPage`, `/financial-impact` → `FinancialImpactPage`, `/licensing` → `LicensingPage`
- `HomePage.jsx` is a long scrolling page with anchor IDs: `#home`, `#platform`, `#contact`, `#team`. The hero CTA scrolls to `#platform` (anchor); the top nav navigates to dedicated routes for `THE PLATFORM`, `FINANCIAL IMPACT`, and `LICENSING & PARTNERS`
- Navigation uses smooth scroll-to-section with anchor IDs and an 80px offset; `ContactPage.jsx` is unrouted (its form is mirrored inside HomePage's `#contact` section)

## Design System

The ASU brand palette is wired into shadcn's CSS-variable token system in `src/index.css` — components address colors semantically via Tailwind classes (`bg-primary`, `text-accent`, `bg-secondary`), not hex literals. The HSL values map to:

| Token | HSL | Hex equivalent | Used for |
|---|---|---|---|
| `primary` | `341 66% 33%` | `#8C1D40` (ASU Maroon) | Body text accents, icons, dividers, active nav |
| `accent` | `44 100% 58%` | `#FFC627` (ASU Gold) | CTA buttons, decorative dividers, focus rings |
| `secondary` | `36 100% 98%` | `#FFFBF5` (Warm Cream) | Alternating section backgrounds |
| `foreground` | `325 100% 12%` | `#3D0024` (Dark Maroon) | Body text default |
| `background` | `0 0% 100%` | `#FFFFFF` | Default page background |

Dark sections (Integrations, Patent Portfolio) wrap their `<section>` in `className="dark"` — the `.dark` selector in `index.css` flips `--background` to dark maroon and `--foreground` to cream, so child components automatically invert via the same token classes.

- **Font**: Inter (Google Fonts, weights 400-700)
- **Icons**: Lucide React
- **Component Library**: shadcn/ui (New York style, JSX, cssVariables enabled). Installed primitives: `button.jsx`, `card.jsx`, `toast.jsx`, `toaster.jsx`, `hero-section.jsx`
- **Custom CSS classes** (defined in `src/index.css`):
  - `.glass` — glassmorphism (blur + transparency)
  - `.gold-gradient` — gold linear gradient background
  - `.text-gradient` — maroon-to-gold gradient text

### Hero (`src/components/ui/hero-section.jsx`)

Split-layout hero (content left, clip-path-revealed image right). Props: `logo`, `slogan`, `title` (ReactNode, supports an inline `<span className="text-primary">` accent), `subtitle`, `callToAction`, `backgroundImage`, and `signals` (array of `{ icon, label }` where icon is one of `'Mail' | 'ShieldCheck' | 'GraduationCap'`). New icons require adding to the `SIGNAL_ICONS` map inside the component.

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
- shadcn/ui primitives in `src/components/ui/` use `forwardRef` (kebab-case filenames). Custom (non-primitive) components in `src/components/` are functional with destructured props (PascalCase filenames)
- Custom hooks in `src/hooks/`
- Single utility file: `src/lib/utils.js` (exports `cn` for Tailwind class merging via `clsx` + `tailwind-merge`)
- **Always reach for tokens, not hex literals.** `bg-primary` not `bg-[#8C1D40]`; the slash-opacity syntax (`bg-primary/10`, `border-accent/40`) only works with token-based colors
- Base color: neutral (shadcn/ui scaffold), but the CSS-variable values in `src/index.css` are overridden with the ASU palette

# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

TransKoi (锦鲤翻译) official marketing website — a static Next.js 14 single-page landing site for an AI real-time translation app. Built with App Router, Tailwind CSS, and next-intl for i18n. Deploys as a static export to Aliyun under the `/translator` basePath.

## Tech Stack

- **Next.js 14.2.13** (App Router, static export via `output: 'export'`)
- **React 18**
- **Tailwind CSS 3** + PostCSS
- **next-intl 3** for internationalization (zh/en/ja)
- **Font Awesome 6** (CDN-loaded in layout head)
- **TypeScript 5** (strict mode)
- **Google Fonts** (Inter only)

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Static export to dist/ directory
npm run start    # Preview production build
npm run lint     # Run next lint
```

## Architecture

### Directory Structure

```
transkoi-website/
├── messages/              # i18n message files (zh.json, en.json, ja.json)
│   └── *.json            # All keyed under "TransKoi" namespace
├── src/
│   ├── app/
│   │   ├── [locale]/     # Locale-segmented route (dynamic)
│   │   │   ├── layout.tsx # Root layout: fonts, FA CDN, NextIntlClientProvider
│   │   │   └── page.tsx  # Home page: composes all section components
│   │   └── globals.css   # CSS variables + keyframe animations
│   └── components/       # Section components (all 'use client')
│       ├── Navbar.tsx    # Fixed navbar with scroll detection
│       ├── Hero.tsx      # Hero section with dual CTAs
│       ├── Features.tsx  # 6 feature cards in 3-column grid
│       ├── Stats.tsx     # 4 stat numbers on gradient background
│       ├── Products.tsx  # 2-column product cards (App + LuckyPod)
│       ├── Download.tsx  # Download CTA section
│       └── Footer.tsx    # 4-column footer with links + social icons
├── assets/images/        # Printer product images (printer1-5.jpg)
├── i18n.ts               # next-intl config, default locale: zh
├── next.config.js        # Static export, basePath: /translator
├── tailwind.config.js    # Custom colors, animations, keyframes
└── dist/                 # Build output (deployed to Aliyun)
```

### Key Architectural Patterns

- **Locale routing**: `src/app/[locale]/page.tsx` uses `generateStaticParams()` to pre-render `/zh`, `/en`, `/ja`. Default locale is `zh` (configured in `i18n.ts`).
- **i18n**: All text uses `useTranslations('TransKoi')` hook in components. Messages nested under `TransKoi` key in each locale JSON. Uses `t.raw()` for array iteration (feature lists).
- **Component composition**: `page.tsx` is a thin shell that composes 7 section components in order. Each component is self-contained with its own Tailwind classes.
- **Static export**: `next.config.js` sets `output: 'export'` and `distDir: 'dist'`. This disables SSR/ISR/API routes — everything is pre-rendered HTML.
- **basePath**: Set to `/translator` for deployment under `transkoi.com/translator`. Both `basePath` and `assetPrefix` are configured.
- **Dark theme only**: The site uses a fixed dark color scheme (`#0a0e1a` background). No light mode toggle.

### Design System

- **Colors** (defined in both `tailwind.config.js` and `globals.css`):
  - Primary: `#667eea` → Secondary: `#764ba2` (blue-purple gradient, used everywhere)
  - Accent: `#4facfe` → `#00f2fe` (cyan-blue gradient)
  - Dark bg: `#0a0e1a`, Darker: `#050810`
  - Cards: `bg-white/5` with `border-white/10`
- **Animations**: `fadeInUp` (staggered via animation-delay), `rotate` (30s infinite background spin)
- **Fonts**: Inter (loaded via Google Fonts CDN + next/font)
- **Icons**: Font Awesome 6 via CDN in `<head>`

### Deployment

- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`) triggers on push to `main`/`master` or tags `v*`.
- **Build flow**: `npm ci` → `npm run build` → restructure `dist/*.html` → `translator/` directory → rsync to Aliyun via SSH.
- **Post-deploy**: Nginx `sub_filter` rewrites `_next` asset paths to work under `/translator` basePath.
- **Target**: Aliyun server via `easingthemes/ssh-deploy` action, deployed to `secrets.TRANSLATOR_TARGET_PATH`.

## Important Notes

- All components use `'use client'` directive — even though they're mostly static, this enables smooth scroll behavior via `window.addEventListener`.
- Smooth scrolling uses `document.getElementById().scrollIntoView()` — no hash-based navigation or actual page transitions.
- Image optimization is disabled (`images.unoptimized: true`) since this is a static export.
- Font Awesome is loaded from CDN (cdnjs.cloudflare.com). If adding CSP, include this origin.
- No testing framework is configured — this is a marketing site with no business logic.
- No ESLint/Prettier config beyond `next lint`.
- The `assets/images/` directory contains printer product photos (not currently used in components).
- i18n message files share the same structure — when adding a new key, add it to all three locale files.
- The `zh.json` file is the source of truth; `en.json` and `ja.json` should mirror its structure.

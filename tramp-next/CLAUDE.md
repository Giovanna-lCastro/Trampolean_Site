# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: non-standard Next.js version

@AGENTS.md — this pins Next.js `^16.2.6`, which has breaking changes vs. the Next.js you were trained on. Before writing code that touches routing, data fetching, config, or other framework APIs, check `node_modules/next/dist/docs/` (run `npm install` first if `node_modules` isn't present) rather than relying on prior knowledge of Next.js conventions.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # static export build (writes to out/, see next.config.ts)
npm run start    # serve production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite configured in this repo.

## Architecture

This is a static marketing site (Trampolean — AI/corporate education company) built with Next.js App Router, exported as static HTML.

- **Static export**: `next.config.ts` sets `output: 'export'` and `images.unoptimized: true`. There is no server runtime — no API routes, no SSR-only features, no `next/image` optimization. Images are plain `<img>` tags or unoptimized `next/image`.
- **Routing**: one `page.tsx` per top-level route directly under `app/` (`app/sobre`, `app/produtos`, `app/solucoes`, `app/educacao`, `app/carreira`, `app/contato`). No nested/dynamic routes, no route groups, no layouts beyond the single root `app/layout.tsx`.
- **Page composition pattern**: every `page.tsx` is a thin shell that wraps a `Header` + `Footer` around a sequence of large, page-specific section components (e.g. `AboutHero`, `AboutStory`, `AboutValues`, `AboutMetrics`, `AboutLeadership`, `AboutCTA` for `/sobre`). Sections live flat in `components/` (no per-page subfolders) and are named `<Page><Section>` (e.g. `CareerHero`, `CareerCulture`, `CareerForm`; `EducationHero`, `EducationDetail`, `EducationDifferentiators`). When adding a new page section, follow this naming and composition convention.
- Most interactive components (animations, scroll listeners, menus, forms) are `"use client"`; keep that directive on any component using hooks, `framer-motion`, or browser APIs.
- **Navigation/mega menu**: `Header.tsx` defines the full nav structure (including mega-menu items with inline icon components) as a local `navLinks` array; `MegaMenu.tsx` renders it. Update `navLinks` in `Header.tsx` when adding/renaming a route or mega-menu entry.
- **Styling**: Tailwind CSS v4 via `@import "tailwindcss"` and an inline `@theme` block in `app/globals.css` — there is no `tailwind.config.js`. Brand tokens are defined there as CSS variables: `tramp-dark`, `tramp-accent`, `tramp-gradient-start/end`, `tramp-magenta`, `tramp-gray`, etc., plus custom breakpoints (`sm`=512px, `md`=768px, `lg`=1024px, `xl`=1280px, `2xl`=1440px — not Tailwind's defaults).
  - `html { font-size: 62.5% }` is set so `1rem = 10px`; font sizes throughout components are written in rem against that base (e.g. `text-[1.8rem]` = 18px).
  - Custom utilities are declared with `@utility` in `globals.css` (e.g. `container2025Redesign` — the standard page-section wrapper used across nearly every component, `btn-premium-purple`, `animate-left-to-right/right-to-left`). Reuse these rather than re-implementing equivalent layout/animation utilities inline.
- **Animation**: `framer-motion` is used throughout for scroll-triggered reveals, typically `initial` / `whileInView` / `viewport={{ once: true }}`.
- **Assets**: `public/` holds large media libraries (press images under `public/noticia_e_img/`, e-book/downloads under `public/e_book/` and `public/downloads/`). The header logo is currently loaded from an external URL (`trampolean.net`), not a local asset.
- **Language**: all UI copy is in Brazilian Portuguese (`lang="pt-br"` in the root layout); keep new copy consistent with that.

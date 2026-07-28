# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (Next.js, Turbopack default)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript rules)

There is no test runner configured in this repo (no test script in `package.json`, no test files present).

## Architecture

This is a Next.js App Router marketing site (no backend/API routes, no data fetching layer — every page is static JSX/TSX).

**Route structure**: each top-level route lives under `app/<route>/` with its own `page.tsx` and a colocated `components/` folder holding section components used only by that page (e.g. `app/franchise/components/FranchiseHero.tsx`). Routes: `/` (home, `app/page.tsx` + `app/home/components/`), `/about`, `/catering`, `/franchise`, `/wholesale`. A page is just a sequence of section components stacked in a fragment (see `app/about/page.tsx` or `app/franchise/page.tsx` for the pattern) — building a new page or section means adding a component to that route's `components/` folder and dropping it into the page's JSX in order.

**Shared vs page-local components**: only genuinely cross-route components (currently `Header`) live in the top-level `components/` directory. Everything else is scoped under its route's `components/` folder — don't add page-specific sections to the top-level `components/` directory.

**Path alias**: `@/*` resolves to the repo root (`tsconfig.json`), used for shared imports like `@/components/Header`. Within a route, sibling section components are imported with relative paths (`./components/...`).

**Styling**: Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline` in `app/globals.css`, no `tailwind.config.*` file). Components style almost entirely with inline Tailwind utility classes, including arbitrary-value hex colors (e.g. `bg-[#D12525]`, `text-[#4A3F32]`) rather than themed color tokens — match this convention rather than introducing new named colors in the theme. `app/catering/components/catering.css` is the one exception with a dedicated stylesheet (imported directly by its component) for cases Tailwind utilities don't cover cleanly.

**Fonts**: loaded once via `next/font/google` in `app/layout.tsx` (Poppins, DM Sans, Space Grotesk, Bebas Neue), exposed as CSS variables on `<html>` and consumed through Tailwind/CSS var references — don't re-import fonts inside individual page/section components.

**Assets**: images are served from `public/<route>/` mirroring the route structure (e.g. `public/franchise/format-1.png` for `/franchise`), plus `public/header/` for the shared header's logo/cart icons. Reference them with `next/image` and root-relative paths (`/franchise/format-1.png`).

**Client components**: components needing interactivity or browser APIs are explicitly marked `"use client"` (e.g. `components/Header.tsx` for its mobile menu state); most section components are server components by default since this is a static content site.

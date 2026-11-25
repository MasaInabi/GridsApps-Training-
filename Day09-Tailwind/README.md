# Day 09 — Tailwind CSS + Vite Foundations

A responsive SaaS landing page for the Grids Apps Full Stack internship.

## Requirements covered
- Vite vanilla JavaScript setup
- Tailwind CSS v4 via the official Vite plugin and `@import "tailwindcss"`
- T01: SaaS hero section with responsive layout, CTA buttons, and dashboard mockup
- T03: three reusable product cards with pricing and hover states
- Responsive variants for mobile, tablet, and desktop
- Working mobile navigation and product-selection toast
- Visible keyboard focus styles

## Run locally
Requires Node.js and npm, plus free disk space for dependencies.

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```powershell
npm.cmd run build
```

## Files
- `index.html` — HTML entry point
- `src/main.js` — page markup and simple interactions
- `src/style.css` — Tailwind import, theme tokens, and a few custom effects
- `vite.config.js` — Tailwind Vite plugin

## Notes
- The statistics, pricing, testimonials and product brands are **illustrative demo content**, not real business claims.
- No `node_modules` or `dist` folder is included; npm creates these locally.
- The font is loaded from Google Fonts and falls back to system sans-serif if offline.

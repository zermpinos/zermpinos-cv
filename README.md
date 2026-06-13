# ZermpinosCV

Personal portfolio and CV site for Panagiotis Zermpinos. A static single-page site deployed on Vercel with a client-side PDF export.

---

## Architecture

All files live under `public/` and are served as static assets by Vercel. There is no build step and no framework; the site is plain HTML, CSS, and vanilla JS.

| File | Purpose |
|------|---------|
| `public/index.html` | Document structure: navigation, hero, experience, education, skills, and projects sections; structured data (JSON-LD) and Open Graph meta tags |
| `public/styles.css` | Full visual layer: dark theme, responsive layout, scroll progress indicator, animated cards, mobile hamburger menu |
| `public/script.js` | Scroll progress bar, smooth scrolling, active nav link highlighting via `IntersectionObserver`, hamburger menu toggle, "back to top" button |
| `public/cv-generator.js` | Client-side one-page PDF export via jsPDF; renders header, summary, experience, education, skills, and projects sections to A4 |
| `public/jspdf.umd.min.js` | Vendored jsPDF UMD bundle; self-hosted to satisfy the strict `script-src 'self'` CSP |
| `public/favicon.svg` | SVG favicon |
| `vercel.json` | Vercel deployment config: sets output directory, security headers, and cache-control for versioned assets |

---

## Security headers

All responses carry a strict header set defined in `vercel.json`.

| Header | Value |
|--------|-------|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | camera, microphone, geolocation all denied |
| `Content-Security-Policy` | `default-src 'none'`; scripts, styles, fonts, and images locked to `'self'` and explicit external origins |

CSS and JS assets are served with `Cache-Control: public, max-age=0, must-revalidate` so browsers always revalidate rather than serving stale cached builds.

---

## PDF export

Clicking the CV download button calls `generateCV()` entirely in the browser with no server round-trip. jsPDF renders a single A4 page with hardcoded layout logic (margins, line heights, section titles, bullet points). The output file is saved as `Panagiotis_Zermpinos_CV.pdf`.

The jsPDF library is vendored locally rather than loaded from a CDN so that the `script-src 'self'` CSP policy does not need to be relaxed.

---

## Tech stack

**Site:** HTML · CSS · Vanilla JS (no framework, no build step)

**PDF:** jsPDF (vendored, client-side)

**Deployment:** Vercel (static)

---

## Deployment

Push to `main`; Vercel picks up `public/` as the output directory automatically via `vercel.json` and deploys with no build command.

Live at: `https://zermpinos.vercel.app/`

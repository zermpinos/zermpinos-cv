# ZermpinosCV

Personal portfolio and CV site for Panagiotis Zermpinos. A static single-page site deployed on Vercel with a client-side PDF export.

---

## Architecture

All static files live under `public/` and are served by Vercel. There is no build step and no framework; the site is plain HTML, CSS, and vanilla JS.

| Path | Purpose |
|------|---------|
| `public/index.html` | Document structure: navigation, hero, experience, education, skills, and projects sections; structured data (JSON-LD) and Open Graph meta tags |
| `public/styles.css` | Full visual layer: dark theme, responsive layout, scroll progress indicator, animated cards, mobile hamburger menu |
| `public/script.js` | Scroll progress bar, smooth scrolling, active nav link highlighting via `IntersectionObserver`, hamburger menu toggle, dynamic footer year |
| `public/cv-generator.js` | Client-side one-page PDF export via jsPDF; renders header, summary, experience, education, skills, and projects sections to A4 |
| `public/jspdf.umd.min.js` | Vendored jsPDF UMD bundle; self-hosted to satisfy `script-src 'self'` CSP |
| `public/favicon.svg` | SVG favicon |
| `public/fonts/` | Self-hosted variable WOFF2 fonts (JetBrains Mono, Work Sans); eliminates the Google Fonts external dependency |
| `public/img/` | Self-hosted images: responsive portrait (160/280/560 px) and OG cover; eliminates the Cloudinary external dependency |
| `public/robots.txt` | Crawl policy; references sitemap |
| `public/sitemap.xml` | Single-URL sitemap for the canonical origin |
| `api/csp-report.js` | Vercel serverless function; receives CSP violation reports and logs them to the Vercel dashboard |
| `bin/sri.sh` | Helper script to recompute SRI hashes after any asset change |
| `vercel.json` | Deployment config: output directory, security headers, cache-control rules |

---

## Security headers

All responses carry a strict header set defined in `vercel.json`.

| Header | Value |
|--------|-------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `X-XSS-Protection` | `0` (disables the broken legacy XSS auditor) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Cross-Origin-Resource-Policy` | `same-origin` |
| `Permissions-Policy` | Denies camera, microphone, geolocation, USB, sensors, payment, Bluetooth, serial, HID, idle detection, and ad-tech APIs |
| `Content-Security-Policy` | `default-src 'none'`; scripts, styles, fonts, and images locked to `'self'`; Trusted Types enforced; violations reported to `/api/csp-report` |

All CSS and JS assets carry `integrity="sha384-..."` SRI hashes and `crossorigin="anonymous"` attributes. Hashes are recomputed with `bin/sri.sh` after any asset change.

CSS and JS assets are served with `Cache-Control: public, max-age=0, must-revalidate` so browsers always revalidate.

---

## PDF export

Clicking the CV download button calls `generateCV()` entirely in the browser with no server round-trip. jsPDF renders a single A4 page with hardcoded layout logic (margins, line heights, section titles, bullet points). The output file is saved as `Panagiotis_Zermpinos_CV.pdf`.

jsPDF is vendored locally rather than loaded from a CDN so that the `script-src 'self'` CSP does not need to be relaxed.

---

## Tech stack

**Site:** HTML · CSS · Vanilla JS (no framework, no build step)

**PDF:** jsPDF (vendored, client-side)

**Deployment:** Vercel (static + one serverless function)

---

## Deployment

Branch protection is enabled on `main`: direct pushes are blocked, commits must be signed, and linear history is enforced. The workflow is:

```bash
git checkout -b feature/my-change
# make changes, commit (signing is automatic)
git push origin feature/my-change
gh pr create --fill
gh pr merge --squash
```

After any change to a static asset, recompute SRI hashes before committing:

```bash
bash bin/sri.sh
# update the integrity="..." attributes in public/index.html
```

Live at: `https://zermpinos.vercel.app/`

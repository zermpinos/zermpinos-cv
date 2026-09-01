# ZermpinosCV

Personal portfolio and CV site for Panagiotis Zermpinos. The site root is an interactive, walkable game version of the CV; a classic scrolling CV lives at `/classic`. Deployed on Vercel with a client-side PDF export, no framework and no build step.

---

## Architecture

All static files live under `public/` and are served by Vercel. There is no build step and no framework; the site is plain HTML, CSS, and vanilla JS.

| Path | Purpose |
|------|---------|
| `public/index.html` | Site root: the interactive **walkable CV game** (canvas + HUD); carries full SEO meta, Open Graph tags, and Person JSON-LD |
| `public/classic.html` | Classic scrolling CV at `/classic`: hero, impact stats, experience, education, skills, projects, and contact; JSON-LD and Open Graph meta |
| `public/game.js` | 2D top-down game engine: rendering, follow-camera, keyboard + tap + joystick input, and the station panels |
| `public/cv-data.js` | Single source of CV content (about, experience, skills, education, projects, contact) that feeds the game panels |
| `public/explore.css` | Styling for the game/explore view: canvas stage, HUD, and panels |
| `public/styles.css` | Full visual layer: dark theme, responsive layout, scroll progress indicator, animated cards, mobile hamburger menu |
| `public/script.js` | Classic page behavior: scroll progress bar, smooth scrolling, active nav highlighting via `IntersectionObserver`, hamburger menu, dynamic footer year |
| `public/cv-generator.js` | Client-side PDF export via jsPDF in English and Greek; renders header, summary, experience, education, skills, and projects to A4 |
| `public/jspdf.umd.min.js` | Vendored jsPDF UMD bundle; self-hosted to satisfy `script-src 'self'` CSP |
| `public/favicon.svg` | SVG favicon |
| `public/fonts/` | Self-hosted variable WOFF2 fonts (JetBrains Mono, Work Sans), eliminating the Google Fonts external dependency, plus the Liberation Sans TTF subset the Greek PDF embeds |
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

Both pages carry two download buttons. Each calls `generateCV(lang)` entirely in the browser with no server round-trip. jsPDF renders A4 with hardcoded layout logic (margins, line heights, section titles, bullet points) and starts a new page when a section runs past the bottom margin. English saves as `Panagiotis_Zermpinos_CV.pdf`, Greek as `Panagiotis_Zermpinos_CV_EL.pdf`.

The built-in PDF fonts are WinAnsi and carry no Greek glyphs, so the Greek export fetches and embeds a Liberation Sans subset at generation time. jsPDF also writes its own name into the `/Producer` metadata field unconditionally, so the generator blanks that field in the finished bytes and refuses to download if any trace of the library name survives.

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
# update the integrity="..." attributes in public/index.html and public/classic.html
```

Live at: `https://zermpinos.vercel.app/`

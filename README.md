# AirShop Docs

Public documentation site for [AirShop](https://airshop.work), built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

- **URL:** https://docs.airshop.work
- **Repo:** https://github.com/jbrewlet/airshop-docs

---

## Quick Start

```bash
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

Open http://127.0.0.1:8000

**Restart the server:** Press `Ctrl+C` in the terminal to stop, then run `mkdocs serve` again. Or run `pkill -f "mkdocs serve"` in another terminal, then start `mkdocs serve`.

---

## Detailed Setup

See **[SETUP.md](SETUP.md)** for step-by-step instructions:

- Creating the GitHub repository
- Enabling GitHub Pages
- Configuring custom domain (docs.airshop.work)
- DNS records (CNAME)
- Redirecting help.airshop.work
- Troubleshooting

---

## Build

```bash
mkdocs build
```

Output is in `site/`.

---

## Deploy

Pushes to `main` trigger GitHub Actions to build and deploy to GitHub Pages.

| Step | Action |
|------|--------|
| DNS | CNAME `docs` → `jbrewlet.github.io` |
| Custom domain | Add `docs.airshop.work` in repo Settings → Pages |
| help.airshop.work | Configure redirect at DNS/hosting (see SETUP.md) |

---

## Assets

Logo and favicon are copied from the main AirShop app:

| File | Source |
|------|--------|
| `docs/assets/logo.svg` | `airshop/public/logo-dark.svg` |
| `docs/assets/favicon.svg` | `airshop/public/AirShop_Hex-Scanner-SQ.svg` |

To refresh: copy from `airshop/public/` into `docs/assets/`.

---

## Brand

- Primary: `#03366D` (AirShop Navy)
- Accent: `#FF5918` (AirShop Orange)
- Fonts: Inter (body), JetBrains Mono (code)
- Dark mode only

---

## Feedback Widget

To enable upvote/downvote feedback, uncomment the `analytics.feedback` block in `mkdocs.yml` and add your Google Analytics property ID.

# AirShop Docs — Setup Instructions

Step-by-step guide to create the repository, configure GitHub Pages, and deploy the docs site.

---

## Prerequisites

- GitHub account (jbrewlet)
- Access to DNS for `airshop.work`
- Python 3.x installed locally (for development)

---

## 1. Create the GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `airshop-docs`
3. **Description:** `AirShop documentation and help site`
4. **Visibility:** Public (required for free GitHub Pages)
5. **Add a README file:** No (we have one)
6. **Add .gitignore:** No (we have one)
7. **Choose a license:** None (we have a proprietary LICENSE in the repo)
8. Click **Create repository**

---

## 2. Push the Local Project

From your terminal, in the `airshop-docs` directory:

```bash
cd /Users/jbrw/airshop-docs

# Initialize git (if not already)
git init

# Add the remote (replace with your actual repo URL if different)
git remote add origin https://github.com/jbrewlet/airshop-docs.git

# Add all files
git add .

# Commit (you do this when ready)
git commit -m "Initial AirShop docs site with MkDocs Material"

# Push to main
git push -u origin main
```

---

## 3. Enable GitHub Pages

1. In the repo, go to **Settings** → **Pages**
2. Under **Build and deployment**:
   - **Source:** GitHub Actions
3. Save (no further config needed — the workflow handles the rest)

---

## 4. Configure Custom Domain (docs.airshop.work)

### 4a. Add CNAME in GitHub

The workflow already writes `docs.airshop.work` to `site/CNAME` during build. After the first successful deploy, GitHub will show the custom domain option.

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `docs.airshop.work`
3. Click **Save**
4. Wait for DNS check. If it fails, add the DNS record first (see 4b).

### 4b. Add DNS Record

At your DNS provider for `airshop.work`:

| Type  | Name | Value              | TTL  |
|-------|------|--------------------|------|
| CNAME | docs | jbrewlet.github.io | 3600 |

- **Name:** `docs` (or `docs.airshop.work` depending on provider)
- **Value:** `jbrewlet.github.io`
- **TTL:** 3600 (or default)

Propagation can take a few minutes to 48 hours.

### 4c. Enforce HTTPS (Optional)

After DNS is working, in **Settings** → **Pages**, enable **Enforce HTTPS**.

---

## 5. Redirect help.airshop.work → docs.airshop.work

Options depend on your DNS/hosting setup.

### Option A: DNS Redirect (if supported)

Some providers (e.g. Cloudflare, some registrars) support redirect records:

- Create a redirect: `help.airshop.work` → `https://docs.airshop.work`

### Option B: CNAME + GitHub Pages

GitHub Pages supports one custom domain per site. To use both:

1. Keep `docs.airshop.work` as the primary custom domain.
2. Add a CNAME for `help` pointing to `jbrewlet.github.io` — both will serve the same site.
3. Or use a redirect service (e.g. Netlify Redirect, Vercel) to redirect `help` → `docs`.

### Option C: Meta Refresh (Not Recommended)

You could host a minimal HTML page that redirects, but a proper DNS/hosting redirect is better.

---

## 6. Verify Deployment

1. After pushing to `main`, open the **Actions** tab.
2. Wait for the **Deploy to GitHub Pages** workflow to finish.
3. Visit:
   - `https://jbrewlet.github.io/airshop-docs/` (before custom domain)
   - `https://docs.airshop.work` (after DNS is set)

---

## 7. Local Development

```bash
cd /Users/jbrw/airshop-docs

# Create virtual environment
python3 -m venv .venv

# Activate (macOS/Linux)
source .venv/bin/activate

# Activate (Windows)
.venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Serve locally
mkdocs serve
```

Open **http://127.0.0.1:8000**

---

## 8. Project Structure Reference

```
airshop-docs/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Builds and deploys to Pages
├── docs/
│   ├── assets/
│   │   ├── logo.svg        # From airshop/public/logo-dark.svg
│   │   └── favicon.svg     # From airshop/public/AirShop_Hex-Scanner-SQ.svg
│   ├── stylesheets/
│   │   └── extra.css       # AirShop brand overrides
│   ├── getting-started/
│   ├── guides/
│   └── index.md
├── mkdocs.yml              # Site config
├── requirements.txt
├── README.md
├── SETUP.md                # This file
├── LICENSE                 # Proprietary, all rights reserved
└── .gitignore
```

---

## 9. Assets Source

Assets are copied from the main AirShop app:

| Docs Asset   | Source in airshop                    |
|-------------|---------------------------------------|
| `logo.svg`  | `public/logo-dark.svg` (white on dark) |
| `favicon.svg` | `public/AirShop_Hex-Scanner-SQ.svg` |

To refresh assets, copy the latest files from `/Users/jbrw/airshop/public/` into `docs/assets/`.

---

## 10. Feedback Widget (Optional)

To enable upvote/downvote feedback:

1. Create a Google Analytics 4 property.
2. In `mkdocs.yml`, uncomment the `analytics.feedback` block under `extra:`.
3. Replace `G-XXXXXXXXXX` with your GA4 Measurement ID.
4. Commit and push.

---

## Troubleshooting

| Issue | Check |
|-------|--------|
| 404 on custom domain | DNS propagation, CNAME correctness |
| Build fails | Check Actions logs, `mkdocs build --strict` locally |
| Wrong assets | Ensure `docs/assets/` has logo.svg and favicon.svg |
| Styles not applied | Confirm `docs/stylesheets/extra.css` exists and is correct |

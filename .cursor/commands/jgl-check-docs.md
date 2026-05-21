
# Check Docs

Run the docs-site verification suite for this MkDocs Material repo. Report what
passed, what failed, and what was skipped because a tool was not installed.

A silent skip is worse than a failure.

## What this repo is

- **Stack:** MkDocs Material, Python, Markdown under `docs/`
- **Build:** `make build` or `mkdocs build --strict` (use `.venv/bin/mkdocs` if present)
- **CI:** `.github/workflows/deploy.yml` runs `mkdocs build --strict` on push to `main`

There is no unit-test suite. Do not look for `npm test` or pytest tests unless the
user added them later.

## 1. Run the automated checker

From the repo root:

```bash
make check-docs
```

If `make` is unavailable:

```bash
python3 scripts/check-docs.py
```

That script runs, in order:

1. `mkdocs build --strict` — catches MkDocs warnings, many broken refs, plugin issues
2. Nav paths in `mkdocs.yml` — every listed `.md` and `extra_css` / `extra_javascript` file exists
3. Local Markdown links and images — relative `](path)` targets under `docs/` that are missing on disk
4. Secret scan — obvious API keys / private keys in docs and config (not normal prose about secrets)
5. `pip-audit` — optional; report `⊘ SKIPPED` if not installed, do not pretend it passed

If the script fails, show the relevant lines from its output. Do not stop after the
first failure inside the script — the script already runs everything; your job is to
summarize and help fix.

## 2. Manual checks (when editing content)

After substantive doc changes, also scan for:

- **Nav drift** — new page added under `docs/` but not listed in `mkdocs.yml` `nav:` (orphan pages are easy to miss; not a build failure unless unlinked)
- **External links** — script does not verify HTTP URLs; spot-check important outbound links if you changed them
- **Screenshots** — prefer `docs/assets/` or page-local `assets/`; confirm new images are committed
- **Internal product URLs** — links to `airshop.work` are intentional; do not "fix" them to relative paths unless asked

## 3. Report format

Use a compact summary:

```
✓ MkDocs build (--strict)
✓ Nav and configured assets
✗ Local links — docs/foo.md: broken link -> ../missing.png
✓ Secret scan
⊘ Dependency audit — pip-audit not installed (pip install pip-audit)
```

Markers: `✓` passed, `✗` failed, `⊘` skipped or N/A (always include reason).

If anything failed, show the fix in plain language (e.g. "add `docs/new-page.md` to
`nav:` under Setup" or "file `docs/assets/foo.png` is missing").

## What NOT to do

- Do not run `/jgl-review-testing` or `/jgl-setup-testing` unless the user explicitly wants a test framework added.
- Do not rewrite unrelated Markdown style or copy while fixing check failures.
- Do not commit or push unless the user asks.

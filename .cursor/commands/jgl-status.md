
# Status

Short, scannable session checkpoint for this docs repo. Read-only — **do not
change any files.**

## 1. What changed

Run `git status` and `git diff --stat`. Group into:

- **Committed locally, not pushed** — `git log @{u}..HEAD --oneline`
- **Staged**
- **Unstaged** — especially `docs/**/*.md`, `docs/assets/**`, `mkdocs.yml`, `overrides/**`

Show counts; name files when there are only a few.

## 2. What's still open

Look for:

- **Docs check not run** — if Markdown or `mkdocs.yml` changed, suggest `make check-docs` or `/jgl-check-docs`
- **New pages without nav** — files under `docs/` not referenced in `mkdocs.yml` `nav:`
- **TODO / FIXME** added in this session (`git diff`)
- **Feature branch, no PR** — mention branch name if not `main`

If nothing applies, say "Nothing flagged."

## 3. Risky uncommitted items

- `.env`, `*.pem`, `credentials*`, tokens in config
- Large binary assets accidentally added outside `docs/assets/`
- Edits only in `.cache/` (should stay gitignored)

## 4. Report

Under 20 lines. End with 2–3 optional next steps (e.g. `/jgl-check-docs`, `/jgl-commit`, `/jgl-push`).

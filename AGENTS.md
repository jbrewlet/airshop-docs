# AirShop Docs — agent notes

Static documentation site: **MkDocs Material**, Markdown in `docs/`, deployed to
GitHub Pages at `docs.airshop.work`.

## Commands

| Task | Command |
|------|---------|
| Local preview | `make serve` or `./serve.sh` |
| Production build | `make build` or `mkdocs build --strict` |
| Pre-commit checks | `make check-docs` or `/jgl-check-docs` |

## Cursor skills (slash commands)

| Skill | Use when |
|-------|----------|
| `/jgl-check-docs` | Before commit — build, nav paths, local links, secret scan |
| `/jgl-check` | Quick wrapper; runs docs checks for this repo |
| `/jgl-status` | Session checkpoint — what changed, what's risky |
| `/jgl-commit` | Stage and commit (never pushes) |
| `/jgl-push` | Push to remote (confirms before pushing `main`) |

This repo does not use `/jgl-review-testing`, `/jgl-setup-testing`, or
`/jgl-review-code` unless you add application code and tests later.

## Principles

- Run `check-docs` after editing Markdown, `mkdocs.yml`, or theme overrides.
- Add new pages to `nav:` in `mkdocs.yml`, not only as files on disk.
- Never commit secrets, `.env`, `site/`, or `.cache/`.
- Commit and push are separate; pushing `main` deploys the live docs site.

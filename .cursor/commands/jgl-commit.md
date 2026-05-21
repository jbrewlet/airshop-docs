
# Commit

Stage relevant changes and write a meaningful commit message. **Does not push.**
Use `/jgl-push` separately.

## Before committing

If the change touched `docs/`, `mkdocs.yml`, `overrides/`, or `layouts/`, run
`make check-docs` first (or `/jgl-check-docs`). Do not commit if the docs build
or link check failed unless the user explicitly overrides.

## 1. Inspect

`git status` and `git diff`. If nothing to commit, stop.

## 2. Stage

Stage specific paths — not `git add .` unless the user insists.

**Never stage:** `.env`, `.venv/`, `site/`, `.cache/`, secrets, credential files.

## 3. Message

Short subject: what changed and why. Examples:

- `add stripe troubleshooting section to setup docs`
- `fix broken screenshot path on quote follow-ups page`
- `reorder nav: move Quick Start under Setup`

## 4. Commit

Use a HEREDOC for the message. Do not push. Do not use `--no-verify`.

## 5. Report

```
Committed locally: "<subject>"
N files changed.

Push when ready: /jgl-push
```


# Check

Lightweight health check for this **MkDocs docs repo**. For doc-specific gates
(build, links, images, secrets), use **`/jgl-check-docs`** — that is the main
verification skill here.

## Run order

1. **`/jgl-check-docs`** (or `make check-docs`) — always run this first.
2. **Git hygiene** — quick `git status`; flag unstaged `.env` or credential-like
   files if present (this repo should not have them).

## Optional (only if relevant)

| Check | When |
|-------|------|
| `pip-audit` | Already part of `check-docs`; do not duplicate |
| Type check / `npm test` | N/A — no TypeScript app or test suite in this repo |

## Report

Summarize `check-docs` results using `✓` / `✗` / `⊘`. If `check-docs` passed and
git is clean, say the repo is in good shape for a commit or push.

Do not invent failures. Do not skip reporting a failed or skipped line from
`check-docs`.

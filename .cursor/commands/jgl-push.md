
# Push

Push committed changes to the remote. Separate from `/jgl-commit` so publishing
is explicit (triggers GitHub Pages deploy on `main`).

## 1. Inspect

`git status` and `git log @{u}..HEAD --oneline`. If nothing ahead of remote, stop.

## 2. Branch

- **Feature branch:** `git push -u origin <branch>` if needed, else `git push`
- **`main`:** Stop and confirm before pushing — deploying docs to production:

```
You're about to push N commit(s) to origin/main.
This repo deploys to docs.airshop.work via GitHub Pages.

Continue? (yes/no)
```

Wait for explicit yes on `main`. Do not force-push.

## 3. Push

On rejection (non-fast-forward), suggest `git pull --rebase` — never `--force`
unless the user explicitly requests it and understands the risk.

## 4. Report

Commits pushed, branch name, and GitHub URL if known from `git remote get-url origin`.

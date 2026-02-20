#!/bin/sh
# Kill any existing mkdocs, rebuild, and serve with full watch (docs + overrides + theme)
# Run from project root: ./serve.sh
# NO_MKDOCS_2_WARNING=1 silences the MkDocs 2.0 incompatibility notice (we're pinned to 1.x)
pkill -f "mkdocs serve" 2>/dev/null
sleep 1
cd "$(dirname "$0")"
export NO_MKDOCS_2_WARNING=1

MKDOCS="mkdocs"
if [ -f .venv/bin/mkdocs ]; then
  MKDOCS=".venv/bin/mkdocs"
fi

"$MKDOCS" build
exec "$MKDOCS" serve --dev-addr 127.0.0.1:8000 --livereload --watch-theme --watch overrides --watch docs --dirty

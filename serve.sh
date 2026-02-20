#!/bin/sh
# Kill any existing mkdocs, rebuild, and serve with full watch (docs + overrides + theme)
# NO_MKDOCS_2_WARNING=1 silences the MkDocs 2.0 incompatibility notice (we're pinned to 1.x)
pkill -f "mkdocs serve" 2>/dev/null
sleep 1
cd "$(dirname "$0")"
export NO_MKDOCS_2_WARNING=1
mkdocs build
exec mkdocs serve --watch-theme

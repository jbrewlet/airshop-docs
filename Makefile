.PHONY: serve build check-docs

serve:
	./serve.sh

build:
	@if [ -f .venv/bin/mkdocs ]; then .venv/bin/mkdocs build; else mkdocs build; fi

check-docs:
	@python3 scripts/check-docs.py

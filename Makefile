.PHONY: serve build

serve:
	./serve.sh

build:
	@if [ -f .venv/bin/mkdocs ]; then .venv/bin/mkdocs build; else mkdocs build; fi

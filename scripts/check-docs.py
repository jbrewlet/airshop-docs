#!/usr/bin/env python3
"""Pre-flight checks for the AirShop MkDocs docs site.

Run from repo root: python3 scripts/check-docs.py
Or: make check-docs
"""

from __future__ import annotations

import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
MKDOCS = ROOT / "mkdocs.yml"

# Obvious secret material — not prose like "secret keys" in docs text
SECRET_PATTERNS = [
    (r"sk_live_[a-zA-Z0-9]{20,}", "Stripe live secret key"),
    (r"sk_test_[a-zA-Z0-9]{20,}", "Stripe test secret key"),
    (r"rk_live_[a-zA-Z0-9]{20,}", "Stripe restricted key"),
    (r"ghp_[a-zA-Z0-9]{36,}", "GitHub personal access token"),
    (r"gho_[a-zA-Z0-9]{36,}", "GitHub OAuth token"),
    (r"xox[baprs]-[a-zA-Z0-9-]{10,}", "Slack token"),
    (r"AKIA[0-9A-Z]{16}", "AWS access key id"),
    (r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----", "Private key block"),
]

LINK_RE = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")
NAV_MD_RE = re.compile(r":\s*([\w./-]+\.md)\s*$")
EXTRA_ASSET_RE = re.compile(r"^\s*-\s+([\w./-]+\.(?:css|js))\s*$", re.MULTILINE)


def mkdocs_bin() -> str:
    venv = ROOT / ".venv" / "bin" / "mkdocs"
    if venv.is_file():
        return str(venv)
    return "mkdocs"


def run_build() -> tuple[bool, str]:
    env = {**os.environ, "NO_MKDOCS_2_WARNING": "1"}
    result = subprocess.run(
        [mkdocs_bin(), "build", "--strict"],
        cwd=ROOT,
        env=env,
        capture_output=True,
        text=True,
    )
    out = (result.stdout or "") + (result.stderr or "")
    return result.returncode == 0, out.strip() or "(no output)"


def nav_paths() -> list[str]:
    text = MKDOCS.read_text(encoding="utf-8")
    paths = NAV_MD_RE.findall(text)
    extras = EXTRA_ASSET_RE.findall(text)
    for line in text.splitlines():
        if line.strip().startswith("- ") and ".md" in line and ":" not in line:
            m = re.search(r"([\w./-]+\.md)\s*$", line)
            if m:
                paths.append(m.group(1))
    return sorted(set(paths + extras))


def check_nav_and_assets() -> list[str]:
    errors: list[str] = []
    for rel in nav_paths():
        if rel.endswith(".md"):
            path = DOCS / rel
        else:
            path = DOCS / rel
        if not path.is_file():
            errors.append(f"nav/config references missing file: {rel}")
    return errors


def is_external(url: str) -> bool:
    u = url.strip()
    return (
        u.startswith("http://")
        or u.startswith("https://")
        or u.startswith("mailto:")
        or u.startswith("#")
        or u.startswith("data:")
    )


def resolve_link(source: Path, target: str) -> Path | None:
    t = target.strip().split("#")[0].split("?")[0]
    if not t or is_external(t):
        return None
    if t.startswith("/"):
        return DOCS / t.lstrip("/")
    return (source.parent / t).resolve()


def check_markdown_links() -> list[str]:
    errors: list[str] = []
    for md in DOCS.rglob("*.md"):
        text = md.read_text(encoding="utf-8", errors="replace")
        for match in LINK_RE.finditer(text):
            raw = match.group(1).strip()
            if is_external(raw):
                continue
            resolved = resolve_link(md, raw)
            if resolved is None:
                continue
            if not resolved.is_file():
                rel = md.relative_to(ROOT)
                errors.append(f"{rel}: broken link -> {raw}")
    return errors


def check_secrets() -> list[str]:
    findings: list[str] = []
    for path in [MKDOCS, *DOCS.rglob("*.md"), *DOCS.rglob("*.js"), *DOCS.rglob("*.css")]:
        if ".cache" in path.parts:
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        for pattern, label in SECRET_PATTERNS:
            if re.search(pattern, text):
                findings.append(f"{path.relative_to(ROOT)}: possible {label}")
    return findings


def run_pip_audit() -> tuple[str, str]:
    try:
        result = subprocess.run(
            ["pip-audit", "-r", str(ROOT / "requirements.txt")],
            cwd=ROOT,
            capture_output=True,
            text=True,
        )
    except FileNotFoundError:
        return "skip", "pip-audit not installed (pip install pip-audit)"
    out = (result.stdout or "") + (result.stderr or "")
    if result.returncode == 0:
        return "pass", out.strip() or "0 vulnerabilities"
    return "fail", out.strip() or "pip-audit failed"


def main() -> int:
    print("Docs check — AirShop MkDocs\n")

    failed = False

    print("1. MkDocs build (--strict)")
    ok, out = run_build()
    if ok:
        print("   ✓ build passed")
    else:
        failed = True
        print("   ✗ build failed")
        print(out)

    print("\n2. Nav and configured assets")
    nav_errors = check_nav_and_assets()
    if nav_errors:
        failed = True
        for e in nav_errors:
            print(f"   ✗ {e}")
    else:
        print("   ✓ all nav paths exist")

    print("\n3. Local markdown links and images")
    link_errors = check_markdown_links()
    if link_errors:
        failed = True
        for e in link_errors[:30]:
            print(f"   ✗ {e}")
        if len(link_errors) > 30:
            print(f"   … and {len(link_errors) - 30} more")
    else:
        print("   ✓ no broken local links found")

    print("\n4. Secret scan (docs + config)")
    secret_hits = check_secrets()
    if secret_hits:
        failed = True
        for h in secret_hits:
            print(f"   ✗ {h}")
    else:
        print("   ✓ no obvious secrets in tracked content")

    print("\n5. Dependency audit")
    status, detail = run_pip_audit()
    if status == "pass":
        print(f"   ✓ {detail.splitlines()[0] if detail else 'ok'}")
    elif status == "skip":
        print(f"   ⊘ SKIPPED — {detail}")
    else:
        failed = True
        print("   ✗ vulnerabilities found")
        print(detail)

    print()
    if failed:
        print("Result: FAILED — fix the items above before committing.")
        return 1
    print("Result: PASSED")
    return 0


if __name__ == "__main__":
    sys.exit(main())

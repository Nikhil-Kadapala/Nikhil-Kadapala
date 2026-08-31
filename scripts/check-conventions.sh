#!/usr/bin/env bash
set -euo pipefail

ROOT="${ROOT:-$(git rev-parse --show-toplevel 2>/dev/null || true)}"
if [[ -z "${ROOT}" ]]; then
  echo "check-conventions: set ROOT or run inside a git repo" >&2
  exit 1
fi
cd "$ROOT"

fail() {
  echo "check-conventions: $*" >&2
  exit 1
}

[[ -d src ]] || fail "missing src/"

report_if_match() {
  local rel=$1
  local label=$2
  shift 2
  local hits
  if hits=$(grep -nE "$@" -- "$rel" 2>/dev/null); then
    fail "${label} in ${rel}"$'\n'"${hits}"
  fi
}

report_if_fixed() {
  local rel=$1
  local label=$2
  local needle=$3
  local hits
  if hits=$(grep -nF -- "$needle" "$rel" 2>/dev/null); then
    fail "${label} in ${rel}"$'\n'"${hits}"
  fi
}

while IFS= read -r -d '' file; do
  rel=${file#./}
  report_if_match "$rel" "raw hex" '#[0-9A-Fa-f]{3,8}'
  report_if_match "$rel" "text-[Npx]" 'text-\[[0-9]+px\]'
  report_if_fixed "$rel" "className template string" 'className={`'
  report_if_match "$rel" "className string concat" 'className=\{[^}]*\+'
  report_if_fixed "$rel" "cn() template string" 'cn(`'
done < <(find src -name '*.tsx' -print0)

[[ -d src/app ]] || fail "missing src/app/"

while IFS= read -r -d '' file; do
  rel=${file#./}
  if ! grep -qE 'export[[:space:]]+(const[[:space:]]+metadata|async[[:space:]]+function[[:space:]]+generateMetadata|function[[:space:]]+generateMetadata)' "$rel"; then
    fail "missing metadata or generateMetadata in ${rel}"
  fi
  if ! grep -qE 'description[[:space:]]*:' "$rel"; then
    fail "missing description in ${rel}"
  fi
  if grep -qE 'description[[:space:]]*:[[:space:]]*(["'\''`])[[:space:]]*\1' "$rel"; then
    fail "empty or whitespace-only description in ${rel}"
  fi
done < <(find src/app -name 'page.tsx' -print0)

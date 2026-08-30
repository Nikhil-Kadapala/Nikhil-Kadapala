#!/usr/bin/env bash
set -euo pipefail

ROOT="${ROOT:-$(git rev-parse --show-toplevel 2>/dev/null || true)}"
if [[ -z "${ROOT}" ]]; then
  echo "check-agent-index: set ROOT or run inside a git repo" >&2
  exit 1
fi
cd "$ROOT"

fail() {
  echo "check-agent-index: $*" >&2
  exit 1
}

ALLOWLIST=(
  docs/stack.md
  docs/architecture.md
  docs/authoring.md
  DESIGN.md
  .agents/skills/writing/SKILL.md
  artifacts/codebase-foundation/plan.md
  artifacts/fern-template-adoption/plan.mdx
)

[[ -f AGENTS.md ]] || fail "missing AGENTS.md"

lines=$(awk 'END { print NR + 0 }' AGENTS.md)
if (( lines > 50 )); then
  fail "AGENTS.md has ${lines} lines (budget is 50)"
fi

for path in "${ALLOWLIST[@]}"; do
  [[ -e "$path" ]] || fail "missing $path"
  grep -F -q -- "$path" AGENTS.md || fail "AGENTS.md does not mention $path"
done

[[ -d docs ]] || fail "missing docs/ directory"

allowlisted() {
  local rel=$1
  local p
  for p in "${ALLOWLIST[@]}"; do
    if [[ "$rel" == "$p" ]]; then
      return 0
    fi
  done
  return 1
}

while IFS= read -r -d '' file; do
  rel=${file#./}
  allowlisted "$rel" || fail "extra docs file $rel"
done < <(find docs \( -name '*.md' -o -name '*.mdx' \) -print0)

if [[ -L CLAUDE.md ]]; then
  fail "CLAUDE.md must be a regular file, not a symlink"
fi
[[ -f CLAUDE.md ]] || fail "missing CLAUDE.md"

claude_lines=$(awk 'END { print NR + 0 }' CLAUDE.md)
if (( claude_lines != 1 )); then
  fail "CLAUDE.md must be exactly one line (got ${claude_lines})"
fi
claude_line=$(awk 'NR == 1 { print }' CLAUDE.md | tr -d '\r')
if [[ "$claude_line" != "@AGENTS.md" ]]; then
  fail "CLAUDE.md must be exactly @AGENTS.md"
fi

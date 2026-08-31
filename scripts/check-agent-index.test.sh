#!/usr/bin/env bash
set -euo pipefail

HERE=$(cd "$(dirname "$0")/.." && pwd)
CHECK="$HERE/scripts/check-agent-index.sh"

expect_fail() {
  local name=$1
  shift
  if ROOT="$1" bash "$CHECK" >/dev/null 2>&1; then
    echo "expected fail: $name" >&2
    exit 1
  fi
}

expect_pass() {
  local name=$1
  shift
  if ! ROOT="$1" bash "$CHECK"; then
    echo "expected pass: $name" >&2
    exit 1
  fi
}

write_valid_agents() {
  local dest=$1
  cat >"$dest" <<'EOF'
# Agent notes
Personal site. Tokens: DESIGN.md.
| x | `docs/authoring.md` |
| x | `docs/architecture.md` |
| x | `.agents/skills/writing/SKILL.md` |
| x | `artifacts/codebase-foundation/plan.md` |
| x | `artifacts/fern-template-adoption/plan.mdx` |
| x | `docs/stack.md` |
EOF
}

seed_tree() {
  local d=$1
  mkdir -p \
    "$d/docs" \
    "$d/.agents/skills/writing" \
    "$d/artifacts/codebase-foundation" \
    "$d/artifacts/fern-template-adoption"
  : >"$d/DESIGN.md"
  : >"$d/.agents/skills/writing/SKILL.md"
  : >"$d/artifacts/codebase-foundation/plan.md"
  : >"$d/artifacts/fern-template-adoption/plan.mdx"
  printf '@AGENTS.md\n' >"$d/CLAUDE.md"
  write_valid_agents "$d/AGENTS.md"
  printf '# stack\n' >"$d/docs/stack.md"
  printf '# architecture\n' >"$d/docs/architecture.md"
  printf '# authoring\n' >"$d/docs/authoring.md"
}

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

# live-shaped fixture
seed_tree "$TMP/ok"
expect_pass "valid tree" "$TMP/ok"

# 51 lines
seed_tree "$TMP/fat"
i=1
while (( i <= 45 )); do
  echo "" >>"$TMP/fat/AGENTS.md"
  i=$((i + 1))
done
expect_fail "over budget" "$TMP/fat"

# missing allowlist path
seed_tree "$TMP/missing"
rm -f "$TMP/missing/DESIGN.md"
expect_fail "missing DESIGN.md" "$TMP/missing"

# extra docs md
seed_tree "$TMP/extra"
printf '# extra\n' >"$TMP/extra/docs/foo.md"
expect_fail "extra docs/foo.md" "$TMP/extra"

# nested extra
seed_tree "$TMP/nested"
mkdir -p "$TMP/nested/docs/nested"
printf '# extra\n' >"$TMP/nested/docs/nested/x.md"
expect_fail "nested extra md" "$TMP/nested"

# extra mdx
seed_tree "$TMP/mdx"
printf '# extra\n' >"$TMP/mdx/docs/extra.mdx"
expect_fail "extra mdx" "$TMP/mdx"

# CLAUDE symlink
seed_tree "$TMP/symlink"
rm -f "$TMP/symlink/CLAUDE.md"
ln -s AGENTS.md "$TMP/symlink/CLAUDE.md"
expect_fail "CLAUDE.md symlink" "$TMP/symlink"

# CLAUDE extra lines
seed_tree "$TMP/claude-extra"
printf '@AGENTS.md\nextra\n' >"$TMP/claude-extra/CLAUDE.md"
expect_fail "CLAUDE.md extra line" "$TMP/claude-extra"

# lorem AGENTS without paths
seed_tree "$TMP/lorem"
i=1
: >"$TMP/lorem/AGENTS.md"
while (( i <= 20 )); do
  echo "lorem ipsum $i" >>"$TMP/lorem/AGENTS.md"
  i=$((i + 1))
done
expect_fail "lorem AGENTS.md" "$TMP/lorem"

# missing CLAUDE.md
seed_tree "$TMP/no-claude"
rm -f "$TMP/no-claude/CLAUDE.md"
expect_fail "missing CLAUDE.md" "$TMP/no-claude"

echo "check-agent-index.test.sh: ok"

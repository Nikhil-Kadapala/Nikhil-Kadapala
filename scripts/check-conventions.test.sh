#!/usr/bin/env bash
set -euo pipefail

HERE=$(cd "$(dirname "$0")/.." && pwd)
CHECK="$HERE/scripts/check-conventions.sh"

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

write_ok_page() {
  local dest=$1
  mkdir -p "$(dirname "$dest")"
  cat >"$dest" <<'EOF'
export const metadata = { title: "Home", description: "A real description." };
export default function Page() {
  return <div className="p-4" />;
}
EOF
}

seed_ok() {
  local d=$1
  mkdir -p "$d/src/app" "$d/src/components" "$d/src/lib"
  write_ok_page "$d/src/app/page.tsx"
}

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

seed_ok "$TMP/ok"
expect_pass "clean tree" "$TMP/ok"

seed_ok "$TMP/hex"
printf '%s\n' 'export function X() { return <div style={{ color: "#fff" }} />; }' >"$TMP/hex/src/components/Hex.tsx"
expect_fail "raw hex" "$TMP/hex"

seed_ok "$TMP/hex-comment"
printf '%s\n' '// brand #0a0a0a' 'export function X() { return <div className="p-4" />; }' >"$TMP/hex-comment/src/components/Commented.tsx"
expect_fail "hex in comment" "$TMP/hex-comment"

seed_ok "$TMP/px"
printf '%s\n' 'export function X() { return <p className="text-[12px]" />; }' >"$TMP/px/src/components/Px.tsx"
expect_fail "text-[Npx]" "$TMP/px"

seed_ok "$TMP/tpl"
printf '%s\n' 'export function X({ n }: { n: string }) { return <div className={`p-4 ${n}`} />; }' >"$TMP/tpl/src/components/Tpl.tsx"
expect_fail "className template" "$TMP/tpl"

seed_ok "$TMP/concat"
printf '%s\n' 'export function X() { return <div className={"p-4 " + "mt-2"} />; }' >"$TMP/concat/src/components/Concat.tsx"
expect_fail "className concat" "$TMP/concat"

seed_ok "$TMP/cn"
printf '%s\n' 'export function X({ n }: { n: string }) { return <div className={cn(`p-4 ${n}`)} />; }' >"$TMP/cn/src/components/Cn.tsx"
expect_fail "cn template" "$TMP/cn"

seed_ok "$TMP/ts-hex"
printf '%s\n' 'export const color = "#020202";' >"$TMP/ts-hex/src/lib/theme.ts"
expect_pass "hex only in .ts" "$TMP/ts-hex"

seed_ok "$TMP/no-meta"
printf '%s\n' 'export default function Page() { return <div className="p-4" />; }' >"$TMP/no-meta/src/app/page.tsx"
expect_fail "missing metadata" "$TMP/no-meta"

seed_ok "$TMP/title-only"
printf '%s\n' 'export const metadata = { title: "About" }; export default function Page() { return <div />; }' >"$TMP/title-only/src/app/page.tsx"
expect_fail "title only" "$TMP/title-only"

seed_ok "$TMP/empty"
printf '%s\n' 'export const metadata = { title: "About", description: "" }; export default function Page() { return <div />; }' >"$TMP/empty/src/app/page.tsx"
expect_fail "empty description" "$TMP/empty"

seed_ok "$TMP/ws"
printf '%s\n' 'export const metadata = { title: "About", description: "   " }; export default function Page() { return <div />; }' >"$TMP/ws/src/app/page.tsx"
expect_fail "whitespace description" "$TMP/ws"

seed_ok "$TMP/gen"
mkdir -p "$TMP/gen/src/app/item"
cat >"$TMP/gen/src/app/item/page.tsx" <<'EOF'
export function generateMetadata() {
  if (false) return { title: "Not found" };
  return { title: "Item", description: "From generateMetadata." };
}
export default function Page() {
  return <div className="p-4" />;
}
EOF
expect_pass "generateMetadata with description" "$TMP/gen"

echo "check-conventions.test.sh: ok"

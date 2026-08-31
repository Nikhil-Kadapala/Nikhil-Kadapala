# Stack and commands

How this repo is run, what may be added, and how agents load instructions.

## Commands

```
bun install
bun dev
bun run typecheck
bun run lint
bun run build
bun run check:agent-index
bun run check:conventions
```

`check:agent-index` runs the fixture tests, then the live index check. `check:conventions` runs fixture tests, then scans `src/**/*.tsx` (not `.ts`) for hex / `text-[Npx]` / string-built classNames, and requires a non-empty `description` on every `src/app/**/page.tsx`. GitHub Actions runs both checks before `bun install`.

## Approved stack

bun + Next 15 App Router + Tailwind v4 + shadcn/Radix + gray-matter. Do not add a dependency without asking: what it does that this stack does not, and why a small in-repo solution would not work.

## Changelogs

Root `CHANGELOG.md`. Foundation: `artifacts/codebase-foundation/CHANGELOG.md`. Fern: `artifacts/fern-template-adoption/CHANGELOG.md`. Live wave status lives in those artifact plans, not in `AGENTS.md`.

## How agents load this repo

- **AGENTS.md** (this repo) is a short resolver. Cursor and other AGENTS.md readers always apply it.
- **CLAUDE.md** is a one-line `@AGENTS.md` import for Claude Code. It must be a regular file, not a symlink of the `AGENTS.md` body. Cursor may also always-apply `CLAUDE.md`; if it expands the import *and* loads `AGENTS.md`, the body can appear twice. Keep the one-liner anyway. Do not restore the symlink.
- **User-level AGENTS.md** (for example a global ResAlign contract) is not overridden by this file. Cursor can still inject that larger always-on file. This project's index only controls the repo copy.
- Skills under `.agents/skills/` load when the task matches. Writing voice is `.agents/skills/writing/voice-nikhil.md`, reached from `.agents/skills/writing/SKILL.md`.

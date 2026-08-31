# Authoring

Tokens, classNames, and where UI files live. Read `DESIGN.md` first for measured values.

## Tokens once

Colors, radii, and type sizes in UI must use theme tokens from `src/app/globals.css` (`@theme inline`). Values are documented in `DESIGN.md`.

If a new value is genuinely needed, add it to `src/app/globals.css` once and reference the token everywhere else. No one-off hex, rem, or arbitrary Tailwind values in components. CI fails `scripts/check-conventions.sh` if a `.tsx` file (not `.ts`) uses raw hex, `text-[Npx]`, or a string-built className.

## `cn()` only

`cn()` from `src/lib/utils.ts` is the only way to build conditional classNames. No template-string class assembly.

```tsx
<div className={cn("p-4", active && "bg-muted", className)}>
```

## Component folders (D10)

| Location | Owns |
|---|---|
| `src/components/ui/` | shadcn primitives only, kebab-case (`button`, `sheet`) |
| `src/components/home/` | `/` |
| `src/components/writing/` | `/writing` indexes (list + type filters) |
| `src/components/article/` | `/writing/[slug]` essay chrome (TOC, MDX blocks, copy button, MDX map) |
| `src/components/research/` | `/research` catalog + home research viz |
| `src/components/projects/` | `/projects` catalog cards |
| `src/components/` root | Site chrome only: `SiteHeader`, `SiteFooter`, `icons` |

New feature UI goes in the matching surface folder. `ui/` stays primitives. Root stays chrome. PascalCase feature files (`WritingIndex.tsx`, `ProjectCard.tsx`). kebab-case only under `ui/`. One vocabulary (`Dialog`, never `Modal`).

# Authoring

Tokens, classNames, and where UI files live. Read `DESIGN.md` first for measured values.

## Tokens once

Colors, radii, and type sizes in UI must use theme tokens from `src/app/globals.css` (`@theme inline`). Values are documented in `DESIGN.md`.

If a new value is genuinely needed, add it to `src/app/globals.css` once (`:root` or `@theme inline`) and reference the token everywhere else. No one-off hex, rem, or arbitrary Tailwind values in components. CI fails `scripts/check-conventions.sh` if a `.tsx` file (not `.ts`) uses raw hex, `text-[Npx]`, or a string-built className.

Chrome layout, scroll motion, and hover belong on `Navbar` / `Footer` (Tailwind + React). `globals.css` keeps tokens, page resets, and shared utilities (`.wrap`, `.mono`). Do not add `.site-header`-style overrides there.

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
| `src/components/` root | Site chrome only: `Navbar`, `Footer`, `icons` |

New feature UI goes in the matching surface folder. `ui/` stays primitives. Root stays chrome. PascalCase feature files (`WritingIndex.tsx`, `ProjectCard.tsx`). kebab-case only under `ui/`. One vocabulary (`Dialog`, never `Modal`).

## Always use shadcn

If shadcn already ships the primitive, add it with the CLI and compose it. Do not invent a parallel API (`CardLink`, `CardKicker`, custom `.card` CSS). Site behavior (href, featured lists, project metadata) lives in surface wrappers like `ProjectCard`.

```
bunx shadcn@latest add <component>
```

Import from `@/components/ui/<name>`. Map missing tokens in `@theme inline` (`--color-card`, `--color-muted-foreground`, …).

### Card

Official composition ([radix Card](https://ui.shadcn.com/docs/components/radix/card)):

```
Card
├── CardHeader
│   ├── CardTitle
│   ├── CardDescription
│   └── CardAction
├── CardContent
└── CardFooter
```

`size="default" | "sm"` sets `--card-spacing`. Wrap the whole `Card` in `Link` or `<a>` when the tile navigates. Put `cursor-pointer` on the `Card`.

### Button

Import from `@/components/ui/button`. Variants:

| `variant` | Role |
|---|---|
| `default` | Filled CTA (white fill, inverts on hover) |
| `quiet` | Outline. Rest border is `--border-strong`, same as Card |
| `ghost` | No border. Hover fill only |
| `link` | Text control. Hover uses accent |

Sizes: `default`, `sm`, `icon`. Wrap a `Link` or `<a>` with `asChild`. Every button on the site is this primitive. Do not add `.btn` CSS or a parallel button API.

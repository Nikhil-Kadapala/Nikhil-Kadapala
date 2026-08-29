# Handoff: Long-form blog/article content components

## Overview
A set of content-block components for long-form technical writing (`/writing/[slug]`, `/research/[slug]`), extending the existing Nikhil's Pursuit design system. Covers everything a technical article needs beyond plain prose: table of contents + reading progress, callouts, code blocks, figures, video/GIF embeds, third-party iframe embeds, tables, footnotes, and CTA buttons.

## About the design files
The files in this bundle are **HTML/CSS design references**, not production code to copy verbatim. `Blog Article.html` is a fully assembled sample article; `Blog Components.html` is a catalog showing every new block in isolation. The task is to **recreate these as real components in the site's Next.js/React codebase**, following the same pattern already used there: most UI is a CSS class + plain JSX (`.card`, `.artifact-row`, `.list-item` etc.), not a heavy abstraction. Where a block is genuinely new markup (not just a class), make it a small component (e.g. `<CodeBlock>`, `<Callout>`, `<Figure>`), consistent with how `components/instrument/*.jsx` and `components/catalog/*.jsx` are structured in the existing design system.

Two elements in the sample (`SiteHeader`, `Tag`, `Button`, `LinkArrow`, `ProseQuote`) already exist in the design system's component library — do not recreate them; import and use the existing ones. Everything else here (TOC rail, progress ring, callout, code block, figure/caption, video/GIF embed, iframe embed, table, footnotes) is new.

## Fidelity
**High-fidelity.** All colors, spacing, radii, and type come directly from the existing design tokens (`tokens/colors.css`, `typography.css`, `spacing.css`, `radius.css`) — nothing here is a new palette or invented scale. Recreate pixel-for-pixel using those tokens (as CSS custom properties, or via `styled-components`/CSS modules pulling the same vars — whatever the codebase's actual styling approach is).

## Screens / views

### 1. Article page (`Blog Article.html`)
**Purpose:** Full long-form article — the target shape for `/writing/[slug]` and `/research/[slug]`.
**Layout:** CSS grid, `grid-template-columns: 200px minmax(0,940px)`, `gap: 64px`, inside the standard `width:min(1224px, calc(100% - 64px))` page container, `padding: 96px 0 160px` (page-head-y top, generous bottom). Below 900px viewport width, collapses to a single column and the TOC rail is hidden.
- Left column: sticky TOC rail (`position: sticky; top: calc(76px + 40px)`).
- Right column: content — paragraphs/headings held to the 730px prose measure (`.prose-measure { max-width: 730px }`); code blocks, figures, tables, and embeds break out to the full ~940px content column (`.breakout`).

### 2. Component catalog (`Blog Components.html`)
Each new block shown standalone with a short caption underneath describing its rule (10 numbered sections, `[ 01 ]`–`[ 10 ]`, matching the design system's existing `@dsCard` numbering convention).

## Components

**Cover / banner image** — sits above the header-adjacent title block, full page-container width (1224px max), 21:9 crop, `border-radius: 12px`, one hairline border, no caption. This is the one place the system allows a photograph; for data/process-heavy pieces, prefer an instrument panel (score/trace, per `RunInspector`) instead of a stock photo, matching the design system's imagery rule.

**TOC rail** — sticky container, `.toc-list` is a plain `<ul>` with a 1px left border; each `<a>` gets `padding: 7px 0 7px 16px`, color `var(--text-muted)`, and `.active` state flips to `var(--accent)` text + left border. Sub-items (`li.sub a`) indent to `padding-left: 28px`, font-size 13px. Active heading is tracked via scroll position (IntersectionObserver or scroll-offset check against each heading's `getBoundingClientRect().top`, threshold ~140px from viewport top — see `blog-scroll.js`).

**Progress ring** — 40×40px SVG, two concentric circles (`r=17`, `stroke-width:2`): a static `var(--border)`-stroke track and an `var(--accent)`-stroke fill circle using `stroke-dasharray`/`stroke-dashoffset` against `document.scrollTop / (scrollHeight - clientHeight)`. Centered percentage label in 11px mono. Rotated -90deg so the ring fills clockwise from 12 o'clock.

**Callout** — `padding: 20px 24px`, `border-radius: 12px` (`--radius-lg`), `background: var(--surface-1)`, `border: 1px solid var(--border)`, plus a 2px left accent border (`var(--accent)` for "Note"/"Tip", `var(--border-strong)` for "Caveat"/"Warning" — never a second color, only the tone of the left rule changes). Label is 10–11px uppercase mono, `letter-spacing: .08em`. Body text 16px, `var(--text-secondary)`.

**Code block** — bordered container (`border: 1px solid var(--border)`, `border-radius: 8px` (`--radius-md`), `background: var(--surface-inset) #020202`). Header bar: filename (13px mono, `--text-secondary`) left, a "Copy" button right (bordered, uppercase 10px mono, copies the code's `textContent` to clipboard on click, shows "Copied" for ~1.4s). Code body: `padding: 20px 24px`, 13px/1.65 mono, horizontal scroll on overflow. Syntax coloring is intentionally minimal — keywords get `var(--accent)`, comments get `var(--text-faint)` italic, everything else stays `var(--text-secondary)`/`var(--text)`. Do **not** introduce a colorful syntax theme (green/blue/purple tokens) — that breaks the system's "one accent color" rule. If a real highlighter (Shiki/Prism) is wired in, constrain its theme to this same 3-value palette.

**Figure** — `<figure>` wrapping an `<img>`/`<video>` (`border-radius: 12px`, 1px border) plus a `<figcaption>`: a mono "FIG. 01"-style index tag (10px, `var(--text-faint)`) followed by a plain-sans caption sentence (13px, `var(--text-muted)`).

**Video / GIF embed** — same wrapper (`border-radius:12px`, 1px border, overflow hidden), a native `<video>` fills it. GIF-style clips add `autoplay loop muted playsinline` plus a small pill label ("GIF", frosted `rgba(2,2,2,.72)` + `blur(6px)`) top-right. Real videos use `controls` instead and drop the label.

**Iframe / third-party embed** — framed like an instrument panel: `border: 1px solid var(--border-strong)`, `border-radius: 14px` (`--radius-xl`). Header bar shows the source domain + a short description (11px mono, uppercase-ish, `--text-muted`). Body is a `16:9` `aspect-ratio` box; when nothing is connected, shows a centered placeholder ("▶ Embed preview — connect a live source") over the same 150°-diagonal near-black wash used in `RunInspector`.

**Table** — flat, no stripes: header row has a **strong** hairline underneath (`var(--border-strong)`), body rows get a regular hairline (`var(--border)`), last row has none. Header cells: 10px uppercase mono, `var(--text-muted)`. Body cells: 15px sans, `var(--text-secondary)`, `padding: 12px 16px`.

**Footnotes** — inline ref is a small mono accent superscript (`[1]`, 12px, `var(--accent)`). List sits at the article's end, `border-top: 1px solid var(--border)`, `margin-top: 80px`; each entry is a flex row with a mono `[n]` marker in `var(--text-faint)` and 13px `var(--text-secondary)` body text.

**Buttons / links** — use the design system's existing `Button` (`variant="primary"|"quiet"|"ghost"`) and `LinkArrow` components as-is; do not restyle. `Tag` (existing component) is the byline category chip.

## Interactions & behavior
- Copy button on code blocks: click → `navigator.clipboard.writeText`, button label flips to "Copied" for 1.4s, no toast.
- TOC link click: standard anchor jump (`scroll-behavior: smooth` is already global via `base.css`); active state also updates on scroll, not just click.
- Progress ring updates continuously on scroll (passive listener), no debounce needed at this scale.
- Reduced-motion: the existing global `prefers-reduced-motion` rule already kills transitions/animations site-wide; the progress ring's `stroke-dashoffset` transition (`.1s linear`) should be included in that kill-switch.

## Design tokens used
All from the existing token files — no new values introduced:
- Colors: `--bg #080808`, `--surface-1 #0f0f0f`, `--surface-2 #171717`, `--surface-3 #262626`, `--surface-inset #020202`, `--border #1f1f1f`, `--border-strong #383838`, `--text #f0f0f0`, `--text-secondary #939393`, `--text-muted #6e6e6e`, `--text-faint #424242`, `--accent #f0a35a`, `--accent-hover #f7b978`, `--accent-dim #3a2a1c`.
- Radius: `--radius-xs 4px`, `--radius-sm 6px`, `--radius-md 8px`, `--radius-lg 12px`, `--radius-xl 14px`.
- Spacing: standard 4px scale (`--space-*`), `--layout-max 1224px`, `--header-height 76px`.
- Type: `--font-sans` (TASA Orbiter), `--font-mono` (Commit Mono), `--text-prose 18px`/`--leading-prose 1.72`, `--text-mono-xs/sm/md/lg`, `--measure-prose 730px`.
- Elevation: `--shadow-panel` (used on the iframe embed's panel framing, matching `RunInspector`).

## Assets
No new assets. Reuses `assets/pursuit-mark.svg` (brand mark, header) and the existing Commit Mono font files — both already in the design system's `assets/` folder.

## Files in this bundle
- `Blog Article.html` — full sample article assembling every component together (the primary reference for layout/spacing).
- `Blog Components.html` — isolated catalog of each new component, one per numbered section.
- `blog-components.css` — all new component styles (plain CSS, ~85 rules, token-driven).
- `blog-scroll.js` — TOC scrollspy + progress ring + code-copy button logic (vanilla JS, framework-agnostic — port the logic into a hook/effect in React).

Cross-reference against the design system's own component docs for anything reused as-is: `components/core/Button.d.ts`, `Tag.d.ts`, `LinkArrow.d.ts`, `components/layout/SiteHeader.jsx`, `components/instrument/Prose.jsx` (source of `ProseQuote`).

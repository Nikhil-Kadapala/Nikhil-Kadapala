# Mastra — Design System (measured)

> Extracted from **mastra.ai** by reading the shipped CSS bundles and font payloads, not by eye.
> Mastra is a TypeScript framework for building AI agents. The brand reads **dark-first, engineered, and calm** — precision instrumentation, not a consumer app.
>
> **Method:** fetched `https://mastra.ai`, pulled every `/_next/static/**/*.css` chunk (~516 KB combined), and read the literal custom-property values and `@font-face` payloads out of it.
> **Captured:** 2026-08-23.
>
> Confidence key: **[measured]** = read verbatim from the shipped bundle. **[derived]** = computed from measured values. **[interpreted]** = judgment, tune to taste.
>
> ⚠️ **This document replaces an earlier version whose font and accent claims were wrong.** See §8 for what changed and why, so the old values don't creep back in.

---

## 1. Brand personality

**Precise · engineered · alive · restrained.**

What it is **not**: playful, rounded, pastel, gradient-heavy, or decorative. The surface is near-monochrome; the energy comes from typographic rhythm, mono detailing, and one disciplined accent — never from color noise. **[interpreted]**

- Dark canvas as the default, not an option.
- Monospace is a first-class citizen — labels, metrics, timings, tags, nav, and code.
- **Restraint at display size.** Their largest routine headline caps at 54px. The page reads confident because of spacing and detailing, not because the type shouts.

---

## 2. Color

Every Mastra neutral is a **pure grey — R = G = B**. There is no hue cast in the ramp. **[measured]**

### 2.1 Neutrals — the 90%

| Mastra token | Hex | Role |
|---|---|---|
| `--color-ds-surface-bg` | `#080808` | Page canvas **[measured]** |
| `--color-ds-surface-antigrid` | `#0f0f0f` | First elevation / grid cells **[measured]** |
| `--color-ds-surface-elevation-sm` | `#171717` | Cards, panels, code blocks **[measured]** |
| `--color-ds-surface-elevation-lg` | `#020202` | **Inset / recessed** surfaces — darker than the canvas **[measured]** |
| `--color-ds-surface-hover` | `#262626` | Hover surface **[measured]** |
| `--color-ds-surface-hover-lip` | `#2b2b2b` | Hover edge highlight **[measured]** |
| `--color-ds-border-antigrid` | `#1c1c1c` | Grid / default hairline **[measured]** |
| `--color-ds-border-elevation` | `#1a1a1a` | Border on raised surfaces **[measured]** |
| `--color-ds-main-white` | `#f0f0f0` | Primary text, headings **[measured]** |
| `--color-ds-special-gray` | `#cccccc` | High-emphasis secondary **[measured]** |
| `--color-ds-main-gray` | `#939393` | Body, descriptions **[measured]** |
| `--color-ds-dark-gray` | `#424242` | Disabled, placeholder, faint rules **[measured]** |

**The counter-intuitive part:** `#020202` is *not* the page background — it's the **deepest inset**. The canvas sits at `#080808` and surfaces rise *lighter* from there, while borders (`#1a1a1a`–`#1c1c1c`) stay *darker than the surfaces they sit on*. Panels therefore read as softly filled shapes, not as outlined wireframes. Getting this relationship backwards — light borders on dark fills — is the single easiest way to make a copy of this system look wrong.

### 2.2 Accent — the 10%

| Mastra token | Hex | Role |
|---|---|---|
| `--color-ds-green` | **`#7aff78`** | **The brand accent.** Links, active states, focus rings, key highlights **[measured]** |

Selection styling is `color: #46f488; background: #2a2a2a`. **[measured]**

Mastra leans on **inverted monochrome** for primary CTAs (white button / near-black label), so the green is an *emphasis* color, not the default button fill. **[interpreted]**

### 2.3 Extended palette (data, illustration, categorical)

| Token | Hex |
|---|---|
| `--color-ds-blue` | `#6ccdfb` |
| `--color-ds-purple` | `#b588fe` |
| `--color-ds-orange` | `#fdac53` (hover `#e0993f`) |
| `--color-ds-yellow` | `#e7e67b` |
| `--color-ds-pink` | `#ff69cc` |
| `--color-ds-red` | `#ff4758` |

All **[measured]**. These are high-lightness, moderate-chroma hues on one band — they read as instrument output against the near-black canvas, and none of them competes with the green for "this is the brand."

> **Not brand colors:** the bundle also defines `#102824`, `#1a3a35`, `#1e4d44`, `#245a50`, `#4ecdc4`, `#7fffd4`. These live **only** under the `.antigrid-debug` class — a layout-debug overlay that tints the grid so engineers can see it. Do not treat them as a teal theme. **[measured]**

### 2.4 Usage ratio

Roughly **70% canvas / 20% surfaces + neutral text / 10% accent**. If a screen feels colorful, it's wrong. **[interpreted]**

---

## 3. Typography

Three families, sharply divided by job. **[measured — from the shipped `.woff2` payloads]**

| Role | Family | Notes |
|---|---|---|
| Display / heading / UI / body | **Greed** (`GreedVF-s.p.*.woff2`) | Variable grotesque from **Displaay Type Foundry**. **Commercial — requires a license.** Has a width axis, used at `font-stretch: 108%`. |
| Code / labels / metrics / tags | **Commit Mono** (`CommitMonoMastra{500,550}_{Regular,Italic}.woff2`) | A custom-named build. Commit Mono is **free (OFL-1.1)** and on Fontsource as `@fontsource/commit-mono`. Not on Google Fonts. |
| Occasional display accent | **Orbitron** (`Orbitron-s.p.*.woff2`) | Free, on Google Fonts. Used sparingly. |

Shipped stacks:

```css
--font-sans: var(--greed), ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", …;
--font-mono: var(--commit-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, …;
```

The tension between the variable grotesque and the mono *is* the type system.

### 3.1 Type scale — all values measured

Fluid steps interpolate across a **390px → 1280px** viewport range:

```
clamp(MIN, calc(MIN + Δ * (100vw - 390px) / 890), MAX)
```

| Token | Min → Max | Weight | Stretch | Line-height |
|---|---|---|---|---|
| `--text-headline-3xl` | 36px → **68px** | 520 | 108% | 110% |
| `--text-headline-2xl` | 30px → **54px** | 520 | 108% | 110% |
| `--text-headline-xl` | 28px → **40px** | 520 | 108% | 110% |
| `--text-headline-lg` | 24px → **32px** | 520 | 108% | 110% |
| `--text-headline-md` | 20px → **24px** | 520 | 108% | 110% |
| `--text-headline-sm` | 18px → **20px** | 520 | 108% | 110% |
| `--text-headline-xs` | **17px** fixed | 520 | 108% | 110% |
| `--text-body-lg` | **22px** fixed | 400 | 100% | 136% |
| `--text-body-sm` | **14.5px** fixed | 400 | 100% | 136% |
| `text-body-xs` | 14.5px, `letter-spacing: .3625px` | 470 | 100% | normal |
| `text-body-bold` | — | 450 | 100% | — |
| `text-body-spaced` | — | — | — | 150% |

**The homepage `<h1>` is `text-headline-2xl` — it caps at 54px.** Not 88px, not 120px. **[measured]**

### 3.2 Ratios that matter [derived]

- **Headline : body ≈ 2.45 : 1** (54px display against 22px lead). Push past ~3:1 and the page stops looking like Mastra.
- **Headline line-height is 110%, never sub-100%.** Tight display leading (`.93`) reads cramped at these sizes.
- Headline weight sits at **520** — between medium and semibold. With a static face lacking a width axis, ~500–600 is the honest analog.

### 3.3 Mono detailing — the signature move

Observed mono usages, verbatim from the markup: **[measured]**

| Size | Weight | Tracking | Use |
|---|---|---|---|
| `9.5px` | — | `0.14px` | Dense micro-labels in cards |
| `10.5px` | — | `0.15px` | Pill / chip labels |
| `14px` | — | — | Uppercase eyebrow labels |
| `14.5px` | 520 | `0.2175px` | Tab / control labels |
| `15.2px` | — | `0.05px` (lh 24.6px) | Code and terminal output |
| `17px` | 520 | `0.24px` | Uppercase nav / prominent labels |

Small, uppercase, lightly tracked mono does most of the "developer tool" work. Note the tracking is **modest** (~0.015em at 14px), not the wide `+0.08em` letterspacing typical of marketing eyebrows.

### 3.4 Type rules

- Body never below 14.5px; long-form measure 60–75ch. **[interpreted]**
- Numbers in data contexts → mono, so columns align and figures read as instrument output.
- Don't set body copy in mono; don't set code in the sans.

---

## 4. Form & layout

| Token | Value |
|---|---|
| `--ds-layout-content-v1` | `1120px` **[measured]** |
| `--ds-layout-content-v2` | `1328px` — current content max-width **[measured]** |
| `--ds-antigrid-padding` | `28px` → `38px` responsive **[measured]** |
| `--ds-antigrid-gap` | `18` → `24` **[measured]** |
| `--ds-radius-elevation` | `16px` → `20px` responsive **[measured]** |
| `--ds-section-stage-shell-radius` | `30px` → `38px` **[measured]** |
| `--radius-lg` | `10px` **[measured]** |
| `--radius-md` | `.375rem` (6px) **[measured]** |
| `--radius-2xl` / `--radius-3xl` | `1rem` / `1.5rem` **[measured]** |

- **Borders over shadows.** On dark, elevation reads through a hairline *darker* than the fill plus a one-step-lighter surface — not drop shadows.
- Button edges use a gradient stroke: `#383838` → `#2b2b2b00`, over fill `#1c1c1c`. **[measured]**
- Generous section padding on marketing; tight and tabular in product views. **[interpreted]**

### 4.1 Components at a glance [interpreted]

| Component | Treatment |
|---|---|
| Primary button | **Inverted**: light fill, near-black label, `~10px` radius |
| Secondary button | Transparent, gradient hairline stroke, light label; hover → `#262626` |
| Link | Accent green, no underline at rest, underline on hover |
| Card | `#171717` fill, `#1a1a1a` border, `16–20px` radius |
| Tag / chip | `#262626` fill, mono label, small radius |
| Input | `#0f0f0f` fill, hairline border, focus → accent ring |

---

## 5. Motion

Easing curves actually present in the bundle, by frequency: **[measured]**

| Curve | Uses | Character |
|---|---|---|
| `cubic-bezier(.16, 1, .3, 1)` | 20 | Strong ease-out — the workhorse |
| `cubic-bezier(.4, 0, .2, 1)` | 17 | Standard ease-in-out |
| `cubic-bezier(.32, .72, 0, 1)` | 14 | iOS-style drawer curve |
| `cubic-bezier(.4, 0, 1, 1)` | 10 | Ease-in (exits only) |
| `cubic-bezier(.22, 1, .36, 1)` | 10 | Softer ease-out |
| `cubic-bezier(.34, 1.56, .64, 1)` | 4 | Slight overshoot — used sparingly |

The dominant curve is a **strong ease-out**, consistent with UI that should feel instantly responsive. Motion is functional and continuous: streaming logs, timings ticking, step-by-step trace reveals. **[interpreted]**

---

## 6. Quick-start token block (faithful to Mastra)

```css
:root {
  color-scheme: dark;

  /* neutrals — pure greys, no hue cast */
  --bg: #080808;
  --surface-1: #0f0f0f;
  --surface-2: #171717;
  --surface-3: #262626;
  --surface-inset: #020202;   /* recessed, darker than canvas */
  --border: #1c1c1c;
  --border-elevation: #1a1a1a;
  --border-strong: #383838;
  --text: #f0f0f0;
  --text-secondary: #939393;
  --text-muted: #6e6e6e;
  --text-faint: #424242;

  /* accent */
  --accent: #7aff78;

  /* extended */
  --blue: #6ccdfb;  --purple: #b588fe;  --orange: #fdac53;
  --yellow: #e7e67b; --pink: #ff69cc;   --red: #ff4758;

  /* type */
  --font-sans: Greed, ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Commit Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  --text-headline-2xl: clamp(30px, calc(30px + 24*(100vw - 390px)/890), 54px);
  --text-headline-xl:  clamp(28px, calc(28px + 12*(100vw - 390px)/890), 40px);
  --text-body-lg: 22px;
  --text-body-sm: 14.5px;

  /* form */
  --radius-sm: 6px;
  --radius: 10px;
  --radius-lg: 20px;

  /* motion */
  --ease-out: cubic-bezier(.16, 1, .3, 1);
  --ease-in-out: cubic-bezier(.4, 0, .2, 1);
  --ease-drawer: cubic-bezier(.32, .72, 0, 1);
}
```

---

## 7. What this portfolio does differently — and why

This site borrows Mastra's *discipline*, not its identity. Deliberate divergences:

| Aspect | Mastra | This site | Rationale |
|---|---|---|---|
| **Accent** | `#7aff78` green | `#f0a35a` amber | Green-on-black is strongly Mastra's. Amber keeps the same one-accent restraint without reading as a clone. It's now the only warm element in a pure-neutral system, so it carries more deliberately than before. |
| **Sans** | Greed (commercial) | TASA Orbiter (OFL, Google Fonts) | Greed requires a license. TASA Orbiter is a free neutral grotesque; it lacks Greed's width axis, so headline weight sits at 600 rather than 520. |
| **Mono** | Commit Mono | **Commit Mono** ✅ | Exact match. Self-hosted via `@fontsource/commit-mono` (OFL-1.1) since it isn't on Google Fonts. Most of the "engineered" character lives here. |
| **Neutrals** | pure greys | **pure greys** ✅ | Adopted verbatim. |
| **Border** | `#1c1c1c` | `#1f1f1f` | Slightly lifted. This site draws many hairlines directly on the canvas rather than on raised surfaces, where `#1c1c1c` on `#080808` falls below usable contrast. |
| **Type scale** | 54px display cap | **54px cap** ✅ | Adopted verbatim, including the 390→1280px fluid formula and 110% leading. |

---

## 8. Corrections from the previous version of this document

The prior draft was written from visual inspection and marked several guesses as `[confirmed]`. Recorded here so they don't return:

| Claim | Status | Reality |
|---|---|---|
| Sans is **TASA Orbiter**, marked *"confirmed as display/UI face"* | ❌ **Wrong** | Mastra ships **Greed** (`GreedVF.woff2`, Displaay, commercial) |
| Mono is **Geist Mono**, marked *"confirmed"* | ❌ **Wrong** | Mastra ships **Commit Mono** |
| Accent is amber `#f0a35a` | ❌ **Wrong** | Accent is green `#7aff78`. Their `#fdac53` orange is close to that amber, but it's a categorical data color, not the accent |
| Greys carry a *"~285° cool violet-grey hue"* | ❌ **Invented** | Every Mastra grey is pure neutral (R = G = B) |
| `--bg: #020202` is the canvas | ❌ **Inverted** | Canvas is `#080808`; `#020202` is the *deepest inset* surface |
| Borders lighter than surfaces (`#26262b` border, `#18181b` surface) | ❌ **Inverted** | Borders are *darker* than the fills they sit on |
| Display type at 64–88px | ❌ **Oversized** | Routine display caps at **54px** |
| Two accents share one L/C band, differing only in hue | ❌ **Not the system** | Six categorical hues at varying lightness and chroma |
| Radius restrained, nothing above 16px | ➖ **Partly** | Elevation radii reach 20px; section shells reach 38px |

**Lesson:** the previous §7 "Needs confirmation" list correctly flagged the accent, the grey ramp, the body typeface, and the radii as uncertain — but the confidence tags in the body of the document didn't reflect that. Read the bundle before marking anything `[confirmed]`.

### Reproducing this extraction

```bash
curl -sL https://mastra.ai -o mastra.html
for f in $(grep -oE '"/_next/static/[^"]*\.css"' mastra.html | tr -d '"' | sort -u); do
  curl -sL "https://mastra.ai$f" >> mastra.css
done

grep -oE '\-\-color-ds-[a-z0-9-]+: *[^;]+'      mastra.css | sort -u   # colors
grep -oE '\-\-text-(headline|body)-[a-z0-9]+: *[^;]+' mastra.css | sort -u   # type scale
grep -oE '/[^" ]*\.(woff2|woff)'                mastra.html | sort -u  # fonts
grep -oE 'cubic-bezier\([^)]*\)'                mastra.css | sort | uniq -c | sort -rn  # easing
```

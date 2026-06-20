# Kantor Communication Consulting — "Luxury Print" Design Spec

> **How to use this with the build:** this file is the ART-DIRECTION system. Words come from `KC_Communication_Website_Copy_EN.md` (the content source of truth) — use that for all copy, section order, form fields, and build notes. This file governs how it all *looks*: tokens, type, layout grammar, components, motion. Apply it uniformly across every page. Production host is Netlify; domain is `kantor-communication.com`.

A complete art-direction system for the KC website. Hand this to Claude to redesign or extend **any** page — Home, Communication Consulting, Education, Jobs, Contact, FAQ, legal, or future pages. **Every choice below is a site-wide system, not a one-page treatment:** the color tokens, type scale, layout grammar, components, and motion are meant to be applied uniformly across all pages so the site reads as one brand. The intent: **boutique-editorial, like a high-end cultural magazine or austere luxury print brand — confident, restrained, expensive.** Depth comes from ink/ivory tonal range, hairline rules, numerals, and negative space — not from added color or ornament.

---

## 1 — Color

Near-monochrome. Ink on warm ivory, with brass used *only as punctuation* (~5% of any page: a single rule, a link, a numeral, an accent word).

| Token | Hex | Role |
|---|---|---|
| `--ivory` | `#F8F6F2` | Page background (warm off-white) |
| `--band` | `#EFEBE4` | Alternating section band (slightly deeper warm neutral) |
| `--ink` | `#1F2328` | Primary text; inverted (dark) sections; borders for emphasis |
| `--gray` | `#6B6F76` | Secondary text, captions, eyebrows |
| `--accent` | `#A87C3D` | **Brass/ochre — punctuation only.** Accent words (italic), single rules, numerals, link/hover, form focus |
| `--rule` | `ink @ 13% alpha` | Hairline dividers (`color-mix(in oklab, var(--ink) 13%, transparent)`) |

Rules:
- One accent only. Never introduce a second hue.
- Inverted sections (closing banner, footer, the flagship card) use `--ink` background with `--ivory` text and brass mixed toward white for accents.
- Whites/blacks stay warm — never pure `#fff` / `#000`.

---

## 2 — Typography

Two families only.

- **Display serif — `Spectral`** (Google Fonts), weights 300/400/500 + italic 400. Used for all headings, hero, pull-quotes, numerals, marquee. Lean on **weight 300** for large display and **italic** for the accent voice.
- **Body / UI sans — `Inter`**, weights 400/500/600. Paragraphs, nav, labels, forms, eyebrows, chips. Stays quiet so the serif can speak.

Base body: `18px`, line-height `1.6`, max measure `~62ch` (never full-width body text).

**Type scale (clamp, fluid):**

| Use | Size |
|---|---|
| Hero H1 | `clamp(2.4rem, 5vw, 4.4rem)`, weight 300, line-height 1.1 |
| Banner statement | `clamp(2.4rem, 5.5vw, 5rem)`, weight 300 |
| Section heading (`.sec-h`) | `clamp(1.8rem, 3.4vw, 2.9rem)`, weight 400 |
| Group divider H2 | `clamp(2.2rem, 5vw, 4rem)`, weight 300 |
| Lede / large body | `clamp(1.15rem, 1.8vw, 1.4rem)`, line-height 1.5, color `--gray` |
| Body | `18px` / 1.6 |
| Eyebrow / labels | `0.72rem`, letter-spacing `0.24em`, uppercase, `--gray` |
| Chips / form labels | `0.7–0.74rem`, letter-spacing `0.14–0.2em`, uppercase |

Headings are `font-weight: 400` by default; large display drops to `300`. Accent words are set **italic in brass**: `em { font-style: italic; color: var(--accent); }`.

---

## 3 — Layout grammar

- **Generous but not cavernous negative space.** Section rhythm `--vgap: clamp(4rem, 8vw, 9rem)`. Horizontal padding `--pad: clamp(1.4rem, 5vw, 8rem)`. Airy enough to feel premium, compact enough to keep momentum.
- **Hairline rules over boxes.** Structure with 1px `--rule` dividers and the occasional solid `--ink` top-border, not filled cards or shadows.
- **Numerals as structure.** Roman (`i. ii. iii. iv.`) or leading-zero (`01 02`) numerals in italic brass replace bullets.
- **Alternate ivory and `--band` sections** to separate without color.
- **Centered for calm moments** (hero, stakes, banners, closing); **asymmetric/alternating** for differentiators and outcomes.
- Sharp or barely-rounded corners (`border-radius: 0–2px`). No drop shadows, no gradients, no rounded "app" buttons, no stock icons.

**Signature device — the eyebrow rule:** a label preceded (and optionally followed) by a 42px brass hairline.
```css
.eyebrow::before { content:""; width:42px; height:1px; background:var(--accent); }
.eyebrow.center::after { content:""; width:42px; height:1px; background:var(--accent); } /* both sides when centered */
```

---

## 4 — Signature brand motif

**The multilingual "be understood" motif** — the offering made visual. One short idea rendered across the five languages, slowly cross-fading one into the next (2.6s interval, 0.9s ease fade). It is the ownable element; keep it elegant and slow.

```
Be understood.   →   Verstanden werden.   →   Hogy megértsék.   →   Hacerse entender.   →   Farsi capire.
```
Set in display serif italic. Appears under the hero and may recur in dividers/footer. Reduced-motion: show all lines statically stacked.

---

## 5 — Components

- **Top bar:** sticky, blurred ivory, hairline bottom border. **Logo:** use the brand mark `KCC.jpg` (source folder: `iCloud Drive/$Work/$Kantor Consulting/images`) in place of the text monogram, followed by the full name in small sans-gray. Until that asset is wired in, fall back to a `KC` monogram in a thin-ruled box. Nav links underline in brass on hover. EN/DE/HU/ES language switcher (brass = current).
- **Capability ticker:** full-width marquee, serif, brass `·` dividers, ~38s loop, pauses on hover.
- **Organizations marquee:** *larger* serif (`clamp(1.4rem,2.6vw,2.4rem)`), generous padding, ~46s loop, names as **text wordmarks not logos**, each `white-space: nowrap`. A centerpiece, not a footnote.
- **Trust strip:** 4 columns divided by hairlines under one solid `--ink` top rule; italic-brass numeral + serif heading + gray line. Never floating bullets.
- **Two-card split:** flagship **Communication Consulting** is heavier — filled with a deep *warm* tone (ink mixed ~70% with brass: `color-mix(in oklab, var(--ink) 70%, var(--accent))`, ivory text), larger heading (`01`) — beside the lighter outlined **Education** card (`02`). Differentiate by warm color, not black. Asymmetry signals hierarchy.
- **Differentiators (`.diff`):** each its own stated moment — big italic-brass numeral + bold lead-in + one supporting line, alternating left/right, separated by hairlines, with real whitespace. **Never a stacked bullet list.**
- **"Moments" grid (`.moments`):** 2-col hairline-divided cells for service points (numbered, no bullets).
- **Outcomes accordion (`.outcome`):** numbered heading + representative-work line + a `<details>` that expands the full service list in 2 columns. `summary` is uppercase brass with `+`/`–` toggle.
- **Pull-quote (`.pull`):** oversized brass quote mark, serif italic weight-300 quote, small quiet attribution. Medium scale — never hero-sized.
- **Workshops (`.workshops`):** 4 hairline-divided columns, numeral + serif title + gray line.
- **Forms:** underline-only inputs (`border-bottom: 1.5px solid ink`, transparent bg, brass focus), uppercase sans labels, generous 2-col grid. Buttons are thin-rule (`1.5px solid ink`, ~0 radius) that invert to ink-on-ivory on hover; one `--accent` variant. Reassurance line uses brass `✓`.
- **FAQ:** serif `<details>` rows split by hairlines, `+`/`–` brass toggle, optional `[C]`/`[E]` brass tag chips.
- **Footer:** solid `--ink` background, ivory text, the `KCC.jpg` brand mark (or ruled `KC` monogram fallback), three columns (brand / contact / explore), legal row with Impressum · Datenschutzerklärung.

**Buttons**
```css
.btn { border:1.5px solid var(--ink); padding:.85rem 1.5rem; border-radius:1px; background:transparent; }
.btn:hover { background:var(--ink); color:var(--ivory); }
```

**Image placeholders:** subtle 135° striped fill with a monospace label (e.g. `DORIAN KANTOR — HEADSHOT`). The founder headshot is `Dorian Kantor.png` (source folder: `iCloud Drive/$Work/$Kantor Consulting/images`); give it a duotone/warm treatment so it sits in the palette (`grayscale(1) sepia(.3) contrast(1.03)`), with a generous editorial 4:5 crop and real margin.

---

## 6 — Motion

One restrained idea, applied consistently. Restraint is the signal.
- **Scroll reveal:** elements rise + fade in (`translateY(18px)` → `0`, opacity 0 → 1, `~0.6s ease-out`), triggered via IntersectionObserver at ~12% visibility.
- The language motif cross-fades slowly; marquees scroll slowly and pause on hover.
- **Honor `prefers-reduced-motion`:** disable scroll/marquee animation, show motif statically, no transitions.
- No parallax, no bouncing, no aggressive hovers.

---

## 7 — What to avoid (the "cheap" tells)

- Stacked bullet lists for anything persuasive.
- The accent used anywhere beyond punctuation.
- Everything centered *and* evenly stacked (vary the rhythm).
- Timid, uniform headline sizes.
- Drop shadows, gradients, heavy rounded corners, stock icons, more than two fonts.
- Cramped sections / insufficient whitespace.
- Busy or decorative motion.

---

## 8 — Site structure & content notes

Pages: **Home · Communication Consulting · Education · Jobs · Contact** (FAQ as a section; About lives on Home). EN/DE/HU/ES language switcher.

- **Hierarchy:** Communication Consulting is the flagship — more space and weight than Education.
- **Contact routing:** two distinct forms — Consulting ("Book a discovery call", `#consulting`) and Education ("Book your free first consultation", `#education`). Never merge them; the global Contact page offers a chooser or both side by side. Jobs has its own application form (`#apply`).
- **Forms:** native Netlify (`data-netlify="true"`); Jobs CV upload is a native `<input type="file">`. Notifications → `languages@kantor-communication.com`.
- **Org names:** text wordmarks only, never third-party logos.
- **Footer (site-wide):** `languages@kantor-communication.com` · `+49 170 7070045` · Standort: Düsseldorf · Berlin · Impressum · Datenschutzerklärung (legally required for a German site).
- **No city byline in the hero.**

### Applying the system to every page
Use the **same** tokens, fonts, top bar, footer, eyebrow device, motion, and component library on all pages. What changes per page is *content and which components appear* — never the palette, type, or spacing rules.

- **Universal shell (all pages):** sticky top bar with `KCC.jpg` logo + nav (current page link styled `.active`) + EN/DE/HU/ES switcher; warm ivory base; ink footer. Hero pattern = centered `eyebrow` → display H1 (weight 300, brass italic accent word) → gray lede.

- **Home — canonical page flow (established by Claude Design build; preserve this exact sequence):**
  1. Sticky top bar
  2. Hero: eyebrow · H1 "Perfecting communication so it becomes *influence.*" · gray lede
  3. Stakes hook: H2 "A language is a passion and a pleasure — and, when the moment matters, a determinant of success." set as a proper section heading (not tiny body text) + supporting body paragraph
  4. Trust strip: four equal cells with partial-height hairline dividers between them (no top border, no bottom border, no table feel). Each cell: italic-brass Roman numeral + serif H4 + gray body line. Dividers reach only 80% of cell height (10% gap top, 10% gap bottom). **Exact content:** i. Native expertise — "Native-speaker experts from the United States, Germany, Colombia, Hungary, and Italy." · ii. Advanced focus — "Specialists in C1+, executive, and academic communication." · iii. Proven rooms — "Worked with professionals at Mercedes-Benz / EvoBus, Siemens Energy, Springer Nature, and more." · iv. Five languages — "English · German · Hungarian · Spanish · Italian — and growing."
  5. Multilingual "Be understood" motif: display serif italic, centered, cross-fading cycle (placed AFTER trust strip, BEFORE ticker — this placement is confirmed good)
  6. Capability ticker: all six items in full — **Lead & Align · Negotiate & Persuade · Present at the Highest Level · Write with Authority · Work Across Borders · Engage Public & Media** — brass `·` dividers, ~38s loop. All six must be present; do not truncate.
  7. Banner A: "Be understood. Be persuasive. Be remembered." (centered, display serif, band background)
  8. Two-card split: Communication Consulting `01` (flagship, filled warm-ink, ivory text) + Education `02` (outlined, lighter)
  9. Statement band: "Expertise is only as strong as *how you communicate it.*" (italic brass on "how you communicate it.")
  10. Founder / About section (band bg): headshot + bio block
  11. Closing section (inverted — ink bg, ivory text): eyebrow "In any room, in any language" (centered, brass hairlines either side) → H2 "Be understood. Command the room. *Succeed.*" (italic brass on "Succeed.") → two CTA buttons side by side: "Book a discovery call" → `contact.html#consulting` · "Start learning" → `education.html`
  12. Footer (ink bg, ivory text, three columns)

- **Long pages (Communication Consulting):** add the sticky **jump index** (`.jumpnav`, numbered anchors) under the top bar; give the SEVEN sections **equal visual weight** (consistent heading treatment + alternating ivory/`--band`), each ending with a quiet, inviting **next-link** (↓). Sections + anchors: Experience `#experience` · Premium Services, Premium Trainers `#premium` · What Sets Us Apart `#what-sets-apart` · Professional Outcomes `#outcomes` · Intensive Workshops `#workshops` · Cross-Border Partnerships `#partnerships` · Testimonials `#testimonials`. Use the large **organizations marquee**, the **moments** grid for the five service points, the **outcomes accordion** for service lists, the **pull-quote** for the founder, and **workshops** columns. (Within Premium: How we work → founder pull-quote → "command the room" line + the five points, in that order.)
- **Education:** warmer register, same components — intro `twocol`, **moments** grid for "how lessons work," distributed **differentiators**, signed **pull-quote**, testimonials (★ + Google badge), and the Education form.
- **Jobs:** inviting hero, founder **pull-quote**, "why work with us" as a **moments** grid (never bullets), and the native application form with file upload.
- **Contact:** the **chooser** (two ink-outline panels → Consulting `#consulting` / Education `#education`) or both forms side by side; never default the global Contact to one side.
- **FAQ:** the `.faq` `<details>` pattern with `[C]`/`[E]` brass tags; usable as a section on any page.
- **Section rhythm everywhere:** alternate `--ivory` and `--band`; lead persuasive content with numerals + stated moments, not bullet lists; one accent, used as punctuation.

---

## 10 — File architecture (minimal-edit, token-efficient)

**Goal:** any single change — reorder a section, tweak a color, update copy — should touch exactly one small file, never the whole build. This keeps Claude Code sessions short and avoids full reloads.

### File structure
```
/
├── tokens.css          ← ALL CSS custom properties (colors, type scale, spacing).
│                          Change one variable here; every page updates automatically.
├── components.css      ← Reusable component styles (.trust, .ticker, .pull, .diff,
│                          .outcome, .workshops, .btn, .form, .eyebrow, .motif, etc.)
├── layout.css          ← Page-level layout and SECTION ORDER (see below).
├── motion.css          ← Scroll-reveal, ticker animation, motif crossfade, reduced-motion.
├── index.html          ← Home page — content only inside labelled section blocks.
├── consulting.html     ← Consulting page — same pattern.
├── education.html
├── jobs.html
├── contact.html
├── /de/ /hu/ /es/      ← Translation mirrors — same structure, translated content only.
└── /images/            ← KCC.jpg, Dorian Kantor.png (copied from iCloud into repo).
```

### Section ordering — CSS `order` on a flex-column `<main>`

Every page wraps its sections in a `<main style="display:flex; flex-direction:column">`. Each section carries a `data-section` attribute and a CSS `order` value. **To reorder: change one number in `layout.css`.** No HTML changes needed.

```css
/* layout.css — Home section order */
[data-section="hero"]        { order: 1; }
[data-section="stakes"]      { order: 2; }
[data-section="trust"]       { order: 3; }
[data-section="motif"]       { order: 4; }
[data-section="ticker"]      { order: 5; }
[data-section="banner-a"]    { order: 6; }
[data-section="cards"]       { order: 7; }
[data-section="statement"]   { order: 8; }
[data-section="founder"]     { order: 9; }
[data-section="closing"]     { order: 10; }
```

Each HTML section is labelled with a comment so Code can find and edit it without reading the whole file:

```html
<!-- ═══ SECTION: trust ═══ -->
<section data-section="trust" class="trust">
  ...
</section>
<!-- ═══ END: trust ═══ -->
```

### The "minimal edit" contract for Claude Code sessions

When instructed to make a change, Code must:
- **Reorder sections** → edit only the `order` numbers in `layout.css`. Do not touch HTML.
- **Change a color or spacing token** → edit only `tokens.css`. One line.
- **Update copy** → edit only the content between the relevant `<!-- ═══ SECTION: x ═══ -->` markers.
- **Adjust a component style** → edit only `components.css`.
- **Never rewrite an entire page file** for a single change. Read the relevant section/file only.

### Section registry (add this comment block at the top of each HTML file)

```html
<!--
  PAGE: Home (index.html)
  SECTIONS IN ORDER (change order in layout.css, not here):
  01 hero        — hero statement + lede
  02 stakes      — "A language is a passion..."
  03 trust       — i/ii/iii/iv boxes
  04 motif       — multilingual "Be understood" cycle
  05 ticker      — capability ticker
  06 banner-a    — "Be understood. Be persuasive. Be remembered."
  07 cards       — Communication Consulting / Education split
  08 statement   — "Expertise is only as strong..."
  09 founder     — Dorian Kantor bio
  10 closing     — "In any room, in any language" + CTAs
-->
```

This registry is the first thing Code reads to understand the page — it can locate and edit any section without scanning the full file.

```css
:root{
  --ivory:#F8F6F2;
  --band:#EFEBE4;
  --ink:#1F2328;
  --gray:#6B6F76;
  --accent:#A87C3D;            /* brass — punctuation only */
  --rule: color-mix(in oklab, var(--ink) 13%, transparent);
  --serif:"Spectral", Georgia, serif;
  --sans:"Inter", system-ui, sans-serif;
  --vgap: clamp(4rem, 8vw, 9rem);
  --pad: clamp(1.4rem, 5vw, 8rem);
  --measure: 62ch;
}
/* Fonts: Spectral 300/400/500 + italic 400; Inter 400/500/600 */
```

---

## 11 — Targeted patches (components.css / layout.css only)

Surgical CSS fixes based on the reviewed build. Each is scoped to one component. Do NOT rebuild pages to apply these — edit only the relevant CSS block in the relevant file.

### 11a — Trust strip: no table borders, partial-height dividers
```css
/* components.css */
.trust                       { border-top: none; border-bottom: none; }
.trust__cell                 { border-right: none; position: relative; }
.trust__cell + .trust__cell::before {
  content: ""; position: absolute;
  left: 0; top: 10%; height: 80%; width: 1px;
  background: var(--rule);   /* hairline only, not full height */
}
```

### 11b — Ticker: remove border lines above and below
```css
/* components.css */
.ticker { border-top: none; border-bottom: none; }
```

### 11c — Gap: card split → founder section (too large, halve it)
```css
/* layout.css */
[data-section="cards"]   { padding-bottom: calc(var(--vgap) * 0.45); }
[data-section="founder"] { padding-top:    calc(var(--vgap) * 0.45); }
```

### 11d — Gap: closing section bottom (too large before footer)
```css
/* layout.css */
[data-section="closing"] { padding-bottom: calc(var(--vgap) * 0.5); }
```

### 11e — Footer layout: logo + brand name on one line, domain below, contact below that
```css
/* components.css */
.footer__brand-row          { display:flex; align-items:center; gap:0.75rem; margin-bottom:0.3rem; }
.footer__brand-row img      { height:2rem; width:auto; }
.footer__brand-row span     { font-family:var(--sans); font-size:0.85rem;
                               color:var(--ivory); letter-spacing:0.01em; }
.footer__domain             { font-family:var(--sans); font-size:0.8rem;
                               color:var(--gray); margin-bottom:0.6rem; }
.footer__contact            { font-family:var(--sans); font-size:0.8rem; color:var(--gray); }
```

HTML structure (footer — do not change this order):
```html
<div class="footer__brand-row">
  <img src="/images/KCC.jpg" alt="KCC">
  <span>Kantor Communication Consulting</span>
</div>
<div class="footer__domain">kantor-communication.com</div>
<div class="footer__contact">
  Email: <a href="mailto:languages@kantor-communication.com">languages@kantor-communication.com</a>
  · Phone: +49 170 7070045 · Standort: Düsseldorf · Berlin
</div>
```

### 11f — Founder section eyebrow rename
Change the eyebrow text in `index.html` (section `data-section="founder"`) from whatever it currently reads to: **FOUNDER AND DIRECTOR**. CSS-only change on the text node — no structural edit.

### 11g — Footer: consistency across all pages + full translated labels
The footer must be IDENTICAL in structure on every page (Home, Consulting, Education, Jobs, Contact) in every language. Use one shared footer partial/include or copy the same HTML block to every page. ALL labels translate — see §0 of the copy file for the complete translation table.

**Translation strings per language (wire these to the data-i18n attributes):**

| key | EN | DE | HU | ES |
|---|---|---|---|---|
| `location` | Location | Standort | Helyszín | Ubicación |
| `email-label` | Email | E-Mail | E-mail | Correo electrónico |
| `phone-label` | Phone | Telefon | Telefon | Teléfono |
| `legal` | Legal Notice | Impressum | Jogi nyilatkozat | Aviso legal |
| `privacy` | Privacy Policy | Datenschutzerklärung | Adatvédelmi nyilatkozat | Política de privacidad |
| `nav-about` | About | Über uns | Rólunk | Sobre nosotros |
| `nav-consulting` | Consulting | Beratung | Tanácsadás | Consultoría |
| `nav-education` | Education | Bildung | Oktatás | Educación |
| `nav-jobs` | Jobs | Stellen | Állások | Empleo |
| `nav-faq` | FAQ | FAQ | GYIK | FAQ |
| `nav-contact` | Contact | Kontakt | Kapcsolat | Contacto |

**Canonical footer HTML (same block on every page):**
```html
<footer class="footer">
  <div class="footer__brand-row">
    <img src="/images/KCC.jpg" alt="KCC">
    <span>Kantor Communication Consulting</span>
  </div>
  <div class="footer__domain">kantor-communication.com</div>
  <div class="footer__contact">
    <span data-i18n="email-label">Email</span>:
    <a href="mailto:languages@kantor-communication.com">languages@kantor-communication.com</a>
    ·
    <span data-i18n="phone-label">Phone</span>: +49 170 7070045
    ·
    <span data-i18n="location">Location</span>:
    Düsseldorf / Berlin · Budapest · Bogotá · Washington, DC
  </div>
  <div class="footer__legal">
    <a href="/legal" data-i18n="legal">Legal Notice</a>
    ·
    <a href="/privacy" data-i18n="privacy">Privacy Policy</a>
  </div>
  <nav class="footer__nav">
    <a href="/about"        data-i18n="nav-about">About</a>
    <a href="/consulting"   data-i18n="nav-consulting">Consulting</a>
    <a href="/education"    data-i18n="nav-education">Education</a>
    <a href="/jobs"         data-i18n="nav-jobs">Jobs</a>
    <a href="/faq"          data-i18n="nav-faq">FAQ</a>
    <a href="/contact"      data-i18n="nav-contact">Contact</a>
  </nav>
</footer>
```

**How the language switcher works with this footer:**
The EN/DE/HU/ES switcher sets a `lang` attribute on `<html>` and/or stores the choice in localStorage. A small JS function then walks all `[data-i18n]` elements and swaps in the right string from the translation table above. The footer HTML itself never changes between pages — only the strings swap.

**CSS (footer stays dark regardless of page):**
```css
.footer {
  background: var(--ink);
  color: var(--ivory);
  padding: var(--vgap) var(--pad);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.footer__brand-row { display:flex; align-items:center; gap:0.75rem; margin-bottom:0.4rem; }
.footer__brand-row img  { height:2rem; width:auto; }
.footer__brand-row span { font-family:var(--sans); font-size:0.85rem; color:var(--ivory); }
.footer__domain  { font-family:var(--sans); font-size:0.8rem; color:var(--gray); }
.footer__contact { font-family:var(--sans); font-size:0.8rem; color:var(--gray); }
.footer__legal   { font-family:var(--sans); font-size:0.75rem; color:var(--gray); }
.footer__legal a, .footer__contact a { color:var(--gray); text-decoration:underline; }
.footer__nav     { display:flex; flex-wrap:wrap; gap:1.5rem; margin-top:1rem; }
.footer__nav a   { font-family:var(--sans); font-size:0.75rem; letter-spacing:0.15em;
                   text-transform:uppercase; color:var(--gray); text-decoration:none; }
.footer__nav a:hover { color:var(--ivory); }
```

### 11h — CTA buttons: equal visual weight
Both closing-section CTA buttons must have identical styling — same border weight, same text size, same padding. Do not make one filled and the other outlined. Both use the `.btn` style (thin ink border, transparent fill, ivory text on dark bg, invert on hover). Neither is primary/secondary.

```css
/* components.css — closing section CTAs */
[data-section="closing"] .btn {
  border: 1.5px solid var(--ivory);
  color: var(--ivory);
  background: transparent;
  min-width: 14rem;
}
[data-section="closing"] .btn:hover {
  background: var(--ivory);
  color: var(--ink);
}
```

### 11i — FAQ: consulting/education filter toggle at top
Add a filter bar at the top of the FAQ section with three buttons: [All] [Consulting] [Education]. Clicking a button shows only FAQ items tagged with that category (via the existing `[C]` / `[E]` / `[both]` tags). Default state: All.

```css
/* components.css — FAQ filter */
.faq__filter { display:flex; gap:1rem; margin-bottom:2rem; }
.faq__filter-btn {
  font-family:var(--sans); font-size:0.72rem; letter-spacing:0.2em;
  text-transform:uppercase; border:1px solid var(--rule);
  padding:0.4rem 1rem; background:transparent; cursor:pointer;
}
.faq__filter-btn.active { border-color:var(--accent); color:var(--accent); }
```
JS: on click, toggle `.hidden` on `.faq__item` elements whose `data-tag` doesn't match the selected filter. "All" shows everything.

### 11j — Home page hero eyebrow
Change the eyebrow on the Home hero from whatever it currently reads to match the Communication Consulting page's eyebrow pattern:
`—— WELCOME TO KANTOR COMMUNICATION CONSULTING`
Same eyebrow styling: brass hairline rule + uppercase sans gray label.

### 11k — Jobs page: quote + video side by side, gap reduction
The quote and the welcome video placeholder should sit in a two-column layout (50/50 or 45/55 quote/video). The pull-quote column loses its full-width dominance — it becomes one half of a pair.

```css
/* layout.css */
[data-section="jobs-hero"] .twocol {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--pad);
  align-items: start;
}
[data-section="jobs-hero"] .pull { font-size: clamp(1rem, 1.6vw, 1.25rem); }
[data-section="jobs-hero"] { padding-top: calc(var(--vgap) * 0.5); }
```
The video placeholder sits in the right column, same styling as the Consulting page video placeholder.

### 11l — Trust strip: confirm bottom border and inter-section line both gone
In addition to §11a (removing the top border and switching to partial-height dividers), confirm:
- The `.trust` section has no `border-bottom`.
- There is no `<hr>` or border element between the `.trust` section and the `.motif` section.
- The `.motif` section has no `border-top`.
```css
/* components.css */
.trust  { border-top: none; border-bottom: none; }
.motif  { border-top: none; }
```

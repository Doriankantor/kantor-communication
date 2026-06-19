# Kantor Communication Consulting and Education — website

A static, multilingual marketing site for **Kantor Communication Consulting and
Education** (KC). Plain semantic HTML5 + one CSS file + minimal vanilla JS — no
framework, no build step. Built to open directly in a browser and to port cleanly
into Squarespace later.

Final domain: **communication.kantor-consulting.com**

---

## Folder structure

```
kc-communication-website/
├── index.html              # Opening page — hero, ticker, trust strip, banners,
│                           #   the split, and "The principal" (About) section (EN)
├── consulting.html         # Communication Consulting — outcomes, running marquee,
│                           #   testimonials, discovery-call form (EN)
├── education.html          # Education — lessons, testimonials & Google reviews,
│                           #   free-consultation form (EN)
├── jobs.html               # Jobs — teach/consult with us + application form (EN)
├── faq.html                # FAQ — accordion, tagged [Consulting]/[Education]/[Both] (EN)
├── impressum.html          # Impressum (legal notice) — PLACEHOLDER, fill before launch
├── datenschutz.html        # Datenschutzerklärung (GDPR privacy) — PLACEHOLDER
├── de/  hu/  es/           # German / Hungarian (formal Ön) / Spanish (formal usted)
│   └── (same 7 pages)      #   — DRAFT machine translations, human review required
├── assets/
│   ├── css/styles.css      # All styling + design tokens (one file)
│   ├── js/main.js          # Mobile nav, ticker + marquee loops, form validation
│   └── img/
│       └── kc-monogram-placeholder.svg   # ← REPLACE with final KC monogram
├── KC_Communication_Website_Copy_EN.md   # Content source of truth (English master)
└── README.md
```

Main nav: **Home · Communication Consulting · Education · Jobs · Contact** (Contact
jumps to the consulting discovery-call form). Footer adds **About · FAQ · Impressum ·
Datenschutz**. The two legal pages and both testimonials sections are intentional
**placeholders** — see the HTML comments in each for what must be supplied before launch
(legal text from counsel; permission-based / Google reviews). "The principal" section
and the founder-video block carry placeholders for Dorian's photo and recorded footage.

Every page shares the same header (KC wordmark left; nav + EN/DE/HU/ES language
switcher right) and footer. The language switcher links across equivalent pages
(e.g. `consulting.html` ↔ `de/consulting.html`).

---

## Preview locally

Because the language switcher and assets use relative paths, any static file
server works. Two easy options from inside the project folder:

```bash
# Python (built in on macOS)
python3 -m http.server 8131
# then open http://localhost:8131

# …or Node, if you prefer
npx serve .
```

You can also just double-click `index.html` to open it directly in a browser —
everything works from `file://` too (fonts load from Google Fonts over the network).

---

## Theme & accent color

The whole palette is driven by CSS custom properties in the `:root` block at the top
of `assets/css/styles.css`. The site is **light and warm**: a soft-ivory base with
deep-ink text and **one accent used sparingly (~5–10% of the page)** — currently a
deep oxblood/claret for an editorial, "cultured authority" feel. To re-theme, edit
these variables — nothing else:

```css
:root {
  /* base palette */
  --bg:            #F7F5F1;   /* soft ivory base */
  --bg-band:       #EDEAE3;   /* deeper warm-neutral band (alternating sections) */
  --bg-accent:     #F0E7E6;   /* faint warm accent-tinted band (Banner A) */
  --text:          #1F2328;   /* deep ink */
  --text-muted:    #6B6F76;   /* warm mid-gray — secondary text & dividers */

  /* the one accent — links, buttons, dividers, hover, index numerals, pull-quote mark */
  --accent:        #6E2A37;   /* deep oxblood / claret */
  --accent-strong: #561F2A;   /* darker hover state */
  --accent-soft:   rgba(110, 42, 55, 0.08);  /* tints, focus ring, draft banner */
  --on-accent:     #F7F5F1;   /* text/icons on accent fills (e.g. buttons) */
}
```

Suggested accents from the brief (pick one, keep it consistent):

| Accent                  | `--accent` | `--accent-strong` |
|-------------------------|------------|-------------------|
| Deep oxblood (current)  | `#6E2A37`  | `#561F2A`         |
| Burnt terracotta        | `#B65A3C`  | `#8F4329`         |
| Deep teal (prior)       | `#1F6F6B`  | `#17524F`         |

(If you change the accent, also update the small arrow color inside the `select`
dropdown SVG in `.field select` — hard-coded as `%236E2A37` — and the accent bar
`fill` in `assets/img/kc-monogram-placeholder.svg`.)

---

## Swapping the KC monogram

The header logo is a **placeholder**: `assets/img/kc-monogram-placeholder.svg`.
Replace it with the final externally designed KC monogram. Two paths:

1. **Keep the filename** — overwrite `assets/img/kc-monogram-placeholder.svg` with
   the final artwork (SVG recommended). No HTML changes needed.
2. **Use a new filename** — drop the new file in `assets/img/` and update the
   `<img src=…>` in the `.wordmark` block **and** the `<link rel="icon">` in the
   `<head>` of every page (3 EN + 9 translated = 12 files). The placeholder file
   carries a comment reminding you of this.

The monogram is intentionally styled apart from the parent consulting site's KC.

---

## Internationalization

- **English is the master.** Build/edit EN first, then propagate.
- `/de/`, `/hu/`, `/es/` mirror the same three pages with a working language switcher.
- DE/HU/ES currently contain **first-draft machine translations**, each marked with
  `<!-- DRAFT TRANSLATION: human review required -->` at the top and a visible draft
  banner. **Human review required before launch.**
- Proper nouns (brand name, KC, company names, "Education First (EF)", the domain)
  are kept untranslated. Spanish uses *usted*; Hungarian uses *Ön* (both formal).
- **German service lists:** the `<details>` bullet lists on `de/consulting.html` are
  intentionally **not** machine-translated. Each is a visible placeholder plus an
  HTML comment containing the English source bullets, ready for the owner to paste
  their own German service taxonomy. (The "Representative work" lines *are*
  translated.) HU/ES have the bullets fully translated as drafts.

---

## Forms

Both contact forms (`consulting.html`, `education.html`) are real `<form>` elements
with labels, required-field markup, and client-side validation only. They currently
post to `action="#"` — search the HTML for the **`TODO`** comment to wire each one
to the real backend (Squarespace form, Formspree, email handler, etc.). The fields,
dropdown options, and button labels come verbatim from the content `.md`.

---

## Accessibility & quality

- Semantic landmarks (`header`/`nav`/`main`/`footer`), skip link, visible focus states.
- The capability ticker pauses on hover/focus and falls back to a static list under
  `prefers-reduced-motion`. Expanders use native keyboard-operable `<details>`.
- All images carry `alt` (the decorative monogram uses empty `alt` + `aria-hidden`).
- Built mobile-first; verified responsive down to 375px with a collapsible menu.
- A link + alt-text pass across all 12 pages found **0 broken links and 0 missing
  alt attributes.**

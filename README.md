# Valaivadivam — Design • Web • Branding

வலைவடிவம் · Official website.

Built with **HTML5, CSS3, Bootstrap 5.3.3 and vanilla JavaScript**.
No React, no Node, no build step, no npm install. Open it and it runs.

**Includes:** English / Tamil / Hindi language switching · Light & Dark mode ·
Valaivadivam Academy with 7 courses and a course-enquiry popup · Our Process ·
FAQ accordion · portfolio filtering with optional case studies.

---

## Run it

Double-click `index.html`.

That's genuinely it — there is nothing to install or compile.

One small caveat: opening the file directly uses the `file://` protocol,
where some browsers restrict certain features. For a more accurate preview,
serve the folder over HTTP. Any of these work if you have them:

```bash
python3 -m http.server 8000     # then open http://localhost:8000
npx serve .
php -S localhost:8000
```

In VS Code, the **Live Server** extension does the same with one click.

---

## What's inside

```
valaivadivam-html/
├── index.html                  the whole page — every section
├── css/
│   └── style.css               brand colours, layout, animations
├── js/
│   ├── i18n.js                 ← EDIT TEXT HERE (English, Tamil, Hindi)
│   ├── data.js                 ← EDIT STRUCTURE HERE (services, courses, work)
│   └── main.js                 theme, language, rendering, forms, modals
├── vendor/
│   └── bootstrap/              Bootstrap 5.3.3, bundled locally
├── assets/
│   ├── logo/                   your original logo (2 versions)
│   ├── portfolio/              ← swap project images here
│   └── clients/                ← swap client logos here
├── google-apps-script.gs       enquiry backend (paste into Apps Script)
├── SETUP-ENQUIRIES.md          ← how to connect Sheets + email
├── favicon.png
├── og-image.png                social share preview (1200 × 630)
├── robots.txt
└── README.md
```

**Bootstrap is bundled, not loaded from a CDN.** The site works offline, on a
local network, and behind a firewall that blocks CDNs. It also can't break
because a CDN changed or went down. If you'd rather use the CDN, replace the
two `vendor/bootstrap/...` lines in `index.html` with the official
`cdn.jsdelivr.net` tags from getbootstrap.com.

---

## Language and theme

**Languages** live in `js/i18n.js` — one block each for `en`, `ta` and `hi`.
Static text carries `data-i18n="some.key"` in the HTML; content built by JS
looks up the same keys. No HTML is duplicated per language.

To add a language: copy the `en` block, translate the **values** (never the
keys), give it a code, and add one `<li>` to the dropdown in `index.html`.
A missing key falls back to English rather than showing blank, so a partial
translation is safe to ship.

**English is fully English.** When EN is selected, every visible string is in
English. The one deliberate exception is the Tamil brand name **வலைவடிவம்**,
which stays in Tamil in all three languages — it's part of the logo lockup and
the brand, not translatable copy.

Some English keys are intentionally empty strings (e.g. `services.support`).
An empty value hides its element rather than leaving a gap: those lines were
Tamil restatements of the English line above them, so in English they'd be
pure repetition. Tamil and Hindi still use them.

The Tamil and Hindi copy is a first pass by a non-native writer. It's
grammatical and consistent, but **have a native speaker read it before
launch** — especially the Academy course descriptions.

**Theme** is a set of CSS-variable overrides under `[data-theme="dark"]` at
the end of `style.css`. Because every component already draws from those
variables, dark mode re-themes the whole site without duplicating a single
component rule.

Both choices persist in `localStorage` (`vv-lang`, `vv-theme`). Theme is
applied by a small inline script in `<head>` so dark-mode visitors never see a
white flash before the stylesheet loads. If no choice has been made yet, the
site follows the operating system's dark-mode setting.

---

## Editing content — start here

Text lives in **`js/i18n.js`**. Structure — which icon, which image, what
order — lives in **`js/data.js`**. Each item has a `key` linking the two.

Services, portfolio projects, client logos and the "why choose us" items are
defined as lists there, and the page builds itself from them. Add one entry and
the card appears; delete one and it disappears. You never touch the layout.

### Add or change a service

In `js/data.js`:

```js
{ key: "motion", icon: "video", value: "Motion Graphics" }
```

Then in `js/i18n.js`, under `services` in **all three languages**:

```js
motion: { title: "Motion Graphics", text: "Short animated graphics for social." }
```

The contact form's "Service Required" dropdown builds itself from this list —
no separate edit needed.

### Add or change a course

Same two-file pattern. In `js/data.js`:

```js
{ key: "java", icon: "code", value: "Java Development" }
```

In `js/i18n.js` under `academy.courses`, in all three languages:

```js
java: {
  title: "Java Development",
  text: "One-line summary of the course.",
  points: ["Highlight one", "Highlight two", "Highlight three"]
}
```

The course card, the Enquire Now button and the popup's dropdown all pick it
up automatically.

### Add a portfolio project

1. Drop the image into `assets/portfolio/`
2. Add an entry to `VV_PORTFOLIO` in `js/data.js`:

```js
{ key: "p10", cat: "websites", image: "assets/portfolio/bakery.jpg" }
```

3. Add its title and text under `portfolio.items.p10` in `js/i18n.js`

**Case studies are optional.** Add a `detail` block to a project and a "View
details" button appears on its card, opening a popup with Client, Industry,
Overview, Problem, Solution, Tools and Result:

```js
{
  key: "p10", cat: "websites", image: "assets/portfolio/bakery.jpg",
  detail: {
    client: "Real client name", industry: "Food & Beverage",
    overview: "...", problem: "...", solution: "...",
    tools: "HTML, CSS, JavaScript", result: "...",
    url: "https://example.com"          // optional — adds a Visit button
  }
}
```

The nine sample projects deliberately have **no** `detail` block. Inventing a
client name or a result for work that hasn't happened would be fabrication —
fill these in only with real information you can stand behind.

Recommended: 1600 × 900 (16:9), under 300 KB, JPG or WebP. Images are
lazy-loaded, so adding more won't slow the first paint. Always write a real
`alt` — it helps SEO and screen readers. Only publish work you own or have the
client's permission to show.

### Add a client logo

```js
{ name: "Sri Traders", image: "assets/clients/sri-traders.png" }
```

Transparent PNG or SVG at roughly 400 × 200 px works best. The strip
duplicates your list automatically to make the loop seamless, so **never add a
client twice**.

### Change contact details

These appear in the Contact section and the footer of `index.html`. Search for
`valaivadivam@gmail.com` and `8940524235` and update both places.

---

## The logo

Your original artwork, cropped from the file you supplied — nothing was
redrawn, recoloured or reproportioned.

| File | What it is | Used in |
|---|---|---|
| `assets/logo/valaivadivam-logo.png` | Full lockup, transparent background | Navbar, footer (light mode) |
| `assets/logo/valaivadivam-logo-dark.png` | Same logo, wordmark lifted for dark pages | Navbar, footer (dark mode) |
| `assets/logo/valaivadivam-mark.png` | Symbol only, transparent | Hero mockup, favicon |

All four are **transparent PNGs** — the white page background was removed by
flood-filling inward from the image border, so only white connected to the
outside was cleared and nothing inside the artwork was touched.

**About the dark file:** on a dark page the near-black "VALAIVA" lettering and
the Tamil line would be almost invisible. The dark variant lifts *only* those
low-saturation dark pixels, and *only* in the wordmark band. The symbol above
it — the swoosh, the orbit, the black pen, the orange accent — is byte-for-byte
identical to the light file. Nothing was redrawn or reproportioned.

The swap is pure CSS (`.logo-light` / `.logo-dark`), so it is already correct on
first paint rather than flickering after JavaScript runs.

Both use `object-fit: contain`, so they can never stretch. To update, replace
those two files keeping the same names.

The source was a JPEG on white, so the files have a white background. Every
surface the logo sits on is white, so you won't see it — but if you ever place
it on a coloured panel, export a transparent PNG over the same filenames.

---

## Connecting enquiries to Google Sheets + email

Both forms — the contact form and the course popup — currently run in **demo
mode**: they validate, confirm and log to the browser console, but send
nothing.

To switch them on, follow **`SETUP-ENQUIRIES.md`**. It walks through creating a
Google Sheet, pasting in `google-apps-script.gs`, deploying it as a Web App,
and putting the resulting URL into one line of `js/data.js`:

```js
const VV_ENQUIRY_ENDPOINT = "https://script.google.com/macros/s/..../exec";
```

Every enquiry then appends a row to your sheet (Date, Type, Name, Phone, Email,
Course, Service, Company, Training Mode, Message, Status = New) **and** emails
you a formatted notification you can reply to directly.

> **Why not email directly from the page?** Everything in `js/` is downloaded
> by every visitor and readable in DevTools. A Gmail password or private API
> key placed there would be public. The Apps Script URL is safe to publish: it
> accepts submissions but grants no access to read your sheet or your inbox.

---

## Form rules

| Field | Required? |
|---|---|
| Full Name | Yes |
| Email Address | Yes — must be a valid format |
| Phone Number | Yes — 10 to 15 digits |
| Service Required | Yes |
| Business / Company Name | No |
| Project Details / Message | **No** — submitting it empty works fine |

Errors appear under the field and clear as soon as you fix them. The submit
button disables while sending.

---

## Section sizing

Each major section uses the `.section` class:

```css
.section {
  min-height: calc(100svh - var(--vv-nav-h));
  scroll-margin-top: var(--vv-nav-h);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: clamp(1.5rem, 4vh, 3.5rem);
}
```

Three things worth knowing:

- **`--vv-nav-h`** (64px mobile / 72px desktop) is declared once at the top of
  `style.css`. The navbar height, the scroll offset and the section height all
  derive from it, so they can never drift apart. Change it in one place.
- **`min-height`, not `height`.** A section fills the viewport but grows if its
  content genuinely needs more room. Nothing is ever clipped.
- **Padding scales with viewport height**, so a 1366 × 768 laptop gets tight
  padding and a 1080p monitor gets generous padding, from the same rule.

Why Choose Us and Client Partners deliberately use `.section-band` instead —
they're short, and a full screen each would read as empty space.

If a section feels tight or loose on your screen, the knobs are the `clamp()`
values in `.section`, and `VV_PREVIEW_COUNT` in `data.js` (how many projects
show before "Show all").

---

## Active navigation underline

`main.js` uses an IntersectionObserver with a "reading band" — the top is inset
by the navbar height and the bottom pulled up to 55%, so only the upper slice
of the viewport counts. When several sections qualify, the lowest one wins.
That's what stops Portfolio staying underlined once Contact has arrived.

Clicking a link sets the underline immediately and ignores the observer for
900ms, so it doesn't flicker through every section the scroll passes over.

---

## Bilingual text

Tamil uses **Noto Sans Tamil**, applied with the `.tamil` class, which also
loosens line-height — Tamil has tall ascenders and descenders that collide at
Latin spacing.

The font stack is `"Inter", "Noto Sans Tamil"` **in that order, on purpose**.
Nearly every Tamil line here is mixed script ("உங்கள் Business-க்கு…"), and
Inter-first keeps the English words in Inter while Tamil characters fall
through to Noto Sans Tamil. Reversing the order would render the Latin words in
the Tamil face and look inconsistent.

---

## Changing colours

All at the top of `css/style.css`:

```css
--vv-navy:      #0B2545;   /* headings */
--vv-blue:      #1A56DB;   /* buttons, links, accents */
--vv-blue-dark: #1345B5;   /* hover */
--vv-blue-soft: #E8F0FE;   /* light blue blocks */
--vv-blue-tint: #F5F8FF;   /* section backgrounds */
--vv-line:      #E2E8F5;   /* borders */
```

Change a value and it updates site-wide, including the Bootstrap components —
`--bs-primary` is remapped to the brand blue just below.

The only non-blue colour in the project is red, used for form validation
errors. That's deliberate: an error that isn't red is easy to miss.

---

## Deploying

Upload the entire folder. There is no build step and no `dist/`.

- **cPanel / shared hosting:** upload everything into `public_html`
- **Netlify:** drag the folder onto the dashboard
- **GitHub Pages:** push the folder, enable Pages on the branch
- **Any static host:** it's plain files

After deploying, update the domain in `index.html` — the `canonical`, `og:url`
and `og:image` tags currently point at `https://valaivadivam.com/` — and in
`robots.txt`.

---

## Built-in quality checks

- Responsive from 320px up; no horizontal scrolling
- Keyboard accessible, visible focus ring, skip-to-content link
- `prefers-reduced-motion` respected — animation and the marquee stop
- Semantic HTML, labelled fields, `aria-invalid` and error descriptions
- Lazy-loaded images with width/height set to avoid layout shift
- Icons are inline SVG — no icon font or icon library to download

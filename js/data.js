/* ==========================================================================
   VALAIVADIVAM — SITE STRUCTURE

   This file holds the STRUCTURE of repeating content: which icon, which
   image, which order. The actual words live in js/i18n.js so the site can
   be shown in English, Tamil or Hindi without duplicating anything here.

   Each item has a `key` that points at its text in i18n.js.
   Example: a service with key "web" reads its title from
            VV_TRANSLATIONS[lang].services.web.title

   ADDING SOMETHING NEW
   1. Add the item here (with a new key).
   2. Add matching text under that key in js/i18n.js — in all three languages.
   ========================================================================== */

/* Inline icons. Add a new one here and reference it by name below.
   All icons share a 24×24 grid. */
const VV_ICONS = {
  monitor:  '<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8.5 21h7M12 17v4"/>',
  pen:      '<path d="M15.5 3.9a2.1 2.1 0 0 1 3 3L8 17.4l-4.2 1.2 1.2-4.2z"/><path d="M13.5 5.9l3 3"/>',
  poster:   '<rect x="4" y="2.5" width="16" height="19" rx="2"/><path d="M8 7.5h8M8 12h8M8 16.5h4"/>',
  sparkle:  '<path d="M12 2.5l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9z"/><path d="M18.5 16.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
  share:    '<circle cx="18" cy="5.5" r="2.75"/><circle cx="6" cy="12" r="2.75"/><circle cx="18" cy="18.5" r="2.75"/><path d="M8.4 10.7l7.2-3.9M8.4 13.3l7.2 3.9"/>',
  layers:   '<path d="M12 2.8l9 4.7-9 4.7-9-4.7z"/><path d="M3 12.5l9 4.7 9-4.7"/><path d="M3 17.2l9 4.7 9-4.7"/>',
  badge:    '<circle cx="12" cy="9.5" r="6.5"/><path d="M9 15.4L8 22l4-2.2L16 22l-1-6.6"/><path d="M9.5 9.6l1.8 1.8 3.2-3.4"/>',
  handshake:'<path d="M2.5 12.5l4-4 3.5 3 2-2 3.5 3.5"/><path d="M21.5 12.5l-4-4-3 2.5"/><path d="M8 15l2.5 2.5M11 13l3 3M14 11.5l3 3"/>',
  tag:      '<path d="M3.5 11.4V4.5a1 1 0 0 1 1-1h6.9a1 1 0 0 1 .7.3l8.1 8.1a1 1 0 0 1 0 1.4l-6.9 6.9a1 1 0 0 1-1.4 0L3.8 12.1a1 1 0 0 1-.3-.7z"/><circle cx="8" cy="8" r="1.4"/>',
  clock:    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.4 2"/>',
  video:    '<rect x="2.5" y="5.5" width="13" height="13" rx="2.5"/><path d="M15.5 10l6-3.2v10.4l-6-3.2z"/>',
  code:     '<path d="M8.5 7.5L3.5 12l5 4.5M15.5 7.5l5 4.5-5 4.5M13.5 4l-3 16"/>',
  server:   '<rect x="3" y="3.5" width="18" height="7" rx="2"/><rect x="3" y="13.5" width="18" height="7" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
  database: '<ellipse cx="12" cy="6" rx="8" ry="3.2"/><path d="M4 6v12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V6"/><path d="M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2"/>',
  cursor:   '<path d="M5.5 3l13.5 8-6 1.6L9.6 19z"/>',
  stack:    '<rect x="3" y="3.5" width="8" height="8" rx="2"/><rect x="13" y="3.5" width="8" height="8" rx="2"/><rect x="3" y="13.5" width="8" height="7" rx="2"/><rect x="13" y="13.5" width="8" height="7" rx="2"/>',
  play:     '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5z"/>',
  target:   '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  chat:     '<path d="M21 12a8.5 8.5 0 0 1-12.3 7.6L3.5 21l1.4-5.2A8.5 8.5 0 1 1 21 12z"/>',
  check:    '<path d="M4.5 12.5l5 5 10-11"/>',
  quote:    '<path d="M9.5 5.5C6.4 6.7 4.5 9.4 4.5 13v5.5h6.5V12H7.8c.1-2 1.1-3.4 2.9-4.1zM19.5 5.5c-3.1 1.2-5 3.9-5 7.5v5.5H21V12h-3.2c.1-2 1.1-3.4 2.9-4.1z"/>',
  rocket:   '<path d="M12 2.5c3.4 2.8 5.2 6.4 5.2 10.2L14.7 16h-5.4l-2.5-3.3C6.8 8.9 8.6 5.3 12 2.5z"/><circle cx="12" cy="9.5" r="2"/><path d="M9.3 16l-2 4 3.4-1.2M14.7 16l2 4-3.4-1.2"/>'
};

/* --------------------------------------------------------------------------
   SERVICES — cards, and the form's "Service Required" dropdown
   `key` points at services.<key> in i18n.js
   `value` is stored in the enquiry (English, so your records stay consistent
   whatever language the visitor was using).
   -------------------------------------------------------------------------- */
const VV_SERVICES = [
  { key: "web",      icon: "monitor", value: "Website Development" },
  { key: "logo",     icon: "pen",     value: "Logo Design" },
  { key: "poster",   icon: "poster",  value: "Poster Design" },
  { key: "branding", icon: "sparkle", value: "Branding" },
  { key: "social",   icon: "share",   value: "Social Media Design" },
  { key: "video",    icon: "video",   value: "Video Editing" },
  { key: "digital",  icon: "layers",  value: "Digital Solutions" }
];

/* Which services appear as chips in the hero dashboard visual.
   These are keys from VV_SERVICES above, so the chips always show real
   services and translate along with the rest of the site. */
const VV_HERO_SERVICES = ["web", "logo", "branding", "social", "video", "digital"];

/* About-section highlights → about.highlights.<key> */
const VV_HIGHLIGHTS = [
  { key: "creative", icon: "sparkle" },
  { key: "modern",   icon: "layers" },
  { key: "quality",  icon: "badge" },
  { key: "client",   icon: "handshake" }
];

/* "How We Add Value" — the compact three-step block at the foot of About.
   Text lives at about.value.<key> in i18n.js. Distinct from VV_PROCESS, which
   describes how a project runs; this describes what the client gets out of it. */
const VV_ABOUT_VALUE = [
  { key: "understand", num: "01", icon: "chat" },
  { key: "create",     num: "02", icon: "sparkle" },
  { key: "grow",       num: "03", icon: "rocket" }
];

/* Why choose us → why.<key> */
const VV_REASONS = [
  { key: "creative",  icon: "pen" },
  { key: "pricing",   icon: "tag" },
  { key: "delivery",  icon: "clock" },
  { key: "satisfied", icon: "badge" },
  { key: "modern",    icon: "monitor" },
  { key: "custom",    icon: "layers" }
];

/* --------------------------------------------------------------------------
   ACADEMY
   -------------------------------------------------------------------------- */

/* Benefit strip → academy.benefits.<key> */
const VV_ACADEMY_BENEFITS = [
  { key: "live",    icon: "play" },
  { key: "project", icon: "stack" },
  { key: "hands",   icon: "cursor" },
  { key: "mentor",  icon: "chat" },
  { key: "cert",    icon: "badge" },
  { key: "skills",  icon: "target" }
];

/* Courses → academy.courses.<key>
   `value` is stored in the enquiry, in English, for the same reason. */
const VV_COURSES = [
  { key: "fsPython", icon: "code",     value: "Full Stack Python Development" },
  { key: "fsWeb",    icon: "stack",    value: "Full Stack Web Development" },
  { key: "frontend", icon: "monitor",  value: "Front-End Development" },
  { key: "backend",  icon: "server",   value: "Back-End Development" },
  { key: "mysql",    icon: "database", value: "MySQL & Database Management" },
  { key: "uiux",     icon: "cursor",   value: "UI/UX Design" },
  { key: "graphic",  icon: "pen",      value: "Graphic Design" },
  { key: "digitalMarketing", icon: "target", value: "Digital Marketing" }
];

/* --------------------------------------------------------------------------
   OUR PROCESS → process.<key>
   -------------------------------------------------------------------------- */
const VV_PROCESS = [
  { key: "discuss", num: "01", icon: "chat" },
  { key: "plan",    num: "02", icon: "layers" },
  { key: "design",  num: "03", icon: "cursor" },
  { key: "develop", num: "04", icon: "code" },
  { key: "test",    num: "05", icon: "check" },
  { key: "deliver", num: "06", icon: "rocket" }
];

/* --------------------------------------------------------------------------
   FAQ → faq.<key>.q and faq.<key>.a
   `group` sorts them under the headings in faq.groups
   -------------------------------------------------------------------------- */
/* Eight questions, split into two columns on desktop. Each item opens and
   closes on its own, so expanding one never shifts the other column. */
const VV_FAQ = [
  { key: "q1" },   /* Services */
  { key: "q2" },
  { key: "q4" },
  { key: "q5" },   /* Academy */
  { key: "q6" },
  { key: "q7" },
  { key: "q8" },
  { key: "q9" }    /* Enquiry */
];

/* --------------------------------------------------------------------------
   PORTFOLIO
   `cat` is a stable key used for filtering (never translated).
   Labels come from portfolio.categories.<cat>.

   ─── ADDING A REAL PROJECT ────────────────────────────────────────────────
   1. Drop the image into  assets/portfolio/
   2. Add an entry here with a new `key`
   3. Add its title/text under portfolio.items.<key> in js/i18n.js

   The `detail` block is OPTIONAL. Fill it in and a "View details" button
   appears on the card, opening a case-study popup. Leave it out and the
   card behaves exactly as it does today.

   NOTE: the sample projects below deliberately have NO detail block.
   Inventing a client name, industry or result for work that hasn't happened
   would be fabrication. Add `detail` only to real projects. Template:

     detail: {
       client:   "Client or brand name",
       industry: "Industry",
       overview: "What the project was.",
       problem:  "What the client needed.",
       solution: "What you built or designed.",
       tools:    "Technologies or tools used",
       result:   "The observable outcome.",
       url:      "https://example.com"      // optional — adds a Visit button
     }
   -------------------------------------------------------------------------- */
const VV_CATEGORIES = ["all", "websites", "logos", "posters", "social", "branding"];

const VV_PORTFOLIO = [
  { key: "p1", cat: "websites", image: "assets/portfolio/placeholder-01.svg" },
  { key: "p2", cat: "logos",    image: "assets/portfolio/placeholder-02.svg" },
  { key: "p3", cat: "posters",  image: "assets/portfolio/placeholder-03.svg" },
  { key: "p4", cat: "social",   image: "assets/portfolio/placeholder-04.svg" },
  { key: "p5", cat: "branding", image: "assets/portfolio/placeholder-05.svg" },
  { key: "p6", cat: "websites", image: "assets/portfolio/placeholder-06.svg" },
  { key: "p7", cat: "posters",  image: "assets/portfolio/placeholder-07.svg" },
  { key: "p8", cat: "logos",    image: "assets/portfolio/placeholder-08.svg" },
  { key: "p9", cat: "social",   image: "assets/portfolio/placeholder-09.svg" }
];

/* How many projects show before the "Show all" button.
   Six keeps the section inside one viewport on a 1366 × 768 laptop. */
const VV_PREVIEW_COUNT = 6;

/* --------------------------------------------------------------------------
   TESTIMONIALS

   ─── HOW TO ADD A REAL TESTIMONIAL ────────────────────────────────────────
   Fill in the fields below with words the client actually gave you.

     {
       name: "Priya R",              // the person who said it
       role: "Owner",                // their role — optional
       company: "Sri Traders",       // their business — optional
       rating: 5,                    // 1-5, or 0 to hide the stars
       review: "What they actually said, in their words."
     }

   An entry whose `review` is empty renders as a clearly marked placeholder,
   so the section looks intentional before any real feedback arrives. Stars
   are only drawn when there is a review to go with them — a rating on an
   empty card would be a number nobody gave.

   Add or remove entries freely; the grid reflows. Three reads best on desktop.
   Never write a review on a client's behalf.
   -------------------------------------------------------------------------- */
const VV_TESTIMONIALS = [
  { name: "", role: "", company: "", rating: 5, review: "" },
  { name: "", role: "", company: "", rating: 5, review: "" },
  { name: "", role: "", company: "", rating: 5, review: "" }
];

/* --------------------------------------------------------------------------
   CLIENT PARTNERS — the moving logo strip
   Replace a logo: drop the file into assets/clients/ and change the path.
   The marquee duplicates this list automatically to make the loop seamless,
   so never add a client twice.
   Transparent PNG or SVG at roughly 400 × 200 px works best.
   -------------------------------------------------------------------------- */
const VV_CLIENTS = [
  { name: "Client Partner 1", image: "assets/clients/client-1.svg" },
  { name: "Client Partner 2", image: "assets/clients/client-2.svg" },
  { name: "Client Partner 3", image: "assets/clients/client-3.svg" },
  { name: "Client Partner 4", image: "assets/clients/client-4.svg" },
  { name: "Client Partner 5", image: "assets/clients/client-5.svg" },
  { name: "Client Partner 6", image: "assets/clients/client-6.svg" }
];

/* Seconds of travel per logo — keeps a steady pace at any list length. */
const VV_SECONDS_PER_LOGO = 7;

/* --------------------------------------------------------------------------
   ENQUIRY ENDPOINT
   Paste your Google Apps Script Web App URL here after following
   SETUP-ENQUIRIES.md. Leave it empty to keep the site in demo mode:
   forms validate and confirm, but nothing is sent anywhere.

   This URL is safe to publish. It accepts submissions but grants no access
   to your sheet or your inbox. Never put a password or private API key in
   this file — it is downloaded by every visitor's browser.
   -------------------------------------------------------------------------- */
const VV_ENQUIRY_ENDPOINT = "";

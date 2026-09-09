/* ==========================================================================
   VALAIVADIVAM — site behaviour
   Plain JavaScript. No framework, no build step.
   Depends on: js/i18n.js (text), js/data.js (structure), Bootstrap's bundle.
   ========================================================================== */
(function () {
  "use strict";

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const STORE_LANG  = "vv-lang";
  const STORE_THEME = "vv-theme";

  /* localStorage throws in some private-browsing modes, so every access is
     wrapped — a blocked store should never take the whole site down. */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  /* ------------------------------------------------------------------------
     1. TRANSLATION
     ------------------------------------------------------------------------ */
  let lang = store.get(STORE_LANG) || "en";
  if (!VV_TRANSLATIONS[lang]) lang = "en";

  /** Walks a dot-path like "form.errors.email" into an object. */
  function dig(obj, path) {
    return path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
  }

  /**
   * Looks up a key in the current language.
   * Falls back to English, then to the key itself — a missing translation
   * shows readable text rather than a blank space.
   * `vars` fills {placeholders}:  T("common.showAll", { n: 9 })
   */
  function T(key, vars) {
    let out = dig(VV_TRANSLATIONS[lang], key);
    if (out === undefined) out = dig(VV_TRANSLATIONS.en, key);
    if (out === undefined) return key;
    if (typeof out === "string" && vars) {
      Object.keys(vars).forEach((k) => {
        out = out.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
      });
    }
    return out;
  }

  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function icon(name, stroke) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' +
      (stroke || 1.7) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (VV_ICONS[name] || "") + "</svg>";
  }

  /** Applies the current language to all static markup. */
  function translateStatic() {
    $$("[data-i18n]").forEach((el) => {
      const value = T(el.dataset.i18n);
      el.textContent = value;
      // An empty string means "this language doesn't need this line" — hide
      // the element so it leaves no gap.
      el.classList.toggle("d-none", value === "");
    });
    $$("[data-i18n-placeholder]").forEach((el) => { el.placeholder = T(el.dataset.i18nPlaceholder); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", T(el.dataset.i18nAria)); });
    $$("[data-i18n-title]").forEach((el) => { el.title = T(el.dataset.i18nTitle); });

    document.documentElement.setAttribute("lang", lang);
    document.title = "Valaivadivam | Design • Web • Branding";

    const current = $("#lang-current");
    const meta = VV_LANGUAGES.filter((l) => l.code === lang)[0];
    if (current && meta) current.textContent = meta.short;

    // Written last: this label depends on the current theme, so the generic
    // data-i18n-aria pass above must not be the final word on it.
    updateThemeLabel();
  }

  /** Keeps the toggle's accessible name describing what it will switch TO. */
  function updateThemeLabel() {
    const btn = $("#theme-toggle");
    if (!btn) return;
    btn.setAttribute("aria-label", currentTheme() === "dark" ? T("nav.themeLight") : T("nav.themeDark"));
    btn.setAttribute("title", currentTheme() === "dark" ? T("nav.themeLight") : T("nav.themeDark"));
  }

  /** Re-renders everything that JS builds, in the new language. */
  function renderAll() {
    translateStatic();
    renderHeroVisual();
    renderHighlights();
    renderAboutValue();
    renderServices();
    renderServiceOptions();
    renderReasons();
    renderAcademy();
    renderTestimonials();
    renderProcess();
    renderFaq();
    renderClients();
    renderFilters();
    renderPortfolio();
    observeReveals();
  }

  function setLanguage(code) {
    if (!VV_TRANSLATIONS[code]) return;
    lang = code;
    store.set(STORE_LANG, code);
    renderAll();
    buildLangMenu();
  }

  function buildLangMenu() {
    const menu = $("#lang-menu");
    if (!menu) return;
    menu.innerHTML = VV_LANGUAGES.map((l) =>
      '<li><button type="button" class="dropdown-item' + (l.code === lang ? " active" : "") +
      '" data-lang="' + l.code + '">' + esc(l.label) + "</button></li>"
    ).join("");

    $$("#lang-menu [data-lang]").forEach((btn) => {
      btn.addEventListener("click", function () { setLanguage(this.dataset.lang); });
    });
  }

  /* ------------------------------------------------------------------------
     2. THEME
     The initial value is applied by a tiny inline script in <head> so there's
     no white flash before this file loads. Here we only handle toggling.
     ------------------------------------------------------------------------ */
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    store.set(STORE_THEME, theme);
    updateThemeLabel();
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0B1524" : "#1A56DB");
  }

  const themeBtn = $("#theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  /* Follow the system preference, but only while the visitor hasn't chosen
     one of their own. */
  if (window.matchMedia) {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e) => {
      if (!store.get(STORE_THEME)) setTheme(e.matches ? "dark" : "light");
    };
    if (mq.addEventListener) mq.addEventListener("change", onSystemChange);
    else if (mq.addListener) mq.addListener(onSystemChange);
  }

  /* ------------------------------------------------------------------------
     3. RENDERING
     ------------------------------------------------------------------------ */
  function renderHighlights() {
    const host = $("#highlights");
    if (!host) return;
    host.innerHTML = VV_HIGHLIGHTS.map((item, i) =>
      '<div class="col-6">' +
        '<div class="vv-card p-3 p-sm-4 reveal" style="transition-delay:' + i * 80 + 'ms">' +
          '<span class="vv-icon">' + icon(item.icon) + "</span>" +
          '<h3 class="fw-semibold mt-3 mb-0" style="font-size:.95rem">' +
            esc(T("about.highlights." + item.key)) +
          "</h3>" +
        "</div>" +
      "</div>"
    ).join("");
  }

  /* Hero dashboard: service chips inside the browser mockup, plus two
     compact chips in the phone. Both read VV_SERVICES, so they translate
     with everything else and stay in step with the real service list. */
  function renderHeroVisual() {
    const grid = $("#hero-services");
    if (grid) {
      grid.innerHTML = VV_HERO_SERVICES.map((key, i) => {
        const svc = VV_SERVICES.filter((s) => s.key === key)[0];
        if (!svc) return "";
        return '<div class="col-6">' +
          '<span class="dash-chip" style="animation-delay:' + (i * 90) + 'ms">' +
            '<span class="dash-chip-icon">' + icon(svc.icon, 2) + "</span>" +
            '<span class="dash-chip-label">' + esc(T("services." + svc.key + ".title")) + "</span>" +
          "</span>" +
        "</div>";
      }).join("");
    }

    const phone = $("#hero-phone-chips");
    if (phone) {
      phone.innerHTML = VV_HERO_SERVICES.slice(0, 2).map((key) => {
        const svc = VV_SERVICES.filter((s) => s.key === key)[0];
        if (!svc) return "";
        return '<span class="dash-chip dash-chip-sm">' +
          '<span class="dash-chip-icon">' + icon(svc.icon, 2) + "</span>" +
          '<span class="dash-chip-label">' + esc(T("services." + svc.key + ".title")) + "</span>" +
        "</span>";
      }).join("");
    }
  }

  /* "How We Add Value" — the compact three-step block closing out About. */
  function renderAboutValue() {
    const host = $("#about-value");
    if (!host) return;
    host.innerHTML = VV_ABOUT_VALUE.map((step, i) =>
      '<div class="col-12 col-sm-4">' +
        '<div class="value-card reveal" style="transition-delay:' + i * 70 + 'ms">' +
          '<div class="value-top">' +
            '<span class="value-icon">' + icon(step.icon) + "</span>" +
            '<span class="value-num">' + esc(step.num) + "</span>" +
          "</div>" +
          '<h4 class="value-title">' + esc(T("about.value." + step.key + ".title")) + "</h4>" +
          '<p class="value-text">' + esc(T("about.value." + step.key + ".text")) + "</p>" +
        "</div>" +
      "</div>"
    ).join("");
  }

  function renderServices() {
    const host = $("#services-grid");
    if (!host) return;
    host.innerHTML = VV_SERVICES.map((s, i) =>
      '<div class="col-12 col-sm-6 col-lg-4">' +
        '<article class="vv-card p-3 p-sm-4 d-flex gap-3 flex-sm-column reveal" style="transition-delay:' + i * 60 + 'ms">' +
          '<span class="vv-icon">' + icon(s.icon) + "</span>" +
          '<div class="mt-sm-3">' +
            '<h3 class="fw-semibold mb-2" style="font-size:1rem">' + esc(T("services." + s.key + ".title")) + "</h3>" +
            '<p class="text-slate mb-0" style="font-size:.86rem">' + esc(T("services." + s.key + ".text")) + "</p>" +
          "</div>" +
        "</article>" +
      "</div>"
    ).join("");
  }

  /** Keeps the contact form's dropdown in step with the services list. */
  function renderServiceOptions() {
    const select = $("#service");
    if (!select) return;
    const chosen = select.value;
    select.innerHTML = '<option value="">' + esc(T("form.chooseService")) + "</option>" +
      VV_SERVICES.map((s) =>
        '<option value="' + esc(s.value) + '">' + esc(T("services." + s.key + ".title")) + "</option>"
      ).join("");
    if (chosen) select.value = chosen;
    select.classList.toggle("placeholder", !select.value);
  }

  function renderReasons() {
    const host = $("#reasons-grid");
    if (!host) return;
    host.innerHTML = VV_REASONS.map((r, i) =>
      '<div class="col-6 col-sm-4 col-lg-2">' +
        '<div class="vv-card d-flex flex-column align-items-center text-center gap-2 px-2 py-3 h-100 reveal" style="transition-delay:' + i * 50 + 'ms">' +
          '<span class="vv-icon">' + icon(r.icon) + "</span>" +
          '<h3 class="fw-semibold mb-0" style="font-size:.85rem;line-height:1.3">' + esc(T("why." + r.key)) + "</h3>" +
        "</div>" +
      "</div>"
    ).join("");
  }

  /* ---- Academy --------------------------------------------------------- */
  function renderAcademy() {
    const benefits = $("#academy-benefits");
    if (benefits) {
      benefits.innerHTML = VV_ACADEMY_BENEFITS.map((b) =>
        '<span class="benefit-chip">' +
          '<span class="vv-icon">' + icon(b.icon, 2) + "</span>" +
          esc(T("academy.benefits." + b.key)) +
        "</span>"
      ).join("");
    }

    const grid = $("#courses-grid");
    if (grid) {
      grid.innerHTML = VV_COURSES.map((c, i) => {
        const points = T("academy.courses." + c.key + ".points");
        const list = Array.isArray(points)
          ? '<ul class="course-points">' + points.map((pt) => "<li>" + esc(pt) + "</li>").join("") + "</ul>"
          : "";

        return '<div class="col-12 col-sm-6 col-lg-4">' +
          '<article class="vv-card course-card p-3 p-sm-4 reveal" style="transition-delay:' + i * 50 + 'ms">' +
            '<div class="d-flex align-items-start justify-content-between gap-2">' +
              '<span class="vv-icon">' + icon(c.icon) + "</span>" +
              '<span class="online-pill">' + esc(T("common.onlineMode")) + "</span>" +
            "</div>" +
            '<h4 class="fw-semibold mt-3 mb-2" style="font-size:1rem">' + esc(T("academy.courses." + c.key + ".title")) + "</h4>" +
            '<p class="text-slate mb-0" style="font-size:.85rem">' + esc(T("academy.courses." + c.key + ".text")) + "</p>" +
            list +
            '<button type="button" class="btn-vv w-100 mt-3" data-course-enquiry="' + esc(c.value) + '">' +
              esc(T("common.enquireNow")) +
            "</button>" +
          "</article>" +
        "</div>";
      }).join("");
    }

    /* Populate the popup's course dropdown from the same list */
    const select = $("#c-course");
    if (select) {
      const chosen = select.value;
      select.innerHTML = '<option value="">' + esc(T("form.chooseCourse")) + "</option>" +
        VV_COURSES.map((c) =>
          '<option value="' + esc(c.value) + '">' + esc(T("academy.courses." + c.key + ".title")) + "</option>"
        ).join("");
      if (chosen) select.value = chosen;
    }
  }

  /* ---- Process --------------------------------------------------------- */
  function renderProcess() {
    const host = $("#process-grid");
    if (!host) return;

    // 3 x 2 on desktop, 2 columns on tablet, 1 on mobile. The connector line
    // is drawn by CSS between cards in the same row, so it never dangles at
    // the end of a row or on a stacked mobile layout.
    host.innerHTML = VV_PROCESS.map((step, i) =>
      '<div class="col-12 col-sm-6 col-lg-4">' +
        '<div class="process-step reveal" style="transition-delay:' + i * 70 + 'ms">' +
          '<div class="process-head">' +
            '<span class="process-icon">' + icon(step.icon) + "</span>" +
            '<span class="process-num">' + esc(step.num) + "</span>" +
          "</div>" +
          '<h3 class="process-title">' + esc(T("process." + step.key + ".title")) + "</h3>" +
          '<p class="process-text">' + esc(T("process." + step.key + ".text")) + "</p>" +
        "</div>" +
      "</div>"
    ).join("");
  }

  /* ---- FAQ ------------------------------------------------------------- */
  function renderFaq() {
    const c1 = $("#faq-col-1");
    const c2 = $("#faq-col-2");
    if (!c1 || !c2) return;

    // Single-open accordion. Bootstrap's own data-bs-parent only groups items
    // that share one DOM ancestor list, which these don't — they're split
    // across two columns. So the grouping is handled by a listener below
    // (wireFaqSingleOpen) that spans the whole #faq-grid.
    const item = (entry, i) =>
      '<div class="accordion-item">' +
        '<h3 class="accordion-header">' +
          '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" ' +
            'data-bs-target="#faq-body-' + i + '" aria-expanded="false" aria-controls="faq-body-' + i + '">' +
            esc(T("faq." + entry.key + ".q")) +
          "</button>" +
        "</h3>" +
        '<div id="faq-body-' + i + '" class="accordion-collapse collapse">' +
          '<div class="accordion-body">' + esc(T("faq." + entry.key + ".a")) + "</div>" +
        "</div>" +
      "</div>";

    const half = Math.ceil(VV_FAQ.length / 2);
    c1.innerHTML = '<div class="accordion">' + VV_FAQ.slice(0, half).map((e, i) => item(e, i)).join("") + "</div>";
    c2.innerHTML = '<div class="accordion">' + VV_FAQ.slice(half).map((e, i) => item(e, i + half)).join("") + "</div>";
  }

  /**
   * Keeps exactly one FAQ answer open at a time, across both columns.
   *
   * Bound once to #faq-grid rather than to each item, so it survives the
   * re-render that happens on a language change. When any answer starts to
   * open, every other open answer in the grid is told to close — Bootstrap
   * animates both, so the transition stays smooth and the button's
   * aria-expanded / chevron state is updated for free.
   *
   * Clicking the open item still closes it: that fires `hide`, not `show`,
   * so this handler doesn't interfere.
   */
  function wireFaqSingleOpen() {
    const grid = $("#faq-grid");
    if (!grid || !window.bootstrap) return;

    grid.addEventListener("show.bs.collapse", function (event) {
      $$(".accordion-collapse.show", grid).forEach((panel) => {
        if (panel !== event.target) {
          bootstrap.Collapse.getOrCreateInstance(panel).hide();
        }
      });
    });
  }

  /* ---- Testimonials -----------------------------------------------------
     An entry with an empty `review` renders as a clearly marked placeholder.
     Stars are drawn ONLY when there is a review, so the page never shows a
     rating nobody actually gave. */
  function renderTestimonials() {
    const host = $("#testimonials-grid");
    if (!host) return;

    const stars = (n) => {
      const count = Math.max(0, Math.min(5, Math.round(n || 0)));
      if (!count) return "";
      let out = '<span class="t-stars" aria-label="' + count + ' out of 5">';
      for (let i = 0; i < count; i++) {
        out += '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
          '<path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.5l1.1-6.5L2.6 9.4l6.5-.9z"/></svg>';
      }
      return out + "</span>";
    };

    host.innerHTML = VV_TESTIMONIALS.map((t, i) => {
      const hasReview = (t.review || "").trim() !== "";

      const who = hasReview
        ? '<p class="t-name">' + esc(t.name || "") + "</p>" +
          ((t.role || t.company)
            ? '<p class="t-role">' + esc([t.role, t.company].filter(Boolean).join(", ")) + "</p>"
            : "")
        : '<p class="t-name t-name-empty">' + esc(T("testimonials.placeholderName")) + "</p>";

      return '<div class="col-12 col-md-6 col-lg-4">' +
        '<figure class="t-card' + (hasReview ? "" : " is-empty") + ' reveal" style="transition-delay:' + i * 70 + 'ms">' +
          '<span class="t-quote">' + icon("quote", 0) + "</span>" +
          (hasReview ? stars(t.rating) : "") +
          '<blockquote class="t-text">' +
            (hasReview ? esc(t.review) : esc(T("testimonials.placeholder"))) +
          "</blockquote>" +
          "<figcaption>" + who + "</figcaption>" +
        "</figure>" +
      "</div>";
    }).join("");
  }

  /* ---- Clients --------------------------------------------------------- */
  function renderClients() {
    const track = $("#marquee-track");
    if (!track) return;

    // Two passes of the same list. The second is hidden from screen readers
    // so the logos aren't announced twice.
    const pass = (hidden) => VV_CLIENTS.map((c) =>
      '<figure class="client-card mb-0"' + (hidden ? ' aria-hidden="true"' : "") + ">" +
        '<img src="' + esc(c.image) + '" alt="' + (hidden ? "" : esc(c.name) + " logo") +
        '" loading="lazy" decoding="async" width="400" height="200" />' +
      "</figure>"
    ).join("");

    track.innerHTML = pass(false) + pass(true);
    track.style.setProperty("--marquee-duration", VV_CLIENTS.length * VV_SECONDS_PER_LOGO + "s");
  }

  /* ---- Portfolio ------------------------------------------------------- */
  let activeCategory = "all";
  let showAll = false;

  function renderFilters() {
    const host = $("#filters");
    if (!host) return;
    host.innerHTML = VV_CATEGORIES.map((cat) =>
      '<button type="button" class="filter-btn' + (cat === activeCategory ? " active" : "") +
      '" data-category="' + cat + '" aria-pressed="' + (cat === activeCategory) + '">' +
      esc(T("portfolio.categories." + cat)) + "</button>"
    ).join("");

    $$("#filters .filter-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        activeCategory = this.dataset.category;
        // Collapse back to the preview so the section never quietly grows
        // past the viewport behind the visitor's back.
        showAll = false;
        renderFilters();
        renderPortfolio();
      });
    });
  }

  function renderPortfolio() {
    const host = $("#folio-grid");
    const toggle = $("#folio-toggle");
    const status = $("#folio-status");
    if (!host) return;

    const matches = activeCategory === "all"
      ? VV_PORTFOLIO
      : VV_PORTFOLIO.filter((p) => p.cat === activeCategory);

    const visible = showAll ? matches : matches.slice(0, VV_PREVIEW_COUNT);

    host.innerHTML = visible.map((p, i) => {
      // The details button only appears for projects that actually have a
      // case study filled in — see the note in data.js.
      const detailBtn = p.detail
        ? '<button type="button" class="btn-vv-outline w-100 mt-3" style="padding:.45rem 1rem;font-size:.82rem" ' +
          'data-project="' + esc(p.key) + '">' + esc(T("common.viewDetails")) + "</button>"
        : "";

      return '<div class="col-6 col-lg-4 folio-item">' +
        '<article class="vv-card overflow-hidden reveal" style="transition-delay:' + i * 50 + 'ms">' +
          '<div class="folio-media">' +
            '<img src="' + esc(p.image) + '" alt="' + esc(T("portfolio.items." + p.key + ".title")) +
              " — " + esc(T("portfolio.categories." + p.cat)) + '" loading="lazy" decoding="async" ' +
              'width="1600" height="900" />' +
            '<span class="folio-tag">' + esc(T("portfolio.categories." + p.cat)) + "</span>" +
          "</div>" +
          '<div class="p-3">' +
            '<h3 class="fw-semibold mb-1" style="font-size:.92rem">' + esc(T("portfolio.items." + p.key + ".title")) + "</h3>" +
            '<p class="text-slate mb-0 d-none d-sm-block" style="font-size:.82rem">' + esc(T("portfolio.items." + p.key + ".text")) + "</p>" +
            detailBtn +
          "</div>" +
        "</article>" +
      "</div>";
    }).join("");

    if (status) {
      status.textContent = T("portfolio.status", {
        shown: visible.length,
        total: matches.length,
        category: T("portfolio.categories." + activeCategory)
      });
    }

    if (toggle) {
      if (matches.length > VV_PREVIEW_COUNT) {
        toggle.style.display = "";
        toggle.textContent = showAll ? T("common.showLess") : T("common.showAll", { n: matches.length });
      } else {
        toggle.style.display = "none";
      }
    }

    $$("#folio-grid [data-project]").forEach((btn) => {
      btn.addEventListener("click", function () { openProject(this.dataset.project); });
    });

    observeReveals();
  }

  const folioToggle = $("#folio-toggle");
  if (folioToggle) {
    folioToggle.addEventListener("click", function () {
      showAll = !showAll;
      renderPortfolio();
    });
  }

  /** Opens the case-study popup for a project that has a `detail` block. */
  function openProject(key) {
    const project = VV_PORTFOLIO.filter((p) => p.key === key)[0];
    if (!project || !project.detail || !window.bootstrap) return;

    const d = project.detail;
    const rows = [
      ["client", d.client], ["industry", d.industry], ["overview", d.overview],
      ["problem", d.problem], ["solution", d.solution], ["tools", d.tools],
      ["result", d.result]
    ].filter((r) => r[1]);

    $("#projectModalTitle").textContent = T("portfolio.items." + key + ".title");
    $("#projectModalBody").innerHTML =
      '<img src="' + esc(project.image) + '" alt="" class="w-100 rounded-3 mb-3" style="object-fit:cover" />' +
      rows.map((r) =>
        '<div class="case-row">' +
          '<span class="case-label">' + esc(T("portfolio.labels." + r[0])) + "</span>" +
          '<span class="case-value">' + esc(r[1]) + "</span>" +
        "</div>"
      ).join("") +
      (d.url
        ? '<a class="btn-vv w-100 mt-3" href="' + esc(d.url) + '" target="_blank" rel="noopener noreferrer">' +
          esc(T("portfolio.labels.visit")) + "</a>"
        : "");

    bootstrap.Modal.getOrCreateInstance($("#projectModal")).show();
  }

  /* ------------------------------------------------------------------------
     4. NAVBAR
     ------------------------------------------------------------------------ */
  const navbar = $("#navbar");
  const navLinks = $$(".vv-navbar .nav-link");
  const sectionIds = navLinks.map((a) => a.getAttribute("href").slice(1));

  function onScrollShadow() {
    if (navbar) navbar.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScrollShadow();
  window.addEventListener("scroll", onScrollShadow, { passive: true });

  function setActive(id) {
    navLinks.forEach((a) => {
      const on = a.getAttribute("href") === "#" + id;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  /* Clicking a link sets the underline immediately and briefly ignores the
     observer, so it doesn't flicker through every section the smooth scroll
     passes over. It also closes the mobile menu. */
  let lockedUntil = 0;
  document.addEventListener("click", function (event) {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href").slice(1);
    if (!id) return;

    lockedUntil = Date.now() + 900;
    if (sectionIds.indexOf(id) !== -1) setActive(id);

    const menu = $("#vvNav");
    if (menu && menu.classList.contains("show") && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });

  /* Active-section detection.
     A "reading band" sits just under the navbar: the top is inset by the
     navbar height and the bottom pulled up to 55%, so only the upper slice of
     the viewport counts. When several sections qualify, the lowest on the page
     wins — that's what stops Portfolio staying underlined once Contact has
     arrived. */
  function watchSections() {
    if (!("IntersectionObserver" in window)) return;

    const navH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--vv-nav-h"), 10
    ) || 64;

    const visible = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });

      if (Date.now() < lockedUntil) return;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        if (visible.has(sectionIds[i])) { setActive(sectionIds[i]); return; }
      }
    }, { rootMargin: "-" + (navH + 1) + "px 0px -55% 0px", threshold: 0 });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", function () {
      if (Date.now() < lockedUntil) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        setActive(sectionIds[sectionIds.length - 1]);
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     5. SCROLL REVEALS
     ------------------------------------------------------------------------ */
  let revealObserver = null;

  function observeReveals() {
    const items = $$(".reveal:not(.is-visible)");

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }

    items.forEach((el) => revealObserver.observe(el));
  }

  /* ------------------------------------------------------------------------
     6. FORM VALIDATION
     Shared by the contact form and the course popup.
     ------------------------------------------------------------------------ */
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

  function validate(field, value) {
    const v = (value || "").trim();

    if (field === "name") {
      if (!v) return T("form.errors.name");
      if (v.length < 2) return T("form.errors.nameShort");
      return "";
    }
    if (field === "email") {
      if (!v) return T("form.errors.email");
      if (!EMAIL_RE.test(v)) return T("form.errors.emailInvalid");
      return "";
    }
    if (field === "phone") {
      if (!v) return T("form.errors.phone");
      const digits = v.replace(/[^\d]/g, "");
      if (digits.length < 10 || digits.length > 15) return T("form.errors.phoneInvalid");
      return "";
    }
    if (field === "service" && !v) return T("form.errors.service");
    if (field === "course" && !v) return T("form.errors.course");
    return "";
  }

  function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const box = document.getElementById(inputId + "-error");
    if (!input || !box) return;

    if (message) {
      input.classList.add("is-invalid");
      input.setAttribute("aria-invalid", "true");
      box.textContent = message;
      box.classList.add("show");
    } else {
      input.classList.remove("is-invalid");
      input.removeAttribute("aria-invalid");
      box.textContent = "";
      box.classList.remove("show");
    }
  }

  function setStatus(boxId, type, message) {
    const box = document.getElementById(boxId);
    if (!box) return;
    box.className = "form-status" + (type ? " show " + type : "");
    box.textContent = message || "";
  }

  /**
   * Wires up a form.
   * fields: [{ id: "c-name", name: "name", rule: "name" }]
   * `rule` is which validator to use; omit it for optional fields.
   */
  function wireForm(opts) {
    const form = document.getElementById(opts.formId);
    if (!form) return;

    const touched = {};
    const required = opts.fields.filter((f) => f.rule);

    required.forEach((f) => {
      const input = document.getElementById(f.id);
      if (!input) return;

      input.addEventListener("blur", function () {
        touched[f.id] = true;
        showError(f.id, validate(f.rule, this.value));
      });

      // Clear an error as soon as the visitor fixes it — no nagging.
      const live = input.tagName === "SELECT" ? "change" : "input";
      input.addEventListener(live, function () {
        if (input.tagName === "SELECT") this.classList.toggle("placeholder", !this.value);
        if (touched[f.id]) showError(f.id, validate(f.rule, this.value));
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      setStatus(opts.statusId, null, "");

      let firstInvalid = null;
      required.forEach((f) => {
        touched[f.id] = true;
        const input = document.getElementById(f.id);
        const message = validate(f.rule, input ? input.value : "");
        showError(f.id, message);
        if (message && !firstInvalid) firstInvalid = input;
      });

      if (firstInvalid) { firstInvalid.focus(); return; }

      const payload = { type: opts.type, submittedAt: new Date().toISOString(), status: "New" };
      opts.fields.forEach((f) => {
        const input = document.getElementById(f.id);
        payload[f.name] = input ? input.value.trim() : "";
      });
      if (opts.extra) Object.keys(opts.extra).forEach((k) => { payload[k] = opts.extra[k]; });

      const btn = document.getElementById(opts.submitId);
      const label = document.getElementById(opts.labelId);
      const originalLabel = label ? label.textContent : "";

      btn.disabled = true;
      if (label) label.textContent = T("common.sending");

      sendEnquiry(payload)
        .then(function () {
          form.reset();
          opts.fields.forEach((f) => showError(f.id, ""));
          $$("select", form).forEach((sel) => sel.classList.add("placeholder"));
          Object.keys(touched).forEach((k) => delete touched[k]);
          setStatus(opts.statusId, "success", T(opts.successKey));
        })
        .catch(function (err) {
          setStatus(opts.statusId, "error", (err && err.message) || T("form.failure"));
        })
        .then(function () {
          btn.disabled = false;
          if (label) label.textContent = originalLabel || T(opts.labelKey || "common.sendEnquiry");
        });
    });
  }

  wireForm({
    formId: "enquiry-form", statusId: "form-status",
    submitId: "submit-btn", labelId: "submit-label",
    type: "Service Enquiry", successKey: "form.success",
    fields: [
      { id: "name", name: "name", rule: "name" },
      { id: "email", name: "email", rule: "email" },
      { id: "phone", name: "phone", rule: "phone" },
      { id: "company", name: "company" },
      { id: "service", name: "service", rule: "service" },
      { id: "message", name: "message" }
    ]
  });

  wireForm({
    formId: "course-form", statusId: "course-status",
    submitId: "course-submit", labelId: "course-submit-label",
    type: "Course Enquiry", successKey: "form.courseSuccess", labelKey: "common.submitEnquiry",
    extra: { trainingMode: "100% Online" },
    fields: [
      { id: "c-name", name: "name", rule: "name" },
      { id: "c-phone", name: "phone", rule: "phone" },
      { id: "c-email", name: "email", rule: "email" },
      { id: "c-course", name: "course", rule: "course" },
      { id: "c-message", name: "message" }
    ]
  });

  /* ------------------------------------------------------------------------
     7. COURSE POPUP
     Any element with data-course-enquiry opens it. The attribute's value
     preselects that course; an empty value opens the popup with no
     course chosen (used by the Academy CTA button).
     ------------------------------------------------------------------------ */
  document.addEventListener("click", function (event) {
    const trigger = event.target.closest("[data-course-enquiry]");
    if (!trigger || !window.bootstrap) return;

    const course = trigger.getAttribute("data-course-enquiry");
    const select = $("#c-course");

    setStatus("course-status", null, "");
    ["c-name", "c-phone", "c-email", "c-course"].forEach((id) => showError(id, ""));

    if (select) {
      select.value = course || "";
      select.classList.toggle("placeholder", !select.value);
    }

    bootstrap.Modal.getOrCreateInstance($("#courseModal")).show();
  });

  /* ==========================================================================
     8. SENDING AN ENQUIRY

     If VV_ENQUIRY_ENDPOINT in data.js is empty, this runs in DEMO MODE:
     the form validates, confirms and logs the payload, but sends nothing.

     Set the endpoint to your Google Apps Script Web App URL (see
     SETUP-ENQUIRIES.md) and submissions will be written to your Google Sheet
     and emailed to you.

     `mode: "no-cors"` is used because Apps Script doesn't return CORS headers
     for anonymous POSTs. The request still arrives; we just can't read the
     reply, so a network-level failure is the only thing we can detect.
     ========================================================================== */
  function sendEnquiry(payload) {
    if (!window.VV_ENQUIRY_ENDPOINT && typeof VV_ENQUIRY_ENDPOINT === "undefined") {
      return Promise.resolve({ demo: true });
    }

    const endpoint = typeof VV_ENQUIRY_ENDPOINT !== "undefined" ? VV_ENQUIRY_ENDPOINT : "";

    if (!endpoint) {
      console.info("[Valaivadivam] Enquiry captured (demo mode):", payload);
      return new Promise((resolve) => setTimeout(() => resolve({ demo: true }), 800));
    }

    return fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    }).catch(function () {
      throw new Error(T("form.failure"));
    });
  }

  /* ------------------------------------------------------------------------
     9. START
     ------------------------------------------------------------------------ */
  setTheme(currentTheme());   // syncs the toggle's label with the pre-applied theme
  buildLangMenu();
  renderAll();
  wireFaqSingleOpen();
  watchSections();
  setActive("home");
})();

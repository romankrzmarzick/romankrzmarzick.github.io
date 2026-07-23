/* =========================================================================
   site.js — shared components + per-page rendering.
   Reads everything from assets/js/content.js (window.SITE).
   No dependencies, no build step.
   ========================================================================= */
(function () {
  "use strict";

  const S = window.SITE || {};
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------------------------------------------------------------- utils */

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Tiny inline markdown: **bold**, *italic*, `code`, [text](url)
  function inline(str) {
    return esc(str)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+|[^)\s]+)\)/g,
        '<a href="$2">$1</a>'
      );
  }

  function initialsOf(title) {
    return String(title || "")
      .replace(/[^A-Za-z0-9 ]/g, " ")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  /* ---------------------------------------------------------------- icons */

  const ICONS = {
    github:
      '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
    linkedin:
      '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.65h.05A4.17 4.17 0 0 1 16.6 8.7c4 0 4.74 2.5 4.74 5.76V21h-4v-5.7c0-1.36-.03-3.11-1.94-3.11-1.94 0-2.24 1.48-2.24 3.01V21H9V9Z"/>',
    // Career profile (Handshake) — a briefcase reads clearly at icon size.
    handshake:
      '<path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7h-2V5.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V7H8Z"/>' +
      '<path d="M3 8h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8 4v2h2v-2h-2Z"/>',
    mail:
      '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.2V18h16V7.2l-8 5.3-8-5.3ZM19.4 6H4.6L12 10.9 19.4 6Z"/>',
    instagram:
      '<path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.05A6.75 6.75 0 1 0 18.75 12 6.75 6.75 0 0 0 12 5.25Zm0 11.13A4.38 4.38 0 1 1 16.38 12 4.38 4.38 0 0 1 12 16.38Zm6.94-11.4a1.58 1.58 0 1 1-1.57-1.58 1.58 1.58 0 0 1 1.57 1.58Z"/>',
    x: '<path d="M17.53 3h3.05l-6.66 7.61L21.75 21h-6.13l-4.8-6.28L5.32 21H2.27l7.13-8.15L2.25 3h6.28l4.34 5.74L17.53 3Zm-1.07 16.17h1.69L7.62 4.74H5.8l10.66 14.43Z"/>',
    youtube:
      '<path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.02V8.98L15.2 12 10 15.02Z"/>',
    external:
      '<path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Zm5 16v-6h2v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7v2H5v14h14Z"/>',
    search:
      '<path d="M10.5 3a7.5 7.5 0 1 1-4.62 13.4l-3.2 3.2-1.42-1.42 3.2-3.2A7.5 7.5 0 0 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/>',
    arrow:
      '<path d="M13.17 5.17 11.76 6.59 16.17 11H4v2h12.17l-4.41 4.41 1.41 1.42L20 12l-6.83-6.83Z"/>',
    download:
      '<path d="M12 3v10.17l3.59-3.58L17 11l-5 5-5-5 1.41-1.41L12 13.17V3h0ZM5 19h14v2H5v-2Z"/>',
    doc: '<path d="M6 2h8l6 6v14H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 1.5V9h5.5L13 3.5ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Z"/>',
    map: '<path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6.5a2.5 2.5 0 0 0 0 5Z"/>',
    menu: '<path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/>',
    close: '<path d="m12 10.59 5.3-5.3 1.41 1.42-5.3 5.29 5.3 5.3-1.42 1.41-5.29-5.3-5.3 5.3-1.41-1.42 5.3-5.29-5.3-5.3L6.7 5.3l5.29 5.3Z"/>',
    moon: '<path d="M12.3 2a9.5 9.5 0 1 0 9.4 11.6 7.5 7.5 0 0 1-9.4-9.4c0-.74.09-1.47.27-2.17A9.6 9.6 0 0 0 12.3 2Z"/>',
    sun: '<path d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-1-14h2v3h-2V1Zm0 19h2v3h-2v-3ZM1 11h3v2H1v-2Zm19 0h3v2h-3v-2ZM4.2 5.6l1.4-1.4 2.1 2.1-1.4 1.4-2.1-2.1Zm12.1 12.1 1.4-1.4 2.1 2.1-1.4 1.4-2.1-2.1Zm2.1-13.5 1.4 1.4-2.1 2.1-1.4-1.4 2.1-2.1ZM6.3 16.3l1.4 1.4-2.1 2.1-1.4-1.4 2.1-2.1Z"/>',
  };

  function icon(name, cls) {
    const path = ICONS[name];
    if (!path) return "";
    return (
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"' +
      (cls ? ' class="' + cls + '"' : "") +
      ">" + path + "</svg>"
    );
  }

  /* ------------------------------------------------------- theme handling */

  const THEME_KEY = "rk-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#fcf7ef" : "#17130d");
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }

  function initTheme() {
    // Default is the warm light theme for a friendly first impression.
    // A visitor's saved choice always wins; dark is one toggle away.
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    applyTheme(saved === "dark" ? "dark" : "light");
  }

  function toggleTheme() {
    const next = currentTheme() === "light" ? "dark" : "light";
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  }

  /* ------------------------------------------------------ header & footer */

  const NAV = [
    { href: "index.html", label: "Home", page: "home" },
    { href: "about.html", label: "About", page: "about" },
    { href: "projects.html", label: "Projects", page: "projects" },
    { href: "experience.html", label: "Experience", page: "experience" },
    { href: "resume.html", label: "Resume", page: "resume" },
  ];

  function socialLinks() {
    return (S.socials || [])
      .map(
        (s) =>
          '<a href="' + esc(s.href) + '" aria-label="' + esc(s.label) + '"' +
          (s.href.indexOf("http") === 0 ? ' target="_blank" rel="noopener noreferrer"' : "") +
          ">" + icon(s.icon || "external") + "</a>"
      )
      .join("");
  }

  function renderHeader() {
    const host = $("#site-header");
    if (!host) return;
    const page = document.body.dataset.page;

    host.className = "site-header";
    host.innerHTML =
      '<div class="container">' +
        '<nav class="nav" aria-label="Primary">' +
          '<a class="brand" href="index.html">' +
            '<span class="brand-mark" aria-hidden="true">' + esc(S.initials || "RK") + "</span>" +
            "<span>" + esc(S.name || "") + "</span>" +
          "</a>" +
          '<ul class="nav-links" id="nav-links">' +
            NAV.map(
              (n) =>
                "<li><a href=" + '"' + n.href + '"' +
                (n.page === page ? ' aria-current="page"' : "") +
                ">" + n.label + "</a></li>"
            ).join("") +
          "</ul>" +
          '<div class="nav-actions">' +
            '<button class="icon-btn" id="theme-toggle" type="button" aria-label="Toggle color theme">' +
              icon("moon", "icon-moon") + icon("sun", "icon-sun") +
            "</button>" +
            '<button class="icon-btn nav-toggle" id="nav-toggle" type="button" ' +
              'aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">' +
              icon("menu", "icon-menu") +
            "</button>" +
          "</div>" +
        "</nav>" +
      "</div>";

    $("#theme-toggle").addEventListener("click", toggleTheme);

    const navToggle = $("#nav-toggle");
    navToggle.addEventListener("click", function () {
      const open = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.innerHTML = icon(open ? "close" : "menu");
    });

    // Close the mobile menu on navigation or Escape.
    $$("#nav-links a").forEach((a) =>
      a.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.innerHTML = icon("menu");
      })
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.innerHTML = icon("menu");
        navToggle.focus();
      }
    });

    const onScroll = () => host.classList.toggle("is-stuck", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function renderFooter() {
    const host = $("#site-footer");
    if (!host) return;
    host.className = "site-footer";
    host.innerHTML =
      '<div class="container footer-inner">' +
        "<div>" +
          '<a class="footer-email" href="mailto:' + esc(S.email) + '">' +
            icon("mail") + esc(S.email) +
          "</a>" +
          "<p>&copy; " + new Date().getFullYear() + " " + esc(S.name || "") + "</p>" +
        "</div>" +
        '<div class="social-row">' + socialLinks() + "</div>" +
      "</div>";
  }

  /* ------------------------------------------------------------- behavior */

  function initReveal() {
    const items = $$("[data-reveal]");
    if (!items.length) return;

    const reduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    items.forEach((el) => io.observe(el));
  }

  // Stagger children of any [data-stagger] container.
  function applyStagger(root) {
    $$("[data-stagger]", root || document).forEach((container) => {
      const step = Number(container.dataset.stagger) || 60;
      Array.from(container.children).forEach((child, i) => {
        child.setAttribute("data-reveal", "");
        child.style.setProperty("--delay", i * step + "ms");
      });
    });
  }

  // Pointer-tracked glow on cards.
  function initCardGlow() {
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) return;
    document.addEventListener(
      "pointermove",
      (e) => {
        const card = e.target.closest ? e.target.closest(".card, .cta") : null;
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      },
      { passive: true }
    );
  }

  // Click a project screenshot's play button -> swap in the video.
  // Delegated once so it works on every page and survives re-renders.
  function initVideoThumbs() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest ? e.target.closest(".play-btn") : null;
      if (!btn) return;
      e.preventDefault();

      // Pause any other project video already playing.
      $$(".project-thumb video").forEach((v) => v.pause());

      const thumb = btn.closest(".project-thumb");
      const poster = thumb.querySelector("img");
      const video = document.createElement("video");
      video.src = btn.dataset.video;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      if (poster) video.poster = poster.src;
      video.setAttribute("aria-label", btn.getAttribute("aria-label") || "Project video");
      thumb.innerHTML = "";
      thumb.appendChild(video);
      video.focus();
    });
  }

  /* -------------------------------------------------- shared fragments */

  function projectCard(p) {
    const links = p.links || {};
    let thumb;
    if (p.image && p.video) {
      // Screenshot with a play button; clicking swaps in the video (see initVideoThumbs).
      thumb =
        '<img src="' + esc(p.image) + '" alt="Screenshot of ' + esc(p.title) +
          '" loading="lazy" decoding="async">' +
        '<button type="button" class="play-btn" data-video="' + esc(p.video) +
          '" aria-label="Play a short video of ' + esc(p.title) + '">' +
          '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.86-6.86a1.04 1.04 0 0 0 0-1.76L9.56 4.26A1.04 1.04 0 0 0 8 5.14Z"/></svg>' +
        "</button>";
    } else if (p.image) {
      thumb = '<img src="' + esc(p.image) + '" alt="Screenshot of ' + esc(p.title) +
        '" loading="lazy" decoding="async">';
    } else {
      thumb = '<span class="glow"></span><span class="initials" aria-hidden="true">' +
        esc(initialsOf(p.title)) + "</span>";
    }

    const linkHtml = [
      links.live
        ? '<a href="' + esc(links.live) + '" target="_blank" rel="noopener noreferrer">' +
          icon("external") + "Live</a>"
        : "",
      links.repo
        ? '<a href="' + esc(links.repo) + '" target="_blank" rel="noopener noreferrer">' +
          icon("github") + "Code</a>"
        : "",
      links.writeup
        ? '<a href="' + esc(links.writeup) + '">' + icon("doc") + "Write-up</a>"
        : "",
    ].join("");

    return (
      '<article class="card project-card" data-tags="' +
        esc((p.tags || []).join("|")) +
        '" data-text="' +
        esc(((p.title || "") + " " + (p.blurb || "") + " " +
          (p.tech || []).join(" ") + " " + (p.tags || []).join(" ")).toLowerCase()) +
        '">' +
        '<div class="project-thumb">' + thumb + "</div>" +
        '<div class="project-body">' +
          '<div class="project-top">' +
            "<h3>" + esc(p.title) + "</h3>" +
            (p.year ? '<span class="project-year">' + esc(p.year) + "</span>" : "") +
          "</div>" +
          (p.status
            ? '<div style="margin:.35rem 0 .7rem"><span class="status-badge" data-status="' +
              esc(p.status) + '">' + esc(p.status) + "</span></div>"
            : "") +
          "<p>" + esc(p.blurb) + "</p>" +
          ((p.tech || []).length
            ? '<ul class="tags">' +
              p.tech.map((t) => '<li class="tag">' + esc(t) + "</li>").join("") +
              "</ul>"
            : "") +
          (linkHtml ? '<div class="project-links">' + linkHtml + "</div>" : "") +
        "</div>" +
      "</article>"
    );
  }

  function timelineItem(item) {
    const bullets = item.bullets && item.bullets.length
      ? "<ul>" + item.bullets.map((b) => "<li>" + inline(b) + "</li>").join("") + "</ul>"
      : "";
    return (
      "<li" + (item.current ? ' class="is-current"' : "") + ">" +
        '<span class="tl-date">' + esc(item.date) + "</span>" +
        '<h3 class="tl-title">' + esc(item.title) + "</h3>" +
        (item.org ? '<div class="tl-org">' + esc(item.org) + "</div>" : "") +
        '<div class="tl-body">' + (item.body ? "<p>" + inline(item.body) + "</p>" : "") +
          bullets +
        "</div>" +
      "</li>"
    );
  }

  /* ------------------------------------------------------------- page: home */

  function pageHome() {
    const h = S.home || {};

    const facts = $("#quick-facts");
    if (facts) {
      facts.innerHTML = (h.quickFacts || [])
        .map(
          (f) =>
            '<div class="stat"><dt>' + esc(f.label) + "</dt><dd>" + esc(f.value) + "</dd></div>"
        )
        .join("");
    }

    const featured = $("#featured-projects");
    if (featured) {
      const list = (S.projects || []).filter((p) => p.featured);
      const show = (list.length ? list : (S.projects || []).slice(0, 3)).slice(0, 3);
      featured.innerHTML = show.map(projectCard).join("");
    }

    const avail = $("#availability");
    if (avail && S.availability) {
      avail.innerHTML = '<span class="dot" aria-hidden="true"></span>' + esc(S.availability);
    }
  }

  /* ------------------------------------------------------------ page: about */

  function pageAbout() {
    const a = S.about || {};

    const bio = $("#bio");
    if (bio) bio.innerHTML = (a.bio || []).map((p) => "<p>" + inline(p) + "</p>").join("");

    const tl = $("#about-timeline");
    if (tl) tl.innerHTML = (a.timeline || []).map(timelineItem).join("");

    const interests = $("#interests");
    if (interests) {
      interests.innerHTML = (a.interests || [])
        .map((i) => '<li class="tag">' + esc(i) + "</li>")
        .join("");
    }

    const skills = $("#skills");
    if (skills) {
      skills.innerHTML = (S.skills || [])
        .map(
          (g) =>
            '<article class="card"><h3>' + esc(g.group) + "</h3>" +
            '<ul class="tags">' +
              g.items.map((i) => '<li class="tag">' + esc(i) + "</li>").join("") +
            "</ul></article>"
        )
        .join("");
    }
  }

  /* --------------------------------------------------------- page: projects */

  function pageProjects() {
    const grid = $("#project-grid");
    if (!grid) return;

    const projects = S.projects || [];
    grid.innerHTML = projects.map(projectCard).join("");

    // Build filter chips from the union of every project's tags.
    const tags = [];
    projects.forEach((p) =>
      (p.tags || []).forEach((t) => {
        if (tags.indexOf(t) === -1) tags.push(t);
      })
    );

    const chipRow = $("#project-filters");
    if (chipRow) {
      chipRow.innerHTML =
        '<button class="chip" type="button" data-filter="all" aria-pressed="true">All</button>' +
        tags
          .map(
            (t) =>
              '<button class="chip" type="button" data-filter="' + esc(t) +
              '" aria-pressed="false">' + esc(t) + "</button>"
          )
          .join("");
    }

    const search = $("#project-search");
    const empty = $("#project-empty");
    const count = $("#project-count");
    let activeTag = "all";

    function apply() {
      const q = (search && search.value || "").trim().toLowerCase();
      let shown = 0;

      $$(".project-card", grid).forEach((card) => {
        const cardTags = (card.dataset.tags || "").split("|");
        const matchTag = activeTag === "all" || cardTags.indexOf(activeTag) !== -1;
        const matchText = !q || (card.dataset.text || "").indexOf(q) !== -1;
        const show = matchTag && matchText;
        card.hidden = !show;
        if (show) shown++;
      });

      if (empty) empty.hidden = shown !== 0;
      if (count) {
        count.textContent =
          shown + (shown === 1 ? " project" : " projects") +
          (activeTag === "all" && !q ? "" : " matching");
      }
    }

    if (chipRow) {
      chipRow.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-filter]");
        if (!btn) return;
        activeTag = btn.dataset.filter;
        $$(".chip", chipRow).forEach((c) =>
          c.setAttribute("aria-pressed", String(c === btn))
        );
        apply();
      });
    }

    if (search) {
      search.addEventListener("input", apply);
      // Escape clears the query.
      search.addEventListener("keydown", (e) => {
        if (e.key === "Escape") { search.value = ""; apply(); }
      });
    }

    apply();
  }

  /* ------------------------------------------------------- page: experience */

  function pageExperience() {
    const list = $("#experience-timeline");
    if (!list) return;

    const items = S.experience || [];
    list.innerHTML = items
      .map((x) => timelineItem({
        date: x.date,
        title: x.title,
        org: x.org,
        bullets: x.bullets,
        current: x.current,
      }))
      .join("");

    // Tag each rendered <li> with its kind so filtering can hide it.
    Array.from(list.children).forEach((li, i) => {
      li.dataset.kind = (items[i] && items[i].kind) || "Other";
    });

    const kinds = [];
    items.forEach((x) => {
      const k = x.kind || "Other";
      if (kinds.indexOf(k) === -1) kinds.push(k);
    });

    const chipRow = $("#experience-filters");
    if (!chipRow) return;

    // A filter offering a single choice is just noise — hide it until there
    // are at least two kinds of experience to switch between.
    if (kinds.length < 2) {
      chipRow.hidden = true;
      return;
    }

    chipRow.innerHTML =
      '<button class="chip" type="button" data-filter="all" aria-pressed="true">All</button>' +
      kinds
        .map(
          (k) =>
            '<button class="chip" type="button" data-filter="' + esc(k) +
            '" aria-pressed="false">' + esc(k) + "</button>"
        )
        .join("");

    chipRow.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-filter]");
      if (!btn) return;
      const filter = btn.dataset.filter;
      $$(".chip", chipRow).forEach((c) => c.setAttribute("aria-pressed", String(c === btn)));
      Array.from(list.children).forEach((li) => {
        li.hidden = filter !== "all" && li.dataset.kind !== filter;
      });
    });
  }

  /* ----------------------------------------------------------- page: resume */

  function resumeHtml() {
    const r = S.resume || {};
    const edu = (r.education || [])
      .map(
        (e) =>
          '<div class="resume-entry">' +
            '<div class="resume-entry-top"><strong>' + esc(e.school) + "</strong><span>" +
              esc(e.date) + "</span></div>" +
            '<div class="where">' + esc(e.degree) + (e.where ? " · " + esc(e.where) : "") + "</div>" +
            ((e.bullets || []).length
              ? "<ul>" + e.bullets.map((b) => "<li>" + inline(b) + "</li>").join("") + "</ul>"
              : "") +
          "</div>"
      )
      .join("");

    const exp = (S.experience || [])
      .map(
        (x) =>
          '<div class="resume-entry">' +
            '<div class="resume-entry-top"><strong>' + esc(x.title) + "</strong><span>" +
              esc(x.date) + "</span></div>" +
            '<div class="where">' + esc(x.org) + "</div>" +
            ((x.bullets || []).length
              ? "<ul>" + x.bullets.map((b) => "<li>" + inline(b) + "</li>").join("") + "</ul>"
              : "") +
          "</div>"
      )
      .join("");

    const proj = (S.projects || [])
      .filter((p) => p.featured)
      .map(
        (p) =>
          '<div class="resume-entry">' +
            '<div class="resume-entry-top"><strong>' + esc(p.title) + "</strong><span>" +
              esc(p.year || "") + "</span></div>" +
            '<div class="where">' + esc((p.tech || []).join(" · ")) + "</div>" +
            "<ul><li>" + esc(p.blurb) + "</li></ul>" +
          "</div>"
      )
      .join("");

    const skills = (S.skills || [])
      .map(
        (g) =>
          '<div class="skill-group"><dt>' + esc(g.group) + "</dt><dd>" +
          esc(g.items.join(" · ")) + "</dd></div>"
      )
      .join("");

    return (
      '<div class="resume-doc" id="resume-doc">' +
        "<header>" +
          "<h2>" + esc(S.name) + "</h2>" +
          '<div class="resume-contact">' +
            "<span>" + esc(S.location) + "</span>" +
            '<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a>" +
            (S.socials || [])
              .filter((s) => s.icon === "github" || s.icon === "linkedin")
              .map((s) => '<a href="' + esc(s.href) + '">' + esc(s.label) + "</a>")
              .join("") +
          "</div>" +
        "</header>" +
        '<section class="resume-section"><h3>Education</h3>' + edu + "</section>" +
        (exp ? '<section class="resume-section"><h3>Experience</h3>' + exp + "</section>" : "") +
        (proj ? '<section class="resume-section"><h3>Selected Projects</h3>' + proj + "</section>" : "") +
        (skills
          ? '<section class="resume-section"><h3>Skills</h3><dl class="skill-groups">' +
            skills + "</dl></section>"
          : "") +
      "</div>"
    );
  }

  function pageResume() {
    const host = $("#resume-view");
    if (!host) return;

    const r = S.resume || {};
    const updated = $("#resume-updated");
    if (updated && r.updated) updated.textContent = "Last updated " + r.updated;

    // Show the formatted HTML resume first so there is never a blank page,
    // then upgrade to the embedded PDF if one has been added to the repo.
    host.innerHTML = resumeHtml();

    const dl = $("#resume-download");

    if (!r.pdf) {
      if (dl) dl.addEventListener("click", () => window.print());
      return;
    }

    fetch(r.pdf, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) throw new Error("no pdf");
        host.innerHTML =
          '<iframe class="resume-frame" src="' + esc(r.pdf) +
          '#view=FitH" title="Resume of ' + esc(S.name) + '"></iframe>';
        if (dl) {
          dl.setAttribute("href", r.pdf);
          dl.setAttribute("download", "");
        }
      })
      .catch(() => {
        // No PDF yet — the printable HTML resume stays, and the button prints it.
        if (dl) {
          dl.addEventListener("click", (e) => { e.preventDefault(); window.print(); });
          const hint = $("#resume-hint");
          if (hint) hint.hidden = false;
        }
      });
  }

  /* -------------------------------------------------------------- SEO bits */

  function injectStructuredData() {
    if (document.body.dataset.page !== "home") return;
    const data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: S.name,
      jobTitle: S.role,
      email: "mailto:" + S.email,
      url: S.url,
      alumniOf: { "@type": "CollegeOrUniversity", name: "St. Ambrose University" },
      address: { "@type": "PostalAddress", addressLocality: "Bettendorf", addressRegion: "IA" },
      sameAs: (S.socials || [])
        .filter((s) => s.href.indexOf("http") === 0)
        .map((s) => s.href),
    };
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.textContent = JSON.stringify(data);
    document.head.appendChild(tag);
  }

  /* ----------------------------------------------------------------- boot */

  const PAGES = {
    home: pageHome,
    about: pageAbout,
    projects: pageProjects,
    experience: pageExperience,
    resume: pageResume,
  };

  function boot() {
    renderHeader();
    renderFooter();

    const page = document.body.dataset.page;
    if (PAGES[page]) PAGES[page]();

    injectStructuredData();
    applyStagger();
    initReveal();
    initCardGlow();
    initVideoThumbs();

    // Fill any element tagged with a content key, e.g. <span data-site="name">
    $$("[data-site]").forEach((el) => {
      const val = S[el.dataset.site];
      if (typeof val === "string") el.textContent = val;
    });
  }

  initTheme(); // run immediately to avoid a flash of the wrong theme

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

# romankrzmarzick.github.io

Personal portfolio site for **Roman Krzmarzick** — mechanical engineering student at
St. Ambrose University, Davenport, Iowa.

Live at **https://romankrzmarzick.github.io**

Hand-built static site: no framework, no build step, no dependencies. Push to `main` and
GitHub Pages serves it within a minute.

---

## Updating the site

**Almost everything lives in one file: [`assets/js/content.js`](assets/js/content.js).**

Open it, edit the text, save, commit, push. The pages rebuild themselves around whatever
is in there — add a project and it appears on Projects *and* the homepage.

| What you want to change | Where |
| --- | --- |
| Name, tagline, email, LinkedIn/Handshake/GitHub links | `SITE` — top of `content.js` |
| Homepage intro + quick facts | `SITE.home` |
| Bio, goals, timeline, interests | `SITE.about` |
| Skills lists | `SITE.skills` |
| Projects | `SITE.projects` |
| Work / leadership / athletics | `SITE.experience` |
| Résumé education + PDF path | `SITE.resume` |
| Colors, spacing, type | `assets/css/styles.css` (design tokens at the top) |

### Adding a project

Add an object to `SITE.projects`:

```js
{
  title: "Project name",
  year: "2027",
  status: "Complete",           // Complete · Building · In progress · Live
  blurb: "One or two sentences on what it is and what you learned.",
  tags: ["Game Dev", "Python"], // becomes a filter chip automatically
  tech: ["Python", "pygame"],
  featured: true,               // shows on the homepage (max 3)
  image: "assets/img/my-project.jpg",   // optional — omit for a gradient card
  links: {
    repo: "https://github.com/...",     // any link you omit just doesn't render
    live: "https://...",
  },
}
```

---

## To-do list for Roman

Everything on the site is real. Remaining nice-to-haves:

- [ ] **Add exact years to the BSA soccer entry** in `SITE.experience` — it currently just
      says "Youth".
- [ ] **Add a résumé PDF** at `assets/Roman-Krzmarzick-Resume.pdf`. Until then the Résumé page
      shows a formatted HTML résumé and "Download PDF" opens the print dialog (choose
      *Save as PDF*) — which also works fine as a permanent solution.
- [ ] *(Optional)* Replace `assets/img/og.svg` with a 1200×630 **PNG** — some sites
      (LinkedIn, iMessage) won't render SVG link previews.

There is no contact page and no blog by design — your email is shown in the footer of every
page and on the homepage, and your LinkedIn, Handshake, and GitHub links sit in the footer.

---

## Structure

```
index.html          Home — hero, featured projects, CTA
about.html          Bio, goals, timeline, skills, interests
projects.html       Searchable + filterable portfolio
experience.html     Filterable timeline
resume.html         Embedded PDF, or printable HTML résumé
404.html            Not-found page
sitemap.xml         SEO
robots.txt          SEO
.nojekyll           Tells Pages to serve files as-is

assets/
  css/styles.css    All styling. Design tokens live at the top.
  js/content.js     >>> ALL YOUR CONTENT <<<
  js/site.js        Header, footer, theme, animations, page rendering
  img/              favicon + link-preview image
```

## Local preview

Open `index.html` in a browser, or run a local server for an exact match to production:

```bash
python -m http.server 8000
```

## Features

Dark mode by default with a light toggle (remembers your choice, respects system setting) ·
fully responsive · scroll-reveal animations that honor `prefers-reduced-motion` · keyboard
accessible with skip link and visible focus rings · Open Graph + JSON-LD structured data ·
zero dependencies, so it loads instantly.

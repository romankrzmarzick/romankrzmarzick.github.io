# romankrzmarzick.github.io

Portfolio site for **Roman Krzmarzick** — mechanical engineering major at St. Ambrose University.

Live at **https://romankrzmarzick.github.io**

Static site: no framework, no build step. Push to `main` and GitHub Pages publishes it within a minute.

---

## The one rule

**This folder — `Documents\romankrzmarzick.github.io` — is the only copy. Edit here, commit here, push here.**
Don't clone it anywhere else. A second copy is how edits get lost and history gets tangled.

---

## Updating the site

**All text lives in one file: [`assets/js/content.js`](assets/js/content.js).**
Edit it, save, commit, push. Every page rebuilds itself from it.

| To change | Edit |
| --- | --- |
| Name, tagline, email, availability pill, social links | top of `content.js` |
| Homepage headline, intro, quick facts | `SITE.home` |
| Bio, timeline, interests | `SITE.about` |
| Skills | `SITE.skills` |
| Projects | `SITE.projects` |
| Work / athletics | `SITE.experience` |
| Resume page education | `SITE.resume` |
| Resume **PDF** | `tools/make_resume.py` (see below) |
| Colors, spacing, fonts | `assets/css/styles.css` |

Use `**double asterisks**` in `content.js` text for bold.

### Adding a project

Add an object to `SITE.projects`:

```js
{
  title: "Project name",
  year: "2027",
  status: "Complete",
  blurb: "One or two sentences on what it is.",
  tags: ["Game Dev", "Python"],          // become filter chips automatically
  tech: ["Python", "pygame"],
  featured: true,                        // shows on the homepage (max 3)
  image: "assets/media/my-project.png",  // optional — omit for a gradient card
  video: "assets/media/my-project.mp4",  // optional — adds a play button
  gallery: [                             // optional — adds an image viewer (CAD card uses this)
    { src: "assets/media/part.png", caption: "What this picture shows." },
  ],
  links: { repo: "https://github.com/..." },
}
```

Put the screenshot/video in `assets/media/`. Keep videos small (a few MB) — the ones there
were re-encoded to H.264 at 720p.

### Updating the resume PDF

The PDF is generated, not hand-made. Edit the text in `tools/make_resume.py`, then:

```bash
pip install reportlab      # once
python tools/make_resume.py
```

That rewrites `assets/Roman-Krzmarzick-Resume.pdf`. Commit and push it. The Resume page embeds it.
Keep the resume and `content.js` telling the same story.

---

## Local preview

```bash
pip install rangehttpserver   # once
python -m RangeHTTPServer 8123
```

then open http://localhost:8123. **Use `RangeHTTPServer`, not `http.server`** — the plain one
can't stream the project videos, so they'll appear broken locally even though they work on GitHub Pages.

---

## Structure

```
index.html          Home
about.html          Bio, timeline, skills, interests
projects.html       Searchable, filterable projects with video / image galleries
experience.html     Work + athletics timeline
resume.html         Embeds the PDF
404.html            Not-found page
tools/make_resume.py   Generates the resume PDF

assets/
  js/content.js     >>> ALL SITE TEXT <<<
  js/site.js        Rendering, nav, theme, video + gallery lightbox — rarely needs editing
  css/styles.css    Styling; design tokens at the top
  media/            Project screenshots and videos
  img/              Favicon and link-preview image
  Roman-Krzmarzick-Resume.pdf
```

## Notes

- Light theme by default; the sun/moon button toggles a warm dark mode and remembers the choice.
- No contact page or blog by design — email is in the footer of every page.
- Fully responsive, keyboard accessible, honors `prefers-reduced-motion`, no dependencies.

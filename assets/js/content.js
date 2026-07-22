/* =========================================================================
   CONTENT — this is the only file you need to edit for normal updates.
   Everything below feeds the pages automatically. Add, remove, or reorder
   items freely; the site re-renders around whatever is here.

   Everything in here is real. If you add something, keep it that way — this
   file is what strangers read about you.
   ========================================================================= */

const SITE = {
  /* ---------- Identity ---------- */
  name: "Roman Krzmarzick",
  initials: "RK",
  role: "Mechanical Engineering Student",
  tagline: "Mechanical engineering at St. Ambrose — and code on the side.",
  location: "Davenport, Iowa",
  email: "romankrzmarzick@gmail.com",
  // Used for SEO tags + sitemap. Change if you add a custom domain.
  url: "https://romankrzmarzick.github.io",

  // Short blurb for search results / link previews (keep near 155 characters).
  metaDescription:
    "Roman Krzmarzick — mechanical engineering student at St. Ambrose University in Davenport, Iowa. Projects in CAD, code, and hardware.",

  availability: "Open to summer 2027 internships",

  /* ---------- Social links ----------
     Delete any line you do not want shown. `icon` must match an icon name
     defined in site.js (handshake, github, mail, linkedin, instagram, x).    */
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/roman-krzmarzick-969500424", icon: "linkedin" },
    { label: "Handshake", href: "https://sau.joinhandshake.com/profiles/8kvv73", icon: "handshake" },
    { label: "GitHub", href: "https://github.com/romankrzmarzick", icon: "github" },
    { label: "Email", href: "mailto:romankrzmarzick@gmail.com", icon: "mail" },
  ],

  /* ---------- Home page ---------- */
  home: {
    greeting: "Hi, I'm Roman",
    headlineTop: "Mechanical engineer",
    headlineBottom: "who writes code.",
    intro:
      "I'm an incoming freshman at St. Ambrose University in Davenport, Iowa, studying mechanical engineering. I like problems that live where hardware meets software — mechanisms, embedded systems, and the code that makes them do something useful. Off the clock you'll find me on a soccer pitch or under a barbell.",
    // Small facts under the hero.
    quickFacts: [
      { label: "School", value: "St. Ambrose University" },
      { label: "Major", value: "B.S. Mechanical Engineering" },
      { label: "Class of", value: "2030" },
      { label: "Based in", value: "Davenport, Iowa" },
    ],
  },

  /* ---------- About page ---------- */
  about: {
    // Each string becomes a paragraph.
    bio: [
      "I'm Roman Krzmarzick, an incoming mechanical engineering freshman at St. Ambrose University in Davenport, Iowa. I chose mechanical engineering because I've always been the person who wants to know what's happening inside the box — how a mechanism carries load, why one design lasts and a nearly identical one doesn't.",
      "Somewhere along the way I picked up programming, and it stuck. What started as curiosity turned into a habit of building small things end to end and finding out where my assumptions were wrong. Most of that has been games — a platformer, an arcade shooter, Pong — which turn out to be a good teacher: physics, collision, and state machines are engineering problems wearing a costume.",
      "Outside of school I've played soccer for years and I lift seriously. Both are the same lesson in different clothes: consistent, boring work compounds, and progress is measured over seasons rather than days. That's roughly how I approach engineering too.",
    ],

    goals: [
      {
        title: "Near term",
        body:
          "Build a strong foundation in statics, dynamics, and materials, and pick up CAD properly — while keeping my programming sharp on personal projects.",
      },
      {
        title: "During college",
        body:
          "Land an engineering internship, join a hands-on design or competition team, and take on projects where I own something mechanical from concept through testing.",
      },
      {
        title: "Long term",
        body:
          "Work in design or mechatronics — products where the mechanical and software sides have to be designed together, not bolted on afterward.",
      },
    ],

    /* Personal timeline. `current: true` highlights the dot in gold. */
    timeline: [
      {
        date: "Fall 2026 — Present",
        title: "B.S. Mechanical Engineering",
        org: "St. Ambrose University · Davenport, IA",
        body:
          "Starting my freshman year. Focused on the engineering core, and looking for design teams and research groups to get involved with early.",
        current: true,
      },
      {
        date: "2025 — 2026",
        title: "Building projects on my own",
        org: "Self-directed",
        body:
          "Moved from following tutorials to finishing my own things — a platformer, an arcade shooter, a tic-tac-toe opponent, and my first real Git repositories.",
      },
      {
        date: "2025",
        title: "Graduated high school",
        org: "Pleasant Valley High School",
        body:
          "Finished coursework in math and science, played soccer, and spent free time teaching myself to code.",
      },
    ],

    /* Shown as chips on the About page. */
    interests: [
      "Soccer",
      "Weightlifting",
      "Game development",
      "Python",
      "Cars & mechanisms",
    ],
  },

  /* ---------- Skills ----------
     Used on About and Resume. Groups render in order.
     Only list things you'd be comfortable being asked about in an interview.  */
  skills: [
    { group: "Programming", items: ["Python", "pygame", "GDScript"] },
    { group: "Tools", items: ["Git & GitHub", "Godot Engine", "Tiled"] },
    { group: "Strengths", items: ["Self-teaching", "Finishing what I start", "Problem decomposition"] },
  ],

  /* ---------- Projects ----------
     `tags` power the filter chips and the search box.
     `image` is optional — leave it out and a gradient card is generated.
     Any link you omit simply doesn't render.                                 */
  projects: [
    {
      title: "Frogger (Godot)",
      year: "2026",
      status: "In progress",
      blurb:
        "A Frogger-style arcade game built in Godot 4 with GDScript. Lane-based hazard movement, collision layers, scene composition, and a scoring system — my sandbox for learning real game architecture instead of tutorial copies.",
      tags: ["Game Dev", "Godot"],
      tech: ["Godot 4", "GDScript", "Tilemaps"],
      featured: true,
      // No repo link yet — push it to GitHub and add:
      // repo: "https://github.com/romankrzmarzick/Frogger",
      links: {},
    },
    {
      title: "Celeste Clone",
      year: "2026",
      status: "In progress",
      blurb:
        "A 2D platformer in Python and pygame where the whole point was making the movement feel right — dash, wall jump, wall climb, and coyote time. Levels are built in Tiled and rendered at 320×180, scaled up.",
      tags: ["Game Dev", "Python"],
      tech: ["Python", "pygame", "pytmx", "Tiled"],
      featured: true,
      links: {
        repo: "https://github.com/romankrzmarzick/CelesteClone",
      },
    },
    {
      title: "Tic-tac-toe",
      year: "2026",
      status: "Complete",
      blurb:
        "Tic-tac-toe against the computer, with two opponents: one random, one that wins when it can, blocks when it has to, and takes the center. Built on a state pattern, and the board scales past 3×3.",
      tags: ["Game Dev", "Python", "AI"],
      tech: ["Python", "pygame"],
      featured: true,
      links: {
        repo: "https://github.com/romankrzmarzick/Tic-tac-toe",
      },
    },
    {
      title: "Space Shooter",
      year: "2026",
      status: "Complete",
      blurb:
        "A top-down arcade shooter — fly, shoot lasers on a cooldown, dodge asteroids, and survive as long as you can. Sound, music, and frame-by-frame explosions, with every asset preloaded so the loop never touches the disk.",
      tags: ["Game Dev", "Python"],
      tech: ["Python", "pygame"],
      links: {
        repo: "https://github.com/romankrzmarzick/Space-Shooter",
      },
    },
    {
      title: "Pong",
      year: "2026",
      status: "Complete",
      blurb:
        "The classic, in Python and pygame, against a computer paddle that tracks the ball. The score is written to disk on quit, so it carries over between sessions.",
      tags: ["Game Dev", "Python"],
      tech: ["Python", "pygame", "JSON"],
      links: {
        repo: "https://github.com/romankrzmarzick/Pong",
      },
    },
    {
      title: "Personal Website",
      year: "2026",
      status: "Live",
      blurb:
        "This site. Hand-built static pages with no framework and no build step, driven by a single content file so updating it never turns into a chore. Deployed on GitHub Pages.",
      tags: ["Web"],
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      links: {
        repo: "https://github.com/romankrzmarzick/romankrzmarzick.github.io",
        live: "https://romankrzmarzick.github.io",
      },
    },
  ],

  /* ---------- Experience ----------
     `kind` groups entries into the filter tabs on the Experience page.
     Use: Work · Leadership · Athletics · Research · Volunteer               */
  experience: [
    {
      // Add your team or club name as `org: "..."` and tighten `date` when you have them.
      kind: "Athletics",
      date: "Through 2025",
      title: "Soccer",
      current: false,
      bullets: [
        "Played competitively through high school, balancing daily practice with a full academic load.",
        "Learned to communicate under pressure and hold a role inside a system rather than freelancing.",
      ],
    },
  ],

  /* ---------- Resume ---------- */
  resume: {
    // Drop a PDF at this path and the page embeds it automatically.
    // Until then the page shows a formatted HTML resume you can print to PDF.
    pdf: "assets/Roman-Krzmarzick-Resume.pdf",
    updated: "July 2026",
    education: [
      {
        school: "St. Ambrose University",
        degree: "B.S. Mechanical Engineering",
        where: "Davenport, Iowa",
        date: "2026 — 2030 (expected)",
        bullets: [
          // Add GPA, scholarships, or honors once you have them.
          "Incoming freshman, Fall 2026.",
        ],
      },
      {
        school: "Pleasant Valley High School",
        degree: "High School Diploma",
        where: "",
        date: "Graduated 2025",
        bullets: [],
      },
    ],
  },
};

// Make available to the page scripts.
window.SITE = SITE;

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
  role: "Mechanical Engineering Major",
  tagline: "Mechanical engineering major at St. Ambrose University.",
  location: "Bettendorf, Iowa",
  email: "romankrzmarzick@gmail.com",
  // Used for SEO tags + sitemap. Change if you add a custom domain.
  url: "https://romankrzmarzick.github.io",

  // Short blurb for search results / link previews (keep near 155 characters).
  metaDescription:
    "Roman Krzmarzick — mechanical engineering major at St. Ambrose University, from Bettendorf, Iowa. I code in Python and SQL, and I play soccer.",

  availability: "Starting at St. Ambrose University — Fall 2026",

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
    greeting: "Roman Krzmarzick",
    headlineTop: "Roman Krzmarzick",
    headlineBottom: "Mechanical engineering major.",
    intro:
      "I'm starting at St. Ambrose University this fall, from Bettendorf, Iowa. I taught myself Python and SQL, and I build small games and tools to keep learning. Outside of that: soccer and the gym.",
    // Small facts under the hero.
    quickFacts: [
      { label: "School", value: "St. Ambrose University" },
      { label: "Major", value: "Mechanical Engineering" },
      { label: "Starting", value: "Fall 2026" },
      { label: "Home", value: "Bettendorf, Iowa" },
    ],
  },

  /* ---------- About page ---------- */
  about: {
    // Each string becomes a paragraph.
    bio: [
      "I'm from Bettendorf, Iowa, and I'm starting at St. Ambrose University this fall as a mechanical engineering major.",
      "After graduating from Pleasant Valley in 2025, I spent a year in the Czech Republic. I played soccer, learned some of the language, and met good people. I came back ready for college.",
      "I taught myself Python and SQL, and I build small games and tools to keep learning. Outside of that I play soccer, lift, and spend time with my brother.",
    ],

    /* Personal timeline. `current: true` highlights the dot in gold. */
    timeline: [
      {
        date: "Fall 2026",
        title: "St. Ambrose University",
        org: "Mechanical Engineering · Davenport, IA",
        body: "Starting my freshman year.",
        current: true,
      },
      {
        date: "2025 — 2026",
        title: "Year in the Czech Republic",
        org: "Gap year",
        body:
          "Lived abroad for a year — played soccer, learned some of the language, met good people.",
      },
      {
        date: "2025",
        title: "Graduated high school",
        org: "Pleasant Valley High School",
      },
    ],

    /* Shown as chips on the About page. */
    interests: [
      "Soccer",
      "Weightlifting",
      "Programming",
      "Travel",
    ],
  },

  /* ---------- Skills ----------
     Used on About and Resume. Groups render in order.
     Only list things you'd be comfortable being asked about in an interview.  */
  skills: [
    { group: "Languages", items: ["Python", "SQL", "HTML & CSS"] },
    { group: "Tools", items: ["Git & GitHub"] },
  ],

  /* ---------- Projects ----------
     `tags` power the filter chips and the search box.
     `image` is optional — leave it out and a gradient card is generated.
     Any link you omit simply doesn't render.                                 */
  projects: [
    {
      title: "RPS Shoot",
      year: "2026",
      status: "Complete",
      blurb:
        "Rock–Paper–Scissors–Lizard–Spock as a card duel against four AI opponents. The toughest one reads your patterns with a Markov chain and gets better the longer you play. Runs in a game window or right in the terminal, both sharing one engine.",
      tags: ["Game Dev", "Python", "AI"],
      tech: ["Python", "pygame"],
      featured: true,
      links: {
        repo: "https://github.com/romankrzmarzick/RPSSHOOT",
      },
    },
    {
      title: "Celeste Clone",
      year: "2026",
      status: "In progress",
      blurb:
        "A 2D platformer in Python and pygame where the whole point was making the movement feel right — dash, wall jump, wall climb, and coyote time. Renders at 320×180 and scales up for the pixel look.",
      tags: ["Game Dev", "Python"],
      tech: ["Python", "pygame"],
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
      featured: true,
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
  ],

  /* ---------- Experience ----------
     `kind` groups entries into the filter tabs on the Experience page.
     Use: Work · Leadership · Athletics · Research · Volunteer               */
  experience: [
    {
      kind: "Work",
      date: "High school",
      title: "Soccer Referee",
      org: "Youth soccer",
      current: false,
      bullets: [
        "Refereed youth soccer games — kept matches moving, made calls, and handled sideline parents.",
      ],
    },
    {
      kind: "Athletics",
      date: "2023 — 2025",
      title: "Club Soccer",
      org: "FC United · Cedar Rapids, IA",
      current: false,
      bullets: [
        "Played club through junior and senior year, traveling to Cedar Rapids for training and matches.",
      ],
    },
    {
      kind: "Athletics",
      date: "Through 2025",
      title: "High School Soccer",
      org: "Pleasant Valley High School",
      current: false,
      bullets: [
        "Played for the school team alongside club.",
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

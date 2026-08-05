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
    "Roman Krzmarzick — mechanical engineering major at St. Ambrose University, from Bettendorf, Iowa. Seeking a summer 2027 internship. Python/SQL projects, soccer, and a year lived abroad.",

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
    greeting: "Roman Krzmarzick",
    headlineTop: "Roman Krzmarzick",
    headlineBottom: "Mechanical engineering major.",
    intro:
      "I'm starting at St. Ambrose University this fall, from Bettendorf, Iowa. I taught myself Python and SQL, and I build small games and tools to keep learning. Outside of that, it's soccer and the gym.",
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
      "After graduating from Pleasant Valley in 2025, I spent a year living on my own in the Czech Republic. I played club soccer there for Admira Praha, got conversational in Czech, and refereed soccer back home the whole time too. That year is where things clicked for me — I got a clearer sense of what I actually wanted, and enough confidence in myself to go after it.",
      "I taught myself Python and SQL along the way, building small games and tools to keep learning. Longer term I'm interested in controls and guidance — GNC — but right now I'm just focused on building a solid foundation. Outside of that, it's soccer, the gym, and time with my brother.",
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
          "Lived on my own for a year instead of going straight from high school to college. Played club soccer for Admira Praha, got conversational in Czech, and figured out what I actually wanted to do next.",
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
      "Refereeing",
      "Weightlifting",
      "Programming",
      "Travel",
    ],
  },

  /* ---------- Skills ----------
     Used on About and Resume. Groups render in order.
     Only list things you'd be comfortable being asked about in an interview.  */
  skills: [
    { group: "Languages", items: ["Python", "SQL"] },
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
        "Rock–Paper–Scissors–Lizard–Spock as a card duel against four AI opponents. The toughest one reads your patterns with a Markov chain and gets better the longer you play.",
      tags: ["Game Dev", "Python", "AI"],
      tech: ["Python", "pygame"],
      featured: true,
      image: "assets/media/rps-shoot.png",
      video: "assets/media/rps-shoot.mp4",
      links: {
        repo: "https://github.com/romankrzmarzick/RPSSHOOT",
      },
    },
    {
      title: "Celeste Clone",
      year: "2026",
      status: "In progress",
      blurb:
        "A 2D platformer in Python and pygame where the whole point was making the movement feel right — dash, wall jump, wall climb, and coyote time. Renders at 320×180 and scales up for that pixel look.",
      tags: ["Game Dev", "Python"],
      tech: ["Python", "pygame"],
      featured: true,
      image: "assets/media/celeste-clone.png",
      video: "assets/media/celeste-clone.mp4",
      links: {
        repo: "https://github.com/romankrzmarzick/CelesteClone",
      },
    },
    {
      title: "Tic-tac-toe",
      year: "2026",
      status: "Complete",
      blurb:
        "Tic-tac-toe against the computer, with two opponents: one random, one that wins when it can, blocks when it has to, and takes the center.",
      tags: ["Game Dev", "Python", "AI"],
      tech: ["Python", "pygame"],
      featured: true,
      image: "assets/media/tic-tac-toe.png",
      video: "assets/media/tic-tac-toe.mp4",
      links: {
        repo: "https://github.com/romankrzmarzick/Tic-tac-toe",
      },
    },
    {
      title: "Space Shooter",
      year: "2026",
      status: "Complete",
      blurb:
        "A top-down arcade shooter — fly, shoot lasers on a cooldown, dodge asteroids, and survive as long as you can.",
      tags: ["Game Dev", "Python"],
      tech: ["Python", "pygame"],
      featured: true,
      image: "assets/media/space-shooter.png",
      video: "assets/media/space-shooter.mp4",
      links: {
        repo: "https://github.com/romankrzmarzick/Space-Shooter",
      },
    },
    {
      title: "Pong",
      year: "2026",
      status: "Complete",
      blurb:
        "The classic, in Python and pygame, against a computer paddle that tracks the ball. The score is saved with JSON on quit, so it carries over between sessions.",
      tags: ["Game Dev", "Python"],
      tech: ["Python", "pygame", "JSON"],
      image: "assets/media/pong.png",
      video: "assets/media/pong.mp4",
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
      date: "2023 — Present",
      title: "Soccer Referee",
      org: "US Soccer (USSF) · Quad Cities, IA",
      current: true,
      bullets: [
        "Officiate youth matches on my own — reading the game, making calls in real time, and staying level with coaches and parents when calls get contested.",
        "Three-plus years in, ongoing through the Czech Republic year and back home since.",
      ],
    },
    {
      kind: "Athletics",
      date: "2025 — 2026",
      title: "Club Soccer — Admira Praha",
      org: "Czech Republic · Second-division amateur",
      current: false,
      bullets: [
        "Played a full season with a Czech club while living on my own abroad for a year.",
      ],
    },
    {
      kind: "Athletics",
      date: "2023 — 2025",
      title: "Club Soccer — FC United",
      org: "ECNL/ECRL · Cedar Rapids, IA",
      current: false,
      bullets: [
        "Played junior and senior year in ECNL/ECRL, one of the top national platforms for youth soccer.",
      ],
    },
    {
      kind: "Athletics",
      date: "2021 — 2025",
      title: "High School Soccer",
      org: "Pleasant Valley High School",
      current: false,
      bullets: [
        "Played all four years, alongside club the last two.",
      ],
    },
  ],

  /* ---------- Resume ---------- */
  resume: {
    // Drop a PDF at this path and the page embeds it automatically.
    // Until then the page shows a formatted HTML resume you can print to PDF.
    pdf: "assets/Roman-Krzmarzick-Resume.pdf",
    updated: "August 2026",
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
        bullets: ["3.6 GPA."],
      },
    ],
  },
};

// Make available to the page scripts.
window.SITE = SITE;

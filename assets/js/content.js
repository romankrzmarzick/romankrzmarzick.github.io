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
  role: "Incoming Engineering Student",
  tagline: "Incoming engineering student at St. Ambrose. I build things and figure out how they work.",
  location: "Bettendorf, Iowa",
  email: "romankrzmarzick@gmail.com",
  // Used for SEO tags + sitemap. Change if you add a custom domain.
  url: "https://romankrzmarzick.github.io",

  // Short blurb for search results / link previews (keep near 155 characters).
  metaDescription:
    "Roman Krzmarzick — incoming engineering student at St. Ambrose University, from Bettendorf, Iowa. Self-taught in Python and SQL, and a lifelong soccer player.",

  availability: "Starting engineering at St. Ambrose — Fall 2026",

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
    headlineTop: "Hey, I'm Roman.",
    headlineBottom: "I build things and figure out how they work.",
    intro:
      "I'm an incoming engineering student at St. Ambrose University, from Bettendorf, Iowa. I taught myself to program a couple of years ago — mostly Python, and I've been getting good with SQL — and I build little games and tools for the fun of it. Off the clock: soccer, the gym, and time with family.",
    // Small facts under the hero.
    quickFacts: [
      { label: "School", value: "St. Ambrose University" },
      { label: "Studying", value: "Engineering" },
      { label: "Starting", value: "Fall 2026" },
      { label: "Home", value: "Bettendorf, Iowa" },
    ],
  },

  /* ---------- About page ---------- */
  about: {
    // Each string becomes a paragraph.
    bio: [
      "Hey — I'm Roman. I'm from Bettendorf, Iowa, and this fall I'm starting at St. Ambrose University to study engineering. I've always been the kid who takes things apart to see how they work, so engineering felt like the honest choice.",
      "After I graduated high school in 2025, I spent a year in the Czech Republic. I played soccer there, learned enough of the language to actually hold a conversation, and met people I never would have otherwise. It was the best thing I could have done before college — I came back knowing myself a lot better and genuinely ready to start.",
      "When I'm not studying or coding, I'm usually playing soccer, in the gym, or hanging out with my brother. I taught myself to program a couple of years ago and haven't stopped — mostly Python, and lately a lot of SQL. I'm early in all of this and I know it, but I like where it's headed, and there's more coming.",
    ],

    goals: [
      {
        title: "Right now",
        body:
          "Start strong at St. Ambrose and keep building on my own — small projects that teach me something I couldn't get from a tutorial.",
      },
      {
        title: "In college",
        body:
          "Get deep into engineering, land my first internship, and join a hands-on team where I can actually build something with other people.",
      },
      {
        title: "Down the road",
        body:
          "Work on things that mix the physical and the digital — where knowing both the engineering and the code is the whole point.",
      },
    ],

    /* Personal timeline. `current: true` highlights the dot in gold. */
    timeline: [
      {
        date: "Fall 2026",
        title: "Starting at St. Ambrose University",
        org: "Engineering · Davenport, IA",
        body:
          "Beginning my freshman year, and looking for teams and projects to get involved with early.",
        current: true,
      },
      {
        date: "2025 — 2026",
        title: "A year in the Czech Republic",
        org: "Gap year abroad",
        body:
          "Lived overseas for a year — played soccer, picked up the language, and grew up a lot. It's why I'm starting college in 2026 instead of 2025, and I wouldn't trade it.",
      },
      {
        date: "2025",
        title: "Graduated high school",
        org: "Pleasant Valley High School",
        body:
          "Finished up, kept playing soccer, and spent my free time teaching myself to code.",
      },
    ],

    /* Shown as chips on the About page. */
    interests: [
      "Soccer",
      "Weightlifting",
      "Programming",
      "Time with my brother",
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
      // Set the exact years and league name when you get a chance.
      kind: "Work",
      date: "During high school",
      title: "Soccer Referee",
      org: "Youth soccer leagues",
      current: false,
      bullets: [
        "Refereed youth soccer matches — which mostly meant keeping games moving and staying calm while managing very invested parents on the sideline.",
        "Good practice at making a quick call under pressure and standing behind it.",
      ],
    },
    {
      kind: "Athletics",
      date: "2023 — 2025",
      title: "Club Soccer",
      org: "FC United · Cedar Rapids, IA",
      current: false,
      bullets: [
        "Played club soccer through my junior and senior years, traveling to Cedar Rapids for training and matches on top of a full school schedule.",
        "Competing at the club level meant earning minutes rather than being handed them.",
      ],
    },
    {
      kind: "Athletics",
      date: "Through 2025",
      title: "High School Soccer",
      org: "Pleasant Valley High School",
      current: false,
      bullets: [
        "Played for my high school team alongside club, balancing daily practice with coursework.",
        "Learned to communicate under pressure and hold a role inside a system rather than freelancing.",
      ],
    },
    {
      kind: "Athletics",
      date: "Youth",
      title: "Youth Soccer",
      org: "Bettendorf Soccer Association (BSA)",
      current: false,
      bullets: [
        "Where it started — years of youth soccer that built the habit of showing up consistently.",
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
        degree: "Engineering (B.S.)",
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

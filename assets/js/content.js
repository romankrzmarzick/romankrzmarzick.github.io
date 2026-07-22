/* =========================================================================
   CONTENT — this is the only file you need to edit for normal updates.
   Everything below feeds the pages automatically. Add, remove, or reorder
   items freely; the site re-renders around whatever is here.

   Anything marked  SAMPLE  is a placeholder I invented so the page looks
   finished. Replace or delete those. Real details you gave me are already in.
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
      "Somewhere along the way I picked up programming, and it stuck. What started as curiosity turned into a habit of building small things end to end: sketching an idea, modeling it, writing the code that drives it, then finding out where my assumptions were wrong. Game development in Godot has been a surprisingly good teacher here — physics, collision, and state machines are engineering problems wearing a costume.",
      "Outside of school I've played soccer for years and I lift seriously. Both are the same lesson in different clothes: consistent, boring work compounds, and progress is measured over seasons rather than days. That's roughly how I approach engineering too.",
    ],

    goals: [
      {
        title: "Near term",
        body:
          "Build a strong foundation in statics, dynamics, and materials while keeping my CAD and programming sharp on personal projects.",
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
        date: "2026",
        title: "Graduated high school", // SAMPLE — add your school name and any honors.
        org: "SAMPLE — replace with your high school",
        body:
          "Finished coursework in math and science, played soccer, and spent free time on personal build-and-code projects.",
      },
      {
        date: "2025",
        title: "Started building projects seriously", // SAMPLE
        org: "Self-directed",
        body:
          "Moved from following tutorials to shipping my own things — first game builds in Godot, first real Git repositories.",
      },
    ],

    /* Shown as chips on the About page. */
    interests: [
      "Soccer",
      "Weightlifting",
      "CAD & 3D printing",
      "Game development",
      "Cars & mechanisms",
      "Automation",
    ],
  },

  /* ---------- Skills ----------
     Used on About and Resume. Groups render in order.                        */
  skills: [
    // SAMPLE levels — trim anything you'd rather not claim yet.
    { group: "Engineering", items: ["SolidWorks", "Fusion 360", "3D printing", "Technical drawing", "Hand tools & shop safety"] },
    { group: "Programming", items: ["Python", "GDScript", "JavaScript", "HTML & CSS"] },
    { group: "Tools", items: ["Git & GitHub", "Godot Engine", "MATLAB", "Excel"] },
    { group: "Strengths", items: ["Problem decomposition", "Self-teaching", "Team communication", "Follow-through"] },
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
      tags: ["Game Dev", "Code"],
      tech: ["Godot 4", "GDScript", "Tilemaps"],
      featured: true,
      links: {
        // repo: "https://github.com/romankrzmarzick/frogger",
      },
    },
    {
      // SAMPLE
      title: "Parametric Phone Stand",
      year: "2026",
      status: "Complete",
      blurb:
        "SAMPLE PROJECT — A fully parametric desk stand modeled in Fusion 360, driven by a small table of variables so the angle and device thickness can be changed in one place. Printed and iterated three times to fix a hinge that kept flexing.",
      tags: ["CAD", "Hardware"],
      tech: ["Fusion 360", "FDM printing", "PLA"],
      featured: true,
      links: {},
    },
    {
      // SAMPLE
      title: "Lift Log",
      year: "2026",
      status: "Building",
      blurb:
        "SAMPLE PROJECT — A small Python tool for tracking training: logs sets and reps, computes estimated one-rep maxes, and charts progression per lift so I can see whether a block actually worked.",
      tags: ["Code", "Data"],
      tech: ["Python", "pandas", "matplotlib"],
      featured: true,
      links: {},
    },
    {
      // SAMPLE
      title: "Arduino Reaction Timer",
      year: "2025",
      status: "Complete",
      blurb:
        "SAMPLE PROJECT — A breadboard reaction-time game using an Arduino, LEDs, and a push button, with results printed over serial. A first real lesson in debounce, timing, and why pull-up resistors exist.",
      tags: ["Hardware", "Code"],
      tech: ["Arduino", "C++", "Breadboarding"],
      links: {},
    },
    {
      // SAMPLE
      title: "Personal Website",
      year: "2026",
      status: "Live",
      blurb:
        "This site. Hand-built static pages with no framework and no build step, driven by a single content file so updating it never turns into a chore. Deployed on GitHub Pages.",
      tags: ["Code", "Web"],
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
      // SAMPLE
      kind: "Athletics",
      date: "2022 — 2026",
      title: "Varsity Soccer Player",
      org: "SAMPLE — replace with your club or high school team",
      current: false,
      bullets: [
        "Played multiple seasons of competitive soccer, balancing daily practice and travel with a full academic load.",
        "Learned to communicate under pressure and hold a role inside a system rather than freelancing.",
      ],
    },
    {
      // SAMPLE
      kind: "Work",
      date: "Summer 2026",
      title: "Summer Job",
      org: "SAMPLE — replace with a real job, or delete this entry",
      current: false,
      bullets: [
        "Held a consistent summer schedule while saving for college.",
        "Worked directly with customers and teammates in a fast-paced environment.",
      ],
    },
    {
      // SAMPLE
      kind: "Leadership",
      date: "2025 — 2026",
      title: "Team Captain",
      org: "SAMPLE — delete if this doesn't apply",
      current: false,
      bullets: [
        "Helped set training standards and kept younger players accountable during the season.",
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
          // SAMPLE — add GPA, scholarships, or honors once you have them.
          "Incoming freshman, Fall 2026.",
        ],
      },
    ],
  },
};

// Make available to the page scripts.
window.SITE = SITE;

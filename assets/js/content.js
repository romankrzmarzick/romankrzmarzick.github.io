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
    "Roman Krzmarzick — mechanical engineering major at St. Ambrose University, from Bettendorf, Iowa. Seeking a summer 2027 internship. Python projects, soccer, and a year lived abroad.",

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
    // These three drive the homepage hero. Use **double asterisks** for bold.
    headlineTop: "Roman Krzmarzick",
    headlineBottom: "Mechanical engineering major.",
    intro:
      "I'm from Bettendorf, Iowa, and I'm currently attending **St. Ambrose University**. I like learning new things and working with others in the classroom. Outside of that, I play soccer for St. Ambrose and enjoy working out.",
    // Small facts under the hero.
    quickFacts: [
      { label: "School", value: "St. Ambrose University" },
      { label: "Major", value: "Mechanical Engineering" },
      { label: "Class of", value: "2030" },
      { label: "Home", value: "Bettendorf, Iowa" },
    ],
  },

  /* ---------- About page ---------- */
  about: {
    // Each string becomes a paragraph.
    bio: [
      "I'm from Bettendorf, Iowa, and I attend St. Ambrose University as a mechanical engineering major.",
      "After graduating from Pleasant Valley in 2025, I spent a year living on my own in the Czech Republic. I played club soccer there for a team called Admira Praha and enjoyed my time seeing the world. That year is where things clicked for me — I got a clearer sense of what I actually wanted, and enough confidence in myself to go after it.",
      "I got interested in a lot of things along the way: I taught myself to program by building games, and I developed a real drive to understand how the world works. Outside of all that, I love spending time with my family and friends — they make life a lot easier.",
    ],

    /* Personal timeline. `current: true` highlights the dot in gold. */
    timeline: [
      {
        date: "Fall 2026",
        title: "St. Ambrose University",
        org: "Mechanical Engineering · Davenport, IA",
        body: "Freshman year, mechanical engineering.",
        current: true,
      },
      {
        date: "2025 — 2026",
        title: "Year in the Czech Republic",
        org: "Gap year",
        body:
          "Lived on my own for a year instead of going straight from high school to college. Played club soccer for Admira Praha, took Czech classes, and figured out what I actually wanted to do next.",
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
      "Languages",
    ],
  },

  /* ---------- Skills ----------
     Used on About and Resume. Groups render in order.
     Only list things you'd be comfortable being asked about in an interview.  */
  skills: [
    { group: "CAD", items: ["SolidWorks"] },
    { group: "Programming", items: ["Python"] },
    { group: "Tools", items: ["Git & GitHub"] },
  ],

  /* ---------- Projects ----------
     `tags` power the filter chips and the search box.
     `image` is optional — leave it out and a gradient card is generated.
     `video` adds a play button that opens the clip in a lightbox.
     `gallery` (a list of { src, caption }) adds a button that opens the images
     in the same lightbox with prev/next. Use one or the other per card.
     Any link you omit simply doesn't render.                                 */
  projects: [
    {
      title: "SolidWorks Parts & Drawings",
      year: "2026",
      status: "Complete",
      blurb:
        "Practice parts modeled in SolidWorks with dimensioned drawings — extrudes, revolves, counterbored holes, fillets, and section views. A mount bracket and a valve lifter, each with a full drawing sheet.",
      tags: ["CAD"],
      tech: ["SolidWorks"],
      featured: true,
      image: "assets/media/cad-parts.png",
      gallery: [
        { src: "assets/media/cad-mount-bracket.png", caption: "Mount bracket — extrude, cut, two counterbored holes, R6 edge fillet, 3 × 45° chamfer." },
        { src: "assets/media/cad-mount-bracket-drawing.png", caption: "Mount bracket drawing — front, top, and side views, isometric, and a 4:1 detail of the counterbore." },
        { src: "assets/media/cad-valve-lifter.png", caption: "Valve lifter — revolved profile with stepped diameters, R1 fillet, and a spherical socket in the base." },
        { src: "assets/media/cad-valve-lifter-drawing.png", caption: "Valve lifter drawing — front view and a hatched section view (C–C) with diameters and radii." },
      ],
    },
    {
      title: "RPS Shoot",
      year: "2026",
      status: "Complete",
      blurb:
        "Rock–Paper–Scissors–Lizard–Spock as a card duel against four AI opponents. The toughest one reads your patterns with a Markov chain and gets better the longer you play.",
      tags: ["Game Dev", "Python", "AI"],
      tech: ["Python", "pygame"],
      featured: true,
      image: "assets/media/rps-shoot-2.png",
      video: "assets/media/rps-shoot-2.mp4",
      links: {
        repo: "https://github.com/romankrzmarzick/RPSSHOOT",
      },
    },
    {
      title: "2D Platformer Game",
      year: "2026",
      status: "Complete",
      blurb:
        "A platformer with six movement mechanics — run, jump, crouch, dash, wall climb, wall jump — and a timer system that makes the controls feel responsive. Renders at 320×180 and scales 5× for a pixel-art look.",
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
        "Tic-tac-toe against the computer with two difficulties: Easy plays random squares, Smart wins when it can, blocks when it has to, then takes the center and corners. Start menu, hover highlights, a results screen, and a board that scales from 3×3 to 7×7.",
      tags: ["Game Dev", "Python", "AI"],
      tech: ["Python", "pygame"],
      featured: true,
      image: "assets/media/tic-tac-toe.png",
      video: "assets/media/tic-tac-toe.mp4",
      links: {
        repo: "https://github.com/romankrzmarzick/Tic-tac-toe",
      },
    },
  ],

  /* ---------- Experience ----------
     `kind` groups entries into the filter tabs on the Experience page.
     Use: Work · Leadership · Athletics · Research · Volunteer               */
  experience: [
    {
      kind: "Work",
      date: "2023 — 2025, 2026 — Present",
      title: "Soccer Referee",
      org: "US Soccer (USSF) · Quad Cities, IA",
      current: true,
      bullets: [
        "Officiate youth matches with a referee crew — reading the game, making calls in real time, and staying level with coaches and parents when calls get contested.",
        "Paused during my year in the Czech Republic and picked it back up when I came home.",
      ],
    },
    {
      kind: "Athletics",
      date: "Fall 2026 — Present",
      title: "Men's Soccer",
      org: "St. Ambrose University",
      current: true,
      bullets: [
        "Play for the St. Ambrose men's soccer team while carrying a full engineering course load.",
      ],
    },
  ],

  /* ---------- Resume ---------- */
  resume: {
    // Drop a PDF at this path and the page embeds it automatically.
    // Until then the page shows a formatted HTML resume you can print to PDF.
    pdf: "assets/Roman-Krzmarzick-Resume.pdf",
    updated: "September 2026",
    education: [
      {
        school: "St. Ambrose University",
        degree: "B.S. Mechanical Engineering",
        where: "Davenport, Iowa",
        date: "2026 — 2030 (expected)",
        bullets: [
          // Add GPA, scholarships, or honors once you have them.
          "Freshman, Fall 2026 – present.",
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

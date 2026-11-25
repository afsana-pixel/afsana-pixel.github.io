// ============================================================
//  YOUR PORTFOLIO CONTENT  —  this is the ONLY file you need to edit.
//
//  Rules of the road:
//   • Keep the quotes "like this" around every piece of text.
//   • Keep the commas at the end of each line.
//   • If your text contains a double quote, write it as \"  (or use 'single quotes').
//   • To remove an optional section, set it to an empty list:  []
//   • Save the file and refresh index.html to see your changes.
//   • If the page shows a red error box, you probably deleted a quote or comma.
// ============================================================

const content = {
  // ---------- About you ----------
  name: "Afsana Zaman",
  tagline: "Computer Science student building, collaborating, and leveling up",

  // Put your photo in the assets/ folder and put its file name here.
  // Square-ish, about 600px wide, under 1 MB works best.
  photo: "",

  // 1–3 sentences: what you care about and what you're looking for.
  mission:
    "Computer Science student who loves clear communication, sharp problem-solving, and working with people who bring great energy to a team. Always eager to learn new tools, stay organized under pressure, and grow alongside great builders.",

  // ---------- Make it yours ----------
  theme: {
    // Pick a look:
    //   "classic" = clean and friendly (the default)
    //   "techy"   = dark terminal vibes, one tab per section (always dark, always monospace)
    //   "fancy"   = big serif headings, an arched photo, swipeable project cards
    style: "fancy",

    // Pick a preset: "coral", "ocean", "grape", "forest", "sunset", "bubblegum"
    // ...or use any hex color like "#ff6b9d".
    accent: "grape",

    // Pick a font: "modern", "serif", "rounded", "mono"
    font: "serif",

    // "auto" follows the visitor's device. You can also force "light" or "dark".
    // (The "techy" look is always dark.)
    mode: "auto",
  },

  // ---------- Links (shown as buttons at the top) ----------
  // For email just write the address, e.g. "you@example.com".
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/afsana-zaman-57157a384" },
    { label: "Email", url: "afsanazaman2007@gmail.com" },
  ],

  // ---------- Skills (optional — set to [] to hide) ----------
  skills: [
    "Problem-Solving & Critical Thinking",
    "Teamwork & Collaboration",
    "Clear Communication",
    "Organization & Time Management",
    "Conflict Resolution",
    "Leadership & Initiative",
    "Customer-Focused Mindset",
    "Tech & Computer Skills",
  ],

  // ---------- Projects ----------
  // Link to the GitHub repo (a live demo is optional — a repo is enough!).
  // tags are optional.
  projects: [],

  // ---------- Education ----------
  education: [
    {
      school: "Conestoga College",
      degree: "Bachelor of Computer Science",
      years: "Expected Aug 2029",
      details: "", // optional
    },
  ],

  // ---------- Work experience (optional — set to [] to hide) ----------
  experience: [],

  // ---------- Extracurriculars (optional — set to [] to hide) ----------
  extracurriculars: [
    {
      role: "Active Member",
      org: "IT Club & Google Developer Group, Conestoga College",
      years: "2025 – Present",
      description: "Engaged in campus tech events, workshops, and developer community meetups.",
    },
  ],
};
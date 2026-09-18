/**
 * INSIGHTS — normalized content registries for the homepage.
 * Milestone 1 uses local seed data only (no live ingestion). See
 * docs/SITE_V2_SPEC.md 3.3 and 3.6.
 */

export const WATCHING = [
  {
    id: "nascar-charter-antitrust",
    topic: "Antitrust",
    headline: "Jordan's NASCAR antitrust fight settled — without a signed charter.",
    significance:
      "23XI Racing and Front Row Motorsports proved a team can walk away from a league's standard agreement and still come out ahead.",
    url: "/blog/ep038-jordan-nascar-antitrust-settlement.html",
    status: "Explainer",
  },
  {
    id: "nil-revenue-share-rollout",
    topic: "NIL",
    headline: "Revenue-share era is colliding with existing NIL deals.",
    significance:
      "Athletes and families are seeing school revenue-share offers layered on top of collective NIL agreements, with cap and disclosure questions still shaking out.",
    url: "/blog/",
    status: "Watching",
  },
  {
    id: "mlb-cba-reopener",
    topic: "Labor Law",
    headline: "MLB's CBA reopener is the one cap fight that hasn't been settled by a lockout.",
    significance:
      "Every other North American salary cap traces back to a union loss. MLB's history is different, and that shapes the leverage on both sides.",
    url: "/blog/mlb-labor-war-cba-reopener-explained.html",
    status: "Developing",
  },
];

export const LATEST_ANALYSIS = [
  {
    id: "ep038",
    title: "Michael Jordan Sued NASCAR for $364 Million. He Settled for Something Better.",
    date: "2026-03-01",
    topic: "Antitrust",
    format: "video",
    source: "The Legal Audit",
    url: "/blog/ep038-jordan-nascar-antitrust-settlement.html",
    image: null,
    summary:
      "23XI Racing and Front Row Motorsports refused NASCAR's charter agreement and sued — and ended up ahead of every team that signed.",
    featured: true,
    status: null,
  },
  {
    id: "ep037",
    title: "Wembanyama Gave Up $50 Million. Silver Calls That the System Working.",
    date: "2026-02-10",
    topic: "Salary Cap",
    format: "video",
    source: "The Legal Audit",
    url: "https://youtube.com/shorts/aaC3bsi11_o",
    image: null,
    summary:
      "The CBA treats a homegrown superstar's contract identically to a purchased one — and that's by design.",
    featured: false,
    status: null,
  },
  {
    id: "ep036",
    title: "Gary Trent Jr.'s $64M Deal Is the Joe Smith Playbook, Explained",
    date: "2026-01-22",
    topic: "Salary Cap",
    format: "video",
    source: "The Legal Audit",
    url: "https://youtube.com/shorts/yZuuRjuhT4w",
    image: null,
    summary:
      "The same structural sequence that once cost a team five first-round picks, replayed in Milwaukee.",
    featured: false,
    status: null,
  },
  {
    id: "mlb-labor-war",
    title: "MLB's Salary Cap Fight, Explained: Why Every Cap Started With a Union Losing",
    date: "2026-01-08",
    topic: "Labor Law",
    format: "article",
    source: "The Legal Audit",
    url: "/blog/mlb-labor-war-cba-reopener-explained.html",
    image: null,
    summary:
      "Every North American cap traces back to a union losing a labor war. MLB's has never lost — yet.",
    featured: false,
    status: null,
  },
  {
    id: "ep034",
    title: "Who Pays for Player Development? The USMNT's Pay-to-Play Problem, Explained.",
    date: "2025-12-18",
    topic: "Player Development",
    format: "video",
    source: "The Legal Audit",
    url: "https://youtube.com/shorts/E4ftmzlq-fs",
    image: null,
    summary:
      "Every 2026 World Cup semifinalist was developed for free. The USMNT wasn't — and that's an ownership question.",
    featured: false,
    status: null,
  },
];

export const BOOKS_EDUCATION = [
  {
    id: "sports-law-book",
    kind: "Book",
    title: "The Audibles That Changed Sports",
    status: "Forthcoming",
    description:
      "How Legal Fights Rewrote The Sports Industry. A trade nonfiction book about the legal moments that changed who held power, who got paid, and how modern sports was built.",
  },
  {
    id: "nil-course",
    kind: "Course",
    title: "NIL + Transfers",
    status: "Coming soon",
    description:
      "Practical, up-to-date guidance for athletes, families, lawyers and NIL agents navigating NIL agreements, transfers and the rules around them.",
  },
];

export const SPORTS_NIL_GROUPS = [
  {
    id: "nil-college",
    title: "NIL + College Athletics",
    description:
      "Name, image and likeness agreements, transfer-related questions, and revenue-sharing issues for college athletes and their families.",
    href: "#issue-explorer",
  },
  {
    id: "athlete-agreements",
    title: "Athlete Agreements + Representation",
    description:
      "Playing contracts, endorsement deals, and representation agreements for professional and collegiate athletes.",
    href: "#issue-explorer",
  },
  {
    id: "sports-business",
    title: "Sports Business + Commercial Deals",
    description:
      "Sponsorships, vendor and partnership contracts, and commercial agreements for sports businesses and brands.",
    href: "#issue-explorer",
  },
  {
    id: "governance",
    title: "League / Governance / Rights Issues",
    description:
      "Editorial analysis of league, association, and governance developments shaping sports business and athlete rights.",
    href: "/blog/",
  },
];

import { useState } from "react";

const WORLDS = [
  { id: "sports-nil", number: "01", title: "Sports + NIL", line: "Contracts, leverage, rules, careers.", href: "#sports-nil" },
  { id: "watching", number: "02", title: "Right Now", line: "The developments Alex is tracking.", href: "#watching" },
  { id: "issue-explorer", number: "03", title: "Find Your Issue", line: "Start with the problem, not a practice-area label.", href: "#issue-explorer" },
  { id: "insights", number: "04", title: "Ideas + Analysis", line: "Writing, video, social and commentary.", href: "#insights" },
  { id: "about", number: "05", title: "About Alex", line: "Attorney, operator, creator.", href: "#about" },
];

export default function WorldNav() {
  const [active, setActive] = useState(0);
  const current = WORLDS[active];

  return (
    <section className="world-nav" aria-label="Explore Alex's work">
      <div className="world-nav-stage">
        <p className="eyebrow">EXPLORE THE WORK</p>
        <div className="world-nav-copy" aria-live="polite">
          <span>{current.number} / 05</span>
          <h2>{current.title}</h2>
          <p>{current.line}</p>
          <a href={current.href}>Enter →</a>
        </div>
      </div>
      <div className="world-nav-list" role="tablist" aria-label="Areas to explore">
        {WORLDS.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={active === index ? "active" : ""}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            role="tab"
            aria-selected={active === index}
          >
            <span>{item.number}</span>
            <b>{item.title}</b>
            <i>↗</i>
          </button>
        ))}
      </div>
    </section>
  );
}

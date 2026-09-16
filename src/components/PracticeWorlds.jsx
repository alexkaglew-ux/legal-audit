import { useState } from "react";

const PRACTICES = [
  {
    id: "sports-nil",
    label: "Sports + NIL",
    number: "01",
    statement: "Athletes. Agreements. Rules. Leverage.",
    description: "A growing focus of the practice: athlete agreements, NIL, endorsements, representation, sports business and the rules that shape careers.",
    details: ["NIL + college athletics", "Athlete agreements + representation", "Endorsements + licensing", "Sports business + governance"],
    href: "#sports-nil",
  },
  {
    id: "music",
    label: "Music",
    number: "02",
    statement: "Talent. Rights. Deals. Careers.",
    description: "Transactional and business-affairs work across the music ecosystem, centered on the agreements, rights and relationships behind creative careers.",
    details: ["Artist + talent agreements", "Licensing + rights", "Business affairs", "Commercial partnerships"],
    href: "#issue-explorer",
  },
  {
    id: "film-tv",
    label: "Television + Film",
    number: "03",
    statement: "Projects. Rights. Production. Distribution.",
    description: "Legal and business-affairs work for film, television and media projects, from rights and development through production-facing and commercial agreements.",
    details: ["Development + rights", "Talent + production agreements", "Licensing", "Business affairs"],
    href: "#issue-explorer",
  },
];

export default function PracticeWorlds() {
  const [active, setActive] = useState(0);
  const practice = PRACTICES[active];

  return (
    <section className="practice-worlds section" id="practice" aria-labelledby="practice-worlds-heading">
      <div className="section-kicker"><span>Practice</span><span>SPORTS · MUSIC · TELEVISION + FILM</span></div>
      <div className="practice-worlds-heading">
        <h2 id="practice-worlds-heading">Three industries.<br />One practice built around talent, rights and business.</h2>
        <p>Sports is the growth focus. Music and television/film remain equally important parts of Alex's current practice.</p>
      </div>
      <div className="practice-worlds-shell">
        <div className="practice-world-tabs" role="tablist" aria-label="Practice areas">
          {PRACTICES.map((item, index) => (
            <button type="button" role="tab" aria-selected={active === index} className={active === index ? "active" : ""} key={item.id} onClick={() => setActive(index)} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}>
              <span>{item.number}</span><b>{item.label}</b><i>→</i>
            </button>
          ))}
        </div>
        <div className={`practice-world-stage practice-world-stage--${practice.id}`} role="tabpanel" aria-live="polite">
          <span className="practice-world-number">{practice.number}</span>
          <p className="eyebrow">{practice.label}</p>
          <h3>{practice.statement}</h3>
          <p className="practice-world-description">{practice.description}</p>
          <div className="practice-world-details">{practice.details.map((detail) => <span key={detail}>{detail}</span>)}</div>
          <a className="text-link" href={practice.href}>Explore {practice.label} →</a>
        </div>
      </div>
    </section>
  );
}

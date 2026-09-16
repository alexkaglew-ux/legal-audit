import { useState } from "react";

const LANES = [
  { label: "Sports + NIL", line: "Athletes, agreements, rules and leverage.", href: "#sports-nil" },
  { label: "Music", line: "Talent, rights, deals and careers.", href: "#practice" },
  { label: "Television + Film", line: "Projects, rights, production and distribution.", href: "#practice" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  return (
    <section className="hero hero-v2 hero-world hero-elegant" id="top">
      <div className="hero-copy">
        <p className="hero-overline">SPORTS · MUSIC · TELEVISION + FILM</p>
        <h1><span>Alex</span> <span>Kagianaris</span></h1>
        <p className="hero-title">Senior Attorney <i>·</i> The Lew Firm APC</p>
        <p className="hero-deck">A sports and entertainment attorney working where talent, rights and business meet.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#practice">Explore the practice <span>↓</span></a>
          <a className="text-link" href="mailto:ak@thelewfirm.com">Contact Alex →</a>
        </div>
      </div>

      <aside className="hero-practice-guide" aria-label="Explore Alex's practice">
        <div className="hero-guide-heading">
          <span>THE PRACTICE</span>
          <p>Explore Alex's work across sports and entertainment.</p>
        </div>
        <div className="hero-guide-focus" aria-live="polite">
          <small>0{active + 1}</small>
          <h2>{LANES[active].label}</h2>
          <p>{LANES[active].line}</p>
          <a href={LANES[active].href}>View this practice →</a>
        </div>
        <div className="hero-guide-tabs" role="tablist" aria-label="Practice areas">
          {LANES.map((lane, index) => (
            <button type="button" role="tab" aria-selected={active === index} className={active === index ? "active" : ""} key={lane.label} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}>
              <span>0{index + 1}</span><b>{lane.label}</b>
            </button>
          ))}
        </div>
      </aside>

      <div className="issue-line"><span>LOS ANGELES</span><span>THE LEW FIRM APC</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  );
}

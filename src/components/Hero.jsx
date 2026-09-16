import { useState } from "react";

const LANES = [
  { label: "SPORTS + NIL", line: "Athletes. Agreements. Rules. Leverage.", href: "#sports-nil" },
  { label: "MUSIC", line: "Talent. Rights. Deals. Careers.", href: "#practice" },
  { label: "TELEVISION + FILM", line: "Projects. Rights. Production. Distribution.", href: "#practice" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  return (
    <section className="hero hero-v2 hero-world" id="top">
      <div className="hero-copy">
        <p className="eyebrow">SPORTS · MUSIC · TELEVISION + FILM</p>
        <h1>Alex Kagianaris,<br /><em>Esq.</em></h1>
        <p className="hero-firm-line">Senior Attorney, The Lew Firm APC</p>
        <p className="hero-deck">Law at the intersection of talent, rights, business and culture.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#practice">Enter the practice <span>↓</span></a>
          <a className="text-link" href="mailto:ak@thelewfirm.com">Contact Alex →</a>
        </div>
      </div>

      <div className="hero-lanes" aria-label="Explore practice areas">
        <div className="hero-lane-display" aria-live="polite">
          <span>0{active + 1}</span>
          <strong>{LANES[active].line}</strong>
          <a href={LANES[active].href}>Explore →</a>
        </div>
        <div className="hero-lane-tabs" role="tablist" aria-label="Practice areas">
          {LANES.map((lane, index) => (
            <button type="button" role="tab" aria-selected={active === index} className={active === index ? "active" : ""} key={lane.label} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}>
              <span>0{index + 1}</span><b>{lane.label}</b><i>↗</i>
            </button>
          ))}
        </div>
      </div>

      <div className="issue-line"><span>LOS ANGELES</span><span>THE LEW FIRM APC</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  );
}

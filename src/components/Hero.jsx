const LANES = [
  { n: "01", title: "SPORTS", copy: "Athletes, NIL, endorsements, team matters and the rules shaping today’s game.", topic: "sports" },
  { n: "02", title: "MUSIC", copy: "Artists, talent, licensing, rights, commercial partnerships and the agreements behind the music.", topic: "music" },
  { n: "03", title: "FILM / TV", copy: "Development, rights, talent, production, licensing and the business affairs behind the camera.", topic: "film-tv" },
];

function openLane(lane) {
  window.dispatchEvent(new CustomEvent("practice:open", { detail: { practice: lane.topic } }));
  requestAnimationFrame(() => document.getElementById("practice-detail")?.scrollIntoView({ behavior: "smooth", block: "start" }));
}

export default function Hero() {
  return (
    <section className="hero-cinematic" id="top" aria-labelledby="hero-heading">
      <div className="hero-opening hero-opening--compact section-intro-row section-intro-row--label-only">
        <div className="section-intro-label"><p className="hero-overline hero-section-label" id="hero-heading">PRACTICE</p><span /></div>
        <a className="hero-contact" href="mailto:ak@thelewfirm.com">CONTACT ALEX <span>↗</span></a>
      </div>
      <div className="hero-lanes" id="practice" aria-label="Explore Alex Kagianaris, Esq.'s practice">
        {LANES.map((lane) => (
          <button className="hero-lane" type="button" onClick={() => openLane(lane)} key={lane.n}>
            <span className="hero-lane-number">{lane.n}</span><strong>{lane.title}</strong><p>{lane.copy}</p><span className="hero-lane-learn">LEARN MORE <b>→</b></span>
          </button>
        ))}
      </div>
      <div className="hero-ticker" aria-hidden="true">
        <span>CONTRACTS</span><b>·</b><span>NIL</span><b>·</b><span>RIGHTS</span><b>·</b><span>DEALS</span><b>·</b><span>IP</span><b>·</b><span>PRODUCTION</span><b>·</b><span>LICENSING</span><b>·</b><span>TALENT</span>
      </div>
    </section>
  );
}

const LANES = [
  { n: "01", title: "SPORTS", copy: "Athletes, NIL, college sports, representation, endorsements and the rules shaping careers.", topic: "sports-nil" },
  { n: "02", title: "MUSIC", copy: "Artists, talent, licensing, rights, commercial partnerships and the agreements behind creative careers.", topic: "music" },
  { n: "03", title: "FILM / TV", copy: "Development, rights, talent, production, licensing and the business affairs behind screen projects.", topic: "film-entertainment" },
];

function openLane(lane) {
  if (!lane.topic) return;
  window.dispatchEvent(new CustomEvent("standing:open", { detail: { topic: lane.topic } }));
  document.getElementById("issue-explorer")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section className="hero-cinematic" id="top" aria-labelledby="hero-heading">
      <div className="hero-opening hero-opening--compact">
        <p className="hero-overline hero-section-label" id="hero-heading">PRACTICE</p>
        <p className="hero-practice-line">My legal practice sits where talent, rights, business and culture meet.</p>
        <a className="hero-contact" href="mailto:ak@thelewfirm.com">CONTACT ALEX <span>↗</span></a>
      </div>
      <div className="hero-lanes" id="practice" aria-label="Explore Alex Kagianaris, Esq.'s practice">
        {LANES.map((lane) => (
          <button className="hero-lane" type="button" onClick={() => openLane(lane)} key={lane.n}>
            <span className="hero-lane-number">{lane.n}</span><strong>{lane.title}</strong><p>{lane.copy}</p><i>↘</i>
          </button>
        ))}
      </div>
      <div className="hero-ticker" aria-hidden="true">
        <span>CONTRACTS</span><b>·</b><span>NIL</span><b>·</b><span>RIGHTS</span><b>·</b><span>DEALS</span><b>·</b><span>IP</span><b>·</b><span>PRODUCTION</span><b>·</b><span>LICENSING</span><b>·</b><span>SPORTS</span>
      </div>
    </section>
  );
}

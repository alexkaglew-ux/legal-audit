const LANES = [
  { n: "01", title: "SPORTS + NIL", copy: "Athletes, college sports, representation, rights and the rules changing the game.", href: "#issue-explorer" },
  { n: "02", title: "ENTERTAINMENT", copy: "Music, television, film, talent, production and the agreements behind creative work.", href: "#practice" },
  { n: "03", title: "IDEAS", copy: "Legal developments, analysis and the questions shaping sports and entertainment right now.", href: "#insights" },
];

export default function Hero() {
  return (
    <section className="hero-cinematic" id="top" aria-labelledby="hero-heading">
      <div className="hero-opening">
        <div className="hero-identity">
          <p className="hero-overline">ALEX KAGIANARIS, ESQ. · SENIOR ATTORNEY, THE LEW FIRM APC</p>
          <h1 id="hero-heading">Pick a door.</h1>
          <p>My work sits where sports, entertainment, rights and business collide. Start with the world you came for.</p>
        </div>
        <a className="hero-contact" href="mailto:ak@thelewfirm.com">CONTACT ALEX <span>↗</span></a>
      </div>
      <div className="hero-lanes" aria-label="Explore Alex Kagianaris, Esq.'s work">
        {LANES.map((lane) => (
          <a className="hero-lane" href={lane.href} key={lane.n}>
            <span className="hero-lane-number">{lane.n}</span>
            <strong>{lane.title}</strong>
            <p>{lane.copy}</p>
            <i>↘</i>
          </a>
        ))}
      </div>
      <div className="hero-ticker" aria-hidden="true">
        <span>CONTRACTS</span><b>·</b><span>NIL</span><b>·</b><span>RIGHTS</span><b>·</b><span>DEALS</span><b>·</b><span>RULES</span><b>·</b><span>LEVERAGE</span><b>·</b><span>ENTERTAINMENT</span><b>·</b><span>SPORTS</span>
      </div>
    </section>
  );
}

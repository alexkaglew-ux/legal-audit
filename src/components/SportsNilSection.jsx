import { SPORTS_NIL_GROUPS } from "../content/insights.js";

export default function SportsNilSection() {
  return (
    <section className="sports-nil section sports-nil-v2" id="sports-nil" aria-labelledby="sports-nil-heading">
      <div className="section-kicker">
        <span>Practice focus</span>
        <span>SPORTS + NIL</span>
      </div>
      <div className="sports-nil-intro-grid">
        <h2 id="sports-nil-heading">Building the next generation of athlete-side practice.</h2>
        <p className="sports-nil-deck">
          Sports + NIL is a growing focus within Alex's broader sports and entertainment practice. The work centers on the agreements, rules, leverage, and business decisions surrounding athletes and their careers — alongside an established practice in music, television, and film.
        </p>
      </div>
      <div className="sports-nil-grid">
        {SPORTS_NIL_GROUPS.map((group, index) => (
          <a className="sports-nil-card" key={group.id} href={group.href}>
            <span className="sports-card-index">0{index + 1}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <b>Explore →</b>
          </a>
        ))}
      </div>
    </section>
  );
}

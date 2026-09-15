import { SPORTS_NIL_GROUPS } from "../content/insights.js";

export default function SportsNilSection() {
  return (
    <section className="sports-nil section sports-nil-v2" id="sports-nil" aria-labelledby="sports-nil-heading">
      <div className="section-kicker">
        <span>Core practice</span>
        <span>SPORTS + NIL</span>
      </div>
      <div className="sports-nil-intro-grid">
        <h2 id="sports-nil-heading">Sports law is the center of the practice.</h2>
        <p className="sports-nil-deck">
          Alex works with athletes, families, advisors, brands, and sports businesses on the
          agreements and decisions that shape careers — with particular emphasis on NIL,
          representation, endorsements, licensing, and athlete-side business matters.
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

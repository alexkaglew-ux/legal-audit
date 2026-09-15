import { SPORTS_NIL_GROUPS } from "../content/insights.js";

export default function SportsNilSection() {
  return (
    <section className="sports-nil section" id="sports-nil" aria-labelledby="sports-nil-heading">
      <div className="section-kicker">
        <span>Primary focus</span>
        <span>SPORTS + NIL</span>
      </div>
      <h2 id="sports-nil-heading">Sports + NIL is where Alex spends most of his practice.</h2>
      <p className="sports-nil-deck">
        From athlete representation to NIL agreements to the business
        deals around them, this is the dominant lane of Alex's work —
        paired with published analysis so athletes, families, and advisors
        can understand what generally matters before they sign.
      </p>
      <div className="sports-nil-grid">
        {SPORTS_NIL_GROUPS.map((group) => (
          <a className="sports-nil-card" key={group.id} href={group.href}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <b>Learn more →</b>
          </a>
        ))}
      </div>
    </section>
  );
}

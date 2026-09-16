import { CHANNELS, episodes } from "../content/episodes.js";

export default function LegalAuditModule() {
  const latest = episodes[0];

  return (
    <section className="legal-audit-module legal-audit-compact section" id="legal-audit">
      <div className="section-kicker">
        <span>One of the mediums</span>
        <span>VIDEO</span>
      </div>
      <div className="medium-strip">
        <div>
          <p className="eyebrow">THE LEGAL AUDIT</p>
          <h2>Law, broken down on video.</h2>
        </div>
        <div className="medium-strip-latest">
          <span className="pill">{latest.topic}</span>
          <h3>{latest.title}</h3>
          <p>{latest.summary}</p>
          <a className="text-link" href={latest.url} target="_blank" rel="noreferrer">Watch latest →</a>
        </div>
        <div className="medium-strip-links">
          <a href={CHANNELS.youtube} target="_blank" rel="noreferrer">YouTube ↗</a>
          <a href={CHANNELS.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </div>
    </section>
  );
}

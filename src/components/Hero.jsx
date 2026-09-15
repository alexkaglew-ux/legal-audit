export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">SPORTS + NIL · ENTERTAINMENT · BUSINESS</p>
        <h1>
          Alex Kagianaris,
          <br />
          <em>Esq.</em>
        </h1>
        <p className="hero-firm-line">Senior Attorney, The Lew Firm APC</p>
        <p className="hero-deck">
          Alex advises athletes, families, brands, and entertainment
          businesses on the contracts, NIL deals, and rights issues that
          shape their careers — and breaks down the mechanics publicly
          through <em>The Legal Audit</em>.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="mailto:ak@thelewfirm.com">
            Contact Alex <span>→</span>
          </a>
          <a className="text-link" href="#sports-nil">
            Explore Sports + NIL →
          </a>
        </div>
      </div>
      <a
        className="hero-art"
        href="https://www.youtube.com/channel/UCawQ902E6uRDuF8RJO4oruA"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/alex-presents-legal-audit.png" alt="Alex Kagianaris presents The Legal Audit" />
      </a>
      <div className="issue-line">
        <span>THE LEW FIRM APC</span>
        <span>LOS ANGELES · 2026</span>
      </div>
    </section>
  );
}

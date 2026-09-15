export default function Hero() {
  return (
    <section className="hero hero-v2" id="top">
      <div className="hero-copy">
        <p className="eyebrow">SPORTS + NIL · ENTERTAINMENT · BUSINESS</p>
        <h1>
          Alex Kagianaris,
          <br />
          <em>Esq.</em>
        </h1>
        <p className="hero-firm-line">Senior Attorney, The Lew Firm APC</p>
        <p className="hero-deck">
          Counsel for athletes, families, brands, and entertainment businesses navigating
          contracts, NIL, licensing, and the business decisions around a career.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="mailto:ak@thelewfirm.com">
            Contact Alex <span>→</span>
          </a>
          <a className="text-link" href="#sports-nil">
            Explore Sports + NIL →
          </a>
        </div>
        <div className="hero-proof" aria-label="Professional context">
          <span>Attorney at The Lew Firm APC</span>
          <span>Sports + NIL focus</span>
          <span>Creator of The Legal Audit</span>
        </div>
      </div>
      <div className="hero-art hero-art-v2" aria-hidden="true">
        <div className="hero-image-frame">
          <img src="/alex-presents-legal-audit.png" alt="" />
        </div>
        <div className="hero-caption">
          <span>SPORTS LAW</span>
          <span>NIL</span>
          <span>ENTERTAINMENT</span>
        </div>
      </div>
      <div className="issue-line">
        <span>LOS ANGELES</span>
        <span>THE LEW FIRM APC</span>
      </div>
    </section>
  );
}

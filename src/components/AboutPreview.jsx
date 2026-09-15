export default function AboutPreview() {
  return (
    <section className="about section about-preview" id="about">
      <div className="about-portrait-wrap">
        <img className="about-portrait" src="/headshot.png" alt="Alex Kagianaris, Esq." />
        <span className="about-portrait-note">LOS ANGELES · THE LEW FIRM APC</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">ABOUT ALEX</p>
        <h2>A lawyer focused on the business behind sports and entertainment.</h2>
        <p className="about-lead">
          Alex Kagianaris is a Senior Attorney at The Lew Firm APC. His practice focuses on sports,
          NIL, entertainment, intellectual property, and the agreements and business decisions that
          sit behind a career, brand, or creative project.
        </p>
        <p>
          He also created <em>The Legal Audit</em>, an editorial series explaining the contracts,
          rules, disputes, and legal mechanisms shaping sports and entertainment.
        </p>
        <div className="about-links">
          <a className="text-link" href="mailto:ak@thelewfirm.com">Contact Alex →</a>
          <a className="text-link" href="#legal-audit">Watch The Legal Audit →</a>
        </div>
        <p className="disclaimer">Commentary and educational information only. Not legal advice.</p>
      </div>
    </section>
  );
}

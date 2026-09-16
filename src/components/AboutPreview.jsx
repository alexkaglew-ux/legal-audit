export default function AboutPreview() {
  return (
    <section className="about section about-preview" id="about">
      <div className="about-portrait-wrap">
        <img className="about-portrait" src="/headshot.png" alt="Alex Kagianaris, Esq." />
        <span className="about-portrait-note">LOS ANGELES · THE LEW FIRM APC</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">ABOUT ALEX</p>
        <h2>Law, at the center of what moves culture.</h2>
        <p className="about-lead">
          Alex Kagianaris, Esq. is a Senior Attorney at The Lew Firm APC. His practice focuses on sports,
          NIL, entertainment, intellectual property, and the agreements and business decisions that
          sit behind a career, brand, or creative project.
        </p>
        <div className="about-links">
          <a className="primary-button" href="mailto:ak@thelewfirm.com">Contact Alex →</a>
        </div>
        <p className="disclaimer">Legal services are provided through The Lew Firm APC. Commentary and educational information only. Not legal advice.</p>
      </div>
    </section>
  );
}

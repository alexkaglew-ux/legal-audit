export default function Hero() {
  return (
    <section className="hero-cinematic" id="top">
      <div className="hero-story">
        <p className="hero-overline">SPORTS · MUSIC · TELEVISION + FILM</p>
        <h1>Law at the intersection<br />of talent, rights and<br />business.</h1>
        <p className="hero-deck">I represent athletes, creators, producers and companies in sports and entertainment — and help them navigate the legal and business issues that shape what’s next.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#practice">Explore the practice →</a>
          <a className="secondary-button" href="mailto:ak@thelewfirm.com">Contact Alex →</a>
        </div>
      </div>
      <div className="hero-portrait" aria-label="Portrait of Alex Kagianaris, Esq.">
        <img src="/headshot.png" alt="Alex Kagianaris, Esq." />
        <div className="hero-portrait-note"><span>Alex Kagianaris, Esq.</span><small>ATTORNEY · ADVISOR · CREATOR · BUILDER</small></div>
      </div>
    </section>
  );
}

export default function IdentityLayer(){
  return (
    <section className="identity-layer" aria-labelledby="identity-heading">
      <img className="identity-portrait" src="/headshot.png" alt="Alex Kagianaris, Esq." />
      <div className="identity-shade" aria-hidden="true" />
      <div className="identity-copy">
        <h1 id="identity-heading">Law for<br/>What Moves<br/>Culture.</h1>
        <p className="identity-deck">Sports. Music. Film. Business.</p>
        <a className="identity-primary" href="#practice">EXPLORE THE PRACTICE <span>→</span></a>
      </div>
      <figure className="identity-quote">
        <blockquote>“The law shapes opportunity. I spend my career making it work for creators, athletes and builders.”</blockquote>
        <figcaption><span>—</span> ALEX KAGIANARIS, ESQ.</figcaption>
      </figure>
    </section>
  );
}

export default function IdentityLayer(){
  return (
    <section className="identity-layer" aria-labelledby="identity-heading" data-layout="editorial-hero-v3">
      <img className="identity-portrait" src="/headshot.png" alt="Alex Kagianaris, Esq." />
      <div className="identity-shade" aria-hidden="true" />
      <div className="identity-copy">
        <h1 id="identity-heading">The Deal Is Only<br/>the Beginning.</h1>
        <span className="identity-rule" aria-hidden="true" />
        <p className="identity-deck">Sports · Music · Film / TV</p>
        <p className="identity-subdeck">Legal strategy for talent, rights, opportunity and what comes next.</p>
        <a className="identity-primary" href="#practice">EXPLORE THE PRACTICE <span>→</span></a>
      </div>
    </section>
  );
}

export default function AboutPreview() {
  return (
    <section className="about section" id="about">
      <img className="monogram" src="/headshot.png" alt="Alex Kagianaris, Esq." />
      <div>
        <p className="eyebrow">ABOUT ALEX</p>
        <h2>Alex Kagianaris, Esq.</h2>
        <p>
          Alex Kagianaris is a Senior Attorney at The Lew Firm APC, where he
          practices sports, entertainment, and intellectual property law.
          He advises professional and collegiate athletes — including
          combat sports (boxing/MMA) competitors and NFL and NCAA football
          players — on contract negotiation, NIL and endorsement deals, and
          the business affairs matters that shape a career on and off the
          field.
        </p>
        <p>
          His practice also spans transactional work for media,
          entertainment, and technology clients, including licensing and
          corporate governance and data privacy matters.
        </p>
        <p>
          Alex is the creator and host of <em>The Legal Audit</em>, where he
          breaks down the legal mechanisms behind the sports and
          entertainment industry's biggest deals.
        </p>
        <a className="text-link" href="mailto:ak@thelewfirm.com">
          Contact Alex →
        </a>
        <p className="disclaimer">Commentary, not legal advice.</p>
      </div>
    </section>
  );
}

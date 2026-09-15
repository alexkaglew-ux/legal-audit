export default function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <p className="eyebrow">DIRECT CONTACT</p>
      <h2>Have a matter you'd like Alex to look at? Reach out directly.</h2>
      <p className="contact-deck">
        Legal services are provided through The Lew Firm APC. This is a
        direct line to Alex, not general firm administration.
      </p>
      <div className="hero-actions contact-actions">
        <a className="primary-button" href="mailto:ak@thelewfirm.com">
          Email ak@thelewfirm.com <span>→</span>
        </a>
        <a className="text-link" href="https://thelewfirm.com" target="_blank" rel="noreferrer">
          The Lew Firm APC ↗
        </a>
      </div>
    </section>
  );
}

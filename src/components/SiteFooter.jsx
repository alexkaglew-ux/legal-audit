import { CHANNELS } from "../content/episodes.js";

const SOCIALS = [
  ["Instagram", "IG", CHANNELS.instagram],
  ["YouTube", "YT", CHANNELS.youtube],
  ["X / Twitter", "X", "https://x.com/alexkagianaris"],
  ["LinkedIn", "in", "https://www.linkedin.com/in/alex-kagianaris/"],
  ["Facebook", "f", "https://www.facebook.com/AlexKagianaris.Esq"],
];

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-newsletter">
        <p className="footer-newsletter-label">Get new analysis by email</p>
        <form
          className="footer-newsletter-form"
          name="get-the-brief"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you.html"
        >
          <input type="hidden" name="form-name" value="get-the-brief" />
          <p hidden>
            <input name="bot-field" />
          </p>
          <input type="email" name="email" required placeholder="Email address" aria-label="Email address" />
          <button type="submit">Sign up</button>
        </form>
      </div>
      <div className="footer-top">
        <a className="brand" href="#top">
          <span className="brand-mark">AK</span>
          <span>ALEX KAGIANARIS</span>
        </a>
        <a className="firm-link" href="https://thelewfirm.com" target="_blank" rel="noreferrer">
          THE LEW FIRM APC ↗
        </a>
        <a className="firm-link" href="mailto:ak@thelewfirm.com">
          ak@thelewfirm.com
        </a>
      </div>
      <div className="social-row" aria-label="Social media">
        {SOCIALS.map(([name, icon, url]) => (
          <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}>
            <span>{icon}</span>
            {name}
          </a>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2026 Alex Kagianaris. All rights reserved.</p>
        <p>
          Legal services provided through The Lew Firm APC. Commentary on
          this site is not legal advice and does not create an
          attorney-client relationship.
        </p>
      </div>
    </footer>
  );
}

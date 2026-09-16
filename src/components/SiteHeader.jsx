const NAV_LINKS = [
  ["The Practice", "#practice"],
  ["Find Your Standing", "#issue-explorer"],
  ["Insights", "#insights"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">AK</span>
        <span className="brand-copy"><b>ALEX KAGIANARIS, ESQ.</b><small>SENIOR ATTORNEY · THE LEW FIRM APC</small></span>
      </a>
      <nav aria-label="Primary navigation">
        {NAV_LINKS.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="header-action firm-utility-link" href="https://thelewfirm.com" target="_blank" rel="noreferrer">The Lew Firm ↗</a>
    </header>
  );
}

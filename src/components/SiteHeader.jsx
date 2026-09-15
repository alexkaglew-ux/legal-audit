const NAV_LINKS = [
  ["Sports + NIL", "#sports-nil"],
  ["Entertainment", "#issue-explorer"],
  ["Insights", "#insights"],
  ["About", "#about"],
  ["Books + Education", "#books-education"],
  ["Contact", "#contact"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">AK</span>
        <span>ALEX KAGIANARIS</span>
      </a>
      <nav aria-label="Primary navigation">
        {NAV_LINKS.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a
        className="header-action firm-utility-link"
        href="https://thelewfirm.com"
        target="_blank"
        rel="noreferrer"
      >
        The Lew Firm ↗
      </a>
    </header>
  );
}

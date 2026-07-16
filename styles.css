import { useMemo, useState } from "react";

const episodes = [
  { number: "025", title: "They Dumped Randle. Then Bought $130M of Injury Risk.", topic: "Sports", date: "July 12, 2026", duration: "8 min", deck: "A roster decision is never just basketball. The cap, the contract and the medical risk tell the rest of the story." },
  { number: "024", title: "Thirty Years Too Late.", topic: "Sports", date: "June 24, 2026", duration: "7 min", deck: "What delayed accountability reveals about institutional power, evidence and the limits of public pressure." },
  { number: "023", title: "Lifetime Deals Can Be a Trap.", topic: "Endorsements", date: "June 18, 2026", duration: "9 min", deck: "Jordan, LeBron, Ronaldo and Durant changed athlete-brand economics. Perpetual promises still deserve an expiration date." },
  { number: "022", title: "Declining to Testify Is Itself a Legal Position.", topic: "Governance", date: "June 10, 2026", duration: "6 min", deck: "Silence is not an empty act when a league, executive or institution is called to account." },
  { number: "021", title: "The Kuzma Tax.", topic: "Sports", date: "June 3, 2026", duration: "8 min", deck: "Every transaction has a headline price and a hidden price. The hidden one often decides who won." },
  { number: "020", title: "The White House UFC Event: Who Eats the $30M Loss?", topic: "Media", date: "May 27, 2026", duration: "10 min", deck: "Spectacle creates attention. Contracts determine where the risk lands when the economics fail." },
];

const topics = ["All", "Sports", "Endorsements", "Governance", "Media"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const filtered = useMemo(() => episodes.filter((episode) => {
    const matchesTopic = topic === "All" || episode.topic === topic;
    const haystack = `${episode.title} ${episode.deck} ${episode.topic}`.toLowerCase();
    return matchesTopic && haystack.includes(query.toLowerCase());
  }), [query, topic]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Legal Audit home">
          <span className="brand-mark">LA</span>
          <span>THE LEGAL AUDIT</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#latest">Latest</a><a href="#archive">Archive</a><a href="#about">About</a>
        </nav>
        <a className="header-action" href="#newsletter">Get the brief</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">LAW · SPORTS · ENTERTAINMENT · BUSINESS</p>
          <h1>The deal behind<br />the <em>headline.</em></h1>
          <p className="hero-deck">Sharp legal analysis of the contracts, leverage and money shaping sports and entertainment.</p>
          <a className="primary-button" href="#latest">Read the latest <span>→</span></a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="seal"><span>THE</span><strong>LEGAL</strong><span>AUDIT</span></div>
          <div className="column column-one" /><div className="column column-two" /><div className="column column-three" />
        </div>
        <div className="issue-line"><span>ISSUE 025</span><span>LOS ANGELES · 2026</span></div>
      </section>

      <section className="featured section" id="latest">
        <div className="section-kicker"><span>Featured analysis</span><span>EP. 025</span></div>
        <div className="featured-grid">
          <div className="featured-visual"><span className="case-label">ON THE DOCKET</span><div className="scale">§</div><p>RISK<br /><strong>$130M</strong></p></div>
          <article>
            <span className="pill">Sports business</span>
            <h2>They Dumped Randle. Then Bought $130M of Injury Risk.</h2>
            <p>A roster decision is never just basketball. The cap, the contract and the medical risk tell the rest of the story.</p>
            <div className="meta">JULY 12, 2026 <i /> 8 MIN READ</div>
            <a className="text-link" href="#archive">Read the analysis →</a>
          </article>
        </div>
      </section>

      <section className="archive section" id="archive">
        <div className="archive-head">
          <div><p className="eyebrow">THE RECORD</p><h2>Episode archive</h2></div>
          <label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the archive" aria-label="Search episodes" /></label>
        </div>
        <div className="filters" role="group" aria-label="Filter by topic">
          {topics.map((item) => <button key={item} className={topic === item ? "active" : ""} onClick={() => setTopic(item)}>{item}</button>)}
        </div>
        <div className="episode-list" aria-live="polite">
          {filtered.map((episode) => (
            <article className="episode" key={episode.number}>
              <div className="episode-number">{episode.number}</div>
              <div><span className="topic">{episode.topic}</span><h3>{episode.title}</h3><p>{episode.deck}</p></div>
              <div className="episode-meta"><span>{episode.date}</span><span>{episode.duration}</span><b>↗</b></div>
            </article>
          ))}
          {!filtered.length && <p className="empty">No episodes match this search.</p>}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="monogram">AK</div>
        <div><p className="eyebrow">ABOUT THE EDITOR</p><h2>Alex Kagianaris</h2><p>Los Angeles attorney, producer and business operator examining the leverage behind consequential sports and entertainment deals. The Legal Audit separates the public narrative from the contractual reality.</p><p className="disclaimer">Commentary is for informational purposes only and does not constitute legal advice.</p></div>
      </section>

      <section className="newsletter" id="newsletter">
        <p className="eyebrow">THE WEEKLY BRIEF</p><h2>Read the deal before<br />you read the headline.</h2>
        <p>New analysis on sports, entertainment and the business of leverage.</p>
        <form onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="Email address" aria-label="Email address" /><button type="submit">Coming soon</button></form>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">LA</span><span>THE LEGAL AUDIT</span></a><p>© 2026 Alex Kagianaris. All rights reserved.</p><div><a href="#archive">Archive</a><a href="#about">About</a></div></footer>
    </main>
  );
}

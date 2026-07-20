import { useMemo, useState } from "react";
import { CHANNELS, CURRENT_EPISODE_NUMBER, episodes } from "./content/episodes.js";

const SOCIALS = [
  ["Instagram", "IG", CHANNELS.instagram],
  ["YouTube", "YT", CHANNELS.youtube],
  ["X / Twitter", "X", "https://x.com/alexkagianaris"],
  ["LinkedIn", "in", "https://www.linkedin.com/in/alex-kagianaris/"],
  ["Facebook", "f", "https://www.facebook.com/AlexKagianaris.Esq"],
];

export default function App() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const topics = useMemo(() => ["All", ...new Set(episodes.map(e => e.topic))], []);
  const filtered = useMemo(() => episodes.filter(e => {
    const haystack = `${e.number} ${e.title} ${e.summary} ${e.topic}`.toLowerCase();
    return (topic === "All" || e.topic === topic) && haystack.includes(query.toLowerCase());
  }), [query, topic]);
  const latest = episodes[0];

  return <main>
    <header className="site-header">
      <a className="brand" href="#top"><span className="brand-mark">LA</span><span>THE LEGAL AUDIT</span></a>
      <nav aria-label="Primary navigation"><a href="#latest">Latest</a><a href="#watch">Watch</a><a href="#archive">Archive</a><a href="#about">About</a></nav>
      <a className="header-action" href="#newsletter">Get the brief</a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">LAW · SPORTS · ENTERTAINMENT · BUSINESS</p><h1>The deal behind<br/>the <em>headline.</em></h1><p className="hero-deck">Sharp legal analysis of the contracts, leverage and money shaping sports and entertainment.</p><a className="primary-button" href="#latest">Explore EP{latest.number} <span>→</span></a></div>
      <div className="hero-art" aria-hidden="true"><div className="seal"><span>THE</span><strong>LEGAL</strong><span>AUDIT</span></div><div className="column one"/><div className="column two"/><div className="column three"/></div>
      <div className="issue-line"><span>EP{String(CURRENT_EPISODE_NUMBER).padStart(3,"0")}</span><span>LOS ANGELES · 2026</span></div>
    </section>

    <section className="featured section" id="latest"><div className="section-kicker"><span>Featured analysis</span><span>EP{latest.number}</span></div><div className="featured-grid"><div className="featured-visual"><span>ON THE DOCKET</span><b>§</b><p>WATCH<br/><strong>EP{latest.number}</strong></p></div><article><span className="pill">{latest.topic}</span><h2>{latest.title}</h2><p>{latest.summary}</p><a className="text-link" href={latest.url} target="_blank" rel="noreferrer">Watch the episode →</a></article></div></section>

    <section className="media section" id="watch"><div className="section-kicker"><span>Watch & follow</span><span>THE LEGAL AUDIT</span></div><div className="media-grid"><a className="media-card youtube" href={CHANNELS.youtube} target="_blank" rel="noreferrer"><span className="media-icon">▶</span><div><p className="eyebrow">VIDEO EPISODES</p><h2>Watch on YouTube</h2><p>Go directly to The Legal Audit video channel and watch the latest episodes.</p><b>@alexkagianaris →</b></div></a><a className="media-card instagram" href={CHANNELS.instagram} target="_blank" rel="noreferrer"><span className="media-icon">◎</span><div><p className="eyebrow">CLIPS & ANALYSIS</p><h2>Follow on Instagram</h2><p>Short-form breakdowns, episode graphics and new-release clips.</p><b>@alexkagianaris.esq →</b></div></a></div></section>

    <section className="archive section" id="archive"><div className="archive-head"><div><p className="eyebrow">THE RECORD</p><h2>Episode archive</h2></div><label className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search EP001–EP033" aria-label="Search episodes"/></label></div><div className="filters">{topics.map(item=><button key={item} className={topic===item?"active":""} onClick={()=>setTopic(item)}>{item}</button>)}</div><div className="episode-list" aria-live="polite">{filtered.map(e=><article className="episode" key={e.number}><div className="episode-number">EP{e.number}</div><div><span className="topic">{e.topic}</span><h3>{e.title}</h3><p>{e.summary}</p></div><a className="episode-link" href={e.url} target="_blank" rel="noreferrer">WATCH ↗</a></article>)}{!filtered.length&&<p className="empty">No episodes match this search.</p>}</div><p className="archive-disclaimer">Commentary, not legal advice.</p></section>

    <section className="about section" id="about"><div className="monogram">AK</div><div><p className="eyebrow">ABOUT THE EDITOR</p><h2>Alex Kagianaris</h2><p>Los Angeles attorney, producer and business operator examining the leverage behind consequential sports and entertainment deals. The Legal Audit separates the public narrative from the contractual reality.</p><p>Alex's professional legal practice is <a className="inline-link" href="https://thelewfirm.com" target="_blank" rel="noreferrer">The Lew Firm APC ↗</a>.</p><p className="disclaimer">Commentary, not legal advice.</p></div></section>

    <section className="newsletter" id="newsletter"><p className="eyebrow">GET THE BRIEF</p><h2>Read the deal before<br/>you read the headline.</h2><p>New analysis on sports, entertainment and the business of leverage.</p><form name="get-the-brief" method="POST" data-netlify="true" netlify-honeypot="bot-field"><input type="hidden" name="form-name" value="get-the-brief"/><p hidden><input name="bot-field"/></p><input type="email" name="email" required placeholder="Email address" aria-label="Email address"/><button type="submit">Join the brief</button></form></section>

    <footer><div className="footer-top"><a className="brand" href="#top"><span className="brand-mark">LA</span><span>THE LEGAL AUDIT</span></a><a className="firm-link" href="https://thelewfirm.com" target="_blank" rel="noreferrer">THE LEW FIRM APC ↗</a></div><div className="social-row" aria-label="Social media">{SOCIALS.map(([name,icon,url])=><a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}><span>{icon}</span>{name}</a>)}</div><div className="footer-bottom"><p>© 2026 Alex Kagianaris. All rights reserved.</p><p>Commentary, not legal advice.</p></div></footer>
  </main>;
}

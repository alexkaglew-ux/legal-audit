import { useMemo, useState } from "react";
import { CHANNELS, CURRENT_EPISODE_NUMBER, episodes } from "../content/episodes.js";

export default function LegalAuditModule() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const topics = useMemo(() => ["All", ...new Set(episodes.map((e) => e.topic))], []);
  const filtered = useMemo(
    () =>
      episodes.filter((e) => {
        const haystack = `${e.number} ${e.title} ${e.summary} ${e.topic}`.toLowerCase();
        return (topic === "All" || e.topic === topic) && haystack.includes(query.toLowerCase());
      }),
    [query, topic],
  );
  const latest = episodes[0];

  return (
    <section className="legal-audit-module section" id="legal-audit">
      <div className="section-kicker">
        <span>Supporting media platform</span>
        <span>THE LEGAL AUDIT</span>
      </div>
      <div className="legal-audit-intro-row">
        <h2>The Legal Audit</h2>
        <p>
          Alex's weekly breakdown of the contracts, leverage and money
          shaping sports and entertainment — proof of the analysis behind
          the practice, not the site's main identity.
        </p>
      </div>

      <div className="featured-grid legal-audit-featured">
        <div className="featured-visual">
          <span>ON THE DOCKET</span>
          <b>§</b>
          <p>
            WATCH
            <br />
            <strong>EP{latest.number}</strong>
          </p>
        </div>
        <article>
          <span className="pill">{latest.topic}</span>
          <h3>{latest.title}</h3>
          <p>{latest.summary}</p>
          <a className="text-link" href={latest.url} target="_blank" rel="noreferrer">
            Watch the episode →
          </a>
        </article>
      </div>

      <div className="legal-audit-links">
        <a className="text-link" href={CHANNELS.youtube} target="_blank" rel="noreferrer">
          View all on YouTube →
        </a>
        <a className="text-link" href={CHANNELS.instagram} target="_blank" rel="noreferrer">
          Follow on Instagram →
        </a>
      </div>

      <details className="archive-disclosure">
        <summary>Browse the episode archive (EP{String(CURRENT_EPISODE_NUMBER).padStart(3, "0")} and earlier)</summary>
        <div className="archive archive--embedded">
          <div className="archive-head">
            <p className="eyebrow">THE RECORD</p>
            <label className="search">
              <span>⌕</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search episodes"
                aria-label="Search episodes"
              />
            </label>
          </div>
          <div className="filters">
            {topics.map((item) => (
              <button
                key={item}
                type="button"
                className={topic === item ? "active" : ""}
                onClick={() => setTopic(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="episode-list" aria-live="polite">
            {filtered.map((e) => (
              <article className="episode" key={e.number}>
                <div className="episode-number">EP{e.number}</div>
                <div>
                  <span className="topic">{e.topic}</span>
                  <h3>{e.title}</h3>
                  <p>{e.summary}</p>
                </div>
                <a className="episode-link" href={e.url} target="_blank" rel="noreferrer">
                  WATCH ↗
                </a>
              </article>
            ))}
            {!filtered.length && <p className="empty">No episodes match this search.</p>}
          </div>
          <p className="archive-disclaimer">Commentary, not legal advice.</p>
        </div>
      </details>
    </section>
  );
}

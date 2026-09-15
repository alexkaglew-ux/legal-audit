import { LATEST_ANALYSIS } from "../content/insights.js";

const FORMAT_LABEL = {
  video: "Video",
  article: "Article",
  linkedin: "LinkedIn",
  newsletter: "Newsletter",
};

export default function InsightsFeed() {
  return (
    <section className="insights section" id="insights" aria-labelledby="insights-heading">
      <div className="section-kicker">
        <span id="insights-heading">Latest analysis</span>
        <span>THE LEGAL AUDIT & MORE</span>
      </div>
      <div className="insights-grid">
        {LATEST_ANALYSIS.map((item) => (
          <a
            className={`insight-card${item.featured ? " featured" : ""}`}
            key={item.id}
            href={item.url}
            target={item.url.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
          >
            <div className="insight-card-meta">
              <span className="topic">{item.topic}</span>
              <span className="insight-format">{FORMAT_LABEL[item.format] || item.format}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <b>{item.source} →</b>
          </a>
        ))}
      </div>
      <a className="text-link" href="/blog/">
        Read all analysis →
      </a>
    </section>
  );
}

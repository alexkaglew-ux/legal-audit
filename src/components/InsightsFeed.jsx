import { useMemo, useState } from "react";
import { LATEST_ANALYSIS } from "../content/insights.js";

const FORMAT_LABEL = { video: "Video", article: "Writing", linkedin: "Social", newsletter: "Newsletter" };

export default function InsightsFeed() {
  const [format, setFormat] = useState("All");
  const formats = ["All", ...new Set(LATEST_ANALYSIS.map((item) => FORMAT_LABEL[item.format] || item.format))];
  const visible = useMemo(() => LATEST_ANALYSIS.filter((item) => format === "All" || (FORMAT_LABEL[item.format] || item.format) === format), [format]);

  return (
    <section className="insights section" id="insights" aria-labelledby="insights-heading">
      <div className="section-kicker">
        <span id="insights-heading">Ideas + analysis</span>
        <span>ACROSS MEDIUMS</span>
      </div>
      <div className="insights-heading-row">
        <h2>One point of view.<br />Different formats.</h2>
        <div className="medium-filters" aria-label="Filter analysis by format">
          {formats.map((item) => <button type="button" key={item} className={format === item ? "active" : ""} onClick={() => setFormat(item)}>{item}</button>)}
        </div>
      </div>
      <div className="insights-grid" aria-live="polite">
        {visible.map((item) => (
          <a className={`insight-card${item.featured ? " featured" : ""}`} key={item.id} href={item.url} target={item.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            <div className="insight-card-meta"><span className="topic">{item.topic}</span><span className="insight-format">{FORMAT_LABEL[item.format] || item.format}</span></div>
            <h3>{item.title}</h3><p>{item.summary}</p><b>{item.source} →</b>
          </a>
        ))}
      </div>
      <a className="text-link" href="/blog/">Explore all analysis →</a>
    </section>
  );
}

import { WATCHING } from "../content/insights.js";

export default function WatchingRail() {
  return (
    <section className="watching section" id="watching" aria-labelledby="watching-heading">
      <div className="section-kicker">
        <span id="watching-heading">What Alex is watching</span>
        <span>UPDATED REGULARLY</span>
      </div>
      <div className="watching-grid">
        {WATCHING.map((item) => (
          <article className="watching-card" key={item.id}>
            <div className="watching-card-top">
              <span className="pill">{item.topic}</span>
              {item.status && <span className="status-label">{item.status}</span>}
            </div>
            <h3>{item.headline}</h3>
            <p>{item.significance}</p>
            {item.url && (
              <a className="text-link" href={item.url} target={item.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                Read Alex's analysis →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

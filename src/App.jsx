import { useMemo, useState } from "react";
import { CHANNELS, CURRENT_EPISODE_NUMBER, episodes } from "./content/episodes.js";

const SOCIALS = [
["Instagram", "IG", CHANNELS.instagram],
["YouTube", "YT", CHANNELS.youtube],
["X / Twitter", "X", "https://x.com/alexkagianaris"],
["LinkedIn", "in", "https://www.linkedin.com/in/alex-kagianaris/"],
["Facebook", "f", "https://www.facebook.com/AlexKagianaris.Esq"],
];

const PRACTICE_AREAS = [
"Athlete Representation & NIL",
"Combat Sports (Boxing/MMA)",
"NFL & NCAA Football",
"Endorsements & Licensing",
"Entertainment & Music Business Affairs",
"Enterprise Technology Agreements",
"Corporate Governance & Data Privacy",
];

const ARTICLES = [
{
number: "038",
topic: "Antitrust",
title: "Michael Jordan Sued NASCAR for $364 Million. He Settled for Something Better.",
summary: "23XI Racing and Front Row Motorsports refused NASCAR's charter agreement and sued — and ended up ahead of every team that signed.",
url: "/blog/ep038-jordan-nascar-antitrust-settlement.html",
},
{
number: "037",
topic: "Salary Cap",
title: "Wembanyama Gave Up $50 Million. Silver Calls That the System Working.",
summary: "The CBA treats a homegrown superstar's contract identically to a purchased one — and that's by design.",
url: "/blog/ep037-wembanyama-supermax-apron-explained.html",
},
{
number: "036",
topic: "Salary Cap",
title: "Gary Trent Jr.'s $64M Deal Is the Joe Smith Playbook, Explained",
summary: "The same structural sequence that once cost a team five first-round picks, replayed in Milwaukee.",
url: "/blog/ep036-gary-trent-jr-joe-smith-playbook.html",
},
{
number: "035",
topic: "Labor Law",
title: "MLB's Salary Cap Fight, Explained: Why Every Cap Started With a Union Losing",
summary: "Every North American cap traces back to a union losing a labor war. MLB's has never lost — yet.",
url: "/blog/mlb-labor-war-cba-reopener-explained.html",
},
{
number: "034",
topic: "Player Development",
title: "Who Pays for Player Development? The USMNT's Pay-to-Play Problem, Explained.",
summary: "Every 2026 World Cup semifinalist was developed for free. The USMNT wasn't — and that's an ownership question.",
url: "/blog/ep034-usmnt-pay-to-play-development.html",
},
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
<a className="brand" href="#top"><span className="brand-mark">AK</span><span>ALEX KAGIANARIS</span></a>
<nav aria-label="Primary navigation"><a href="#about">About Alex</a><a href="#legal-practice">Legal Practice</a><a href="#legal-audit">The Legal Audit</a><a href="#watch">Watch</a><a href="#articles">Articles</a><a href="#contact">Contact</a></nav>
</header>

<section className="hero" id="top">
<div className="hero-copy"><p className="eyebrow">SPORTS · ENTERTAINMENT · MEDIA LAW</p><h1>Alex Kagianaris,<br/><em>Esq.</em></h1><p className="hero-deck">Senior Associate at The Lew Firm APC, representing professional and collegiate athletes and entertainment businesses in contract, endorsement and licensing matters. Creator of <em>The Legal Audit</em>, his weekly breakdown of the deals shaping sports and entertainment.</p><div className="hero-actions"><a className="primary-button" href="#contact">Contact The Lew Firm <span>→</span></a><a className="text-link" href="#legal-audit">Watch The Legal Audit →</a></div></div>
h<a className="hero-art" href="https://www.youtube.com/channel/UCawQ902E6uRDuF8RJO4oruA" target="_blank" rel="noreferrer"><img src="/alex-presents-legal-audit.png" alt="Alex Kagianaris presents The Legal Audit"/></a>
<div className="issue-line"><span>EP{String(CURRENT_EPISODE_NUMBER).padStart(3,"0")}</span><span>LOS ANGELES · 2026</span></div>
</section>

<section className="legal-practice section" id="legal-practice">
<div className="section-kicker"><span>Legal practice</span><span>THE LEW FIRM APC</span></div>
<div className="practice-grid">
<div className="practice-intro">
<h2>Alex Kagianaris represents professional and collegiate athletes, entertainment businesses, and media and technology companies in the deals that define their careers.</h2>
<a className="primary-button" href="#contact">Contact The Lew Firm <span>→</span></a>
</div>
<ul className="practice-list">
{PRACTICE_AREAS.map(area => <li key={area}>{area}</li>)}
</ul>
</div>
<div className="firm-block">
<p className="firm-name">The Lew Firm APC</p>
<p>9440 Santa Monica Blvd, Suite 301, Beverly Hills, CA</p>
<p><a className="inline-link" href="tel:+13108717038">(310) 871-7038</a> · <a className="inline-link" href="https://thelewfirm.com" target="_blank" rel="noreferrer">thelewfirm.com ↗</a></p>
</div>
</section>

<section className="legal-audit-intro" id="legal-audit">
<div className="legal-audit-intro-inner">
<p className="eyebrow">A MEDIA PLATFORM BY ALEX KAGIANARIS</p>
<h2>The Legal Audit</h2>
<p>Sharp legal analysis of the contracts, leverage and money shaping sports and entertainment — the deal behind the headline, broken down for anyone who wants the real mechanism, not just the take.</p>
</div>
</section>

<section className="featured section" id="latest"><div className="section-kicker"><span>Featured analysis</span><span>EP{latest.number}</span></div><div className="featured-grid"><div className="featured-visual"><span>ON THE DOCKET</span><b>§</b><p>WATCH<br/><strong>EP{latest.number}</strong></p></div><article><span className="pill">{latest.topic}</span><h2>{latest.title}</h2><p>{latest.summary}</p><a className="text-link" href={latest.url} target="_blank" rel="noreferrer">Watch the episode →</a></article></div></section>

<section className="media section" id="watch"><div className="section-kicker"><span>Watch & follow</span><span>THE LEGAL AUDIT</span></div><div className="playlist-feature"><div className="playlist-embed"><iframe src="https://www.youtube.com/embed/videoseries?list=PLUqome2s-Vd4&rel=0" title="The Legal Audit — All Episodes" allowFullScreen loading="lazy"/></div><a className="primary-button playlist-cta" href="https://www.youtube.com/playlist?list=PLUqome2s-Vd4" target="_blank" rel="noreferrer">View all on YouTube <span>→</span></a></div><div className="media-grid"><a className="media-card youtube" href={CHANNELS.youtube} target="_blank" rel="noreferrer"><span className="media-icon">▶</span><div><p className="eyebrow">VIDEO EPISODES</p><h2>Watch on YouTube</h2><p>Go directly to The Legal Audit video channel and watch the latest episodes.</p><b>@alexkagianaris →</b></div></a><a className="media-card instagram" href={CHANNELS.instagram} target="_blank" rel="noreferrer"><span className="media-icon">◎</span><div><p className="eyebrow">CLIPS & ANALYSIS</p><h2>Follow on Instagram</h2><p>Short-form breakdowns, episode graphics and new-release clips.</p><b>@alexkagianaris.esq →</b></div></a></div></section>

<section className="articles section" id="articles">
<div className="section-kicker"><span>Written analysis</span><span>THE LEGAL AUDIT</span></div>
<div className="articles-grid">
{ARTICLES.map(a => <a className="article-card" key={a.number} href={a.url}>
<span className="topic">{a.topic} · EP{a.number}</span>
<h3>{a.title}</h3>
<p>{a.summary}</p>
<b>Read the breakdown →</b>
</a>)}
</div>
<a className="text-link" href="/blog/">Read all articles →</a>
</section>

<section className="archive section" id="archive"><div className="archive-head"><div><p className="eyebrow">THE RECORD</p><h2>Episode archive</h2></div><label className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search episodes" aria-label="Search episodes"/></label></div><div className="filters">{topics.map(item=><button key={item} className={topic===item?"active":""} onClick={()=>setTopic(item)}>{item}</button>)}</div><div className="episode-list" aria-live="polite">{filtered.map(e=><article className="episode" key={e.number}><div className="episode-number">EP{e.number}</div><div><span className="topic">{e.topic}</span><h3>{e.title}</h3><p>{e.summary}</p></div><a className="episode-link" href={e.url} target="_blank" rel="noreferrer">WATCH ↗</a></article>)}{!filtered.length&&<p className="empty">No episodes match this search.</p>}</div><p className="archive-disclaimer">Commentary, not legal advice.</p></section>

<section className="about section" id="about">
<div className="monogram">AK</div>
<div>
<p className="eyebrow">ABOUT ALEX</p>
<h2>Alex Kagianaris, Esq.</h2>
<p>Alex Kagianaris is a Senior Associate at The Lew Firm APC, where he has practiced sports, entertainment, and intellectual property law since 2012. He leads the firm's athlete representation practice, advising professional and collegiate athletes — including combat sports (boxing/MMA) competitors and NFL and NCAA football players — on contract negotiation, endorsement and licensing deals, and the business affairs matters that shape a career on and off the field.</p>
<p>His practice also spans enterprise transactional work for media, entertainment, and technology clients, including SaaS agreements, licensing, and corporate governance and data privacy matters.</p>
<p>Before The Lew Firm, Alex spent five years in the Business Affairs department at Warner Music Group, negotiating contracts with recording artists, producers, and songwriters and advising on licensing, brand partnerships, and distribution deals across the music industry.</p>
<p>Beyond the practice, Alex has built and scaled businesses of his own — co-founding Stout Burgers & Beers and Boomtown Brewery and growing both into multi-million-dollar hospitality brands. That experience on the other side of the negotiating table, raising capital, managing vendor and partnership contracts, and building a brand from the ground up, informs how he counsels clients navigating the same commercial pressures.</p>
<p>He is a graduate of Loyola Law School and holds a B.A. in Communications from the University of California, Berkeley. He is a member of the State Bar of California, the American Bar Association, and the Entertainment Law Society.</p>
<p>Alex is also the creator and host of <em>The Legal Audit</em>, where he breaks down the legal mechanisms behind the sports and entertainment industry's biggest deals.</p>
<p className="disclaimer">Commentary, not legal advice.</p>
</div>
</section>

<section className="contact section" id="contact">
<p className="eyebrow">CONTACT</p>
<h2>For legal inquiries, contact The Lew Firm APC directly.</h2>
<a className="primary-button" href="https://thelewfirm.com" target="_blank" rel="noreferrer">Contact The Lew Firm <span>→</span></a>
</section>

<section className="newsletter" id="newsletter"><p className="eyebrow">GET THE BRIEF</p><h2>Read the deal before<br/>you read the headline.</h2><p>New analysis on sports, entertainment and the business of leverage.</p><form name="get-the-brief" method="POST" data-netlify="true" netlify-honeypot="bot-field"><input type="hidden" name="form-name" value="get-the-brief"/><p hidden><input name="bot-field"/></p><input type="email" name="email" required placeholder="Email address" aria-label="Email address"/><button type="submit">Join the brief</button></form></section>

<footer><div className="footer-top"><a className="brand" href="#top"><span className="brand-mark">AK</span><span>ALEX KAGIANARIS</span></a><a className="firm-link" href="https://thelewfirm.com" target="_blank" rel="noreferrer">THE LEW FIRM APC ↗</a></div><div className="social-row" aria-label="Social media">{SOCIALS.map(([name,icon,url])=><a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}><span>{icon}</span>{name}</a>)}</div><div className="footer-bottom"><p>© 2026 Alex Kagianaris. All rights reserved.</p><p>Commentary, not legal advice.</p></div></footer>
</main>;
}

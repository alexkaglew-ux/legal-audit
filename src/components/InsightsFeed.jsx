const ITEMS = [
  { type: "THE TAKE", topic: "GAMBLING", title: "The Bettor Isn't the Licensee. That's Why the Review Is of FanDuel.", deck: "Massachusetts puts the proxy-betting duty on the operator — and that placement decides who is exposed.", url: "https://sportslegalaudit.com/latest/proxy-betting-regulatory-exposure/" },
  { type: "THE AUDIT", topic: "NIL", title: "LSU's Roster Costs Twice the Cap. Both Numbers Are Real.", deck: "The House settlement created an enforceable cap and an unlimited second track running beside it.", url: "https://sportslegalaudit.com/latest/lsu-nil-cap-paradox/" },
  { type: "NIL", topic: "COLLEGE SPORTS", title: "What an Associated Entity Is, and Why It Decides Everything", deck: "A practical explanation of one of the rules shaping NIL agreements after House.", url: "https://sportslegalaudit.com/clause/what-is-an-associated-entity/" },
  { type: "THE CLAUSE", topic: "CONTRACT", title: "What Does ‘Guaranteed’ Actually Mean in a Pro Contract?", deck: "Guaranteed usually means guaranteed against specific events — not necessarily everything.", url: "https://sportslegalaudit.com/clause/" },
];

export default function InsightsFeed() {
  return (
    <section className="insights section" id="insights" aria-labelledby="insights-heading">
      <div className="insights-compact-head">
        <div><p className="eyebrow" id="insights-heading">IDEAS + ANALYSIS</p><p>Selected work from <a href="https://sportslegalaudit.com" target="_blank" rel="noreferrer">Sports Legal Audit ↗</a></p></div>
        <a className="text-link" href="https://sportslegalaudit.com/latest/" target="_blank" rel="noreferrer">View all →</a>
      </div>
      <div className="sla-strip">
        {ITEMS.map((item) => <a className="sla-item" key={item.type} href={item.url} target="_blank" rel="noreferrer"><span>{item.type} · {item.topic}</span><h3>{item.title}</h3><p>{item.deck}</p><i>Read →</i></a>)}
        <a className="sla-item sla-video" href="https://youtu.be/7HKGO-oPggg" target="_blank" rel="noreferrer"><span>VIDEO</span><div className="video-mark" aria-hidden="true">▶</div><h3>Watch the latest video analysis</h3><i>Watch →</i></a>
      </div>
    </section>
  );
}

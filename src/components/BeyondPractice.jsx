const WORLDS = [
  {
    n: "01",
    title: "BUILDER",
    lead: "Businesses, systems and products.",
    copy: "I have spent years building and operating businesses, which changes how I look at legal work: not as an isolated document, but as part of the larger enterprise it has to serve.",
    detail: "OPERATOR · FOUNDER · PRODUCT THINKING",
  },
  {
    n: "02",
    title: "CREATOR",
    lead: "Film, media and storytelling.",
    copy: "Producing and directing put me on the other side of the table — where rights, production, financing, distribution and creative ambition have to coexist in the real world.",
    detail: "PRODUCER · DIRECTOR · MEDIA",
  },
  {
    n: "03",
    title: "STRATEGIST",
    lead: "Rights before transactions.",
    copy: "The strongest deals make sense together. I think about what a client is giving, what they retain, how one agreement affects the next, and where long-term ownership can be preserved.",
    detail: "RIGHTS · STRUCTURE · OWNERSHIP",
  },
  {
    n: "04",
    title: "EXPLAINER",
    lead: "Making complicated rules useful.",
    copy: "Through writing, video and The Legal Audit, I break down the legal mechanisms shaping sports and entertainment — one medium among the ways I explore the work.",
    detail: "WRITING · VIDEO · THE LEGAL AUDIT",
  },
];

export default function BeyondPractice() {
  return (
    <section className="beyond-practice section" id="beyond-practice" aria-labelledby="beyond-heading">
      <div className="beyond-intro">
        <p className="eyebrow">BEYOND THE PRACTICE</p>
        <div>
          <h2 id="beyond-heading">The lawyer is only one part of the perspective.</h2>
          <p>I have built businesses, produced creative work and spent years thinking about how rights become durable value. Those experiences inform the way I approach clients, projects and deals.</p>
        </div>
      </div>
      <div className="beyond-grid">
        {WORLDS.map((world) => (
          <article className="beyond-world" key={world.n}>
            <span>{world.n}</span>
            <p className="beyond-role">{world.title}</p>
            <h3>{world.lead}</h3>
            <p>{world.copy}</p>
            <small>{world.detail}</small>
          </article>
        ))}
      </div>
      <div className="beyond-thesis">
        <span>THE THROUGH-LINE</span>
        <p>What are you giving? What do you retain? What does this decision make possible next?</p>
      </div>
    </section>
  );
}

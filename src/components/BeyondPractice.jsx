const SERVICES = [
  {
    n: "01",
    title: "STRUCTURE THE OPPORTUNITY",
    copy: "Identify the right deals, partners and structures across commercial rights, media / IP and emerging opportunities.",
    detail: "FROM OPPORTUNITY TO ENTERPRISE",
  },
  {
    n: "02",
    title: "NEGOTIATE + PROTECT",
    copy: "Look beyond headline economics to the rights being granted, retained or restricted — and how today's deal affects the next one.",
    detail: "RIGHTS THAT LAST",
  },
  {
    n: "03",
    title: "BUILD BEYOND THE DEAL",
    copy: "Align contracts, ownership and business strategy so individual transactions can contribute to durable long-term value.",
    detail: "STRUCTURE BEFORE SCALE",
  },
  {
    n: "04",
    title: "NAVIGATE WHAT'S NEXT",
    copy: "Spot emerging issues across NIL, digital rights, AI, media, data and new business models before they become avoidable roadblocks.",
    detail: "SEE THE NEXT ISSUE EARLY",
  },
];

export default function BeyondPractice() {
  return (
    <section className="beyond-practice section" id="beyond-practice" aria-labelledby="beyond-heading">
      <div className="beyond-intro beyond-intro--compact">
        <p className="eyebrow" id="beyond-heading">BEYOND THE PRACTICE</p>
        <p className="beyond-one-line">I bring a legal, business and creative lens to help clients turn opportunity into durable value.</p>
        <a className="beyond-contact" href="mailto:ak@thelewfirm.com">WORK WITH ALEX <span>↗</span></a>
      </div>
      <div className="beyond-grid">
        {SERVICES.map((service) => (
          <article className="beyond-world" key={service.n}>
            <span>{service.n}</span>
            <p className="beyond-role">{service.title}</p>
            <p>{service.copy}</p>
            <small>{service.detail}</small>
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

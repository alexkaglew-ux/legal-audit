import { BOOKS_EDUCATION } from "../content/insights.js";

export default function AboutPreview(){
  const book=BOOKS_EDUCATION.find((item)=>item.kind==="Book");
  const course=BOOKS_EDUCATION.find((item)=>item.kind==="Course");
  return <section className="about section about-preview about-publishing" id="about">
    <div className="about-portrait-wrap">
      <img className="about-portrait" src="/headshot.png" alt="Alex Kagianaris, Esq."/>
      <span className="about-portrait-note">LOS ANGELES · SENIOR ATTORNEY · THE LEW FIRM APC</span>
    </div>
    <div className="about-copy">
      <p className="eyebrow">ABOUT ALEX</p>
      <h2>Law, business and culture — viewed together.</h2>
      <p className="about-lead">Alex Kagianaris, Esq. is a Senior Attorney at The Lew Firm APC, working across sports, NIL, entertainment and intellectual property.</p>
      <p className="about-secondary">His perspective is shaped by legal practice, business affairs and operating experience — with a focus on the rights, agreements and decisions that sit behind a career, brand or creative project.</p>
      <div className="about-links"><a className="text-link" href="mailto:ak@thelewfirm.com">CONTACT ALEX <span>↗</span></a></div>
    </div>
    <div className="publishing-column" id="books-education">
      <div className="book-object" aria-label="Forthcoming book cover">
        <div className="book-spine" aria-hidden="true"/>
        <div className="book-cover">
          <span>SPORTS · LAW · POWER</span>
          <strong>THE AUDIBLES<br/>THAT CHANGED<br/>SPORTS</strong>
          <i>How Legal Fights Rewrote<br/>The Sports Industry</i>
          <b>ALEX KAGIANARIS, ESQ.</b>
        </div>
      </div>
      <div className="publishing-copy">
        <p className="eyebrow">BOOKS + EDUCATION</p>
        <span className="status-label">{book?.status || "Forthcoming"}</span>
        <h3>{book?.title || "The Audibles That Changed Sports"}</h3>
        <p>{book?.description}</p>
        <div className="course-inline">
          <span>{course?.status || "Coming soon"}</span>
          <h4>{course?.title || "NIL + Transfers"}</h4>
          <p>{course?.description}</p>
        </div>
      </div>
    </div>
    <p className="about-combined-disclaimer">Legal services are provided through The Lew Firm APC. Commentary and educational information only. Not legal advice.</p>
  </section>
}
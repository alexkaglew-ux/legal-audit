import { BOOKS_EDUCATION } from "../content/insights.js";

export default function AboutPreview(){
  const book=BOOKS_EDUCATION.find((item)=>item.kind==="Book");
  const course=BOOKS_EDUCATION.find((item)=>item.kind==="Course");
  return <section className="about section about-preview about-publishing" id="about">
    <div className="about-panel">
      <p className="eyebrow">ABOUT ALEX</p>
      <div className="about-panel-body"><div className="about-portrait-wrap"><img className="about-portrait" src="/headshot.png" alt="Alex Kagianaris, Esq."/><span className="about-portrait-note">ALEX KAGIANARIS, ESQ.<br/>LOS ANGELES</span></div><div className="about-copy"><h2>Law, business<br/>and culture —<br/>viewed together.</h2><p className="about-lead">Alex Kagianaris, Esq. is a Senior Attorney at The Lew Firm APC, working across sports, NIL, entertainment and intellectual property.</p><p className="about-secondary">His perspective is shaped by legal practice, business affairs and operating experience — with a focus on the rights, agreements and decisions that sit behind a career, brand or creative project.</p><div className="about-links"><a className="text-link" href="mailto:ak@thelewfirm.com">ABOUT ALEX <span>→</span></a></div></div></div>
    </div>
    <div className="book-panel">
      <p className="eyebrow">BOOK</p>
      <div className="book-panel-body"><div className="book-object" aria-label="Forthcoming book cover"><div className="book-spine" aria-hidden="true"/><div className="book-cover"><span>SPORTS · LAW · POWER</span><strong>THE AUDIBLES<br/>THAT CHANGED<br/>SPORTS</strong><i>How Legal Fights Rewrote<br/>The Sports Industry</i><b>ALEX KAGIANARIS, ESQ.</b></div></div><div className="book-copy"><span className="publishing-status">{book?.status || "Forthcoming"}</span><h3>{book?.title}</h3><p>{book?.description}</p></div></div>
    </div>
    <div className="course-panel" id="books-education">
      <p className="eyebrow">COURSE</p>
      <div className="course-visual" aria-label="NIL and Transfers digital course"><div className="course-screen"><span>NIL + TRANSFERS</span><strong>NIL +<br/>TRANSFERS</strong><i>A practical guide to NIL, transfers and what comes next.</i></div><div className="course-keyboard" aria-hidden="true"/></div>
      <span className="publishing-status">{course?.status || "Coming soon"}</span><h3>{course?.title}</h3><p>{course?.description}</p>
    </div>
    <p className="about-combined-disclaimer">Legal services are provided through The Lew Firm APC. Commentary and educational information only. Not legal advice.</p>
  </section>
}
import { BOOKS_EDUCATION } from "../content/insights.js";

export default function BooksEducation() {
  return (
    <section className="books-education section" id="books-education" aria-labelledby="books-education-heading">
      <div className="section-kicker">
        <span id="books-education-heading">Books + Education</span>
        <span>FORTHCOMING</span>
      </div>
      <div className="books-education-grid">
        {BOOKS_EDUCATION.map((item) => (
          <div className="books-education-card" key={item.id}>
            <span className="status-label">{item.status}</span>
            <p className="eyebrow">{item.kind}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import SiteHeader from "./components/SiteHeader.jsx";
import Hero from "./components/Hero.jsx";
import BeyondPractice from "./components/BeyondPractice.jsx";
import IssueExplorer from "./components/IssueExplorer.jsx";
import InsightsFeed from "./components/InsightsFeed.jsx";
import AboutPreview from "./components/AboutPreview.jsx";
import BooksEducation from "./components/BooksEducation.jsx";
import ContactSection from "./components/ContactSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

export default function App() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <BeyondPractice />
      <IssueExplorer />
      <InsightsFeed />
      <AboutPreview />
      <BooksEducation />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}

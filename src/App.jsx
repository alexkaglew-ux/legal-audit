import SiteHeader from "./components/SiteHeader.jsx";
import Hero from "./components/Hero.jsx";
import PracticeWorlds from "./components/PracticeWorlds.jsx";
import WatchingRail from "./components/WatchingRail.jsx";
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
      <PracticeWorlds />
      <WatchingRail />
      <IssueExplorer />
      <InsightsFeed />
      <AboutPreview />
      <BooksEducation />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}

import { portfolioContent } from "./data/portfolioContent";
import { AboutSection } from "./sections/AboutSection";
import { AchievementsSection } from "./sections/AchievementsSection";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { QuestsSection } from "./sections/QuestsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ToolsSection } from "./sections/ToolsSection";

const sections = [
  AboutSection,
  SkillsSection,
  ToolsSection,
  QuestsSection,
  AchievementsSection,
  ContactSection,
];

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <HeroSection
        assets={portfolioContent.assets}
        content={portfolioContent.hero}
        nav={portfolioContent.nav}
        profile={portfolioContent.profile}
      />
      <main className="rpg-main mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-12 sm:px-6 lg:gap-16 lg:px-8 lg:py-20">
        {sections.map((Section) => (
          <Section key={Section.name} content={portfolioContent} />
        ))}
      </main>
    </div>
  );
}

export default App;

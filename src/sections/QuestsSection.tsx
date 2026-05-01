import { QuestCard } from "../components/QuestCard";
import { SectionHeading } from "../components/SectionHeading";
import type { PortfolioContent } from "../data/portfolioContent";

type SectionProps = {
  content: PortfolioContent;
};

export function QuestsSection({ content }: SectionProps) {
  const section = content.caseStudies;

  return (
    <section id={section.id}>
      <SectionHeading eyebrow={section.eyebrow} title={section.title} icon={section.icon} />
      <div className="grid gap-6">
        {section.items.map((quest) => (
          <QuestCard key={quest.title} quest={quest} />
        ))}
      </div>
    </section>
  );
}

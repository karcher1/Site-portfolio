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
      <SectionHeading
        description={section.description}
        eyebrow={section.eyebrow}
        icon={section.icon}
        title={section.title}
      />
      <div className="grid gap-6">
        {section.items.map((quest) => (
          <QuestCard key={quest.title} labels={section.labels} quest={quest} />
        ))}
      </div>
    </section>
  );
}

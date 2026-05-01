import { PixelPanel } from "../components/PixelPanel";
import { SectionHeading } from "../components/SectionHeading";
import { StatBar } from "../components/StatBar";
import type { PortfolioContent } from "../data/portfolioContent";

type SectionProps = {
  content: PortfolioContent;
};

export function SkillsSection({ content }: SectionProps) {
  const section = content.skills;

  return (
    <section id={section.id}>
      <SectionHeading eyebrow={section.eyebrow} title={section.title} icon={section.icon} />
      <PixelPanel>
        <div className="grid gap-4 md:grid-cols-2">
          {section.items.map((skill) => (
            <StatBar key={skill.name} skill={skill} />
          ))}
        </div>
      </PixelPanel>
    </section>
  );
}

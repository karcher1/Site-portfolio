import { PixelPanel } from "../components/PixelPanel";
import { SectionHeading } from "../components/SectionHeading";
import { ToolCard } from "../components/ToolCard";
import type { PortfolioContent } from "../data/portfolioContent";

type SectionProps = {
  content: PortfolioContent;
};

export function ToolsSection({ content }: SectionProps) {
  const section = content.tools;

  return (
    <section id={section.id}>
      <SectionHeading eyebrow={section.eyebrow} title={section.title} icon={section.icon} />
      <PixelPanel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {section.items.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </PixelPanel>
    </section>
  );
}

import { PixelPanel } from "../components/PixelPanel";
import { SectionHeading } from "../components/SectionHeading";
import type { PortfolioContent } from "../data/portfolioContent";

type SectionProps = {
  content: PortfolioContent;
};

export function AboutSection({ content }: SectionProps) {
  const section = content.about;

  return (
    <section id={section.id}>
      <SectionHeading eyebrow={section.eyebrow} title={section.title} icon={section.icon} />
      <PixelPanel>
        <div className="grid gap-5 text-base leading-8 text-[var(--color-text-secondary)] lg:grid-cols-3">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </PixelPanel>
    </section>
  );
}

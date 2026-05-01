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
      <div className="grid gap-4 text-base leading-8 text-[var(--color-text-secondary)] lg:grid-cols-3">
        {section.paragraphs.map((paragraph, index) => (
          <article className="rpg-card p-5" key={paragraph}>
            <p className="pixel-label mb-3 text-[var(--color-accent-gold)]">
              Log {String(index + 1).padStart(2, "0")}
            </p>
            <p>{paragraph}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import { PixelPanel } from "../components/PixelPanel";
import { SectionHeading } from "../components/SectionHeading";
import type { PortfolioContent } from "../data/portfolioContent";

type SectionProps = {
  content: PortfolioContent;
};

export function AchievementsSection({ content }: SectionProps) {
  const section = content.achievements;

  return (
    <section id={section.id}>
      <SectionHeading eyebrow={section.eyebrow} title={section.title} icon={section.icon} />
      <PixelPanel>
        <ol className="grid gap-4 md:grid-cols-2">
          {section.items.map((achievement, index) => (
            <li
              className="rounded border border-[var(--color-border)] bg-[rgba(16,22,42,0.72)] p-4"
              key={achievement}
            >
              <span className="pixel-label text-[var(--color-accent-green)]">
                UNLOCKED {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 leading-7 text-[var(--color-text-secondary)]">{achievement}</p>
            </li>
          ))}
        </ol>
      </PixelPanel>
    </section>
  );
}

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
      <ol className="grid gap-4 md:grid-cols-2">
        {section.items.map((achievement, index) => (
          <li className="rpg-card p-5" key={achievement}>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-[rgba(124,255,107,0.38)] bg-[rgba(124,255,107,0.1)] text-sm font-bold text-[var(--color-accent-green)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="pixel-label text-[var(--color-accent-green)]">Unlocked</span>
            </div>
            <p className="leading-7 text-[var(--color-text-secondary)]">{achievement}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

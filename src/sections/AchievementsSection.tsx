import { FallbackImage } from "../components/FallbackImage";
import { SectionHeading } from "../components/SectionHeading";
import type { PortfolioContent } from "../data/portfolioContent";

type SectionProps = {
  content: PortfolioContent;
};

export function AchievementsSection({ content }: SectionProps) {
  const section = content.achievements;

  return (
    <section id={section.id}>
      <SectionHeading
        description={section.description}
        eyebrow={section.eyebrow}
        icon={section.icon}
        title={section.title}
      />
      <ol className="grid gap-4 md:grid-cols-2">
        {section.items.map((achievement, index) => (
          <li className="rpg-card p-5" key={achievement}>
            <div className="mb-4 flex items-center gap-3">
              <span className="achievement-badge">
                {section.badges[index] ? (
                  <FallbackImage
                    asset={section.badges[index]}
                    className="h-full w-full object-contain"
                    fallbackClassName="h-full w-full text-sm text-[var(--color-accent-green)]"
                    fallbackLabel={String(index + 1).padStart(2, "0")}
                  />
                ) : (
                  String(index + 1).padStart(2, "0")
                )}
              </span>
              <span className="pixel-label text-[var(--color-accent-green)]">Достижение</span>
            </div>
            <p className="leading-7 text-[var(--color-text-secondary)]">{achievement}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

import { ContactLink } from "../components/ContactLink";
import { SectionHeading } from "../components/SectionHeading";
import type { PortfolioContent } from "../data/portfolioContent";

type SectionProps = {
  content: PortfolioContent;
};

export function ContactSection({ content }: SectionProps) {
  const section = content.contact;

  return (
    <section id={section.id}>
      <SectionHeading
        description={section.description}
        eyebrow={section.eyebrow}
        icon={section.icon}
        title={section.title}
      />
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        <article className="rpg-panel">
          <p className="rpg-panel-title pixel-label">{section.eyebrow}</p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)]">
            {section.text}
          </p>
        </article>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {section.items.map((item) => (
            <ContactLink key={item.label} item={item} />
          ))}
          <div className="rpg-card p-4">
            <span className="pixel-label text-[var(--color-accent-gold)]">CV</span>
            <span className="mt-2 block break-words text-[var(--color-text-primary)]">
              {section.cvLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

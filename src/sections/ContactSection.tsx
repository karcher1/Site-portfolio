import { ContactLink } from "../components/ContactLink";
import { PixelPanel } from "../components/PixelPanel";
import { SectionHeading } from "../components/SectionHeading";
import type { PortfolioContent } from "../data/portfolioContent";

type SectionProps = {
  content: PortfolioContent;
};

export function ContactSection({ content }: SectionProps) {
  const section = content.contact;

  return (
    <section id={section.id}>
      <SectionHeading eyebrow={section.eyebrow} title={section.title} icon={section.icon} />
      <PixelPanel>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <p className="text-lg leading-8 text-[var(--color-text-secondary)]">{section.text}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {section.items.map((item) => (
              <ContactLink key={item.label} item={item} />
            ))}
            <div className="rounded border border-[var(--color-border)] bg-[rgba(16,22,42,0.72)] p-4">
              <span className="pixel-label text-[var(--color-accent-gold)]">CV</span>
              <span className="mt-2 block text-[var(--color-text-primary)]">{section.cvLabel}</span>
            </div>
          </div>
        </div>
      </PixelPanel>
    </section>
  );
}

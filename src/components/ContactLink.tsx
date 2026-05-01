import type { ContactItem } from "../data/portfolioContent";

type ContactLinkProps = {
  item: ContactItem;
};

export function ContactLink({ item }: ContactLinkProps) {
  return (
    <a
      className="rpg-card block p-4"
      href={item.href}
    >
      <span className="pixel-label text-[var(--color-accent-cyan)]">{item.label}</span>
      <span className="mt-2 block break-words text-[var(--color-text-primary)]">{item.value}</span>
    </a>
  );
}

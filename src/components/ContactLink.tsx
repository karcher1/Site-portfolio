import type { ContactItem } from "../data/portfolioContent";

type ContactLinkProps = {
  item: ContactItem;
};

export function ContactLink({ item }: ContactLinkProps) {
  return (
    <a
      className="block rounded border border-[var(--color-border)] bg-[rgba(16,22,42,0.72)] p-4 transition hover:border-[var(--color-accent-cyan)]"
      href={item.href}
    >
      <span className="pixel-label text-[var(--color-accent-cyan)]">{item.label}</span>
      <span className="mt-2 block text-[var(--color-text-primary)]">{item.value}</span>
    </a>
  );
}

import type { NavItem } from "../data/portfolioContent";

type ButtonLinkProps = {
  item: NavItem;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ item, variant = "primary" }: ButtonLinkProps) {
  const variantClass =
    variant === "primary"
      ? "border-[var(--color-accent-green)] bg-[rgba(124,255,107,0.12)] text-[var(--color-accent-green)]"
      : "border-[var(--color-border)] bg-[rgba(21,26,46,0.86)] text-[var(--color-text-primary)]";

  return (
    <a className={`rpg-button w-full sm:w-auto ${variantClass}`} href={item.href}>
      {item.label}
    </a>
  );
}

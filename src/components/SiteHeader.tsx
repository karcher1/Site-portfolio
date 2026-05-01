import type { NavItem } from "../data/portfolioContent";

type SiteHeaderProps = {
  nav: NavItem[];
};

export function SiteHeader({ nav }: SiteHeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-5 sm:px-6 lg:px-8">
      <a className="pixel-label text-[var(--color-accent-green)]" href="#profile">
        BA RPG
      </a>
      <nav aria-label="Основная навигация">
        <ul className="hidden items-center gap-4 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                className="text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-primary)]"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

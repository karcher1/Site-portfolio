import type { NavItem } from "../data/portfolioContent";

type SiteHeaderProps = {
  nav: NavItem[];
};

export function SiteHeader({ nav }: SiteHeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-4 py-5 sm:flex-row sm:items-center sm:px-6 lg:px-8">
      <a
        className="pixel-label rounded border border-[rgba(124,255,107,0.4)] bg-[rgba(11,16,32,0.54)] px-3 py-2 text-[var(--color-accent-green)]"
        href="#profile"
      >
        BA RPG
      </a>
      <nav aria-label="Основная навигация">
        <ul className="flex flex-wrap items-center gap-2 sm:justify-end">
          {nav.map((item) => (
            <li key={item.href}>
              <a className="nav-chip" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

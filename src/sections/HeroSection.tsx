import { ButtonLink } from "../components/ButtonLink";
import { PixelPanel } from "../components/PixelPanel";
import { SiteHeader } from "../components/SiteHeader";
import type { Asset, NavItem, PortfolioContent } from "../data/portfolioContent";

type HeroSectionProps = {
  content: PortfolioContent["hero"];
  profile: PortfolioContent["profile"];
  assets: {
    avatar: Asset;
    heroBackground: Asset;
  };
  nav: NavItem[];
};

export function HeroSection({ content, profile, assets, nav }: HeroSectionProps) {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-[rgba(59,66,107,0.75)]"
      id="profile"
    >
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.24] saturate-75"
        src={assets.heroBackground.src}
        alt={assets.heroBackground.alt}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,16,32,0.72),rgba(11,16,32,0.94)_54%,rgba(11,16,32,1))]" />
      <SiteHeader nav={nav} />
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.96fr)] lg:items-center lg:px-8 lg:pb-24 lg:pt-16">
        <div className="flex flex-col justify-center">
          <p className="rpg-panel-title pixel-label">{content.label}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-[var(--color-text-primary)] sm:text-6xl">
            {content.title}
          </h1>
          <p className="mt-3 text-xl font-medium text-[var(--color-accent-cyan)]">{content.subtitle}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)]">
            {content.statement}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink item={content.ctas.primary} />
            <ButtonLink item={content.ctas.secondary} variant="secondary" />
          </div>
        </div>

        <PixelPanel className="self-start lg:self-center">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-[rgba(59,66,107,0.72)] pb-4">
            <div>
              <p className="pixel-label text-[var(--color-accent-gold)]">{content.label}</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{profile.role}</p>
            </div>
            <span className="pixel-label rounded border border-[rgba(124,255,107,0.4)] bg-[rgba(124,255,107,0.1)] px-2 py-1 text-[var(--color-accent-green)]">
              READY
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-[180px_1fr] lg:grid-cols-1 xl:grid-cols-[190px_1fr]">
            <div className="avatar-frame mx-auto aspect-square w-44 overflow-hidden sm:w-full lg:w-52 xl:w-full">
              <img className="h-full w-full object-cover" src={assets.avatar.src} alt={assets.avatar.alt} />
            </div>
            <div>
              <p className="pixel-label text-[var(--color-accent-green)]">{profile.role}</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)]">
                {profile.name}
              </h2>
              <dl className="mt-5 grid gap-3">
                <div className="rpg-slot flex justify-between gap-4 p-3">
                  <dt className="text-sm text-[var(--color-muted)]">Level</dt>
                  <dd className="text-right text-sm text-[var(--color-text-secondary)]">
                    {profile.level}
                  </dd>
                </div>
                <div className="rpg-slot flex justify-between gap-4 p-3">
                  <dt className="text-sm text-[var(--color-muted)]">Location</dt>
                  <dd className="text-right text-sm text-[var(--color-text-secondary)]">
                    {profile.location}
                  </dd>
                </div>
                <div className="rpg-slot p-3">
                  <dt className="text-sm text-[var(--color-muted)]">Specialization</dt>
                  <dd className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">
                    {profile.specialization}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <dl className="mt-6 grid gap-3">
            {content.fields.map((field) => (
              <div className="rpg-slot p-3" key={field.label}>
                <dt className="pixel-label text-[var(--color-accent-gold)]">{field.label}</dt>
                <dd className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {field.value}
                </dd>
              </div>
            ))}
          </dl>
        </PixelPanel>
      </div>
    </section>
  );
}

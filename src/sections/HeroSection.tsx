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
      className="relative isolate overflow-hidden border-b border-[var(--color-border)]"
      id="profile"
    >
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        src={assets.heroBackground.src}
        alt={assets.heroBackground.alt}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,16,32,0.76),rgba(11,16,32,1))]" />
      <SiteHeader nav={nav} />
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-20 lg:pt-16">
        <div className="flex flex-col justify-center">
          <p className="pixel-label text-[var(--color-accent-gold)]">{content.label}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-[var(--color-text-primary)] sm:text-6xl">
            {content.title}
          </h1>
          <p className="mt-3 text-xl text-[var(--color-accent-cyan)]">{content.subtitle}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)]">
            {content.statement}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink item={content.ctas.primary} />
            <ButtonLink item={content.ctas.secondary} variant="secondary" />
          </div>
        </div>

        <PixelPanel className="self-start">
          <div className="grid gap-6 sm:grid-cols-[180px_1fr] lg:grid-cols-1 xl:grid-cols-[190px_1fr]">
            <div className="mx-auto aspect-square w-44 overflow-hidden rounded border border-[var(--color-border)] bg-[var(--color-surface-elevated)] sm:w-full lg:w-52 xl:w-full">
              <img className="h-full w-full object-cover" src={assets.avatar.src} alt={assets.avatar.alt} />
            </div>
            <div>
              <p className="pixel-label text-[var(--color-accent-green)]">{profile.role}</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)]">
                {profile.name}
              </h2>
              <dl className="mt-5 grid gap-3">
                <div className="flex justify-between gap-4 border-b border-[rgba(59,66,107,0.6)] pb-2">
                  <dt className="text-sm text-[var(--color-muted)]">Level</dt>
                  <dd className="text-right text-sm text-[var(--color-text-secondary)]">
                    {profile.level}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-[rgba(59,66,107,0.6)] pb-2">
                  <dt className="text-sm text-[var(--color-muted)]">Location</dt>
                  <dd className="text-right text-sm text-[var(--color-text-secondary)]">
                    {profile.location}
                  </dd>
                </div>
                <div>
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
              <div className="rounded border border-[var(--color-border)] bg-[rgba(16,22,42,0.72)] p-3" key={field.label}>
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

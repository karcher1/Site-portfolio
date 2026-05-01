import type { Asset } from "../data/portfolioContent";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  icon: Asset;
};

export function SectionHeading({ eyebrow, title, icon }: SectionHeadingProps) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <img className="h-11 w-11 shrink-0 object-contain" src={icon.src} alt={icon.alt} />
      <div>
        <p className="pixel-label text-[var(--color-accent-gold)]">{eyebrow}</p>
        <h2 className="mt-1 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

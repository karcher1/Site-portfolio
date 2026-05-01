import type { Asset } from "../data/portfolioContent";
import { FallbackImage } from "./FallbackImage";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  icon: Asset;
};

export function SectionHeading({ eyebrow, title, icon }: SectionHeadingProps) {
  return (
    <div className="mb-6 flex items-center gap-4 sm:mb-8">
      <div className="section-heading-icon grid h-14 w-14 shrink-0 place-items-center p-2">
        <FallbackImage
          asset={icon}
          className="h-full w-full object-contain"
          fallbackClassName="h-full w-full text-[0.65rem] text-[var(--color-accent-cyan)]"
          fallbackLabel="ICON"
        />
      </div>
      <div>
        <p className="pixel-label text-[var(--color-accent-gold)]">{eyebrow}</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-normal text-[var(--color-text-primary)] sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

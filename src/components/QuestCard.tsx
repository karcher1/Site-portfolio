import type { CaseStudy, CaseStudyLabels } from "../data/portfolioContent";
import { FallbackImage } from "./FallbackImage";

type QuestCardProps = {
  quest: CaseStudy;
  labels: CaseStudyLabels;
};

export function QuestCard({ quest, labels }: QuestCardProps) {
  return (
    <article className="rpg-panel overflow-hidden p-0">
      <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="quest-artwork min-h-56 bg-[var(--color-surface-elevated)] lg:min-h-full">
          <FallbackImage
            asset={quest.image}
            className="h-full min-h-56 w-full object-cover opacity-80 saturate-75"
            fallbackClassName="min-h-56 h-full w-full text-[var(--color-accent-gold)]"
          />
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="pixel-label text-[var(--color-accent-gold)]">{labels.quest}</p>
              <h3 className="mt-2 text-xl font-semibold leading-8 text-[var(--color-text-primary)]">
                {quest.title}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--color-text-secondary)]">
                {quest.summary}
              </p>
            </div>
            <span className="pixel-label rounded border border-[rgba(124,255,107,0.45)] px-2 py-1 text-[var(--color-accent-green)]">
              {quest.status}
            </span>
          </div>
          <dl className="mt-5 grid gap-3 text-sm leading-6 text-[var(--color-text-secondary)]">
            <div className="rpg-slot p-3">
              <dt className="pixel-label text-[var(--color-accent-gold)]">{labels.challenge}</dt>
              <dd className="mt-1">{quest.challenge}</dd>
            </div>
            <div className="rpg-slot p-3">
              <dt className="pixel-label text-[var(--color-accent-gold)]">{labels.role}</dt>
              <dd className="mt-1">{quest.role}</dd>
            </div>
            <div className="rpg-slot p-3">
              <dt className="pixel-label text-[var(--color-accent-gold)]">{labels.result}</dt>
              <dd className="mt-1">{quest.result}</dd>
            </div>
          </dl>
          <div className="mt-4">
            <p className="pixel-label text-[var(--color-accent-purple)]">{labels.artifacts}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {quest.artifacts.map((artifact) => (
                <li className="rpg-chip" key={artifact}>
                  {artifact}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <p className="pixel-label text-[var(--color-accent-purple)]">{labels.tools}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {quest.tools.map((tool) => (
                <span className="rpg-chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

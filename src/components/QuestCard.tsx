import type { CaseStudy } from "../data/portfolioContent";

type QuestCardProps = {
  quest: CaseStudy;
};

export function QuestCard({ quest }: QuestCardProps) {
  return (
    <article className="rpg-panel overflow-hidden p-0">
      <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="min-h-48 bg-[var(--color-surface-elevated)]">
          <img className="h-full min-h-48 w-full object-cover opacity-80" src={quest.image.src} alt={quest.image.alt} />
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{quest.title}</h3>
            <span className="pixel-label rounded border border-[rgba(124,255,107,0.45)] px-2 py-1 text-[var(--color-accent-green)]">
              {quest.status}
            </span>
          </div>
          <dl className="mt-5 grid gap-4 text-sm leading-6 text-[var(--color-text-secondary)]">
            <div>
              <dt className="pixel-label text-[var(--color-accent-gold)]">Challenge</dt>
              <dd className="mt-1">{quest.challenge}</dd>
            </div>
            <div>
              <dt className="pixel-label text-[var(--color-accent-gold)]">My Role</dt>
              <dd className="mt-1">{quest.role}</dd>
            </div>
            <div>
              <dt className="pixel-label text-[var(--color-accent-gold)]">Result</dt>
              <dd className="mt-1">{quest.result}</dd>
            </div>
          </dl>
          <div className="mt-5 flex flex-wrap gap-2">
            {quest.tools.map((tool) => (
              <span className="rounded border border-[var(--color-border)] px-2 py-1 text-xs text-[var(--color-muted)]" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

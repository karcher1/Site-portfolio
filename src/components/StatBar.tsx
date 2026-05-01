import type { Skill } from "../data/portfolioContent";

type StatBarProps = {
  skill: Skill;
};

export function StatBar({ skill }: StatBarProps) {
  return (
    <div className="rounded border border-[var(--color-border)] bg-[rgba(16,22,42,0.72)] p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="font-medium text-[var(--color-text-primary)]">{skill.name}</h3>
        <span className="pixel-label text-[var(--color-accent-cyan)]">{skill.value}</span>
      </div>
      <div className="h-3 overflow-hidden rounded-sm border border-[rgba(94,234,212,0.35)] bg-[rgba(11,16,32,0.9)]">
        <div
          className="h-full bg-[linear-gradient(90deg,var(--color-accent-green),var(--color-accent-cyan))]"
          style={{ width: `${skill.value}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

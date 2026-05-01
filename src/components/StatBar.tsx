import type { Skill } from "../data/portfolioContent";

type StatBarProps = {
  skill: Skill;
};

export function StatBar({ skill }: StatBarProps) {
  return (
    <div className="rpg-card p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="font-medium leading-6 text-[var(--color-text-primary)]">{skill.name}</h3>
        <span className="pixel-label rounded border border-[rgba(94,234,212,0.32)] bg-[rgba(94,234,212,0.08)] px-2 py-1 text-[var(--color-accent-cyan)]">
          {skill.value}
        </span>
      </div>
      <div
        className="stat-track"
        role="progressbar"
        aria-label={skill.name}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.value}
      >
        <div
          className="stat-fill"
          style={{ width: `${skill.value}%` }}
          aria-hidden="true"
        />
      </div>
      <div className="mt-2 flex justify-between text-[0.7rem] text-[var(--color-muted)]" aria-hidden="true">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
}

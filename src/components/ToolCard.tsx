import type { Tool } from "../data/portfolioContent";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="inventory-card rpg-card min-h-40 p-4">
      <p className="pixel-label text-[var(--color-accent-purple)]">INVENTORY ITEM</p>
      <h3 className="mt-6 text-lg font-semibold text-[var(--color-text-primary)]">{tool.name}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{tool.usage}</p>
    </article>
  );
}

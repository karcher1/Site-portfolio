import type { ReactNode } from "react";

type PixelPanelProps = {
  children: ReactNode;
  className?: string;
};

export function PixelPanel({ children, className = "" }: PixelPanelProps) {
  return <div className={`rpg-panel ${className}`}>{children}</div>;
}

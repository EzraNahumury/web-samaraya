import type { ElementType, ReactNode } from "react";

/** Pembungkus lebar konten standar situs. */
export function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={`shell ${className}`}>{children}</Tag>;
}

import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "light"; // light = untuk di atas latar navy
  className?: string;
};

/** Judul section yang konsisten: eyebrow + headline + deskripsi. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
  className = "",
}: Props) {
  const isCenter = align === "center";
  const soft = tone === "light" ? "text-on-dark-soft" : "text-ink-soft";
  const eyebrowColor = tone === "light" ? "text-green" : "text-green-deep";

  return (
    <div
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <Reveal
          as="p"
          className={`eyebrow mb-4 flex items-center gap-2.5 ${eyebrowColor} ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="brand-dot" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" delay={60} className="display-lg">
        {title}
      </Reveal>
      {description && (
        <Reveal as="p" delay={120} className={`mt-5 text-lg leading-8 ${soft}`}>
          {description}
        </Reveal>
      )}
    </div>
  );
}

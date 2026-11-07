/** Pita teks berjalan (marquee) untuk aksen antar-section. */
export function Marquee({
  items,
  tone = "ink",
}: {
  items: string[];
  tone?: "ink" | "light";
}) {
  const color = tone === "light" ? "text-on-dark" : "text-ink";
  const line = tone === "light" ? "border-line-dark" : "border-line";

  const Row = ({ hidden }: { hidden?: boolean }) => (
    <div className="flex items-center" aria-hidden={hidden}>
      {items.map((w, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`font-display text-2xl font-medium tracking-tight md:text-3xl ${color}`}
          >
            {w}
          </span>
          <span className="brand-dot mx-7 md:mx-9" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden border-y ${line} py-6`}>
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

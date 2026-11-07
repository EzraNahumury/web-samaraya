import type { Keunggulan } from "@/lib/catalog";
import { Reveal } from "./Reveal";

/** Grid keunggulan: aksen garis atas + judul + teks (tanpa kotak berat). */
export function FeatureGrid({
  items,
  tone = "ink",
}: {
  items: Keunggulan[];
  tone?: "ink" | "light";
}) {
  const title = tone === "light" ? "text-on-dark" : "text-ink";
  const body = tone === "light" ? "text-on-dark-soft" : "text-ink-soft";
  const line = tone === "light" ? "bg-line-dark" : "bg-line";

  return (
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <Reveal key={it.judul} delay={(i % 3) * 90}>
          <div className="relative pt-5">
            <span
              className={`absolute left-0 top-0 h-px w-full ${line}`}
              aria-hidden
            />
            <span
              className="absolute left-0 top-0 h-px w-10 bg-green"
              aria-hidden
            />
            <h3 className={`font-display text-xl font-medium ${title}`}>
              {it.judul}
            </h3>
            <p className={`mt-2.5 text-[0.98rem] leading-7 ${body}`}>
              {it.teks}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

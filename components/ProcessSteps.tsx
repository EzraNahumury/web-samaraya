import type { Langkah } from "@/lib/catalog";
import { Reveal } from "./Reveal";

/** Alur pemesanan sebagai langkah bernomor. */
export function ProcessSteps({ steps }: { steps: Langkah[] }) {
  return (
    <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.no} delay={i * 80} className="relative">
          <div className="flex items-center gap-3">
            <span className="font-display text-3xl font-medium text-green-deep">
              {s.no}
            </span>
            <span className="h-px flex-1 bg-line" aria-hidden />
          </div>
          <h3 className="mt-4 font-display text-xl font-medium text-ink">
            {s.judul}
          </h3>
          <p className="mt-2 text-[0.95rem] leading-7 text-ink-soft">{s.teks}</p>
        </Reveal>
      ))}
    </ol>
  );
}

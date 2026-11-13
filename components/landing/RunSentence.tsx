"use client";

import { useRef } from "react";
import { WhatsappIcon } from "@/components/icons";
import { type Gsap, useStage } from "./motion";

/** posisi sebar tiap kartu (px dari posisi barisnya) saat kalimat menahan layar */
const FLOAT = [
  { x: -360, y: -210, r: -8 },
  { x: 360, y: -230, r: 7 },
  { x: -320, y: 250, r: 6 },
  { x: 360, y: 240, r: -7 },
];

const STEPS: { title: string; rows: [string, string][] }[] = [
  { title: "Konsultasi", rows: [["Produk", "Tas custom"], ["Jumlah", "100 pcs"]] },
  { title: "Desain", rows: [["Mockup", "siap"], ["Penawaran", "terkirim"]] },
  { title: "Sampel", rows: [["Contoh", "dibuat"], ["Status", "approve"]] },
  { title: "Produksi", rows: [["QC", "lolos"], ["Kirim", "nasional"]] },
];

/**
 * Panggung pinned: kalimat "Anda bisa [Pesan] produk custom dengan satu pesan", tombol di dalam
 * kalimat, dan kartu langkah pesanan mengambang di sekelilingnya. Saat scroll: kalimat naik, tombol
 * ditekan, kartu menyatu ke satu baris, badge "ok" muncul.
 */
function runSentence(root: HTMLElement, gsap: Gsap) {
  const q = gsap.utils.selector(root);
  const cards = q(".run-card");
  gsap.set(cards, {
    x: (i) => FLOAT[i].x,
    y: (i) => FLOAT[i].y,
    rotate: (i) => FLOAT[i].r,
  });
  gsap.set(q(".run-badge"), { autoAlpha: 0 });

  gsap
    .timeline({
      defaults: { ease: "power2.inOut" },
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "+=210%",
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    })
    .to(cards, { y: (i) => FLOAT[i].y - 30, duration: 1.2, ease: "none" })
    .to(q("[data-lp=run]"), { scale: 0.92, duration: 0.25, ease: "power1.in" }, "-=0.3")
    .to(q("[data-lp=run]"), { scale: 1, duration: 0.35, ease: "back.out(3)" })
    .addLabel("settle")
    .fromTo(
      q("[data-lp=sentence]"),
      { y: 0, scale: 1 },
      { y: () => -(innerHeight / 2 - 110), scale: 0.6, duration: 2 },
      "settle",
    )
    .to(cards, { x: 0, y: 0, rotate: 0, duration: 2, stagger: 0.08 }, "settle")
    .to(q(".run-badge"), { autoAlpha: 1, duration: 0.4, stagger: 0.15 }, "settle+=1.6")
    .to({}, { duration: 1 });
}

export function RunSentence() {
  const ref = useRef<HTMLElement>(null);
  useStage(ref, runSentence);
  return (
    <section ref={ref} data-tone="run" className="lp-run">
      <p
        data-lp="sentence"
        className="lp-run-sentence relative z-10 mx-auto max-w-[920px] px-4 text-center font-light text-[clamp(34px,5.4vw,72px)] text-fg leading-[1.15] tracking-[-0.035em]"
      >
        Anda bisa{" "}
        <span
          data-lp="run"
          className="inline-flex translate-y-[-0.12em] items-center gap-[0.28em] rounded-[0.32em] bg-mint px-[0.42em] py-[0.12em] align-middle font-normal text-[0.62em] text-primary-fg shadow-[0_10px_40px_-8px_rgba(134,239,172,.45)]"
        >
          <WhatsappIcon className="size-[0.72em]" />
          Pesan
        </span>{" "}
        produk custom
        <br />
        <span className="text-white/45">dengan satu pesan.</span>
      </p>

      <div className="lp-run-graph flex flex-wrap items-stretch justify-center gap-4 px-4">
        {STEPS.map((s, i) => (
          <div
            key={s.title}
            className="run-card relative w-[clamp(180px,21vw,215px)] rounded-[16px] border border-white/[.08] bg-gradient-to-b from-[#1a1a1d] to-[#141416] p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,.8)]"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2 text-[13px] font-medium text-fg">
                <span className="grid size-5 place-items-center rounded-full bg-white/[.08] text-[11px] text-muted">
                  {i + 1}
                </span>
                {s.title}
              </span>
              <span className="run-badge flex items-center gap-1 rounded-full bg-[#4ade80]/15 px-2 py-0.5 text-[11px] text-[#4ade80]">
                <span className="size-1.5 rounded-full bg-[#4ade80]" /> ok
              </span>
            </div>
            <ul className="space-y-1.5">
              {s.rows.map(([k, v]) => (
                <li key={k} className="flex items-center justify-between gap-2 text-[12px]">
                  <span className="text-dim">{k}</span>
                  <span className="text-text">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { type ReactNode, useRef } from "react";
import { type Gsap, MOTION_MQ, useStage } from "./motion";
import "./compare.css";

/*
 * Compare — tiga baris "dua dunia": kiri = cara reseller / konveksi biasa (teks pudar), kanan =
 * cara Samaraya (kartu terang). Seam bercahaya menyapu tepi kartu Samaraya saat wipe mengikuti
 * scroll. Panggung pin: baris bergantian satu per satu. (Animasi dipertahankan dari referensi,
 * isinya disesuaikan ke Samaraya.)
 */
const ROWS: {
  what: string;
  them: string;
  us: string;
  chip: string;
  title: string;
  body: string;
}[] = [
  {
    what: "Produksi terkontrol",
    them: "Dititipkan ke pihak ketiga — kualitas dan jadwal di luar kendali.",
    us: "Dikerjakan di workshop sendiri, dengan QC di tahap akhir.",
    chip: "Produksi",
    title: "Workshop sendiri.",
    body: "Dikerjakan di workshop sendiri sehingga bahan, kualitas, dan jadwal lebih terkontrol — dengan QC di tahap akhir.",
  },
  {
    what: "Kustomisasi penuh",
    them: "Pilihan model terbatas, logo sekadar ditempel.",
    us: "Desain, bahan, warna, dan logo disesuaikan dengan identitas Anda.",
    chip: "Kustomisasi",
    title: "Custom penuh.",
    body: "Desain, bahan, warna, hingga penempatan logo (sablon, bordir, label) disesuaikan dengan identitas Anda.",
  },
  {
    what: "Didampingi tim",
    them: "Hanya jadi perantara — respon lambat, minim pendampingan.",
    us: "Satu tim mendampingi dari konsultasi sampai produk dikirim.",
    chip: "Layanan",
    title: "Didampingi tim.",
    body: "Satu tim mendampingi dari konsultasi, desain, sampel, hingga produksi selesai dan dikirim.",
  },
];

/** teks "dunia kiri" (cara reseller) per baris, gaya terminal */
const RAW: string[][] = [
  [
    "konveksi biasa / reseller",
    "> produksi dititip ke pihak ketiga",
    "> kualitas & jadwal di luar kendali",
    "> estimasi sering meleset",
    "> tak ada QC sendiri",
  ],
  [
    "konveksi biasa / reseller",
    "> pilihan model terbatas",
    "> desain seadanya",
    "> logo sekadar tempel",
    "> bahan apa adanya",
  ],
  [
    "konveksi biasa / reseller",
    "> hanya jadi perantara",
    "> respon lambat",
    "> minim pendampingan",
    "> revisi sulit",
  ],
];

/** the title's lines rise out of their masks as the block approaches */
function rise(root: HTMLElement, gsap: Gsap) {
  gsap.fromTo(
    root.querySelectorAll("[data-rise]"),
    { yPercent: 105 },
    {
      yPercent: 0,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: root,
        start: "top 92%",
        end: "top 45%",
        scrub: 0.6,
      },
    },
  );
}

/** one row's wipe: the Samaraya side's clip opens from the seam, the raw text dims, the copy swaps */
function wipe(
  gsap: Gsap,
  tl: ReturnType<Gsap["timeline"]>,
  row: HTMLElement,
  wide: boolean,
  at: string | number,
  duration: number,
) {
  const q = gsap.utils.selector(row);
  const read = q("[data-read]")[0] as HTMLElement;
  tl.fromTo(
    read,
    { clipPath: wide ? "inset(0% 0% 0% 100%)" : "inset(0% 0% 100% 0%)" },
    { clipPath: "inset(0% 0% 0% 0%)", duration },
    at,
  )
    .fromTo(q("[data-raw]"), { autoAlpha: 1 }, { autoAlpha: 0.55, duration }, at)
    .fromTo(q("[data-them]"), { autoAlpha: 1 }, { autoAlpha: 0.4, duration }, at)
    .fromTo(
      q("[data-us]"),
      { autoAlpha: 0.2, y: 10 },
      { autoAlpha: 1, y: 0, duration },
      at,
    );
  if (wide)
    tl.fromTo(
      q("[data-seam]"),
      { x: () => read.offsetWidth },
      { x: 0, duration },
      at,
    );
}

/** pinned stage: rows take the same slot one at a time, each wipes with the scroll then holds */
function staged(root: HTMLElement, gsap: Gsap) {
  rise(root, gsap);
  const rows = [...root.querySelectorAll<HTMLElement>("[data-cmp]")];
  const wide = matchMedia("(min-width: 1024px)").matches;
  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: root,
      start: "top top",
      end: () => `+=${rows.length * 140}%`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
  rows.forEach((row, i) => {
    const at = `r${i}`;
    tl.addLabel(at);
    if (i > 0) {
      tl.to(
        rows[i - 1],
        { autoAlpha: 0, y: -36, duration: 0.45, ease: "power1.in" },
        at,
      ).fromTo(
        row,
        { autoAlpha: 0, y: 36 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: "power1.out" },
        `${at}+=0.35`,
      );
    }
    wipe(gsap, tl, row, wide, i > 0 ? `${at}+=0.8` : at, 1.2);
    tl.to({}, { duration: 1 });
  });
}

export function CompareWorlds() {
  const ref = useRef<HTMLDivElement>(null);
  useStage(ref, staged, `${MOTION_MQ} and (min-width: 1024px)`);
  useStage(ref, staged, `${MOTION_MQ} and (max-width: 1023.98px)`);
  return (
    <div ref={ref} className="lp-cmp-stage">
      <h2 className="font-light text-[clamp(40px,6.4vw,88px)] text-fg leading-[0.94] tracking-[-0.045em]">
        <span className="lp-cmp-line">
          <span data-rise>Reseller jadi perantara.</span>
        </span>
        <span className="lp-cmp-line">
          <span data-rise className="text-white/40">
            Samaraya yang memproduksi.
          </span>
        </span>
      </h2>
      <div className="mt-8 flex flex-col-reverse gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">
        <p className="flex items-center gap-3 text-[13px] text-dim">
          Cara reseller
          <span
            aria-hidden="true"
            className="h-4 w-0.5 rounded-full bg-white shadow-[0_0_12px_2px_rgba(255,255,255,.35)]"
          />
          <span className="text-fg">Cara Samaraya</span>
        </p>
        <p className="max-w-[420px] text-[16px] text-muted leading-relaxed">
          Kenapa brand, komunitas, dan travel memilih produsen langsung
          dibanding reseller atau konveksi perantara.
        </p>
      </div>
      <ol className="lp-cmp-rows mt-14 space-y-6 md:mt-20 md:space-y-8">
        {ROWS.map((r, i) => (
          <li
            key={r.what}
            data-cmp
            className="grid gap-5 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-center lg:gap-12"
          >
            <div className="lg:pr-2">
              <p className="font-mono text-[12.5px] text-dim lg:text-[13.5px]">
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(ROWS.length).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-medium text-[19px] text-fg leading-snug tracking-[-0.01em] lg:text-[25px]">
                {r.what}
              </h3>
              <p
                data-them
                className="mt-4 flex gap-2.5 text-[13.5px] text-dim leading-snug lg:mt-5 lg:text-[15.5px]"
              >
                <Mark on={false} />
                {r.them}
              </p>
              <p
                data-us
                className="mt-2 flex gap-2.5 text-[15px] text-fg leading-snug lg:mt-3 lg:text-[17.5px]"
              >
                <Mark on />
                {r.us}
              </p>
            </div>
            <World raw={RAW[i]}>
              <Read chip={r.chip} title={r.title} body={r.body} />
            </World>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** a small ring: hollow for the reseller, a lit dot inside for Samaraya */
function Mark({ on }: { on: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="mt-[2px] size-4 flex-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <circle cx="8" cy="8" r="6.5" strokeOpacity={on ? 0.5 : 0.35} />
      {on ? (
        <circle cx="8" cy="8" r="2.5" fill="currentColor" stroke="none" />
      ) : null}
    </svg>
  );
}

/** kartu "dunia Samaraya" di sisi kanan */
function Read({ chip, title, body }: { chip: string; title: string; body: string }) {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/[.08] bg-white/[.04] px-3 py-1 text-[12px] text-muted">
        {chip}
      </p>
      <h3 className="font-medium text-[22px] text-fg lg:text-[26px]">{title}</h3>
      <p className="mt-2 text-[0.98rem] text-body leading-7">{body}</p>
    </div>
  );
}

/** the raw world, the lit seam and its arcs, the Samaraya world clipped open over them */
function World({ raw, children }: { raw: string[]; children: ReactNode }) {
  return (
    <div className="lp-cmp-world">
      <div data-raw aria-hidden="true" className="lp-cmp-raw">
        {raw.map((l, j) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static lines, blanks repeat
          <span key={j} className={j === 0 ? "text-white/60" : undefined}>
            {l || " "}
          </span>
        ))}
      </div>
      <svg
        aria-hidden="true"
        className="lp-cmp-arcs"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0 40C120 60 230 120 270 200" />
        <path d="M0 110C110 120 210 160 250 200" />
        <path d="M400 30C340 70 300 140 290 200" />
      </svg>
      <div data-read aria-hidden="true" className="lp-cmp-read">
        {children}
      </div>
      <span data-seam aria-hidden="true" className="lp-cmp-seam" />
    </div>
  );
}

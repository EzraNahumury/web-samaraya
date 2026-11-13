"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { loadMotion } from "./motion";

type Step = {
  n: string;
  title: string;
  desc: string;
  points: string[];
  io: [string, string];
  icon: ReactNode;
};

const ic = (children: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    className="size-7"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const STEPS: Step[] = [
  {
    n: "01",
    title: "Konsultasi",
    desc: "Ceritakan kebutuhan Anda lewat WhatsApp — kami bantu petakan dari awal.",
    points: ["Jenis produk & jumlah", "Target waktu pengerjaan", "Referensi desain / branding"],
    io: ["WhatsApp", "Kebutuhan jelas"],
    icon: ic(<><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z" /></>),
  },
  {
    n: "02",
    title: "Desain & Penawaran",
    desc: "Kami susun desain/mockup lalu kirim penawaran sesuai spesifikasi.",
    points: ["Mockup desain", "Pilihan bahan & warna", "Penawaran harga"],
    io: ["Kebutuhan", "Desain + penawaran"],
    icon: ic(<><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></>),
  },
  {
    n: "03",
    title: "Sampel & Approval",
    desc: "Contoh produk diperiksa dan disetujui sebelum produksi massal berjalan.",
    points: ["Sampel / mockup", "Revisi bila perlu", "Approval Anda"],
    io: ["Desain", "Sampel disetujui"],
    icon: ic(<><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>),
  },
  {
    n: "04",
    title: "Produksi & QC",
    desc: "Diproduksi di workshop sendiri dengan kontrol kualitas di tahap akhir.",
    points: ["Produksi massal", "Branding (sablon / bordir)", "Quality control"],
    io: ["Approval", "Produk jadi"],
    icon: ic(<><path d="M2 20h20" /><path d="M4 20V9l5 3V9l5 3V9l5 3v8" /><circle cx="7" cy="16" r="1" /><circle cx="12" cy="16" r="1" /><circle cx="17" cy="16" r="1" /></>),
  },
  {
    n: "05",
    title: "Pengiriman",
    desc: "Produk dikemas rapi dan dikirim ke seluruh Indonesia.",
    points: ["Pengemasan aman", "Kirim 1 / banyak alamat", "Pesanan selesai"],
    io: ["Produk jadi", "Sampai tujuan"],
    icon: ic(<><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>),
  },
];

function Panel({ s, on }: { s: Step; on: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-center rounded-[20px] border border-white/[.08] bg-gradient-to-b from-[#161618] to-[#101012] p-7 shadow-[0_30px_80px_-24px_rgba(0,0,0,.9)] transition-all duration-500 md:p-9 ${
        on ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="grid size-14 place-items-center rounded-2xl bg-white/[.06] text-fg shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
        {s.icon}
      </span>
      <h3 className="mt-6 font-medium text-[clamp(22px,2.4vw,30px)] text-fg">{s.title}</h3>
      <p className="mt-2 max-w-md text-[15px] text-muted leading-relaxed">{s.desc}</p>
      <ul className="mt-6 space-y-2.5">
        {s.points.map((p) => (
          <li key={p} className="flex items-center gap-3 text-[14px] text-text">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#4ade80]/15 text-[#4ade80]">
              <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8.5l3.5 3.5L13 4.5" />
              </svg>
            </span>
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-7 flex items-center gap-2 text-[12px]">
        <span className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1 text-muted">{s.io[0]}</span>
        <span aria-hidden className="text-dim">→</span>
        <span className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1 text-fg">{s.io[1]}</span>
      </div>
    </div>
  );
}

function Left({ active }: { active: number }) {
  const s = STEPS[active];
  return (
    <div>
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[.08] bg-white/[.04] px-3 py-1 text-[12px] text-muted">
        <span className="size-1.5 rounded-full bg-[var(--lp-green,#4ade80)]" />
        Alur Pemesanan
      </p>
      <h2 className="font-medium text-[clamp(30px,4vw,50px)] text-fg leading-[1.04] tracking-[-0.03em]">
        Lima langkah,
        <br />
        <span className="text-white/45">satu produsen.</span>
      </h2>
      <div className="mt-8 flex items-end gap-2">
        <span
          key={s.n}
          className="lp-how-num font-medium text-[clamp(70px,9vw,128px)] leading-[0.8]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.06) 92%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {s.n}
        </span>
        <span className="mb-3 text-[13px] text-dim">/ 05</span>
      </div>
      <h3 className="mt-5 font-medium text-[22px] text-fg">{s.title}</h3>
      <p className="mt-2 max-w-sm text-[15px] text-muted leading-relaxed">{s.desc}</p>
      {/* rel */}
      <div className="mt-8 flex items-center gap-0">
        {STEPS.map((st, i) => (
          <div key={st.n} className="flex items-center">
            <span
              className={`grid size-9 place-items-center rounded-full border text-[13px] transition-colors ${
                i <= active ? "border-white/40 bg-white/[.1] text-fg" : "border-white/15 text-dim"
              }`}
            >
              {i + 1}
            </span>
            {i < STEPS.length - 1 && (
              <span className={`h-px w-8 ${i < active ? "bg-white/40" : "bg-white/15"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Features() {
  const pinRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const pin = pinRef.current;
    if (!pin) return;
    let dead = false;
    let undo = () => {};
    void loadMotion().then(({ gsap, ScrollTrigger }) => {
      if (dead) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => {
        const st = ScrollTrigger.create({
          trigger: pin,
          start: "top top",
          end: `+=${STEPS.length * 70}%`,
          pin: true,
          scrub: 0.3,
          anticipatePin: 1,
          onUpdate: (self) =>
            setActive(Math.min(STEPS.length - 1, Math.floor(self.progress * STEPS.length))),
        });
        return () => st.kill();
      });
      undo = () => mm.revert();
    });
    return () => {
      dead = true;
      undo();
    };
  }, []);

  return (
    <section data-tone="how" className="relative">
      {/* panggung pinned (desktop + motion) */}
      <div className="hidden motion-safe:md:block">
        <div ref={pinRef} className="flex h-screen items-center">
          <div className="shell grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Left active={active} />
            <div className="relative h-[520px]">
              {STEPS.map((s, i) => (
                <Panel key={s.n} s={s} on={i === active} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* daftar statis (mobile / reduced) */}
      <div className="shell block space-y-14 py-24 motion-safe:md:hidden">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[.08] bg-white/[.04] px-3 py-1 text-[12px] text-muted">
            <span className="size-1.5 rounded-full bg-[var(--lp-green,#4ade80)]" />
            Alur Pemesanan
          </p>
          <h2 className="font-medium text-[clamp(30px,8vw,44px)] text-fg leading-[1.04] tracking-[-0.03em]">
            Lima langkah, <span className="text-white/45">satu produsen.</span>
          </h2>
        </div>
        {STEPS.map((s) => (
          <div key={s.n} className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-8">
            <span className="font-medium text-[44px] text-white/30 leading-none">{s.n}</span>
            <div className="relative h-[440px]">
              <Panel s={s} on />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

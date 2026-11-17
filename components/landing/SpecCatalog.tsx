"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { WhatsappIcon } from "@/components/icons";
import { waLink, waMessage } from "@/lib/site";

export type SpecItem = {
  src: string;
  alt: string;
  nama: string;
  tag: string;
  href: string;
};

const GRID_BG: React.CSSProperties = {
  backgroundColor: "#fbfcfb",
  backgroundImage:
    "linear-gradient(rgba(16,26,43,.05) 1px, transparent 1px),linear-gradient(90deg, rgba(16,26,43,.05) 1px, transparent 1px)",
  backgroundSize: "26px 26px",
};

const pad2 = (n: number) => String(n + 1).padStart(2, "0");

/** Sudut siku (corner bracket) gaya spec-sheet. */
function Bracket({ at }: { at: "tl" | "tr" | "bl" | "br" }) {
  const base = "pointer-events-none absolute h-5 w-5 border-[var(--ink)]/35";
  const pos = {
    tl: "left-0 top-0 border-l-2 border-t-2",
    tr: "right-0 top-0 border-r-2 border-t-2",
    bl: "left-0 bottom-0 border-l-2 border-b-2",
    br: "right-0 bottom-0 border-r-2 border-b-2",
  }[at];
  return <span aria-hidden="true" className={`${base} ${pos}`} />;
}

/* ------------------------------------------------------------------ */
/* Panel detail (muncul saat produk diklik)                            */
/* ------------------------------------------------------------------ */

function SpecDetail({
  items,
  at,
  onClose,
  onNav,
}: {
  items: SpecItem[];
  at: number;
  onClose: () => void;
  onNav: (dir: number) => void;
}) {
  const it = items[at];
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav]);

  return (
    <div
      className="lp-fadein fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Detail ${it.nama}`}
    >
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: overlay close, Esc handled above */}
      <div
        className="absolute inset-0 bg-[#0e1a2b]/35 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="relative grid w-full max-w-[1020px] overflow-hidden rounded-[22px] border border-black/[.08] bg-white shadow-[0_40px_100px_-30px_rgba(16,26,43,.45)] md:grid-cols-2"
        style={{ ["--ink" as string]: "#0e1a2b" }}
      >
        {/* kiri: gambar + anotasi */}
        <div className="relative hidden md:block" style={GRID_BG}>
          <div className="relative m-8 aspect-[4/5]">
            <Bracket at="tl" />
            <Bracket at="tr" />
            <Bracket at="bl" />
            <Bracket at="br" />
            <div className="relative h-full w-full p-5">
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="500px"
                className="object-contain"
              />
            </div>
            <span className="absolute -top-6 left-0 font-mono text-[11px] tracking-[0.1em] text-[#0e1a2b]/55">
              {pad2(at)} / {it.nama.toUpperCase()}
            </span>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.1em] text-[#0e1a2b]/55">
              ├──── {it.tag} ────┤
            </span>
          </div>
        </div>

        {/* kanan: info */}
        <div className="relative p-7 md:p-9">
          <div className="flex items-center justify-between font-mono text-[12px] text-[#0e1a2b]/55">
            <span className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onNav(-1)}
                aria-label="Produk sebelumnya"
                className="transition-colors hover:text-[#0e1a2b]"
              >
                ‹
              </button>
              {pad2(at)} / {pad2(items.length - 1)}
              <button
                type="button"
                onClick={() => onNav(1)}
                aria-label="Produk berikutnya"
                className="transition-colors hover:text-[#0e1a2b]"
              >
                ›
              </button>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="grid size-7 place-items-center rounded-full border border-black/10 transition-colors hover:bg-black/[.04] hover:text-[#0e1a2b]"
            >
              ✕
            </button>
          </div>

          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.2em] text-green">
            {it.tag}
          </p>
          <h3 className="mt-2 font-medium text-[clamp(26px,3vw,38px)] text-[#0e1a2b] leading-[1.05] tracking-[-0.02em]">
            {it.nama}
          </h3>
          <p className="mt-4 max-w-sm text-[14.5px] text-[#46586d] leading-relaxed">
            Diproduksi sendiri dengan kustomisasi penuh — bahan, warna, ukuran, dan penempatan
            logo menyesuaikan identitas Anda.
          </p>

          <div className="mt-6 border-black/[.08] border-t pt-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0e1a2b]/50">
              Opsi
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Sablon / bordir", "Pilihan bahan", "Ukuran custom", "Branding"].map((o) => (
                <span
                  key={o}
                  className="rounded-full border border-black/[.1] bg-black/[.02] px-3 py-1 text-[12.5px] text-[#46586d]"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink(waMessage(it.nama))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green px-5 py-3 font-semibold text-[14px] text-white shadow-[0_10px_26px_-10px_rgba(95,158,33,.6)] transition-[filter] hover:brightness-110"
            >
              <WhatsappIcon className="size-[18px]" />
              Minta Penawaran
            </a>
            <Link
              href={it.href}
              className="inline-flex items-center gap-2 rounded-full border border-black/[.12] px-5 py-3 text-[14px] text-[#0e1a2b] transition-colors hover:bg-black/[.03]"
            >
              Lihat kategori
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Coverflow spec-sheet (gerak sendiri)                                */
/* ------------------------------------------------------------------ */

export function SpecCatalog({ items }: { items: SpecItem[] }) {
  const n = items.length;
  const [at, setAt] = useState(0);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const go = useCallback((dir: number) => setAt((v) => (v + dir + n) % n), [n]);
  const jump = useCallback((i: number) => setAt(((i % n) + n) % n), [n]);

  // auto-advance; berhenti saat hover / detail terbuka / reduced-motion
  useEffect(() => {
    if (open || hover) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setAt((v) => (v + 1) % n), 3200);
    return () => clearInterval(id);
  }, [open, hover, n]);

  const it = items[at];

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-[20px] border border-black/[.08] shadow-[0_30px_70px_-34px_rgba(16,26,43,.3)]"
      style={{ ...GRID_BG, ["--ink" as string]: "#0e1a2b" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* label atas */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#0e1a2b]/45">
        <span>Koleksi Samaraya</span>
        <span>Spec {pad2(at)}</span>
      </div>

      {/* panggung coverflow */}
      <div className="absolute inset-0 flex items-center justify-center [perspective:1400px]">
        {/* bayangan elips */}
        <span
          aria-hidden="true"
          className="absolute bottom-[20%] h-6 w-[min(62%,320px)] rounded-[50%] border border-dashed border-[#0e1a2b]/20"
        />
        {items.map((p, i) => {
          let off = i - at;
          if (off > n / 2) off -= n;
          if (off < -n / 2) off += n;
          const abs = Math.abs(off);
          const show = abs <= 2;
          const center = off === 0;
          const style: React.CSSProperties = {
            transform: `translateX(calc(${off} * clamp(120px, 20vw, 210px))) translateZ(${center ? 0 : -140}px) rotateY(${off * -16}deg) scale(${center ? 1 : 0.82})`,
            opacity: show ? (center ? 1 : abs === 1 ? 0.55 : 0.18) : 0,
            zIndex: 20 - abs,
            transition: "transform .7s cubic-bezier(.2,.7,.2,1), opacity .7s ease",
            pointerEvents: center ? "auto" : "none",
          };
          return (
            <button
              key={`${p.src}-${i}`}
              type="button"
              aria-label={center ? `Lihat detail ${p.nama}` : p.nama}
              tabIndex={center ? 0 : -1}
              onClick={() => center && setOpen(true)}
              className="absolute block h-[62%] w-[min(52%,260px)] cursor-pointer"
              style={style}
            >
              <span className="relative block h-full w-full overflow-hidden rounded-[14px] border border-black/[.08] bg-white shadow-[0_22px_50px_-24px_rgba(16,26,43,.4)]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  draggable={false}
                  sizes="(max-width: 768px) 60vw, 300px"
                  className="object-contain p-3"
                />
              </span>
              {center && (
                <>
                  <Bracket at="tl" />
                  <Bracket at="tr" />
                  <Bracket at="bl" />
                  <Bracket at="br" />
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* nama produk tengah */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[12.5%] text-center">
        <p className="font-medium text-[clamp(19px,2.3vw,30px)] text-[#0e1a2b] leading-none tracking-[-0.02em]">
          {it.nama}
        </p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#0e1a2b]/55">
          {it.tag} · Custom
        </p>
      </div>

      {/* nav bawah */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-4 px-5 py-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Sebelumnya"
          className="grid size-8 place-items-center rounded-full border border-black/10 bg-white/70 font-mono text-[#0e1a2b] transition-colors hover:bg-white"
        >
          ‹
        </button>
        <div className="flex items-center gap-1.5">
          {items.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => jump(i)}
              aria-label={`Ke produk ${pad2(i)}`}
              className={`h-1 rounded-full transition-all ${i === at ? "w-6 bg-green" : "w-2 bg-[#0e1a2b]/20 hover:bg-[#0e1a2b]/40"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Berikutnya"
          className="grid size-8 place-items-center rounded-full border border-black/10 bg-white/70 font-mono text-[#0e1a2b] transition-colors hover:bg-white"
        >
          ›
        </button>
      </div>

      {open && (
        <SpecDetail items={items} at={at} onClose={() => setOpen(false)} onNav={go} />
      )}
    </div>
  );
}

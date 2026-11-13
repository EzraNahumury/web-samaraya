import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { WhatsappIcon } from "@/components/icons";
import { Reveal } from "@/components/landing/motion";
import type { Faq, Keunggulan, Langkah, Produk } from "@/lib/catalog";
import { waLink, waMessage } from "@/lib/site";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

/* ------------------------------------------------------------------ */
/* Primitif                                                            */
/* ------------------------------------------------------------------ */

export function Shell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-[1240px] px-4 md:px-6", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/[.08] bg-white/[.04] px-3 py-1 text-[12px] text-muted">
      <span className="size-1.5 rounded-full bg-green" />
      {children}
    </span>
  );
}

function CheckMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="m5 13 4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Tombol WhatsApp hijau (aksi utama brand). */
export function WaButton({
  context,
  children = "Minta Penawaran",
  className,
}: {
  context?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={waLink(waMessage(context))}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(
        "inline-flex items-center gap-2 rounded-full bg-green px-5 py-3 font-semibold text-[14px] text-[#07130a] transition-[transform,filter] duration-300 hover:-translate-y-0.5 hover:brightness-110",
        className,
      )}
    >
      <WhatsappIcon className="size-[18px]" />
      {children}
    </a>
  );
}

export function GhostButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const inner = (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/[.1] bg-raised px-5 py-3 text-[14px] text-fg transition-colors hover:bg-hover">
      {children}
    </span>
  );
  return href.startsWith("/") ? (
    <Link href={href}>{inner}</Link>
  ) : (
    <a href={href}>{inner}</a>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */

export function SectionHead({
  eyebrow,
  title,
  desc,
  center,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cx(center && "flex flex-col items-center text-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 max-w-[680px] font-medium text-[clamp(27px,3.6vw,45px)] text-fg leading-[1.08] tracking-[-0.03em]">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 max-w-[560px] text-[15px] text-muted leading-relaxed md:text-[16px]">
          {desc}
        </p>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Frame gambar (product well terang di dalam kartu gelap)             */
/* ------------------------------------------------------------------ */

export function MediaFrame({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 560px",
  priority,
  className,
  ratio = "aspect-[5/4]",
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={cx(
        "relative rounded-card border border-white/[.08] bg-card-grad p-3 shadow-float",
        className,
      )}
    >
      <div
        className={cx(
          "relative overflow-hidden rounded-inner bg-gradient-to-b from-[#f6f6f4] to-[#e8e8e2]",
          ratio,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain p-5"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero halaman                                                        */
/* ------------------------------------------------------------------ */

export function PageHeroDark({
  eyebrow,
  breadcrumb,
  title,
  desc,
  media,
  waContext,
  secondary,
  note,
}: {
  eyebrow: string;
  breadcrumb: string;
  title: ReactNode;
  desc: string;
  media: { src: string; alt: string };
  waContext?: string;
  secondary?: { label: string; href: string };
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] [background:radial-gradient(60%_80%_at_70%_-10%,rgba(74,222,128,.1),transparent_60%)]"
      />
      <Shell>
        <nav className="flex items-center gap-2 text-[13px] text-dim" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-muted">
            Beranda
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-muted">{breadcrumb}</span>
        </nav>

        <div className="mt-8 grid items-center gap-10 md:mt-12 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 font-medium text-[clamp(34px,5.4vw,60px)] text-fg leading-[1.02] tracking-[-0.035em]">
              {title}
            </h1>
            <p className="mt-6 max-w-[520px] text-[16px] text-body leading-relaxed md:text-[17px]">
              {desc}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WaButton context={waContext} />
              {secondary && <GhostButton href={secondary.href}>{secondary.label}</GhostButton>}
            </div>
            {note && <p className="mt-6 font-mono text-[12px] text-dim">{note}</p>}
          </Reveal>

          <Reveal delay={0.06}>
            <MediaFrame src={media.src} alt={media.alt} priority ratio="aspect-[5/4]" />
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}

/** Hero sederhana tanpa gambar (judul + deskripsi, center). */
export function PageHeroText({
  eyebrow,
  breadcrumb,
  title,
  desc,
}: {
  eyebrow: string;
  breadcrumb: string;
  title: ReactNode;
  desc: string;
}) {
  return (
    <section className="relative overflow-hidden pt-10 pb-14 md:pt-16 md:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] [background:radial-gradient(50%_70%_at_50%_-10%,rgba(74,222,128,.09),transparent_60%)]"
      />
      <Shell>
        <nav className="flex items-center gap-2 text-[13px] text-dim" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-muted">
            Beranda
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-muted">{breadcrumb}</span>
        </nav>
        <Reveal className="mt-10 max-w-[760px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-medium text-[clamp(34px,5.2vw,58px)] text-fg leading-[1.03] tracking-[-0.035em]">
            {title}
          </h1>
          <p className="mt-6 max-w-[620px] text-[16px] text-body leading-relaxed md:text-[17px]">
            {desc}
          </p>
        </Reveal>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Grid produk                                                         */
/* ------------------------------------------------------------------ */

export function ProductGrid({
  produk,
  context,
  cols = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  produk: Produk[];
  context: string;
  cols?: string;
}) {
  return (
    <Reveal className={cx("grid gap-4", cols)}>
      {produk.map((p) => (
        <div
          key={p.nama}
          className="group overflow-hidden rounded-card border border-white/[.07] bg-card-grad p-3 transition-colors duration-300 hover:border-white/[.14]"
        >
          <div className="relative aspect-square overflow-hidden rounded-inner bg-gradient-to-b from-[#f6f6f4] to-[#e8e8e2]">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 50vw, 380px"
              className="img-zoom object-contain p-4"
            />
            {p.tag && (
              <span className="absolute left-3 top-3 rounded-full border border-black/5 bg-white/85 px-2.5 py-1 text-[11px] font-medium text-[#2a2a2a] backdrop-blur-sm">
                {p.tag}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between gap-3 px-1.5 pt-4 pb-1.5">
            <span className="text-[14.5px] text-fg">{p.nama}</span>
            <a
              href={waLink(waMessage(`${context} — ${p.nama}`))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 text-[12.5px] text-dim transition-colors group-hover:text-green"
              aria-label={`Minta penawaran ${p.nama}`}
            >
              Penawaran
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      ))}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Pills & checklist                                                   */
/* ------------------------------------------------------------------ */

export function PillRow({ items }: { items: string[] }) {
  return (
    <Reveal className="flex flex-wrap gap-2.5">
      {items.map((j) => (
        <span
          key={j}
          className="rounded-full border border-white/[.08] bg-white/[.03] px-4 py-2 text-[13.5px] text-body transition-colors hover:border-white/[.18] hover:text-fg"
        >
          {j}
        </span>
      ))}
    </Reveal>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <Reveal className="space-y-3.5">
      {items.map((o) => (
        <div key={o} className="flex items-start gap-3">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-green/15 text-green">
            <CheckMark className="size-3" />
          </span>
          <span className="text-[15px] text-body leading-relaxed">{o}</span>
        </div>
      ))}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Proses pemesanan                                                    */
/* ------------------------------------------------------------------ */

export function Steps({ steps }: { steps: Langkah[] }) {
  return (
    <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s) => (
        <div
          key={s.no}
          className="rounded-inner border border-white/[.07] bg-card-grad p-5 transition-colors hover:border-white/[.14]"
        >
          <span className="font-mono text-[13px] text-green">{s.no}</span>
          <h3 className="mt-3 text-[15.5px] text-fg">{s.judul}</h3>
          <p className="mt-2 text-[13.5px] text-muted leading-relaxed">{s.teks}</p>
        </div>
      ))}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Feature grid (keunggulan)                                           */
/* ------------------------------------------------------------------ */

export function FeatureGrid({
  items,
  cols = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  items: Keunggulan[];
  cols?: string;
}) {
  return (
    <Reveal className={cx("grid gap-3", cols)}>
      {items.map((k, i) => (
        <div
          key={k.judul}
          className="rounded-card border border-white/[.07] bg-card-grad p-6 transition-colors hover:border-white/[.14]"
        >
          <span className="font-mono text-[12px] text-dim">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-[17px] text-fg">{k.judul}</h3>
          <p className="mt-2.5 text-[14px] text-muted leading-relaxed">{k.teks}</p>
        </div>
      ))}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ (accordion native)                                              */
/* ------------------------------------------------------------------ */

export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <Reveal className="space-y-2.5">
      {items.map(({ q, a }) => (
        <details
          key={q}
          className="group rounded-[16px] border border-white/[.07] bg-gradient-to-b from-[#151517] to-[#0f0f11] px-5 transition-colors hover:border-white/[.12] open:border-white/[.12] md:px-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex min-h-[62px] cursor-pointer list-none items-center justify-between gap-6 py-3 text-[15px] text-fg md:text-[16px]">
            {q}
            <span className="grid size-8 flex-none place-items-center rounded-full border border-white/[.1] bg-white/[.03] text-muted transition-transform duration-300 group-open:rotate-180">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="size-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </span>
          </summary>
          <p className="max-w-[640px] pb-5 text-[14px] text-muted leading-relaxed">{a}</p>
        </details>
      ))}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* CTA band penutup                                                    */
/* ------------------------------------------------------------------ */

export function CtaBandDark({
  title = "Siap wujudkan produk custom Anda?",
  text = "Ceritakan kebutuhan Anda — jenis produk, jumlah, dan target waktu. Tim kami bantu dari desain sampai produk jadi.",
  context,
}: {
  title?: string;
  text?: string;
  context?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(50%_60%_at_50%_0%,rgba(74,222,128,.12),transparent_60%)]"
      />
      <Shell>
        <Reveal className="relative mx-auto max-w-[680px] text-center">
          <svg
            aria-hidden="true"
            viewBox="-40 -40 80 80"
            className="mx-auto mb-7 size-10 text-green"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          >
            <path d="M0-7V-34M0 7V34M-7 0H-34M7 0H34" />
            <path d="M6-6L19-19M-6 6L-19 19M-6-6L-19-19M6 6L19 19" />
          </svg>
          <h2 className="font-light text-[clamp(30px,5vw,56px)] text-fg leading-[1.04] tracking-[-0.035em]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-[480px] text-[16px] text-muted leading-relaxed">
            {text}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <WaButton context={context} />
            <GhostButton href="/kontak">Hubungi Kami</GhostButton>
          </div>
          <p className="mt-8 font-mono text-[12px] text-dim">
            Konsultasi gratis · Respon cepat via WhatsApp
          </p>
        </Reveal>
      </Shell>
    </section>
  );
}

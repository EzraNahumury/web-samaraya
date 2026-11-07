"use client";

import { useState } from "react";
import type { Produk } from "@/lib/catalog";
import { Media } from "./Media";
import { waLink, waMessage } from "@/lib/site";
import { WhatsappIcon } from "./icons";

/**
 * Showcase produk interaktif: satu produk tampil besar (crossfade) dengan
 * deret thumbnail yang dapat diklik untuk mengganti produk. Seluruh gambar
 * dipertahankan di DOM agar pergantian mulus, dan "Minta penawaran" membuka
 * WhatsApp sesuai produk aktif.
 */
export function ProductShowcase({
  produk,
  context,
}: {
  produk: Produk[];
  context?: string;
}) {
  const [active, setActive] = useState(0);
  const current = produk[active];
  const href = waLink(
    waMessage(context ? `${current.nama} (${context})` : current.nama),
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
      {/* Panel utama */}
      <div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-cream md:aspect-[5/4]">
          {produk.map((p, i) => (
            <div
              key={p.nama}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Media
                src={p.src}
                alt={p.alt}
                fit="contain"
                position={p.pos}
                sizes="(max-width: 1024px) 100vw, 55vw"
                zoom={false}
              />
            </div>
          ))}
          {current.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-paper/85 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-ink-soft backdrop-blur-sm">
              {current.tag}
            </span>
          )}
        </div>

        <div
          key={active}
          className="showcase-in mt-5 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">
              {current.nama}
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Tersedia custom — warna, bahan, dan branding menyesuaikan.
            </p>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-green px-5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-green-600"
          >
            <WhatsappIcon className="h-5 w-5" /> Minta penawaran
          </a>
        </div>
      </div>

      {/* Thumbnail rail */}
      <div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-2">
          {produk.map((p, i) => (
            <button
              key={p.nama}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              aria-label={`Lihat ${p.nama}`}
              className={`relative aspect-square overflow-hidden rounded-xl border bg-cream transition ${
                i === active
                  ? "border-green ring-2 ring-green/35"
                  : "border-line hover:border-ink/30"
              }`}
            >
              <Media
                src={p.src}
                alt={p.alt}
                fit="contain"
                position={p.pos}
                sizes="160px"
                zoom={false}
              />
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6 text-ink-soft">
          Pilih model untuk melihat lebih besar. Semua dapat dikustomisasi
          sesuai kebutuhan Anda.
        </p>
      </div>
    </div>
  );
}

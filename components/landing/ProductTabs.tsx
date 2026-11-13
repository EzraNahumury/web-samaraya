"use client";

import { useState } from "react";
import {
  konveksiKategori,
  koperProduk,
  type Produk,
  tasUnggulan,
} from "@/lib/catalog";
import { ProductRing } from "./ProductRing";
import { Window } from "./Window";

/** Katalog "Semua" — kurasi cover lintas kategori untuk rak 3D penuh. */
const SEMUA: Produk[] = [
  { nama: "Jersey Custom", tag: "Konveksi", src: "/2024/06/013-JERSEY.jpg", alt: "Jersey custom" },
  { nama: "Ransel Sailor Pomac", tag: "Tas", src: "/2024/01/ransel-sailor-pomac-barang-XTtuE.jpg", alt: "Ransel custom" },
  { nama: "Koper Hardcase", tag: "Koper", src: "/2024/10/Koper-Shafira-Hitam.jpg", alt: "Koper custom" },
  { nama: "Jaket Varsity", tag: "Konveksi", src: "/2024/06/004-VARSITY.jpg", alt: "Varsity custom" },
  { nama: "Sling Sailor Nobilis", tag: "Tas", src: "/2024/01/handbag-sailor-nobilis-barang-KS5Ea.jpg", alt: "Selempang custom" },
  { nama: "Koper Shafira Merah", tag: "Koper", src: "/2024/10/Koper-Shafira-Merah.jpg", alt: "Koper merah custom" },
  { nama: "Hoodie Custom", tag: "Konveksi", src: "/2024/06/003-hoodie.jpg", alt: "Hoodie custom" },
  { nama: "Backpack Custom", tag: "Tas", src: "/2024/06/002-BACKPACK.jpg", alt: "Backpack custom" },
  { nama: "Kemeja Seragam", tag: "Konveksi", src: "/2024/06/006-KEMEJA-RESMI.jpg", alt: "Kemeja seragam custom" },
  { nama: "Topi Custom", tag: "Konveksi", src: "/2024/06/014-TOPI.jpg", alt: "Topi custom" },
];

const CATS: { id: string; label: string; route: string; items: Produk[] }[] = [
  { id: "semua", label: "Semua", route: "/katalog · Semua", items: SEMUA },
  { id: "tas", label: "Tas", route: "/katalog · Tas", items: tasUnggulan },
  { id: "koper", label: "Koper", route: "/katalog · Koper", items: koperProduk },
  { id: "konveksi", label: "Konveksi", route: "/katalog · Konveksi", items: konveksiKategori },
];

export function ProductTabs() {
  const [at, setAt] = useState(0);
  const cat = CATS[at];
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div
        role="tablist"
        aria-label="Kategori produk"
        data-lp="tabs"
        className="relative z-10 mb-6 flex max-w-full gap-0.5 overflow-x-auto rounded-full border border-white/[.08] bg-[#0b0b0c]/90 p-1"
      >
        {CATS.map((c, i) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={i === at}
            onClick={() => setAt(i)}
            className={`relative whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] transition-colors ${
              i === at ? "bg-white/[.09] text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div
        id="lp-shot"
        data-lp="frame"
        className="lp-shot pointer-events-none relative h-[440px] w-full max-w-[1180px] select-none md:h-[620px]"
      >
        <Window
          tab={`Katalog · ${cat.label}`}
          aside={cat.route}
          className="flex h-full flex-col text-left"
        >
          <div className="relative min-h-0 flex-1 overflow-hidden">
            {/* rak produk 3D */}
            <ProductRing key={cat.id} items={cat.items} />
            {/* petunjuk interaksi */}
            <p className="pointer-events-none absolute inset-x-0 bottom-3 text-center font-mono text-[11px] text-dim">
              seret untuk memutar · {cat.items.length} produk
            </p>
          </div>
        </Window>
        <div aria-hidden="true" data-lp="square" className="lp-square" />
      </div>
    </div>
  );
}

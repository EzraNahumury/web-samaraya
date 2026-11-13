"use client";

import { ProductRing } from "./ProductRing";
import { Reveal } from "./motion";

const ITEMS = [
  { src: "/2024/06/013-JERSEY.jpg", nama: "Jersey", tag: "Konveksi" },
  { src: "/2024/01/ransel-sailor-pomac-barang-XTtuE.jpg", nama: "Ransel", tag: "Tas" },
  { src: "/2024/10/Koper-Shafira-Hitam.jpg", nama: "Koper", tag: "Koper" },
  { src: "/2024/06/004-VARSITY.jpg", nama: "Varsity", tag: "Konveksi" },
  { src: "/2024/01/handbag-sailor-nobilis-barang-KS5Ea.jpg", nama: "Selempang", tag: "Tas" },
  { src: "/2024/06/003-hoodie.jpg", nama: "Hoodie", tag: "Konveksi" },
  { src: "/2024/06/002-BACKPACK.jpg", nama: "Backpack", tag: "Tas" },
  { src: "/2024/06/006-KEMEJA-RESMI.jpg", nama: "Kemeja", tag: "Konveksi" },
  { src: "/2024/06/014-TOPI.jpg", nama: "Topi", tag: "Konveksi" },
  { src: "/2024/10/Koper-Shafira-Merah.jpg", nama: "Koper Merah", tag: "Koper" },
  { src: "/2024/06/001-KAOS.jpg", nama: "Kaos", tag: "Konveksi" },
  { src: "/2024/06/009-JAKET-BOMBER.jpg", nama: "Jaket", tag: "Konveksi" },
];

export function ProductGallery() {
  return (
    <section data-tone="findings" className="overflow-hidden py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[.08] bg-white/[.04] px-3 py-1 text-[12px] text-muted">
              <span className="size-1.5 rounded-full bg-[var(--lp-green,#4ade80)]" />
              Galeri Produk
            </p>
            <h2 className="font-medium text-[clamp(30px,4vw,50px)] text-fg leading-[1.04] tracking-[-0.03em]">
              Ragam produk custom <span className="text-white/45">untuk brand Anda.</span>
            </h2>
            <p className="mt-4 text-[15px] text-muted leading-relaxed">
              Seret untuk memutar — tas, koper, apparel, dan perlengkapan travel.
            </p>
          </div>
        </Reveal>
      </div>
      <div className="relative mt-10 h-[440px] md:h-[560px]">
        <ProductRing items={ITEMS} />
      </div>
    </section>
  );
}

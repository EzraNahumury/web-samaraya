import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CtaBandDark,
  CheckList,
  FaqAccordion,
  PageHeroDark,
  PillRow,
  ProductGrid,
  SectionHead,
  Shell,
  Steps,
} from "@/components/site/ui";
import { Reveal } from "@/components/landing/motion";
import { faqUmum, prosesPemesanan, tasUnggulan } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Tas & Koper Custom",
  description:
    "Produksi tas dan koper custom: ransel, selempang, totebag, waistbag, tas laptop, hingga koper. Desain dan branding sesuai kebutuhan komunitas, instansi, dan travel.",
  alternates: { canonical: "/tas-dan-koper" },
};

const jenis = [
  "Ransel",
  "Tas Selempang",
  "Totebag",
  "Waistbag",
  "Tas Laptop",
  "Travelbag",
  "Tas Seminar",
  "Tas Sepatu",
  "Pouch",
  "Koper",
];

const opsiCustom = [
  "Pilihan bahan & warna",
  "Logo bordir, sablon, atau rubber",
  "Ukuran & kompartemen menyesuaikan",
  "Label & hangtag custom",
  "Aksesoris (gantungan, strap, name tag)",
  "Pengemasan & bundling paket",
];

export default function TasDanKoperPage() {
  return (
    <>
      <PageHeroDark
        breadcrumb="Tas & Koper"
        eyebrow="Tas & Koper"
        title={
          <>
            Tas &amp; koper <span className="text-green">custom</span> untuk setiap kebutuhan.
          </>
        }
        desc="Dari ransel harian komunitas hingga koper paket travel. Semua diproduksi sendiri dan dapat dikustomisasi penuh — bahan, warna, ukuran, dan branding."
        media={{
          src: "/2024/01/ransel-sailor-pomac-barang-XTtuE.jpg",
          alt: "Ransel custom Sailor Pomac produksi Samaraya",
        }}
        waContext="produk tas & koper custom"
        secondary={{ label: "Lihat produk", href: "#katalog" }}
      />

      {/* Produk unggulan */}
      <section id="katalog" className="scroll-mt-24 py-16 md:py-24">
        <Shell>
          <SectionHead
            eyebrow="Produk Unggulan"
            title="Beberapa model yang sering dipesan."
            desc="Ketuk “Penawaran” pada produk untuk konsultasi langsung via WhatsApp."
          />
          <div className="mt-10">
            <ProductGrid produk={tasUnggulan} context="Tas & Koper" />
          </div>
        </Shell>
      </section>

      {/* Jenis + opsi custom */}
      <section className="py-16 md:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHead eyebrow="Ragam Jenis" title="Satu produsen, banyak pilihan." />
              <div className="mt-8">
                <PillRow items={jenis} />
              </div>
            </div>
            <div>
              <SectionHead eyebrow="Opsi Custom" title="Disesuaikan sampai detail." />
              <div className="mt-8">
                <CheckList items={opsiCustom} />
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* Cross-link ke koper */}
      <section className="py-16 md:py-24">
        <Shell>
          <Reveal>
            <Link
              href="/koper"
              className="group grid items-center gap-8 overflow-hidden rounded-card border border-white/[.08] bg-card-grad md:grid-cols-2"
            >
              <div className="p-8 md:p-12 lg:p-14">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[.08] bg-white/[.04] px-3 py-1 text-[12px] text-green">
                  <span className="size-1.5 rounded-full bg-green" />
                  Khusus Koper
                </span>
                <h2 className="mt-5 font-medium text-[clamp(24px,3vw,34px)] text-fg leading-[1.1] tracking-[-0.03em]">
                  Butuh koper untuk paket travel?
                </h2>
                <p className="mt-4 max-w-md text-[15px] text-muted leading-relaxed">
                  Lihat lini koper kabin &amp; bagasi yang siap dikustomisasi untuk travel umrah,
                  haji, dan merchandise korporat.
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-fg">
                  Lihat koper
                  <span
                    aria-hidden
                    className="text-green transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[20rem]">
                <div className="absolute inset-3 overflow-hidden rounded-inner bg-gradient-to-b from-[#f6f6f4] to-[#e8e8e2]">
                  <Image
                    src="/2024/10/Koper-Shafira-Putih.jpg"
                    alt="Koper hardcase custom branding"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6"
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        </Shell>
      </section>

      {/* Proses */}
      <section className="py-16 md:py-24">
        <Shell>
          <SectionHead eyebrow="Alur Pemesanan" title="Cara memesan di Samaraya." />
          <div className="mt-12">
            <Steps steps={prosesPemesanan} />
          </div>
        </Shell>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHead eyebrow="FAQ" title="Hal yang sering ditanyakan." />
            <FaqAccordion items={faqUmum} />
          </div>
        </Shell>
      </section>

      <CtaBandDark context="produk tas & koper custom" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/Media";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { tasUnggulan, prosesPemesanan, faqUmum } from "@/lib/catalog";

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
      <PageHero
        breadcrumb="Tas & Koper"
        eyebrow="Tas & Koper"
        title={
          <>
            Tas &amp; koper <span className="mark">custom</span> untuk setiap
            kebutuhan.
          </>
        }
        description="Dari ransel harian komunitas hingga koper paket travel. Semua diproduksi sendiri dan dapat dikustomisasi penuh — bahan, warna, ukuran, dan branding."
        media={{
          src: "/2024/01/ransel-sailor-pomac-barang-XTtuE.jpg",
          alt: "Ransel custom Sailor Pomac produksi Samaraya",
          fit: "contain",
        }}
        waContext="produk tas & koper custom"
        secondary={{ label: "Lihat produk", href: "#katalog" }}
      />

      {/* Produk unggulan */}
      <section id="katalog" className="scroll-mt-24 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Produk Unggulan"
            title="Beberapa model yang sering dipesan."
            description="Pilih model untuk melihat detail. Ketuk “Minta penawaran” untuk konsultasi via WhatsApp."
          />
          <Reveal className="mt-12">
            <ProductShowcase produk={tasUnggulan} context="Tas & Koper" />
          </Reveal>
        </Container>
      </section>

      {/* Jenis + opsi custom */}
      <section className="bg-paper-2/60 py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Ragam Jenis"
                title="Satu produsen, banyak pilihan."
              />
              <div className="mt-8 flex flex-wrap gap-2.5">
                {jenis.map((j) => (
                  <span
                    key={j}
                    className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink"
                  >
                    {j}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Opsi Custom"
                title="Disesuaikan sampai detail."
              />
              <ul className="mt-8 space-y-4">
                {opsiCustom.map((o, i) => (
                  <Reveal as="li" key={o} delay={i * 50} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                        <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[1.02rem] leading-7 text-ink">{o}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Cross-link ke koper */}
      <section className="py-20 md:py-28">
        <Container>
          <Link
            href="/koper"
            className="group grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-ink text-on-dark md:grid-cols-2"
          >
            <div className="p-8 md:p-12 lg:p-14">
              <p className="eyebrow mb-4 text-green">Khusus Koper</p>
              <h2 className="display-md text-on-dark">
                Butuh koper untuk paket travel?
              </h2>
              <p className="mt-4 max-w-md leading-7 text-on-dark-soft">
                Lihat lini koper kabin &amp; bagasi yang siap dikustomisasi untuk
                travel umrah, haji, dan merchandise korporat.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 font-medium text-on-dark">
                Lihat koper
                <span aria-hidden className="text-green transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[20rem]">
              <Media
                src="/2024/10/Koper-Shafira-Putih.jpg"
                alt="Koper hardcase custom branding"
                fit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="p-6"
              />
            </div>
          </Link>
        </Container>
      </section>

      {/* Proses */}
      <section className="pb-20 md:pb-28">
        <Container>
          <SectionHeading
            eyebrow="Alur Pemesanan"
            title="Cara memesan di Samaraya."
          />
          <div className="mt-14">
            <ProcessSteps steps={prosesPemesanan} />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <SectionHeading eyebrow="FAQ" title="Hal yang sering ditanyakan." />
            <FaqList items={faqUmum} />
          </div>
        </Container>
      </section>

      <CtaBand context="produk tas & koper custom" />
    </>
  );
}

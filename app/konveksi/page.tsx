import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { konveksiKategori, prosesPemesanan, faqUmum } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Konveksi Custom",
  description:
    "Layanan konveksi custom: kaos, polo, hoodie, varsity, kemeja seragam, jaket, jersey, almamater, training, dan topi. Sablon dan bordir sesuai desain Anda.",
  alternates: { canonical: "/konveksi" },
};

const layanan = [
  "Sablon (rubber, plastisol, DTF)",
  "Bordir komputer",
  "Printing & sublimasi",
  "Jahit & pola custom",
  "Pilihan bahan beragam",
  "Ukuran lengkap, anak–dewasa",
];

export default function KonveksiPage() {
  return (
    <>
      <PageHero
        breadcrumb="Konveksi"
        eyebrow="Konveksi"
        title={
          <>
            Apparel <span className="mark">custom</span> untuk tim &amp;
            komunitas.
          </>
        }
        description="Produksi kaos, polo, jaket, seragam, hingga jersey dengan desain bebas. Cocok untuk komunitas, sekolah, instansi, dan event."
        media={{
          src: "/2024/06/013-JERSEY.jpg",
          alt: "Jersey custom hasil konveksi Samaraya",
          fit: "contain",
        }}
        waContext="produk konveksi custom"
        secondary={{ label: "Lihat kategori", href: "#kategori" }}
      />

      {/* Kategori produk konveksi */}
      <section id="kategori" className="scroll-mt-24 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Kategori Produk"
            title="Dari kaos harian sampai seragam resmi."
            description="Ketuk kategori untuk minta penawaran via WhatsApp sesuai kebutuhan Anda."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {konveksiKategori.map((p, i) => (
              <Reveal key={p.nama} delay={(i % 5) * 70}>
                <ProductCard
                  produk={p}
                  context="Konveksi"
                  fit="cover"
                  ratio="aspect-square"
                  caption={false}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 18vw"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Layanan */}
      <section className="bg-paper-2/60 py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Layanan Produksi"
              title="Teknik lengkap, hasil rapi."
              description="Kami menyesuaikan teknik produksi dengan jenis bahan dan desain, agar hasil akhir sesuai harapan."
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {layanan.map((l, i) => (
                <Reveal as="li" key={l} delay={i * 50} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[1.02rem] leading-7 text-ink">{l}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Proses */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Alur Pemesanan" title="Langkah pemesanan konveksi." />
          <div className="mt-14">
            <ProcessSteps steps={prosesPemesanan} />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <SectionHeading eyebrow="FAQ" title="Pertanyaan umum konveksi." />
            <FaqList items={faqUmum} />
          </div>
        </Container>
      </section>

      <CtaBand context="produk konveksi custom" />
    </>
  );
}

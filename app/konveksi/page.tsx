import type { Metadata } from "next";
import {
  CtaBandDark,
  CheckList,
  FaqAccordion,
  PageHeroDark,
  ProductGrid,
  SectionHead,
  Shell,
  Steps,
} from "@/components/site/ui";
import { faqUmum, konveksiKategori, prosesPemesanan } from "@/lib/catalog";

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
      <PageHeroDark
        breadcrumb="Konveksi"
        eyebrow="Konveksi"
        title={
          <>
            Apparel <span className="text-green">custom</span> untuk tim &amp; komunitas.
          </>
        }
        desc="Produksi kaos, polo, jaket, seragam, hingga jersey dengan desain bebas. Cocok untuk komunitas, sekolah, instansi, dan event."
        media={{
          src: "/2024/06/013-JERSEY.jpg",
          alt: "Jersey custom hasil konveksi Samaraya",
        }}
        waContext="produk konveksi custom"
        secondary={{ label: "Lihat kategori", href: "#kategori" }}
      />

      {/* Kategori produk */}
      <section id="kategori" className="scroll-mt-24 py-16 md:py-24">
        <Shell>
          <SectionHead
            eyebrow="Kategori Produk"
            title="Dari kaos harian sampai seragam resmi."
            desc="Ketuk kategori untuk minta penawaran via WhatsApp sesuai kebutuhan Anda."
          />
          <div className="mt-10">
            <ProductGrid
              produk={konveksiKategori}
              context="Konveksi"
              cols="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            />
          </div>
        </Shell>
      </section>

      {/* Layanan */}
      <section className="py-16 md:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHead
              eyebrow="Layanan Produksi"
              title="Teknik lengkap, hasil rapi."
              desc="Kami menyesuaikan teknik produksi dengan jenis bahan dan desain, agar hasil akhir sesuai harapan."
            />
            <CheckList items={layanan} />
          </div>
        </Shell>
      </section>

      {/* Proses */}
      <section className="py-16 md:py-24">
        <Shell>
          <SectionHead eyebrow="Alur Pemesanan" title="Langkah pemesanan konveksi." />
          <div className="mt-12">
            <Steps steps={prosesPemesanan} />
          </div>
        </Shell>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHead eyebrow="FAQ" title="Pertanyaan umum konveksi." />
            <FaqAccordion items={faqUmum} />
          </div>
        </Shell>
      </section>

      <CtaBandDark context="produk konveksi custom" />
    </>
  );
}

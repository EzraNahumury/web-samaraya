import type { Metadata } from "next";
import {
  CtaBandDark,
  CheckList,
  Eyebrow,
  FeatureGrid,
  PageHeroDark,
  SectionHead,
  Shell,
  Steps,
  WaButton,
} from "@/components/site/ui";
import { Reveal } from "@/components/landing/motion";
import { prosesPemesanan } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Sepatu Custom",
  description:
    "Layanan sepatu dan tas sepatu custom dari Samaraya. Spesifikasi, model, dan material dikonfirmasi langsung sesuai kebutuhan Anda.",
  alternates: { canonical: "/sepatu" },
};

const bantu = [
  {
    judul: "Sepatu custom",
    teks: "Produksi sesuai kebutuhan Anda. Model, bahan, dan ukuran dibahas pada tahap konsultasi.",
  },
  {
    judul: "Tas sepatu",
    teks: "Tas sepatu (shoebag) custom untuk travel, olahraga, dan bundling paket perjalanan.",
  },
  {
    judul: "Branding & bundling",
    teks: "Tambahkan logo dan gabungkan dengan produk lain dalam satu paket pemesanan.",
  },
];

const siapkan = [
  "Jenis & model yang diinginkan",
  "Perkiraan jumlah pesanan",
  "Kebutuhan desain atau logo",
  "Target waktu yang diharapkan",
];

export default function SepatuPage() {
  return (
    <>
      <PageHeroDark
        breadcrumb="Sepatu"
        eyebrow="Sepatu"
        title={
          <>
            Sepatu &amp; tas sepatu <span className="text-green">custom</span>.
          </>
        }
        desc="Lini sepatu kami dikerjakan berbasis konsultasi agar sesuai kebutuhan. Ceritakan model dan jumlah yang Anda inginkan, kami bantu dari desain hingga produksi."
        media={{
          src: "/2025/11/DSC0544.webp",
          alt: "Tas sepatu custom produksi Samaraya",
        }}
        waContext="produk sepatu / tas sepatu custom"
        secondary={{ label: "Cara memesan", href: "#proses" }}
      />

      {/* Pernyataan jujur */}
      <section className="py-16 md:py-24">
        <Shell>
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Berbasis Konsultasi</Eyebrow>
            </div>
            <p className="mt-6 font-medium text-[clamp(22px,3.2vw,34px)] text-fg leading-[1.12] tracking-[-0.025em]">
              Spesifikasi, model, dan material sepatu kami tentukan bersama Anda — bukan dari
              katalog massal.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-[16px] text-muted leading-relaxed">
              Dengan begitu, hasilnya benar-benar sesuai kebutuhan komunitas, instansi, atau event
              Anda. Informasi detail kami sampaikan saat penawaran.
            </p>
          </Reveal>
        </Shell>
      </section>

      {/* Ruang lingkup */}
      <section className="py-16 md:py-24">
        <Shell>
          <SectionHead eyebrow="Yang Bisa Kami Bantu" title="Ruang lingkup layanan." />
          <div className="mt-10">
            <FeatureGrid items={bantu} cols="md:grid-cols-3" />
          </div>
        </Shell>
      </section>

      {/* Siapkan detail */}
      <section className="py-16 md:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHead
                eyebrow="Sebelum Menghubungi"
                title="Siapkan detail ini."
                desc="Agar kami bisa memberi penawaran yang akurat dan cepat."
              />
              <div className="mt-8">
                <WaButton context="produk sepatu / tas sepatu custom">Konsultasi Sekarang</WaButton>
              </div>
            </div>
            <CheckList items={siapkan} />
          </div>
        </Shell>
      </section>

      {/* Alur pemesanan */}
      <section id="proses" className="scroll-mt-24 py-16 md:py-24">
        <Shell>
          <SectionHead eyebrow="Alur Pemesanan" title="Cara memesan sepatu custom." />
          <div className="mt-12">
            <Steps steps={prosesPemesanan} />
          </div>
        </Shell>
      </section>

      <CtaBandDark
        title="Punya rencana pengadaan sepatu?"
        text="Ceritakan kebutuhan Anda. Kami bantu wujudkan dari konsultasi, desain, hingga produksi."
        context="produk sepatu custom"
      />
    </>
  );
}

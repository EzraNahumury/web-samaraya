import type { Metadata } from "next";
import {
  CtaBandDark,
  Eyebrow,
  FaqAccordion,
  FeatureGrid,
  PageHeroDark,
  ProductGrid,
  SectionHead,
  Shell,
} from "@/components/site/ui";
import { Reveal } from "@/components/landing/motion";
import type { Faq } from "@/lib/catalog";
import { koperProduk } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Koper Custom",
  description:
    "Koper kabin & bagasi hardcase custom untuk travel umrah, haji, agen tour, korporat, dan komunitas. Branding dan warna dapat disesuaikan.",
  alternates: { canonical: "/koper" },
};

const useCases = [
  { judul: "Travel Umrah & Haji", teks: "Koper seragam jamaah lengkap dengan identitas travel Anda." },
  { judul: "Agen Tour", teks: "Merchandise koper untuk paket perjalanan dan loyalitas pelanggan." },
  { judul: "Korporat & Instansi", teks: "Souvenir dan hadiah event dengan branding perusahaan." },
  { judul: "Komunitas", teks: "Koper edisi khusus untuk komunitas dan gathering." },
];

const koperFaq: Faq[] = [
  {
    q: "Ukuran koper apa saja yang tersedia?",
    a: "Tersedia pilihan ukuran kabin dan bagasi. Ukuran pasti dan ketersediaan model kami konfirmasikan saat konsultasi sesuai kebutuhan Anda.",
  },
  {
    q: "Apakah bisa mencetak logo di koper?",
    a: "Bisa. Branding dapat diterapkan melalui label, tag custom, atau wrapping sesuai desain Anda. Detail teknis menyesuaikan jenis koper.",
  },
  {
    q: "Berapa minimum pemesanan koper?",
    a: "Minimum pemesanan menyesuaikan model dan tingkat kustomisasi. Silakan hubungi kami via WhatsApp untuk informasi sesuai kebutuhan.",
  },
  {
    q: "Apakah melayani pesanan dalam jumlah besar?",
    a: "Ya. Kami terbiasa memproduksi koper untuk kebutuhan travel dan instansi dalam jumlah besar dengan jadwal yang disepakati.",
  },
];

export default function KoperPage() {
  return (
    <>
      <PageHeroDark
        breadcrumb="Koper"
        eyebrow="Koper"
        title={
          <>
            Koper <span className="text-green">custom</span> untuk setiap perjalanan.
          </>
        }
        desc="Koper kabin & bagasi hardcase yang siap dikustomisasi untuk travel umrah, haji, agen tour, dan merchandise korporat. Pilih warna, tambahkan branding Anda."
        media={{
          src: "/2024/10/Koper-Shafira-Hitam.jpg",
          alt: "Koper hardcase hitam custom branding untuk travel",
        }}
        waContext="koper custom untuk travel"
        secondary={{ label: "Lihat pilihan", href: "#katalog" }}
      />

      {/* Range warna */}
      <section id="katalog" className="scroll-mt-24 py-16 md:py-24">
        <Shell>
          <SectionHead
            eyebrow="Pilihan Koper"
            title="Tersedia dalam beragam warna."
            desc="Ketuk produk untuk minta penawaran. Warna lain dapat didiskusikan sesuai ketersediaan."
          />
          <div className="mt-10">
            <ProductGrid
              produk={koperProduk}
              context="Koper"
              cols="grid-cols-2 lg:grid-cols-4"
            />
          </div>
        </Shell>
      </section>

      {/* Use cases */}
      <section className="py-16 md:py-24">
        <Shell>
          <SectionHead eyebrow="Cocok Untuk" title="Koper yang bekerja untuk brand Anda." />
          <div className="mt-10">
            <FeatureGrid items={useCases} cols="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </Shell>
      </section>

      {/* Catatan spesifikasi */}
      <section className="py-16 md:py-24">
        <Shell>
          <Reveal className="mx-auto max-w-3xl rounded-card border border-white/[.08] bg-card-grad p-8 text-center md:p-12">
            <div className="flex justify-center">
              <Eyebrow>Catatan</Eyebrow>
            </div>
            <p className="mt-5 text-[clamp(18px,2.4vw,24px)] text-body leading-relaxed">
              Spesifikasi detail — ukuran, material, dan berat — kami sampaikan langsung saat
              konsultasi agar sesuai dengan kebutuhan dan standar perjalanan Anda.
            </p>
          </Reveal>
        </Shell>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHead eyebrow="FAQ" title="Seputar pemesanan koper." />
            <FaqAccordion items={koperFaq} />
          </div>
        </Shell>
      </section>

      <CtaBandDark
        title="Butuh koper custom untuk travel Anda?"
        context="koper custom untuk travel"
      />
    </>
  );
}

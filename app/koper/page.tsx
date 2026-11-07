import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { koperProduk } from "@/lib/catalog";
import type { Faq } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Koper Custom",
  description:
    "Koper kabin & bagasi hardcase custom untuk travel umrah, haji, agen tour, korporat, dan komunitas. Branding dan warna dapat disesuaikan.",
  alternates: { canonical: "/koper" },
};

const useCases = [
  {
    judul: "Travel Umrah & Haji",
    teks: "Koper seragam jamaah lengkap dengan identitas travel Anda.",
  },
  {
    judul: "Agen Tour",
    teks: "Merchandise koper untuk paket perjalanan dan loyalitas pelanggan.",
  },
  {
    judul: "Korporat & Instansi",
    teks: "Souvenir dan hadiah event dengan branding perusahaan.",
  },
  {
    judul: "Komunitas",
    teks: "Koper edisi khusus untuk komunitas dan gathering.",
  },
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
      <PageHero
        breadcrumb="Koper"
        eyebrow="Koper"
        title={
          <>
            Koper kabin &amp; bagasi, <span className="mark">siap custom</span>.
          </>
        }
        description="Koper hardcase untuk kebutuhan travel dan merchandise. Pilih warna, tambahkan branding, dan pesan dalam jumlah sesuai kebutuhan Anda."
        media={{
          src: "/2024/10/Koper-Shafira-Hitam.jpg",
          alt: "Koper hardcase hitam custom branding produksi Samaraya",
          fit: "contain",
        }}
        waContext="koper custom"
        secondary={{ label: "Lihat pilihan", href: "#katalog" }}
      />

      {/* Range warna */}
      <section id="katalog" className="scroll-mt-24 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Pilihan Koper"
            title="Tersedia dalam beragam warna."
            description="Ketuk produk untuk minta penawaran. Warna lain dapat didiskusikan sesuai ketersediaan."
          />
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {koperProduk.map((p, i) => (
              <Reveal key={p.nama} delay={(i % 4) * 80}>
                <ProductCard produk={p} context="Koper" ratio="aspect-square" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Use cases */}
      <section className="bg-paper-2/60 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Cocok Untuk"
            title="Koper yang bekerja untuk brand Anda."
          />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u, i) => (
              <Reveal key={u.judul} delay={(i % 4) * 80}>
                <div className="relative pt-5">
                  <span className="absolute left-0 top-0 h-px w-full bg-line" aria-hidden />
                  <span className="absolute left-0 top-0 h-px w-10 bg-green" aria-hidden />
                  <h3 className="font-display text-xl font-medium text-ink">{u.judul}</h3>
                  <p className="mt-2.5 text-[0.98rem] leading-7 text-ink-soft">{u.teks}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Catatan spesifikasi (jujur) */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl rounded-3xl border border-line bg-cream p-8 text-center md:p-12">
            <p className="eyebrow mb-4 flex items-center justify-center gap-2.5 text-green-deep">
              <span className="brand-dot" /> Catatan
            </p>
            <p className="font-display text-xl leading-relaxed text-ink md:text-2xl">
              Spesifikasi detail — ukuran, material, dan berat — kami sampaikan
              langsung saat konsultasi agar sesuai dengan kebutuhan dan standar
              perjalanan Anda.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <SectionHeading eyebrow="FAQ" title="Seputar pemesanan koper." />
            <FaqList items={koperFaq} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Butuh koper custom untuk travel Anda?"
        context="koper custom untuk travel"
      />
    </>
  );
}

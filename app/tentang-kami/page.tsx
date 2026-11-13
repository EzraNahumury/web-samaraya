import type { Metadata } from "next";
import Image from "next/image";
import {
  CtaBandDark,
  FeatureGrid,
  PageHeroText,
  PillRow,
  SectionHead,
  Shell,
} from "@/components/site/ui";
import { Reveal } from "@/components/landing/motion";
import { keunggulan } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Samaraya adalah produsen dan konveksi custom untuk tas, koper, apparel, dan perlengkapan travel — diproduksi sendiri dengan opsi kustomisasi penuh.",
  alternates: { canonical: "/tentang-kami" },
};

const segmen = [
  "Travel umrah & haji",
  "Komunitas & organisasi",
  "Sekolah & kampus",
  "Instansi & pemerintahan",
  "Korporat & UMKM",
  "Event & souvenir",
];

export default function TentangKamiPage() {
  return (
    <>
      <PageHeroText
        breadcrumb="Tentang Kami"
        eyebrow="Tentang Kami"
        title="Produsen custom yang tumbuh bersama mitranya."
        desc="Samaraya memproduksi tas, koper, konveksi, dan perlengkapan travel secara custom. Semua dikerjakan di workshop sendiri, sehingga kualitas dan jadwal lebih terkontrol — dari satu pesanan komunitas hingga kebutuhan travel dalam jumlah besar."
      />

      {/* Gambar lebar */}
      <section className="pb-16 md:pb-24">
        <Shell>
          <Reveal className="rounded-card border border-white/[.08] bg-card-grad p-3 shadow-float">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-inner md:aspect-[21/9]">
              <Image
                src="/2024/06/SAMPUL.webp"
                alt="Aktivitas produksi, pemeriksaan kualitas, dan pengemasan di Samaraya"
                fill
                sizes="(max-width: 1240px) 100vw, 1240px"
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </Shell>
      </section>

      {/* Cara kami bekerja */}
      <section className="py-16 md:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHead
              eyebrow="Cara Kami Bekerja"
              title="Sederhana, transparan, dan terukur."
              desc="Kami menjaga agar setiap pesanan jelas sejak awal dan selesai sesuai kesepakatan."
            />
            <FeatureGrid items={keunggulan} />
          </div>
        </Shell>
      </section>

      {/* Segmen */}
      <section className="py-16 md:py-24">
        <Shell>
          <SectionHead
            eyebrow="Yang Kami Layani"
            title="Dipercaya beragam kebutuhan."
            desc="Pengalaman memproduksi untuk berbagai segmen membuat kami terbiasa menyesuaikan kebutuhan dan skala pesanan."
          />
          <div className="mt-10">
            <PillRow items={segmen} />
          </div>
        </Shell>
      </section>

      <CtaBandDark
        title="Mari diskusikan kebutuhan Anda."
        text="Ceritakan rencana Anda, kami bantu rumuskan produk yang tepat beserta penawarannya."
      />
    </>
  );
}

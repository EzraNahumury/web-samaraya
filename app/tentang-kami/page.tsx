import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/Media";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CtaBand } from "@/components/CtaBand";
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
      {/* Header */}
      <section className="pt-12 md:pt-16">
        <Container>
          <div className="max-w-3xl">
            <Reveal as="p" className="eyebrow mb-5 flex items-center gap-2.5 text-green-deep">
              <span className="brand-dot" /> Tentang Kami
            </Reveal>
            <Reveal as="h1" delay={60} className="display-xl">
              Produsen custom yang tumbuh bersama mitranya.
            </Reveal>
            <Reveal as="p" delay={120} className="mt-6 text-xl leading-9 text-ink-soft">
              Samaraya memproduksi tas, koper, konveksi, dan perlengkapan travel
              secara custom. Semua dikerjakan di workshop sendiri, sehingga
              kualitas dan jadwal lebih terkontrol — dari satu pesanan komunitas
              hingga kebutuhan travel dalam jumlah besar.
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Gambar lebar */}
      <section className="py-14 md:py-20">
        <Container>
          <Reveal variant="scale" className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-line bg-paper-2 md:aspect-[21/9]">
            <Media
              src="/2024/06/SAMPUL.webp"
              alt="Aktivitas produksi, pemeriksaan kualitas, dan pengemasan di Samaraya"
              sizes="100vw"
              priority
            />
          </Reveal>
        </Container>
      </section>

      {/* Cara kami bekerja */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="Cara Kami Bekerja"
              title="Sederhana, transparan, dan terukur."
              description="Kami menjaga agar setiap pesanan jelas sejak awal dan selesai sesuai kesepakatan."
            />
            <FeatureGrid items={keunggulan} />
          </div>
        </Container>
      </section>

      {/* Segmen yang dilayani */}
      <section className="bg-paper-2/60 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Yang Kami Layani"
            title="Dipercaya beragam kebutuhan."
            description="Pengalaman memproduksi untuk berbagai segmen membuat kami terbiasa menyesuaikan kebutuhan dan skala pesanan."
          />
          <div className="mt-10 flex flex-wrap gap-2.5">
            {segmen.map((s) => (
              <span key={s} className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink">
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Mari diskusikan kebutuhan Anda."
        text="Ceritakan rencana Anda, kami bantu rumuskan produk yang tepat beserta penawarannya."
      />
    </>
  );
}

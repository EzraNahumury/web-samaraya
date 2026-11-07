import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CtaBand } from "@/components/CtaBand";
import { WhatsappIcon } from "@/components/icons";
import { prosesPemesanan } from "@/lib/catalog";
import { waLink, waMessage } from "@/lib/site";

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
      <PageHero
        breadcrumb="Sepatu"
        eyebrow="Sepatu"
        title={
          <>
            Sepatu &amp; tas sepatu <span className="mark">custom</span>.
          </>
        }
        description="Lini sepatu kami dikerjakan berbasis konsultasi agar sesuai kebutuhan. Ceritakan model dan jumlah yang Anda inginkan, kami bantu dari desain hingga produksi."
        media={{
          src: "/2025/11/DSC0544.webp",
          alt: "Tas sepatu custom produksi Samaraya",
          fit: "contain",
        }}
        waContext="produk sepatu / tas sepatu custom"
        secondary={{ label: "Cara memesan", href: "#proses" }}
      />

      {/* Pernyataan jujur */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4 flex items-center justify-center gap-2.5 text-green-deep">
              <span className="brand-dot" /> Berbasis Konsultasi
            </p>
            <p className="display-md text-ink">
              Spesifikasi, model, dan material sepatu kami tentukan bersama Anda
              — bukan dari katalog massal.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-ink-soft">
              Dengan begitu, hasilnya benar-benar sesuai kebutuhan komunitas,
              instansi, atau event Anda. Informasi detail kami sampaikan saat
              penawaran.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Yang bisa kami bantu */}
      <section className="bg-paper-2/60 py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Yang Bisa Kami Bantu" title="Ruang lingkup layanan." />
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
            {bantu.map((b, i) => (
              <Reveal key={b.judul} delay={i * 90}>
                <div className="relative pt-5">
                  <span className="absolute left-0 top-0 h-px w-full bg-line" aria-hidden />
                  <span className="absolute left-0 top-0 h-px w-10 bg-green" aria-hidden />
                  <h3 className="font-display text-xl font-medium text-ink">{b.judul}</h3>
                  <p className="mt-2.5 text-[0.98rem] leading-7 text-ink-soft">{b.teks}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Siapkan + proses */}
      <section id="proses" className="scroll-mt-24 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Sebelum Menghubungi"
                title="Siapkan detail ini."
                description="Agar kami bisa memberi penawaran yang akurat dan cepat."
              />
              <ul className="mt-8 space-y-4">
                {siapkan.map((s, i) => (
                  <Reveal as="li" key={s} delay={i * 50} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                        <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[1.02rem] leading-7 text-ink">{s}</span>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={240} className="mt-8">
                <Button href={waLink(waMessage("produk sepatu / tas sepatu custom"))} external variant="accent" size="lg">
                  <WhatsappIcon className="h-5 w-5" />
                  Konsultasi Sekarang
                </Button>
              </Reveal>
            </div>
            <div>
              <h3 className="mb-8 font-display text-xl font-medium text-ink">Alur pemesanan</h3>
              <ProcessSteps steps={prosesPemesanan} />
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Punya rencana pengadaan sepatu?"
        text="Ceritakan kebutuhan Anda. Kami bantu wujudkan dari konsultasi, desain, hingga produksi."
        context="produk sepatu custom"
      />
    </>
  );
}

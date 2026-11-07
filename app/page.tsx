import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Media } from "@/components/Media";
import { Marquee } from "@/components/Marquee";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryCard } from "@/components/CategoryCard";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { WhatsappIcon } from "@/components/icons";
import { waLink, waMessage } from "@/lib/site";
import {
  liniUtama,
  keunggulan,
  prosesPemesanan,
  portofolio,
  faqUmum,
} from "@/lib/catalog";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <Container>
          <div className="grid gap-10 pb-10 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-16 lg:pt-16">
            {/* Teks */}
            <div className="flex flex-col justify-center">
              <Reveal
                as="p"
                className="eyebrow mb-6 flex items-center gap-2.5 text-green-deep"
              >
                <span className="brand-dot" /> Produsen · Konveksi · Custom Order
              </Reveal>
              <Reveal as="h1" delay={60} className="display-xl max-w-[16ch]">
                Produksi <span className="mark">custom</span> tas, koper &amp;
                apparel untuk brand Anda.
              </Reveal>
              <Reveal
                as="p"
                delay={120}
                className="mt-6 max-w-xl text-lg leading-8 text-ink-soft"
              >
                Samaraya memproduksi tas, koper, konveksi, dan perlengkapan
                travel secara custom — lengkap dengan desain dan branding Anda.
                Melayani komunitas, instansi, korporat, hingga travel umrah &amp;
                haji.
              </Reveal>
              <Reveal
                delay={180}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Button
                  href={waLink(waMessage())}
                  external
                  variant="accent"
                  size="lg"
                >
                  <WhatsappIcon className="h-5 w-5" />
                  Minta Penawaran
                </Button>
                <Button href="#lini" variant="outline" size="lg" arrow>
                  Lihat Kategori
                </Button>
              </Reveal>
              <Reveal
                delay={240}
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-ink-soft"
              >
                <span className="flex items-center gap-2">
                  <span className="brand-dot" /> Produksi sendiri
                </span>
                <span className="flex items-center gap-2">
                  <span className="brand-dot" /> Kustomisasi penuh
                </span>
                <span className="flex items-center gap-2">
                  <span className="brand-dot" /> Branding &amp; logo
                </span>
              </Reveal>
            </div>

            {/* Cluster gambar */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <Reveal variant="scale" className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-cream">
                    <Media
                      src="/2024/01/ransel-sailor-pomac-barang-XTtuE.jpg"
                      alt="Ransel custom Sailor Pomac"
                      fit="contain"
                      priority
                      sizes="(max-width: 1024px) 45vw, 25vw"
                    />
                  </Reveal>
                  <Reveal variant="scale" delay={120} className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-cream">
                    <Media
                      src="/2024/10/Koper-Shafira-Hitam.jpg"
                      alt="Koper hardcase custom branding"
                      fit="contain"
                      sizes="(max-width: 1024px) 45vw, 25vw"
                    />
                  </Reveal>
                </div>
                <div className="space-y-4">
                  <Reveal variant="scale" delay={60} className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-cream">
                    <Media
                      src="/2024/01/handbag-sailor-nobilis-barang-KS5Ea.jpg"
                      alt="Tas selempang custom Sailor Nobilis"
                      fit="contain"
                      priority
                      sizes="(max-width: 1024px) 45vw, 25vw"
                    />
                  </Reveal>
                  <Reveal delay={180} className="flex items-center gap-3 rounded-2xl bg-ink p-5 text-on-dark">
                    <WhatsappIcon className="h-7 w-7 shrink-0 text-green" />
                    <p className="text-sm leading-snug">
                      Konsultasi desain &amp; penawaran langsung via WhatsApp.
                    </p>
                  </Reveal>
                  <Reveal variant="scale" delay={120} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-cream">
                    <Media
                      src="/2024/06/ransel-sailor-charinuus-barang-1oF2e.jpg"
                      alt="Ransel custom Sailor Charinus"
                      fit="contain"
                      sizes="(max-width: 1024px) 45vw, 25vw"
                    />
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="mt-2">
        <Marquee
          items={[
            "Tas",
            "Koper",
            "Konveksi",
            "Seragam",
            "Jersey",
            "Topi",
            "Totebag",
            "Perlengkapan Umrah",
          ]}
        />
      </div>

      {/* ===== LINI UTAMA ===== */}
      <section id="lini" className="scroll-mt-24 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Lini Produk"
            title={
              <>
                Empat lini produksi, <br className="hidden sm:block" />
                satu standar kualitas.
              </>
            }
            description="Pilih kategori yang Anda butuhkan. Setiap lini dapat dikustomisasi penuh sesuai desain, bahan, dan branding Anda."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {liniUtama.map((k, i) => (
              <Reveal key={k.slug} delay={(i % 4) * 90}>
                <CategoryCard kategori={k} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== KEUNGGULAN ===== */}
      <section className="bg-paper-2/60 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="Kenapa Samaraya"
              title="Partner produksi yang menangani detailnya."
              description="Dari pemilihan bahan hingga pengiriman, kami bantu agar pesanan Anda selesai sesuai rencana."
            />
            <FeatureGrid items={keunggulan} />
          </div>
        </Container>
      </section>

      {/* ===== PORTOFOLIO / CUSTOM ===== */}
      <section className="noise bg-ink py-20 text-on-dark md:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              tone="light"
              eyebrow="Portofolio Produksi"
              title="Custom branding untuk travel & komunitas."
              description="Sebagian hasil produksi custom kami — dari tas, bantal leher, hingga perlengkapan travel dengan logo dan identitas masing-masing mitra."
            />
            <Reveal className="shrink-0">
              <Button
                href="/tas-dan-koper"
                variant="outline"
                arrow
                className="border-on-dark/30 text-on-dark hover:bg-on-dark hover:text-ink"
              >
                Lihat produk
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {portofolio.map((p, i) => (
              <Reveal
                key={p.src}
                delay={(i % 4) * 80}
                className={`group relative overflow-hidden rounded-2xl bg-paper-2 ${
                  i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/5] lg:mt-8"
                }`}
              >
                <Media
                  src={p.src}
                  alt={p.alt}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== PROSES ===== */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Alur Pemesanan"
            title="Dari ide ke produk jadi, lima langkah."
            description="Proses yang jelas dan terukur, dengan pendampingan tim di setiap tahap."
          />
          <div className="mt-14">
            <ProcessSteps steps={prosesPemesanan} />
          </div>
        </Container>
      </section>

      {/* ===== SPOTLIGHT UMRAH ===== */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-line bg-paper-2/50 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-14">
              <Reveal as="p" className="eyebrow mb-4 flex items-center gap-2.5 text-green-deep">
                <span className="brand-dot" /> Spesialisasi
              </Reveal>
              <Reveal as="h2" delay={60} className="display-md">
                Perlengkapan travel, umrah &amp; haji
              </Reveal>
              <Reveal as="p" delay={120} className="mt-5 max-w-lg text-[1.05rem] leading-8 text-ink-soft">
                Kami berpengalaman memproduksi paket perlengkapan untuk travel
                umrah dan haji — mulai dari koper, ransel, tas selempang, tas
                sepatu, hingga bantal leher, lengkap dengan bordir dan branding
                agen Anda.
              </Reveal>
              <Reveal delay={180} className="mt-8">
                <Button href={waLink(waMessage("paket perlengkapan travel umrah & haji"))} external variant="primary" size="lg">
                  <WhatsappIcon className="h-5 w-5" />
                  Konsultasi Paket Travel
                </Button>
              </Reveal>
            </div>
            <Reveal variant="right" className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[26rem]">
              <Media
                src="/2024/06/SAMPUL.webp"
                alt="Proses produksi dan pengemasan perlengkapan travel Samaraya"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== FAQ ===== */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <SectionHeading
              eyebrow="FAQ"
              title="Pertanyaan yang sering diajukan."
              description={
                <>
                  Belum menemukan jawabannya?{" "}
                  <Link href="/kontak" className="link-underline text-ink">
                    Hubungi kami
                  </Link>
                  .
                </>
              }
            />
            <div>
              <FaqList items={faqUmum} />
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

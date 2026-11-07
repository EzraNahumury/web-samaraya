import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { ProductOrb } from "./ProductOrb";
import { WhatsappIcon } from "./icons";
import { waLink, waMessage } from "@/lib/site";
import { tasUnggulan, koperProduk, portofolio, type Media } from "@/lib/catalog";

// Kumpulan gambar produk untuk orb — campur tas, koper, dan portofolio.
const orbImages: Media[] = [
  ...tasUnggulan,
  koperProduk[0],
  koperProduk[2],
  portofolio[0],
  portofolio[1],
];

/** Section CTA dengan galeri produk 3D berputar sebagai daya tarik. */
export function OrbCta({ context }: { context?: string }) {
  return (
    <section className="py-6">
      <Container>
        <div className="noise relative overflow-hidden rounded-3xl bg-ink px-6 py-14 md:px-12 md:py-20">
          <Reveal className="relative" variant="scale">
            <ProductOrb images={orbImages} />
          </Reveal>

          <div className="relative mx-auto mt-8 max-w-2xl text-center md:mt-10">
            <Reveal
              as="p"
              className="eyebrow mb-4 flex items-center justify-center gap-2.5 text-green"
            >
              <span className="brand-dot" /> Konsultasi Gratis
            </Reveal>
            <Reveal as="h2" delay={60} className="display-lg text-on-dark">
              Siap wujudkan produk custom Anda?
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="mx-auto mt-5 max-w-xl text-lg leading-8 text-on-dark-soft"
            >
              Geser galeri untuk menjelajah produk. Ceritakan kebutuhan Anda —
              jenis, jumlah, dan desain — tim kami bantu dari konsultasi hingga
              produksi selesai.
            </Reveal>
            <Reveal
              delay={180}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button
                href={waLink(waMessage(context))}
                external
                variant="accent"
                size="lg"
              >
                <WhatsappIcon className="h-5 w-5" />
                Konsultasi via WhatsApp
              </Button>
              <Button
                href="/kontak"
                variant="outline"
                size="lg"
                className="border-on-dark/30 text-on-dark hover:bg-on-dark hover:text-ink"
              >
                Hubungi Kami
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

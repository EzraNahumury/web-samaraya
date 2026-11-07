import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { waLink, waMessage } from "@/lib/site";
import { WhatsappIcon } from "./icons";

/** Section ajakan konsultasi dengan latar navy. Dipakai di akhir halaman. */
export function CtaBand({
  title = "Siap wujudkan produk custom Anda?",
  text = "Ceritakan kebutuhan Anda — jenis produk, jumlah, dan desain. Tim kami bantu dari konsultasi hingga produksi selesai.",
  context,
}: {
  title?: string;
  text?: string;
  context?: string;
}) {
  return (
    <section className="py-6">
      <Container>
        <div className="noise relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center md:px-16 md:py-24">
          {/* Aksen lingkaran brand */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-line-dark"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-line-dark"
          />
          <div className="relative mx-auto max-w-2xl">
            <Reveal as="p" className="eyebrow mb-5 flex items-center justify-center gap-2.5 text-green">
              <span className="brand-dot" /> Konsultasi Gratis
            </Reveal>
            <Reveal as="h2" delay={60} className="display-lg text-on-dark">
              {title}
            </Reveal>
            <Reveal as="p" delay={120} className="mx-auto mt-5 max-w-xl text-lg leading-8 text-on-dark-soft">
              {text}
            </Reveal>
            <Reveal
              delay={180}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
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
              <Button href="/kontak" variant="outline" size="lg" className="border-on-dark/30 text-on-dark hover:bg-on-dark hover:text-ink">
                Hubungi Kami
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { site, waLink, waMessage } from "@/lib/site";
import {
  WhatsappIcon,
  MailIcon,
  InstagramIcon,
  PinIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Samaraya untuk konsultasi dan permintaan penawaran produk custom — tas, koper, konveksi, dan sepatu. Respon cepat via WhatsApp.",
  alternates: { canonical: "/kontak" },
};

const kontak = [
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: waLink(waMessage()),
    external: true,
    Icon: WhatsappIcon,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
    Icon: MailIcon,
  },
  {
    label: "Instagram",
    value: "@samaraya.id",
    href: site.instagram,
    external: true,
    Icon: InstagramIcon,
  },
  {
    label: "Lokasi",
    value: site.address,
    href: null,
    external: false,
    Icon: PinIcon,
  },
];

export default function KontakPage() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="max-w-2xl">
          <Reveal as="p" className="eyebrow mb-5 flex items-center gap-2.5 text-green-deep">
            <span className="brand-dot" /> Kontak
          </Reveal>
          <Reveal as="h1" delay={60} className="display-xl">
            Mari mulai pesanan Anda.
          </Reveal>
          <Reveal as="p" delay={120} className="mt-6 text-lg leading-8 text-ink-soft">
            Punya pertanyaan atau ingin minta penawaran? Hubungi kami lewat kanal
            berikut, atau isi formulir di bawah. Konsultasi gratis.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Kanal kontak */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {kontak.map((k, i) => {
                const inner = (
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-cream p-5 transition-colors hover:border-green/50">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-green">
                      <k.Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink-soft">{k.label}</p>
                      <p className="mt-1 font-medium text-ink">{k.value}</p>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={k.label} delay={i * 70}>
                    {k.href ? (
                      <a
                        href={k.href}
                        target={k.external ? "_blank" : undefined}
                        rel={k.external ? "noopener noreferrer" : undefined}
                        className="block h-full"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={180} className="mt-6 rounded-2xl bg-ink p-6 text-on-dark">
              <p className="font-display text-lg">Jam operasional</p>
              <p className="mt-2 text-sm leading-7 text-on-dark-soft">
                Senin–Sabtu. Pesan yang masuk di luar jam kerja akan kami balas
                pada hari kerja berikutnya.
              </p>
            </Reveal>
          </div>

          {/* Formulir */}
          <Reveal variant="right" className="rounded-3xl border border-line bg-paper-2/40 p-6 md:p-8">
            <h2 className="font-display text-2xl font-medium text-ink">
              Formulir permintaan penawaran
            </h2>
            <p className="mt-2 mb-7 text-sm leading-6 text-ink-soft">
              Lengkapi data berikut. Isian akan diteruskan ke WhatsApp kami.
            </p>
            <QuoteForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

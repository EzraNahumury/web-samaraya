import type { Metadata } from "next";
import { PageHeroText, Shell } from "@/components/site/ui";
import { QuoteFormDark } from "@/components/site/QuoteFormDark";
import { Reveal } from "@/components/landing/motion";
import { InstagramIcon, MailIcon, PinIcon, WhatsappIcon } from "@/components/icons";
import { site, waLink, waMessage } from "@/lib/site";

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
  { label: "Lokasi", value: site.address, href: null, external: false, Icon: PinIcon },
];

export default function KontakPage() {
  return (
    <>
      <PageHeroText
        breadcrumb="Kontak"
        eyebrow="Kontak"
        title="Mari mulai pesanan Anda."
        desc="Punya pertanyaan atau ingin minta penawaran? Hubungi kami lewat kanal berikut, atau isi formulir di bawah. Konsultasi gratis."
      />

      <section className="pb-20 md:pb-28">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Kanal kontak */}
            <div>
              <Reveal className="grid gap-4 sm:grid-cols-2">
                {kontak.map((k) => {
                  const inner = (
                    <div className="flex h-full items-start gap-4 rounded-card border border-white/[.08] bg-card-grad p-5 transition-colors hover:border-green/40">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-green/15 text-green">
                        <k.Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-[13px] text-muted">{k.label}</p>
                        <p className="mt-1 text-[15px] text-fg">{k.value}</p>
                      </div>
                    </div>
                  );
                  return k.href ? (
                    <a
                      key={k.label}
                      href={k.href}
                      target={k.external ? "_blank" : undefined}
                      rel={k.external ? "noopener noreferrer" : undefined}
                      className="block h-full"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={k.label}>{inner}</div>
                  );
                })}
              </Reveal>

              <Reveal className="mt-4 rounded-card border border-white/[.08] bg-card-grad p-6">
                <p className="text-[17px] text-fg">Jam operasional</p>
                <p className="mt-2 text-[14px] text-muted leading-7">
                  Senin–Sabtu. Pesan yang masuk di luar jam kerja akan kami balas pada hari kerja
                  berikutnya.
                </p>
              </Reveal>
            </div>

            {/* Formulir */}
            <Reveal className="rounded-card border border-white/[.08] bg-card-grad p-6 md:p-8">
              <h2 className="text-[22px] text-fg">Formulir permintaan penawaran</h2>
              <p className="mt-2 mb-7 text-[14px] text-muted leading-6">
                Lengkapi data berikut. Isian akan diteruskan ke WhatsApp kami.
              </p>
              <QuoteFormDark />
            </Reveal>
          </div>
        </Shell>
      </section>
    </>
  );
}

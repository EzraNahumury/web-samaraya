import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { Media } from "./Media";
import { waLink, waMessage } from "@/lib/site";
import { WhatsappIcon } from "./icons";

type HeroMedia = {
  src: string;
  alt: string;
  pos?: string;
  fit?: "cover" | "contain";
};

/** Hero standar untuk halaman kategori & sub-halaman. */
export function PageHero({
  eyebrow,
  title,
  description,
  media,
  waContext,
  secondary,
  breadcrumb,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  media: HeroMedia;
  waContext?: string;
  secondary?: { label: string; href: string };
  breadcrumb?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Teks */}
          <div className="order-2 lg:order-1">
            {breadcrumb && (
              <Reveal
                as="nav"
                className="mb-6 flex items-center gap-2 text-sm text-ink-soft"
              >
                <Link href="/" className="hover:text-ink">
                  Beranda
                </Link>
                <span aria-hidden>/</span>
                <span className="text-ink">{breadcrumb}</span>
              </Reveal>
            )}
            <Reveal
              as="p"
              className="eyebrow mb-5 flex items-center gap-2.5 text-green-deep"
            >
              <span className="brand-dot" /> {eyebrow}
            </Reveal>
            <Reveal as="h1" delay={60} className="display-xl">
              {title}
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="mt-6 max-w-xl text-lg leading-8 text-ink-soft"
            >
              {description}
            </Reveal>
            <Reveal
              delay={180}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                href={waLink(waMessage(waContext))}
                external
                variant="accent"
                size="lg"
              >
                <WhatsappIcon className="h-5 w-5" />
                Minta Penawaran
              </Button>
              {secondary && (
                <Button href={secondary.href} variant="outline" size="lg" arrow>
                  {secondary.label}
                </Button>
              )}
            </Reveal>
          </div>

          {/* Media */}
          <Reveal
            variant="scale"
            delay={120}
            className="order-1 lg:order-2"
          >
            <div
              className={`relative aspect-square overflow-hidden rounded-3xl border border-line ${
                media.fit === "contain" ? "bg-cream" : "bg-paper-2"
              } sm:aspect-[5/4] lg:aspect-square`}
            >
              <Media
                src={media.src}
                alt={media.alt}
                position={media.pos}
                fit={media.fit ?? "cover"}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

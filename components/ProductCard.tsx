import { waLink, waMessage } from "@/lib/site";
import type { Produk } from "@/lib/catalog";
import { Media } from "./Media";

type Props = {
  produk: Produk;
  /** Konteks untuk pesan WhatsApp (mis. nama kategori). */
  context?: string;
  fit?: "cover" | "contain";
  ratio?: string; // kelas aspect Tailwind
  caption?: boolean;
  sizes?: string;
};

/**
 * Kartu produk. Seluruh kartu adalah CTA — menekannya membuka WhatsApp
 * dengan pesan penawaran yang sudah terisi nama produk.
 */
export function ProductCard({
  produk,
  context,
  fit = "contain",
  ratio = "aspect-[4/5]",
  caption = true,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw",
}: Props) {
  const href = waLink(
    waMessage(context ? `${produk.nama} (${context})` : produk.nama),
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      aria-label={`Minta penawaran ${produk.nama}`}
    >
      <div
        className={`relative ${ratio} overflow-hidden rounded-xl border border-line ${
          fit === "contain" ? "bg-cream" : "bg-paper-2"
        }`}
      >
        <Media
          src={produk.src}
          alt={produk.alt}
          fit={fit}
          position={produk.pos}
          sizes={sizes}
        />

        {produk.tag && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-paper/85 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-ink-soft backdrop-blur-sm">
            {produk.tag}
          </span>
        )}

        {/* Overlay CTA muncul saat hover */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-full bg-gradient-to-t from-ink/80 to-transparent p-4 pt-10 text-sm font-medium text-on-dark transition-transform duration-400 group-hover:translate-y-0">
          Minta penawaran
          <span aria-hidden className="ml-1 text-green">
            ↗
          </span>
        </span>
      </div>

      {caption && (
        <div className="mt-3 flex items-center justify-between gap-3">
          <h3 className="text-[1.02rem] font-medium leading-snug text-ink">
            {produk.nama}
          </h3>
          <span
            aria-hidden
            className="text-ink-soft transition-colors group-hover:text-green-deep"
          >
            →
          </span>
        </div>
      )}
    </a>
  );
}

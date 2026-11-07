import Link from "next/link";
import type { Kategori } from "@/lib/catalog";
import { Media } from "./Media";

/**
 * Kartu lini produk untuk homepage — gambar full-bleed dengan overlay
 * teks di bawah. Menautkan ke halaman kategori terkait.
 */
export function CategoryCard({
  kategori,
  priority = false,
  className = "",
}: {
  kategori: Kategori;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={kategori.href}
      className={`group relative block overflow-hidden rounded-2xl bg-ink ${className}`}
    >
      <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
        <Media
          src={kategori.cover.src}
          alt={kategori.cover.alt}
          position={kategori.cover.pos}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-2xl font-medium text-on-dark">
            {kategori.nama}
          </h3>
          <span
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-on-dark/30 text-on-dark transition-all duration-300 group-hover:border-green group-hover:bg-green group-hover:text-white"
          >
            ↗
          </span>
        </div>
        <p className="mt-2 max-w-xs text-sm leading-6 text-on-dark-soft">
          {kategori.ringkas}
        </p>
      </div>
    </Link>
  );
}

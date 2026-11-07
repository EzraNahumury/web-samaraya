import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** object-position, mis. "center top" untuk memotong label bawah. */
  position?: string;
  /** Mode penyesuaian gambar dalam kontainer. */
  fit?: "cover" | "contain";
  /** Zoom halus saat parent .group di-hover. */
  zoom?: boolean;
  className?: string;
};

/**
 * Gambar yang mengisi penuh kontainer ber-posisi relatif.
 * Pembungkus (caller) mengatur rasio/overflow/radius. Menggunakan
 * next/image untuk optimasi otomatis (WebP, lazy, srcset).
 */
export function Media({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  position,
  fit = "cover",
  zoom = true,
  className = "",
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${
        zoom ? "img-zoom" : ""
      } ${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}

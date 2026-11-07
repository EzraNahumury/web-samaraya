import Link from "next/link";
import Image from "next/image";

/**
 * Logo resmi Samaraya dalam bingkai bulat. Latar lingkaran disamakan dengan
 * warna latar logo lalu gambar di-contain di dalamnya, sehingga tampil bulat
 * penuh tanpa memotong wordmark "SAMARAYA". `tone` dipertahankan untuk
 * kompatibilitas pemanggil.
 */
export function Logo({
  className = "",
}: {
  tone?: "ink" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Samaraya — Beranda"
      className={`inline-flex items-center ${className}`}
    >
      <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#20242c] md:h-14 md:w-14">
        <Image
          src="/2024/04/Untitled-design-6.png"
          alt="Samaraya"
          width={200}
          height={200}
          priority
          className="h-[82%] w-[82%] object-contain"
        />
      </span>
    </Link>
  );
}

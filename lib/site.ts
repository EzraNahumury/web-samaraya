// Konfigurasi global situs Samaraya.
// Nilai yang ditandai TODO adalah placeholder yang harus diganti dengan data
// resmi bisnis sebelum go-live (lihat README bagian 14 — Hal yang Perlu Dikonfirmasi).

export const site = {
  name: "Samaraya",
  tagline: "Produsen & Konveksi Custom",
  description:
    "Samaraya adalah produsen dan konveksi custom untuk tas, koper, apparel, dan perlengkapan travel. Produksi sendiri, bisa kustomisasi desain dan branding, melayani pesanan komunitas, instansi, korporat, hingga travel umrah & haji.",
  url: "https://www.samaraya.id",

  // Kontak — ganti dengan data resmi sebelum publikasi.
  whatsapp: "6281234567890", // TODO: ganti nomor WhatsApp resmi (format internasional tanpa +)
  email: "halo@samaraya.id", // TODO: verifikasi email resmi
  phoneDisplay: "+62 812-3456-7890", // TODO: verifikasi
  address: "Indonesia", // TODO: lengkapi alamat workshop/kantor
  instagram: "https://instagram.com/samaraya.id", // TODO: verifikasi

  locale: "id-ID",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Tas & Koper", href: "/tas-dan-koper" },
  { label: "Koper", href: "/koper" },
  { label: "Konveksi", href: "/konveksi" },
  { label: "Sepatu", href: "/sepatu" },
  { label: "Tentang", href: "/tentang-kami" },
  { label: "Kontak", href: "/kontak" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Lini Produk",
    items: [
      { label: "Tas & Koper", href: "/tas-dan-koper" },
      { label: "Koper", href: "/koper" },
      { label: "Konveksi", href: "/konveksi" },
      { label: "Sepatu", href: "/sepatu" },
    ],
  },
  {
    title: "Perusahaan",
    items: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Kontak", href: "/kontak" },
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    ],
  },
];

/**
 * Membangun tautan WhatsApp dengan pesan awal yang sudah terisi.
 * Dipakai oleh seluruh CTA konsultasi di situs.
 */
export function waLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Pesan awal WhatsApp standar berdasarkan konteks kategori/produk. */
export function waMessage(context?: string): string {
  if (!context) {
    return `Halo ${site.name}, saya ingin berkonsultasi mengenai produk custom. Mohon informasi pilihan produk, opsi kustomisasi, minimum pemesanan, dan estimasi produksi.`;
  }
  return `Halo ${site.name}, saya tertarik dengan ${context}. Saya ingin mengetahui informasi produk, opsi custom, minimum pemesanan, dan estimasi waktu produksi.`;
}

import Image from "next/image";
import Link from "next/link";
import { waLink, waMessage } from "@/lib/site";

/** Footer gelap Samaraya — konsisten dengan homepage, dipakai di semua halaman non-home. */
export function SiteFooter() {
  const cols = [
    {
      title: "Lini Produk",
      links: [
        ["Tas & Koper", "/tas-dan-koper"],
        ["Koper", "/koper"],
        ["Konveksi", "/konveksi"],
        ["Sepatu", "/sepatu"],
      ],
    },
    {
      title: "Perusahaan",
      links: [
        ["Tentang Kami", "/tentang-kami"],
        ["Kontak", "/kontak"],
        ["WhatsApp", waLink(waMessage())],
        ["Kebijakan Privasi", "/kebijakan-privasi"],
      ],
    },
  ];
  return (
    <footer className="relative border-t border-white/[.06] bg-black">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 pt-16 pb-10 md:grid-cols-[2fr_1fr_1fr] md:px-6">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center overflow-hidden rounded-full bg-[#20242c]">
              <Image
                src="/2024/04/Untitled-design-6.png"
                alt=""
                width={48}
                height={48}
                className="size-[82%] object-contain"
              />
            </span>
            <span className="text-[18px] font-medium tracking-tight text-fg">Samaraya</span>
          </Link>
          <p className="mt-4 max-w-[320px] text-[13px] text-dim leading-relaxed">
            Produsen &amp; konveksi custom untuk tas, koper, apparel, dan perlengkapan travel.
            Produksi sendiri dengan kustomisasi desain &amp; branding.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-[13px] text-text">{c.title}</p>
            <ul className="mt-4 space-y-2.5 text-[13px] text-dim">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  {href.startsWith("/") ? (
                    <Link href={href} className="transition-colors hover:text-fg">
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-fg"
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-4 pb-16 text-[12px] text-dim sm:flex-row sm:justify-between md:px-6">
        <span>© 2026 Samaraya. Seluruh hak cipta dilindungi.</span>
        <span>Produsen &amp; Konveksi Custom</span>
      </div>
    </footer>
  );
}

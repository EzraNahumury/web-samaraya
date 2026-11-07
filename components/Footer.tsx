import Link from "next/link";
import { footerNav, site, waLink, waMessage } from "@/lib/site";
import { Logo } from "./Logo";
import { InstagramIcon, MailIcon, WhatsappIcon } from "./icons";

export function Footer() {
  return (
    <footer className="noise mt-auto bg-ink text-on-dark">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-[0.98rem] leading-7 text-on-dark-soft">
              Produsen & konveksi custom untuk tas, koper, apparel, dan
              perlengkapan travel. Produksi sendiri dengan opsi kustomisasi
              desain dan branding sesuai kebutuhan Anda.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={waLink(waMessage())}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-on-dark transition-colors hover:border-green hover:text-green"
              >
                <WhatsappIcon className="h-5 w-5" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-on-dark transition-colors hover:border-green hover:text-green"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-on-dark transition-colors hover:border-green hover:text-green"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nav kolom */}
          {footerNav.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <h3 className="eyebrow mb-5 text-on-dark-soft">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.98rem] text-on-dark/90 transition-colors hover:text-green"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Kontak */}
          <div className="md:col-span-1 md:min-w-max">
            <h3 className="eyebrow mb-5 text-on-dark-soft">Kontak</h3>
            <ul className="space-y-3 text-[0.98rem] text-on-dark/90">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-green">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={waLink(waMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green"
                >
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line-dark pt-7 text-sm text-on-dark-soft sm:flex-row sm:items-center">
          <p>© 2026 {site.name}. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <Link href="/kebijakan-privasi" className="hover:text-green">
              Kebijakan Privasi
            </Link>
            <Link href="/kontak" className="hover:text-green">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

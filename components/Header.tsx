"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, waLink, waMessage } from "@/lib/site";
import { Logo } from "./Logo";
import { WhatsappIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Homepage bertema gelap: header transparan di atas, kaca gelap saat scroll.
  const isHome = pathname === "/";
  const atTop = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const headerBg = isHome
    ? scrolled
      ? "border-b border-white/10 bg-[#0b0b0d]/85 backdrop-blur-md"
      : "border-b border-transparent bg-transparent"
    : scrolled
      ? "border-b border-line bg-paper/90 backdrop-blur-md"
      : "border-b border-transparent bg-paper/60 backdrop-blur-sm";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="shell flex h-16 items-center justify-between md:h-18">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            const color = isHome
              ? active
                ? "text-white [background-size:100%_2px]"
                : "text-white/65 hover:text-white"
              : active
                ? "text-ink [background-size:100%_2px]"
                : "text-ink-soft hover:text-ink";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-[0.95rem] transition-colors ${color}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(waMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden h-11 items-center gap-2 rounded-full px-5 text-[0.95rem] font-medium transition-colors sm:inline-flex ${
              isHome
                ? "bg-[var(--lp-green)] text-[#07130a] hover:brightness-110"
                : "bg-ink text-on-dark hover:bg-navy"
            }`}
          >
            <WhatsappIcon className="h-[1.1rem] w-[1.1rem]" />
            Konsultasi
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className={`relative flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
              atTop ? "border-white/25 text-white" : isHome ? "border-white/15 text-white" : "border-line text-ink"
            }`}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col items-center justify-center gap-[5px]">
              <span className={`block h-[1.5px] w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Overlay menu mobile */}
      <div
        className={`fixed inset-0 top-16 z-40 origin-top transition-all duration-300 lg:hidden ${
          isHome ? "bg-[#0b0b0d]" : "bg-paper"
        } ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <nav className="shell flex flex-col gap-1 py-8" aria-label="Navigasi mobile">
          {mainNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-display text-3xl font-medium tracking-tight transition-colors ${
                isActive(item.href)
                  ? isHome
                    ? "text-[var(--lp-green-soft)]"
                    : "text-green-deep"
                  : isHome
                    ? "text-white"
                    : "text-ink"
              }`}
              style={{
                transitionDelay: open ? `${i * 40 + 60}ms` : "0ms",
                transform: open ? "none" : "translateY(10px)",
                opacity: open ? 1 : 0,
              }}
            >
              <span className={`flex items-center justify-between border-b py-3.5 ${isHome ? "border-white/10" : "border-line"}`}>
                {item.label}
                <span aria-hidden className={isHome ? "text-[var(--lp-green-soft)]" : "text-green"}>
                  ↗
                </span>
              </span>
            </Link>
          ))}
          <a
            href={waLink(waMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-flex h-13 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold ${
              isHome ? "bg-[var(--lp-green)] text-[#07130a]" : "bg-green text-white"
            }`}
          >
            <WhatsappIcon className="h-5 w-5" />
            Konsultasi via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

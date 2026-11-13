"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, waLink, waMessage } from "@/lib/site";
import { WhatsappIcon } from "./icons";

/** Nav gelap konsisten dengan homepage (logo + pill nav + Konsultasi). */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Samaraya — Beranda">
          <span className="grid size-9 place-items-center overflow-hidden rounded-full bg-[#20242c]">
            <Image
              src="/2024/04/Untitled-design-6.png"
              alt=""
              width={48}
              height={48}
              priority
              className="size-[82%] object-contain"
            />
          </span>
          <span className="text-[18px] font-medium tracking-tight text-[var(--fg)]">
            Samaraya
          </span>
        </Link>

        {/* pill nav (desktop) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/[.08] bg-gradient-to-b from-white/[.07] to-white/[.02] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_10px_30px_rgba(0,0,0,.45)] lg:flex">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`block whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] transition-colors ${
                    active
                      ? "bg-white/[.1] text-[var(--fg)] shadow-[inset_0_1px_0_rgba(255,255,255,.1)]"
                      : "text-[var(--muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={waLink(waMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full bg-[var(--lp-green,#4ade80)] px-5 text-[0.9rem] font-semibold text-[#07130a] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <WhatsappIcon className="h-[1.1rem] w-[1.1rem]" />
            Konsultasi
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
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

      {/* overlay mobile */}
      <div
        className={`fixed inset-0 top-[72px] z-40 origin-top bg-black transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1240px] flex-col gap-1 px-4 py-8 md:px-6" aria-label="Navigasi mobile">
          {mainNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-display text-3xl font-medium tracking-tight transition-colors ${
                isActive(item.href) ? "text-[var(--lp-green-soft,#9bd36a)]" : "text-white"
              }`}
              style={{
                transitionDelay: open ? `${i * 40 + 60}ms` : "0ms",
                transform: open ? "none" : "translateY(10px)",
                opacity: open ? 1 : 0,
              }}
            >
              <span className="flex items-center justify-between border-b border-white/10 py-3.5">
                {item.label}
                <span aria-hidden className="text-[var(--lp-green-soft,#9bd36a)]">↗</span>
              </span>
            </Link>
          ))}
          <a
            href={waLink(waMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[var(--lp-green,#4ade80)] px-6 text-base font-semibold text-[#07130a]"
          >
            <WhatsappIcon className="h-5 w-5" />
            Konsultasi via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

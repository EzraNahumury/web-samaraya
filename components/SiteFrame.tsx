"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SmoothScroll } from "./landing/motion";
import { SiteFooter } from "./site/SiteFooter";
import { Header } from "./Header";
import { WhatsappFloat } from "./WhatsappFloat";

/**
 * Homepage memakai UI landing yang punya nav + footer sendiri. Halaman lain
 * dibungkus dunia gelap (.luora-root) dengan chrome Samaraya: nav gelap,
 * smooth-scroll + reveal seperti homepage, footer gelap, dan tombol WhatsApp.
 */
export function SiteFrame({ children }: { children: ReactNode }) {
  const isHome = usePathname() === "/";
  if (isHome) return <>{children}</>;
  return (
    <div className="luora-root flex min-h-dvh flex-col bg-black">
      <Header />
      <SmoothScroll>
        <main className="flex-1">{children}</main>
      </SmoothScroll>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  );
}

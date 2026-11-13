"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappFloat } from "./WhatsappFloat";

/**
 * Homepage memakai UI Luora yang punya nav + footer sendiri, jadi chrome
 * Samaraya (Header/Footer/WhatsappFloat) hanya dirender di halaman lain.
 */
export function SiteFrame({ children }: { children: ReactNode }) {
  const isHome = usePathname() === "/";
  if (isHome) return <>{children}</>;
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}

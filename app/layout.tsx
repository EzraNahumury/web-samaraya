import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Samaraya — Produsen & Konveksi Custom Tas, Koper & Apparel",
    template: "%s — Samaraya",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "produsen tas custom",
    "pabrik tas dan koper",
    "konveksi custom",
    "koper custom",
    "perlengkapan umrah haji",
    "tas custom logo",
    "seragam custom",
    "Samaraya",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title: "Samaraya — Produsen & Konveksi Custom",
    description: site.description,
    url: site.url,
    images: [{ url: "/2024/06/SAMPUL.webp", alt: "Produksi Samaraya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samaraya — Produsen & Konveksi Custom",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f5f0",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${fraunces.variable} ${hanken.variable}`}>
      <body className="flex min-h-dvh flex-col bg-paper">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}

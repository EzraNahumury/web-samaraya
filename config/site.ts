/**
 * Di mana Samaraya tampil publik: canonical, sitemap, dan kartu sosial mengarah ke sini.
 * NEXT_PUBLIC_URL (saat deploy) menang; build lokal jatuh ke domain publik.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_URL || "https://www.samaraya.id"
).replace(/\/+$/, "");

export const SITE_NAME = "Samaraya";
export const SITE_TITLE =
  "Samaraya — Produsen & Konveksi Custom Tas, Koper & Apparel";
export const SITE_DESCRIPTION =
  "Samaraya adalah produsen & konveksi custom untuk tas, koper, apparel, dan perlengkapan travel. Produksi sendiri dengan kustomisasi desain & branding; melayani komunitas, instansi, korporat, hingga travel umrah & haji.";
export const X_HANDLE = "@samaraya.id";

export const LOCAL_APP = false;

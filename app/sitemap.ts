import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/tas-dan-koper",
  "/koper",
  "/konveksi",
  "/sepatu",
  "/tentang-kami",
  "/kontak",
  "/kebijakan-privasi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

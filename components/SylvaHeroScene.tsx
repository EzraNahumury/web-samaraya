"use client";

import "@designcodeio/threeui/style.css";
import { SylvaHero } from "@designcodeio/threeui/components/SylvaHero";

/**
 * Hero 3D "living world" dari ThreeUI (@designcodeio/threeui), di-render
 * sebagai iframe yang memuat /landing-pages/inner-green-3d.html.
 * Teks halaman sudah di-rebrand ke Samaraya (lihat public/landing-pages/).
 */
export function SylvaHeroScene() {
  return (
    <div className="shader-frame">
      <SylvaHero
        headingFont="lexend"
        bodyFont="lexend"
        headingWeight="300"
        bodyWeight="300"
        primaryColor="#ffffff"
        headingSize={63}
        bodySize={16.5}
        headingLetterSpacing={-0.006}
      />
    </div>
  );
}

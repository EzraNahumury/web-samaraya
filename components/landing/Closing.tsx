import Image from "next/image";
import Link from "next/link";
import { waLink, waMessage } from "@/lib/site";
import { CityHorizon } from "./CityHorizon";
import { CompareWorlds } from "./CompareTable";
import { WhatsappIcon } from "@/components/icons";
import { FinaleRise } from "./Haze";
import { Reveal } from "./motion";

/**
 * Twelfth pass (C1–C3 in CompareTable.tsx, index.ts): an editorial title over three rows, each one
 * two worlds, the raw text forge and the analyzer CLIs print beside the same run as Luora renders
 * it, a lit seam wiping from one to the other with the scroll; on wide screens the block pins and
 * the rows take turns (CompareTable staged()).
 */
export function Compare() {
  return (
    <section
      data-tone="compare"
      className="mx-auto max-w-[1240px] px-4 pb-32 md:px-6"
    >
      {/* no Exit wrapper here: its transform would make the stage's position:fixed pin scroll */}
      <CompareWorlds />
    </section>
  );
}

/** the filter tabs; `all` shows every question */
const CATS = [
  ["all", "Semua"],
  ["setup", "Pemesanan"],
  ["findings", "Produk & Custom"],
  ["privacy", "Pengiriman"],
] as const;
type Cat = Exclude<(typeof CATS)[number][0], "all">;

const FAQ: [Cat, string, string][] = [
  [
    "setup",
    "Bagaimana cara memesan?",
    "Hubungi kami via WhatsApp, sampaikan kebutuhan Anda, lalu kami bantu dari penyusunan desain, penawaran, sampel, hingga produksi selesai.",
  ],
  [
    "findings",
    "Apakah bisa custom desain dan logo sendiri?",
    "Bisa. Desain, bahan, warna, dan penempatan logo (sablon, bordir, atau label custom) dapat disesuaikan. Tim kami membantu menyiapkan desain hingga siap produksi.",
  ],
  [
    "setup",
    "Berapa minimum pemesanan (MOQ)?",
    "Minimum pemesanan menyesuaikan jenis produk dan tingkat kustomisasi. Silakan konsultasi via WhatsApp agar kami informasikan sesuai kebutuhan Anda.",
  ],
  [
    "findings",
    "Produk apa saja yang bisa diproduksi?",
    "Tas & koper, konveksi (kaos, jersey, jaket, seragam, topi), perlengkapan travel umrah & haji, hingga sepatu dan tas sepatu custom.",
  ],
  [
    "setup",
    "Berapa lama estimasi waktu produksi?",
    "Estimasi bergantung pada jumlah, jenis produk, dan antrean produksi. Estimasi pasti kami sampaikan saat penawaran.",
  ],
  [
    "privacy",
    "Bagaimana pengiriman pesanannya?",
    "Produk dikemas rapi dan dikirim ke seluruh Indonesia. Pesanan dapat dikirim ke satu atau beberapa alamat sesuai kebutuhan distribusi Anda.",
  ],
];

/**
 * F1 pin/310255861851860168 ('FAQ1', Fora 'Answers to the questions that come up most'): a small
 * FAQ pill over the heading, a short line to its right; below, a card of category tabs on the
 * left with a 'Got questions?' card at its foot, and the questions as separate rounded cards on
 * the right, each with a chevron in a ring. Still no JS: the tabs are radios, the filter is CSS
 * (landing.css .lp-faq), every question a native <details> whose body eases open and shut
 * (::details-content height + the answer fading in, CSS only).
 */
export function Faq() {
  return (
    <section
      id="faq"
      data-tone="faq"
      className="lp-faq mx-auto max-w-[1240px] px-4 pb-32 md:px-6"
    >
      <Reveal className="grid gap-5 md:grid-cols-2 md:items-end md:gap-10">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[.08] bg-white/[.04] px-3 py-1 text-[12px] text-muted">
            <span className="size-1.5 rounded-full bg-white/60" />
            FAQ
          </p>
          {/* F1: a regular-weight, one-tone two-line title, as the ref sets it */}
          <h2 className="max-w-[560px] font-normal text-[clamp(30px,3.4vw,46px)] text-fg leading-[1.12] tracking-[-0.025em]">
            Pertanyaan yang paling sering ditanyakan.
          </h2>
        </div>
        <p className="max-w-[400px] text-[15px] text-muted leading-relaxed md:justify-self-end">
          Seputar pemesanan, kustomisasi, produksi, dan pengiriman produk custom
          Anda.
        </p>
      </Reveal>

      <Reveal
        delay={0.08}
        className="mt-10 grid gap-3 md:mt-14 md:grid-cols-[260px_minmax(0,1fr)] md:grid-rows-[auto_1fr] md:gap-4"
      >
        {/* F1: the category tabs (radios, so the filter needs no JS) */}
        <fieldset className="grid grid-cols-2 gap-1 rounded-[16px] border border-white/[.07] bg-[#0e0e10] p-1.5 md:flex md:flex-col">
          <legend className="sr-only">Filter the questions</legend>
          {CATS.map(([id, label]) => (
            <label
              key={id}
              className="flex h-10 cursor-pointer items-center justify-center rounded-[11px] px-3 text-[13.5px] text-muted transition-colors hover:text-fg has-[:checked]:bg-gradient-to-b has-[:checked]:from-white/[.09] has-[:checked]:to-white/[.04] has-[:checked]:text-fg has-[:checked]:shadow-[inset_0_1px_0_rgba(255,255,255,.08)] has-[:focus-visible]:ring-1 has-[:focus-visible]:ring-white/30"
            >
              <input
                type="radio"
                name="faq-cat"
                value={id}
                defaultChecked={id === "all"}
                className="sr-only"
              />
              {label}
            </label>
          ))}
        </fieldset>

        {/* F1: every question its own rounded card, a chevron in a ring */}
        <div className="space-y-2.5 md:col-start-2 md:row-span-2 md:row-start-1">
          {FAQ.map(([cat, q, a]) => (
            <details
              key={q}
              data-cat={cat}
              className="group rounded-[16px] border border-white/[.07] bg-gradient-to-b from-[#151517] to-[#0f0f11] px-5 transition-colors hover:border-white/[.12] open:border-white/[.12] md:px-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex min-h-[62px] cursor-pointer list-none items-center justify-between gap-6 py-3 text-[15px] text-fg md:text-[16px]">
                {q}
                <span className="grid size-8 flex-none place-items-center rounded-full border border-white/[.1] bg-white/[.03] text-muted transition-transform duration-300 group-open:rotate-180">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="size-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-[600px] pb-5 text-[14px] text-muted leading-relaxed">
                {a}
              </p>
            </details>
          ))}
        </div>

        {/* F1: 'Got questions?' at the foot of the left column */}
        <div className="rounded-[16px] border border-white/[.07] bg-[#0e0e10] p-5 md:col-start-1 md:row-start-2 md:self-end">
          <p className="text-[17px] text-fg">Masih ada pertanyaan?</p>
          <p className="mt-2 text-[13.5px] text-muted leading-relaxed">
            Chat tim kami via WhatsApp dengan kebutuhan Anda — kami bantu dari
            desain sampai produk jadi.
          </p>
          <a
            href={waLink(waMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] text-fg transition-colors hover:text-white"
          >
            Chat WhatsApp
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/**
 * R13 (ZERO) + R14 (SurveilTrack): the closing CTA and the footer share one full-bleed scene, a
 * glowing horizon carrying a dark city that rises with the scroll (FinaleRise, Genie's closing
 * clouds). R2 starburst stays above the headline.
 */
export function Finale() {
  return (
    <FinaleRise city={<CityHorizon />} footer={<Footer />}>
      <FinalCta />
    </FinaleRise>
  );
}

/** R8 (onorca.dev "Get Orca") + R2 (starburst): the two actions, no card, over the scene. */
export function FinalCta() {
  return (
    <div className="relative mx-auto max-w-[1240px] px-4 pt-28 pb-[330px] md:px-6 md:pt-36 md:pb-[clamp(200px,24vw,340px)]">
      <div data-lp="finale-body" className="relative text-center">
        <div>
          {/* the breathing runs on the <svg> box itself (not an inner <g>), so it stays on the
              compositor: no style / layout pass every frame while the finale is on screen */}
          <svg
            aria-hidden="true"
            viewBox="-40 -40 80 80"
            className="lp-breathe relative mx-auto mb-8 size-12"
            stroke="#fff"
            strokeWidth="2.5"
          >
            <path d="M0-7V-34M0 7V34M-7 0H-34M7 0H34" />
            <path d="M6-6L19-19M-6 6L-19 19M-6-6L-19-19M6 6L19 19" />
          </svg>
          <h2 className="relative font-light text-[clamp(36px,5.6vw,72px)] text-fg leading-[1.02] tracking-[-0.035em]">
            Siap wujudkan produk custom Anda?
          </h2>
          <p className="relative mx-auto mt-5 max-w-[480px] text-[16px] text-muted leading-relaxed">
            Ceritakan kebutuhan Anda — jenis produk, jumlah, dan target waktu.
            Tim kami bantu dari desain sampai produk jadi.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={waLink(waMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-medium text-[14px] text-primary-fg transition-colors hover:bg-white"
            >
              <WhatsappIcon className="size-4" />
              Minta Penawaran
            </a>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 rounded-full border border-white/[.09] bg-raised px-5 py-2.5 text-[14px] text-fg transition-colors hover:bg-hover"
            >
              Hubungi Kami
            </Link>
          </div>
          <p className="relative mt-8 font-mono text-[12px] text-dim">
            Konsultasi gratis · Respon cepat via WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
}

/** R8 (onorca.dev footer): brand line left, link columns right, hairline top. */
export function Footer() {
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
    <footer className="bg-black">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 pt-16 pb-10 md:grid-cols-[2fr_1fr_1fr] md:px-6">
        <div>
          <span className="flex items-center gap-2.5">
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
          </span>
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
                  <a href={href} className="transition-colors hover:text-fg">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1240px] justify-between px-4 pb-16 text-[12px] text-dim md:px-6">
        <span>© 2026 Samaraya. Seluruh hak cipta dilindungi.</span>
        <span>Produsen &amp; Konveksi Custom</span>
      </div>
    </footer>
  );
}

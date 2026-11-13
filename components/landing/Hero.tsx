/*
 * Hero refs (eighteenth pass: one ref, HA nav kept):
 *  HA https://id.pinterest.com/pin/760404718381966789/ — Triopixels: glass pill nav
 *  HK https://id.pinterest.com/pin/119767671335610696/ — 'The world's richest Memory Library':
 *     a small title + grey subtitle top-left with two dark metric chips (icon · label: value)
 *     under it, a three-line paragraph top-right, and the rest of the screen a chart of thin
 *     vertical hairlines rising from the bottom edge, one bar white with a rotated value label
 *     and a coloured dot above it.
 *  Nineteenth pass ("hapus saja bagian ini, ganti jadi fokus kita yang visualisasi smart contract
 *  dan scenario testing"): HK's header kept, its chart replaced by the Lab itself (HeroLab).
 */
import Image from "next/image";
import Link from "next/link";
import { ChainLogo, PH, PhIcon, SOLIDITY } from "@/components/ui";
import { GitHubMark } from "./GitHubMark";
import { HeroExit } from "./Haze";
import { ProductTabs } from "./ProductTabs";
import { ScatterGrow } from "./ScatterGrow";
import InfiniteSpiral from "./InfiniteSpiral";
import { XMark } from "./XMark";
import { WhatsappIcon } from "@/components/icons";
import { mainNav, waLink, waMessage } from "@/lib/site";
import "./header.css";
import "./hero.css";

export const GITHUB = "https://github.com/0xpochita/luora";
export const DOCS = "/docs";

type Delay = React.CSSProperties & {
  "--d"?: string;
  "--n"?: number;
  "--i"?: number;
};

/**
 * HA pin/760404718381966789 (Triopixels): wordmark left, one glass pill in the middle, a quiet
 * pill right, a hairline under the bar with '+' at its ends. (The active item's dot was dropped.) The glass is a gradient + inner
 * highlight, not backdrop-filter, so scrolling never re-blurs it.
 */
export function Nav({ active = "product" }: { active?: "product" | "docs" }) {
  // the landing's sections by anchor; from another page (Docs) they go back to the landing
  const docs = active === "docs";
  const items = mainNav.map((n) => ({
    label: n.label,
    href: n.href,
    on: false,
    mark: false,
  }));
  return (
    <nav className="lh-up relative z-20 mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2.5" aria-label="Samaraya">
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
      </Link>
      {/* the landing's sections; the docs keep a quiet bar (onorca.dev/docs) without them */}
      <ul
        className={`absolute left-1/2 -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/[.08] bg-gradient-to-b from-white/[.07] to-white/[.02] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_10px_30px_rgba(0,0,0,.45)] ${docs ? "hidden" : "hidden md:flex"}`}
      >
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              aria-current={i.on ? "page" : undefined}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] transition-colors ${
                i.on
                  ? "bg-white/[.1] text-fg shadow-[inset_0_1px_0_rgba(255,255,255,.1)]"
                  : "text-muted hover:text-fg"
              }`}
            >
              {i.mark && <GitHubMark className="size-3.5" />}
              {i.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        {/* on the docs, where to follow the project sits by the call to action as bare marks
            (onorca.dev/docs: Discord, X and GitHub left of Download, no fill) */}
        {docs && (
          <span className="mr-2 flex items-center gap-1">
            <a
              href="https://x.com/luorasec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Luora on X"
              title="Follow @luorasec on X"
              className="grid size-8 place-items-center text-muted transition-colors hover:text-fg"
            >
              <XMark className="size-[15px]" />
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Luora on GitHub"
              title="Luora on GitHub"
              className="grid size-8 place-items-center text-muted transition-colors hover:text-fg"
            >
              <GitHubMark className="size-[17px]" />
            </a>
          </span>
        )}
        {/* CTA konsultasi WhatsApp (gaya glass capsule header.css .hdr-pill.lit) */}
        <a
          href={waLink(waMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="group hdr-pill lit"
        >
          <WhatsappIcon className="size-[15px] flex-none transition-transform duration-500 group-hover:scale-110 motion-reduce:transition-none" />
          Konsultasi
          <PhIcon d={PH.caretRight} className="size-3 text-dim" />
        </a>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[.08] to-transparent md:inset-x-6"
      />
      {[0, 1].map((k) => (
        <svg
          key={k}
          aria-hidden="true"
          viewBox="0 0 11 11"
          className={`pointer-events-none absolute -bottom-[5px] hidden size-[11px] text-white/30 md:block ${k ? "right-6 translate-x-1/2" : "left-6 -translate-x-1/2"}`}
          stroke="currentColor"
        >
          <path d="M0 5.5h11M5.5 0v11" />
        </svg>
      ))}
    </nav>
  );
}

const ETHEREUM =
  "M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z";

/** the chains whose testnets the exporter forks, in the order the app lists them */
const CHAINS = [
  ["ethereum", "Ethereum", "https://ethereum.org"],
  ["arbitrum", "Arbitrum", "https://arbitrum.io"],
  ["base", "Base", "https://www.base.org"],
  ["robinhood", "Robinhood Chain", "https://robinhood.com/us/en/crypto/chain/"],
  ["hyperliquid", "Hyperliquid", "https://hyperliquid.xyz"],
  ["tempo", "Tempo", "https://tempo.xyz"],
] as const;
/** every mark in the hero opens its project's own site in a new tab */
const OUT = { target: "_blank", rel: "noopener noreferrer" } as const;

/** the tools Luora reads from: forge's runs, the Solidity source, Slither's and Aderyn's reports */
const tool = (src: string) => (
  <Image
    src={src}
    alt=""
    width={36}
    height={36}
    className="size-full object-contain"
  />
);
const TOOLS = [
  ["Foundry", "https://getfoundry.sh", tool("/logos/tools/foundry.png")],
  [
    "Solidity",
    "https://soliditylang.org",
    <svg
      key="sol"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="#363636"
      className="size-full"
    >
      <path d={SOLIDITY} />
    </svg>,
  ],
  [
    "Slither",
    "https://github.com/crytic/slither",
    tool("/logos/tools/slither-mark.png"),
  ],
  [
    "Aderyn",
    "https://github.com/Cyfrin/aderyn",
    tool("/logos/tools/aderyn-mark.png"),
  ],
] as const;

/**
 * Nineteenth pass. HK's header (title, subtitle, a chip, one line right) over the Lab window
 * (HeroLab): the app's contract graph and its scenario, the two things Luora is for, the window
 * running off the bottom of the first screen. The graph is cut to the cards that fit the window
 * (graph y < 900), so the page carries only what shows.
 */
const SPIRAL = [
  { src: "/2024/06/013-JERSEY.jpg", alt: "Jersey custom Samaraya" },
  { src: "/2024/10/Koper-Shafira-Hitam.jpg", alt: "Koper hardcase custom" },
  { src: "/2024/06/004-VARSITY.jpg", alt: "Jaket varsity custom" },
  { src: "/2024/01/ransel-sailor-pomac-barang-XTtuE.jpg", alt: "Ransel custom" },
  { src: "/2024/06/003-hoodie.jpg", alt: "Hoodie custom" },
  { src: "/2024/06/002-BACKPACK.jpg", alt: "Backpack custom" },
  { src: "/2024/06/006-KEMEJA-RESMI.jpg", alt: "Kemeja seragam custom" },
  { src: "/2024/06/014-TOPI.jpg", alt: "Topi custom" },
];

const TRUST = [
  "/2024/06/013-JERSEY.jpg",
  "/2024/01/ransel-sailor-pomac-barang-XTtuE.jpg",
  "/2024/10/Koper-Shafira-Hitam.jpg",
];

/** kata-kata headline; `g` = bagian gradient */
const HEAD: { t: string; g?: boolean }[] = [
  { t: "Produksi" },
  { t: "custom" },
  { t: "tas, koper & apparel", g: true },
  { t: "untuk" },
  { t: "brand" },
  { t: "Anda." },
];

/** Hero marketing: copy di kiri, galeri produk 3D (InfiniteSpiral) di kanan. */
export function Hero() {
  return (
    <HeroExit>
      <Nav />

      <div
        data-lp="hero-body"
        className="relative z-10 mx-auto grid min-h-[calc(100svh-76px)] max-w-[1240px] items-center gap-10 px-4 pt-6 pb-16 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
      >
        {/* kiri: copy */}
        <div className="relative z-10">
          <p
            className="sam-up mb-5 font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-muted"
            style={{ "--d": "0s" } as Delay}
          >
            Custom · Tas · Koper · Konveksi · Apparel
          </p>
          <h1 className="font-medium text-[clamp(38px,5.2vw,66px)] leading-[1.02] tracking-[-0.03em] text-fg">
            {HEAD.map((w, i) => (
              <span
                key={`${w.t}-${i}`}
                className="sam-word"
                style={{ "--i": i } as Delay}
              >
                {w.g ? <span className="sam-grad">{w.t}</span> : w.t}
              </span>
            ))}
          </h1>
          <p
            className="sam-up mt-6 max-w-xl text-[16px] leading-relaxed text-muted"
            style={{ "--d": "0.6s" } as Delay}
          >
            Produksi sendiri dengan kustomisasi penuh — desain, bahan, dan
            branding sesuai identitas Anda. Melayani komunitas, instansi,
            korporat, hingga travel umrah &amp; haji.
          </p>
          <div
            className="sam-up mt-8 flex flex-wrap items-center gap-3"
            style={{ "--d": "0.75s" } as Delay}
          >
            <a
              href={waLink(waMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#6366f1] px-6 py-3 font-semibold text-[15px] text-white shadow-[0_12px_34px_rgba(168,85,247,.35)] transition-transform hover:-translate-y-0.5"
            >
              <WhatsappIcon className="size-[18px]" />
              Minta Penawaran
            </a>
            <Link
              href="/tas-dan-koper"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[15px] text-fg transition-colors hover:border-white/40"
            >
              Lihat Koleksi
            </Link>
          </div>
          <div
            className="sam-up mt-10 flex items-center gap-3"
            style={{ "--d": "0.9s" } as Delay}
          >
            <div className="flex -space-x-2.5">
              {TRUST.map((s) => (
                <span
                  key={s}
                  className="size-9 overflow-hidden rounded-full border-2 border-black bg-raised"
                >
                  <Image
                    src={s}
                    alt=""
                    width={44}
                    height={44}
                    className="size-full object-cover"
                  />
                </span>
              ))}
            </div>
            <p className="max-w-[260px] text-[13px] leading-snug text-muted">
              Dipercaya komunitas, instansi &amp; travel di seluruh Indonesia.
            </p>
          </div>
        </div>

        {/* kanan: galeri 3D */}
        <div
          className="lh-up relative h-[440px] md:h-[560px]"
          style={{ "--d": "0.3s" } as Delay}
        >
          <InfiniteSpiral
            items={SPIRAL}
            animationMode="all"
            speed={0.5}
            radius={190}
            cardWidth={210}
            cardHeight={282}
            verticalSpacing={78}
            perspective={1100}
            cardRadius={16}
            centerScale={1.16}
            edgeBlur={5}
            cardsPerTurn={7}
            imageFit="cover"
            pauseOnHover
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
              Koleksi Samaraya
            </p>
            <p className="mt-1 text-[15px] font-medium text-fg">
              Kustomisasi penuh · Desain bebas
            </p>
          </div>
        </div>
      </div>
    </HeroExit>
  );
}

/**
 * R3 logo strip: the stack Luora reads its runs from, official marks only (foundry-rs org avatar,
 * simple-icons for Solidity / Ethereum), shown monochrome. Seventh pass: just these three; the
 * analyzers are named where their findings show up (Findings, Compare), not as logos.
 * Genie: these are the row of round icons that scatter before the product grows out of a square in the middle (ScatterGrow.tsx), with the live app tabs (ProductTabs).
 */
export function Product() {
  const sicon = (children: React.ReactNode) => (
    <svg
      viewBox="0 0 24 24"
      className="size-[28px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
  const marks = [
    {
      title: "Tas & Koper",
      href: "/tas-dan-koper",
      node: sicon(
        <>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 13h18" />
        </>,
      ),
    },
    {
      title: "Konveksi",
      href: "/konveksi",
      node: sicon(
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />,
      ),
    },
    {
      title: "Sepatu",
      href: "/sepatu",
      node: sicon(
        <>
          <path d="M2 18h17a3 3 0 0 0 3-3c0-1.3-1-2.2-3-2.8l-5.5-1.7L10 7H5a3 3 0 0 0-3 3z" />
          <path d="M2 14h7" />
        </>,
      ),
    },
  ];
  return (
    <ScatterGrow marks={marks}>
      <ProductTabs />
    </ScatterGrow>
  );
}

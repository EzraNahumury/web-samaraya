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
import { SpecCatalog, type SpecItem } from "./SpecCatalog";
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
        className={`absolute left-1/2 -translate-x-1/2 items-center gap-0.5 rounded-full border border-black/[.08] bg-gradient-to-b from-black/[.035] to-black/[.01] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_10px_30px_rgba(16,26,43,.08)] ${docs ? "hidden" : "hidden md:flex"}`}
      >
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              aria-current={i.on ? "page" : undefined}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] transition-colors ${
                i.on
                  ? "bg-white text-fg shadow-[0_1px_3px_rgba(16,26,43,.1)]"
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
        className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-black/[.08] to-transparent md:inset-x-6"
      />
      {[0, 1].map((k) => (
        <svg
          key={k}
          aria-hidden="true"
          viewBox="0 0 11 11"
          className={`pointer-events-none absolute -bottom-[5px] hidden size-[11px] text-black/20 md:block ${k ? "right-6 translate-x-1/2" : "left-6 -translate-x-1/2"}`}
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
const CATALOG: SpecItem[] = [
  { src: "/2024/06/013-JERSEY.jpg", alt: "Jersey custom Samaraya", nama: "Jersey Custom", tag: "Konveksi", href: "/konveksi" },
  { src: "/2024/01/ransel-sailor-pomac-barang-XTtuE.jpg", alt: "Ransel Sailor Pomac", nama: "Ransel Sailor Pomac", tag: "Tas", href: "/tas-dan-koper" },
  { src: "/2024/10/Koper-Shafira-Hitam.jpg", alt: "Koper hardcase custom", nama: "Koper Hardcase", tag: "Koper", href: "/koper" },
  { src: "/2024/06/004-VARSITY.jpg", alt: "Jaket varsity custom", nama: "Jaket Varsity", tag: "Konveksi", href: "/konveksi" },
  { src: "/2024/06/002-BACKPACK.jpg", alt: "Backpack custom", nama: "Backpack Custom", tag: "Tas", href: "/tas-dan-koper" },
  { src: "/2024/06/014-TOPI.jpg", alt: "Topi custom", nama: "Topi Custom", tag: "Konveksi", href: "/konveksi" },
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
        className="relative z-10 mx-auto max-w-[1280px] px-4 pt-4 pb-10 md:px-6"
      >
        {/* katalog spec-sheet full-width (coverflow gerak sendiri, klik → detail) */}
        <div
          className="lh-up relative h-[calc(100svh-76px-56px)] min-h-[500px]"
          style={{ "--d": "0.25s" } as Delay}
        >
          <SpecCatalog items={CATALOG} />
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

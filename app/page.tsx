import {
  Compare,
  Faq,
  Features,
  Finale,
  Findings,
  Hero,
  Product,
  Run,
  SmoothScroll,
} from "@/components/landing";
import "@/components/landing/landing.css";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/config/site";

export const metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

const ORG = `${SITE_URL}/#org`;
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/2024/04/Untitled-design-6.png`,
      sameAs: ["https://instagram.com/samaraya.id"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": ORG },
    },
    {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}/2024/06/SAMPUL.webp`,
      publisher: { "@id": ORG },
    },
  ],
};

/** Homepage Samaraya — landing dark scroll-story (di-scope dalam .luora-root untuk token/temanya). */
export default async function Home() {
  return (
    <main className="luora-root relative min-h-dvh overflow-x-clip">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD of our own, `<` escaped
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
        }}
      />
      <SmoothScroll>
        <Hero />
        <Product />
        <Run />
        <Features />
        <Findings />
        <Compare />
        <Faq />
        <Finale />
      </SmoothScroll>
    </main>
  );
}

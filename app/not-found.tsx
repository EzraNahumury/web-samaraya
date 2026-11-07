import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex items-center py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-5 flex items-center justify-center gap-2.5 text-green-deep">
            <span className="brand-dot" /> 404
          </p>
          <h1 className="display-lg">Halaman tidak ditemukan.</h1>
          <p className="mt-5 text-lg leading-8 text-ink-soft">
            Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" variant="primary" size="lg" arrow>
              Kembali ke Beranda
            </Button>
            <Link href="/kontak" className="link-underline text-ink">
              Hubungi kami
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi Samaraya mengenai data yang dikumpulkan melalui website dan kanal konsultasi.",
  alternates: { canonical: "/kebijakan-privasi" },
  robots: { index: true, follow: true },
};

const sections: { h: string; p: string[] }[] = [
  {
    h: "1. Pendahuluan",
    p: [
      `Kebijakan ini menjelaskan bagaimana ${site.name} menangani informasi yang Anda berikan saat menghubungi kami atau mengisi formulir di website ini. Dengan menggunakan website, Anda menyetujui praktik yang diuraikan di sini.`,
    ],
  },
  {
    h: "2. Data yang Dikumpulkan",
    p: [
      "Kami hanya mengumpulkan data yang Anda berikan secara sukarela untuk keperluan konsultasi dan penawaran, seperti nama, nama instansi, kebutuhan produk, perkiraan jumlah, serta kontak yang Anda gunakan untuk menghubungi kami.",
      "Formulir di halaman Kontak tidak menyimpan data di website ini. Isian formulir dirangkai menjadi pesan dan diteruskan melalui aplikasi WhatsApp pada perangkat Anda.",
    ],
  },
  {
    h: "3. Penggunaan Data",
    p: [
      "Data digunakan untuk menanggapi permintaan Anda, menyusun penawaran, dan menindaklanjuti proses pemesanan. Kami tidak menjual atau menyewakan data Anda kepada pihak lain.",
    ],
  },
  {
    h: "4. Penyimpanan & Keamanan",
    p: [
      "Komunikasi dan dokumen terkait pesanan disimpan sewajarnya selama diperlukan untuk keperluan layanan. Kami berupaya menjaga kerahasiaan informasi yang Anda berikan.",
    ],
  },
  {
    h: "5. Layanan Pihak Ketiga",
    p: [
      "Kami menggunakan WhatsApp sebagai kanal komunikasi. Penggunaan WhatsApp tunduk pada kebijakan privasi penyedia layanan tersebut.",
    ],
  },
  {
    h: "6. Hak Anda",
    p: [
      "Anda dapat meminta koreksi atau penghapusan data yang telah Anda berikan kepada kami dengan menghubungi kanal kontak resmi.",
    ],
  },
  {
    h: "7. Perubahan Kebijakan",
    p: [
      "Kebijakan ini dapat diperbarui sewaktu-waktu. Versi terbaru akan selalu tersedia pada halaman ini.",
    ],
  },
  {
    h: "8. Kontak",
    p: [
      `Untuk pertanyaan terkait kebijakan privasi ini, hubungi kami di ${site.email}.`,
    ],
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-5 flex items-center gap-2.5 text-green-deep">
            <span className="brand-dot" /> Legal
          </p>
          <h1 className="display-lg">Kebijakan Privasi</h1>
          <p className="mt-4 text-sm text-ink-soft">
            Terakhir diperbarui: November 2026
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-xl font-medium text-ink md:text-2xl">
                  {s.h}
                </h2>
                {s.p.map((para, i) => (
                  <p key={i} className="mt-3 text-[1.02rem] leading-8 text-ink-soft">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <p className="mt-12 rounded-2xl border border-line bg-cream p-5 text-sm leading-7 text-ink-soft">
            Catatan: dokumen ini merupakan kebijakan umum dan sebaiknya ditinjau
            kembali sesuai ketentuan hukum serta praktik operasional final
            Samaraya sebelum publikasi resmi.
          </p>
        </div>
      </Container>
    </section>
  );
}

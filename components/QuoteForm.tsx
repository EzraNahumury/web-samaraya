"use client";

import { useState } from "react";
import { site, waLink } from "@/lib/site";

const kategoriOptions = [
  "Tas & Koper",
  "Koper",
  "Konveksi",
  "Sepatu",
  "Lainnya",
];

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-green focus:outline-none focus:ring-2 focus:ring-green/25";
const label = "mb-2 block text-sm font-medium text-ink";

/**
 * Formulir permintaan penawaran. Data tidak dikirim ke server mana pun —
 * seluruh isian dirangkai menjadi pesan WhatsApp lalu dibuka di WhatsApp
 * pengunjung (sesuai alur konsultasi pada README). Tidak ada data yang
 * disimpan di sisi situs.
 */
export function QuoteForm() {
  const [nama, setNama] = useState("");
  const [instansi, setInstansi] = useState("");
  const [kategori, setKategori] = useState(kategoriOptions[0]);
  const [jumlah, setJumlah] = useState("");
  const [kebutuhan, setKebutuhan] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !kebutuhan.trim()) {
      setError("Mohon lengkapi nama dan deskripsi kebutuhan.");
      return;
    }
    setError(null);

    const lines = [
      `Halo ${site.name}, saya ingin meminta penawaran.`,
      "",
      `Nama: ${nama.trim()}`,
      instansi.trim() ? `Instansi: ${instansi.trim()}` : null,
      `Kategori: ${kategori}`,
      jumlah.trim() ? `Perkiraan jumlah: ${jumlah.trim()}` : null,
      `Kebutuhan: ${kebutuhan.trim()}`,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nama" className={label}>
            Nama <span className="text-green">*</span>
          </label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama Anda"
            className={field}
            required
          />
        </div>
        <div>
          <label htmlFor="instansi" className={label}>
            Perusahaan / Instansi
          </label>
          <input
            id="instansi"
            type="text"
            value={instansi}
            onChange={(e) => setInstansi(e.target.value)}
            placeholder="Opsional"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="kategori" className={label}>
            Kategori produk
          </label>
          <select
            id="kategori"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className={field}
          >
            {kategoriOptions.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="jumlah" className={label}>
            Perkiraan jumlah
          </label>
          <input
            id="jumlah"
            type="text"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            placeholder="mis. 100 pcs"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="kebutuhan" className={label}>
          Deskripsi kebutuhan <span className="text-green">*</span>
        </label>
        <textarea
          id="kebutuhan"
          value={kebutuhan}
          onChange={(e) => setKebutuhan(e.target.value)}
          placeholder="Ceritakan produk, desain/branding, dan target waktu Anda."
          rows={5}
          className={field}
          required
        />
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-green px-7 text-base font-semibold text-white transition-colors hover:bg-green-600 sm:w-auto"
      >
        Kirim via WhatsApp
      </button>
      <p className="text-sm text-ink-soft">
        Dengan menekan kirim, isian akan dirangkai menjadi pesan WhatsApp. Data
        tidak disimpan di situs ini.
      </p>
    </form>
  );
}

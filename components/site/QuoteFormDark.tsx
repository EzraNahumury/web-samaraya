"use client";

import { useState } from "react";
import { site, waLink } from "@/lib/site";

const kategoriOptions = ["Tas & Koper", "Koper", "Konveksi", "Sepatu", "Lainnya"];

const field =
  "w-full rounded-xl border border-white/[.1] bg-field px-4 py-3 text-[15px] text-fg placeholder:text-dim transition-colors focus:border-green/60 focus:outline-none focus:ring-2 focus:ring-green/25";
const label = "mb-2 block text-[13px] font-medium text-body";

/**
 * Formulir penawaran (tema gelap). Data tidak dikirim ke server — seluruh isian
 * dirangkai menjadi pesan WhatsApp lalu dibuka di WhatsApp pengunjung.
 */
export function QuoteFormDark() {
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
            className={`${field} select-caret pr-10`}
          >
            {kategoriOptions.map((k) => (
              <option key={k} value={k} className="bg-[#1a1a1d] text-fg">
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
        <p role="alert" className="text-[14px] font-medium text-red">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green px-7 text-[15px] font-semibold text-[#07130a] transition-[filter] hover:brightness-110 sm:w-auto"
      >
        Kirim via WhatsApp
      </button>
      <p className="text-[13px] text-dim leading-relaxed">
        Dengan menekan kirim, isian dirangkai menjadi pesan WhatsApp. Data tidak disimpan di situs
        ini.
      </p>
    </form>
  );
}

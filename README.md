# Redesign Website Samaraya dengan Next.js

> Dokumentasi awal perencanaan redesign [samaraya.id](https://samaraya.id/) 
> Struktur dan fitur di sini masih berupa rancangan dan perlu divalidasi melalui audit website serta diskusi dengan pemilik bisnis.

## Daftar Isi

1. [Latar Belakang](#1-latar-belakang)
2. [Tujuan Proyek](#2-tujuan-proyek)
3. [Ruang Lingkup Website](#3-ruang-lingkup-website)
4. [Struktur Website (Sitemap)](#4-struktur-website-sitemap)
5. [Rancangan Alur Pengguna (User Flow)](#5-rancangan-alur-pengguna-user-flow)
6. [Rancangan Struktur Halaman](#6-rancangan-struktur-halaman)
7. [Rekomendasi UI/UX](#7-rekomendasi-uiux)
8. [Rekomendasi Teknologi](#8-rekomendasi-teknologi)
9. [Pengelolaan Data Produk](#9-pengelolaan-data-produk)
10. [Strategi Migrasi dari WordPress ke Next.js](#10-strategi-migrasi-dari-wordpress-ke-nextjs)
11. [Pertimbangan Performa dan Keamanan](#11-pertimbangan-performa-dan-keamanan)
12. [Tahapan Pengerjaan](#12-tahapan-pengerjaan)
13. [Kriteria Keberhasilan](#13-kriteria-keberhasilan)
14. [Hal yang Perlu Dikonfirmasi](#14-hal-yang-perlu-dikonfirmasi)
15. [Kesimpulan](#15-kesimpulan)

---

## 1. Latar Belakang

Website [Samaraya](https://samaraya.id/) akan dirancang ulang menggunakan Next.js. Website yang saat ini digunakan diduga masih memakai WordPress, sehingga perlu dilakukan analisis terlebih dahulu terhadap struktur website, halaman, konten, katalog produk, dan alur pengguna sebelum proses implementasi dimulai.

Redesign ini tidak hanya bertujuan memperbarui tampilan, tetapi juga menyusun struktur website yang lebih terorganisasi, modern, responsif, mudah dikembangkan, dan sesuai dengan kebutuhan bisnis Samaraya.

Dokumentasi ini menjadi dasar perencanaan dan bahan evaluasi sebelum implementasi dimulai. Struktur dan fitur yang dijelaskan masih berupa rancangan awal dan perlu divalidasi melalui audit website serta diskusi dengan pemilik bisnis.

## 2. Tujuan Proyek

Tujuan redesign website Samaraya:

1. Memigrasikan website ke Next.js dengan struktur aplikasi yang lebih terorganisasi.
2. Memperbarui UI/UX agar terlihat modern, profesional, dan konsisten.
3. Memisahkan katalog berdasarkan lini bisnis agar pelanggan lebih mudah menemukan produk.
4. Memudahkan calon pelanggan melihat informasi produk dan menghubungi tim Samaraya.
5. Meningkatkan pengalaman pengguna pada perangkat desktop maupun mobile.
6. Mempertahankan SEO dan URL penting dari website lama selama proses migrasi.
7. Menyiapkan fondasi yang dapat dikembangkan sesuai kebutuhan bisnis berikutnya.

## 3. Ruang Lingkup Website

Website akan memiliki empat halaman utama berdasarkan kategori bisnis yang ingin ditampilkan.

### 3.1 Tas dan Koper

Landing page untuk pelanggan yang mencari produk tas maupun koper.

Rencana konten:

- Hero section yang menjelaskan layanan dan keunggulan Samaraya.
- Katalog kategori tas.
- Katalog kategori koper.
- Produk unggulan.
- Galeri foto produk.
- Informasi layanan custom apabila tersedia.
- Informasi minimum pemesanan apabila telah dikonfirmasi.
- Penjelasan proses pemesanan dan produksi.
- Testimoni atau portofolio pelanggan yang telah disetujui.
- FAQ.
- CTA untuk konsultasi atau permintaan penawaran.

### 3.2 Koper

Halaman yang berfokus pada produk koper agar pelanggan yang membutuhkan koper dapat langsung menemukan informasi yang relevan.

Rencana konten:

- Hero section khusus produk koper.
- Katalog atau variasi koper.
- Foto dan detail produk.
- Spesifikasi produk yang telah diverifikasi.
- Informasi opsi custom atau penambahan logo jika tersedia.
- Informasi minimum pemesanan dan estimasi produksi jika telah dikonfirmasi.
- FAQ.
- CTA untuk konsultasi dan permintaan penawaran.

### 3.3 Konveksi

Halaman untuk pelanggan yang membutuhkan produk pakaian, seragam, atau produk konveksi lainnya.

Kategori awal yang perlu diverifikasi terhadap katalog aktual:

- Kaos.
- Polo shirt.
- Jaket.
- Kemeja dan seragam.
- Jersey.
- Almamater.
- Hoodie.
- Topi.
- Produk konveksi lainnya yang memang tersedia.

Rencana konten:

- Hero section layanan konveksi.
- Katalog kategori produk.
- Galeri hasil produksi.
- Informasi opsi bahan, ukuran, desain, dan metode produksi jika tersedia.
- Alur pemesanan.
- FAQ.
- CTA untuk konsultasi dan permintaan penawaran.

### 3.4 Sepatu

Halaman yang berfokus pada lini produk sepatu.

Informasi kategori, jenis produk, spesifikasi, dan layanan custom masih perlu ditelusuri dan dikonfirmasi sebelum implementasi.

Rencana konten:

- Hero section produk sepatu.
- Katalog jenis atau model sepatu.
- Foto dan detail produk.
- Informasi ukuran, bahan, dan spesifikasi yang telah diverifikasi.
- Informasi layanan custom jika tersedia.
- Informasi minimum pemesanan dan estimasi produksi jika telah dikonfirmasi.
- FAQ.
- CTA untuk konsultasi dan permintaan penawaran.

## 4. Struktur Website (Sitemap)

Struktur awal yang diusulkan:

```text
/
├── tas-dan-koper/
├── koper/
├── konveksi/
├── sepatu/
├── produk/
│   └── [slug]/
├── tentang-kami/
├── kontak/
└── kebijakan-privasi/
```

Keterangan:

| Path | Deskripsi |
|------|-----------|
| `/` | Homepage yang memperkenalkan Samaraya dan mengarahkan pengunjung ke empat kategori utama. |
| `/tas-dan-koper/` | Landing page untuk tas dan koper. |
| `/koper/` | Landing page khusus koper. |
| `/konveksi/` | Landing page layanan konveksi. |
| `/sepatu/` | Landing page produk sepatu. |
| `/produk/[slug]/` | Rancangan halaman detail produk yang dapat digunakan bersama oleh berbagai kategori. |
| `/tentang-kami/` | Profil perusahaan dan informasi bisnis yang telah diverifikasi. |
| `/kontak/` | Informasi kontak dan jalur konsultasi. |
| `/kebijakan-privasi/` | Penjelasan pengelolaan data yang dikumpulkan melalui website. |

> Sitemap ini masih berupa usulan. Keberadaan halaman detail produk, profil perusahaan, dan kebijakan privasi perlu disesuaikan dengan kebutuhan final.

## 5. Rancangan Alur Pengguna (User Flow)

### 5.1 Alur Pengunjung Website

1. Pengunjung membuka website Samaraya.
2. Pengunjung melihat homepage dan informasi singkat mengenai bisnis.
3. Pengunjung memilih kategori Tas dan Koper, Koper, Konveksi, atau Sepatu.
4. Website menampilkan informasi dan katalog sesuai kategori.
5. Pengunjung memilih produk yang ingin diketahui lebih lanjut.
6. Website menampilkan detail produk apabila halaman detail tersedia.
7. Pengunjung menekan tombol konsultasi atau permintaan penawaran.
8. Pengunjung menghubungi tim Samaraya melalui WhatsApp atau formulir.
9. Tim Samaraya menindaklanjuti kebutuhan pelanggan sesuai prosedur bisnis yang berlaku.

### 5.2 Alur Konsultasi WhatsApp

1. Pengunjung membuka halaman kategori atau detail produk.
2. Pengunjung menekan tombol WhatsApp.
3. Website membuka WhatsApp dengan pesan awal yang telah disiapkan.
4. Pesan dapat mencantumkan kategori atau nama produk yang sedang dilihat.
5. Pengunjung melanjutkan komunikasi dengan tim Samaraya.

Contoh pesan awal:

> "Halo Samaraya, saya tertarik dengan produk [nama produk/kategori]. Saya ingin mengetahui informasi produk, pilihan custom, minimum pemesanan, dan estimasi waktu produksi."

> Nomor WhatsApp dan isi pesan akhir perlu dikonfirmasi sebelum implementasi.

### 5.3 Alur Formulir Permintaan Penawaran

Jika formulir digunakan, rancangan alurnya:

1. Pengunjung memilih kategori produk.
2. Pengunjung mengisi informasi kontak dan kebutuhan pemesanan.
3. Website memvalidasi data yang dimasukkan.
4. Website mengirimkan permintaan ke kanal yang telah ditentukan.
5. Website menampilkan notifikasi bahwa permintaan telah diterima, atau informasi kesalahan jika pengiriman gagal.
6. Tim Samaraya menindaklanjuti permintaan tersebut.

Field yang dapat dipertimbangkan:

- Nama.
- Nama perusahaan atau instansi.
- Nomor WhatsApp.
- Kategori produk.
- Jumlah perkiraan pesanan.
- Kebutuhan custom.
- Target waktu produksi.
- Deskripsi kebutuhan tambahan.

> Mekanisme pengiriman data, penyimpanan, dan penerima notifikasi belum ditentukan.

## 6. Rancangan Struktur Halaman

Secara umum, setiap landing page dapat menggunakan struktur berikut:

1. Header dan navigasi.
2. Hero section.
3. Ringkasan keunggulan atau manfaat.
4. Kategori produk.
5. Produk unggulan atau galeri.
6. Detail layanan dan opsi custom jika tersedia.
7. Proses pemesanan atau produksi.
8. Testimoni atau portofolio yang telah disetujui.
9. FAQ.
10. CTA konsultasi.
11. Footer.

> Struktur dapat berbeda sesuai karakteristik setiap kategori. Bagian yang tidak relevan tidak perlu dipaksakan muncul pada semua halaman.

## 7. Rekomendasi UI/UX

Arah desain awal mengacu pada kebutuhan website katalog bisnis dan referensi landing page yang telah disediakan.

Prinsip desain:

- Modern dan profesional.
- Tampilan bersih dengan hierarki informasi yang jelas.
- Navigasi mudah dipahami.
- Fokus pada visual produk.
- CTA konsultasi mudah ditemukan.
- Konsistensi komponen antar halaman.
- Responsif untuk desktop, tablet, dan mobile.
- Animasi secukupnya dan tidak mengganggu performa.
- Penggunaan foto produk asli yang telah disetujui.

> Referensi visual awal menggunakan kombinasi warna navy gelap dan aksen hijau terang. Palet warna final, tipografi, logo, dan sistem desain perlu ditinjau kembali sebelum ditetapkan.

## 8. Rekomendasi Teknologi

Teknologi awal yang dapat dipertimbangkan:

| Aspek | Pilihan |
|-------|---------|
| **Framework** | Next.js |
| **Bahasa** | TypeScript |
| **Routing** | Next.js App Router |
| **Styling** | Tailwind CSS atau pendekatan CSS terstruktur |
| **Komponen UI** | Komponen reusable sesuai desain yang disepakati |
| **Optimasi gambar** | Next.js Image atau mekanisme optimasi yang sesuai |
| **SEO** | Metadata per halaman, sitemap, robots.txt, canonical, dan redirect |
| **Deployment** | Platform yang mendukung kebutuhan runtime Next.js |

> Keputusan mengenai database, CMS, backend, dan integrasi eksternal belum ditetapkan. Pemilihannya harus berdasarkan hasil audit serta kebutuhan operasional.

## 9. Pengelolaan Data Produk

Struktur data produk perlu dirancang agar produk dapat dikelompokkan berdasarkan kategori dan digunakan kembali pada halaman katalog maupun detail produk.

Field awal yang dapat dipertimbangkan:

- ID produk.
- Nama produk.
- Slug.
- Kategori.
- Deskripsi singkat.
- Deskripsi lengkap.
- Foto produk.
- Spesifikasi.
- Opsi custom.
- Minimum pemesanan.
- Informasi status produk.
- Metadata SEO.

> Field dan struktur final perlu menyesuaikan data yang tersedia pada website lama.

Harga tidak harus ditampilkan apabila penawaran bergantung pada jumlah pesanan, spesifikasi, dan kebutuhan custom. Dalam kondisi tersebut, tombol permintaan penawaran dapat menjadi CTA utama.

## 10. Strategi Migrasi dari WordPress ke Next.js

Sebelum website lama diganti, perlu dilakukan audit dan inventarisasi.

Tahapan yang disarankan:

1. Mengidentifikasi teknologi dan struktur website lama.
2. Menginventarisasi seluruh URL halaman, kategori, produk, dan artikel.
3. Mengumpulkan konten, gambar, logo, dan aset lain yang masih digunakan.
4. Mengidentifikasi halaman dengan trafik atau nilai SEO penting.
5. Memetakan URL lama ke URL baru.
6. Memindahkan konten yang masih relevan.
7. Menyiapkan redirect untuk URL yang berubah.
8. Menguji seluruh tautan dan halaman setelah migrasi.
9. Memeriksa sitemap, metadata, canonical, dan robots.txt.
10. Memantau error 404 serta performa SEO setelah peluncuran.

> Jangan menghapus seluruh URL lama tanpa pemetaan. Halaman yang masih relevan sebaiknya dipertahankan atau diarahkan ke halaman pengganti yang paling sesuai.

## 11. Pertimbangan Performa dan Keamanan

- Optimasi gambar agar halaman tetap cepat.
- Penggunaan komponen dan JavaScript secara efisien.
- Validasi formulir di sisi server.
- Perlindungan terhadap spam pada formulir jika diperlukan.
- Penyimpanan secret pada environment variables.
- Penggunaan HTTPS.
- Pengumpulan data pelanggan secukupnya.
- Penanganan error dan status pengiriman formulir.
- Aksesibilitas navigasi, gambar, tombol, dan input.
- Penggunaan testimoni, foto, dan logo klien dengan izin yang sesuai.

## 12. Tahapan Pengerjaan

### Tahap 1 — Audit dan Analisis

- Memeriksa website Samaraya yang sekarang.
- Mengidentifikasi teknologi dan struktur halaman.
- Menginventarisasi produk, konten, gambar, dan URL.
- Memeriksa alur bisnis dan cara pelanggan menghubungi tim.
- Mengidentifikasi masalah UI/UX dan peluang perbaikan.

**Output:** laporan audit dan daftar kebutuhan yang telah teridentifikasi.

### Tahap 2 — Dokumentasi dan Perencanaan

- Menentukan sitemap.
- Menentukan user flow.
- Menyusun struktur halaman.
- Menentukan komponen bersama.
- Menyusun kebutuhan data produk.
- Menentukan batasan scope awal.

**Output:** dokumentasi kebutuhan dan rancangan flow untuk mendapatkan persetujuan.

### Tahap 3 — UI/UX Design

- Menentukan arah visual.
- Membuat wireframe.
- Merancang tampilan desktop dan mobile.
- Menyusun komponen UI.
- Meninjau desain bersama pihak terkait.

**Output:** rancangan UI/UX yang telah disetujui.

### Tahap 4 — Setup dan Implementasi Next.js

- Menyiapkan repository.
- Menyiapkan struktur proyek.
- Membuat layout dan navigasi.
- Membuat empat landing page utama.
- Membuat komponen katalog dan detail produk jika termasuk scope.
- Mengintegrasikan CTA dan formulir sesuai keputusan.

**Output:** website pada lingkungan development atau preview.

### Tahap 5 — Testing dan Optimasi

- Menguji tampilan responsif.
- Menguji navigasi dan CTA.
- Menguji pengiriman formulir.
- Memeriksa error dan tautan rusak.
- Memeriksa metadata dan redirect.
- Mengoptimalkan performa.

**Output:** website yang siap untuk proses persetujuan akhir.

### Tahap 6 — Deployment

- Menyiapkan hosting dan konfigurasi domain.
- Menyiapkan backup website lama.
- Melakukan deployment.
- Memastikan URL dan redirect berfungsi.
- Memantau error setelah peluncuran.

**Output:** website baru yang telah dipublikasikan.

## 13. Kriteria Keberhasilan

Website dianggap memenuhi kebutuhan awal apabila:

1. Empat halaman utama tersedia dan saling terhubung.
2. Tampilan responsif di desktop dan mobile.
3. Pengunjung dapat menemukan kategori dan informasi produk dengan mudah.
4. CTA konsultasi mengarah ke kanal yang benar.
5. Formulir, apabila digunakan, dapat mengirimkan data sesuai mekanisme yang disepakati.
6. Informasi produk, spesifikasi, dan minimum pemesanan telah diverifikasi.
7. URL penting dari website lama telah dipetakan.
8. Metadata dan redirect telah diuji.
9. Tidak ada error atau tautan rusak yang menghambat fungsi utama.
10. Desain, konten, dan alur bisnis telah mendapatkan persetujuan.

## 14. Hal yang Perlu Dikonfirmasi

Sebelum implementasi, beberapa hal berikut harus dipastikan:

- Apakah website hanya berfungsi sebagai katalog dan media konsultasi, atau juga membutuhkan transaksi online?
- Apakah katalog produk perlu dikelola melalui CMS/admin?
- Apakah data produk akan diambil dari WordPress atau database yang sudah ada?
- Apakah semua produk memiliki harga publik atau menggunakan sistem permintaan penawaran?
- Bagaimana alur penerimaan dan tindak lanjut calon pelanggan?
- Apa saja kategori dan spesifikasi produk Sepatu yang benar-benar tersedia?
- Apakah Samaraya dan Polosail menggunakan satu identitas brand atau memiliki positioning terpisah?
- Informasi MOQ dan estimasi produksi apa saja yang boleh ditampilkan?
- URL lama mana saja yang wajib dipertahankan?
- Siapa yang bertanggung jawab atas pembaruan konten setelah website selesai?

## 15. Kesimpulan

Redesign website Samaraya menggunakan Next.js perlu dimulai dengan audit website lama dan penyusunan kebutuhan bisnis sebelum implementasi.

Prioritas awal adalah menyepakati empat halaman utama, struktur navigasi, konten katalog, user flow, dan mekanisme konsultasi pelanggan. Setelah itu, rancangan UI/UX dapat dibuat dan disetujui sebelum pengembangan dimulai.

Dokumentasi ini merupakan dasar awal untuk proses analisis. Detail teknis, struktur data, dan implementasi final harus disesuaikan dengan hasil audit repository, website lama, dan kebutuhan bisnis yang telah dikonfirmasi.

---

_Status: rancangan awal — perlu validasi melalui audit website dan persetujuan pemilik bisnis._

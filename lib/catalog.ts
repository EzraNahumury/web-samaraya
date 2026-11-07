// Data konten & katalog Samaraya.
// Teks bersifat deskriptif tanpa mencantumkan harga, MOQ, atau spesifikasi
// yang belum diverifikasi (lihat README bagian 14). Nama produk mengikuti
// penamaan katalog sumber. Gambar diambil dari aset lokal di /public.

export type Media = { src: string; alt: string; pos?: string };

export type Produk = Media & { nama: string; tag?: string };

export type Kategori = {
  slug: string;
  href: string;
  nama: string;
  ringkas: string;
  cover: Media;
};

/* ------------------------------------------------------------------ */
/* Empat lini utama — dipakai di homepage & navigasi kategori          */
/* ------------------------------------------------------------------ */

export const liniUtama: Kategori[] = [
  {
    slug: "tas-dan-koper",
    href: "/tas-dan-koper",
    nama: "Tas & Koper",
    ringkas:
      "Ransel, selempang, totebag, waistbag, hingga koper untuk komunitas, instansi, dan travel.",
    cover: {
      src: "/2024/01/ransel-sailor-pomac-barang-XTtuE.jpg",
      alt: "Ransel custom Sailor Pomac produksi Samaraya",
    },
  },
  {
    slug: "koper",
    href: "/koper",
    nama: "Koper",
    ringkas:
      "Koper kabin & bagasi hardcase, cocok untuk paket travel umrah, haji, dan merchandise korporat.",
    cover: {
      src: "/2024/10/Koper-Shafira-Hitam.jpg",
      alt: "Koper hardcase custom branding untuk travel",
      pos: "center",
    },
  },
  {
    slug: "konveksi",
    href: "/konveksi",
    nama: "Konveksi",
    ringkas:
      "Kaos, polo, jaket, kemeja seragam, jersey, almamater, hoodie, dan topi dengan desain bebas.",
    cover: {
      src: "/2024/06/013-JERSEY.jpg",
      alt: "Jersey custom hasil konveksi Samaraya",
      pos: "center top",
    },
  },
  {
    slug: "sepatu",
    href: "/sepatu",
    nama: "Sepatu",
    ringkas:
      "Layanan sepatu & tas sepatu custom. Spesifikasi dikonfirmasi langsung sesuai kebutuhan Anda.",
    cover: {
      src: "/2025/11/DSC0544.webp",
      alt: "Tas sepatu custom produksi Samaraya",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Keunggulan / nilai jual (grounded pada sifat bisnis produsen)       */
/* ------------------------------------------------------------------ */

export type Keunggulan = { judul: string; teks: string };

export const keunggulan: Keunggulan[] = [
  {
    judul: "Produksi sendiri",
    teks: "Dikerjakan di workshop sendiri sehingga kualitas, bahan, dan jadwal lebih terkontrol.",
  },
  {
    judul: "Kustomisasi penuh",
    teks: "Desain, bahan, warna, hingga penempatan logo dapat disesuaikan dengan identitas Anda.",
  },
  {
    judul: "Branding & logo",
    teks: "Sablon, bordir, atau label custom untuk memperkuat merek komunitas dan instansi.",
  },
  {
    judul: "Bisa bundling",
    teks: "Beberapa jenis produk dapat digabung dalam satu paket pemesanan yang praktis.",
  },
  {
    judul: "Kirim banyak alamat",
    teks: "Pesanan dapat dikirim ke beberapa tujuan sesuai kebutuhan distribusi Anda.",
  },
  {
    judul: "Pendampingan tim",
    teks: "Tim kami membantu dari konsultasi, penyusunan desain, hingga pesanan selesai produksi.",
  },
];

/* ------------------------------------------------------------------ */
/* Alur pemesanan / proses produksi                                    */
/* ------------------------------------------------------------------ */

export type Langkah = { no: string; judul: string; teks: string };

export const prosesPemesanan: Langkah[] = [
  {
    no: "01",
    judul: "Konsultasi",
    teks: "Ceritakan kebutuhan, jenis produk, jumlah, dan target waktu melalui WhatsApp.",
  },
  {
    no: "02",
    judul: "Desain & penawaran",
    teks: "Kami bantu susun desain dan kirimkan penawaran sesuai spesifikasi yang disepakati.",
  },
  {
    no: "03",
    judul: "Sampel & approval",
    teks: "Contoh produk atau mockup diperiksa dan disetujui sebelum produksi massal berjalan.",
  },
  {
    no: "04",
    judul: "Produksi & QC",
    teks: "Pesanan diproduksi di workshop dengan pemeriksaan kualitas pada tahap akhir.",
  },
  {
    no: "05",
    judul: "Pengiriman",
    teks: "Produk dikemas dan dikirim, dapat ke satu atau beberapa alamat tujuan.",
  },
];

/* ------------------------------------------------------------------ */
/* Portofolio produksi — hasil custom untuk klien travel & komunitas   */
/* ------------------------------------------------------------------ */

export const portofolio: Media[] = [
  {
    src: "/2025/11/DSC3765.webp",
    alt: "Tas selempang custom bersulam nama travel",
  },
  {
    src: "/2025/11/DSC6343.webp",
    alt: "Ransel custom dengan branding klien",
  },
  {
    src: "/2025/11/DSC9403.webp",
    alt: "Bantal leher custom logo komunitas travel",
  },
  {
    src: "/2025/11/DSC0544.webp",
    alt: "Tas sepatu custom untuk paket perjalanan",
  },
];

/* ------------------------------------------------------------------ */
/* Produk unggulan Tas                                                 */
/* ------------------------------------------------------------------ */

export const tasUnggulan: Produk[] = [
  {
    nama: "Ransel Sailor Pomac",
    tag: "Ransel",
    src: "/2024/01/ransel-sailor-pomac-barang-XTtuE.jpg",
    alt: "Ransel Sailor Pomac 25L warna hitam",
  },
  {
    nama: "Sling Sailor Nobilis",
    tag: "Selempang",
    src: "/2024/01/handbag-sailor-nobilis-barang-KS5Ea.jpg",
    alt: "Tas selempang Sailor Nobilis warna hitam",
  },
  {
    nama: "Ransel Sailor Charinus",
    tag: "Ransel",
    src: "/2024/06/ransel-sailor-charinuus-barang-1oF2e.jpg",
    alt: "Ransel Sailor Charinus warna abu-abu",
  },
  {
    nama: "Ransel Sailor Kanaguta",
    tag: "Ransel",
    src: "/2024/01/ransel-sailor-kanaguta-barang-dD6t2.jpg",
    alt: "Ransel Sailor Kanaguta",
  },
  {
    nama: "Selempang Sailor Molurus",
    tag: "Selempang",
    src: "/2024/01/slempang-sailor-molurus-barang-iQhW5.jpg",
    alt: "Tas selempang Sailor Molurus",
  },
  {
    nama: "Sailor Isurus Lite",
    tag: "Ransel",
    src: "/2024/01/sailor-bp-isurus-lite-barang-LZVmI.jpg",
    alt: "Ransel ringan Sailor Isurus Lite",
  },
];

/* Ragam jenis tas (kategori ringkas) */
export const jenisTas: Produk[] = [
  { nama: "Ransel", src: "/2024/06/002-BACKPACK.jpg", alt: "Ransel custom" },
  { nama: "Selempang", src: "/2024/06/005-SELEMPANG.jpg", alt: "Tas selempang custom" },
  { nama: "Totebag", src: "/2024/06/004-TOTEBAG.jpg", alt: "Totebag custom" },
  { nama: "Waistbag", src: "/2024/06/007-WAISTBAG.jpg", alt: "Waistbag custom" },
  { nama: "Tas Laptop", src: "/2024/06/008-TAS-LAPTOP.jpg", alt: "Tas laptop custom" },
  { nama: "Travelbag", src: "/2024/06/10-TRAVELBAG.jpg", alt: "Travelbag custom" },
];

/* ------------------------------------------------------------------ */
/* Produk Koper                                                        */
/* ------------------------------------------------------------------ */

export const koperProduk: Produk[] = [
  {
    nama: "Koper Hardcase Hitam",
    tag: "Kabin & Bagasi",
    src: "/2024/10/Koper-Shafira-Hitam.jpg",
    alt: "Koper hardcase hitam custom branding",
  },
  {
    nama: "Koper Hardcase Putih",
    tag: "Kabin & Bagasi",
    src: "/2024/10/Koper-Shafira-Putih.jpg",
    alt: "Koper hardcase putih custom branding",
  },
  {
    nama: "Koper Hardcase Merah",
    tag: "Kabin & Bagasi",
    src: "/2024/10/Koper-Shafira-Merah.jpg",
    alt: "Koper hardcase merah custom branding",
  },
  {
    nama: "Koper Hardcase Abu",
    tag: "Kabin & Bagasi",
    src: "/2024/10/Koper-Shafira-Abu-Abu.jpg",
    alt: "Koper hardcase abu-abu custom branding",
  },
];

/* ------------------------------------------------------------------ */
/* Kategori Konveksi                                                   */
/* ------------------------------------------------------------------ */

export const konveksiKategori: Produk[] = [
  { nama: "Kaos", src: "/2024/06/001-KAOS.jpg", alt: "Kaos custom", pos: "center top" },
  { nama: "Polo Shirt", src: "/2024/06/002-WANGKI.jpg", alt: "Polo shirt custom", pos: "center top" },
  { nama: "Hoodie", src: "/2024/06/003-hoodie.jpg", alt: "Hoodie custom", pos: "center top" },
  { nama: "Varsity", src: "/2024/06/004-VARSITY.jpg", alt: "Jaket varsity custom", pos: "center top" },
  { nama: "Kemeja & Seragam", src: "/2024/06/006-KEMEJA-RESMI.jpg", alt: "Kemeja seragam custom", pos: "center top" },
  { nama: "Jaket", src: "/2024/06/009-JAKET-BOMBER.jpg", alt: "Jaket bomber custom", pos: "center top" },
  { nama: "Jersey", src: "/2024/06/013-JERSEY.jpg", alt: "Jersey custom", pos: "center top" },
  { nama: "Almamater", src: "/2024/06/011-almamater.jpg", alt: "Jas almamater custom", pos: "center top" },
  { nama: "Training", src: "/2024/06/010-traning-olahraga.jpg", alt: "Setelan training olahraga custom", pos: "center top" },
  { nama: "Topi", src: "/2024/06/014-TOPI.jpg", alt: "Topi custom", pos: "center top" },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export type Faq = { q: string; a: string };

export const faqUmum: Faq[] = [
  {
    q: "Apakah bisa custom desain dan logo sendiri?",
    a: "Bisa. Desain, bahan, warna, dan penempatan logo dapat disesuaikan. Tim kami membantu menyiapkan desain hingga siap produksi.",
  },
  {
    q: "Berapa minimum pemesanan (MOQ)?",
    a: "Minimum pemesanan menyesuaikan jenis produk dan tingkat kustomisasi. Silakan konsultasi via WhatsApp agar kami informasikan sesuai kebutuhan Anda.",
  },
  {
    q: "Berapa lama estimasi waktu produksi?",
    a: "Estimasi bergantung pada jumlah, jenis produk, dan antrean produksi. Estimasi pasti kami sampaikan saat penawaran.",
  },
  {
    q: "Bagaimana cara memesan?",
    a: "Hubungi kami melalui WhatsApp, sampaikan kebutuhan Anda, lalu kami bantu dari penyusunan desain, penawaran, sampel, hingga produksi.",
  },
  {
    q: "Apakah menerima pesanan untuk instansi dan komunitas?",
    a: "Ya. Kami terbiasa melayani komunitas, instansi, korporat, serta travel umrah dan haji dengan kebutuhan jumlah besar.",
  },
];

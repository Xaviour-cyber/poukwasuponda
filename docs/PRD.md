# PRD — Website Gereja POUK Wasuponda

**Versi:** 0.2 (UI/UX mengikuti Mobbin) · **Tanggal:** 27 Oktober 2026 · **Penyusun:** Xaviour

## 1. Ringkasan Produk

Website resmi POUK Wasuponda sebagai "rumah digital" jemaat: tempat jemaat dan pengunjung baru menemukan jadwal ibadah, warta, renungan, kegiatan, galeri, serta cara berelasi dan memberi. **Antarmuka dan pengalaman pengguna mengikuti mobbin.com secara persis** (struktur halaman, tata letak, tipografi, dan pola interaksi); hanya isi, foto, dan satu warna aksen yang diganti dengan konten gerejawi.

## 2. Latar Belakang dan Tujuan

**Masalah saat ini (asumsi, mohon dikonfirmasi):**

- Informasi jadwal, warta, dan pengumuman tersebar di grup WhatsApp dan mudah tenggelam.
- Pengunjung baru atau jemaat yang merantau sulit menemukan informasi resmi gereja.
- Belum ada arsip digital renungan, warta, dan dokumentasi kegiatan.

**Tujuan:**

1. Menjadi sumber informasi resmi dan terkini satu pintu.
2. Memudahkan pengunjung baru mengenal dan datang ke gereja.
3. Mempermudah pengurus mengelola konten tanpa keahlian teknis.
4. Menyediakan arsip pelayanan (warta, renungan, galeri) yang rapi dan mudah dicari.

**Non-tujuan (versi 1):** aplikasi mobile native, sistem keuangan gereja lengkap, live streaming sendiri.

## 3. Target Pengguna

| Persona | Kebutuhan utama |
| --- | --- |
| Jemaat aktif (dewasa) | Jadwal ibadah, warta mingguan, pengumuman, renungan |
| Pemuda/remaja | Kegiatan, galeri, pendaftaran event, tampilan modern |
| Lansia | Teks besar, navigasi sederhana, kontras tinggi |
| Pengunjung baru | Lokasi, jam ibadah, "apa yang diharapkan", kontak |
| Jemaat perantau | Renungan, warta, ibadah daring/rekaman, persembahan |
| Admin/pengurus | Kelola konten cepat lewat dashboard sederhana |

## 4. Acuan UI/UX: Mobbin.com (Tata Letak Persis, Isi Gerejawi)

Seluruh antarmuka mengikuti mobbin.com secara persis dalam struktur halaman, urutan seksi, tata letak, hierarki tipografi, dan pola interaksi. Yang diganti hanya teks, foto, ikon, dan satu warna aksen, semuanya bertema gereja.

### 4.1 Aturan acuan

1. Acuan tunggal adalah beranda mobbin.com (dibaca per 27 Oktober 2026). Jika ada keraguan desain, ikuti Mobbin, bukan selera pribadi.
2. Yang ditiru: struktur, urutan seksi, grid, spacing, hierarki tipografi, gaya komponen, dan perilaku interaksi.
3. Yang diganti: teks, foto, ikon, dan satu warna aksen, semuanya bertema gereja.
4. Yang tidak boleh dipakai: logo, nama, teks, screenshot, ikon aplikasi, dan kode milik Mobbin. Semua aset dibuat sendiri.
5. Nilai persis (ukuran font, warna, spacing, radius, animasi) tercatat di bagian 4.5 sampai 4.7 dari referensi pihak ketiga. Nilai itu diverifikasi langsung dari mobbin.com lewat DevTools dan dicatat di style guide Figma sebelum coding.

### 4.2 Pemetaan seksi beranda (urut dari atas ke bawah)

| # | Seksi | Pola di mobbin.com | Padanan di website POUK Wasuponda |
| --- | --- | --- | --- |
| 1 | Navbar | Logo di kiri, tiga tautan teks (MCP, Customers, Pricing), di kanan Log in, Join for free, dan Open Mobbin | Logo gereja di kiri; tautan Ibadah, Warta, Renungan, Kegiatan; di kanan "Kontak" dan tombol utama "Rencanakan Kunjungan" |
| 2 | Hero | Headline sangat besar di tengah dengan ikon aplikasi bulat disisipkan di antara kata, sub-headline pendek, dua tombol (Join for free, See plans), lalu gambar atau video produk lebar di bawahnya | Headline besar dengan ikon bulat gerejawi (salib, merpati, roti, Alkitab, lonceng) disisipkan di antara kata, mis. "Tempat keluarga bertumbuh dalam iman" (teks final menunggu pengurus); sub-headline berisi alamat dan jam ibadah; tombol "Rencanakan Kunjungan" dan "Lihat Jadwal Ibadah"; foto atau video ibadah lebar di bawahnya |
| 3 | Strip kepercayaan | Teks kecil "Trusted by teams and agents at" diikuti deretan logo | "Pelayanan di POUK Wasuponda" diikuti deretan ikon komisi pelayanan |
| 4 | Masalah dan solusi | Headline dua baris besar ("Design research took hours. Now, it's one search."), paragraf pendek, dan latar kumpulan screenshot dalam kolom | "Info gereja tersebar di banyak grup. Sekarang, cukup satu tempat." dengan latar kolom kartu foto kegiatan dan kutipan renungan |
| 5 | Perpustakaan bertab | Judul "One library for all your needs", tab kategori (Apps, Sites, Screens, Flows, Animations, UI Elements), grid kartu berganti sesuai tab | "Satu tempat untuk semua kebutuhan jemaat"; tab Jadwal, Warta, Renungan, Kegiatan, Galeri, Komisi; grid kartu berganti per tab |
| 6 | Pencarian | Judul "Give your AI agents access to Mobbin", tombol "Connect MCP", mockup permintaan beserta hasil berupa kartu | "Temukan apa pun di website gereja": mockup kotak pencarian dengan hasil kartu (warta, renungan, kegiatan); tombol "Coba Cari" (F-10). Tidak ada fitur AI di versi 1 |
| 7 | Cerita | Judul, tiga kartu cerita dengan tautan "Read story", satu kutipan besar dengan foto dan nama | "Cerita Jemaat": tiga kartu kisah pelayanan atau kesaksian dengan tautan "Baca cerita", satu kutipan besar dengan foto dan nama (izin tertulis wajib) |
| 8 | Blok sorotan | Blok fitur khusus (Finance+): teks dan tombol "Explore Finance+" di tengah, kolom screenshot di kiri dan kanan | "Sorotan Pelayanan" (mis. Natal, Paskah, atau program aktif): teks dan tombol "Lihat Selengkapnya" di tengah, kolom foto kegiatan di kiri dan kanan |
| 9 | CTA penutup | Headline "Find what works. Design what's next.", paragraf cerita asal, dua tombol | "Datang dan lihat sendiri" dengan paragraf singkat sejarah gereja; tombol "Rencanakan Kunjungan" dan "Hubungi Kami" |
| 10 | Footer | Logo, tiga kolom tautan (Products, Resources, Company), hak cipta, tautan Privacy, Terms, Copyright, ikon media sosial | Logo, tiga kolom (Ibadah, Sumber Daya, Gereja), hak cipta, Kebijakan Privasi, ikon YouTube, Facebook, Instagram, WhatsApp |

Yang terbaca dari mobbin.com hanya struktur dan teks halaman. Perilaku gerak (arah dan kecepatan kolom kartu, animasi hero, efek hover) dan tampilan mobile harus diverifikasi langsung di browser sebelum desain dikunci.

### 4.3 Halaman dalam

Halaman Ibadah, Warta, Renungan, Kegiatan, Galeri, Komisi, dan Kontak memakai kerangka yang sama dengan beranda: navbar, grid kartu, tab, dan footer yang identik. Area jelajah Mobbin memerlukan login, jadi pola halamannya (bilah pencarian, filter, grid kartu) diperiksa lewat akun gratis dan dicatat di style guide sebelum halaman dalam didesain.

### 4.4 Sistem desain

| Elemen | Aturan |
| --- | --- |
| Tata letak | Lebar kontainer, grid, jarak antarseksi, dan ritme vertikal mengikuti Mobbin, diukur di 1440 px dan 390 px |
| Tipografi | Font, ukuran, bobot, dan hierarki heading mengikuti Mobbin; jika font berlisensi tidak bisa dipakai, pakai padanan terdekat dari Google Fonts |
| Warna | Skema netral dan kontras seperti Mobbin; satu warna aksen gerejawi (biru tua atau ungu liturgi, diputuskan pengurus) hanya untuk tombol utama, tautan, dan ikon |
| Komponen | Tombol, kartu, tab, input, dan tag: bentuk, radius, border, dan bayangan mengikuti Mobbin |
| Gerak | Efek muncul saat scroll, kolom kartu, dan hover mengikuti Mobbin; patuhi `prefers-reduced-motion` |
| Ikon dan gambar | Ikon bulat gerejawi buatan sendiri menggantikan ikon aplikasi; foto asli jemaat dan gedung gereja, tanpa stok foto generik |
| Responsif | Mobile-first; urutan seksi dan perilaku tombol di mobile mengikuti Mobbin versi mobile |
| Bahasa dan nada | Bahasa Indonesia, hangat, dan singkat; headline pendek seperti gaya Mobbin |

### 4.5 Token visual: warna, tipografi, spacing, bentuk

Sumber: [Refero Styles, ekstraksi gaya mobbin.com](https://styles.refero.design/style/ef44a995-6745-4dc7-86ab-f7227f108f81). Ini ekstraksi pihak ketiga yang nilainya sudah dinormalisasi, bukan pengukuran saya sendiri, dan bisa berbeda dari situs saat ini (contoh hero di sumber itu memakai headline lain dari beranda Mobbin sekarang). Satu sumber lain menyebut Mobbin memakai font Inter dengan grid 4 px, tetapi sumber itu ringkasan otomatis yang kurang rinci, jadi tabel di bawah memakai sumber yang lebih lengkap. Verifikasi tiap nilai di DevTools sebelum desain dikunci.

**Warna** (seluruhnya akromatik, tanpa warna kromatik)

| Nama | HEX | Peran |
| --- | --- | --- |
| Midnight Ink | #141414 | Teks utama, heading, tombol terisi, ikon |
| Pure Canvas | #FFFFFF | Latar halaman, kartu, teks pada tombol gelap |
| Graphite | #707070 | Teks isi sekunder dan tautan |
| Ash | #ADADAD | Teks tersier, border tombol nonaktif |
| Silver | #C2C2C2 | Skeleton loader dan isian nonaktif |
| Slate Shadow | #E0E0E0 | Cincin bayangan tombol (rgba(64,64,64,0.16)) |
| Fog | #EDEDED | Pembatas dan border kartu |
| Mist | #F2F2F2 | Tint navbar, input, permukaan dalam |

Default persis Mobbin adalah tanpa warna aksen. Aksen gerejawi hanya dipakai jika pengurus memintanya (pertanyaan terbuka 11). Catatan aksesibilitas: menurut hitungan saya #ADADAD di atas putih berkontras sekitar 2,25:1, di bawah batas 4,5:1, jadi untuk teks bermakna (placeholder, tab tidak aktif) pakai #707070 (sekitar 4,95:1).

**Tipografi**

- Font: saans (kustom) dengan fitur OpenType "calt" 0, "dlig", "ss07". Pengganti terdekat: Inter Variable atau Geist.
- Bobot: 400 (isi panjang), 440 (label UI dan navigasi), 456 (isi menengah), 600 (judul dan teks tombol), 652 (headline besar). Tidak ada bobot 700 atau 800.

| Peran | Ukuran | Line height | Letter spacing | Bobot |
| --- | --- | --- | --- | --- |
| Display | 80 px | 80 px | -0,88 px | 652 |
| Heading besar | 56 px | 63 px | -0,39 px | 652 |
| Heading | 32 px | 42 px | tidak ada | 652 |
| Subheading | 20 px | 28 px | +0,28 px | 440 atau 600 |
| Body | 16 px | 22 px | +0,21 px | 400, 456, atau 600 |
| Body kecil | 14 px | 20 px | tidak ada | 400 atau 440 |
| Caption | 12 px | 16 px | +0,2 px | 400 |

Skala ini untuk desktop. Ukuran di mobile (390 px) belum tersedia dan harus diukur.

**Spacing dan tata letak**

| Elemen | Nilai |
| --- | --- |
| Unit dasar | 8 px |
| Skala spacing | 8, 16, 24, 32, 40, 64, 80, 104, 120 px |
| Lebar maksimum halaman | 1280 px |
| Jarak antarseksi | 80 px |
| Padding kartu | 16–24 px |
| Jarak antarelemen | 8–16 px |
| Tinggi navbar | 60 px |

**Bentuk dan bayangan**

| Elemen | Nilai |
| --- | --- |
| Tombol, tag, input | Radius 9999 px (pil) |
| Kartu | Radius 16–24 px |
| Thumbnail dan gambar | Radius 16 px |
| Modal dan dropdown | Radius 24 px |
| Badge kecil | Radius 8 px |
| Kartu (elevasi) | Tanpa bayangan; border 1 px #EDEDED |
| Hover tombol | Cincin inset rgba(64,64,64,0.16) 0 0 0 1px |
| Dropdown | rgba(0,0,0,0.04) 0 8px 40px 0 |

### 4.6 Spesifikasi komponen

| Komponen | Spesifikasi |
| --- | --- |
| Tombol utama (terisi) | Latar #141414, teks #FFFFFF, radius 9999 px, padding horizontal 16 px, teks bobot 600 ukuran 14–16 px |
| Tombol outline | Latar transparan, teks dan border 1 px #141414, radius 9999 px, padding horizontal 16 px |
| Tombol atau tab nonaktif | Latar transparan, teks dan border #ADADAD, radius 9999 px, padding horizontal 12 px |
| Pil filter | Aktif: latar #141414, teks #FFFFFF. Nonaktif: border 1 px #141414. Padding 4 px 12 px, teks 14 px bobot 440, jarak antarpil 8 px |
| Input pencarian | Latar #F2F2F2, tanpa border, radius 9999 px, padding 8 px 16 px, teks 14 px |
| Kartu | Latar #FFFFFF, border 1 px #EDEDED, radius 16 px, padding 16 px (24 px untuk kartu teks), gambar di dalamnya radius 12–16 px |
| Badge ("Baru") | Latar #141414, teks #FFFFFF 12 px bobot 600, radius 9999 px, padding 2 px 8 px |
| Navbar | Tinggi 60 px, padding horizontal 24 px, latar #FFFFFF atau tint #F2F2F2, tautan 14 px bobot 440 |
| Dropdown atau mega-menu | Latar #FFFFFF, radius 24 px, padding 24–32 px, grid 4 kolom; label kategori 12 px #ADADAD huruf kapital, item 16 px bobot 440 |
| Kartu cerita | Padding 24 px, avatar lingkaran 36 px, nama 14 px bobot 600, keterangan 12 px #707070, isi 14 px dengan line height 1,5 |
| Ikon | Outline, goresan tipis sekitar 1,5 px, warna #141414 |

### 4.7 Animasi dan gerak

Sumber di atas tidak memuat durasi, easing, atau arah gerak. Yang tercatat hanya perilaku berikut:

- Navbar berubah dari transparan ke putih atau #F2F2F2 saat halaman di-scroll.
- Tombol menampilkan cincin inset tipis saat hover.
- Dropdown tampil dengan bayangan lembut di atas konten.
- Beranda memuat banyak kartu screenshot dalam kolom. Apakah kolom itu bergerak (marquee) belum terverifikasi.

Yang masih harus diukur dari mobbin.com: durasi, easing, delay, jarak geser, arah dan kecepatan kolom kartu, serta efek muncul saat scroll. Caranya: buka panel Animations dan Elements > Computed di DevTools, rekam di tab Performance saat scroll, lalu catat nilai `transition` dan `@keyframes` di CSS.

Sampai pengukuran selesai, pakai nilai sementara berikut. Ini usulan saya, bukan hasil ukur Mobbin.

| Gerak | Durasi | Easing |
| --- | --- | --- |
| Hover tombol dan kartu | 150 ms | ease-out |
| Navbar saat scroll | 200 ms | ease-out |
| Dropdown | 200 ms | ease-out |
| Muncul saat scroll (fade dan geser 16 px) | 500 ms | ease-out |
| Kolom kartu bergerak (jika terverifikasi) | 40–60 detik per putaran | linear |

Semua gerak dimatikan atau dikurangi saat `prefers-reduced-motion` aktif.

### 4.8 Kriteria penerimaan UI

- Uji berdampingan: beranda dan satu halaman dalam dibandingkan dengan mobbin.com di 1440 px dan 390 px; urutan seksi, grid, dan hierarki tipografi sama.
- Tidak ada logo, teks, screenshot, ikon, atau kode milik Mobbin di situs.
- Seluruh isi (teks, foto, ikon) bertema gereja dan disetujui pengurus.
- Skor Lighthouse minimal 90 untuk performa, aksesibilitas, dan SEO.
- Satu-satunya pengecualian dari Mobbin: ukuran teks isi (minimal 16 px) dan kontras disesuaikan agar lolos WCAG AA, demi jemaat lansia.

## 5. Struktur Situs (Sitemap)

- **Beranda**: 10 seksi dengan urutan yang sama seperti beranda Mobbin (lihat bagian 4.2)
- **Tentang Kami**: sejarah, visi-misi, pengakuan iman (jika ada), struktur pelayan/majelis, komisi/seksi pelayanan
- **Ibadah**: jadwal ibadah rutin dan khusus, lokasi + peta, "Kunjungan Pertama", ibadah daring/rekaman
- **Warta Jemaat**: arsip mingguan (halaman + unduh PDF)
- **Renungan**: harian/mingguan, kategori, pencarian
- **Kegiatan**: kalender, detail kegiatan, pendaftaran
- **Galeri**: album foto/video per kegiatan
- **Komisi/Pelayanan**: halaman tiap komisi (pemuda, anak, perempuan, dsb.)
- **Beri / Persembahan**: informasi rekening, QRIS, panduan konfirmasi
- **Permohonan Doa**: formulir doa
- **Kontak**: alamat, peta, WhatsApp, formulir pesan
- **Admin (/admin)**: dashboard pengelolaan konten

## 6. Kebutuhan Fitur

Prioritas: **P0** wajib rilis awal · **P1** penting, rilis berikutnya · **P2** nanti.

### 6.1 Sisi Publik

| ID | Fitur | Deskripsi | Prioritas |
| --- | --- | --- | --- |
| F-01 | Beranda dinamis | Menampilkan jadwal terdekat, warta, renungan, dan kegiatan terbaru otomatis | P0 |
| F-02 | Jadwal ibadah | Daftar ibadah rutin/khusus, penanda "Ibadah berikutnya", tombol tambah ke kalender | P0 |
| F-03 | Lokasi & peta | Alamat, embed peta, tombol "Buka di Google Maps", petunjuk arah | P0 |
| F-04 | Halaman Kunjungan Pertama | FAQ: pakaian, durasi, ibadah anak, parkir, apa yang diharapkan | P0 |
| F-05 | Warta jemaat | Arsip per minggu, halaman baca + unduh PDF | P0 |
| F-06 | Renungan | Artikel dengan ayat, penulis, kategori, tanggal, tombol bagikan | P0 |
| F-07 | Kegiatan & kalender | Tampilan kalender dan daftar, filter per komisi | P0 |
| F-08 | Galeri | Album foto per kegiatan, lightbox, lazy loading | P1 |
| F-09 | Profil gereja & pelayan | Sejarah, visi-misi, majelis/pengurus, komisi | P0 |
| F-10 | Pencarian global | Cari warta, renungan, kegiatan | P1 |
| F-11 | Kontak & WhatsApp | Formulir kontak + tombol chat WhatsApp pengurus | P0 |
| F-12 | Permohonan doa | Formulir (anonim opsional), masuk ke dashboard admin | P1 |
| F-13 | Informasi persembahan | Rekening, QRIS, panduan konfirmasi. Tidak memproses pembayaran sendiri di v1 | P1 |
| F-14 | Pendaftaran kegiatan | Formulir RSVP untuk retret, ibadah khusus, Natal, Paskah | P1 |
| F-15 | Ibadah daring/rekaman | Embed YouTube/Facebook Live atau tautan rekaman | P1 |
| F-16 | Pengumuman penting | Banner di atas situs (mis. perubahan jadwal, duka cita) | P1 |
| F-17 | Buletin email/WhatsApp | Berlangganan warta mingguan | P2 |
| F-18 | Ayat harian | Widget ayat otomatis | P2 |
| F-19 | Direktori jemaat (login) | Data jemaat privat, hanya untuk anggota terverifikasi | P2 |
| F-20 | Multibahasa | Bahasa Indonesia + opsional bahasa daerah/Inggris | P2 |

### 6.2 Sisi Admin

| ID | Fitur | Deskripsi | Prioritas |
| --- | --- | --- | --- |
| A-01 | Login admin | Email + kata sandi / magic link, peran akses | P0 |
| A-02 | Kelola jadwal ibadah | Tambah, ubah, hapus, jadwal berulang | P0 |
| A-03 | Kelola warta | Unggah PDF atau tulis langsung, jadwalkan terbit | P0 |
| A-04 | Kelola renungan | Editor rich text, kategori, draf/terbit | P0 |
| A-05 | Kelola kegiatan | Buat acara, kuota, pendaftar, ekspor daftar peserta | P1 |
| A-06 | Kelola galeri | Unggah banyak foto, kompres otomatis | P1 |
| A-07 | Kotak masuk | Pesan kontak dan permohonan doa | P1 |
| A-08 | Kelola profil & pelayan | Ubah halaman statis dan data pengurus | P1 |
| A-09 | Peran pengguna | Admin utama, editor konten, penulis renungan | P1 |
| A-10 | Statistik sederhana | Kunjungan halaman, konten terpopuler | P2 |

## 7. User Stories Utama

1. Sebagai **pengunjung baru**, saya ingin melihat jam ibadah dan lokasi dengan cepat agar bisa datang hari Minggu ini.
2. Sebagai **jemaat**, saya ingin membaca warta minggu ini dari ponsel tanpa mengunduh aplikasi.
3. Sebagai **jemaat lansia**, saya ingin teks besar dan menu sederhana agar mudah dibaca.
4. Sebagai **pemuda**, saya ingin mendaftar kegiatan lewat satu formulir singkat.
5. Sebagai **pengurus**, saya ingin mengunggah warta dalam kurang dari lima menit.
6. Sebagai **jemaat perantau**, saya ingin membaca renungan dan menonton rekaman ibadah dari kota lain.

## 8. Kebutuhan Non-Fungsional

- **Mobile-first:** mayoritas jemaat mengakses lewat ponsel.
- **Performa pada jaringan lambat:** target LCP < 2,5 detik pada 4G; gambar dikompres (WebP/AVIF), lazy loading, font dibatasi.
- **Aksesibilitas:** mengacu WCAG 2.1 AA: kontras tinggi, navigasi keyboard, teks alternatif gambar, ukuran sentuh minimal 44 px.
- **SEO lokal:** metadata, Open Graph (pratinjau saat dibagikan di WhatsApp), data terstruktur untuk gereja dan acara, Google Business Profile.
- **Keamanan & privasi:** HTTPS, validasi formulir, proteksi spam (captcha/honeypot), data permohonan doa hanya bisa diakses admin. Izin tertulis sebelum menampilkan foto atau nama jemaat, terutama anak-anak.
- **Kemudahan perawatan:** konten diubah lewat dashboard tanpa menyentuh kode; biaya hosting rendah.
- **Ketersediaan:** target uptime ≥ 99%.

## 9. Rekomendasi Teknis (Usulan)

| Lapisan | Pilihan | Paket awal | Catatan |
| --- | --- | --- | --- |
| Frontend | Next.js + TypeScript + Tailwind CSS + shadcn/ui | Gratis (open source) |  |
| Hosting | Vercel | Hobby (gratis) | Kuota cukup, tapi lisensi non-komersial perlu dikonfirmasi (lihat di bawah) |
| Backend/DB | Supabase (Postgres, Auth) | Free | Project di-pause setelah 7 hari tanpa aktivitas |
| Admin | Dashboard kustom di /admin, login dengan Supabase Auth | Gratis |  |
| Media | Supabase Storage | Free (1 GB file storage) | Foto wajib dikompres sebelum diunggah |
| Analitik | Google Analytics atau Vercel Web Analytics (pilih salah satu) | Gratis | Plausible tidak dipakai |
| Peta & video | Embed Google Maps, YouTube | Gratis | Video disimpan di YouTube, bukan di Supabase |
| Domain | .id atau .org | Berbayar, per tahun | Satu-satunya biaya wajib di awal |

### Batas free tier

Angka per 27 Oktober 2026, dari ringkasan pihak ketiga. Verifikasi ulang di [Vercel fair use guidelines](https://vercel.com/docs/limits/fair-use-guidelines), [Vercel Hobby plan](https://vercel.com/docs/plans/hobby-plan), dan [Supabase pricing](https://supabase.com/pricing) sebelum rilis.

| Layanan | Batas gratis | Dampak untuk website ini |
| --- | --- | --- |
| Vercel Hobby | 100 GB bandwidth, sekitar 1 juta edge request, sekitar 4 jam CPU, 100 menit build per bulan; 1 seat; hanya non-komersial | Kuota jauh dari terlampaui. Risikonya ada di lisensi |
| Supabase Free | Database 500 MB, file storage 1 GB, egress 5 GB, 50.000 pengguna aktif/bulan, 2 project | Database teks cukup bertahun-tahun. Storage galeri adalah batas pertama yang terasa |

### Catatan penting

- **Lisensi Vercel Hobby:** Vercel menganggap permintaan donasi sebagai penggunaan komersial. Halaman persembahan (F-13) berpotensi masuk kategori ini. Konfirmasi ke Vercel support sebelum rilis. Opsinya: tetap Hobby jika disetujui, upgrade ke Pro ($20/bulan), menghapus halaman persembahan, atau pindah hosting.
- **Auto-pause Supabase:** database terpause setelah 7 hari tanpa aktivitas, sehingga dashboard admin dan formulir berhenti bekerja. Mitigasi: ping terjadwal mingguan (mis. GitHub Actions) dan halaman publik yang di-cache (ISR).
- **Storage dan egress:** kompres foto ke WebP (target sekitar 250 KB per foto), batasi ukuran unggahan, dan jangan simpan video di Supabase.
- **Backup:** ekspor database secara berkala dan simpan di tempat terpisah.
- **Analitik:** pilih satu saja, Google Analytics atau Vercel Web Analytics, agar tidak ada skrip ganda.

**Entitas data garis besar:** `services` (jadwal ibadah), `bulletins` (warta), `devotionals` (renungan), `events`, `event_registrations`, `albums`, `photos`, `ministries`, `leaders`, `prayer_requests`, `contact_messages`, `announcements`, `users` (admin).

## 10. Metrik Keberhasilan

- Pengunjung bulanan dan persentase akses dari ponsel.
- Jumlah pembukaan halaman jadwal ibadah dan klik petunjuk arah.
- Jumlah pengunjung baru yang datang dan menyebut website sebagai sumber informasi.
- Frekuensi pembaruan konten (target: warta terbit setiap minggu).
- Waktu rata-rata admin mengunggah warta (target < 5 menit).
- Skor Lighthouse ≥ 90 (performa, aksesibilitas, SEO).

## 11. Roadmap

| Fase | Cakupan | Estimasi |
| --- | --- | --- |
| 0. Discovery | Wawancara pengurus, kumpulkan konten, foto, logo, jadwal | 1 minggu |
| 1. Desain | Bedah mobbin.com (ukur font, warna, spacing, animasi), style guide, desain pixel-match di Figma | 1–2 minggu |
| 2. MVP (P0) | Beranda, Tentang, Ibadah, Warta, Renungan, Kegiatan, Kontak, Admin dasar | 3–4 minggu |
| 3. Rilis & uji | Uji pengguna dengan jemaat, perbaikan, peluncuran | 1 minggu |
| 4. Iterasi (P1) | Galeri, doa, RSVP, pencarian, persembahan, ibadah daring | 3–4 minggu |
| 5. Lanjutan (P2) | Buletin, direktori jemaat, multibahasa, statistik | Menyesuaikan |

## 12. Risiko dan Mitigasi

| Risiko | Mitigasi |
| --- | --- |
| Konten tidak diperbarui setelah rilis | Tunjuk 1–2 admin tetap, buat alur unggah sesederhana mungkin, jadwal rutin tiap minggu |
| Koneksi internet jemaat terbatas | Optimasi gambar, halaman ringan, PDF warta dikompres |
| Desain terlalu "modern" bagi jemaat senior | Uji dengan jemaat lansia, ukuran font besar, navigasi sederhana |
| Privasi foto dan data jemaat | Izin tertulis, kontrol akses, tidak menampilkan data anak tanpa persetujuan orang tua |
| Kurangnya foto/konten berkualitas | Rencanakan sesi dokumentasi sejak fase discovery |
| Persetujuan pengurus/majelis | Libatkan pengurus sejak awal dan tampilkan prototipe sebelum membangun |
| Vercel Hobby hanya untuk penggunaan non-komersial, sedangkan situs memuat halaman persembahan | Konfirmasi ke Vercel support sebelum rilis; siapkan opsi Pro atau hosting alternatif |
| Supabase Free di-pause setelah 7 hari tanpa aktivitas | Ping terjadwal mingguan, halaman publik di-cache, pertimbangkan Pro bila admin dan formulir kritis |
| Storage 1 GB cepat penuh oleh foto galeri | Kompres ke WebP, batasi ukuran unggahan, video lewat YouTube |
| Desain terlalu mirip Mobbin sehingga melanggar hak cipta atau merek | Tiru struktur dan pola interaksi saja; jangan pakai logo, teks, screenshot, atau kode Mobbin; semua aset dibuat sendiri |
| Font, animasi, dan perilaku mobile Mobbin sulit ditiru persis tanpa pengukuran | Ukur langsung di DevTools, catat di style guide Figma; jika font berlisensi, pakai padanan terdekat dari Google Fonts |

## 

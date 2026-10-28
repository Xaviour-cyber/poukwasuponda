// Data resmi dan referensi POUK Wasuponda sesuai PRD v0.2
export const church = {
  name: "POUK Wasuponda",
  fullName: "Gereja Persekutuan Oikumene Umat Kristen Wasuponda",
  tagline: "Rumah digital jemaat: tempat keluarga bertumbuh dalam iman",
  address: "Wasuponda, Luwu Timur, Sulawesi Selatan",
  wa: "6281234567890",
  email: "sekretariat@pouk-wasuponda.org",
  mapsQuery: "POUK Wasuponda Luwu Timur",
  historyShort:
    "Berdiri sejak puluhan tahun melayani jemaat oikumene di Wasuponda dan sekitarnya, POUK Wasuponda adalah tempat bersekutu yang terbuka bagi semua orang untuk berakar, bertumbuh, dan berbuah dalam Kristus.",
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.mapsQuery)}`;

export const socialLinks = {
  youtube: "https://www.youtube.com/@GerejaPOUKJemaatWasuponda",
  facebook: "https://www.facebook.com/search/top?q=Gereja%20POUK%20Wasuponda",
  instagram: "https://www.instagram.com/explore/tags/poukwasuponda/",
  wa: `https://wa.me/${church.wa}`,
};

export const nav = [
  { href: "/", label: "Beranda" },
  { href: "/ibadah", label: "Ibadah" },
  { href: "/warta", label: "Warta Jemaat" },
  { href: "/renungan", label: "Renungan" },
  { href: "/kegiatan", label: "Kegiatan" },
  { href: "/kontak", label: "Kontak" },
];

export const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

export type Service = {
  id: string;
  name: string;
  day: number;
  time: string;
  place: string;
  note: string;
  badge?: string;
  target?: string;
};

export const services: Service[] = [
  {
    id: "raya",
    name: "Ibadah Raya",
    day: 0,
    time: "09:00",
    place: "Gedung Utama POUK Wasuponda",
    note: "Ibadah umum untuk seluruh keluarga dengan liturgi oikumene.",
    badge: "Utama",
    target: "Semua Jemaat",
  },
  {
    id: "sekolah-minggu",
    name: "Sekolah Minggu (Anak)",
    day: 0,
    time: "09:00",
    place: "Gedung Serbaguna Lt. 1",
    note: "Pendidikan rohani anak usia balita hingga tunas remaja.",
    badge: "Anak",
    target: "Anak-Anak & Balita",
  },
  {
    id: "doa-rabu",
    name: "Persekutuan Doa",
    day: 3,
    time: "19:00",
    place: "Gedung Utama",
    note: "Doa syafaat tengah pekan bersama majelis dan jemaat.",
    badge: "Doa",
    target: "Umum",
  },
  {
    id: "pemuda",
    name: "Ibadah Pemuda & Remaja",
    day: 6,
    time: "18:30",
    place: "Gedung Pemuda",
    note: "Pujian kontemporer, persekutuan pemuda, dan kelompok diskusi.",
    badge: "Pemuda",
    target: "Remaja & Pemuda",
  },
];

export function nextService(now = new Date()): Service {
  const t = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Makassar" }));
  const mins = t.getHours() * 60 + t.getMinutes();
  const wait = (s: Service) => {
    const [h, m] = s.time.split(":").map(Number);
    let d = (s.day - t.getDay() + 7) % 7;
    if (d === 0 && h * 60 + m <= mins) d = 7;
    return d * 1440 + h * 60 + m;
  };
  return [...services].sort((a, b) => wait(a) - wait(b))[0] || services[0];
}

export type Bulletin = {
  id: string;
  date: string;
  title: string;
  href: string;
  theme: string;
  liturgy: string;
  size: string;
};

export const bulletins: Bulletin[] = [
  {
    id: "w-2026-10-25",
    date: "25 Oktober 2026",
    title: "Warta Jemaat Minggu Ke-4 Oktober",
    href: "#",
    theme: "Bertekun dalam Doa dan Kasih Persaudaraan",
    liturgy: "Minggu Biasa",
    size: "1.4 MB",
  },
  {
    id: "w-2026-10-18",
    date: "18 Oktober 2026",
    title: "Warta Jemaat Minggu Ke-3 Oktober",
    href: "#",
    theme: "Melayani dengan Kerendahan Hati",
    liturgy: "Minggu Pelayanan",
    size: "1.2 MB",
  },
  {
    id: "w-2026-10-11",
    date: "11 Oktober 2026",
    title: "Warta Jemaat Minggu Ke-2 Oktober",
    href: "#",
    theme: "Keluarga yang Berakar di Dalam Kristus",
    liturgy: "Bulan Keluarga",
    size: "1.5 MB",
  },
  {
    id: "w-2026-10-04",
    date: "4 Oktober 2026",
    title: "Warta Jemaat Minggu Ke-1 Oktober",
    href: "#",
    theme: "Perjamuan Kudus Sedunia",
    liturgy: "Perjamuan Kudus",
    size: "1.3 MB",
  },
];

export type Devotional = {
  id: string;
  title: string;
  verse: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  readTime: string;
};

export const devotionals: Devotional[] = [
  {
    id: "dev-1",
    title: "Datang dengan apa adanya",
    verse: "Matius 11:28",
    category: "Penghiburan",
    author: "Pdt. Pelayan Jemaat",
    date: "26 Oktober 2026",
    readTime: "3 mnt baca",
    excerpt:
      "Letih tidak membuat kita tersingkir dari rumah Tuhan. Justru di sanalah kita diundang untuk beristirahat dan dipulihkan.",
  },
  {
    id: "dev-2",
    title: "Kasih yang bekerja dalam tindakan",
    verse: "1 Korintus 13:4-7",
    category: "Kehidupan Sehari-hari",
    author: "Majelis Jemaat",
    date: "23 Oktober 2026",
    readTime: "4 mnt baca",
    excerpt:
      "Kasih bukan sekadar getaran perasaan. Ia mewujud dalam sapaan ramah, kesabaran mendengarkan sesama, dan pengampunan nyata.",
  },
  {
    id: "dev-3",
    title: "Gembala yang mengenal nama kita",
    verse: "Mazmur 23:1-3",
    category: "Penguatan Iman",
    author: "Komisi Teologi",
    date: "20 Oktober 2026",
    readTime: "3 mnt baca",
    excerpt:
      "Di lembah yang paling curam dan tak menentu sekalipun, tangan-Nya menuntun langkah kita ke padang rumput yang tenang.",
  },
];

export type Event = {
  id: string;
  day: string;
  month: string;
  title: string;
  time: string;
  place: string;
  tag: string;
  status: "Buka Pendaftaran" | "Segera Hadir" | "Terbuka untuk Umum";
};

export const events: Event[] = [
  {
    id: "evt-1",
    day: "07",
    month: "Nov",
    title: "Retret Pemuda & Remaja Wasuponda",
    time: "08:00 - 17:00 WITA",
    place: "Camp Bukit Kasih Wasuponda",
    tag: "Komisi Pemuda",
    status: "Buka Pendaftaran",
  },
  {
    id: "evt-2",
    day: "15",
    month: "Nov",
    title: "Bakti Sosial & Pemeriksaan Kesehatan Gratis",
    time: "09:30 WITA",
    place: "Pelataran Gedung POUK",
    tag: "Komisi Diakonia",
    status: "Terbuka untuk Umum",
  },
  {
    id: "evt-3",
    day: "29",
    month: "Nov",
    title: "Ibadah Pembukaan Masa Adven 2026",
    time: "09:00 WITA",
    place: "Gedung Utama POUK",
    tag: "Ibadah Khusus",
    status: "Segera Hadir",
  },
  {
    id: "evt-4",
    day: "25",
    month: "Des",
    title: "Ibadah Raya Natal Bersama Jemaat",
    time: "09:00 WITA",
    place: "Gedung Utama POUK",
    tag: "Hari Raya",
    status: "Segera Hadir",
  },
];

export const ministries = [
  {
    id: "anak",
    name: "Komisi Anak",
    role: "Sekolah Minggu",
    desc: "Membimbing generasi cilik mencintai Tuhan dengan metode ceria dan ramah anak.",
    icon: "🕊️",
  },
  {
    id: "pemuda",
    name: "Komisi Pemuda & Remaja",
    role: "Generasi Penerus",
    desc: "Wadah bertumbuh, berkreasi, dan saling menguatkan di tengah tantangan zaman.",
    icon: "🔥",
  },
  {
    id: "wanita",
    name: "Persekutuan Wanita (PW)",
    role: "Pilar Doa & Keluarga",
    desc: "Persekutuan ibu-ibu jemaat dalam doa, perkunjungan kasih, dan pemberdayaan keluarga.",
    icon: "🌸",
  },
  {
    id: "pria",
    name: "Persekutuan Kaum Bapak (PKB)",
    role: "Kepemimpinan Rohani",
    desc: "Membangun persekutuan bapak sebagai teladan iman dan kepala keluarga kristiani.",
    icon: "⚓",
  },
  {
    id: "diakonia",
    name: "Komisi Diakonia",
    role: "Pelayanan Sosial",
    desc: "Menyalurkan kasih nyata kepada yang sakit, lansia, dan saudara yang membutuhkan.",
    icon: "🤝",
  },
  {
    id: "musik",
    name: "Musik & Multimedia",
    role: "Pujian & Liturgi",
    desc: "Memperlengkapi peribadahan dengan pujian, sound, tata visual, dan rekaman digital.",
    icon: "🎵",
  },
];

export const testimonials = [
  {
    id: "t1",
    author: "Kel. Bpk. Markus & Ibu Sarah",
    role: "Jemaat Baru (Pindah 2025)",
    avatarInitials: "MS",
    text: "Pertama kali kami sekeluarga pindah tugas ke Wasuponda, kami merasa sangat disambut di pintu gereja. Keramahan jemaat membuat kami langsung merasa di rumah.",
    tag: "Penyambutan",
  },
  {
    id: "t2",
    author: "Daniel R.",
    role: "Anggota Komisi Pemuda",
    avatarInitials: "DR",
    text: "Persekutuan pemuda di sini bukan cuma kumpul biasa, tapi tempat kita bisa terbuka cerita pergumulan hidup dan saling mendoakan tanpa dihakimi.",
    tag: "Komisi Pemuda",
  },
  {
    id: "t3",
    author: "Ibu Martha K.",
    role: "Jemaat Perantau di Makassar",
    avatarInitials: "MK",
    text: "Meskipun sedang bekerja di luar kota, website ini membuat saya tetap bisa membaca warta dan renungan setiap Minggu pagi tepat waktu.",
    tag: "Jemaat Perantau",
  },
];

export const featuredQuote = {
  quote:
    "Gereja bukan sekadar bangunan beton di Wasuponda, melainkan setiap pribadi yang saling mengasihi, mengampuni, dan berjalan bersama dalam terang Kristus.",
  author: "Pdt. Pelayan Jemaat POUK Wasuponda",
  title: "Gembala & Penasihat Majelis Jemaat",
};

export const verses = [
  "Bersukacita pergi ke rumah Tuhan (Mazmur 122:1)",
  "Kasih tidak berkesudahan (1 Korintus 13:8)",
  "Tuhan adalah gembalaku, takkan kekurangan aku (Mazmur 23:1)",
  "Datanglah kepada-Ku, kamu semua yang letih lesu (Matius 11:28)",
  "Segala perkara dapat kutanggung di dalam Dia (Filipi 4:13)",
];

export const faq = [
  {
    q: "Apa yang sebaiknya saya kenakan saat beribadah?",
    a: "Pakaian rapi, sopan, dan nyaman. Anda tidak perlu pakaian formal khusus untuk bisa beribadah bersama kami.",
  },
  {
    q: "Berapa lama ibadah hari Minggu berlangsung?",
    a: "Ibadah Raya biasanya berlangsung sekitar 75 hingga 90 menit, meliputi pujian, doa, firman, dan persembahan.",
  },
  {
    q: "Apakah ada kelas untuk anak-anak selama ibadah?",
    a: "Ya! Sekolah Minggu diadakan bersamaan dengan Ibadah Raya jam 09:00 WITA dengan guru-guru yang penuh perhatian.",
  },
  {
    q: "Apakah saya harus jemaat terdaftar untuk berkunjung?",
    a: "Sama sekali tidak! Semua orang, tamu luar kota, maupun pengunjung baru sangat disambut dengan tangan terbuka.",
  },
  {
    q: "Bagaimana cara memberi persembahan jika beribadah daring?",
    a: "Informasi rekening resmi gereja dan kode QRIS tersedia di sekretariat gereja atau melalui pengurus bendahara.",
  },
];

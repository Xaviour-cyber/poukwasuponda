// Data resmi dan referensi POUK Wasuponda
export const church = {
  name: "POUK Wasuponda",
  fullName: "Gereja Persekutuan Oikumene Umat Kristen Wasuponda",
  tagline: "Rumah bersekutu, berakar, dan bertumbuh bersama dalam terang kasih Kristus",
  address: "Wasuponda, Kabupaten Luwu Timur, Sulawesi Selatan",
  wa: "6281234567890",
  email: "sekretariat@pouk-wasuponda.org",
  mapsQuery: "POUK Wasuponda Luwu Timur",
  historyShort:
    "Gereja Persekutuan Oikumene Umat Kristen (POUK) Wasuponda hadir sebagai rumah rohani yang menyatukan beragam latar belakang jemaat dalam satu persekutuan kasih di Wasuponda, Luwu Timur.",
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.mapsQuery)}`;

export const socialLinks = {
  instagram: "https://www.instagram.com/gereja_poukwasuponda/",
  youtube: "https://www.youtube.com/@GerejaPOUKJemaatWasuponda",
  wa: `https://wa.me/${church.wa}?text=${encodeURIComponent("Shalom Sekretariat POUK Wasuponda, saya ingin bertanya seputar...")}`,
};

// 5 menu utama bersih (Kontak ditempatkan khusus di tombol aksi kanan)
export const nav = [
  { href: "/", label: "Beranda" },
  { href: "/ibadah", label: "Ibadah" },
  { href: "/warta", label: "Warta Jemaat" },
  { href: "/renungan", label: "Renungan" },
  { href: "/kegiatan", label: "Kegiatan" },
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
    id: "sekolah-minggu",
    name: "Ibadah Sekolah Minggu",
    day: 0,
    time: "08:00",
    place: "Gedung Serbaguna POUK",
    note: "Pendidikan rohani dan pembinaan iman bagi anak-anak dan balita.",
    badge: "Sekolah Minggu",
    target: "Anak-Anak & Balita",
  },
  {
    id: "ibadah-minggu",
    name: "Ibadah Hari Minggu",
    day: 0,
    time: "10:00",
    place: "GEREJA POUK Wasuponda",
    note: "Ibadah raya bersama seluruh keluarga jemaat POUK Wasuponda.",
    badge: "Ibadah Raya",
    target: "Semua Jemaat & Tamu",
  },
  {
    id: "pemuda",
    name: "Ibadah Persekutuan Pemuda",
    day: 4, // Kamis
    time: "18:30",
    place: "Gedung Pemuda POUK",
    note: "Persekutuan generasi muda dengan pujian kontemporer dan sharing firman.",
    badge: "Pemuda",
    target: "Pemuda",
  },
  {
    id: "remaja",
    name: "Ibadah Persekutuan Remaja",
    day: 6, // Sabtu
    time: "16:00",
    place: "GEREJA POUK Wasuponda",
    note: "Persekutuan remaja untuk saling menguatkan dalam iman dan karakter kristiani.",
    badge: "Remaja",
    target: "Remaja",
  },
];

// Perhitungan jadwal terdekat dengan zona waktu resmi WITA (Asia/Makassar, UTC+8)
export function nextService(now = new Date()): Service {
  // Format waktu saat ini ke zona Asia/Makassar
  const makassarStr = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Makassar",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(now);

  const t = new Date(makassarStr);
  const currentDay = t.getDay();
  const currentMins = t.getHours() * 60 + t.getMinutes();

  const wait = (s: Service) => {
    const [h, m] = s.time.split(":").map(Number);
    let diffDays = (s.day - currentDay + 7) % 7;
    const targetMins = h * 60 + m;

    if (diffDays === 0 && targetMins <= currentMins) {
      diffDays = 7;
    }
    return diffDays * 1440 + (targetMins - currentMins);
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
    title: "Kasih yang bekerja dalam tindakan nyata",
    verse: "1 Korintus 13:4-7",
    category: "Kehidupan Sehari-hari",
    author: "Majelis Jemaat",
    date: "23 Oktober 2026",
    readTime: "4 mnt baca",
    excerpt:
      "Kasih bukan sekadar getaran perasaan. Ia mewujud dalam sapaan ramah, kesabaran mendengarkan sesama, dan kemurahan hati.",
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
  year?: string;
  dateFull: string;
  title: string;
  summary: string;
  time: string;
  place: string;
  tag: string;
  image: string;
  status: "Buka Pendaftaran" | "Segera Hadir" | "Terbuka untuk Umum" | "Kegiatan Rutin";
};

export const events: Event[] = [
  {
    id: "evt-1",
    day: "07",
    month: "Nov",
    year: "2026",
    dateFull: "Sabtu, 07 November 2026",
    title: "Retret Pemuda & Remaja Wasuponda",
    summary: "Kegiatan retret pembinaan iman dan keakraban bagi pemuda dan remaja se-Wasuponda di alam terbuka.",
    time: "08:00 - 17:00 WITA",
    place: "Camp Bukit Kasih Wasuponda",
    tag: "Komisi Pemuda",
    image: "/events/retret-pemuda.jpg",
    status: "Buka Pendaftaran",
  },
  {
    id: "evt-2",
    day: "15",
    month: "Nov",
    year: "2026",
    dateFull: "Minggu, 15 November 2026",
    title: "Bakti Sosial & Pemeriksaan Kesehatan Gratis",
    summary: "Pelayanan kesehatan gratis dan pembagian paket kasih bagi warga jemaat lansia dan masyarakat sekitar.",
    time: "09:30 WITA",
    place: "Pelataran Gedung POUK",
    tag: "Komisi Diakonia",
    image: "/events/bakti-sosial.jpg",
    status: "Terbuka untuk Umum",
  },
  {
    id: "evt-3",
    day: "29",
    month: "Nov",
    year: "2026",
    dateFull: "Minggu, 29 November 2026",
    title: "Ibadah Pembukaan Masa Adven 2026",
    summary: "Ibadah khusus penyalaan lilin Adven pertama dan persiapan jemaat menyongsong peringatan Natal.",
    time: "10:00 WITA",
    place: "GEREJA POUK Wasuponda",
    tag: "Ibadah Khusus",
    image: "/events/adven-2026.jpg",
    status: "Segera Hadir",
  },
  {
    id: "evt-4",
    day: "25",
    month: "Des",
    year: "2026",
    dateFull: "Jumat, 25 Desember 2026",
    title: "Ibadah Raya Natal Bersama Jemaat",
    summary: "Perayaan Natal kudus bersama seluruh jemaat keluarga besar POUK Wasuponda dalam sukacita keselamatan.",
    time: "10:00 WITA",
    place: "GEREJA POUK Wasuponda",
    tag: "Hari Raya",
    image: "/events/natal-jemaat.jpg",
    status: "Segera Hadir",
  },
  {
    id: "evt-5",
    day: "Jum",
    month: "Pkn",
    year: "2026",
    dateFull: "Setiap Hari Jumat",
    title: "Latihan Paduan Suara & Musik Liturgi",
    summary: "Persiapan puji-pujian ibadah raya bersama tim pemusik, paduan suara, dan multimedia gereja.",
    time: "19:30 WITA",
    place: "Gedung Utama POUK",
    tag: "Musik & Liturgi",
    image: "/events/paduan-suara.jpg",
    status: "Kegiatan Rutin",
  },
  {
    id: "evt-6",
    day: "Jum",
    month: "Pkn",
    year: "2026",
    dateFull: "Setiap Hari Jumat",
    title: "Persekutuan Doa Kaum Ibu (PW)",
    summary: "Persekutuan doa wanita jemaat, saling menopang dalam pergumulan keluarga dan perkunjungan kasih.",
    time: "16:30 WITA",
    place: "Ruang Serbaguna POUK",
    tag: "Persekutuan Wanita",
    image: "/events/doa-ibu.jpg",
    status: "Kegiatan Rutin",
  },
];

export type Ministry = {
  id: string;
  name: string;
  role: string;
  desc: string;
  schedule: string;
  iconType: "child" | "youth" | "women" | "men" | "diakonia" | "music";
};

export const ministries: Ministry[] = [
  {
    id: "anak",
    name: "Komisi Anak (Sekolah Minggu)",
    role: "Pendidikan Iman Anak",
    desc: "Membimbing tunas-tunas muda mengenal firman Tuhan melalui kelas ceria, cerita Alkitab, dan lagu pujian.",
    schedule: "Minggu, 09:00 WITA",
    iconType: "child",
  },
  {
    id: "pemuda",
    name: "Komisi Pemuda & Remaja",
    role: "Generasi Penerus",
    desc: "Wadah bertumbuh, berkreasi, dan saling menguatkan dalam persekutuan pemuda kristiani yang aktif dan berakar.",
    schedule: "Sabtu, 18:30 WITA",
    iconType: "youth",
  },
  {
    id: "wanita",
    name: "Persekutuan Wanita (PW)",
    role: "Pilar Doa & Keluarga",
    desc: "Persekutuan kaum ibu dalam doa syafaat, perkunjungan kasih jemaat, dan pembinaan ketahanan keluarga.",
    schedule: "Jumat, 16:30 WITA",
    iconType: "women",
  },
  {
    id: "pria",
    name: "Persekutuan Kaum Bapak (PKB)",
    role: "Keteladanan Rohani",
    desc: "Membangun persekutuan bapak sebagai imam keluarga dan teladan iman yang setia melayani Tuhan.",
    schedule: "Kamis, 19:00 WITA",
    iconType: "men",
  },
  {
    id: "diakonia",
    name: "Komisi Diakonia",
    role: "Pelayanan Kasih Nyata",
    desc: "Menyalurkan kepedulian nyata bagi jemaat yang sakit, lansia, dan saudara-saudara kita yang membutuhkan pertolongan.",
    schedule: "Pelayanan Terjadwal",
    iconType: "diakonia",
  },
  {
    id: "musik",
    name: "Musik & Multimedia",
    role: "Liturgi & Pujian",
    desc: "Memperlengkapi ibadah dengan pelayanan musik, tim pujian, sound system, dan dokumentasi siaran ibadah.",
    schedule: "Latihan Jumat, 19:30 WITA",
    iconType: "music",
  },
];

export const pastoralWelcome = {
  quote:
    "Gereja bukan sekadar bangunan berarsitektur megah, melainkan persekutuan orang-orang percaya yang saling mengasihi, menguatkan, dan menjadi terang di tengah masyarakat Wasuponda. Pintu kami senantiasa terbuka untuk menyambut kehadiran Anda sekeluarga.",
  author: "Majelis & Gembala Jemaat",
  role: "POUK Wasuponda, Luwu Timur",
};

export const faq = [
  {
    q: "Apa yang sebaiknya saya kenakan saat beribadah?",
    a: "Pakaian yang rapi, sopan, dan nyaman. Kami menyambut Anda dengan kehangatan apa adanya.",
  },
  {
    q: "Berapa lama ibadah hari Minggu berlangsung?",
    a: "Ibadah Raya biasanya berlangsung sekitar 75 hingga 90 menit.",
  },
  {
    q: "Apakah ada kelas untuk anak-anak selama ibadah?",
    a: "Ya! Sekolah Minggu diadakan bersamaan dengan Ibadah Raya jam 09:00 WITA di ruang serbaguna.",
  },
  {
    q: "Apakah saya harus jemaat terdaftar untuk hadir beribadah?",
    a: "Sama sekali tidak! Semua orang, tamu luar kota, maupun pengunjung baru sangat disambut dengan sukacita.",
  },
];

import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import PastoralSection from "@/components/PastoralSection";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      {/* 1. Hero dengan Foto Asli Gedung Gereja & Judul Utama Bersih */}
      <HeroSection />

      {/* 2. Jadwal Ibadah Rutin Mingguan (4 Jadwal Resmi) */}
      <ScheduleSection />

      {/* 3. Berita dan Acara (Carousel Horizontal Maksimal 3 Kolom) */}
      <NewsEventsSection />

      {/* 4. Sambutan Gembala & Lokasi Peta Gereja POUK Wasuponda */}
      <PastoralSection />
    </>
  );
}

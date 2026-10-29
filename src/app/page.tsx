import HeroSection from "@/components/HeroSection";
import BentoSchedule from "@/components/BentoSchedule";
import MinistriesSection from "@/components/MinistriesSection";
import PastoralSection from "@/components/PastoralSection";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      {/* 1. Hero dengan Foto Asli Gedung Gereja & Widget Ibadah Terdekat */}
      <HeroSection />

      {/* 2. Bento Grid: Jadwal Ibadah Mingguan & Akses Cepat Warta/Renungan */}
      <BentoSchedule />

      {/* 3. Kehidupan Jemaat & Komisi Pelayanan (Ikon SVG Monoline Bersih) */}
      <MinistriesSection />

      {/* 4. Sambutan Gembala & Lokasi Peta Gereja POUK Wasuponda */}
      <PastoralSection />
    </>
  );
}

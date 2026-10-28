import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ProblemSection from "@/components/ProblemSection";
import TabbedLibrary from "@/components/TabbedLibrary";
import SearchSection from "@/components/SearchSection";
import StoriesSection from "@/components/StoriesSection";
import HighlightSection from "@/components/HighlightSection";
import CTASection from "@/components/CTASection";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      {/* 2. Hero Section (PRD §4.2) */}
      <HeroSection />

      {/* 3. Strip Kepercayaan / Komisi (PRD §4.2) */}
      <TrustStrip />

      {/* 4. Masalah dan Solusi (PRD §4.2) */}
      <ProblemSection />

      {/* 5. Perpustakaan Bertab (PRD §4.2) */}
      <TabbedLibrary />

      {/* 6. Mockup Pencarian Cepat (PRD §4.2) */}
      <SearchSection />

      {/* 7. Cerita Jemaat (PRD §4.2) */}
      <StoriesSection />

      {/* 8. Blok Sorotan Program (PRD §4.2) */}
      <HighlightSection />

      {/* 9. CTA Penutup (PRD §4.2) */}
      <CTASection />
    </>
  );
}

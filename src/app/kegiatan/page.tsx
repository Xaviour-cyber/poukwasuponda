import type { Metadata } from "next";
import { PageHero } from "@/components/blocks";
import KegiatanView from "@/components/KegiatanView";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kegiatan Mendatang",
  description: "Kalender kegiatan, ibadah khusus, persekutuan komisi, dan acara di POUK Wasuponda.",
};

export default function Kegiatan() {
  return (
    <>
      <PageHero
        badge="Kalender Pelayanan"
        title="Kegiatan & Ibadah Khusus"
        desc="Jadwal agenda persekutuan pemuda, retret pembinaan, bakti sosial, dan ibadah perayaan hari raya gerejawi mendatang."
      />
      <KegiatanView events={events} />
    </>
  );
}

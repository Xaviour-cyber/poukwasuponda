import type { Metadata } from "next";
import { EventRow, PageHero } from "@/components/blocks";
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
        desc="Jadwal agenda persekutuan, retret pembinaan, bakti sosial, dan ibadah perayaan hari raya gerejawi mendatang."
      />
      <section className="mx-auto max-w-[1280px] px-5 md:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {events.map((e) => (
              <EventRow key={e.id} e={e} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

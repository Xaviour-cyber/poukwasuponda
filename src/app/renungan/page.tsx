import type { Metadata } from "next";
import { DevotionalItem, PageHero } from "@/components/blocks";
import { devotionals } from "@/lib/data";

export const metadata: Metadata = {
  title: "Renungan",
  description: "Santapan rohani dan renungan firman Tuhan untuk menemani hari-hari jemaat.",
};

export default function Renungan() {
  return (
    <>
      <PageHero
        badge="Santapan Rohani"
        title="Renungan Jemaat"
        desc="Refleksi firman mingguan untuk menguatkan langkah iman, baik di lingkungan Wasuponda maupun bagi jemaat yang sedang berada di perantauan."
      />
      <section className="mx-auto max-w-[1280px] px-5 md:px-8 py-16">
        <div className="max-w-3xl mx-auto space-y-4">
          {devotionals.map((d) => (
            <DevotionalItem key={d.id} d={d} />
          ))}
        </div>
      </section>
    </>
  );
}

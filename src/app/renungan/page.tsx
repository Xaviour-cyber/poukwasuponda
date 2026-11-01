import type { Metadata } from "next";
import { PageHero } from "@/components/blocks";
import RenunganView from "@/components/RenunganView";
import { devotionals } from "@/lib/data";

export const metadata: Metadata = {
  title: "Renungan Jemaat",
  description: "Santapan rohani dan renungan firman Tuhan untuk menemani hari-hari jemaat POUK Wasuponda.",
};

export default function Renungan() {
  return (
    <>
      <PageHero
        badge="Santapan Rohani"
        title="Renungan Jemaat"
        desc="Refleksi firman mingguan untuk menguatkan langkah iman, baik di lingkungan Wasuponda maupun bagi jemaat yang sedang berada di perantauan."
      />
      <RenunganView devotionals={devotionals} />
    </>
  );
}

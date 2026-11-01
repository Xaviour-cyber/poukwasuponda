import type { Metadata } from "next";
import { PageHero } from "@/components/blocks";
import WartaView from "@/components/WartaView";
import { bulletins } from "@/lib/data";

export const metadata: Metadata = {
  title: "Warta Jemaat",
  description: "Arsip warta jemaat mingguan POUK Wasuponda. Baca secara online atau unduh versi PDF.",
};

export default function Warta() {
  return (
    <>
      <PageHero
        badge="Warta Mingguan"
        title="Arsip Warta Jemaat"
        desc="Informasi pelayanan, pembacaan firman mingguan, susunan pelayan ibadah, dan pokok doa jemaat POUK Wasuponda."
      />
      <WartaView bulletins={bulletins} />
    </>
  );
}

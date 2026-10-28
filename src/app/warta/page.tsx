import type { Metadata } from "next";
import { BulletinRow, PageHero } from "@/components/blocks";
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
        desc="Informasi pelayanan, pembacaan firman, susunan pelayan ibadah, dan laporan berkala jemaat POUK Wasuponda."
      />
      <section className="mx-auto max-w-[1280px] px-5 md:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {bulletins.map((b) => (
              <BulletinRow key={b.id} b={b} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

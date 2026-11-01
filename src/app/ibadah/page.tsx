import type { Metadata } from "next";
import { PageHero } from "@/components/blocks";
import { dayNames, mapsUrl, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jadwal Ibadah",
  description: "Jadwal ibadah raya, persekutuan pemuda, remaja, dan sekolah minggu di POUK Wasuponda.",
};

export default function Ibadah() {
  // Services are ordered: Minggu 10:00 -> Pemuda -> Remaja -> Sekolah Minggu (paling bawah)
  const list = services;

  return (
    <>
      <PageHero
        badge="Jadwal Peribadahan"
        title="Jadwal Ibadah Jemaat"
        desc="Waktu pelaksanaan ibadah rutin mingguan jemaat POUK Wasuponda dalam Zona Waktu Indonesia Tengah (WITA). Seluruh ibadah terbuka bagi jemaat dan keluarga."
      />

      {/* Service Schedule List Only */}
      <section className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-4">
          {list.map((s) => (
            <div
              key={s.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#141414]/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              {/* Day & Time Column */}
              <div className="sm:w-52 shrink-0">
                <span className="inline-block rounded-full bg-[#EFF6FF] px-3 py-0.5 text-[11px] font-[600] text-[#1D4ED8] mb-1.5">
                  {s.badge || "Ibadah"}
                </span>
                <p className="text-[20px] sm:text-[22px] font-[700] text-[#141414] tracking-tight">
                  {dayNames[s.day]}
                </p>
                <p className="text-[14px] font-[600] text-[#707070]">
                  Pukul {s.time} WITA
                </p>
              </div>

              {/* Service Info Column */}
              <div className="grow">
                <h3 className="text-[18px] font-[650] text-[#141414]">
                  {s.name}
                </h3>
                <p className="mt-1 text-[14px] text-[#707070] leading-[1.5]">
                  {s.note}
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-3 text-[12px] text-[#707070]">
                  {/* Location with SVG Pin Icon matching Berita & Acara */}
                  <span className="flex items-center gap-1.5 font-[500]">
                    <svg
                      className="h-3.5 w-3.5 shrink-0 text-[#9E9E9E]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{s.place}</span>
                  </span>
                  <span>·</span>
                  <span className="rounded-full bg-[#FAFAFA] border border-[#EDEDED] px-2.5 py-0.5 font-[500]">
                    Sasaran: {s.target || "Umum"}
                  </span>
                </div>
              </div>

              {/* Action Button: Maps Direction */}
              <div className="shrink-0 self-start sm:self-center">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[38px] items-center gap-1.5 justify-center rounded-full border border-[#EDEDED] bg-[#F2F2F2] hover:bg-[#141414] hover:text-white px-4 text-[13px] font-[600] text-[#141414] transition-all active:scale-95"
                >
                  <span>Petunjuk Arah ↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

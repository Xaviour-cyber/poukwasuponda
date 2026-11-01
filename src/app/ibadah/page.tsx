import type { Metadata } from "next";
import Link from "next/link";
import { Btn, PageHero } from "@/components/blocks";
import GivingSection from "@/components/GivingSection";
import { church, dayNames, faq, mapsUrl, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jadwal Ibadah & Persembahan",
  description: "Jadwal ibadah raya, sekolah minggu, persekutuan doa, persembahan, dan panduan kunjungan di POUK Wasuponda.",
};

export default function Ibadah() {
  const list = [...services].sort((a, b) => a.day - b.day || a.time.localeCompare(b.time));

  return (
    <>
      <PageHero
        badge="Jadwal & Kunjungan"
        title="Jadwal Ibadah Jemaat"
        desc="Semua ibadah terbuka bagi seluruh keluarga jemaat, perantau, dan setiap tamu jemaat. Waktu pelaksanaan mengacu pada Waktu Indonesia Tengah (WITA)."
      />

      {/* Quick Anchor Jump Bar */}
      <section className="border-b border-[#EDEDED] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-3.5 flex items-center gap-2 overflow-x-auto no-scrollbar text-[13px] font-[600]">
          <a
            href="#jadwal"
            className="rounded-full bg-[#F2F2F2] hover:bg-[#141414] hover:text-white px-4 py-1.5 text-[#141414] transition whitespace-nowrap"
          >
            Jadwal Ibadah
          </a>
          <a
            href="#persembahan"
            className="rounded-full bg-[#F2F2F2] hover:bg-[#141414] hover:text-white px-4 py-1.5 text-[#141414] transition whitespace-nowrap"
          >
            Persembahan & Kolekte
          </a>
          <a
            href="#lokasi"
            className="rounded-full bg-[#F2F2F2] hover:bg-[#141414] hover:text-white px-4 py-1.5 text-[#141414] transition whitespace-nowrap"
          >
            Lokasi Gedung Gereja
          </a>
          <a
            href="#kunjungan"
            className="rounded-full bg-[#F2F2F2] hover:bg-[#141414] hover:text-white px-4 py-1.5 text-[#141414] transition whitespace-nowrap"
          >
            Panduan Pengunjung
          </a>
        </div>
      </section>

      {/* Service Schedule List */}
      <section id="jadwal" className="scroll-mt-24 mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-16">
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
                  <span className="flex items-center gap-1 font-[500]">
                    <span>📍</span>
                    <span>{s.place}</span>
                  </span>
                  <span>·</span>
                  <span className="rounded-full bg-[#FAFAFA] border border-[#EDEDED] px-2.5 py-0.5 font-[500]">
                    Sasaran: {s.target || "Umum"}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 self-start sm:self-center">
                <a
                  href="#lokasi"
                  className="inline-flex h-[38px] items-center justify-center rounded-full border border-[#EDEDED] bg-[#F2F2F2] hover:bg-[#141414] hover:text-white px-4 text-[13px] font-[600] text-[#141414] transition-all active:scale-95"
                >
                  Lihat Lokasi ↓
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Persembahan & Kolekte Jemaat (Paket 3) */}
      <GivingSection />

      {/* Location & Map Section */}
      <section id="lokasi" className="scroll-mt-24 border-t border-[#EDEDED] bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:px-6 md:px-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#EDEDED] bg-[#F2F2F2] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-3">
              Petunjuk Arah
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-[650] text-[#141414] tracking-[-0.02em]">
              Lokasi Gedung Gereja
            </h2>
            <p className="mt-3 text-[16px] text-[#707070] leading-[1.6]">
              {church.address}. Terletak strategis di pusat kecamatan Wasuponda,
              mudah dijangkau dengan kendaraan roda dua maupun roda empat.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Btn href={mapsUrl} tone="solid">
                Buka di Google Maps ↗
              </Btn>
              <Btn href="/kontak" tone="ghost">
                Hubungi Pengurus
              </Btn>
            </div>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-[#EDEDED] shadow-sm">
            <iframe
              title="Peta lokasi gereja POUK Wasuponda"
              loading="lazy"
              className="h-80 w-full"
              src={`https://www.google.com/maps?q=${encodeURIComponent(church.mapsQuery)}&output=embed`}
            />
          </div>
        </div>
      </section>

      {/* First Time Visitor FAQ (Kunjungan Pertama) */}
      <section id="kunjungan" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-20">
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-[#EDEDED] bg-[#F2F2F2] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-3">
            Panduan Pengunjung
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-[650] text-[#141414] tracking-[-0.02em]">
            Kunjungan Pertama ke POUK
          </h2>
          <p className="mt-2 text-[15px] text-[#707070]">
            Pertanyaan yang sering diajukan jemaat baru dan pengunjung luar kota.
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((f, i) => (
            <details
              key={i}
              className="group rounded-[20px] border border-[#EDEDED] bg-white px-6 transition hover:border-[#141414]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-[16px] font-[600] text-[#141414] list-none">
                <span>{f.q}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F2F2F2] text-[16px] text-[#141414] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 pt-1 text-[14px] leading-[1.6] text-[#707070]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

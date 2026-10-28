import type { Metadata } from "next";
import { Btn, PageHero } from "@/components/blocks";
import { church, dayNames, faq, mapsUrl, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jadwal Ibadah",
  description: "Jadwal ibadah raya, sekolah minggu, persekutuan doa di POUK Wasuponda.",
};

export default function Ibadah() {
  const list = [...services].sort((a, b) => a.day - b.day || a.time.localeCompare(b.time));

  return (
    <>
      <PageHero
        badge="Jadwal & Kunjungan"
        title="Jadwal Ibadah Jemaat"
        desc="Semua ibadah terbuka bagi seluruh jemaat dan tamu pengunjung. Waktu pelaksanaan mengacu pada Waktu Indonesia Tengah (WITA)."
      />

      {/* Service Schedule List */}
      <section className="mx-auto max-w-[1280px] px-5 md:px-8 py-16">
        <div className="max-w-4xl space-y-4">
          {list.map((s) => (
            <div
              key={s.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[20px] border border-[#EDEDED] bg-white p-6 transition-all hover:border-[#141414] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div className="sm:w-56 shrink-0">
                <span className="inline-block rounded-full bg-[#141414] px-2.5 py-0.5 text-[11px] font-[600] text-white mb-1.5">
                  {s.badge || "Ibadah"}
                </span>
                <p className="text-[20px] font-[650] text-[#141414]">
                  {dayNames[s.day]}
                </p>
                <p className="text-[14px] font-[600] text-[#707070]">
                  Pukul {s.time} WITA
                </p>
              </div>

              <div className="grow">
                <h3 className="text-[18px] font-[650] text-[#141414]">
                  {s.name}
                </h3>
                <p className="mt-1 text-[14px] text-[#707070] leading-[1.5]">
                  {s.note}
                </p>
                <p className="mt-2 text-[12px] text-[#ADADAD]">
                  📍 {s.place} · Sasaran: {s.target || "Umum"}
                </p>
              </div>

              <div className="shrink-0 pt-2 sm:pt-0">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[38px] items-center justify-center rounded-full border border-[#EDEDED] bg-[#F2F2F2] px-4 text-[13px] font-[500] text-[#141414] hover:bg-[#EDEDED] transition"
                >
                  Peta Lokasi
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="border-t border-[#EDEDED] bg-[#FAFAFA] py-16">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 md:px-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-block rounded-full bg-[#EDEDED] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-3">
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
          <span className="inline-block rounded-full bg-[#F2F2F2] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-3">
            Panduan Pengunjung
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-[650] text-[#141414] tracking-[-0.02em]">
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
              className="group rounded-[18px] border border-[#EDEDED] bg-white px-6 transition hover:border-[#ADADAD]"
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

"use client";

import Link from "next/link";
import { services, bulletins, devotionals, dayNames } from "@/lib/data";

export default function BentoSchedule() {
  const latestBulletin = bulletins[0];
  const latestDevotional = devotionals[0];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#EDEDED]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-2">
            Peribadahan & Informasi
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.18]">
            Jadwal Ibadah & Warta Terkini
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-[#707070] leading-[1.6]">
            Informasi waktu ibadah rutin mingguan dan dokumen warta jemaat POUK Wasuponda yang dapat diunduh langsung.
          </p>
        </div>

        {/* Asymmetrical Bento Grid (60% / 40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 of 12 = ~60%): Jadwal Ibadah Mingguan dalam format Timetable */}
          <div className="lg:col-span-7 rounded-[24px] border border-[#EDEDED] bg-[#FAFAFA] p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between pb-5 border-b border-[#EDEDED]">
              <div>
                <h3 className="text-[19px] font-[650] text-[#141414]">
                  Jadwal Ibadah Rutin
                </h3>
                <p className="text-[13px] text-[#707070] mt-0.5">
                  Zona Waktu Indonesia Tengah (WITA)
                </p>
              </div>
              <Link
                href="/ibadah"
                className="text-[13px] font-[600] text-[#141414] hover:underline flex items-center gap-1"
              >
                Lihat Semua Jadwal →
              </Link>
            </div>

            {/* Timetable Rows */}
            <div className="divide-y divide-[#EDEDED] mt-2">
              {services.map((item) => (
                <div
                  key={item.id}
                  className="py-4.5 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="sm:w-44 shrink-0">
                    <span className="text-[13px] font-[600] text-[#707070] uppercase tracking-wider">
                      {dayNames[item.day]}
                    </span>
                    <p className="text-[20px] font-[700] text-[#141414] tracking-tight">
                      pk. {item.time} WITA
                    </p>
                  </div>

                  <div className="grow">
                    <h4 className="text-[16px] font-[650] text-[#141414] group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[13px] text-[#707070] mt-0.5 leading-[1.5]">
                      {item.note}
                    </p>
                    <p className="text-[12px] text-[#9E9E9E] mt-1">
                      📍 {item.place}
                    </p>
                  </div>

                  <div className="shrink-0 self-start sm:self-center">
                    <span className="inline-block rounded-full border border-[#EDEDED] bg-white px-3 py-1 text-[11px] font-[600] text-[#141414]">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 of 12 = ~40%): Warta Jemaat + Renungan Pekan Ini */}
          <div className="lg:col-span-5 space-y-6">
            {/* Warta Jemaat Spotlight Card */}
            <div className="rounded-[24px] border border-[#EDEDED] bg-white p-6 sm:p-7 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:border-[#141414] transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-[#141414] px-3 py-0.5 text-[11px] font-[600] text-white">
                  Warta Minggu Ini
                </span>
                <span className="text-[12px] text-[#707070]">{latestBulletin.date}</span>
              </div>

              <h3 className="text-[20px] font-[650] text-[#141414] leading-snug">
                {latestBulletin.title}
              </h3>
              <p className="mt-2 text-[14px] text-[#707070] leading-[1.5]">
                Tema Pembacaan: <span className="font-[500] text-[#141414]">"{latestBulletin.theme}"</span>
              </p>

              <div className="mt-6 pt-5 border-t border-[#EDEDED] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={latestBulletin.href}
                  className="inline-flex h-[40px] items-center gap-2 rounded-full bg-[#141414] px-5 text-[13px] font-[600] text-white hover:bg-[#2c2c2c] transition shadow-sm"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Unduh PDF Warta ({latestBulletin.size})
                </a>
                <Link
                  href="/warta"
                  className="text-[13px] font-[600] text-[#707070] hover:text-[#141414] transition"
                >
                  Arsip Warta →
                </Link>
              </div>
            </div>

            {/* Renungan Pekan Ini Spotlight Card */}
            <div className="rounded-[24px] border border-[#EDEDED] bg-[#FAFAFA] p-6 sm:p-7">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] font-[600] text-blue-700">
                  {latestDevotional.verse}
                </span>
                <span className="text-[12px] text-[#707070]">{latestDevotional.readTime}</span>
              </div>

              <h4 className="text-[18px] font-[650] text-[#141414] leading-snug">
                {latestDevotional.title}
              </h4>
              <p className="mt-2.5 text-[14px] leading-[1.6] text-[#707070]">
                "{latestDevotional.excerpt}"
              </p>

              <div className="mt-5 pt-4 border-t border-[#EDEDED] flex items-center justify-between">
                <span className="text-[12px] text-[#9E9E9E]">
                  {latestDevotional.author}
                </span>
                <Link
                  href="/renungan"
                  className="text-[13px] font-[600] text-[#141414] hover:underline"
                >
                  Baca Renungan Penuh →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import Link from "next/link";
import { services, dayNames, mapsUrl } from "@/lib/data";

export default function ScheduleSection() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-24 border-b border-[#EDEDED]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <p className="text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-2">
            Peribadahan Jemaat
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.18]">
            Jadwal Ibadah Rutin
          </h2>
          <p className="mt-2.5 text-[14px] sm:text-[16px] text-[#707070] leading-[1.6]">
            Waktu pelaksanaan ibadah jemaat POUK Wasuponda dalam Zona Waktu Indonesia Tengah (WITA).
          </p>
        </div>

        {/* Timetable Container — Mobile First */}
        <div className="max-w-4xl mx-auto rounded-[24px] border border-[#EDEDED] bg-[#FAFAFA] p-5 sm:p-7 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-[#EDEDED] gap-2">
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-[650] text-[#141414]">
                Jadwal Ibadah Mingguan
              </h3>
              <p className="text-[12px] sm:text-[13px] text-[#707070]">
                Gereja POUK Jemaat Wasuponda, Luwu Timur
              </p>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-[600] text-[#141414] hover:underline self-start sm:self-auto"
            >
              <span>Petunjuk Arah Maps</span>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          {/* List of 4 Requested Services */}
          <div className="divide-y divide-[#EDEDED] mt-1">
            {services.map((item) => (
              <div
                key={item.id}
                className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-colors hover:bg-white/80 rounded-xl px-2 sm:px-3"
              >
                {/* Day & Time Column */}
                <div className="sm:w-48 shrink-0">
                  <span className="text-[12px] font-[600] text-[#707070] uppercase tracking-wider">
                    {dayNames[item.day]}
                  </span>
                  <p className="text-[20px] sm:text-[22px] font-[700] text-[#141414] tracking-tight">
                    pk. {item.time} WITA
                  </p>
                </div>

                {/* Details Column */}
                <div className="grow">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[16px] sm:text-[17px] font-[650] text-[#141414]">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-[13px] text-[#707070] mt-0.5 leading-[1.5]">
                    {item.note}
                  </p>
                  <p className="text-[12px] font-[500] text-[#141414]/70 mt-1 flex items-center gap-1">
                    <span>📍</span>
                    <span>{item.place}</span>
                  </p>
                </div>

                {/* Badge Column */}
                <div className="shrink-0 self-start sm:self-center">
                  <span className="inline-block rounded-full border border-[#EDEDED] bg-white px-3 py-1 text-[11px] font-[600] text-[#141414] shadow-xs">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info Note */}
          <div className="mt-5 pt-4 border-t border-[#EDEDED] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[12px] sm:text-[13px] text-[#707070]">
            <p>Ibadah terbuka bagi seluruh keluarga jemaat, perantau, dan setiap tamu jemaat.</p>
            <Link
              href="/ibadah#kunjungan"
              className="font-[600] text-[#141414] hover:underline"
            >
              Panduan Kunjungan Pertama →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


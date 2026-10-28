"use client";

import Link from "next/link";
import Image from "next/image";
import { church, nextService, dayNames, mapsUrl } from "@/lib/data";

export default function HeroSection() {
  const next = nextService();

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 text-center">
        {/* Display Headline with Inline Church Icons (Mobbin Signature Pattern) */}
        <h1 className="mx-auto max-w-4xl text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] font-[650] leading-[1.08] tracking-[-0.03em] text-[#141414]">
          Tempat{" "}
          <span className="inline-flex items-center align-middle mx-1.5 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border border-[#EDEDED] bg-[#F2F2F2] p-1.5 sm:p-2 shadow-sm overflow-hidden">
            <Image
              src="/icon.png"
              alt="Logo POUK"
              width={48}
              height={48}
              className="h-full w-full object-contain"
            />
          </span>{" "}
          keluarga bertumbuh{" "}
          <span className="inline-flex items-center align-middle mx-1.5 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border border-[#EDEDED] bg-[#F2F2F2] p-1.5 sm:p-2 shadow-sm">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[#141414] text-[16px] sm:text-[18px] border border-[#EDEDED]">
              🕊️
            </span>
          </span>{" "}
          dalam iman & kasih.
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mt-6 max-w-2xl text-[16px] md:text-[19px] font-[400] text-[#707070] leading-[1.5]">
          Ibadah Raya setiap Minggu pk. 09:00 WITA. Terbuka bagi jemaat lokal, perantau,
          dan setiap tamu yang rindu bersekutu bersama.
        </p>

        {/* Dual Pill CTA Buttons (Mobbin styling) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/ibadah#kunjungan"
            className="inline-flex h-[46px] items-center justify-center rounded-full bg-[#141414] px-6 text-[15px] font-[600] text-white transition-all hover:bg-[#2c2c2c] active:scale-[0.98] shadow-sm"
          >
            Rencanakan Kunjungan
          </Link>
          <Link
            href="/ibadah"
            className="inline-flex h-[46px] items-center justify-center rounded-full border border-[#141414] bg-transparent px-6 text-[15px] font-[600] text-[#141414] transition-all hover:bg-[#F2F2F2] active:scale-[0.98]"
          >
            Lihat Jadwal Ibadah
          </Link>
        </div>

        {/* Wide Showcase Card (Mobbin wide preview container) */}
        <div className="relative mx-auto mt-12 md:mt-16 max-w-4xl rounded-[20px] md:rounded-[24px] border border-[#EDEDED] bg-white p-4 md:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EDEDED]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F2F2F2] p-1.5 overflow-hidden">
                <Image
                  src="/icon.png"
                  alt="Logo POUK"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-[600] uppercase tracking-wider text-[#707070]">
                    Ibadah Berikutnya
                  </span>
                  <span className="rounded-full bg-[#141414] px-2 py-0.5 text-[11px] font-[600] text-white">
                    {next.badge || "Tersedia"}
                  </span>
                </div>
                <h2 className="text-[20px] md:text-[22px] font-[650] text-[#141414] leading-tight mt-0.5">
                  {next.name}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[38px] items-center gap-1.5 rounded-full border border-[#EDEDED] bg-[#F2F2F2] px-4 text-[13px] font-[500] text-[#141414] hover:bg-[#EDEDED] transition"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Buka Petunjuk Arah
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-[14px]">
            <div className="rounded-xl bg-[#F2F2F2]/60 p-4 border border-[#EDEDED]/60">
              <p className="text-[12px] font-[500] text-[#707070]">Hari & Waktu</p>
              <p className="mt-1 font-[600] text-[#141414]">
                {dayNames[next.day]}, pk. {next.time} WITA
              </p>
            </div>
            <div className="rounded-xl bg-[#F2F2F2]/60 p-4 border border-[#EDEDED]/60">
              <p className="text-[12px] font-[500] text-[#707070]">Lokasi Ibadah</p>
              <p className="mt-1 font-[600] text-[#141414]">{next.place}</p>
            </div>
            <div className="rounded-xl bg-[#F2F2F2]/60 p-4 border border-[#EDEDED]/60">
              <p className="text-[12px] font-[500] text-[#707070]">Sasaran</p>
              <p className="mt-1 font-[600] text-[#141414]">{next.target || "Seluruh Jemaat"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

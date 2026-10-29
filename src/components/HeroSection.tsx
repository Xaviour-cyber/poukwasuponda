"use client";

import Link from "next/link";
import Image from "next/image";
import { nextService, dayNames, mapsUrl } from "@/lib/data";

export default function HeroSection() {
  const next = nextService();

  return (
    <section className="relative min-h-[580px] md:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0A0D14] text-white">
      {/* Background Church Photograph with Warm Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gedung-gereja.jpg"
          alt="Gedung Gereja POUK Wasuponda"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-1000"
        />
        {/* Multilayered Gradient for Perfect Contrast & Warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/75 to-[#0A0D14]/50" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A0D14]/40 to-[#0A0D14]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-16 md:py-24 text-center">
        {/* Main Headline — Pure, Dignified, No Cluttered Emojis/Icons */}
        <h1 className="mx-auto max-w-4xl text-[36px] sm:text-[50px] md:text-[62px] lg:text-[70px] font-[650] leading-[1.12] tracking-[-0.03em] text-white">
          Tempat Keluarga Bertumbuh dalam Iman & Kasih
        </h1>

        {/* Sub-headline — Warm, Welcoming Church Tone */}
        <p className="mx-auto mt-5 max-w-2xl text-[16px] sm:text-[18px] md:text-[19px] font-[400] text-[#D1D5DB] leading-[1.6]">
          Selamat datang di Gereja Persekutuan Oikumene Umat Kristen (POUK) Wasuponda.
          Pintu kami senantiasa terbuka untuk menyambut kehadiran Anda dan keluarga setiap hari Minggu.
        </p>

        {/* Dual Primary Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/ibadah#kunjungan"
            className="inline-flex h-[46px] items-center justify-center rounded-full bg-white px-7 text-[15px] font-[600] text-[#141414] transition-all hover:bg-[#F3F4F6] active:scale-[0.98] shadow-md"
          >
            Rencanakan Kunjungan
          </Link>
          <Link
            href="/ibadah"
            className="inline-flex h-[46px] items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-6 text-[15px] font-[500] text-white transition-all hover:bg-white/20 active:scale-[0.98]"
          >
            Lihat Jadwal Ibadah
          </Link>
        </div>

        {/* Floating "Ibadah Berikutnya" Live Widget — Clean, High-Utility */}
        <div className="mx-auto mt-12 md:mt-14 max-w-3xl rounded-[22px] border border-white/15 bg-white/[0.08] backdrop-blur-xl p-4 sm:p-6 text-left shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-[600] uppercase tracking-wider text-[#9CA3AF]">
                    Ibadah Terdekat (WITA)
                  </span>
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-[600] text-white">
                    {next.badge || "Jadwal"}
                  </span>
                </div>
                <h2 className="text-[17px] sm:text-[19px] font-[650] text-white leading-tight mt-0.5">
                  {next.name}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-left sm:text-right">
                <p className="text-[14px] font-[600] text-white">
                  {dayNames[next.day]}, pk. {next.time} WITA
                </p>
                <p className="text-[12px] text-[#9CA3AF]">{next.place}</p>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex h-[36px] items-center gap-1.5 rounded-full bg-white px-4 text-[13px] font-[600] text-[#141414] hover:bg-[#F3F4F6] transition shadow-sm"
              >
                Peta Lokasi ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

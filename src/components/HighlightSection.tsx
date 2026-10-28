"use client";

import Link from "next/link";

export default function HighlightSection() {
  return (
    <section className="bg-[#141414] text-white py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-white via-[#707070] to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Preview Card */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-[600] text-white">
                Persiapan Jemaat
              </span>
              <h3 className="mt-3 text-[16px] font-[650] text-white">
                Latihan Paduan Suara & Musik
              </h3>
              <p className="mt-2 text-[13px] text-white/70 leading-[1.5]">
                Jadwal latihan mingguan bersama tim multimedia dan liturgi.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[12px] text-white/50">
                Setiap Jumat pk. 19:30 WITA
              </div>
            </div>
          </div>

          {/* Center Column: Highlight Feature Text & Action (Mobbin Focus Block) */}
          <div className="lg:col-span-6 text-center max-w-xl mx-auto">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-white/90 mb-4">
              Sorotan Program 2026
            </span>
            <h2 className="text-[34px] sm:text-[46px] font-[650] tracking-[-0.03em] text-white leading-[1.12]">
              Menyambut Masa Adven & Perayaan Natal
            </h2>
            <p className="mt-5 text-[16px] text-white/70 leading-[1.6]">
              Rangkaian ibadah khusus, aksi diakonia berbagi kasih Wasuponda, dan
              persekutuan keluarga menyambut kelahiran Sang Juru Selamat.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kegiatan"
                className="inline-flex h-[44px] items-center justify-center rounded-full bg-white px-6 text-[14px] font-[600] text-[#141414] hover:bg-white/90 transition shadow-sm"
              >
                Lihat Selengkapnya
              </Link>
              <Link
                href="/kontak"
                className="inline-flex h-[44px] items-center justify-center rounded-full border border-white/30 px-6 text-[14px] font-[500] text-white hover:bg-white/10 transition"
              >
                Ikut Melayani
              </Link>
            </div>
          </div>

          {/* Right Preview Card */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-[600] text-white">
                Aksi Sosial
              </span>
              <h3 className="mt-3 text-[16px] font-[650] text-white">
                Paket Kasih untuk Lansia
              </h3>
              <p className="mt-2 text-[13px] text-white/70 leading-[1.5]">
                Penyaluran bingkisan sembako dan perkunjungan doa bagi opa & oma.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[12px] text-white/50">
                Komisi Diakonia Wasuponda
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

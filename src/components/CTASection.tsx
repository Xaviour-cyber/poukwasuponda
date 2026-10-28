"use client";

import Link from "next/link";
import { church } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-[#F2F2F2] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-4">
            Pintu Selalu Terbuka
          </span>
          <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.1]">
            Datang dan lihat sendiri.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] md:text-[18px] leading-[1.6] text-[#707070]">
            {church.historyShort} Baik Anda yang baru pertama kali ingin beribadah,
            tamu yang sedang berkunjung ke Wasuponda, maupun yang mencari persekutuan
            keluarga — kami menantikan kehadiran Anda hari Minggu ini.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/ibadah#kunjungan"
              className="inline-flex h-[46px] items-center justify-center rounded-full bg-[#141414] px-6 text-[15px] font-[600] text-white transition hover:bg-[#2c2c2c] active:scale-[0.98] shadow-sm"
            >
              Rencanakan Kunjungan
            </Link>
            <Link
              href="/kontak"
              className="inline-flex h-[46px] items-center justify-center rounded-full border border-[#141414] bg-transparent px-6 text-[15px] font-[600] text-[#141414] transition hover:bg-[#F2F2F2] active:scale-[0.98]"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

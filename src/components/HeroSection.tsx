"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[540px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0A0D14] text-white">
      {/* Background Church Photograph with Warm Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gedung-gereja.jpg"
          alt="Gedung Gereja POUK Wasuponda"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
        />
        {/* Multilayered Gradient for Perfect Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/70 to-[#0A0D14]/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A0D14]/30 to-[#0A0D14]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32 text-center">
        {/* Main Headline — Pure, Clean & Dignified */}
        <h1 className="mx-auto max-w-4xl text-[34px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-[650] leading-[1.12] tracking-[-0.03em] text-white">
          Tempat Keluarga Bertumbuh dalam Iman & Kasih
        </h1>

        {/* Dual Primary Actions */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/ibadah#kunjungan"
            className="inline-flex h-[46px] sm:h-[48px] items-center justify-center rounded-full bg-white px-7 text-[14px] sm:text-[15px] font-[600] text-[#141414] transition-all hover:bg-[#F3F4F6] active:scale-[0.98] shadow-lg"
          >
            Rencanakan Kunjungan
          </Link>
          <Link
            href="/ibadah"
            className="inline-flex h-[46px] sm:h-[48px] items-center justify-center rounded-full border border-white/50 bg-white/10 backdrop-blur-md px-6 text-[14px] sm:text-[15px] font-[500] text-white transition-all hover:bg-white/20 active:scale-[0.98]"
          >
            Lihat Jadwal Ibadah
          </Link>
        </div>
      </div>
    </section>
  );
}

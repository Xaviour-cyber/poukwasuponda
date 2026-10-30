"use client";

import Image from "next/image";
import { church, mapsUrl, pastoralWelcome, socialLinks } from "@/lib/data";

export default function PastoralSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#EDEDED]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (6 cols): Pastoral Welcome & Church Spirit */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block rounded-full bg-[#F2F2F2] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070]">
              Sambutan Gembala & Majelis
            </span>

            <h2 className="text-[30px] sm:text-[38px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.18]">
              Gereja yang Terbuka bagi Setiap Jiwa
            </h2>

            <div className="border-l-2 border-[#141414] pl-5 sm:pl-6 py-1">
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#141414] font-[450]">
                &ldquo;{pastoralWelcome.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3.5 pt-1">
              <div className="relative h-12 w-12 shrink-0 rounded-full bg-[#141414] p-2 flex items-center justify-center">
                <Image
                  src="/icon.png"
                  alt="Logo POUK Wasuponda"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-[15px] font-[650] text-[#141414]">
                  {pastoralWelcome.author}
                </p>
                <p className="text-[13px] text-[#707070]">
                  {pastoralWelcome.role}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href={socialLinks.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#141414] px-5 text-[14px] font-[600] text-white hover:bg-[#2c2c2c] transition shadow-sm"
              >
                Hubungi Sekretariat Gereja
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[42px] items-center gap-1.5 rounded-full border border-[#141414] px-5 text-[14px] font-[600] text-[#141414] hover:bg-[#F2F2F2] transition"
              >
                Petunjuk Arah Google Maps ↗
              </a>
            </div>
          </div>

          {/* Right Column (6 cols): Integrated Map & Address */}
          <div className="lg:col-span-6 rounded-[24px] border border-[#EDEDED] bg-[#FAFAFA] p-5 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-[17px] font-[650] text-[#141414]">
                  Lokasi Gedung Gereja
                </h3>
                <p className="text-[13px] text-[#707070] mt-0.5">
                  {church.address}
                </p>
              </div>
              <span className="rounded-full bg-white border border-[#EDEDED] px-3 py-1 text-[11px] font-[600] text-[#141414]">
                Wasuponda, Luwu Timur
              </span>
            </div>

            <div className="overflow-hidden rounded-[18px] border border-[#EDEDED] shadow-sm">
              <iframe
                title="Peta Lokasi Gereja POUK Wasuponda"
                loading="lazy"
                className="h-[320px] w-full"
                src={`https://www.google.com/maps?q=${encodeURIComponent(church.mapsQuery)}&output=embed`}
              />
            </div>

            <p className="mt-4 text-center text-[12px] text-[#707070]">
              Berada di pusat Wasuponda, dapat diakses dengan mudah oleh jemaat dan pengunjung luar kota.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import Link from "next/link";
import Image from "next/image";
import { testimonials, featuredQuote } from "@/lib/data";

export default function StoriesSection() {
  return (
    <section className="bg-white py-20 md:py-28 border-b border-[#EDEDED]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-[#F2F2F2] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-3">
            Kesaksian & Pertumbuhan
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.15]">
            Cerita Jemaat.
          </h2>
          <p className="mt-4 text-[16px] text-[#707070] leading-[1.5]">
            Bagaimana persekutuan di POUK Wasuponda menjadi rumah rohani bagi
            keluarga, pemuda, dan jemaat di rantau.
          </p>
        </div>

        {/* 3 Story Cards (Mobbin card story layout: PRD §4.6) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-[24px] border border-[#EDEDED] bg-white p-6 transition-all hover:border-[#141414] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            >
              <div>
                {/* Author row with avatar circle (36px per PRD §4.6) */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#141414] text-white text-[13px] font-[600]">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-[600] text-[#141414] leading-tight">
                      {item.author}
                    </h3>
                    <p className="text-[12px] text-[#707070] mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Story excerpt */}
                <p className="text-[14px] leading-[1.6] text-[#141414]">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EDEDED] flex items-center justify-between">
                <span className="rounded-full bg-[#F2F2F2] px-2.5 py-0.5 text-[11px] font-[600] text-[#707070]">
                  {item.tag}
                </span>
                <Link
                  href="/kontak"
                  className="text-[13px] font-[600] text-[#141414] hover:underline flex items-center gap-1"
                >
                  Baca cerita
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 1 Large Featured Blockquote (Mobbin signature highlight quote) */}
        <div className="mt-8 rounded-[24px] border border-[#EDEDED] bg-[#FAFAFA] p-8 md:p-12">
          <div className="max-w-3xl">
            <span className="text-[32px] text-[#ADADAD] font-serif leading-none">“</span>
            <blockquote className="text-[20px] sm:text-[24px] font-[600] leading-[1.4] text-[#141414] -mt-3">
              {featuredQuote.quote}
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#F2F2F2] flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo-pouk.png"
                  alt="Logo POUK"
                  width={36}
                  height={36}
                  className="h-8 w-8 object-contain mix-blend-multiply"
                />
              </div>
              <div>
                <p className="text-[15px] font-[650] text-[#141414]">
                  {featuredQuote.author}
                </p>
                <p className="text-[13px] text-[#707070]">
                  {featuredQuote.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

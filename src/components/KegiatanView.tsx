"use client";

import { useState } from "react";
import Link from "next/link";
import { church, type Event } from "@/lib/data";

export default function KegiatanView({ events }: { events: Event[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = [
    { label: "Semua", key: "Semua" },
    { label: "Komisi Pemuda", key: "pemuda" },
    { label: "Komisi Diakonia", key: "diakonia" },
    { label: "Ibadah Khusus & Raya", key: "khusus" },
    { label: "Kegiatan Rutin", key: "rutin" },
  ];

  const filtered = events.filter((e) => {
    return selectedCategory === "Semua" || e.category === selectedCategory;
  });

  return (
    <section className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-14 sm:py-16">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setSelectedCategory(c.key)}
            className={`rounded-full px-4 py-2 text-[13px] font-[600] transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
              selectedCategory === c.key
                ? "bg-[#141414] text-white shadow-xs"
                : "bg-white border border-[#EDEDED] text-[#707070] hover:border-[#141414] hover:text-[#141414]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Events Grid (2 columns on desktop, 1 column on mobile — eliminates wide empty space) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filtered.map((e) => {
          const waInquiryUrl = `https://wa.me/${church.wa}?text=${encodeURIComponent(
            `Shalom Sekretariat POUK Wasuponda, saya ingin bertanya dan mendaftar untuk kegiatan: *${e.title}* (${e.dateFull}).`
          )}`;

          return (
            <article
              key={e.id}
              className="flex flex-col justify-between rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#141414]/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Top Meta Bar: Date Badge + Category + Status */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#EDEDED]">
                  <div className="flex items-center gap-3">
                    {/* Floating-style Date Box (No image as requested) */}
                    <div className="flex flex-col items-center justify-center min-w-[48px] rounded-xl bg-[#F2F2F2] px-2.5 py-1.5 border border-black/5">
                      <span className="text-[18px] font-[800] leading-none text-[#141414]">
                        {e.day}
                      </span>
                      <span className="text-[10px] font-[750] uppercase tracking-wider text-[#707070] mt-1 leading-none">
                        {e.month}
                      </span>
                    </div>

                    {/* Jenis Acara Pill Badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-[600] bg-[#EFF6FF] text-[#1D4ED8] tracking-wide">
                      {e.tag}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <span className="rounded-full border border-[#EDEDED] bg-[#FAFAFA] px-3 py-1 text-[11px] font-[500] text-[#707070]">
                    {e.status}
                  </span>
                </div>

                {/* Event Title & Summary */}
                <div className="pt-4">
                  <h3 className="text-[18px] sm:text-[20px] font-[650] text-[#141414] leading-snug">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-[#707070] leading-[1.6]">
                    {e.summary}
                  </p>

                  {/* Location & Time Metadata with Icons */}
                  <div className="mt-4 pt-3.5 border-t border-[#EDEDED] space-y-2 text-[13px] text-[#707070]">
                    {/* Tempat */}
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-[#9E9E9E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="truncate">{e.place}</span>
                    </div>

                    {/* Waktu */}
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-[#9E9E9E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span className="truncate">{e.dateFull} · {e.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons: WhatsApp Inquiry + Form */}
              <div className="mt-6 pt-4 border-t border-[#EDEDED] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={waInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[38px] items-center justify-center gap-1.5 rounded-full bg-[#141414] text-white hover:bg-[#2c2c2c] px-4 text-[13px] font-[600] transition active:scale-95 shadow-xs"
                >
                  <span>Daftar / Info WhatsApp</span>
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>

                <Link
                  href="/kontak"
                  className="inline-flex h-[38px] items-center justify-center rounded-full border border-[#EDEDED] bg-[#F2F2F2] hover:bg-[#EDEDED] px-4 text-[13px] font-[500] text-[#141414] transition"
                >
                  Hubungi Pengurus
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}


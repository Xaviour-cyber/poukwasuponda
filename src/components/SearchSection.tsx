"use client";

import { useState } from "react";
import Link from "next/link";

type SearchResult = {
  type: "Warta" | "Renungan" | "Kegiatan" | "Ibadah";
  title: string;
  meta: string;
  badge: string;
  href: string;
};

export default function SearchSection() {
  const [query, setQuery] = useState("");

  const allItems: SearchResult[] = [
    {
      type: "Ibadah",
      title: "Ibadah Raya Hari Minggu",
      meta: "Setiap Minggu pk. 09:00 WITA di Gedung Utama",
      badge: "Jadwal",
      href: "/ibadah",
    },
    {
      type: "Ibadah",
      title: "Sekolah Minggu Anak & Balita",
      meta: "Setiap Minggu pk. 09:00 WITA di Gedung Serbaguna",
      badge: "Anak",
      href: "/ibadah",
    },
    {
      type: "Warta",
      title: "Warta Jemaat 25 Oktober 2026",
      meta: "Tema: Bertekun dalam Doa dan Kasih Persaudaraan (PDF)",
      badge: "Warta Terkini",
      href: "/warta",
    },
    {
      type: "Renungan",
      title: "Datang dengan apa adanya (Matius 11:28)",
      meta: "Santapan rohani penghiburan bagi yang berbeban berat",
      badge: "Renungan",
      href: "/renungan",
    },
    {
      type: "Kegiatan",
      title: "Retret Pemuda & Remaja Wasuponda",
      meta: "07 November 2026 di Camp Bukit Kasih",
      badge: "Acara",
      href: "/kegiatan",
    },
    {
      type: "Kegiatan",
      title: "Bakti Sosial & Pemeriksaan Kesehatan Gratis",
      meta: "15 November 2026 di Pelataran Gereja",
      badge: "Diakonia",
      href: "/kegiatan",
    },
  ];

  const suggestions = [
    "Jadwal Ibadah",
    "Warta PDF",
    "Retret Pemuda",
    "Renungan",
    "Sekolah Minggu",
  ];

  const filtered = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.meta.toLowerCase().includes(query.toLowerCase()) ||
          item.type.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.slice(0, 4);

  return (
    <section className="bg-[#FAFAFA] border-b border-[#EDEDED] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#EDEDED] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-3">
            Pencarian Cepat
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.15]">
            Temukan apa pun di website gereja.
          </h2>
          <p className="mt-4 text-[16px] text-[#707070] leading-[1.5]">
            Cari jadwal ibadah, arsip warta, ayat renungan mingguan, atau agenda
            kegiatan komisi dalam hitungan detik.
          </p>
        </div>

        {/* Search Mockup Container */}
        <div className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#EDEDED] bg-white p-5 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          {/* Input Bar */}
          <div className="relative flex items-center">
            <div className="pointer-events-none absolute left-4 text-[#707070]">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Coba ketik 'warta', 'jadwal', 'pemuda', atau ayat Alkitab..."
              className="h-[52px] w-full rounded-full border border-transparent bg-[#F2F2F2] pl-12 pr-28 text-[15px] font-[450] text-[#141414] placeholder-[#707070] transition focus:border-[#141414] focus:bg-white focus:outline-none"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-4 rounded-full bg-[#EDEDED] px-3 py-1 text-[12px] font-[500] text-[#707070] hover:text-[#141414]"
              >
                Hapus
              </button>
            ) : (
              <span className="absolute right-4 hidden sm:inline-block rounded-full border border-[#EDEDED] bg-white px-2.5 py-1 text-[11px] font-[600] text-[#ADADAD]">
                Cari Langsung
              </span>
            )}
          </div>

          {/* Quick Filter Tag Suggestions */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-[500] text-[#707070] mr-1">
              Saran:
            </span>
            {suggestions.map((sug) => (
              <button
                key={sug}
                type="button"
                onClick={() => setQuery(sug)}
                className={`rounded-full border px-3 py-1 text-[12px] font-[500] transition ${
                  query.toLowerCase() === sug.toLowerCase()
                    ? "border-[#141414] bg-[#141414] text-white"
                    : "border-[#EDEDED] bg-[#F2F2F2]/60 text-[#707070] hover:border-[#ADADAD] hover:text-[#141414]"
                }`}
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Result Cards Mockup */}
          <div className="mt-6 space-y-3 pt-5 border-t border-[#EDEDED]">
            <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD]">
              {query ? `Hasil Pencarian (${filtered.length})` : "Paling Sering Dicari"}
            </p>

            {filtered.length === 0 ? (
              <div className="py-8 text-center text-[#707070] text-[14px]">
                Tidak ditemukan hasil untuk "{query}". Coba kata kunci lain atau lihat menu utama.
              </div>
            ) : (
              <div className="divide-y divide-[#EDEDED]">
                {filtered.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between py-3.5 px-2 rounded-xl transition hover:bg-[#F2F2F2]/70 group"
                  >
                    <div className="pr-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-[600] uppercase tracking-wider text-[#707070]">
                          {item.type}
                        </span>
                        <span className="rounded-full bg-[#EDEDED] px-2 py-0.5 text-[10px] font-[600] text-[#141414]">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="mt-1 text-[15px] font-[650] text-[#141414] group-hover:underline">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[#707070]">{item.meta}</p>
                    </div>
                    <svg
                      className="h-4 w-4 shrink-0 text-[#ADADAD] group-hover:text-[#141414] transition-transform group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

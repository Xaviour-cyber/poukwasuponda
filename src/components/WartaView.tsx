"use client";

import { useState } from "react";
import type { Bulletin } from "@/lib/data";

export default function WartaView({ bulletins }: { bulletins: Bulletin[] }) {
  const [selectedMonth, setSelectedMonth] = useState<string>("Semua");
  const [search, setSearch] = useState<string>("");
  const [activeBulletin, setActiveBulletin] = useState<Bulletin | null>(null);

  const months = ["Semua", "Oktober 2026"];

  const filtered = bulletins.filter((b) => {
    const matchMonth = selectedMonth === "Semua" || b.month === selectedMonth;
    const matchQuery =
      search === "" ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.theme.toLowerCase().includes(search.toLowerCase()) ||
      b.liturgy.toLowerCase().includes(search.toLowerCase());
    return matchMonth && matchQuery;
  });

  return (
    <section className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-14 sm:py-16">
      {/* Search & Month Filter Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        {/* Month Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {months.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setSelectedMonth(m)}
              className={`rounded-full px-4 py-2 text-[13px] font-[600] transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                selectedMonth === m
                  ? "bg-[#141414] text-white shadow-xs"
                  : "bg-white border border-[#EDEDED] text-[#707070] hover:border-[#141414] hover:text-[#141414]"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari tema / warta..."
            className="w-full h-[40px] rounded-full border border-[#EDEDED] bg-white pl-10 pr-4 text-[13px] text-[#141414] placeholder-[#ADADAD] focus:border-[#141414] focus:outline-none transition shadow-2xs"
          />
          <svg
            className="absolute left-3.5 top-3 h-4 w-4 text-[#ADADAD]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>

      {/* Bulletins Grid (2-columns on tablet/desktop, 1-column on mobile) */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((b) => (
            <div
              key={b.id}
              className="flex flex-col justify-between rounded-[20px] border border-[#EDEDED] bg-white p-5 sm:p-6 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#141414]/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Meta Top: Liturgy Badge + File Size */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-[600] text-[#1D4ED8]">
                    {b.liturgy}
                  </span>
                  <span className="rounded-full border border-[#EDEDED] bg-[#FAFAFA] px-2.5 py-0.5 text-[11px] font-[500] text-[#707070]">
                    PDF · {b.size}
                  </span>
                </div>

                {/* Bulletin Title */}
                <h3 className="text-[18px] sm:text-[19px] font-[650] text-[#141414] leading-snug">
                  {b.title}
                </h3>

                {/* Theme & Readings */}
                <div className="mt-3 space-y-1.5 text-[13px] text-[#707070]">
                  <p>
                    <span className="font-[600] text-[#141414]">Tema: </span>
                    &ldquo;{b.theme}&rdquo;
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span>📖 </span>
                    <span>{b.readings}</span>
                  </p>
                  <p className="flex items-center gap-1.5 text-[12px] text-[#ADADAD]">
                    <span>🗓️ </span>
                    <span>Terbit: {b.date}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Action Buttons: Read Online + Download PDF */}
              <div className="mt-5 pt-4 border-t border-[#EDEDED] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveBulletin(b)}
                  className="inline-flex h-[38px] items-center justify-center rounded-full bg-[#F2F2F2] hover:bg-[#141414] hover:text-white px-4 text-[13px] font-[600] text-[#141414] transition-all cursor-pointer active:scale-95"
                >
                  Baca Online
                </button>

                <a
                  href={b.href}
                  download="Warta-Jemaat-POUK-Wasuponda.pdf"
                  className="inline-flex h-[38px] items-center gap-1.5 justify-center rounded-full bg-[#141414] text-white hover:bg-[#2c2c2c] px-4 text-[13px] font-[600] transition-all active:scale-95 shadow-xs"
                >
                  <span>Unduh PDF</span>
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-[20px] border border-[#EDEDED] bg-white p-12 text-center">
          <p className="text-[16px] font-[650] text-[#141414]">Warta tidak ditemukan</p>
          <p className="text-[14px] text-[#707070] mt-1">
            Coba ganti kata kunci pencarian atau pilih filter bulan &ldquo;Semua&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedMonth("Semua");
              setSearch("");
            }}
            className="mt-4 inline-flex h-[36px] items-center justify-center rounded-full bg-[#141414] px-4 text-[13px] font-[600] text-white"
          >
            Reset Pencarian
          </button>
        </div>
      )}

      {/* Inline Reading Modal for Instant Mobile/Desktop Reading */}
      {activeBulletin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          onClick={() => setActiveBulletin(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[24px] bg-white p-6 sm:p-8 shadow-2xl text-[#141414]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EDEDED]">
              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-[600] text-[#1D4ED8]">
                {activeBulletin.liturgy} · {activeBulletin.date}
              </span>
              <button
                type="button"
                onClick={() => setActiveBulletin(null)}
                aria-label="Tutup jendela warta"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2F2F2] hover:bg-[#141414] hover:text-white transition cursor-pointer text-[#707070]"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-5 space-y-5">
              <div>
                <h3 className="text-[22px] sm:text-[24px] font-[700] text-[#141414] leading-snug">
                  {activeBulletin.title}
                </h3>
                <p className="mt-2 text-[14px] font-[600] text-[#141414]">
                  Tema: &ldquo;{activeBulletin.theme}&rdquo;
                </p>
              </div>

              <div className="rounded-[16px] bg-[#FAFAFA] border border-[#EDEDED] p-4 text-[13px] space-y-2">
                <p>
                  <span className="font-[600]">Pembacaan Alkitab: </span>
                  {activeBulletin.readings}
                </p>
                <p>
                  <span className="font-[600]">Pelayan Firman: </span>
                  {activeBulletin.preacher}
                </p>
                <p>
                  <span className="font-[600]">Waktu Ibadah: </span>
                  Minggu pk. 10:00 WITA di Gedung Utama POUK Wasuponda
                </p>
              </div>

              <div>
                <h4 className="text-[15px] font-[650] text-[#141414] mb-2">Pokok Doa Syafaat Pekan Ini:</h4>
                <ul className="list-disc list-inside space-y-1.5 text-[14px] text-[#707070] leading-[1.6]">
                  <li>Persekutuan keluarga jemaat POUK Wasuponda agar senantiasa berakar dalam kasih Kristus.</li>
                  <li>Warga jemaat yang sedang dalam kelemahan tubuh dan pemulihan kesehatan di rumah maupun rumah sakit.</li>
                  <li>Anak-anak dan pemuda jemaat dalam studi, pendidikan karakter, dan pergaulan sehari-hari.</li>
                  <li>Kedamaian, kerukunan masyarakat dan kelestarian lingkungan hidup di wilayah Wasuponda dan Luwu Timur.</li>
                </ul>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-[#EDEDED] flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={activeBulletin.href}
                download="Warta-Jemaat-POUK-Wasuponda.pdf"
                className="w-full sm:w-auto inline-flex h-[42px] items-center justify-center rounded-full bg-[#141414] text-white px-6 text-[13px] font-[600] transition active:scale-95 shadow-sm"
              >
                Unduh Dokumen Lengkap (PDF)
              </a>
              <button
                type="button"
                onClick={() => setActiveBulletin(null)}
                className="w-full sm:w-auto inline-flex h-[42px] items-center justify-center rounded-full border border-[#EDEDED] bg-white px-5 text-[13px] font-[500] text-[#707070] hover:text-[#141414]"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


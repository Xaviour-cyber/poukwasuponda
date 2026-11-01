"use client";

import { useState, useEffect } from "react";
import type { Devotional } from "@/lib/data";

export default function RenunganView({ devotionals }: { devotionals: Devotional[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeDevotional, setActiveDevotional] = useState<Devotional | null>(null);

  const categories = ["Semua", "Penghiburan", "Kehidupan Sehari-hari", "Penguatan Iman"];

  const filtered = devotionals.filter((d) => {
    return selectedCategory === "Semua" || d.category === selectedCategory;
  });

  // R-32 Keyboard Accessibility: Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDevotional(null);
      }
    };
    if (activeDevotional) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDevotional]);

  const handleShareWhatsApp = (d: Devotional) => {
    const text = `*Renungan Harian POUK Wasuponda*\n\n"${d.title}" (${d.verse})\n\n"${d.excerpt}"\n\nBaca selengkapnya di: https://poukwasuponda.vercel.app/renungan`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <section className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-14 sm:py-16">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setSelectedCategory(c)}
            className={`rounded-full px-4 py-2 text-[13px] font-[600] transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
              selectedCategory === c
                ? "bg-[#141414] text-white shadow-xs"
                : "bg-white border border-[#EDEDED] text-[#707070] hover:border-[#141414] hover:text-[#141414]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Devotionals Grid or R-27 Empty State */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((d) => (
            <article
              key={d.id}
              className="flex flex-col justify-between rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#141414]/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Meta Top: Category + Verse */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-[600] text-[#1D4ED8]">
                    {d.category}
                  </span>
                  <span className="text-[12px] font-[600] text-[#707070]">{d.verse}</span>
                </div>

                {/* Title */}
                <h3 className="text-[18px] sm:text-[19px] font-[650] text-[#141414] leading-snug">
                  {d.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-[14px] leading-[1.65] text-[#707070] line-clamp-3">
                  &ldquo;{d.excerpt}&rdquo;
                </p>
              </div>

              {/* Bottom Meta & Actions */}
              <div className="mt-6 pt-4 border-t border-[#EDEDED]">
                <div className="flex items-center justify-between text-[12px] text-[#ADADAD] mb-3">
                  <span>{d.author}</span>
                  <span>{d.date} · {d.readTime}</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveDevotional(d)}
                    className="inline-flex h-[42px] grow items-center justify-center rounded-full bg-[#F2F2F2] hover:bg-[#141414] hover:text-white px-4 text-[13px] font-[600] text-[#141414] transition-all cursor-pointer active:scale-95"
                  >
                    Baca Selengkapnya
                  </button>

                  {/* R-03 / R-39: Min 44px Tap Target */}
                  <button
                    type="button"
                    onClick={() => handleShareWhatsApp(d)}
                    title="Bagikan ke WhatsApp"
                    aria-label="Bagikan ke WhatsApp"
                    className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#EDEDED] bg-white text-[#707070] hover:text-[#141414] hover:border-[#141414] transition-all cursor-pointer active:scale-95 shadow-2xs"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[20px] border border-[#EDEDED] bg-white p-12 text-center">
          <p className="text-[16px] font-[650] text-[#141414]">Renungan belum tersedia</p>
          <p className="text-[14px] text-[#707070] mt-1">
            Belum ada renungan untuk kategori ini. Silakan pilih kategori lainnya.
          </p>
          <button
            type="button"
            onClick={() => setSelectedCategory("Semua")}
            className="mt-5 inline-flex h-[44px] items-center justify-center rounded-full bg-[#141414] px-6 text-[13px] font-[600] text-white hover:bg-[#2c2c2c] transition active:scale-95 cursor-pointer shadow-xs"
          >
            Tampilkan Semua Renungan
          </button>
        </div>
      )}

      {/* Full Devotional Reader Modal */}
      {activeDevotional && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          onClick={() => setActiveDevotional(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeDevotional.title}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[24px] bg-white p-6 sm:p-8 shadow-2xl text-[#141414]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EDEDED]">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-[600] text-[#1D4ED8]">
                  {activeDevotional.category}
                </span>
                <span className="text-[12px] font-[600] text-[#707070]">
                  {activeDevotional.verse}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveDevotional(null)}
                aria-label="Tutup renungan (Escape)"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F2F2] hover:bg-[#141414] hover:text-white transition cursor-pointer text-[#707070]"
              >
                ✕
              </button>
            </div>

            {/* Modal Title & Scripture Box */}
            <div className="mt-5 space-y-4">
              <h2 className="text-[24px] sm:text-[28px] font-[700] text-[#141414] leading-tight">
                {activeDevotional.title}
              </h2>
              <div className="flex items-center gap-2 text-[12px] text-[#ADADAD]">
                <span>Oleh {activeDevotional.author}</span>
                <span>·</span>
                <span>{activeDevotional.date}</span>
                <span>·</span>
                <span>{activeDevotional.readTime}</span>
              </div>

              {/* Scripture Quote Box with Straight Left Accent Border */}
              <div className="border-l-2 border-[#141414] pl-5 py-1 bg-[#FAFAFA] rounded-r-[16px] p-4 text-[14px] font-[450] text-[#141414]">
                &ldquo;{activeDevotional.excerpt}&rdquo;
                {/* R-02 Compliant: Replaced em dash with clean parentheses */}
                <p className="mt-1 text-[12px] font-[650] text-[#707070]">({activeDevotional.verse})</p>
              </div>

              {/* Devotional Full Text Paragraphs */}
              <div className="space-y-3.5 text-[15px] leading-[1.8] text-[#141414]/90 pt-2">
                {activeDevotional.fullText.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Personal Prayer Box */}
              <div className="mt-6 rounded-[18px] bg-[#EFF6FF]/60 border border-[#BFDBFE] p-5">
                <p className="text-[12px] font-[650] uppercase tracking-wider text-[#1D4ED8] mb-1.5">
                  Doa Pribadi
                </p>
                <p className="text-[14px] italic text-[#1E3A8A] leading-[1.7]">
                  &ldquo;{activeDevotional.prayer}&rdquo;
                </p>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-8 pt-5 border-t border-[#EDEDED] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => handleShareWhatsApp(activeDevotional)}
                className="w-full sm:w-auto inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-5 text-[13px] font-[600] transition hover:bg-[#1EBE5D] active:scale-95 shadow-xs cursor-pointer"
              >
                <span>Bagikan ke WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveDevotional(null)}
                className="w-full sm:w-auto inline-flex h-[44px] items-center justify-center rounded-full border border-[#EDEDED] bg-white px-5 text-[13px] font-[500] text-[#707070] hover:text-[#141414] cursor-pointer"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


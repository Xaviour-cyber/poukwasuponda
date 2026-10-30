"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { events } from "@/lib/data";

export default function NewsEventsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  // Toggle favorite/bookmark icon state
  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Check scroll position to manage arrow states
  const updateScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      updateScrollState();
      el.addEventListener("scroll", updateScrollState, { passive: true });
      window.addEventListener("resize", updateScrollState);
      return () => {
        el.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by one card width (approx 380px on desktop or 85% clientWidth on mobile)
      const scrollAmount = container.clientWidth > 768 ? 390 : container.clientWidth * 0.85;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="group/carousel bg-[#FAFAFA] py-14 sm:py-16 md:py-24 border-b border-[#EDEDED] relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-xl">
            <p className="text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-2">
              Agenda & Kegiatan Gereja
            </p>
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.18]">
              Berita dan Acara
            </h2>
            <p className="mt-2 text-[14px] sm:text-[16px] text-[#707070] leading-[1.6]">
              Dokumentasi warta pelayanan, ibadah khusus, dan kegiatan persekutuan jemaat POUK Wasuponda.
            </p>
          </div>

          {/* Desktop Arrow Controls (Semi-transparent by default, full opacity on hover) */}
          <div className="hidden sm:flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Geser berita ke kiri"
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-[#EDEDED] bg-white text-[#141414] shadow-xs transition-all duration-300 ${
                canScrollLeft
                  ? "opacity-35 group-hover/carousel:opacity-100 hover:bg-[#141414] hover:text-white cursor-pointer active:scale-95"
                  : "opacity-20 cursor-not-allowed"
              }`}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Geser berita ke kanan"
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-[#EDEDED] bg-white text-[#141414] shadow-xs transition-all duration-300 ${
                canScrollRight
                  ? "opacity-35 group-hover/carousel:opacity-100 hover:bg-[#141414] hover:text-white cursor-pointer active:scale-95"
                  : "opacity-20 cursor-not-allowed"
              }`}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Container:
            - Mobile first: 1 card visible + peek (w-[84vw] max-w-[340px])
            - Desktop: Maximum 3 cards visible horizontally across the 1280px viewport!
            - Scrollable via touch swipe, drag, mouse wheel / ctrl+scroll
        */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {events.map((item) => {
            const isFav = favorites[item.id] || false;
            return (
              <div
                key={item.id}
                className="group snap-start shrink-0 w-[84vw] sm:w-[360px] lg:w-[calc((100%-48px)/3)] flex flex-col justify-between rounded-[22px] border border-[#EDEDED] bg-white p-3.5 sm:p-4 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#141414]/25 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)]"
              >
                <div>
                  {/* Top Image Banner with Floating Date Badge & Bookmark Icon */}
                  <div className="relative h-[180px] sm:h-[195px] w-full overflow-hidden rounded-[16px] bg-[#F5F5F5]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 84vw, (max-width: 1024px) 360px, 400px"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                    {/* Floating Date Badge (Top-Left) */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col items-center justify-center min-w-[46px] rounded-xl bg-white/95 px-2.5 py-1.5 shadow-md backdrop-blur-xs border border-black/5">
                      <span className="text-[18px] font-[800] leading-none text-[#141414]">
                        {item.day}
                      </span>
                      <span className="text-[10px] font-[750] uppercase tracking-wider text-[#707070] mt-1 leading-none">
                        {item.month}
                      </span>
                    </div>

                    {/* Floating Heart/Bookmark Button (Top-Right) */}
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(item.id, e)}
                      aria-label={isFav ? "Hapus dari agenda tersimpan" : "Simpan agenda ini"}
                      className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-md backdrop-blur-xs transition hover:scale-110 active:scale-95 border border-black/5 cursor-pointer"
                    >
                      <svg
                        className={`h-4 w-4 transition-colors ${
                          isFav ? "fill-red-500 text-red-500" : "fill-none text-[#707070] hover:text-red-500"
                        }`}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>

                  {/* Card Content Area (Under Image) */}
                  <div className="pt-4 px-1">
                    {/* Jenis Acara (Event Category / Pill Badge) */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-[600] bg-[#EFF6FF] text-[#1D4ED8] tracking-wide mb-2.5">
                      {item.tag}
                    </span>

                    {/* Nama Acara (Event Title) */}
                    <h3 className="text-[17px] sm:text-[18px] font-[650] text-[#141414] leading-[1.3] line-clamp-2 min-h-[46px] group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Metadata Rows: Tempat & Waktu */}
                    <div className="mt-3.5 space-y-2 border-t border-[#EDEDED] pt-3 text-[13px] text-[#707070]">
                      {/* Tempat */}
                      <p className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 shrink-0 text-[#9E9E9E]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="truncate">{item.place}</span>
                      </p>

                      {/* Waktu */}
                      <p className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 shrink-0 text-[#9E9E9E]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span className="truncate">{item.dateFull} · {item.time}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tombol View Details Versi Bahasa Indonesia ("Lihat Detail") */}
                <div className="mt-5 px-1 pt-1">
                  <Link
                    href="/kegiatan"
                    className="group/btn flex h-[42px] w-full items-center justify-center rounded-full bg-[#F2F2F2] hover:bg-[#141414] hover:text-white text-[#141414] text-[13px] font-[600] transition-all duration-200 active:scale-[0.98] shadow-2xs"
                  >
                    <span>Lihat Detail</span>
                    <svg
                      className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Indicator & Controls */}
        <div className="flex sm:hidden items-center justify-between mt-4 px-1">
          <p className="text-[12px] text-[#9E9E9E]">
            ← Geser untuk melihat agenda lainnya →
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Geser ke kiri"
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-[#EDEDED] bg-white text-[#141414] ${
                canScrollLeft ? "opacity-100" : "opacity-30"
              }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Geser ke kanan"
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-[#EDEDED] bg-white text-[#141414] ${
                canScrollRight ? "opacity-100" : "opacity-30"
              }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

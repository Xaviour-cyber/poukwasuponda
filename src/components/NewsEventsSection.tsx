"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { events } from "@/lib/data";

export default function NewsEventsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
      // Scroll by one card width (approx 360px on desktop or 85% clientWidth on mobile)
      const scrollAmount = container.clientWidth > 768 ? 380 : container.clientWidth * 0.85;
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

          {/* Desktop Arrow Controls (Semi-transparent by default, full opacity when cursor is near/hovered) */}
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
            - Mobile first: 1 card visible + peek (w-[85vw] max-w-[340px])
            - Desktop: Maximum 3 cards visible horizontally across the 1280px viewport!
            - Scrollable via touch swipe, drag, mouse wheel / ctrl+scroll
        */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {events.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[84vw] sm:w-[360px] lg:w-[calc((100%-48px)/3)] flex flex-col justify-between rounded-[24px] border border-[#EDEDED] bg-white p-6 sm:p-7 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#141414] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div>
                {/* Top Badge & Date Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-[#F2F2F2] px-3 py-1 text-[11px] font-[600] text-[#141414]">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-[12px] font-[600] text-[#707070]">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                    <span>{item.day} {item.month} {item.year || "2026"}</span>
                  </div>
                </div>

                {/* News/Event Title */}
                <h3 className="text-[18px] sm:text-[19px] font-[650] text-[#141414] leading-[1.3] line-clamp-2">
                  {item.title}
                </h3>

                {/* News Summary */}
                <p className="mt-3 text-[14px] leading-[1.6] text-[#707070] line-clamp-3">
                  {item.summary}
                </p>

                {/* Metadata Location & Time */}
                <div className="mt-5 space-y-1.5 pt-4 border-t border-[#EDEDED] text-[12px] text-[#707070]">
                  <p className="flex items-center gap-2">
                    <span className="text-[#9E9E9E]">🕒</span>
                    <span>{item.time}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#9E9E9E]">📍</span>
                    <span className="line-clamp-1">{item.place}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-6 pt-4 border-t border-[#EDEDED] flex items-center justify-between">
                <span className="rounded-full border border-[#EDEDED] bg-[#FAFAFA] px-2.5 py-0.5 text-[11px] font-[500] text-[#707070]">
                  {item.status}
                </span>
                <Link
                  href="/kegiatan"
                  className="inline-flex items-center gap-1 text-[13px] font-[600] text-[#141414] hover:underline"
                >
                  <span>Detail Acara</span>
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
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


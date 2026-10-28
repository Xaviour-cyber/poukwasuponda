"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { nav, church } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for subtle elevation & blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar Container
          CRITICAL FIX: Do NOT apply backdrop-filter on the container when `open` is true,
          as backdrop-filter turns the header into a containing block which cuts off fixed children.
      */}
      <div
        className={`transition-all duration-200 ${
          open
            ? "bg-white border-b border-[#EDEDED]"
            : scrolled
            ? "bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#EDEDED] shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
            : "bg-[#FFFFFF] border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Left: Official Brand Logo (Header Version) */}
          <Link
            href="/"
            className="group flex items-center transition-opacity hover:opacity-85"
            aria-label="POUK Wasuponda Beranda"
          >
            <Image
              src="/logo-navbar.png"
              alt="Gereja POUK Jemaat Wasuponda"
              width={180}
              height={44}
              className="h-[38px] sm:h-[42px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Center: Desktop Navigation Links (Mobbin-style typography) */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden items-center gap-1 md:flex"
          >
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-1.5 text-[14px] font-[450] transition-colors ${
                    isActive
                      ? "bg-[#F2F2F2] font-[600] text-[#141414]"
                      : "text-[#707070] hover:bg-[#F2F2F2]/70 hover:text-[#141414]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Mobbin CTA pills) */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/kontak"
              className="text-[14px] font-[500] text-[#707070] transition-colors hover:text-[#141414] px-2"
            >
              Kontak
            </Link>
            <Link
              href="/ibadah#kunjungan"
              className="inline-flex h-[36px] items-center justify-center rounded-full bg-[#141414] px-4 text-[13px] font-[600] text-white shadow-sm transition-all hover:bg-[#262626] active:scale-[0.98]"
            >
              Rencanakan Kunjungan
            </Link>
          </div>

          {/* Mobile: Creative & Modern Hamburger Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu-seluler"
            aria-label={open ? "Tutup Menu" : "Buka Menu Navigasi"}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-[#EDEDED] bg-[#F2F2F2]/80 transition-all hover:bg-[#EDEDED] active:scale-95 md:hidden"
          >
            <div className="flex h-3.5 w-4 flex-col justify-between">
              {/* Top line */}
              <span
                className={`h-[1.75px] rounded-full bg-[#141414] transition-all duration-300 ease-out origin-center ${
                  open ? "translate-y-[6px] rotate-45 w-full" : "w-full"
                }`}
              />
              {/* Middle line - staggered modern width */}
              <span
                className={`h-[1.75px] rounded-full bg-[#141414] transition-all duration-200 ${
                  open ? "opacity-0 scale-x-0" : "w-[65%] self-end"
                }`}
              />
              {/* Bottom line */}
              <span
                className={`h-[1.75px] rounded-full bg-[#141414] transition-all duration-300 ease-out origin-center ${
                  open ? "-translate-y-[6px] -rotate-45 w-full" : "w-full"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu
          FIXED: Uses `fixed inset-x-0 top-[60px] h-[calc(100dvh-60px)]` so it covers
          the exact visible viewport without ever being clipped regardless of scroll position!
      */}
      {open && (
        <div
          id="menu-seluler"
          aria-label="Menu seluler"
          className="fixed inset-x-0 top-[60px] h-[calc(100dvh-60px)] z-50 flex flex-col justify-between bg-white px-6 py-6 md:hidden overflow-y-auto border-t border-[#EDEDED] shadow-2xl"
        >
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-3 py-1 mb-2">
              <span className="text-[11px] font-[600] uppercase tracking-wider text-[#ADADAD]">
                Navigasi Gereja
              </span>
              <span className="rounded-full bg-[#F2F2F2] px-2 py-0.5 text-[10px] font-[600] text-[#707070]">
                POUK Wasuponda
              </span>
            </div>

            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[16px] transition-all ${
                    isActive
                      ? "bg-[#141414] font-[600] text-white"
                      : "text-[#141414] hover:bg-[#F2F2F2] active:bg-[#EDEDED]"
                  }`}
                >
                  <span>{item.label}</span>
                  <svg
                    className={`h-4 w-4 ${isActive ? "text-white" : "text-[#ADADAD]"}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 space-y-3 pt-6 border-t border-[#EDEDED]">
            <Link
              href="/ibadah#kunjungan"
              onClick={() => setOpen(false)}
              className="flex h-11 w-full items-center justify-center rounded-full bg-[#141414] text-[14px] font-[600] text-white transition active:scale-[0.98] shadow-sm"
            >
              Rencanakan Kunjungan
            </Link>
            <Link
              href="/kontak"
              onClick={() => setOpen(false)}
              className="flex h-11 w-full items-center justify-center rounded-full border border-[#EDEDED] text-[14px] font-[500] text-[#141414] hover:bg-[#F2F2F2] transition"
            >
              Hubungi Sekretariat
            </Link>
            <p className="pt-2 text-center text-[12px] text-[#ADADAD]">
              {church.address}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

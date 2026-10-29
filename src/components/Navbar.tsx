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

  // Monitor scroll: transparent when at top (scrollY <= 20), solid white when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll(); // initialize on mount
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

  // Is the navbar currently over dark hero at top?
  const isTransparent = !scrolled && !open;

  return (
    <header className="fixed sm:sticky top-0 inset-x-0 z-50">
      {/* Top Bar Container
          - Transparent at top
          - Smoothly transitions to solid white on scroll
          - Solid white when mobile menu is open
      */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          open
            ? "bg-white border-b border-[#EDEDED] text-[#141414]"
            : scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#EDEDED] shadow-[0_1px_6px_rgba(0,0,0,0.04)] text-[#141414]"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent border-b border-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Left: Official Brand Logo with adaptive contrast */}
          <Link
            href="/"
            className="group flex items-center transition-opacity hover:opacity-90"
            aria-label="POUK Wasuponda Beranda"
          >
            <div
              className={`transition-all duration-300 rounded-xl px-2 py-1 ${
                isTransparent
                  ? "bg-white/90 backdrop-blur-xs shadow-xs"
                  : "bg-transparent"
              }`}
            >
              <Image
                src="/logo-navbar.png"
                alt="Gereja POUK Jemaat Wasuponda"
                width={175}
                height={40}
                className="h-[34px] sm:h-[38px] w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
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
                  className={`rounded-full px-3.5 py-1.5 text-[14px] font-[500] transition-colors ${
                    isTransparent
                      ? isActive
                        ? "bg-white/25 text-white font-[600]"
                        : "text-white/90 hover:bg-white/15 hover:text-white"
                      : isActive
                      ? "bg-[#F2F2F2] font-[600] text-[#141414]"
                      : "text-[#707070] hover:bg-[#F2F2F2]/80 hover:text-[#141414]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Kontak + Rencanakan Kunjungan) */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/kontak"
              className={`text-[14px] font-[500] px-2 transition-colors ${
                isTransparent
                  ? "text-white/90 hover:text-white"
                  : "text-[#707070] hover:text-[#141414]"
              }`}
            >
              Kontak
            </Link>
            <Link
              href="/ibadah#kunjungan"
              className={`inline-flex h-[36px] items-center justify-center rounded-full px-4 text-[13px] font-[600] shadow-sm transition-all active:scale-[0.98] ${
                isTransparent
                  ? "bg-white text-[#141414] hover:bg-[#F3F4F6]"
                  : "bg-[#141414] text-white hover:bg-[#262626]"
              }`}
            >
              Rencanakan Kunjungan
            </Link>
          </div>

          {/* Mobile: Creative & Modern Hamburger Button (Mobile First) */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu-seluler"
            aria-label={open ? "Tutup Menu Navigasi" : "Buka Menu Navigasi"}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 active:scale-95 md:hidden ${
              isTransparent
                ? "border-white/30 bg-black/25 text-white backdrop-blur-xs hover:bg-black/35"
                : "border-[#EDEDED] bg-[#F2F2F2] text-[#141414] hover:bg-[#EDEDED]"
            }`}
          >
            <div className="flex h-3.5 w-4 flex-col justify-between">
              {/* Top line */}
              <span
                className={`h-[1.75px] rounded-full transition-all duration-300 ease-out origin-center ${
                  isTransparent ? "bg-white" : "bg-[#141414]"
                } ${open ? "translate-y-[6px] rotate-45 w-full !bg-[#141414]" : "w-full"}`}
              />
              {/* Middle line - staggered */}
              <span
                className={`h-[1.75px] rounded-full transition-all duration-200 ${
                  isTransparent ? "bg-white" : "bg-[#141414]"
                } ${open ? "opacity-0 scale-x-0" : "w-[65%] self-end"}`}
              />
              {/* Bottom line */}
              <span
                className={`h-[1.75px] rounded-full transition-all duration-300 ease-out origin-center ${
                  isTransparent ? "bg-white" : "bg-[#141414]"
                } ${open ? "-translate-y-[6px] -rotate-45 w-full !bg-[#141414]" : "w-full"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu — Full Viewport, Solid White, Never Cut Off */}
      {open && (
        <div
          id="menu-seluler"
          aria-label="Menu seluler"
          className="fixed inset-x-0 top-[60px] h-[calc(100dvh-60px)] z-50 flex flex-col justify-between bg-white px-5 sm:px-6 py-6 md:hidden overflow-y-auto border-t border-[#EDEDED] shadow-2xl text-[#141414]"
        >
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-3 py-1 mb-2">
              <span className="text-[11px] font-[600] uppercase tracking-wider text-[#9E9E9E]">
                Menu Utama
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
                    className={`h-4 w-4 ${isActive ? "text-white" : "text-[#9E9E9E]"}`}
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
            <p className="pt-2 text-center text-[12px] text-[#9E9E9E]">
              {church.address}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

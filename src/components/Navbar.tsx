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

  const isHome = pathname === "/";

  // Monitor scroll: threshold of 20px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
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

  // Background and appearance state:
  // Solid white when scrolled, on inner pages, or when mobile drawer is open.
  // 100% transparent (no lines, no gradients) when at top of homepage.
  const isSolid = !isHome || scrolled || open;

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-[68px] sm:h-[72px]">
      {/* 
        Smooth Background Overlay:
        Fades in seamlessly using GPU-accelerated opacity transition.
        Zero black gradient bars, zero lines, zero stutter ("jeda").
      */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ease-in-out ${
          isSolid ? "opacity-100" : "opacity-0"
        } bg-white/95 backdrop-blur-md border-b border-[#EDEDED] shadow-[0_2px_12px_rgba(0,0,0,0.04)]`}
        aria-hidden="true"
      />

      {/* Main Nav Bar */}
      <div className="relative mx-auto flex h-[68px] sm:h-[72px] max-w-[1280px] items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Left: Official Brand Logo with seamless tone transition */}
        <Link
          href="/"
          className="group flex items-center transition-opacity hover:opacity-90"
          aria-label="POUK Wasuponda Beranda"
        >
          <div className="relative flex items-center">
            <Image
              src="/logo-navbar.png"
              alt="Gereja POUK Jemaat Wasuponda"
              width={240}
              height={56}
              className={`h-[42px] sm:h-[48px] md:h-[50px] w-auto object-contain transition-[filter] duration-300 ease-in-out ${
                isSolid ? "brightness-100" : "brightness-0 invert"
              }`}
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
                className={`rounded-full px-4 py-2 text-[14px] font-[500] transition-colors duration-200 ${
                  isSolid
                    ? isActive
                      ? "bg-[#F2F2F2] font-[600] text-[#141414]"
                      : "text-[#707070] hover:bg-[#F2F2F2]/80 hover:text-[#141414]"
                    : isActive
                    ? "bg-white/20 text-white font-[600]"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions (Desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/kontak"
            className={`px-3 py-2 text-[14px] font-[500] transition-colors duration-200 ${
              isSolid
                ? "text-[#707070] hover:text-[#141414]"
                : "text-white/85 hover:text-white"
            }`}
          >
            Kontak
          </Link>
          <Link
            href="/ibadah#kunjungan"
            className={`inline-flex h-[38px] items-center justify-center rounded-full px-5 text-[13px] font-[600] transition-all duration-200 active:scale-[0.98] ${
              isSolid
                ? "bg-[#141414] text-white hover:bg-[#262626] shadow-xs"
                : "bg-white text-[#141414] hover:bg-[#F3F4F6] shadow-md"
            }`}
          >
            Rencanakan Kunjungan
          </Link>
        </div>

        {/* Mobile: Pure Modern Hamburger Button (No Circular Background) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-seluler"
          aria-label={open ? "Tutup Menu Navigasi" : "Buka Menu Navigasi"}
          className="relative flex h-11 w-11 items-center justify-center p-2 text-inherit transition-opacity hover:opacity-80 active:scale-95 md:hidden cursor-pointer"
        >
          <div className="flex h-4 w-5 flex-col justify-between">
            {/* Top Bar */}
            <span
              className={`h-[2px] rounded-full transition-all duration-300 ease-out origin-center ${
                isSolid ? "bg-[#141414]" : "bg-white"
              } ${open ? "translate-y-[7px] rotate-45 w-full !bg-[#141414]" : "w-full"}`}
            />
            {/* Middle Bar */}
            <span
              className={`h-[2px] rounded-full transition-all duration-200 ${
                isSolid ? "bg-[#141414]" : "bg-white"
              } ${open ? "opacity-0 scale-x-0" : "w-[75%] self-end"}`}
            />
            {/* Bottom Bar */}
            <span
              className={`h-[2px] rounded-full transition-all duration-300 ease-out origin-center ${
                isSolid ? "bg-[#141414]" : "bg-white"
              } ${open ? "-translate-y-[7px] -rotate-45 w-full !bg-[#141414]" : "w-full"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu — Full Viewport, Solid White, Never Cut Off */}
      {open && (
        <div
          id="menu-seluler"
          aria-label="Menu seluler"
          className="fixed inset-x-0 top-[68px] sm:top-[72px] h-[calc(100dvh-68px)] sm:h-[calc(100dvh-72px)] z-50 flex flex-col justify-between bg-white px-5 sm:px-6 py-6 md:hidden overflow-y-auto overscroll-contain border-t border-[#EDEDED] shadow-2xl text-[#141414]"
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
              className="flex h-12 w-full items-center justify-center rounded-full bg-[#141414] text-[14px] font-[600] text-white transition active:scale-[0.98] shadow-sm"
            >
              Rencanakan Kunjungan
            </Link>
            <Link
              href="/kontak"
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-full border border-[#EDEDED] text-[14px] font-[500] text-[#141414] hover:bg-[#F2F2F2] transition"
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

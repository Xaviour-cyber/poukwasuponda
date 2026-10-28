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

  // Monitor scroll for Mobbin-style border/backdrop appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
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
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#EDEDED] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          : "bg-[#FFFFFF] border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-5 md:px-8">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="POUK Wasuponda Beranda"
        >
          <Image
            src="/logo-pouk.png"
            alt="Logo Gereja POUK Wasuponda"
            width={36}
            height={36}
            className="h-9 w-9 object-contain mix-blend-multiply"
            priority
          />
          <span className="text-[15px] font-[650] tracking-[-0.2px] text-[#141414]">
            {church.name}
          </span>
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

        {/* Mobile: Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Tutup Menu" : "Buka Menu"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EDEDED] text-[#141414] transition hover:bg-[#F2F2F2] md:hidden"
        >
          {open ? (
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu (Mobbin clean aesthetic) */}
      {open && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 z-40 flex flex-col justify-between bg-white px-6 py-6 md:hidden overflow-y-auto border-t border-[#EDEDED]">
          <div className="space-y-1">
            <p className="px-3 py-1 text-[11px] font-[600] uppercase tracking-wider text-[#ADADAD]">
              Menu Utama
            </p>
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] transition-colors ${
                    isActive
                      ? "bg-[#F2F2F2] font-[600] text-[#141414]"
                      : "text-[#707070] hover:bg-[#F2F2F2]/60 hover:text-[#141414]"
                  }`}
                >
                  <span>{item.label}</span>
                  <svg
                    className="h-4 w-4 text-[#ADADAD]"
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
              className="flex h-11 w-full items-center justify-center rounded-full bg-[#141414] text-[14px] font-[600] text-white transition active:scale-[0.98]"
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

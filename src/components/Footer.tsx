"use client";

import Link from "next/link";
import Image from "next/image";
import { church, mapsUrl } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#EDEDED] bg-[#FFFFFF] pt-16 pb-12 text-[#141414]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#EDEDED]">
          {/* Brand & Mission column */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo-pouk.png"
                alt="Logo Gereja POUK Wasuponda"
                width={40}
                height={40}
                className="h-10 w-10 object-contain mix-blend-multiply"
              />
              <span className="text-[17px] font-[650] tracking-[-0.2px] text-[#141414]">
                {church.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.6] text-[#707070]">
              {church.tagline}. Gereja oikumene yang menyambut setiap jiwa dengan
              kasih dan kehangatan persaudaraan sejati.
            </p>
            <p className="mt-4 text-[13px] text-[#ADADAD]">
              {church.address}
            </p>
          </div>

          {/* 3 Columns matching Mobbin: Ibadah, Sumber Daya, Gereja */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Ibadah */}
            <div>
              <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD] mb-4">
                Ibadah
              </p>
              <ul className="space-y-2.5 text-[14px]">
                <li>
                  <Link
                    href="/ibadah"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Jadwal Ibadah Raya
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ibadah#kunjungan"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Kunjungan Pertama
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ibadah"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Sekolah Minggu
                  </Link>
                </li>
                <li>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Petunjuk Arah Maps ↗
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Sumber Daya */}
            <div>
              <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD] mb-4">
                Sumber Daya
              </p>
              <ul className="space-y-2.5 text-[14px]">
                <li>
                  <Link
                    href="/warta"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Warta Jemaat Mingguan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/renungan"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Renungan Harian
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kegiatan"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Kalender Kegiatan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/warta"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Unduh Arsip PDF
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Gereja & Komisi */}
            <div>
              <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD] mb-4">
                Gereja
              </p>
              <ul className="space-y-2.5 text-[14px]">
                <li>
                  <Link
                    href="/kontak"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Tentang Kami & Sejarah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontak"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Komisi Pelayanan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontak"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Permohonan Doa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontak"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Hubungi Sekretariat
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, and Socials (PRD §4.2 Section 10) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#707070]">
          <div>
            © {currentYear} {church.fullName}. All rights reserved.
          </div>

          {/* Social media icons and links */}
          <div className="flex items-center gap-5">
            <a
              href={`https://wa.me/${church.wa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#707070] hover:text-[#141414] transition"
              aria-label="WhatsApp Gereja"
            >
              WhatsApp
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#707070] hover:text-[#141414] transition"
              aria-label="Facebook POUK Wasuponda"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#707070] hover:text-[#141414] transition"
              aria-label="Instagram POUK Wasuponda"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#707070] hover:text-[#141414] transition"
              aria-label="YouTube Channel"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

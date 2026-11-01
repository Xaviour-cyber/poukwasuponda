"use client";

import { useState } from "react";
import { givingInfo } from "@/lib/data";

export default function GivingSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(givingInfo.accountNumber.replace(/-/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="persembahan" className="scroll-mt-24 border-t border-[#EDEDED] bg-[#FAFAFA] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-[#EDEDED] bg-white px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-3 shadow-2xs">
            Pelayanan Persembahan
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.18]">
            Persembahan & Kolekte Jemaat
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] text-[#707070] leading-[1.6]">
            Mendukung peribadahan, pemeliharaan rumah Tuhan, dan pelayanan diakonia bagi sesama.
          </p>
        </div>

        {/* 2-Column Giving Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bank Transfer & Quick Copy (7 cols) */}
          <div className="lg:col-span-7 rounded-[24px] border border-[#EDEDED] bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between pb-4 border-b border-[#EDEDED]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00529C] text-white font-[800] text-[15px] tracking-tight">
                  BRI
                </div>
                <div>
                  <h3 className="text-[17px] font-[650] text-[#141414]">
                    Transfer Rekening Resmi
                  </h3>
                  <p className="text-[12px] text-[#707070]">
                    {givingInfo.bankName} (Kode: {givingInfo.bankCode})
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-[600] text-[#1D4ED8]">
                Rekening Resmi
              </span>
            </div>

            {/* Account Details Box with 1-click Copy */}
            <div className="mt-6 rounded-[20px] bg-[#FAFAFA] border border-[#EDEDED] p-5">
              <p className="text-[12px] font-[600] uppercase tracking-wider text-[#707070]">
                Nomor Rekening
              </p>
              <div className="mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="font-mono text-[22px] sm:text-[24px] font-[700] text-[#141414] tracking-wider">
                  {givingInfo.accountNumber}
                </p>
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`inline-flex h-[38px] items-center justify-center rounded-full px-4 text-[13px] font-[600] transition-all cursor-pointer active:scale-95 ${
                    copied
                      ? "bg-emerald-600 text-white"
                      : "bg-[#141414] text-white hover:bg-[#2c2c2c] shadow-xs"
                  }`}
                >
                  {copied ? "✓ Tersalin!" : "Salin No. Rekening"}
                </button>
              </div>
              <div className="mt-3 pt-3 border-t border-[#EDEDED] text-[13px] text-[#707070]">
                <span>Atas Nama: </span>
                <span className="font-[650] text-[#141414]">{givingInfo.accountHolder}</span>
              </div>
            </div>

            {/* Giving Channels Breakdown */}
            <div className="mt-6 space-y-3">
              <p className="text-[13px] font-[600] text-[#141414]">
                Peruntukan Persembahan:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12px]">
                {givingInfo.channels.map((c, i) => (
                  <div key={i} className="rounded-[16px] border border-[#EDEDED] bg-white p-3.5">
                    <p className="font-[650] text-[#141414]">{c.title}</p>
                    <p className="text-[#707070] mt-1 leading-[1.4]">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: QRIS & Scripture (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* QRIS Card */}
            <div className="rounded-[24px] border border-[#EDEDED] bg-white p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] text-center">
              <div className="flex items-center justify-between pb-3 border-b border-[#EDEDED] mb-4">
                <span className="text-[14px] font-[650] text-[#141414]">QRIS Nasional</span>
                <span className="rounded-full bg-[#F2F2F2] px-2.5 py-0.5 text-[11px] font-[600] text-[#707070]">
                  Semua Bank & E-Wallet
                </span>
              </div>

              {/* Clean QR Code Visual Container */}
              <div className="mx-auto flex h-48 w-48 flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-[#EDEDED] bg-[#FAFAFA] p-4">
                <svg className="h-16 w-16 text-[#141414]/70 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="3" height="3" />
                  <rect x="18" y="14" width="3" height="3" />
                  <rect x="14" y="18" width="7" height="3" />
                </svg>
                <span className="text-[13px] font-[650] text-[#141414]">{givingInfo.qrisName}</span>
                <span className="text-[11px] text-[#707070] mt-0.5">NMID: ID102026POUKWSP</span>
              </div>

              <p className="mt-3 text-[12px] text-[#707070] leading-[1.5]">
                Dapat dipindai melalui BCA Mobile, Livin Mandiri, BRImo, BNI Mobile, Dana, OVO, GoPay, dan ShopeePay.
              </p>
            </div>

            {/* Scripture Verse Card */}
            <div className="rounded-[24px] border border-[#EDEDED] bg-[#FAFAFA] p-6 text-left">
              <p className="text-[13px] font-[450] text-[#141414] leading-[1.6]">
                &ldquo;{givingInfo.verse}&rdquo;
              </p>
              <p className="mt-2 text-[12px] font-[650] text-[#707070]">
                — {givingInfo.verseRef}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


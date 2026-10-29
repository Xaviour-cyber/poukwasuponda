"use client";

import Link from "next/link";
import { ministries } from "@/lib/data";

function MinistryIcon({ type }: { type: string }) {
  const iconProps = {
    className: "h-5 w-5 text-[#141414]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "child":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      );
    case "youth":
      return (
        <svg {...iconProps}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "women":
      return (
        <svg {...iconProps}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    case "men":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="5" r="3" />
          <line x1="12" y1="22" x2="12" y2="8" />
          <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        </svg>
      );
    case "diakonia":
      return (
        <svg {...iconProps}>
          <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
          <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.7-2.9l-3.7 3.5" />
          <path d="M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
        </svg>
      );
    case "music":
    default:
      return (
        <svg {...iconProps}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
  }
}

export default function MinistriesSection() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24 border-b border-[#EDEDED]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-2">
            Persekutuan & Komisi
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.18]">
            Kehidupan Jemaat & Komisi Pelayanan
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-[#707070] leading-[1.6]">
            Wadah pembinaan rohani, perkunjungan kasih, dan persekutuan hangat bagi setiap jenjang usia jemaat di POUK Wasuponda.
          </p>
        </div>

        {/* 6 Monoline Clean Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m) => (
            <div
              key={m.id}
              className="flex flex-col justify-between rounded-[22px] border border-[#EDEDED] bg-white p-6 transition-all hover:border-[#141414] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2F2F2]">
                    <MinistryIcon type={m.iconType} />
                  </div>
                  <span className="rounded-full bg-[#F2F2F2] px-2.5 py-0.5 text-[11px] font-[600] text-[#707070]">
                    {m.schedule}
                  </span>
                </div>

                <h3 className="text-[18px] font-[650] text-[#141414]">
                  {m.name}
                </h3>
                <p className="text-[12px] font-[500] text-blue-700 mt-0.5">
                  {m.role}
                </p>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#707070]">
                  {m.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EDEDED] flex items-center justify-between">
                <span className="text-[12px] text-[#9E9E9E]">POUK Wasuponda</span>
                <Link
                  href="/kontak"
                  className="text-[13px] font-[600] text-[#141414] hover:underline"
                >
                  Hubungi Pengurus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


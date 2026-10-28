"use client";

import { ministries } from "@/lib/data";

export default function TrustStrip() {
  return (
    <section className="border-y border-[#EDEDED] bg-[#FFFFFF] py-8">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <p className="text-center text-[13px] font-[500] uppercase tracking-wider text-[#707070] mb-6">
          Pelayanan & Komisi di POUK Wasuponda
        </p>

        {/* Horizontal responsive row of ministry pill chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {ministries.map((m) => (
            <div
              key={m.id}
              className="group flex items-center gap-2.5 rounded-full border border-[#EDEDED] bg-[#F2F2F2]/60 px-4 py-2 transition-all hover:border-[#141414] hover:bg-white"
            >
              <span className="text-[16px]">{m.icon}</span>
              <span className="text-[14px] font-[500] text-[#141414]">
                {m.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

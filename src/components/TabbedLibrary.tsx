"use client";

import { useState } from "react";
import Link from "next/link";
import { services, bulletins, devotionals, events, ministries, dayNames } from "@/lib/data";

type TabKey = "jadwal" | "warta" | "renungan" | "kegiatan" | "komisi";

export default function TabbedLibrary() {
  const [activeTab, setActiveTab] = useState<TabKey>("jadwal");

  const tabs: { key: TabKey; label: string; count: number }[] = [
    { key: "jadwal", label: "Jadwal Ibadah", count: services.length },
    { key: "warta", label: "Warta Jemaat", count: bulletins.length },
    { key: "renungan", label: "Renungan", count: devotionals.length },
    { key: "kegiatan", label: "Kegiatan", count: events.length },
    { key: "komisi", label: "Komisi", count: ministries.length },
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-b border-[#EDEDED]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-[#F2F2F2] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-3">
            Pusat Informasi & Dokumen
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.15]">
            Satu tempat untuk semua kebutuhan jemaat.
          </h2>
          <p className="mt-4 text-[16px] text-[#707070] leading-[1.5]">
            Jadwal ibadah rutin, arsip warta mingguan, santapan rohani harian,
            dan informasi persekutuan komisi dalam satu tampilan terpadu.
          </p>
        </div>

        {/* Tab Pills Bar (Mobbin signature pill filter bar) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => {
            const isCurrent = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-[500] transition-all ${
                  isCurrent
                    ? "bg-[#141414] text-white shadow-sm"
                    : "border border-[#EDEDED] bg-[#F2F2F2]/60 text-[#707070] hover:border-[#ADADAD] hover:text-[#141414]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[11px] font-[600] ${
                    isCurrent
                      ? "bg-white/20 text-white"
                      : "bg-[#EDEDED] text-[#707070]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Grid by Selected Tab */}
        <div className="mt-12">
          {/* TAB 1: JADWAL */}
          {activeTab === "jadwal" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-[20px] border border-[#EDEDED] bg-white p-6 transition-all hover:border-[#141414] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-full bg-[#141414] px-2.5 py-0.5 text-[11px] font-[600] text-white">
                        {item.badge || "Ibadah"}
                      </span>
                      <span className="text-[13px] font-[500] text-[#707070]">
                        {dayNames[item.day]}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-[650] text-[#141414]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[14px] font-[600] text-[#141414]">
                      Pukul {item.time} WITA
                    </p>
                    <p className="mt-3 text-[13px] leading-[1.5] text-[#707070]">
                      {item.note}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#EDEDED] flex items-center justify-between text-[13px]">
                    <span className="text-[#ADADAD]">{item.place}</span>
                    <Link
                      href="/ibadah"
                      className="font-[600] text-[#141414] hover:underline"
                    >
                      Detail →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: WARTA */}
          {activeTab === "warta" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {bulletins.map((b) => (
                <div
                  key={b.id}
                  className="flex flex-col justify-between rounded-[20px] border border-[#EDEDED] bg-white p-6 transition-all hover:border-[#141414] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-full bg-[#F2F2F2] px-2.5 py-0.5 text-[11px] font-[600] text-[#707070]">
                        {b.liturgy}
                      </span>
                      <span className="text-[12px] text-[#ADADAD]">{b.size}</span>
                    </div>
                    <h3 className="text-[17px] font-[650] text-[#141414] leading-snug">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-[#707070]">
                      Tema: "{b.theme}"
                    </p>
                    <p className="mt-1 text-[12px] text-[#ADADAD]">{b.date}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#EDEDED] flex items-center justify-between">
                    <Link
                      href="/warta"
                      className="text-[13px] font-[600] text-[#141414] hover:underline"
                    >
                      Baca Online
                    </Link>
                    <a
                      href={b.href}
                      className="rounded-full border border-[#EDEDED] bg-[#F2F2F2] px-3 py-1 text-[12px] font-[500] text-[#141414] hover:bg-[#EDEDED]"
                    >
                      Unduh PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: RENUNGAN */}
          {activeTab === "renungan" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {devotionals.map((d) => (
                <article
                  key={d.id}
                  className="flex flex-col justify-between rounded-[20px] border border-[#EDEDED] bg-white p-6 transition-all hover:border-[#141414] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-full bg-[#F2F2F2] px-2.5 py-0.5 text-[11px] font-[600] text-[#141414]">
                        {d.category}
                      </span>
                      <span className="text-[12px] text-[#707070]">{d.readTime}</span>
                    </div>
                    <p className="text-[13px] font-[600] text-[#707070] mb-1">
                      {d.verse}
                    </p>
                    <h3 className="text-[19px] font-[650] text-[#141414] leading-snug">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[#707070]">
                      "{d.excerpt}"
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#EDEDED] flex items-center justify-between text-[13px]">
                    <span className="text-[#ADADAD]">{d.author}</span>
                    <Link
                      href="/renungan"
                      className="font-[600] text-[#141414] hover:underline"
                    >
                      Baca Penuh →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* TAB 4: KEGIATAN */}
          {activeTab === "kegiatan" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {events.map((e) => (
                <div
                  key={e.id}
                  className="flex flex-col justify-between rounded-[20px] border border-[#EDEDED] bg-white p-6 transition-all hover:border-[#141414] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-full bg-[#F2F2F2] px-2.5 py-0.5 text-[11px] font-[600] text-[#707070]">
                        {e.tag}
                      </span>
                      <span className="rounded-full bg-[#141414] px-2 py-0.5 text-[10px] font-[600] text-white">
                        {e.status}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-[28px] font-[700] text-[#141414] leading-none">
                        {e.day}
                      </span>
                      <span className="ml-1 text-[14px] font-[600] text-[#707070] uppercase">
                        {e.month}
                      </span>
                    </div>
                    <h3 className="text-[17px] font-[650] text-[#141414] leading-snug">
                      {e.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-[#707070]">{e.time}</p>
                    <p className="mt-1 text-[12px] text-[#ADADAD]">{e.place}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#EDEDED]">
                    <Link
                      href="/kegiatan"
                      className="block text-center rounded-full border border-[#141414] py-1.5 text-[13px] font-[600] text-[#141414] hover:bg-[#141414] hover:text-white transition"
                    >
                      Detail Acara
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: KOMISI */}
          {activeTab === "komisi" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ministries.map((m) => (
                <div
                  key={m.id}
                  className="rounded-[20px] border border-[#EDEDED] bg-white p-6 transition-all hover:border-[#141414] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2] text-[20px]">
                      {m.icon}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-[650] text-[#141414]">
                        {m.name}
                      </h3>
                      <p className="text-[12px] font-[500] text-[#707070]">
                        {m.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[14px] leading-[1.6] text-[#707070]">
                    {m.desc}
                  </p>
                  <div className="mt-6 pt-4 border-t border-[#EDEDED]">
                    <Link
                      href="/kontak"
                      className="text-[13px] font-[600] text-[#141414] hover:underline"
                    >
                      Hubungi Pengurus Komisi →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

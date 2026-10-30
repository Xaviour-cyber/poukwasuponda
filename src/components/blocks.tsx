import Link from "next/link";
import type { ReactNode } from "react";
import type { Bulletin, Devotional, Event } from "@/lib/data";

const tones = {
  solid: "bg-[#141414] text-white hover:bg-[#2c2c2c] shadow-sm",
  light: "bg-[#F2F2F2] text-[#141414] hover:bg-[#EDEDED]",
  ghost: "border border-[#EDEDED] text-[#141414] hover:border-[#141414] bg-white",
  outline: "border border-[#141414] text-[#141414] hover:bg-[#F2F2F2] bg-transparent",
};

export function Btn({
  href,
  children,
  tone = "solid",
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof tones;
}) {
  const cls = `inline-flex min-h-[42px] items-center justify-center rounded-full px-5 font-[600] text-[14px] transition-all active:scale-[0.98] ${tones[tone]}`;
  return href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function PageHero({
  title,
  desc,
  badge = "POUK Wasuponda",
}: {
  title: string;
  desc: string;
  badge?: string;
}) {
  return (
    <header className="border-b border-[#EDEDED] bg-[#FAFAFA] pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <span className="inline-block rounded-full bg-[#EDEDED] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-3">
          {badge}
        </span>
        <h1 className="text-[34px] sm:text-[46px] lg:text-[52px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.12]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] md:text-[18px] text-[#707070] leading-[1.6]">
          {desc}
        </p>
      </div>
    </header>
  );
}

export function BulletinRow({ b }: { b: Bulletin }) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[20px] border border-[#EDEDED] bg-white p-5 mb-3 transition-all hover:border-[#141414]">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="rounded-full bg-[#F2F2F2] px-2.5 py-0.5 text-[11px] font-[600] text-[#707070]">
            {b.liturgy}
          </span>
          <span className="text-[12px] text-[#ADADAD]">{b.size}</span>
        </div>
        <p className="text-[17px] font-[650] leading-snug text-[#141414]">
          {b.title}
        </p>
        <p className="text-[13px] text-[#707070] mt-1">
          Tema: "{b.theme}" · Terbit {b.date}
        </p>
      </div>
      <a
        href={b.href}
        className="shrink-0 inline-flex items-center justify-center rounded-full border border-[#EDEDED] bg-[#F2F2F2] px-4 py-2 text-[13px] font-[600] text-[#141414] hover:bg-[#EDEDED] transition"
      >
        Unduh PDF
      </a>
    </li>
  );
}

export function DevotionalItem({ d }: { d: Devotional }) {
  return (
    <article className="rounded-[20px] border border-[#EDEDED] bg-white p-6 mb-4 transition-all hover:border-[#141414]">
      <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] mb-2">
        <span className="font-[600] text-[#141414]">{d.verse}</span>
        <span className="rounded-full bg-[#F2F2F2] px-2.5 py-0.5 text-[11px] font-[600] text-[#707070]">
          {d.category}
        </span>
      </div>
      <h3 className="text-[20px] font-[650] text-[#141414] leading-snug">
        {d.title}
      </h3>
      <p className="mt-2.5 text-[14px] leading-[1.6] text-[#707070]">
        "{d.excerpt}"
      </p>
      <div className="mt-4 pt-3 border-t border-[#EDEDED] flex items-center justify-between text-[12px] text-[#ADADAD]">
        <span>Oleh {d.author}</span>
        <span>{d.date} · {d.readTime}</span>
      </div>
    </article>
  );
}

export function EventRow({ e }: { e: Event }) {
  return (
    <li className="list-none rounded-[22px] border border-[#EDEDED] bg-white p-5 sm:p-6 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#141414]/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
      {/* Top Meta Bar: Date Badge + Category + Status */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#EDEDED]">
        <div className="flex items-center gap-3">
          {/* Floating-style Date Box (No image) */}
          <div className="flex flex-col items-center justify-center min-w-[48px] rounded-xl bg-[#F2F2F2] px-2.5 py-1.5 border border-black/5">
            <span className="text-[18px] font-[800] leading-none text-[#141414]">
              {e.day}
            </span>
            <span className="text-[10px] font-[750] uppercase tracking-wider text-[#707070] mt-1 leading-none">
              {e.month}
            </span>
          </div>

          {/* Jenis Acara Pill Badge */}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-[600] bg-[#EFF6FF] text-[#1D4ED8] tracking-wide">
            {e.tag}
          </span>
        </div>

        {/* Status Badge */}
        <span className="rounded-full border border-[#EDEDED] bg-[#FAFAFA] px-3 py-1 text-[11px] font-[500] text-[#707070]">
          {e.status}
        </span>
      </div>

      {/* Event Title & Summary */}
      <div className="pt-4">
        <h3 className="text-[18px] sm:text-[20px] font-[650] text-[#141414] leading-snug">
          {e.title}
        </h3>
        <p className="mt-2 text-[14px] text-[#707070] leading-[1.6]">
          {e.summary}
        </p>

        {/* Location & Time Metadata with Icons */}
        <div className="mt-4 pt-3.5 border-t border-[#EDEDED] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13px] text-[#707070]">
          <div className="space-y-1.5">
            {/* Tempat */}
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-[#9E9E9E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{e.place}</span>
            </div>

            {/* Waktu */}
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-[#9E9E9E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{e.dateFull} · {e.time}</span>
            </div>
          </div>

          {/* Action Link */}
          <Link
            href="/kontak"
            className="inline-flex self-start sm:self-center items-center justify-center rounded-full border border-[#EDEDED] bg-[#F2F2F2] hover:bg-[#141414] hover:text-white px-4 py-2 text-[13px] font-[600] text-[#141414] transition-all active:scale-[0.98]"
          >
            Hubungi Pengurus
          </Link>
        </div>
      </div>
    </li>
  );
}

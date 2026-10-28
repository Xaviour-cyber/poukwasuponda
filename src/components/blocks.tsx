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
    <header className="border-b border-[#EDEDED] bg-[#FAFAFA] py-14 md:py-20">
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
    <li className="flex items-center gap-5 rounded-[20px] border border-[#EDEDED] bg-white p-5 mb-3 transition-all hover:border-[#141414]">
      <div className="w-16 shrink-0 text-center rounded-xl bg-[#F2F2F2] py-2 px-1">
        <p className="text-[26px] font-[700] leading-none text-[#141414]">{e.day}</p>
        <p className="text-[12px] font-[600] text-[#707070] uppercase mt-0.5">{e.month}</p>
      </div>
      <div className="grow">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-[600] uppercase tracking-wider text-[#707070]">
            {e.tag}
          </span>
          <span className="rounded-full bg-[#141414] px-2 py-0.5 text-[10px] font-[600] text-white">
            {e.status}
          </span>
        </div>
        <p className="text-[17px] font-[650] text-[#141414] mt-0.5">{e.title}</p>
        <p className="text-[13px] text-[#707070]">{e.time} · {e.place}</p>
      </div>
    </li>
  );
}

"use client";

import Link from "next/link";

export default function ProblemSection() {
  const cardsCol1 = [
    {
      title: "Warta Jemaat Digital",
      tag: "PDF & Web",
      snippet: "Jadwal pelayan firman, lagu pujian, dan laporan keuangan mingguan dapat diakses tanpa perlu menunggu forwarded PDF di grup WA.",
      category: "Warta",
    },
    {
      title: "Jadwal Ibadah & Tempat",
      tag: "Tepat Waktu",
      snippet: "Informasi jam ibadah raya, sekolah minggu anak, dan ibadah pemuda selalu diperbarui otomatis menurut zona WITA.",
      category: "Ibadah",
    },
  ];

  const cardsCol2 = [
    {
      title: "Kutipan Renungan Mingguan",
      tag: "Penyejuk Hati",
      snippet: "«Letih tidak membuat kita tersingkir dari hadirat Tuhan. Justru di sanalah kita diundang untuk beristirahat.» (Mat 11:28)",
      category: "Renungan",
    },
    {
      title: "Pendaftaran Kegiatan & Retret",
      tag: "Formulir 1 Menit",
      snippet: "RSVP untuk kegiatan pemuda, bakti sosial, dan kepanitiaan hari raya dapat diisi mandiri dari ponsel.",
      category: "Kegiatan",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] border-b border-[#EDEDED] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Two-line Big Headline and Narrative */}
          <div className="lg:col-span-5">
            <span className="inline-block rounded-full bg-[#EDEDED] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-4">
              Satu Pintu Informasi
            </span>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-[650] leading-[1.12] tracking-[-0.03em] text-[#141414]">
              Info gereja tersebar di banyak grup.
              <br />
              <span className="text-[#707070]">Sekarang, cukup satu tempat.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-[#707070]">
              Jadwal yang tertimbun chat, pengumuman penting yang terlewat, dan
              dokumen warta yang sulit dicari kembali kini tersusun rapi di rumah
              digital jemaat POUK Wasuponda.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/warta"
                className="inline-flex h-[42px] items-center justify-center rounded-full bg-[#141414] px-5 text-[14px] font-[600] text-white hover:bg-[#2c2c2c] transition shadow-sm"
              >
                Jelajahi Warta Jemaat
              </Link>
              <Link
                href="/renungan"
                className="inline-flex h-[42px] items-center justify-center rounded-full border border-[#141414] px-5 text-[14px] font-[600] text-[#141414] hover:bg-white transition"
              >
                Baca Renungan
              </Link>
            </div>
          </div>

          {/* Right Column: Multi-column Card Mockups (Mobbin Column Layout) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="space-y-4">
              {cardsCol1.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[20px] border border-[#EDEDED] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:border-[#ADADAD]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-[#F2F2F2] px-2.5 py-0.5 text-[12px] font-[600] text-[#141414]">
                      {item.category}
                    </span>
                    <span className="text-[12px] font-[450] text-[#707070]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-[650] text-[#141414] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.5] text-[#707070]">
                    {item.snippet}
                  </p>
                </div>
              ))}
            </div>

            {/* Column 2 (Staggered offset) */}
            <div className="space-y-4 sm:translate-y-6">
              {cardsCol2.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[20px] border border-[#EDEDED] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:border-[#ADADAD]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-[#F2F2F2] px-2.5 py-0.5 text-[12px] font-[600] text-[#141414]">
                      {item.category}
                    </span>
                    <span className="text-[12px] font-[450] text-[#707070]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-[650] text-[#141414] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.5] text-[#707070]">
                    {item.snippet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

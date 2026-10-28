"use client";

import { useState } from "react";
import { church } from "@/lib/data";

const inputClass =
  "mt-1.5 w-full rounded-[14px] border border-[#EDEDED] bg-[#F2F2F2]/60 px-4 py-3 text-[14px] text-[#141414] placeholder-[#707070] transition focus:border-[#141414] focus:bg-white focus:outline-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-[24px] border border-[#EDEDED] bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
      <h3 className="text-[20px] font-[650] text-[#141414] mb-1">
        Kirim Pesan ke Pengurus
      </h3>
      <p className="text-[13px] text-[#707070] mb-6">
        Formulir ini akan otomatis mengarahkan Anda ke WhatsApp resmi sekretariat POUK Wasuponda.
      </p>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const f = new FormData(e.currentTarget);
          const text = `Shalom, saya ${f.get("nama")} (${f.get("topik")}).\n\n${f.get("pesan")}`;
          window.open(
            `https://wa.me/${church.wa}?text=${encodeURIComponent(text)}`,
            "_blank",
            "noopener"
          );
          setSent(true);
        }}
      >
        <div>
          <label className="block text-[13px] font-[600] text-[#141414]">
            Nama Lengkap
            <input
              name="nama"
              required
              placeholder="Contoh: Yohanes / Sarah"
              className={inputClass}
            />
          </label>
        </div>

        <div>
          <label className="block text-[13px] font-[600] text-[#141414]">
            Keperluan
            <select name="topik" className={inputClass}>
              <option>Pertanyaan umum</option>
              <option>Kunjungan pertama & jadwal</option>
              <option>Permohonan doa syafaat</option>
              <option>Pelayanan komisi & pendaftaran</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block text-[13px] font-[600] text-[#141414]">
            Pesan / Pokok Doa
            <textarea
              name="pesan"
              required
              rows={4}
              placeholder="Tuliskan pertanyaan atau permohonan doa Anda..."
              className={inputClass}
            />
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex h-[44px] w-full items-center justify-center rounded-full bg-[#141414] px-6 text-[14px] font-[600] text-white transition hover:bg-[#2c2c2c] active:scale-[0.98] shadow-sm"
        >
          Kirim via WhatsApp Resmi
        </button>

        {sent && (
          <div
            role="status"
            className="rounded-[12px] bg-[#F2F2F2] p-3 text-center text-[13px] font-[500] text-[#141414]"
          >
            ✓ WhatsApp telah dibuka di tab baru. Silakan tekan tombol kirim di aplikasi WhatsApp Anda.
          </div>
        )}
      </form>
    </div>
  );
}

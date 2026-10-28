import type { Metadata } from "next";
import { Btn, PageHero } from "@/components/blocks";
import ContactForm from "@/components/ContactForm";
import { church, mapsUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontak & Sekretariat",
  description: "Hubungi sekretariat POUK Wasuponda, kirim permohonan doa, atau dapatkan petunjuk arah.",
};

export default function Kontak() {
  return (
    <>
      <PageHero
        badge="Sekretariat Gereja"
        title="Hubungi POUK Wasuponda"
        desc="Ada pertanyaan mengenai ibadah, komisi, pokok doa jemaat, atau rencana kunjungan? Kami siap menyambut dan mendengarkan Anda."
      />

      <section className="mx-auto max-w-[1280px] px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-block rounded-full bg-[#F2F2F2] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-3">
                Informasi Kantor
              </span>
              <h2 className="text-[26px] sm:text-[32px] font-[650] text-[#141414] tracking-[-0.02em]">
                Alamat & Sekretariat
              </h2>
              <p className="mt-3 text-[15px] text-[#707070] leading-[1.6]">
                {church.address}
              </p>
            </div>

            <div className="rounded-[20px] border border-[#EDEDED] bg-[#FAFAFA] p-6 space-y-4 text-[14px]">
              <div>
                <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD]">
                  WhatsApp Resmi
                </p>
                <p className="font-[650] text-[#141414] mt-0.5">
                  +{church.wa}
                </p>
              </div>
              <div className="pt-3 border-t border-[#EDEDED]">
                <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD]">
                  Email Sekretariat
                </p>
                <p className="font-[650] text-[#141414] mt-0.5">
                  {church.email}
                </p>
              </div>
              <div className="pt-3 border-t border-[#EDEDED]">
                <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD]">
                  Jam Pelayanan Kantor
                </p>
                <p className="text-[#707070] mt-0.5">
                  Selasa – Sabtu: 09:00 – 16:00 WITA
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Btn href={`https://wa.me/${church.wa}`} tone="solid">
                Chat WhatsApp Pengurus
              </Btn>
              <Btn href={mapsUrl} tone="ghost">
                Petunjuk Arah Google Maps ↗
              </Btn>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

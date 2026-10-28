import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[1280px] flex-col items-center justify-center px-5 text-center">
      <span className="rounded-full bg-[#F2F2F2] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070]">
        404
      </span>
      <h1 className="mt-4 text-[36px] font-[650] tracking-[-0.02em] text-[#141414]">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-2 max-w-md text-[15px] text-[#707070]">
        Maaf, halaman yang Anda tuju tidak ditemukan atau telah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-[42px] items-center justify-center rounded-full bg-[#141414] px-6 text-[14px] font-[600] text-white hover:bg-[#2c2c2c] transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}


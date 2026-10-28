import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "POUK Wasuponda", template: "%s · POUK Wasuponda" },
  description: "Jadwal ibadah, warta jemaat, renungan, dan kegiatan POUK Wasuponda.",
  openGraph: {
    title: "POUK Wasuponda",
    description: "Ada tempat untuk Anda di POUK Wasuponda.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={inter.variable}>
      <body>
        <a
          href="#isi"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
        >
          Lompat ke konten
        </a>
        <Navbar />
        <main id="isi">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

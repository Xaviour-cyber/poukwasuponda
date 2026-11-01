import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: {
    default: "Gereja POUK Wasuponda · Jadwal Ibadah, Warta & Renungan",
    template: "%s · POUK Wasuponda",
  },
  description:
    "Website resmi Gereja Persekutuan Oikumene Umat Kristen (POUK) Wasuponda, Luwu Timur. Informasi jadwal ibadah rutin, warta jemaat, renungan firman, persembahan, dan kegiatan pelayanan.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Gereja POUK Wasuponda · Rumah Keluarga Bertumbuh dalam Iman",
    description:
      "Gereja Persekutuan Oikumene Umat Kristen Wasuponda, Luwu Timur. Terbuka bagi seluruh jemaat dan keluarga.",
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
        <Analytics />
      </body>
    </html>
  );
}

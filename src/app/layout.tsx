// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// Google Fonts - Next.js 14+ en güncel optimizasyon yöntemi
import { Bubblegum_Sans, Nunito, Sunshiney } from "next/font/google";
import Navbar from "../components/Navbar";     // Navbar'ı ekledik
import Footer from "../components/Footer";     // Footer'ı ekledik
import ThemeProvider from "../components/ThemeProvider"; // Yeni component, aşağıda oluşturacağız

// Font tanımlamaları
const bubblegum = Bubblegum_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bubblegum",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const sunshiney = Sunshiney({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sunshiney",
  display: "swap",
});

// SEO için güçlü metadata
export const metadata: Metadata = {
  title: {
    default: "Sevimli Bambu Dostları Anaokulu",
    template: "%s | Sevimli Bambu Dostları Anaokulu",
  },
  description: "Panda temalı, eğlenceli ve gelişim odaklı anaokulu. Çocuklar bambu dostlarıyla öğrenirken mutlu olur!",
  keywords: "anaokulu, kreş, panda temalı anaokulu, bambu dostları, çocuk eğitimi, okul öncesi eğitim, İstanbul anaokulu",
  authors: [{ name: "Sevimli Bambu Dostları" }],
  openGraph: {
    title: "Sevimli Bambu Dostları Anaokulu",
    description: "Panda temalı eğlenceli anaokulu eğitimi. Bambu dostlarıyla öğrenin!",
    url: "https://www.sevimlibambudostlari.com", // Gerçek domainini sonra değiştir
    siteName: "Sevimli Bambu Dostları",
    images: [
      {
        url: "/logo.png", // public/logo.png koy
        width: 1200,
        height: 630,
        alt: "Sevimli Bambu Dostları Anaokulu Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      {/* suppressHydrationWarning: dark/light theme flicker'ı önler */}
      <body
        className={`
          ${bubblegum.variable}
          ${nunito.variable}
          ${sunshiney.variable}
          font-body                  /* varsayılan olarak Nunito */
          bg-white dark:bg-darkGray
          text-darkGray dark:text-white
          antialiased
          min-h-screen
          flex flex-col
        `}
      >
        {/* Theme Provider: Zustand ile dark class'ı body'ye ekler */}
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
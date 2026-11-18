// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satster Academy | เรียน SAT กับ P'Berry BBACU SAT1560",
  description:
    "เรียน SAT แบบออนไลน์ กับติวเตอร์ที่มีประสบการณ์และความเชี่ยวชาญในการสอน SAT พร้อมเนื้อหาที่อัปเดตและตรงตามหลักสูตร",
  icons: {
    icon: "/favicon.ico",   // classic browser tab icon
    shortcut: "/favicon.ico",
    apple: "/icon.ico",     // use your square logo for Apple touch (ICO works too)
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


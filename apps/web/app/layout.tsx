import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { Footer } from "@/components/footer";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "霧鏡 MUIR",
  description: "面向台灣市場的沙龍探索與預約平台 prototype。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${display.variable} ${body.variable} bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] antialiased flex flex-col min-h-screen`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

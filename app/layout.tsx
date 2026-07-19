// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoticeBanner from "./components/NoticeBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GBR Group of Schools",
  description: "Nurturing Minds from Nursery to 10th Grade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text-main flex flex-col min-h-screen`}
      >
        {/* 
          Sticky header wrapper keeps everything at the top. 
          flex-col ensures the banner naturally sits above the navbar. 
        */}
        <header className="sticky top-0 z-[60] flex flex-col w-full shadow-sm">
          <NoticeBanner />
          <Navbar />
        </header>

        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
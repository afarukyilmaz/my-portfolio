// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Yeni navbar'ı dahil ediyoruz

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmet Faruk Yilmaz",
  description: "Finance & Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

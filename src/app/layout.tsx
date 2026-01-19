// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmet Faruk Yilmaz | Portfolio",
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
        {/* Navigation Bar */}
        <nav className="w-full bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            
            {/* LOGO */}
            <div className="text-xl font-bold tracking-tight z-50">
              <Link href="/">AFY.</Link>
            </div>
            
            {/* MENU LINKS */}
            <div className="flex gap-8 text-sm font-medium items-center">
              <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              
              {/* SIDE PROJECTS DROPDOWN (Clickable Main Link) */}
              <div className="group relative h-full">
                <Link href="/projects" className="hover:text-blue-400 transition flex items-center gap-1 py-2">
                  Side Projects
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Projects Dropdown Content */}
                <div className="absolute left-0 top-full mt-0 w-64 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-100 hidden group-hover:block overflow-hidden origin-top-left transition-all">
                  <div className="flex flex-col">
                    <Link href="/projects#quanto" className="px-5 py-3 hover:bg-slate-50 hover:text-blue-600 border-b border-slate-100 transition">
                      Quanto Option Pricing Model
                    </Link>
                    <Link href="/projects#raroc" className="px-5 py-3 hover:bg-slate-50 hover:text-blue-600 transition">
                      RAROC/RORWA Calculator
                    </Link>
                  </div>
                </div>
              </div>

              {/* ACADEMIC DROPDOWN (Non-Clickable Main Label) */}
              <div className="group relative h-full">
                {/* Changed Link to div with cursor-default so it doesn't look clickable but triggers hover */}
                <div className="hover:text-blue-400 transition flex items-center gap-1 py-2 cursor-default">
                  Academic Work
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Academic Dropdown Content */}
                <div className="absolute right-0 top-full mt-0 w-56 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-100 hidden group-hover:block overflow-hidden origin-top-right transition-all">
                  <div className="flex flex-col">
                    <Link href="/academic/thesis" className="px-5 py-3 hover:bg-slate-50 hover:text-blue-600 border-b border-slate-100 transition">
                      Bachelor's Thesis
                      <span className="block text-xs text-slate-400 font-normal mt-0.5">Lisans Tezi</span>
                    </Link>
                    <Link href="/academic/courseworks" className="px-5 py-3 hover:bg-slate-50 hover:text-blue-600 transition">
                      MSc Courseworks
                      <span className="block text-xs text-slate-400 font-normal mt-0.5">Yüksek Lisans Ödevleri</span>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
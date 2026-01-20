// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // LÜTFEN BURAYA KENDİ LINKEDIN ADRESİNİ YAZ:
  const linkedInUrl = "https://www.linkedin.com/in/afarukyilmaz/"; 

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const toggleDropdown = (menu: string) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  return (
    <nav className="w-full bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* --- LEFT SIDE: LOGO & LINKEDIN (Mobile) --- */}
        <div className="flex items-center gap-4 z-50">
          {/* LOGO */}
          <div className="text-xl font-bold tracking-tight">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>AFY.</Link>
          </div>

          {/* MOBILE ONLY: LinkedIn Icon (Always Visible) */}
          <a 
            href={linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="md:hidden text-slate-400 hover:text-blue-400 transition"
            aria-label="LinkedIn Profile"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
             </svg>
          </a>
        </div>
        
        {/* --- CENTER: DESKTOP MENU --- */}
        <div className="hidden md:flex gap-6 text-sm font-medium items-center">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          
          {/* Side Projects Dropdown */}
          <div className="group relative h-full">
            <Link href="/projects" className="hover:text-blue-400 transition flex items-center gap-1 py-2">
              Side Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute left-0 top-full mt-0 w-64 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-100 hidden group-hover:block overflow-hidden origin-top-left transition-all">
              <div className="flex flex-col">
                <Link href="/projects#quanto" className="px-5 py-3 hover:bg-slate-50 hover:text-blue-600 border-b border-slate-100 transition">Quanto Option Pricing Model</Link>
                <Link href="/projects#raroc" className="px-5 py-3 hover:bg-slate-50 hover:text-blue-600 transition">RAROC/RORWA Calculator</Link>
              </div>
            </div>
          </div>

          {/* Academic Dropdown */}
          <div className="group relative h-full">
            <div className="hover:text-blue-400 transition flex items-center gap-1 py-2 cursor-pointer">
              Academic Work
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="absolute left-0 top-full mt-0 w-56 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-100 hidden group-hover:block overflow-hidden origin-top-right transition-all">
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

        {/* --- RIGHT SIDE: ACTIONS (Desktop) & HAMBURGER (Mobile) --- */}
        <div className="flex items-center gap-4">
            
            {/* DESKTOP ACTIONS: LinkedIn & CV */}
            <div className="hidden md:flex items-center gap-4">
                {/* LinkedIn Icon */}
                <a 
                    href={linkedInUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition"
                    title="LinkedIn Profile"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
                
                {/* CV Button */}
                <a 
                    href="/CV.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    CV
                </a>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none p-2">
                {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
            </button>
            </div>
        </div>
      </div>

      {/* --- MOBILE MENU CONTENT --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="flex flex-col p-4 space-y-2">
            
            {/* MOBILE CV BUTTON (At Top) */}
            <a 
                href="/CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded font-bold text-center flex items-center justify-center gap-2 mb-4 hover:bg-blue-700 transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
            </a>

            <Link href="/" onClick={toggleMobileMenu} className="py-3 px-4 hover:bg-slate-700 rounded transition text-blue-100">Home</Link>
            
            {/* MOBILE: Side Projects Toggle */}
            <div>
              <button 
                onClick={() => toggleDropdown('projects')} 
                className="w-full text-left py-3 px-4 hover:bg-slate-700 rounded transition flex justify-between items-center text-blue-100"
              >
                Side Projects
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'projects' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {openDropdown === 'projects' && (
                <div className="ml-4 border-l-2 border-slate-600 pl-4 mt-2 space-y-2">
                  <Link href="/projects" onClick={toggleMobileMenu} className="block py-2 text-slate-300 text-sm">All Projects</Link>
                  <Link href="/projects#quanto" onClick={toggleMobileMenu} className="block py-2 text-slate-300 text-sm">Quanto Option Pricing</Link>
                  <Link href="/projects#raroc" onClick={toggleMobileMenu} className="block py-2 text-slate-300 text-sm">RAROC Calculator</Link>
                </div>
              )}
            </div>

            {/* MOBILE: Academic Toggle */}
            <div>
              <button 
                onClick={() => toggleDropdown('academic')} 
                className="w-full text-left py-3 px-4 hover:bg-slate-700 rounded transition flex justify-between items-center text-blue-100"
              >
                Academic Work
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'academic' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {openDropdown === 'academic' && (
                <div className="ml-4 border-l-2 border-slate-600 pl-4 mt-2 space-y-2">
                   <Link href="/academic/thesis" onClick={toggleMobileMenu} className="block py-2 text-slate-300 text-sm">Bachelor's Thesis</Link>
                   <Link href="/academic/courseworks" onClick={toggleMobileMenu} className="block py-2 text-slate-300 text-sm">MSc Courseworks</Link>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
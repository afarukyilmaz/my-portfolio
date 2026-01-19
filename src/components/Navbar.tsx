// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Mobile dropdown states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const toggleDropdown = (menu: string) => {
    if (openDropdown === menu) {
      setOpenDropdown(null); // Close if already open
    } else {
      setOpenDropdown(menu); // Open the clicked one
    }
  };

  return (
    <nav className="w-full bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <div className="text-xl font-bold tracking-tight z-50">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>AFY.</Link>
        </div>
        
        {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          
          {/* DESKTOP: Side Projects Dropdown */}
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

          {/* DESKTOP: Academic Dropdown */}
          <div className="group relative h-full">
            <div className="hover:text-blue-400 transition flex items-center gap-1 py-2 cursor-pointer">
              Academic Work
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
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

        {/* --- MOBILE HAMBURGER BUTTON (Visible only on Mobile) --- */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none p-2">
            {isMobileMenuOpen ? (
               // Close Icon (X)
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
               // Menu Icon (Hamburger)
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU CONTENT --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="flex flex-col p-4 space-y-2">
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

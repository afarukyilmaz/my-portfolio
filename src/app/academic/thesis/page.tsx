// src/app/academic/thesis/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type Language = "en" | "tr";

export default function ThesisPage() {
  const [lang, setLang] = useState<Language>("en");

  const content = {
    en: {
      title: "Predicting Istanbul's Traffic Density Using Machine Learning Models",
      text: "Traffic in Istanbul is notorious, to say the least. In this project, I gathered real-world data from the Municipality, Meteorology, and Highways Directorate to make sense of this chaos. My goal was to predict the number of vehicles passing through a specific point within an hour. After extensive data cleaning and visualization, I pitted various linear and non-linear regression models against each other.\n\nWhile finding the best-performing model was satisfying, the real trophy for me was the experience itself: Applying an end-to-end data science pipeline to a complex, real-life urban problem.",
      cta: "Interested in the full thesis? Request a copy via Email",
      posterTitle: "Project Poster"
    },
    tr: {
      title: "Makine Öğrenmesi ile İstanbul Trafiğinin Tahminlemesi",
      text: "Bu projede, İBB, Meteoroloji ve Karayolları'ndan topladığım gerçek hayat verileriyle Istanbul trafigini anlamlandırmaya çalıştım. Amacım, belirli bir noktadan bir saat içinde geçecek araç sayısını önceden tahmin etmekti. Bunun için kapsamlı bir veri temizliği ve analizi yaptıktan sonra, verileri çeşitli lineer ve non-lineer regresyon modelleriyle yarıştırdım.\n\nSonuçta en iyi modeli bulmak önemliydi ama benim için asıl kazanim şuydu: Teorik bir veri bilimi sürecini, İstanbul trafiği gibi karmaşık ve gerçek bir probleme uçtan uca uygulama deneyimi kazanmak.",
      cta: "Tezin tamamını incelemek isterseniz, E-posta ile talep edebilirsiniz",
      posterTitle: "Proje Posteri"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative pb-20">
      
      {/* LANGUAGE TOGGLE */}
      <div className="fixed top-24 right-6 z-40">
        <button
          onClick={() => setLang(lang === "tr" ? "en" : "tr")}
          className="bg-white border border-slate-300 shadow-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
        >
          {lang === "tr" ? "🇹🇷 TR" : "🇬🇧 EN"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-12">
        
        {/* TEXT SECTION */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-12">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
            {content[lang].title}
          </h1>
          <div className="text-lg text-slate-600 leading-relaxed whitespace-pre-line font-light">
            {content[lang].text}
          </div>

          {/* Call To Action Button (Mail) */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <a 
              href="mailto:a.f.yilmaz48@gmail.com?subject=Request for Bachelor's Thesis"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              {content[lang].cta}
            </a>
          </div>
        </section>

        {/* POSTER SECTION */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{content[lang].posterTitle}</h2>
          
          <div className="bg-white p-2 rounded-xl shadow-lg inline-block border border-slate-200">
            {/* NOT: Buraya 'POSTER.pdf' dosyanın resim halini koymalısın.
               1. PDF'i JPG veya PNG'ye çevir.
               2. Adını 'thesis-poster.jpg' yap.
               3. 'public' klasörüne at.
            */}
            <div className="relative w-full md:w-[800px] h-auto min-h-[500px]">
               {/* Resim dosyanı public klasörüne koyduktan sonra buradaki src'yi güncelle */}
               {/* Şimdilik placeholder bir gri alan gösteriyorum */}
               <img 
                  src="/thesis-poster.jpg" 
                  alt="Thesis Poster" 
                  className="w-full h-auto rounded-lg"
                  onError={(e) => {
                    // Eğer resim bulunamazsa kullanıcıya uyarı göster
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                        parent.innerHTML = `<div class="p-20 bg-slate-100 text-slate-400">Poster Image Not Found.<br/>Please place 'thesis-poster.jpg' in public folder.</div>`;
                    }
                  }}
               />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
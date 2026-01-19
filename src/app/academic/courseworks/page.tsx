// src/app/academic/courseworks/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

type Language = "en" | "tr";

interface CourseworkItem {
  id: number;
  title: { en: string; tr: string };
  grade: string;
  description: { en: string; tr: string };
  tools?: string[]; // Optional: For listing software like Knime, Bloomberg
  note?: { en: string; tr: string }; // Optional: For specific notes (Coursework 1)
  quote?: { title: string; text: string }; // Optional: For the Conclusion part (Coursework 2)
  projectLink?: boolean; // Optional: If true, show link to Side Projects (Coursework 3)
}

export default function CourseworksPage() {
  const [lang, setLang] = useState<Language>("en");

  const courseworks: CourseworkItem[] = [
    {
      id: 1,
      title: { en: "Market Liquidity Explorer", tr: "Market Liquidity Explorer" },
      grade: "90/100",
      tools: ["Knime Analytics", "Bloomberg Terminal", "MS Excel"],
      description: {
        en: "In this study, I developed a rule-based trading algorithm. Using price data for a stock listed on the FTSE100, I first conducted spread and volume analysis. Subsequently, I calculated short and long-term trends using various moving average methods. I derived trading rules that triggered buy orders when the short-term trend crossed above the long-term trend, and sell orders when it fell below. I utilized Knime Analytics, Bloomberg Terminal, and MS Excel to compare the performance of different strategies.",
        tr: "Bu çalışmada kural bazlı bir alım-satım (trading) algoritması geliştirdim. FTSE100 endeksindeki bir hissenin fiyat verilerini kullanarak öncelikle spread ve hacim analizi yaptım. Ardından, çeşitli hareketli ortalama (moving average) yöntemleri ile kısa ve uzun vadeli trendleri hesapladım. Kısa vadeli trendin uzun vadeli trendi yukarı kestiği anlarda alım, altına düştüğü anlarda satım emirleri üreten kurallar türettim. Farklı hesaplamalarla çeşitli stratejilerin başarılarını karşılaştırdım."
      },
      note: {
        en: "Note: Aside from high-frequency trading algorithms with massive infrastructure, I do not believe it is feasible to consistently beat beta with a simple rule-based algorithm without taking on excessive risk; however, this was a valuable academic exercise.",
        tr: "Not: Milyonlarca dolar harcanan yüksek frekanslı algoritmalar hariç, sadece kural bazlı bir sistemle uzun vadede piyasa riskini aşmadan betayı yenmenin pek mümkün olduğunu düşünmüyorum; ancak akademik bir egzersiz olarak değerliydi."
      }
    },
    {
      id: 2,
      title: { en: "Active Fund Management Performance: A Comparison to Index Funds", tr: "Active Fund Management Performance: A Comparison to Index Funds" },
      grade: "80/100",
      description: {
        en: "This was a highly educational and engaging assignment for me. I conducted a literature review comparing active and passive investments. I initially approached the topic assuming active management was the superior option; however, as I delved deeper into the literature, I found passive management to be more rational. The primary reason is that actively managed funds often increase risk in their pursuit of alpha, rendering them more vulnerable during financial crises. Additionally, they charge significantly higher fees compared to passive index funds.",
        tr: "Bu benim için oldukça öğretici ve ilgi çekici bir çalışmaydı. Aktif ve pasif yatırımların karşılaştırıldığı bir literatür taraması hazırladım. Aktif yönetimin daha karlı bir seçenek olduğu varsayımıyla başladığım bu ödevde, literatürü taradıkça ve yeni makaleler okudukça pasif yönetimi daha mantıklı bulmaya başladım. Bunun ana sebebi, aktif yönetilen fonların betayı yenmek uğruna risklerini artırmasıdır; bu da onları kriz anlarında daha savunmasız bırakmaktadır. Ayrıca, pasif fonlara kıyasla çok daha yüksek komisyon ücretleri talep edilmektedir."
      },
      quote: {
        title: "Conclusion Excerpt from the Paper",
        text: "This paper examined the performance of actively managed funds in comparison to index funds by analysing the structural differences. Four core dimensions were assessed: Fees, tax efficiency, risk and performance during unusual market conditions. Higher fees place active fund managers at a disadvantage, as they must generate additional returns simply to break even with index funds. Moreover, frequently trading lowers tax efficiency... The Efficient Market Hypothesis suggests that observed outperformance is a result of higher risk rather than fund managers’ skill. Literature also provides numerical evidence on active funds having consistently higher risk than index funds in pursuit of alpha... Overall, although active funds still have a large sum of assets under management, there is an ongoing trend favouring index funds offering a more consistent return in the long run."
      }
    },
    {
      id: 3,
      title: { en: "Quanto Option Pricing", tr: "Quanto Option Pricing" },
      grade: "Not Graded Yet",
      projectLink: true,
      description: {
        en: "For this assignment, we were required to select a derivative product and explain its mechanics, pricing details, and use cases supported by real data. I chose Quanto Options. The feature distinguishing this from a vanilla option is the involvement of two different currencies. For instance, a UK-based investor can purchase an option for a stock listed on BIST using a fixed GBP/TRY exchange rate defined in the contract. This allows the investor to hedge against not only market risk but also currency risk. To account for this protection in pricing, an adjustment term is used, calculated via FX volatility, FX-stock correlation, and stock volatility.",
        tr: "Bu ödevde bir türev ürün seçilmesi; ürünün detaylarının, fiyatlandırma mekanizmasının ve gerçek verilerle desteklenen kullanım örneklerinin anlatılması istendi. Ben Quanto Opsiyonları seçtim. Bunu standart opsiyonlardan ayıran özellik, iki farklı para birimi içermesidir. Örneğin, İngiltere merkezli bir yatırımcı, sözleşmede sabitlenmiş bir GBP/TRY kuru üzerinden BIST'te listelenen bir hisse için opsiyon satın alabilir. Bu durumda yatırımcı, piyasa riskinden korunmanın yanı sıra, kur riskinden de kendini korumuş olur. Fiyatlamada bu korumayı sağlamak için FX volatilitesi, FX-hisse korelasyonu ve hisse volatilitesi değerleri kullanılarak hesaplanan bir düzeltme terimi kullanılır."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative pb-20 selection:bg-blue-100">
      
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
        
        {/* PAGE HEADER */}
        <div className="mb-12">
          <h1 className="text-3xl font-black text-slate-900 mb-2">
            {lang === "en" ? "MSc Courseworks" : "Yüksek Lisans Ödevleri"}
          </h1>
          <p className="text-slate-600">
            {lang === "en" 
             ? "Selected assignments from my MSc in Finance & Investment at University of Greenwich."
             : "University of Greenwich Finans & Yatırım Yüksek Lisans programımdan seçilmiş ödevler."}
          </p>
        </div>

        {/* COURSEWORK CARDS */}
        <div className="space-y-10">
          {courseworks.map((work) => (
            <div key={work.id} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              
              {/* Card Header: Title & Grade */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">{work.title[lang]}</h2>
                  {work.tools && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {work.tools.map((tool) => (
                        <span key={tool} className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Grade Badge */}
                <div className={`
                  px-4 py-1.5 rounded-full text-sm font-bold border whitespace-nowrap
                  ${work.grade.includes("Not") 
                    ? "bg-slate-100 text-slate-500 border-slate-200" 
                    : "bg-blue-50 text-blue-700 border-blue-100"}
                `}>
                  {work.grade}
                </div>
              </div>

              {/* Description */}
              <div className="text-slate-600 leading-relaxed font-light text-lg">
                <p>{work.description[lang]}</p>
              </div>

              {/* Special Note Section (For Coursework 1) */}
              {work.note && (
                <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-sm italic rounded-r">
                  {work.note[lang]}
                </div>
              )}

              {/* Quote Section (For Coursework 2) */}
              {work.quote && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    {work.quote.title}
                  </h3>
                  <blockquote className="border-l-2 border-slate-300 pl-4 text-slate-500 text-sm italic">
                    "{work.quote.text}"
                  </blockquote>
                </div>
              )}

              {/* Actions Footer */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                {/* Email Button */}
                <a 
                  href={`mailto:a.f.yilmaz48@gmail.com?subject=Request for Coursework: ${work.title.en}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {lang === "en" ? "Request full paper via Email" : "Ödevin tamamını Email ile isteyin"}
                </a>

                {/* Optional Project Link (For Coursework 3) */}
                {work.projectLink && (
                  <Link 
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
                    {lang === "en" ? "View Excel Model in Side Projects" : "Projelerim kısmındaki Excel Modelini İncele"}
                  </Link>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

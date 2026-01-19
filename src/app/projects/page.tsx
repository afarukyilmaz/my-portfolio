// src/app/projects/page.tsx
"use client";

import { useState, useEffect } from "react";

type Language = "en" | "tr";

interface ProjectItem {
  id: string; // HTML ID for scrolling (e.g., 'quanto')
  title: { en: string; tr: string };
  tags: string[];
  description: { en: string; tr: string };
  driveLink: string;
}

export default function ProjectsPage() {
  const [lang, setLang] = useState<Language>("tr");

  // Handle hash scrolling on page load (for layout links to work)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const projects: ProjectItem[] = [
    {
      id: "quanto",
      title: { en: "Quanto Option Pricing Model", tr: "Quanto Option Pricing Model" },
      tags: ["Financial Engineering", "Derivatives", "Excel Modelling"],
      driveLink: "https://drive.google.com/drive/folders/1BQidOxnevXYatW0xgs42zzIX86UJKVxs?usp=drive_link",
      description: {
        en: "A Quanto option is a type of cross-currency derivative. Its distinguishing feature from a standard vanilla option is the fixed exchange rate defined within the contract. While the strike price is determined by the underlying asset's movement in the foreign currency, the payout is settled in the domestic currency. For example, a UK-based investor can purchase an option for a stock listed on BIST using a fixed GBP/TRY exchange rate. This structure allows the investor to hedge against not only market risk but also currency risk.\n\nThe payout calculation involves multiplying the stock's value in TRY at maturity by the fixed exchange rate in the contract. To account for this dual protection in pricing, an adjustment term is utilized, calculated via FX volatility, FX-stock correlation, and stock volatility. This instrument serves both speculative and hedging purposes.\n\nThe Excel model linked below is based on the pricing framework developed by Eric Reiner in 1992. It includes three real-world examples demonstrating how to execute speculation and hedging strategies using Quanto options. You can download the file to tweak contract parameters and observe how the option price fluctuates.",
        tr: "Quanto opsiyon, iki farklı para birimi içeren bir opsiyon türüdür. Onu standart vanilla opsiyondan ayıran temel özellik, sözleşmede sabit bir döviz kurunun bulunmasıdır. Opsiyonun dayanak varlığı (underlying asset) yabancı para birimindeki hareketi üzerinden strike price belirlenirken, ödeme (payout) yerel para birimi ile yapılır. Örneğin, İngiltere merkezli bir yatırımcı, sözleşmede sabitlenmiş bir GBP/TRY kuru üzerinden BIST'te listelenen bir hisse için opsiyon satın alabilir. Bu durumda yatırımcı, piyasa riskinden korunmanın yanı sıra, kur riskinden de kendini korumuş olur.\n\nOpsiyon ödeme tarihinde hissenin TL değeri, sözleşmedeki sabit kur ile çarpılarak ödeme hesaplanır. Fiyatlamada bu korumayı sağlamak için FX volatilitesi, FX-hisse korelasyonu ve hisse volatilitesi değerleri kullanılarak hesaplanan bir düzeltme terimi kullanılır. Hem spekülasyon hem de hedge amaçlı kullanılabilir.\n\nAşağıdaki linkte, 1992 yılında Eric Reiner tarafından hazırlanan modele göre fiyatlama yapan bir Excel dosyası bulunmaktadır. Dosyada gerçek verilerle hazırlanmış 3 farklı senaryo (hedge ve spekülasyon) mevcuttur. Dosyayı indirip sözleşme detaylarını değiştirerek fiyatın nasıl etkilendiğini simüle edebilirsiniz."
      }
    },
    {
      id: "raroc",
      title: { en: "RAROC/RORWA Calculator", tr: "RAROC/RORWA Calculator" },
      tags: ["Commercial Banking", "Credit Risk", "Loan Pricing"],
      driveLink: "https://drive.google.com/drive/folders/1BQidOxnevXYatW0xgs42zzIX86UJKVxs?usp=drive_link",
      description: {
        en: "During my time in the Commercial Banking team at Odeabank, I observed that a vast majority of loans were issued to commercial clients. I created this Excel model to calculate RAROC (Risk-Adjusted Return on Capital) and RORWA (Return on Risk-Weighted Assets), which are the two most critical metrics in loan pricing and credit decision-making processes.\n\nAlthough this file performs a simplified calculation, it incorporates essential variables such as the client's risk rating, loan interest rates, Funds Transfer Pricing (FTP) rates, and collateral coverage. You can modify product or client-specific variables within the file to observe the sensitivity of RAROC and RORWA metrics to different credit scenarios.",
        tr: "Odeabank'ta Ticari Bankacılık ekibinde çalıştığım dönemde, bankadaki kredilerin çok büyük bir çoğunluğunun ticari müşterilere kullandırıldığını gözlemledim. Kredi fiyatlaması ve kredi kararları verilirken en sık kullanılan iki metrik olan RORWA ve RAROC hesaplaması yapan bir Excel dosyası oluşturdum.\n\nBu dosya basitleştirilmiş bir hesaplama yapsa da; müşterinin risk seviyesi, kredi ürünlerinin faizleri, FTP (Fon Transfer Fiyatlaması) oranları ve teminat yapısı gibi temel değişkenleri içermektedir. Dosya üzerinde ürün veya müşteri parametrelerini değiştirerek RAROC ve RORWA sonuçlarının nasıl etkilendiğini analiz edebilirsiniz."
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
            {lang === "en" ? "Side Projects" : "Projeler"}
          </h1>
          <p className="text-slate-600">
            {lang === "en" 
             ? "Technical implementations and financial models built outside of academic requirements."
             : "Akademik çalışmalar dışında geliştirdiğim teknik uygulamalar ve finansal modeller."}
          </p>
        </div>

        {/* PROJECTS LIST */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              id={project.id} // This ID enables the anchor scrolling from the menu
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 scroll-mt-28"
            >
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">{project.title[lang]}</h2>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="text-slate-600 leading-relaxed font-light text-lg whitespace-pre-line">
                {project.description[lang]}
              </div>

              {/* Action Button: Google Drive */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a 
                  href={project.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition font-medium"
                >
                  {/* Google Drive Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.01 1.485c2.082 0 3.754.025 4.982.688 1.432.772 1.487 2.067.89 3.19l-7.994 15.11a1.27 1.27 0 0 1-.95.626H.486c-.958 0-1.464-.997-.996-1.897L7.68 3.518a4.98 4.98 0 0 1 4.33-2.033zM15.01 3.5H9.6L2.3 17.2h5.4zm-2.12 2.6l-2.4 4.5h4.8z" opacity="0"/>
                    <path d="M8.33 4.49L2.5 14.59 5.86 20.5h11.96l-3.32-5.91H9.98L11.65 11h7.49l3.35-6.51H8.33zM16.67 9.5l-2.5 4.5h5l2.5-4.5h-5z" opacity="0"/>
                    {/* Simple Drive-like shape or folder icon */}
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  {lang === "en" ? "View Model on Google Drive" : "Google Drive'da Modeli İncele"}
                </a>
                <p className="mt-3 text-xs text-slate-400">
                    {lang === "en" ? "* No download required. View directly in browser." : "* İndirme gerektirmez. Tarayıcıda önizleyebilirsiniz."}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
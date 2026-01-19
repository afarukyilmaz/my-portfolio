// src/app/page.tsx
"use client";

import { useState } from "react";
import Chatbot from "@/components/Chatbot";

type Language = "en" | "tr";

interface TimelineItem {
  title: { en: string; tr: string };
  institution?: string;
  year: string;
  description: { en: string; tr: string };
  responsibilities?: { en: string[]; tr: string[] };
  grade?: string;
  thesis?: { en: string; tr: string };
  modules?: { en: string; tr: string };
}

interface TimelineEra {
  id: string;
  education?: TimelineItem;
  works?: TimelineItem[];
  milestone?: TimelineItem;
}

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  // --- DATA START ---
  const eras: TimelineEra[] = [
    {
      id: "masters",
      education: {
        year: "Sept 2025 - Present",
        title: { en: "MSc Finance & Investment", tr: "MSc Finance & Investment" },
        institution: "University of Greenwich",
        description: {
          en: "Pursuing masters to build an academic foundation in finance, complementing an engineering background. Status: On track for First Class Honors (1:1).",
          tr: "Mühendislik geçmişini sağlam bir finansal akademik temelle güçlendirmek icin yuksek lisans egitimi almaya karar verdim. Durum: Yuksek Onur derecesi (First Class Honors) yolunda eğitim devam ediyor."
        }
      }
    },
    {
      id: "professional",
      works: [
        {
          year: "Jan 2025 - Aug 2025",
          title: { en: "Commercial Banking Data Analyst", tr: "Ticari Bankacılık Veri Yönetimi Uzmanı" },
          institution: "Odeabank",
          description: {
            en: "Transition: Requested rotation to Commercial Banking to bridge technical skills with financial knowledge. Acted as a bridge between IT teams and commercial business units.",
            tr: "Geçiş: Teknik becerilerin yaninda finansal piyasalar, finansal urunlere artan ilgim nedeniyle ticari bankacilik alanina rotasyon talep ettim. IT ekipleri ile ticari iş birimleri arasında köprü görevi üstlenildi."
          },
          responsibilities: {
            en: [
              "Dashboard Management: Ensured accurate data flow for RM Dashboards used by branches and HQ.",
              "UAT: Conducted User Acceptance Testing for commercial mobile/internet banking updates.",
              "Loan Pricing: Validated formulas and managed testing for the RAROC (Risk-Adjusted Return on Capital) calculation engine, worked aligned with risk management and IT teams."
            ],
            tr: [
              "Dashboard Yönetimi: Şube ve GM ekiplerinin kullandığı RM Dashboard'larının veri akışı ve doğruluğu.",
              "UAT: Ticari mobil/internet bankacılığı güncellemeleri için UAT testleri.",
              "Kredi Fiyatlama: RAROC hesaplama motoru için formül validasyonları ve test süreçleri yönetildi."
            ]
          }
        },
        {
          year: "July 2024 - Jan 2025",
          title: { en: "HR Data Analyst", tr: "Kapasite Planlama Uzmani" },
          institution: "Odeabank",
          description: {
            en: "Training: Completed an intensive 6-week banking curriculum covering Treasury, Risk, and Commercial Banking. Responsibilities: Continued within the Capacity Planning team as a full-time analyst. Leveraged data science skills to analyse branch transaction data deeper, refining models for operational bottlenecks and workforce optimization.",
            tr: "Eğitim: Hazine, Risk ve Ticari Bankacılık gibi temel alanları kapsayan 6 haftalık Management Trainee egitimi tamamladim. Sorumluluklar: Kapasite Planlama ekibinde tam zamanlı analist olarak projelere devam edildi. Şube işlem verilerini analiz etmek için veri bilimi yetkinlikleri kullandim, operasyonel darboğaz ve iş gücü optimizasyonu icin raporlar, gorseller hazirladim."
          }
        }
      ]
    },
    {
      id: "undergrad",
      education: {
        year: "2021 September - 2024 June",
        title: { en: "Industrial Engineering", tr: "Endüstri Mühendisliği" },
        institution: "Yildiz Technical University",
        grade: "3.25/4.00",
        description: {
          en: "Focus: Specialized in data analysis, statistical decision-making, and machine learning applications.",
          tr: "Ozet: Veri analizi, istatistiksel karar verme ve makine öğrenmesi uygulamaları üzerine uzmanlaştım."
        },
        thesis: {
          en: "Comparative Analysis of Predictive Models for Istanbul Traffic Density using R. (Awarded High Distinction/AA). Gathered large-scale municipality data to compare ML algorithms.",
          tr: "R programlama ile İstanbul Trafik Yoğunluğu için Tahmin Modellerinin Karşılaştırmalı Analizi. (AA - Yüksek Onur Derecesi). Farklı ML algoritmalarını kıyaslamak için büyük ölçekli belediye, meteoroloji ve karayollari verileri analiz edildi."
        },
        modules: {
          en: "Statistical Decision Making (AA), Simulation (AA), Financial Management (AA), Data Mining (BB).",
          tr: "İstatistiksel Karar Verme (AA), Benzetim (AA), Finansal Yönetim (AA), Veri Madenciliği (BB)."
        }
      },
      works: [
        {
          year: "Jan 2024 - July 2024",
          title: { en: "Intern (Part-Time)", tr: "Stajyer" },
          institution: "Odeabank",
          description: {
            en: "Objective: optimizing workforce distribution and branch efficiency.",
            tr: "Amaç: İş gücü dağılımını optimize etmek ve şube verimliliğini artırmak."
          },
          responsibilities: {
            en: [
              "Did branch visits and many surveys to create transaction dataset.",
              "Predicted branch workload and identifying bottlenecks based on transaction data.",
              "Assisted in 'Float Staff' (pool employees) allocation models to meet daily demand which later let to recommendations for efficiency improvments.",
              "Utilized MS Excel and SQL for reporting operational metrics."
            ],
            tr: [
              "Sube ziyaretleri ile islem verilerini iceren kapsamli bir veri hazirladik.",
              "İşlem verilerine dayanarak şube yoğunluğu ve darboğaz tahminlemeleri yaptik.",
              "Havuz çalışanlarının günlük talebe göre doğru lokasyona atanması icin tahminlemeler yaptik.",
              "Raporlamalar için yoğunlukla MS Excel ve SQL kullandim."
            ]
          }
        },
        {
          year: "Dec 2022 - May 2023",
          title: { en: "Intern (Part-Time)", tr: "Süreç Geliştirme Uzman Yrd." },
          institution: "Mars Logistics",
          description: {
            en: "Team: Corporate Development team.",
            tr: "Ekip: Kurumsal Gelişim"
          },
          responsibilities: {
            en: [
                "Supported ISO standards audits and Turquality certification processes.",
                "Conducted warehouse visits for process observation.",
                "Assisted in sustainability reporting and daily operational analysis using MS Office tools."
            ],
            tr: [
                "ISO standartları denetimleri ve Turquality belge süreçlerine destek verildi.",
                "Süreç gözlemi ve ISO ic denetimleri için depo ziyaretleri gerçekleştirildi.",
                "Sürdürülebilirlik raporlamaları ve günlük operasyonel islerde destek verdim, MS Office uygulamalari kullandim."
            ]
          }
        },
        {
          year: "July 2022 - Aug 2022",
          title: { en: "Global Volunteer", tr: "Global Volunteer" },
          institution: "AIESEC Greece",
          description: {
            en: "Project: UN SDG 4: Quality Education (Thessaloniki). Role: Worked as an exchange teacher in a kindergarten for children aged 6-12.",
            tr: "Proje: BM Sürdürülebilir Kalkınma Amacı 4: Nitelikli Eğitim (Selanik). Rol: 6-12 yaş grubu çocuklara yönelik bir kreşte değişim öğretmeni olarak görev aldım."
          },
          responsibilities: {
            en: ["Activities: Designed creative activities, supported local teachers, and fostered cross-cultural communication with children."],
            tr: ["Aktiviteler: Cocuklarla oyunlar oynadim, resim cizdim yakantop oynadim, oyunlar ogrettim, ogretmenlere derslerde yardimci oldum"]
          }
        }
      ]
    },
    {
      id: "pre-undergrad",
      education: {
        year: "2019 - 2021",
        title: { en: "Civil Engineering", tr: "İnşaat Mühendisliği" },
        institution: "Istanbul Technical University",
        description: {
          en: "Completed English preparation and 1.5 years of fundamental engineering curriculum. I realized a stronger passion for data, optimization, and systems thinking during engineering courses. After 2 years I transfer to Industrial Engineering.",
          tr: "İngilizce hazırlık eğitimi ve 1.5 yıl temel mühendislik eğitimi tamamladim. Mühendislik dersleri sırasında istatistik, yapay zeka ve optimizasyon gibi alanlara olan ilgimi fark ederek Endüstri Mühendisliği bölümüne yatay geçiş yaptım."
        }
      }
    },
    {
      id: "birth",
      milestone: {
        year: "2001",
        title: { en: "Hello World!", tr: "Doğdum" },
        description: { en: "Project 'Ahmet Faruk' was initialized.", tr: "Dogdum." }
      }
    }
  ];
  // --- DATA END ---

  // Modified Card Component with Mobile Visibility Fix
  const TimelineCard = ({ item, isLeft }: { item: TimelineItem; isLeft?: boolean }) => (
    <div className={`
      group relative 
      bg-white 
      border border-slate-200 
      hover:border-blue-400 hover:shadow-xl 
      p-6 rounded-xl transition-all duration-300 overflow-hidden
      ${isLeft ? "h-full" : "h-auto w-full"} 
    `}>
      
      {/* HEADER */}
      <div className={`flex flex-col ${isLeft ? "md:items-end md:text-right" : "items-start text-left"} relative z-10`}>
        <span className="text-blue-600 font-bold text-sm mb-1 uppercase tracking-wide">
          {item.year}
        </span>
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition duration-300">
          {item.title[lang]}
        </h3>
        {item.institution && (
          <div className="text-slate-500 font-medium text-sm mt-1">
            {item.institution}
          </div>
        )}
      </div>

      {/* CONTENT */}
      {/* GÜNCELLEME BURADA: Mobilde hep açık (opacity-100), Masaüstünde (md:) gizli ve hover ile açılıyor */}
      <div className={`
        transition-all duration-500 ease-in-out mt-4
        max-h-[2000px] opacity-100 
        md:mt-0 md:max-h-0 md:opacity-0 md:group-hover:max-h-[1000px] md:group-hover:opacity-100 
        md:pt-0 group-hover:pt-4
      `}>
        <div className="border-t border-slate-100 pt-4 text-slate-600 text-sm leading-relaxed">
          <p className={`mb-2 ${isLeft ? "md:text-right" : "text-left"}`}>{item.description[lang]}</p>
          
          {/* Specific Details */}
          <div className={`space-y-1 ${isLeft ? "md:text-right" : "text-left"}`}>
            {item.grade && <p><strong>Grade:</strong> {item.grade}</p>}
            {item.thesis && <p><strong>Thesis:</strong> {item.thesis[lang]}</p>}
            {item.modules && <p><strong>Modules:</strong> {item.modules[lang]}</p>}
          </div>

          {/* Responsibilities */}
          {item.responsibilities && (
            <ul className={`mt-3 space-y-1 text-slate-500 ${isLeft ? "md:text-right" : "text-left"}`}>
              {item.responsibilities[lang].map((resp, i) => (
                <li key={i} className="flex items-center gap-2 justify-start md:justify-end flex-row-reverse md:flex-row">
                   {isLeft ? (
                     <>{resp} <span className="text-blue-400">●</span></>
                   ) : (
                     <><span className="text-blue-400">●</span> {resp}</>
                   )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-blue-100">

      {/* LANGUAGE TOGGLE */}
      <div className="fixed top-24 right-6 z-50">
        <button
          onClick={() => setLang(lang === "tr" ? "en" : "tr")}
          className="bg-white border border-slate-300 shadow-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
        >
          {lang === "tr" ? "🇹🇷 TR" : "🇬🇧 EN"}
        </button>
      </div>

      {/* HERO */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">
            Ahmet Faruk Yilmaz
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {lang === "en" 
              ? "Finance and Investment MSc student with an engineering background and professional experience in a multinational bank." 
              : "Mühendislik geçmişine sahip ve bankada deneyimi bulunan, Finans ve Yatırım alanında yüksek lisans öğrencisi."}
          </p>
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-2xl">
               <Chatbot />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">
            {lang === "en" ? "My Journey" : "Yolculuğum"}
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* The Vertical Spine */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-slate-300 to-slate-200 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {eras.map((era) => {
                // MILESTONE
                if (era.milestone) {
                  return (
                    <div key={era.id} className="relative flex justify-center items-center py-8">
                       <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 transform -translate-x-1/2"></div>
                       <div className="bg-blue-50 border border-blue-100 px-6 py-2 rounded-full text-center shadow-sm z-20 ml-16 md:ml-0">
                          <span className="font-bold text-blue-800">{era.milestone.year}: </span>
                          <span className="text-blue-700">{era.milestone.title[lang]}</span>
                       </div>
                    </div>
                  );
                }

                // ERA BLOCK (Split View)
                return (
                  <div key={era.id} className="relative flex flex-col md:flex-row w-full min-h-[150px]">
                    
                    {/* The Dot */}
                    <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 transform -translate-x-1/2 shadow-sm"></div>

                    {/* LEFT SIDE (Education) */}
                    <div className="w-full md:w-1/2 md:pr-12 pl-20 md:pl-0 mb-8 md:mb-0">
                      {era.education ? (
                        <div className="h-full">
                           <TimelineCard item={era.education} isLeft={true} />
                        </div>
                      ) : <div className="hidden md:block"/>}
                    </div>

                    {/* RIGHT SIDE (Works) */}
                    <div className="w-full md:w-1/2 md:pl-12 pl-20 md:pl-0 flex flex-col gap-6">
                      {era.works && era.works.map((work, idx) => (
                        <TimelineCard key={idx} item={work} isLeft={false} />
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

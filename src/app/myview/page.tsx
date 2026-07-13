"use client";

import React, { useState } from "react";
import { Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

interface ViewItem {
  id: number;
  type: "Quotes" | "Blogs" | "Articles";
  contentEn: string;
  contentHi: string;
  titleEn?: string;
  titleHi?: string;
  authorEn: string;
  authorHi: string;
  dateEn: string;
  dateHi: string;
}

const viewItems: ViewItem[] = [
  {
    id: 1,
    type: "Quotes",
    contentEn: "Politics is a medium of public service. Development, transparency, and humanity must remain at the center of governance.",
    contentHi: "राजनीति जनसेवा का एक माध्यम है। विकास, पारदर्शिता और इंसानियत शासन के केंद्र में होनी चाहिए।",
    authorEn: "Murli Manohar Jaiswal",
    authorHi: "मुरली मनोहर जायसवाल",
    dateEn: "July 12, 2026",
    dateHi: "12 जुलाई, 2026",
  },
  {
    id: 2,
    type: "Blogs",
    titleEn: "Empowering Rural Youth through Vocational Skill Development",
    titleHi: "व्यावसायिक कौशल विकास के माध्यम से ग्रामीण युवाओं का सशक्तिकरण",
    contentEn: "In eastern Uttar Pradesh, our youth hold the key to economic recovery. Our focus must shift from traditional models to digital integration and vocational learning hubs in every subdivision.",
    contentHi: "पूर्वी उत्तर प्रदेश में, हमारे युवा आर्थिक सुधार की कुंजी हैं। हमारा ध्यान पारंपरिक मॉडलों से हटकर प्रत्येक उपखंड में डिजिटल एकीकरण और व्यावसायिक शिक्षण केंद्रों पर केंद्रित होना चाहिए।",
    authorEn: "Murli Manohar Jaiswal",
    authorHi: "मुरली मनोहर जायसवाल",
    dateEn: "June 25, 2026",
    dateHi: "25 जून, 2026",
  },
  {
    id: 3,
    type: "Articles",
    titleEn: "Social Justice: The Core Foundation of Samajwadi Ideology",
    titleHi: "सामाजिक न्याय: समाजवादी विचारधारा की मूल नींव",
    contentEn: "Social justice is not merely a slogan, but a mandate for equitable resources. We must ensure healthcare access, quality primary schools, and support for farming communities to balance growth.",
    contentHi: "सामाजिक न्याय केवल एक नारा नहीं है, बल्कि समान संसाधनों का एक अधिदेश है। विकास को संतुलित करने के लिए हमें स्वास्थ्य सेवा तक पहुंच, गुणवत्तापूर्ण प्राथमिक स्कूलों और कृषि समुदायों के लिए सहायता सुनिश्चित करनी होगी।",
    authorEn: "Murli Manohar Jaiswal",
    authorHi: "मुरली मनोहर जायसवाल",
    dateEn: "May 14, 2026",
    dateHi: "14 मई, 2026",
  },
  {
    id: 4,
    type: "Quotes",
    contentEn: "Without equal opportunities for education and health, no region can achieve genuine sustainable growth.",
    contentHi: "शिक्षा और स्वास्थ्य के समान अवसरों के बिना, कोई भी क्षेत्र वास्तविक रूप से सतत विकास प्राप्त नहीं कर सकता।",
    authorEn: "Murli Manohar Jaiswal",
    authorHi: "मुरली मनोहर जायसवाल",
    dateEn: "April 08, 2026",
    dateHi: "08 अप्रैल, 2026",
  },
];

export default function MyViewPage() {
  const { t } = useLanguage();
  const [activeSub, setActiveSub] = useState("All");

  const filteredViews = activeSub === "All"
    ? viewItems
    : viewItems.filter(item => item.type === activeSub);

  const subcategories = [
    { en: "All", hi: "सभी" },
    { en: "Quotes", hi: "सुविचार" },
    { en: "Blogs", hi: "ब्लॉग" },
    { en: "Articles", hi: "लेख" }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-white dark:bg-slate-950">
        
        {/* Banner */}
        <section className="relative py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sp-red">
              {t("Thoughts", "विचार")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white">
              {t("My Views & Quotes", "मेरे विचार और वक्तव्य")}
            </h1>
            <div className="h-1 w-20 bg-sp-red mx-auto rounded-full" />
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              {t(
                "Personal columns, ideology statements, quotes, and blog writings of Solu Jaiswal.",
                "सोलू जायसवाल के व्यक्तिगत स्तंभ, विचारधारा वक्तव्य, उद्धरण और ब्लॉग लेखन।"
              )}
            </p>
          </div>
        </section>

        {/* Filter buttons */}
        <section className="py-12 border-b border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-2">
            {subcategories.map(sub => (
              <button
                key={sub.en}
                onClick={() => setActiveSub(sub.en)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeSub === sub.en
                    ? "bg-sp-red text-white shadow-md shadow-sp-red/30"
                    : "glass-card hover:bg-sp-red hover:text-white"
                }`}
              >
                {t(sub.en, sub.hi)}
              </button>
            ))}
          </div>
        </section>

        {/* Views content */}
        <section className="py-20 bg-slate-50/50 dark:bg-slate-900/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            {filteredViews.map(item => (
              <div key={item.id} className="glass-card p-8 rounded-3xl relative overflow-hidden">
                {item.type === "Quotes" ? (
                  <div className="space-y-4">
                    <Quote className="w-10 h-10 text-sp-red opacity-30" />
                    <p className="font-serif text-xl sm:text-2xl font-bold italic leading-relaxed text-slate-800 dark:text-slate-200">
                      "{t(item.contentEn, item.contentHi)}"
                    </p>
                    <div className="flex justify-between items-center text-xs text-slate-500 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <span className="font-bold uppercase tracking-wider text-sp-red">
                        — {t(item.authorEn, item.authorHi)}
                      </span>
                      <span>{t(item.dateEn, item.dateHi)}</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold text-sp-red uppercase tracking-wider bg-sp-red/10 px-2 py-0.5 rounded">
                      {t(item.type, item.type === "Blogs" ? "ब्लॉग" : "लेख")}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                      {t(item.titleEn || "", item.titleHi || "")}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {t(item.contentEn, item.contentHi)}
                    </p>
                    <div className="flex justify-between items-center text-xs text-slate-500 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <span>{t(`Written by ${item.authorEn}`, `${item.authorHi} द्वारा लिखित`)}</span>
                      <span>{t(item.dateEn, item.dateHi)}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

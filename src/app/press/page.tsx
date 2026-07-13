"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

interface PressItem {
  id: number;
  titleEn: string;
  titleHi: string;
  categoryEn: string;
  categoryHi: string;
  dateEn: string;
  dateHi: string;
  summaryEn: string;
  summaryHi: string;
  image: string;
}

const pressItems: PressItem[] = [
  {
    id: 1,
    titleEn: "Barhaj Assembly Constituency Outreach Program",
    titleHi: "बरहज विधानसभा क्षेत्र जनसंपर्क कार्यक्रम",
    categoryEn: "News",
    categoryHi: "समाचार",
    dateEn: "July 10, 2026",
    dateHi: "10 जुलाई, 2026",
    summaryEn: "Murli Manohar Jaiswal organized public chaupals to directly listen to grievances regarding road connectivity and electricity issues in local villages.",
    summaryHi: "मुरली मनोहर जायसवाल ने स्थानीय गांवों में सड़क संपर्क और बिजली की समस्याओं के संबंध में शिकायतों को सीधे सुनने के लिए जन चौपालों का आयोजन किया।",
    image: "/images/image-copy-2.png",
  },
  {
    id: 2,
    titleEn: "Healthcare Equipment Donated to Local Clinic",
    titleHi: "स्थानीय स्वास्थ्य केंद्र को स्वास्थ्य उपकरण दान",
    categoryEn: "Press Releases",
    categoryHi: "प्रेस विज्ञप्ति",
    dateEn: "June 28, 2026",
    dateHi: "28 जून, 2026",
    summaryEn: "As part of the continuous community health camps, critical support monitors and primary care kits were provided to rural medical rooms.",
    summaryHi: "निरंतर सामुदायिक स्वास्थ्य शिविरों के हिस्से के रूप में, ग्रामीण चिकित्सा कक्षों को महत्वपूर्ण निगरानी मशीनें और प्राथमिक चिकित्सा किट प्रदान किए गए।",
    image: "/images/image-copy.png",
  },
  {
    id: 3,
    titleEn: "Samajwadi Youth Volleyball Tournament Finals",
    titleHi: "समाजवादी युवा वॉलीबॉल टूर्नामेंट फाइनल संपन्न",
    categoryEn: "News",
    categoryHi: "समाचार",
    dateEn: "June 15, 2026",
    dateHi: "15 जून, 2026",
    summaryEn: "A successful sports drive concluded with over 30 village teams participating. Prizes and athletic uniforms were distributed by Solu Jaiswal.",
    summaryHi: "30 से अधिक ग्रामीण टीमों की भागीदारी के साथ एक सफल खेल अभियान संपन्न हुआ। सोलू जायसवाल द्वारा विजेताओं को पुरस्कार और खेल किट वितरित किए गए।",
    image: "/images/image.png",
  },
  {
    id: 4,
    titleEn: "Interview: The Path to Inclusive Rural Growth in UP",
    titleHi: "साक्षात्कार: उत्तर प्रदेश में समावेशी ग्रामीण विकास की राह",
    categoryEn: "Interviews",
    categoryHi: "साक्षात्कार",
    dateEn: "May 20, 2026",
    dateHi: "20 मई, 2026",
    summaryEn: "Speaking on local television, Murli Manohar outlines his vision for farmer cooperation, cold storages, and digital literacy pathways.",
    summaryHi: "स्थानीय टेलीविजन पर बोलते हुए, मुरली मनोहर ने किसानों के सहयोग, कोल्ड स्टोरेज और डिजिटल साक्षरता मार्गों के लिए अपना दृष्टिकोण रेखांकित किया।",
    image: "/images/image-copy-4.png",
  },
  {
    id: 5,
    titleEn: "Editorial: Strengthening Grassroots Democracy",
    titleHi: "संपादकीय: जमीनी लोकतंत्र को सुदृढ़ बनाना",
    categoryEn: "Editorials",
    categoryHi: "संपादकीय",
    dateEn: "April 12, 2026",
    dateHi: "12 अप्रैल, 2026",
    summaryEn: "Reflections on regional representation and democratic transparency as driving mechanisms for development in Deoria district.",
    summaryHi: "देवरिया जिले में विकास के संचालक तंत्र के रूप में क्षेत्रीय प्रतिनिधित्व और लोकतांत्रिक पारदर्शिता पर विचार।",
    image: "/images/image-copy-3.png",
  },
];

export default function PressPage() {
  const { t, language } = useLanguage();
  const [activeSub, setActiveSub] = useState("All");

  const filteredPress = activeSub === "All"
    ? pressItems
    : pressItems.filter(item => item.categoryEn === activeSub);

  const subcategories = [
    { en: "All", hi: "सभी" },
    { en: "News", hi: "समाचार" },
    { en: "Interviews", hi: "साक्षात्कार" },
    { en: "Editorials", hi: "संपादकीय" },
    { en: "Press Releases", hi: "प्रेस विज्ञप्ति" }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-white dark:bg-slate-950">
        
        {/* Banner */}
        <section className="relative py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sp-red">
              {t("Media Center", "मीडिया सेंटर")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white">
              {t("Press & News Releases", "प्रेस एवं समाचार विज्ञप्ति")}
            </h1>
            <div className="h-1 w-20 bg-sp-red mx-auto rounded-full" />
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              {t(
                "Follow latest activities, press statements, and news releases on the ground.",
                "जमीन पर नवीनतम गतिविधियों, प्रेस बयानों और समाचार विज्ञप्तियों का अनुसरण करें।"
              )}
            </p>
          </div>
        </section>

        {/* Filter categories */}
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

        {/* Press items list */}
        <section className="py-20 bg-slate-50/50 dark:bg-slate-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {filteredPress.map(item => (
                <div key={item.id} className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between">
                  <div className="relative w-full h-[220px]" style={{ position: "relative" }}>
                    <Image
                      src={item.image}
                      alt={t(item.titleEn, item.titleHi)}
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-bold text-sp-red uppercase tracking-wider">
                      {t(item.categoryEn, item.categoryHi)}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-slate-900 dark:text-white line-clamp-2">
                      {t(item.titleEn, item.titleHi)}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3">
                      {t(item.summaryEn, item.summaryHi)}
                    </p>
                  </div>
                  <div className="px-6 pb-6 pt-2 flex justify-between items-center text-xs text-slate-500">
                    <span>{t(item.dateEn, item.dateHi)}</span>
                    <a href="#contact" className="text-sp-red font-bold flex items-center gap-1 hover:underline">
                      {t("Read More", "और पढ़ें")} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

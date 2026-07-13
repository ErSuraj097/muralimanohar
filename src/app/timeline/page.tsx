"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

interface TimelineEvent {
  year: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  image: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2007",
    titleEn: "Grassroots Entry",
    titleHi: "जमीनी स्तर पर शुरुआत",
    descEn: "Started active public service and grassroots political activities in Deoria. Worked door-to-door with villagers and local youth.",
    descHi: "देवरिया में सक्रिय जनसेवा और जमीनी स्तर की राजनीतिक गतिविधियों की शुरुआत की। ग्रामीणों और स्थानीय युवाओं के साथ मिलकर काम किया।",
    image: "/images/image-copy.png",
  },
  {
    year: "2010",
    titleEn: "BJMC Graduation",
    titleHi: "एमिटी यूनिवर्सिटी में दाखिला",
    descEn: "Completed Bachelor of Journalism & Mass Communication from Amity University, refining communication, public outreach, and media skills.",
    descHi: "एमिटी यूनिवर्सिटी से पत्रकारिता एवं जनसंचार में स्नातक (BJMC) पूरा किया, जिससे जनसंचार और मीडिया कौशल में निखार आया।",
    image: "/images/image.png",
  },
  {
    year: "2017",
    titleEn: "First Assembly Campaign",
    titleHi: "प्रथम विधानसभा चुनाव",
    descEn: "Contested Uttar Pradesh Legislative Assembly Election from Barhaj Constituency, laying a firm foundation for Samajwadi Party development.",
    descHi: "बरहज निर्वाचन क्षेत्र से उत्तर प्रदेश विधानसभा चुनाव लड़ा, जिससे समाजवादी पार्टी संगठन और जमीनी विकास की मजबूत नींव पड़ी।",
    image: "/images/image-copy-2.png",
  },
  {
    year: "2022",
    titleEn: "Assembly Candidacy",
    titleHi: "आधिकारिक विधानसभा प्रत्याशी",
    descEn: "Contested the Uttar Pradesh Legislative Assembly Election from Barhaj Constituency as the Samajwadi Party Candidate, championing social justice and youth employment.",
    descHi: "बरहज विधानसभा क्षेत्र से समाजवादी पार्टी के उम्मीदवार के रूप में उत्तर प्रदेश विधानसभा चुनाव लड़ा, जिसमें सामाजिक न्याय और युवाओं के रोजगार को प्राथमिकता दी।",
    image: "/images/image-copy-4.png",
  },
  {
    year: "Present",
    titleEn: "Continuous Public Welfare",
    titleHi: "निरंतर लोक कल्याण",
    descEn: "Actively working for youth empowerment, organizing health drives, blood camps, sports clubs, and listening to grievances at weekly chaupals.",
    descHi: "युवा सशक्तिकरण के लिए सक्रिय रूप से काम करना, स्वास्थ्य शिविरों, रक्तदान शिविरों और खेल क्लबों का आयोजन करना और साप्ताहिक चौपालों पर जनसमस्याओं का निवारण करना।",
    image: "/images/image-copy-3.png",
  },
];

export default function TimelinePage() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? timelineEvents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === timelineEvents.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-white dark:bg-slate-950">
        
        {/* Banner Section */}
        <section className="relative py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sp-red">
              {t("Chronology", "समयरेखा")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white">
              {t("Life & Political Timeline", "जीवन और राजनीतिक यात्रा")}
            </h1>
            <div className="h-1 w-20 bg-sp-red mx-auto rounded-full" />
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              {t(
                "Key milestones and highlights of public life and service.",
                "सार्वजनिक जीवन और जनसेवा के प्रमुख मील के पत्थर और मुख्य विशेषताएं।"
              )}
            </p>
          </div>
        </section>

        {/* INTERACTIVE TIMELINE (EXACT DUPLICATE OF AMIT SHAH JOURNEY SCHEMATIC) */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 sm:px-12">
            
            {/* Header Control Row with Pill and Arrow buttons */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-10">
              <div className="bg-sp-red text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-6 py-2 rounded-r-full rounded-l-md shadow-sm">
                {t("JOURNEY", "यात्रा")}
              </div>
              
              <div className="flex space-x-3 text-slate-400">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-sp-red transition-all cursor-pointer border border-slate-200 dark:border-slate-800"
                  aria-label="Previous timeline item"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-sp-red transition-all cursor-pointer border border-slate-200 dark:border-slate-800"
                  aria-label="Next timeline item"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Time Nodes horizontal line list */}
            <div className="relative flex justify-between items-center max-w-4xl mx-auto mb-12 select-none overflow-x-auto no-scrollbar py-4 px-2">
              <div className="absolute left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 top-1/2 z-0" />
              
              {timelineEvents.map((evt, idx) => (
                <button
                  key={evt.year}
                  onClick={() => setActiveIndex(idx)}
                  className="relative z-10 flex flex-col items-center space-y-3 cursor-pointer shrink-0 px-4 focus:outline-none group"
                >
                  <span className={`text-xs sm:text-sm font-bold tracking-wide transition-all ${
                    idx === activeIndex ? "text-sp-red scale-110 font-black" : "text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400"
                  }`}>
                    {t(evt.year, evt.year === "Present" ? "वर्तमान" : evt.year)}
                  </span>
                  <div className={`w-3.5 h-3.5 rounded-full transition-all border-2 ${
                    idx === activeIndex
                      ? "bg-sp-red border-white ring-4 ring-sp-red/20 scale-125"
                      : "bg-slate-300 border-slate-100 dark:bg-slate-700 dark:border-slate-900 group-hover:bg-slate-400"
                  }`} />
                </button>
              ))}
            </div>

            {/* Two-Column Card Displaying Current Year Details */}
            <div className="max-w-5xl mx-auto glass-panel rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 animate-fadeIn">
              
              {/* Left Column: Image wrapper */}
              <div className="relative h-[250px] sm:h-[350px] md:h-auto w-full" style={{ position: "relative" }}>
                <Image
                  src={timelineEvents[activeIndex].image}
                  alt={t(timelineEvents[activeIndex].titleEn, timelineEvents[activeIndex].titleHi)}
                  fill
                  className="object-cover object-top"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
              </div>

              {/* Right Column: Text Information panel */}
              <div className="p-8 sm:p-12 bg-slate-50/70 dark:bg-slate-900/40 flex flex-col justify-center relative min-h-[300px]">
                
                {/* Saffron Year badge top right */}
                <div className="absolute top-0 right-0 bg-sp-red text-white font-bold text-sm sm:text-base px-6 py-2 shadow">
                  {t(timelineEvents[activeIndex].year, timelineEvents[activeIndex].year === "Present" ? "वर्तमान" : timelineEvents[activeIndex].year)}
                </div>

                <div className="space-y-4 pr-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-sp-red uppercase tracking-wide">
                    {t(timelineEvents[activeIndex].titleEn, timelineEvents[activeIndex].titleHi)}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {t(timelineEvents[activeIndex].descEn, timelineEvents[activeIndex].descHi)}
                  </p>
                  
                  <div className="pt-2">
                    <span className="text-xs font-bold text-sp-red hover:underline cursor-pointer">
                      {t("Read More...", "और पढ़ें...")}
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-white dark:bg-slate-950">
        
        {/* Banner */}
        <section className="relative py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sp-red">
              {t("Portraits & Events", "चित्र और कार्यक्रम")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white">
              {t("Official Gallery", "आधिकारिक दीर्घा (गैलरी)")}
            </h1>
            <div className="h-1 w-20 bg-sp-red mx-auto rounded-full" />
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              {t(
                "Visual records of public meetings, campaigns, social activities, and village visits.",
                "जनसभाओं, अभियानों, सामाजिक गतिविधियों और ग्राम दौरों के दृश्य रिकॉर्ड।"
              )}
            </p>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GallerySection />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

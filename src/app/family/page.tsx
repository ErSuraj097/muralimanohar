"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function FamilyPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-18 bg-white dark:bg-slate-950">
        {/* Banner */}
        <section className="relative py-20 overflow-hidden bg-slate-950 text-white border-b border-slate-800">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.png"
              alt="Family page background hero"
              fill
                className="opacity-30"
                priority
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" /> */}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sp-red flex items-center justify-start gap-2">
              <Users className="w-4 h-4" />
              {t("Family Background", "परिवार पृष्ठभूमि")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
              {t("Murli Manohar Jaiswal - Family Details", "मुरली मनोहर जायसवाल - परिवार विवरण")}
            </h1>
            <div className="h-1 w-20 bg-sp-red rounded-full" />
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              {t(
                "A structured overview of father, mother, and grandfather—highlighting the family’s legacy of public service.",
                "पिता, माता और दादा का संरचित विवरण—परिवार की जनसेवा की विरासत को रेखांकित करता है।"
              )}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left: Portrait */}
              <div className="lg:col-span-5">
                <div className="relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                  <Image
                    src="/images/image-copy-4.png"
                    alt="Family legacy portrait"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>

                <div className="mt-8 p-6 rounded-2xl border-l-4 border-l-sp-red bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                    {t("Legacy of Service", "सेवा की विरासत")}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {t(
                      "Inspired by the public service values carried forward within the family.",
                      "परिवार में आगे बढ़ती जनसेवा की परंपरागत मूल्य-धारा से प्रेरित।"
                    )}
                  </p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle className="w-4 h-4 text-sp-red" />
                      {t("Public Welfare", "लोक कल्याण")}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle className="w-4 h-4 text-sp-red" />
                      {t("Leadership", "नेतृत्व")}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle className="w-4 h-4 text-sp-red" />
                      {t("Grassroots Work", "जमीनी काम")}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle className="w-4 h-4 text-sp-red" />
                      {t("Community Service", "समुदाय सेवा")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Family details */}
              <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                  {t("The Jaiswal Family", "जायसवाल परिवार")}
                </h3>

                <div className="space-y-5">
                  <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                    <h4 className="text-lg font-serif font-bold text-sp-red">
                      {t("Father", "पिता")}
                    </h4>
                    <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                      {t("Late Shri Ram Prasad Jaiswal", "स्वर्गीय श्री राम प्रसाद जायसवाल")}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      {t("Former Member of the Uttar Pradesh Legislative Assembly", "उत्तर प्रदेश विधान सभा के पूर्व सदस्य")}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-sp-red">•</span>
                        <span>{t("MLA from Barhaj Assembly Constituency", "बरहज विधानसभा क्षेत्र से विधायक")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sp-red">•</span>
                        <span>{t("Served from 2007–2012", "2007–2012 तक सेवाकाल")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sp-red">•</span>
                        <span>
                          {t(
                            "Known for public service and developmental work in Barhaj.",
                            "बरहज में जनसेवा और विकास कार्यों के लिए पहचाने जाते थे।"
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                    <h4 className="text-lg font-serif font-bold text-sp-red">
                      {t("Mother", "माता")}
                    </h4>
                    <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                      {t("Smt. Renu Jaiswal", "सुश्री रेनु जायसवाल")}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      {t("Former Chairperson (Adhyaksha), Nagar Palika Parishad, Barhaj", "पूर्व अध्यक्ष (अध्यक्षा), नगर पालिका परिषद, बरहज")}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-sp-red">•</span>
                        <span>{t("Served from 2000–2005", "2000–2005 तक सेवाकाल")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sp-red">•</span>
                        <span>
                          {t(
                            "Contributed to urban civic development and public welfare.",
                            "शहरी नागरिक विकास और लोक कल्याण में योगदान।"
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                    <h4 className="text-lg font-serif font-bold text-sp-red">
                      {t("Grandfather", "दादा")}
                    </h4>
                    <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                      {t("Shri Gorakh Prasad Jaiswal", "श्री गोरख प्रसाद जायसवाल")}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      {t("Former Member of Parliament, Deoria Lok Sabha Constituency", "देवरिया लोकसभा क्षेत्र के पूर्व सांसद")}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-sp-red">•</span>
                        <span>
                          {t(
                            "His public life and leadership continue to inspire future generations.",
                            "उनका सार्वजनिक जीवन और नेतृत्व आने वाली पीढ़ियों को प्रेरित करता है।"
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6">
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(
                      "Note: This page presents biographical information based on the provided details file. For any public claims, verify from official/public sources.",
                      "नोट: यह पेज दिए गए विवरण फाइल के आधार पर जैविक/जीवनी संबंधी जानकारी प्रस्तुत करता है। सार्वजनिक दावों के लिए आधिकारिक/सार्वजनिक स्रोतों से सत्यापन करें।"
                    )}
                  </p>
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


"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-white dark:bg-slate-950">
        
        {/* Banner */}
        <section className="relative py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sp-red">
              {t("Biography", "जीवनी")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white">
              {t("About Murli Manohar Jaiswal", "मुरली मनोहर जायसवाल के बारे में")}
            </h1>
            <div className="h-1 w-20 bg-sp-red mx-auto rounded-full" />
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              {t(
                "A profile of political dedication, public welfare activities, and local representation.",
                "राजनीतिक समर्पण, जन कल्याणकारी गतिविधियों और क्षेत्रीय प्रतिनिधित्व की एक रूपरेखा।"
              )}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Portrait */}
              <div className="lg:col-span-5 relative" style={{ position: "relative" }}>
                <div className="relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800" style={{ position: "relative" }}>
                  <Image
                    src="/images/image-copy-4.png"
                    alt="Murli Manohar Jaiswal Portrait"
                    fill
                    className="object-cover object-center"
                    sizes="(max-w-768px) 100vw, 40vw"
                  />
                </div>
                
                {/* Family legacy brief info */}
                <div className="mt-8 glass-card p-6 rounded-2xl border-l-4 border-l-sp-red">
                  <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                    {t("Legacy of Service", "सेवा की विरासत")}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {t(
                      "Inspired by Grandfather Shri Gorakh Prasad Jaiswal (Former Member of Parliament) and Father Late Shri Ram Prasad Jaiswal (Former MLA of Barhaj Assembly).",
                      "दादा श्री गोरख प्रसाद जायसवाल (पूर्व सांसद) और पिता स्वर्गीय श्री राम प्रसाद जायसवाल (पूर्व विधायक, बरहज विधानसभा) के जनसेवा के आदर्शों से प्रेरित।"
                    )}
                  </p>
                </div>
              </div>

              {/* Right Column: Full Biography details */}
              <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300">
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                  {t("Leader of the Masses", "जन-जन के मार्गदर्शक")}
                </h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  {t(
                    "Murli Manohar Jaiswal belongs to a family with a long history of public service and political leadership in eastern Uttar Pradesh. Inspired by his family's commitment to serving society, he entered public life at a young age and has since dedicated himself to community development and political activism.",
                    "मुरली मनोहर जायसवाल पूर्वी उत्तर प्रदेश में जनसेवा और राजनीतिक नेतृत्व के एक लंबे इतिहास वाले सम्मानित परिवार से आते हैं। समाज की सेवा के प्रति अपने परिवार के समर्पण से प्रेरित होकर, वह छोटी उम्र में ही सार्वजनिक जीवन में आ गए और तब से सामुदायिक विकास और राजनीतिक गतिविधियों के लिए खुद को समर्पित कर दिया।"
                  )}
                </p>
                <p className="leading-relaxed text-sm sm:text-base">
                  {t(
                    "He believes in inclusive governance, transparent administration, youth participation, and strengthening democratic values. Through continuous interaction with the people of Barhaj, he works to understand local concerns and advocate for solutions that improve everyday life.",
                    "वह समावेशी शासन, पारदर्शी प्रशासन, युवा भागीदारी और लोकतांत्रिक मूल्यों को मजबूत करने में विश्वास करते हैं। बरहज के लोगों के साथ लगातार चौपालों और संवाद के माध्यम से, वह स्थानीय समस्याओं को समझने और उनका समाधान निकालने के लिए काम करते हैं।"
                  )}
                </p>
                <p className="leading-relaxed text-sm sm:text-base">
                  {t(
                    "Prior to entering active politics, Murli Manohar was involved in business and social work. His experience in both sectors has helped him understand the practical challenges faced by entrepreneurs, youth, farmers, traders, and ordinary citizens in Uttar Pradesh.",
                    "सक्रिय राजनीति में आने से पहले, मुरली मनोहर व्यवसाय और सामाजिक कार्यों में शामिल थे। दोनों क्षेत्रों में उनके अनुभवों ने उन्हें उत्तर प्रदेश में उद्यमियों, युवाओं, किसानों, व्यापारियों और आम नागरिकों के सामने आने वाली व्यावहारिक चुनौतियों को समझने में मदद की है।"
                  )}
                </p>

                {/* Core Philosophy list */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="font-serif font-bold text-lg text-slate-900 dark:text-white mb-4">
                    {t("Leadership Philosophy", "नेतृत्व दर्शन")}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-center space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-sp-red shrink-0" />
                      <span>{t("Politics with Integrity", "ईमानदारी के साथ राजनीति")}</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-sp-red shrink-0" />
                      <span>{t("Development with Transparency", "पारदर्शिता के साथ विकास")}</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-sp-red shrink-0" />
                      <span>{t("Governance with Accountability", "जवाबदेही के साथ शासन")}</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-sp-red shrink-0" />
                      <span>{t("Service before Politics", "राजनीति से पहले सेवा")}</span>
                    </li>
                  </ul>
                </div>

                {/* Personal Moto Block */}
                <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center italic">
                  <p className="text-lg font-serif font-bold text-sp-red">"इंसानियत • मानवता • समाज सेवा"</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {t(
                      "Humanity, Service, and Social Justice remain the guiding principles of public life.",
                      "इंसानियत, समाज सेवा और सामाजिक न्याय सार्वजनिक जीवन के मार्गदर्शक सिद्धांत हैं।"
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

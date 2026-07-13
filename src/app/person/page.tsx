"use client";

import React from "react";
import Image from "next/image";
import { 
  User, 
  BookOpen, 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle, 
  Compass, 
  Globe, 
  Calendar, 
  Award,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function PersonPage() {
  const { t } = useLanguage();

  const profileData = [
    { label: t("Full Name", "पूरा नाम"), value: t("Murli Manohar Jaiswal", "मुरली मनोहर जायसवाल") },
    { label: t("Nickname", "उपनाम"), value: t("Solu", "सोलू") },
    { label: t("Political Party", "राजनीतिक दल"), value: t("Samajwadi Party (SP)", "समाजवादी पार्टी (सपा)") },
    { label: t("Profession", "पेशा"), value: t("Politician, Businessman & Social Worker", "राजनेता, व्यवसायी और समाज सेवक") },
    { label: t("Constituency", "विधानसभा क्षेत्र"), value: t("342 - Barhaj Assembly Constituency", "342 - बरहज विधानसभा क्षेत्र") },
    { label: t("District", "जिला"), value: t("Deoria", "देवरिया") },
    { label: t("State", "राज्य"), value: t("Uttar Pradesh", "उत्तर प्रदेश") },
    { label: t("Nationality", "राष्ट्रीयता"), value: t("Indian", "भारतीय") },
    { label: t("Education", "शिक्षा"), value: t("Bachelor of Journalism & Mass Communication (BJMC)", "पत्रकारिता और जनसंचार में स्नातक (बीजेएमसी)") },
    { label: t("Languages", "भाषाएं"), value: t("Hindi, English", "हिंदी, अंग्रेजी") },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-18 bg-white dark:bg-slate-950">
        
        {/* Banner Section */}
        <section className="relative py-32 overflow-hidden bg-slate-950 text-white border-b border-slate-800">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.png"
              alt="Person page background hero"
              fill
              className=" opacity-10"
              priority
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" /> */}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sp-red flex items-center justify-start gap-2">
              <User className="w-4 h-4" />
              {t("Personal Details", "व्यक्तिगत विवरण")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
              {t("Murli Manohar Jaiswal - Profile", "मुरली मनोहर जायसवाल - प्रोफाइल")}
            </h1>
            <div className="h-1 w-20 bg-sp-red rounded-full" />
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              {t(
                "A comprehensive overview of life, education, political journey, and contact information.",
                "जीवन, शिक्षा, राजनीतिक यात्रा और संपर्क विवरण का एक व्यापक अवलोकन।"
              )}
            </p>
          </div>
        </section>

        {/* Profile Card and Quick Info Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Portrait & Quick Profile Table */}
              <div className="lg:col-span-5 space-y-8">
                <div className="relative w-full h-[380px] sm:h-[485px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                  <Image
                    src="/images/hero-2.png"
                    alt="Murli Manohar Jaiswal Profile"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>

                {/* Quick Profile Table */}
                <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-sp-red" />
                    {t("Quick Profile", "संक्षिप्त प्रोफाइल")}
                  </h3>
                  <div className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
                    {profileData.map((item, idx) => (
                      <div key={idx} className="py-3 flex justify-between gap-4">
                        <span className="font-semibold text-slate-500 dark:text-slate-400">{item.label}</span>
                        <span className="text-right font-medium text-slate-900 dark:text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Sections */}
              <div className="lg:col-span-7 space-y-10 text-slate-700 dark:text-slate-300">
                
                {/* About Section */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <User className="w-6 h-6 text-sp-red" />
                    {t("About Murli Manohar Jaiswal", "मुरली मनोहर जायसवाल के बारे में")}
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base">
                    {t(
                      "Murli Manohar Jaiswal belongs to a family with a long history of public service and political leadership in eastern Uttar Pradesh. Inspired by his family's commitment to serving society, he entered public life at a young age and has since dedicated himself to community development and political activism.",
                      "मुरली मनोहर जायसवाल पूर्वी उत्तर प्रदेश में जनसेवा और राजनीतिक नेतृत्व के एक लंबे इतिहास वाले परिवार से आते हैं। समाज की सेवा के प्रति अपने परिवार के समर्पण से प्रेरित होकर, उन्होंने कम उम्र में ही सार्वजनिक जीवन में कदम रखा और तब से वे खुद को सामुदायिक विकास और राजनीतिक सक्रियता के लिए समर्पित कर चुके हैं।"
                    )}
                  </p>
                  <p className="leading-relaxed text-sm sm:text-base">
                    {t(
                      "He believes in inclusive governance, transparent administration, youth participation, and strengthening democratic values. Through continuous interaction with the people of Barhaj, he works to understand local concerns and advocate for solutions that improve everyday life.",
                      "वह समावेशी शासन, पारदर्शी प्रशासन, युवा भागीदारी और लोकतांत्रिक मूल्यों को मजबूत करने में विश्वास रखते हैं। बरहज के लोगों के साथ निरंतर बातचीत के माध्यम से, वह स्थानीय चिंताओं को समझने और दैनिक जीवन को बेहतर बनाने वाले समाधानों की वकालत करने के लिए काम करते हैं।"
                    )}
                  </p>
                </div>

                {/* Early Life & Education */}
                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-sp-red" />
                    {t("Early Life & Education", "प्रारंभिक जीवन और शिक्षा")}
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base">
                    {t(
                      "Murli Manohar Jaiswal completed his schooling at BRCM Public School, Bahal before pursuing higher secondary education in Commerce at GRD Academy, Dehradun.",
                      "मुरली मनोहर जायसवाल ने देहरादून के जीआरडी एकेडमी से वाणिज्य (कॉमर्स) में उच्च माध्यमिक शिक्षा प्राप्त करने से पहले बीआरसीएम पब्लिक स्कूल, बहल से अपनी स्कूली शिक्षा पूरी की।"
                    )}
                  </p>
                  <p className="leading-relaxed text-sm sm:text-base">
                    {t(
                      "He later earned a Bachelor of Journalism and Mass Communication (BJMC) from Amity University, Uttar Pradesh. His educational background in communication has contributed to his ability to engage effectively with citizens and public institutions.",
                      "बाद में उन्होंने एमिटी यूनिवर्सिटी, उत्तर प्रदेश से पत्रकारिता और जनसंचार में स्नातक (बीजेएमसी) की डिग्री हासिल की। संचार में उनकी शैक्षणिक पृष्ठभूमि ने नागरिकों और सार्वजनिक संस्थानों के साथ प्रभावी ढंग से जुड़ने की उनकी क्षमता में महत्वपूर्ण योगदान दिया है।"
                    )}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                      <span className="text-sp-red font-bold text-xs uppercase block mb-1">{t("BJMC Degree", "बीजेएमसी डिग्री")}</span>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">{t("Amity University", "एमिटी यूनिवर्सिटी")}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                      <span className="text-sp-red font-bold text-xs uppercase block mb-1">{t("Intermediate", "इंटरमीडिएट")}</span>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">{t("GRD Academy, Dehradun", "जीआरडी एकेडमी, देहरादून")}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                      <span className="text-sp-red font-bold text-xs uppercase block mb-1">{t("School Education", "स्कूली शिक्षा")}</span>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">{t("BRCM Public School", "बीआरसीएम पब्लिक स्कूल")}</p>
                    </div>
                  </div>
                </div>

                {/* Political Journey */}
                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Compass className="w-6 h-6 text-sp-red" />
                    {t("Political Journey", "राजनीतिक यात्रा")}
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base">
                    {t(
                      "Murli Manohar Jaiswal has been associated with the Samajwadi Party for many years and has actively participated in organizational activities, public outreach, and constituency-level development initiatives.",
                      "मुरली मनोहर जायसवाल कई वर्षों से समाजवादी पार्टी से जुड़े हुए हैं और उन्होंने संगठनात्मक गतिविधियों, जनसंपर्क और निर्वाचन क्षेत्र स्तर की विकास पहलों में सक्रिय रूप से भाग लिया है।"
                    )}
                  </p>
                  <p className="leading-relaxed text-sm sm:text-base">
                    {t(
                      "He contested the 2022 Uttar Pradesh Legislative Assembly Election from the Barhaj Assembly Constituency as the Samajwadi Party candidate, representing the party's vision of social justice, equality, and inclusive development.",
                      "उन्होंने बरहज विधानसभा क्षेत्र से समाजवादी पार्टी के उम्मीदवार के रूप में 2022 का उत्तर प्रदेश विधानसभा चुनाव लड़ा, जिसमें उन्होंने पार्टी के सामाजिक न्याय, समानता और समावेशी विकास के दृष्टिकोण का प्रतिनिधित्व किया।"
                    )}
                  </p>

                  <div className="mt-4">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">{t("Key Political Activities:", "प्रमुख राजनीतिक गतिविधियां:")}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      {[
                        t("Grassroots public engagement", "जमीनी स्तर पर जनसंपर्क"),
                        t("Youth mobilization", "युवा लामबंदी और संगठन"),
                        t("Community welfare initiatives", "सामुदायिक कल्याण पहल"),
                        t("Public grievance redressal", "जन समस्याओं का निवारण"),
                        t("Development campaigns", "विकास अभियान"),
                        t("Social awareness programs", "सामाजिक जागरूकता कार्यक्रम"),
                        t("Election campaign participation", "चुनाव अभियानों में भागीदारी"),
                        t("Constituency development activities", "निर्वाचन क्षेत्र विकास गतिविधियां")
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-sp-red shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Political Vision & Focus Areas */}
                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Globe className="w-6 h-6 text-sp-red" />
                    {t("Political Vision & Core Focus", "राजनीतिक दृष्टिकोण और मुख्य फोकस")}
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base">
                    {t(
                      "Murli Manohar Jaiswal believes that development should reach every section of society. His priorities and core areas of focus include:",
                      "मुरली मनोहर जायसवाल का मानना है कि विकास समाज के हर वर्ग तक पहुंचना चाहिए। उनकी प्राथमिकताएं और मुख्य फोकस क्षेत्र निम्नलिखित हैं:"
                    )}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                    {[
                      t("Education", "शिक्षा"),
                      t("Healthcare", "स्वास्थ्य सेवा"),
                      t("Employment Generation", "रोजगार सृजन"),
                      t("Youth Empowerment", "युवा सशक्तिकरण"),
                      t("Women's Welfare", "महिला कल्याण"),
                      t("Rural Development", "ग्रामीण विकास"),
                      t("Farmer Welfare", "किसान कल्याण"),
                      t("Digital Governance", "डिजिटल शासन"),
                      t("Infrastructure", "बुनियादी ढांचा"),
                      t("Social Justice", "सामाजिक न्याय"),
                      t("Transparent Administration", "पारदर्शी प्रशासन"),
                      t("Environmental Awareness", "पर्यावरण जागरूकता")
                    ].map((item, idx) => (
                      <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-sp-red" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional & Leadership Philosophy */}
                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-sp-red" />
                    {t("Professional Background & Philosophy", "व्यावसायिक पृष्ठभूमि और सिद्धांत")}
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base">
                    {t(
                      "Before entering active politics, Murli Manohar Jaiswal was involved in business and social work. His experience in both sectors has helped him understand the practical challenges faced by entrepreneurs, youth, farmers, traders, and ordinary citizens.",
                      "सक्रिय राजनीति में आने से पहले, मुरली मनोहर जायसवाल व्यवसाय और सामाजिक कार्यों में शामिल थे। दोनों क्षेत्रों में उनके अनुभव ने उन्हें उद्यमियों, युवाओं, किसानों, व्यापारियों और आम नागरिकों के सामने आने वाली व्यावहारिक चुनौतियों को समझने में मदद की है।"
                    )}
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 mt-4">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">{t("Leadership Philosophy:", "नेतृत्व सिद्धांत:")}</h4>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sp-red mt-0.5 shrink-0" />
                        <span>{t("Politics with integrity, transparency, and accountability.", "सत्यनिष्ठा, पारदर्शिता और जवाबदेही के साथ राजनीति।")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sp-red mt-0.5 shrink-0" />
                        <span>{t("Service before politics, offering equal opportunities for all.", "राजनीति से पहले जनसेवा, सभी के लिए समान अवसर प्रदान करना।")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sp-red mt-0.5 shrink-0" />
                        <span>{t("Encouraging active youth participation in democratic processes.", "लोकतांत्रिक प्रक्रियाओं में युवाओं की सक्रिय भागीदारी को प्रोत्साहित करना।")}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Personal Motto */}
                <div className="p-6 bg-sp-red/5 dark:bg-sp-red/10 rounded-3xl border border-sp-red/10 text-center italic space-y-2">
                  <p className="text-xl sm:text-2xl font-serif font-bold text-sp-red">"इंसानियत • मानवता • समाज सेवा"</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {t(
                      "\"Humanity, Service, and Social Justice remain the guiding principles of public life.\"",
                      "\"इंसानियत, समाज सेवा और सामाजिक न्याय सार्वजनिक जीवन के मार्गदर्शक सिद्धांत हैं।\""
                    )}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-sp-red" />
                    {t("Contact & Office Information", "संपर्क और कार्यालय विवरण")}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-sp-red shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">{t("Office Address", "कार्यालय का पता")}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Civil Lines, Deoria Khas, Uttar Pradesh – 274001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-sp-red shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">{t("Phone Number", "फोन नंबर")}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">+91 89530 80289</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-sp-red shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">{t("Email Address", "ईमेल पता")}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">murlimanoharjaiswal@hotmail.com</p>
                      </div>
                    </div>
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

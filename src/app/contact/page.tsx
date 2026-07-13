"use client";

import React, { useState } from "react";
import { Building, Phone, Mail, Instagram, Youtube, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setContactForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-white dark:bg-slate-950">
        
        {/* Banner */}
        <section className="relative py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sp-red">
              {t("Reach Out", "संपर्क करें")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white">
              {t("Contact Us", "हमसे संपर्क करें")}
            </h1>
            <div className="h-1 w-20 bg-sp-red mx-auto rounded-full" />
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              {t(
                "Get in touch with the office of Murli Manohar Jaiswal in Deoria or send direct feedback.",
                "देवरिया में मुरली मनोहर जायसवाल के कार्यालय से संपर्क करें या सीधे अपनी प्रतिक्रिया भेजें।"
              )}
            </p>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Details Column */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                    {t("Office of Murli Manohar Jaiswal", "मुरली मनोहर जायसवाल का कार्यालय")}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2">
                    {t("Open for public grievance meetings and regional coordinates.", "जनता की शिकायतों की सुनवाई और क्षेत्रीय समन्वय के लिए खुला।")}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-sp-red/10 rounded-xl text-sp-red shrink-0">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{t("Office Address", "कार्यालय का पता")}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        {t(
                          "Civil Lines, Deoria Khas, Deoria, Uttar Pradesh – 274001",
                          "सिविल लाइंस, देवरिया खास, देवरिया, उत्तर प्रदेश – 274001"
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-sp-red/10 rounded-xl text-sp-red shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{t("Phone Number", "दूरभाष संख्या")}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        +91 89530 80289
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-sp-red/10 rounded-xl text-sp-red shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{t("Official Email", "आधिकारिक ईमेल")}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        murlimanoharjaiswal@hotmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social media connections */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">{t("Social Channels", "सामाजिक नेटवर्क")}</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/murlimanoharjaiswal1216"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-sp-red hover:text-white transition-all duration-300"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://youtube.com/@murlimanoharjaiswal1216"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-sp-red hover:text-white transition-all duration-300 flex items-center justify-center"
                      aria-label="YouTube Channel"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    <a
                      href="https://x.com/MMJAISWAL1216"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-sp-red hover:text-white transition-all duration-300 flex items-center justify-center"
                      aria-label="X Profile"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Contact Form Column */}
              <div className="lg:col-span-7">
                <div className="glass-panel p-8 sm:p-10 rounded-[2rem] shadow-xl border border-white/20">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                    {t("Send a Message", "संदेश भेजें")}
                  </h3>
                  
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        {t("Your Name", "आपका नाम")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder={t("Shyam Yadav", "श्याम यादव")}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:border-sp-red focus:ring-1 focus:ring-sp-red outline-none transition-all duration-200 text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                          {t("Email Address", "ईमेल पता")}
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="example@mail.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:border-sp-red focus:ring-1 focus:ring-sp-red outline-none transition-all duration-200 text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                          {t("Phone Number", "फ़ोन नंबर")}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:border-sp-red focus:ring-1 focus:ring-sp-red outline-none transition-all duration-200 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        {t("Message Detail", "संदेश विवरण")}
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder={t("Write details of query or issue here...", "अपनी समस्या या प्रश्न यहाँ लिखें...")}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:border-sp-red focus:ring-1 focus:ring-sp-red outline-none transition-all duration-200 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-sp-red hover:bg-sp-red-hover disabled:bg-slate-400 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md shadow-sp-red/10 cursor-pointer"
                    >
                      {isSubmitting ? t("Submitting...", "भेजा जा रहा है...") : t("Send Message", "संदेश भेजें")}
                    </button>

                    {submitSuccess && (
                      <div className="p-4 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20 text-center text-xs font-bold">
                        {t(
                          "Message sent successfully! The office will respond to you shortly.",
                          "संदेश सफलतापूर्वक भेजा गया! कार्यालय जल्द ही आपसे संपर्क करेगा।"
                        )}
                      </div>
                    )}
                  </form>
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

"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Initialize theme
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Monitor scroll for header background & progress indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("Home", "होम"), href: "/" },
    { name: t("About", "जीवनी"), href: "/about" },
    { name: t("Timeline", "समयरेखा"), href: "/timeline" },
    { name: t("Press", "प्रेस"), href: "/press" },
    { name: t("My View", "विचार"), href: "/myview" },
    { name: t("Gallery", "गैलरी"), href: "/gallery" },
    { name: t("Contact", "संपर्क"), href: "/contact" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 bg-sp-red shadow-md py-3 text-white transition-all duration-300"
      >
        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-0 left-0 h-[3px] bg-white transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <a href="/" className="flex items-center space-x-2">
              <img src="/images/cycle.png" alt="Cycle" className="w-12 h-12 object-contain filter invert" /> 
              
              <span className="font-serif text-lg sm:text-2xl font-black tracking-wide text-white flex items-center">
                MURLI MANOHAR <span className="text-slate-100 ml-1">JAISWAL</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-white hover:underline transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider border border-white/40 rounded-md hover:bg-white hover:text-sp-red transition-all duration-200 cursor-pointer"
              >
                {language === "en" ? "हिन्दी" : "EN"}
              </button>

              {/* Theme Switcher Button */}
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors duration-200 w-8 h-8 flex items-center justify-center cursor-pointer text-white"
                aria-label="Toggle Theme"
              >
                {mounted ? (
                  isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-white" />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-white/20 animate-pulse" />
                )}
              </button>
            </nav>

            {/* Mobile Menu & Theme Button Container */}
            <div className="flex items-center space-x-3 md:hidden">
              {/* Language Switcher (Mobile) */}
              <button
                onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border border-white/40 rounded-md hover:bg-white hover:text-sp-red transition-all duration-200 cursor-pointer"
              >
                {language === "en" ? "हिन्दी" : "EN"}
              </button>

              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors duration-200 w-8 h-8 flex items-center justify-center cursor-pointer text-white"
                aria-label="Toggle Theme"
              >
                {mounted ? (
                  isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-white" />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-white/20 animate-pulse" />
                )}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 rounded-md hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                aria-label="Toggle Mobile Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-sp-red border-t border-white/10 absolute top-full left-0 right-0 py-4 shadow-lg animate-fadeIn text-white">
            <nav className="flex flex-col space-y-4 px-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold hover:underline transition-colors duration-200 py-1"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

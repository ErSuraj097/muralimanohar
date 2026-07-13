"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryItem {
  id: number;
  src: string;
  categoryEn: string;
  categoryHi: string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "/images/image-copy-3.png",
    categoryEn: "Campaign",
    categoryHi: "चुनाव प्रचार",
    titleEn: "Election Campaigning",
    titleHi: "विधानसभा चुनाव प्रचार",
    descriptionEn: "Interacting with citizens of Barhaj Constituency during the assembly campaign.",
    descriptionHi: "विधानसभा चुनाव अभियान के दौरान बरहज क्षेत्र के नागरिकों से सीधा संवाद करते हुए।",
  },
  {
    id: 2,
    src: "/images/image-copy-4.png",
    categoryEn: "Political Meetings",
    categoryHi: "राजनीतिक बैठकें",
    titleEn: "Samajwadi Party Workers Meet",
    titleHi: "समाजवादी पार्टी कार्यकर्ता बैठक",
    descriptionEn: "Discussing organization and regional developments with local workers in Deoria.",
    descriptionHi: "देवरिया में स्थानीय कार्यकर्ताओं के साथ संगठन और क्षेत्रीय विकास पर चर्चा करते हुए।",
  },
  {
    id: 3,
    src: "/images/image-copy-2.png",
    categoryEn: "Public Gatherings",
    categoryHi: "सार्वजनिक सभाएं",
    titleEn: "Barhaj Public Address",
    titleHi: "बरहज जनसभा को संबोधन",
    descriptionEn: "Addressing a local rally focusing on youth issues, jobs, and social justice.",
    descriptionHi: "युवा मुद्दों, नौकरियों और सामाजिक न्याय पर ध्यान केंद्रित करते हुए स्थानीय रैली को संबोधित करते हुए।",
  },
  {
    id: 4,
    src: "/images/image-copy.png",
    categoryEn: "Social Activities",
    categoryHi: "सामाजिक गतिविधियां",
    titleEn: "Community Relief Distribution",
    titleHi: "सामुदायिक राहत सामग्री वितरण",
    descriptionEn: "Aiding families and coordinating support during public welfare programs.",
    descriptionHi: "सार्वजनिक कल्याण कार्यक्रमों के दौरान परिवारों की सहायता और राहत सामग्री का समन्वय करते हुए।",
  },
  {
    id: 5,
    src: "/images/image.png",
    categoryEn: "Youth Programs",
    categoryHi: "युवा कार्यक्रम",
    titleEn: "Sports Promotion Meetup",
    titleHi: "खेलकूद प्रोत्साहन सभा",
    descriptionEn: "Encouraging rural athletes and distributing equipment to youth clubs.",
    descriptionHi: "ग्रामीण खिलाड़ियों को प्रोत्साहित करते हुए और युवा क्लबों को खेल सामग्री वितरित करते हुए।",
  },
];

export default function GallerySection() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { en: "All", hi: "सभी" },
    { en: "Political Meetings", hi: "बैठकें" },
    { en: "Public Gatherings", hi: "जनसभाएं" },
    { en: "Social Activities", hi: "सामाजिक कार्य" },
    { en: "Campaign", hi: "चुनाव प्रचार" },
    { en: "Youth Programs", hi: "युवा कार्यक्रम" }
  ];

  const filteredItems = activeCategory === "All"
    ? galleryData
    : galleryData.filter(item => item.categoryEn === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="w-full">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category.en}
            onClick={() => setActiveCategory(category.en)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === category.en
                ? "bg-sp-red text-white shadow-md shadow-sp-red/30"
                : "glass-card hover:bg-sp-red hover:text-white"
            }`}
          >
            {t(category.en, category.hi)}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer"
          >
            <div className="overflow-hidden bg-slate-100 dark:bg-slate-900">
              <Image
                src={item.src}
                alt={t(item.titleEn, item.titleHi)}
                width={600}
                height={450}
                className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-105"
                priority={index < 3}
              />
            </div>
            
            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-flag-saffron mb-1">
                {t(item.categoryEn, item.categoryHi)}
              </span>
              <h4 className="text-white font-serif text-lg font-bold flex items-center justify-between">
                {t(item.titleEn, item.titleHi)}
                <Maximize2 className="w-4 h-4 text-slate-300" />
              </h4>
              <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                {t(item.descriptionEn, item.descriptionHi)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900/80 hover:bg-sp-red text-white transition-all duration-300"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-sp-red text-white transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center"
          >
            <div className="w-full rounded-xl overflow-hidden bg-slate-900 shadow-2xl">
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={t(filteredItems[lightboxIndex].titleEn, filteredItems[lightboxIndex].titleHi)}
                width={1200}
                height={900}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            
            {/* Image details */}
            <div className="w-full text-center mt-6 max-w-2xl">
              <span className="text-[10px] uppercase font-bold tracking-widest text-flag-saffron">
                {t(filteredItems[lightboxIndex].categoryEn, filteredItems[lightboxIndex].categoryHi)}
              </span>
              <h3 className="text-white font-serif text-xl font-bold mt-1">
                {t(filteredItems[lightboxIndex].titleEn, filteredItems[lightboxIndex].titleHi)}
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                {t(filteredItems[lightboxIndex].descriptionEn, filteredItems[lightboxIndex].descriptionHi)}
              </p>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-sp-red text-white transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Murli Manohar Jaiswal (Solu Ji) is always accessible to us. Whenever there is an issue in Barhaj, he is the first leader to stand with the common people and guide them.",
    author: "Rajesh Kumar",
    role: "Local Citizen, Barhaj",
  },
  {
    quote: "His dedication to building youth programs, sports initiatives, and local education centers has given the youth of Deoria a new direction and hope for the future.",
    author: "Amit Yadav",
    role: "Youth Coordinator, Samajwadi Party",
  },
  {
    quote: "A leader who carries forward his family's rich legacy of public service with absolute humility, honesty, and transparency. He is truly a statesman of our times.",
    author: "Shyam Sundar Mishra",
    role: "Community Leader, Deoria Khas",
  },
  {
    quote: "During the health camps and flood relief drives, his hands-on management and social worker spirit saved lives and provided immediate aid. Respect for Solu Bhaiya!",
    author: "Savitri Devi",
    role: "Social Activist",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-sp-red/10 rounded-full">
          <Quote className="w-8 h-8 text-sp-red animate-pulse-slow" />
        </div>
      </div>

      {/* Slide Content */}
      <div className="overflow-hidden relative h-[250px] sm:h-[180px] flex items-center justify-center">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`absolute transition-all duration-700 ease-in-out flex flex-col items-center text-center max-w-2xl px-6 ${
              idx === currentIndex
                ? "opacity-100 translate-x-0 scale-100 z-10"
                : idx < currentIndex
                ? "opacity-0 -translate-x-full scale-95 z-0"
                : "opacity-0 translate-x-full scale-95 z-0"
            }`}
          >
            <p className="font-sans text-base sm:text-lg italic text-slate-700 dark:text-slate-300 leading-relaxed">
              "{testimonial.quote}"
            </p>
            <h4 className="mt-6 font-serif text-lg font-bold text-sp-red">
              {testimonial.author}
            </h4>
            <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {testimonial.role}
            </span>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 sm:-left-12 -translate-y-1/2 p-2 rounded-full glass-card hover:bg-sp-red hover:text-white transition-all duration-300"
        aria-label="Previous Testimonial"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 sm:-right-12 -translate-y-1/2 p-2 rounded-full glass-card hover:bg-sp-red hover:text-white transition-all duration-300"
        aria-label="Next Testimonial"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-sp-red w-6" : "bg-slate-300 dark:bg-slate-700"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

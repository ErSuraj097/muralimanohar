"use client";

import React from "react";

export default function WavingRibbon() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
      <svg
        className="absolute w-[200%] h-[300px] -top-10 left-[-50%] animate-wave"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,176C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#ribbon-grad)"
        />
        <defs>
          <linearGradient id="ribbon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E31E24" />
            <stop offset="50%" stopColor="#ff4d52" />
            <stop offset="100%" stopColor="#8d0d11" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute w-[200%] h-[400px] top-[10%] left-[-20%] animate-wave"
        style={{ animationDelay: "-3s", animationDuration: "12s" }}
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          fill="url(#ribbon-grad-2)"
        />
        <defs>
          <linearGradient id="ribbon-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E31E24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C21419" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

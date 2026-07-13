"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-sp-red border-t-flag-saffron border-r-transparent border-b-flag-green"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
              <img src="/images/profile.png" alt="Murli Manohar Jaiswal" className="w-[86px] h-[86px] rounded-full object-cover relative z-10" />
            </div>

            {/* Title / Name */}
            <motion.h1
              className="mt-8 text-3xl font-bold font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-flag-saffron via-white to-flag-green"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              MURLI MANOHAR JAISWAL
            </motion.h1>

            {/* Political Tagline */}
            <motion.p
              className="mt-2 text-sm uppercase tracking-widest text-slate-400 font-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Politician • Social Worker • Youth Leader
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-1 bg-slate-800 rounded-full mt-6 overflow-hidden">
              <motion.div
                className="h-full bg-sp-red"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

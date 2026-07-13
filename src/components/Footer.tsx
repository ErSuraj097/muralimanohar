"use client";

import React from "react";
import { Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Murli Manohar Jaiswal
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Politician | Social Worker | Samajwadi Party candidate dedicated to public welfare and infrastructure growth in Barhaj & Deoria.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/murlimanoharjaiswal1216" target="_blank" rel="noopener noreferrer" className="hover:text-sp-red transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@murlimanoharjaiswal1216" target="_blank" rel="noopener noreferrer" className="hover:text-sp-red transition-colors flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://x.com/MMJAISWAL1216" target="_blank" rel="noopener noreferrer" className="hover:text-sp-red transition-colors flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/person" className="hover:text-white transition-colors">Profile Details</a></li>
              <li><a href="/family" className="hover:text-white transition-colors">Family Legacy</a></li>
              <li><a href="/timeline" className="hover:text-white transition-colors">Timeline</a></li>
              <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: More links */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white">Media & Contact</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/press" className="hover:text-white transition-colors">Press Updates</a></li>
              <li><a href="/myview" className="hover:text-white transition-colors">My Views</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Office</a></li>
            </ul>
          </div>

          {/* Column 4: Contact quick summary */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white">Central Office</h4>
            <p className="text-xs text-slate-500">
              Civil Lines, Deoria Khas, Uttar Pradesh – 274001
            </p>
            <p className="text-xs font-bold text-slate-300">
              +91 89530 80289
            </p>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600">
          <p>© 2026 Murli Manohar Jaiswal. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Designed & Developed for Samajwadi Party.</p>
        </div>
      </div>
    </footer>
  );
}

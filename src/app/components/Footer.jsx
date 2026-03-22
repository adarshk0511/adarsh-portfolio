"use client";

import React from "react";

import LinkedInIcon  from '@/app/components/icons/LinkedInIcon';
import MailIcon from "@/app/components/icons/MailIcon";
import GithubIcon from "@/app/components/icons/GithubIcon";


const ExternalIcon = ({ children }) => (
  <a className="hover:opacity-100 opacity-70 transition cursor-pointer">
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="relative px-8 pt-24 pb-10 text-gray-300 overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] 
bg-gradient-to-r from-orange-500 via-purple-600 to-blue-500 
opacity-25 blur-[120px] animate-pulse" />

      <div className="relative max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="flex justify-between items-start">

          {/* LEFT */}
          <div>
            {/* Logo */}
            <div className="text-6xl font-bold text-gray-200 flex items-center gap-2">
              h
              <span className="text-pink-400 text-xl">✦</span>
            </div>

            {/* Text */}
            <p className="mt-6 text-lg text-gray-400 max-w-l">
              Found anything interesting? Or just want to say hi? Shoot me a DM! 🚀
            </p>

            {/* Socials */}
            <div className="flex gap-6 mt-3 text-2xl">

               <a
                href="mailto:your@email.com"
                className="inline-flex items-center justify-center 
                           w-9 h-9 rounded-full
                           text-white/70 hover:text-white
                           transition hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 hover:scale-110"  
              >
                <MailIcon className="w-9 h-9 hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center 
                           w-9 h-9 rounded-full
                           text-white/70 hover:text-white
                           transition hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 hover:scale-110"
              >
                <LinkedInIcon className="w-7 h-7 hover:scale-110" />
              </a> 
                <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center 
                           w-9 h-9 rounded-full
                           text-white/70 hover:text-white
                           transition hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 hover:scale-110"
              >
                <GithubIcon className="w-8 h-8 hover:scale-110" />
              </a>

            </div>
          </div>

          {/* RIGHT NAV */}
          <div className="text-right  space-y-4 text-lg mt-[3%]">
            <p className="hover:text-white hover:translate-x-1 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 cursor-pointer">Explore Work</p>
            <p className="hover:text-white hover:translate-x-1 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 cursor-pointer">About Me</p>
            <p className="hover:text-white hover:translate-x-1 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 cursor-pointer">Download CV</p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-6 mt-8" />

        {/* BOTTOM SECTION */}
        <div className="flex justify-between items-center text-sm text-gray-400">

          {/* LEFT */}
          <div className="space-y-3 max-w-[462px]">
            <p>
              &quot;Hope is the belief in the probability of the possible rather than the necessity of the probable. ✨&quot; — Anonymous
            </p>

            <p className="flex items-center gap-2">
              <span className="text-pink-400">📍</span>
              Bangalore, 02:02 PM IST (GMT+5:30)
            </p>
          </div>

          {/* RIGHT */}
          <div>
            v1.0.0 | Vibe Coded with <span className="animate-pulse">❤️</span> in  <img src="/images/vscode.png" alt="VSCode" className="inline w-4 h-4" />
          </div>

        </div>

      </div>
    </footer>
  );
}
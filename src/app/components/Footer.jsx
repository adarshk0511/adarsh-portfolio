"use client";

import React from "react";

import LinkedInIcon  from '@/app/components/icons/LinkedInIcon';
import MailIcon from "@/app/components/icons/MailIcon";
import GithubIcon from "@/app/components/icons/GithubIcon";
import LiveClock from "./LiveClock";


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
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* LEFT */}
          <div>
            {/* Logo */}
            <div className="text-6xl font-bold text-gray-200 flex items-center gap-2">
              {/* h
              <span className="text-pink-400 text-xl">✦</span> */}
              <img src="/images/ak.png" alt="Logo" className="w-22 h-22" />
            </div>

            {/* Text */}
            <p className="mt-6 text-lg text-gray-400 max-w-l">
              Found anything interesting? Or just want to say hi? Shoot me a DM! 🚀
            </p>

            {/* Socials */}
            <div className="flex gap-6 mt-3 text-2xl">

               <a
                href="mailto:adarshpoojary375@gmail.com"
                className="inline-flex items-center justify-center 
                           w-9 h-9 rounded-full
                           text-white/70 hover:text-white
                           transition hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 hover:scale-110"  
              >
                <MailIcon className="w-9 h-9 hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/in/adarsh-k-poojary-80a4b9243/"
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
                href="https://github.com/adarshk0511"
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
          <div className="flex flex-col 
  items-start md:items-end 
  text-left md:text-right md:mt-[60px] 
  space-y-4 text-lg">
            <p className="hover:text-white hover:translate-x-1 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 cursor-pointer">Explore Work</p>
            <p className="hover:text-white hover:translate-x-1 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 cursor-pointer">About Me</p>
            <a href="https://drive.google.com/file/d/1p3ZIbcb8B5SuNhwFrTzNG-09HV9O26FO/view?usp=drive_link" className="hover:text-white hover:translate-x-1 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 cursor-pointer">Download CV</a>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-6 mt-8" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row 
  gap-6 md:justify-between md:items-center 
  text-sm text-gray-400">

          {/* LEFT */}
          <div className="space-y-3 max-w-[462px]">
            <p>
              &quot;Hope is the belief in the probability of the possible rather than the necessity of the probable. ✨&quot; — Anonymous
            </p>

            <p className="flex items-center gap-2">
              <LiveClock />
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

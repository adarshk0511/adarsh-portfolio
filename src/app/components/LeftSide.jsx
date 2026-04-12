"use client";
import React from 'react'

import { Pacifico, Lobster_Two, Inter } from "next/font/google";
const lobsters_two = Lobster_Two({
  subsets: ["latin"],
  weight: "400",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const LeftSide = () => {
  return (
   <div className="space-y-10 text-white">

  {/* HEADING */}
  <h1 className="
    text-4xl sm:text-5xl md:text-6xl 
    font-semibold leading-tight
  ">
    Full Stack 
    <span className="text-gray-400"> Developer</span>
    <span className="inline-block w-2 h-8 md:w-4 md:h-12 bg-cyan-400 animate-pulse ml-2"></span>
  </h1>

  {/* INTRO */}
  <div className="
    flex items-center gap-3 
    justify-center md:justify-start
    flex-wrap lg:mt-20
  ">
    <h4 className={`${lobsters_two.className} text-2xl md:text-3xl text-white/80`}>
      Hi, Im Adarsh.
    </h4>

    <img
      src="/images/me5.jpg"
      className="
        w-12 h-12 md:w-14 md:h-14 
        rounded-full 
        drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
      "
    />
  </div>

  {/* DESCRIPTION */}
  <p className="
    text-white/70 
    text-base md:text-lg 
    max-w-md md:max-w-xl
    leading-relaxed
  ">
    I build scalable web applications with modern frontend and backend 
    technologies. Passionate about performance, clean architecture, and 
    creating meaningful digital experiences.
  </p>

  {/* BUTTONS */}
  <div className="flex gap-4 flex-wrap justify-center md:justify-start">
  <button
    onClick={() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      });
    }}
    className="px-6 py-3 rounded-full bg-white text-black hover:scale-105 transition"
  >
    Explore Work
  </button>

    <button
      onClick={() => {
        document.getElementById("experience")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
    >
      Experience
    </button>
  </div>

</div>  )
}

export default LeftSide
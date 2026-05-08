"use client";

import React, { useState } from "react";
import Image from 'next/image';

import { motion, AnimatePresence } from "framer-motion";
import LinkedInIcon from "@/app/components/icons/LinkedInIcon";
import MailIcon from "@/app/components/icons/MailIcon";
import GithubIcon from "@/app/components/icons/GithubIcon";
import LeetCodeIcon from "@/app/components/icons/LeetCodeIcon";

import { Signika_Negative,Philosopher, Rancho,Inter } from "next/font/google";
// const signikaNegative = Signika_Negative({
//   subsets: ["latin"],
//   weight: "400",
// });
const signikaNegative = Inter({
  subsets: ["latin"],
  weight: "400",
});


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    
    <div className="relative top-1 z-50">

      {/* DESKTOP NAV (UNCHANGED DESIGN) */}
      <nav
        className="
        sticky mt-15 mx-auto w-[40%] max-w-6xl
        h-[70px] rounded-2xl
        border border-white/10
        bg-black/10 backdrop-blur-2xl
        bg-gradient-to-r from-white/5 to-white/10
        shadow-[0_10px_10px_rgba(0,0,0,0.9)]
        drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]
        flex items-center justify-between px-6
      "
      >

        {/* LOGO */}
        <img src="/images/ak.png" className="w-12 h-12 -mt-1" />

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6 text-white">
          <a  onClick={() => {
      document.getElementById("stack")?.scrollIntoView({
        behavior: "smooth",
      });
    }} className={`${signikaNegative.className} hover:text-white transition text-xl hover:scale-90`}>Stack</a>
          <a  onClick={() => {
      document.getElementById("experience")?.scrollIntoView({
        behavior: "smooth",
      });
    }} className={`${signikaNegative.className} hover:text-white transition text-xl hover:scale-90`}>Experience</a>
          <a  onClick={() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      });
    }} className={`${signikaNegative.className} hover:text-white transition text-xl hover:scale-90`}>Projects</a>
          <a href="https://drive.google.com/file/d/1p3ZIbcb8B5SuNhwFrTzNG-09HV9O26FO/view?usp=drive_link" className={`${signikaNegative.className} hover:text-white transition text-xl hover:scale-90`}>CV</a>
        </div>

        {/* HAMBURGER (ONLY MOBILE) */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </div>

      </nav>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="
              mt-4 mx-auto w-[90%]
              p-6 rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-xl
              shadow-[0_20px_40px_rgba(0,0,0,0.6)]
            "
          >

            {/* LINKS */}
            <div className="flex flex-col gap-6 text-lg text-white/80">
              <a onClick={() => {
                document.getElementById("stack")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}>Stack</a>
              <a onClick={() => {
                document.getElementById("experience")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}>Experience</a>
              <a onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}>Projects</a>
              <a href="https://drive.google.com/file/d/1p3ZIbcb8B5SuNhwFrTzNG-09HV9O26FO/view?usp=drive_link">CV</a>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/10 my-6" />

            {/* SOCIALS */}
            <div className="flex gap-6 text-white/70 text-xl h-8">
              <a
  href="https://www.linkedin.com/in/adarsh-k-poojary-80a4b9243/"><LinkedInIcon className="w-6 h-6 hover:text-white" /></a>
         <a
          href="mailto:adarshpoojary375@gmail.com">      <MailIcon className="w-7 h-7 hover:text-white" /> </a>
               <a
  href="https://github.com/adarshk0511"><GithubIcon className="w-7 h-7 hover:text-white" /></a>
               <a
  href="https://leetcode.com/u/lIsrbXvRgT/">   <Image  src='/leetcode.svg' alt="" width={25} height={20} className="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 hover:scale-110 p-0  m-0" ></Image>
              
              <LeetCodeIcon className="w-1 h-0" /></a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Navbar;

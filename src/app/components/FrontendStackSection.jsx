"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tech } from "./Tech";
import SectionLabel from "./SectionLabel";
import { Pacifico } from "next/font/google";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const FrontendStackSection = () => {


  return (
    <motion.div
      id="stack"
      className="pt-40 pb-1  relative"
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.85,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1.1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        ease: [0.42, 1, 0.36, 1],
      }}
      viewport={{ margin: "-100px" }}
    >
       <SectionLabel text="MY STACK" className="px-6 md:ml-[20%] text-left md:text-left" />
      <motion.div id="stack" className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[380px_1fr] gap-6 md:gap-10">
        {/* LEFT LABEL */}
        
        <div className={`${pacifico.className} 
  text-gray-400 
  text-4xl md:text-5xl 
  font-bold 
  tracking-wide lg:-ml-8 -ml-22
  text-center md:text-left`}>
          FRONTEND
        </div>

        {/* RIGHT GRID */}
        <motion.div
       
          className="flex flex-wrap gap-x-7 gap-y-8 lg:pl-17 pl-10"
        >
          <Tech icon="/icons/js.png" name="JavaScript" />
          <Tech icon="/icons/react.png" name="React" />
          <Tech icon="/icons/sass.png" name="Sass" />
          <Tech icon="/icons/tailwind.png" name="Tailwind" />
          <Tech icon="/icons/html.png" name="HTML" />
          <Tech icon="/icons/css.png" name="CSS" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FrontendStackSection;

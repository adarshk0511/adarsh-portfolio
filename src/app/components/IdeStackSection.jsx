"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tech } from "./Tech";


import { Pacifico, Lobster_Two } from "next/font/google";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});


const lobsters_two = Lobster_Two({
  subsets: ["latin"],
  weight: "400",
});
const IdeStackSection = () => {
  return (
    <motion.div
    id="stack"
      className="pt-30  relative"
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.85,
        filter: "blur(10px)"
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1.1,
        filter: "blur(0px)"
      }}
      transition={{
        duration: 0.8,
        ease: [0.42, 1, 0.36, 1]
      }}
      viewport={{ margin: "-100px" }}
    
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[380px_1fr] gap-10">
        {/* LEFT LABEL */}
 <div className={`${pacifico.className} text-gray-400 text-5xl font-bold tracking-wide `}>          IDEs
        </div>

        {/* RIGHT GRID */}
        <div className="flex flex-wrap gap-x-7 gap-y-8 pl-19">
          <Tech icon="/icons/vscode.png" name="VsCode" /> 
          <Tech icon="/icons/xcode.png" name="Xcode" />
          <Tech icon="/icons/androidstudio.png" name="Android Studio" />
        </div>
      </div>
    </motion.div>
  );
};

export default IdeStackSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tech } from "./Tech";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const BackendStackSection = () => {
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
 <div className={`${pacifico.className} 
  text-gray-400 
  text-4xl md:text-5xl 
  font-bold 
  tracking-wide -ml-15
  text-center md:text-left`}>          BACKEND
        </div>

        {/* RIGHT GRID */}
        <div className="flex flex-wrap gap-x-7 gap-y-8 pl-17">
          <Tech icon="/icons/node.png" name="Node.Js" /> 
          <Tech icon="/icons/express.png" name="Express" />
          <Tech icon="/icons/java.png" name="Java" />
          <Tech icon="/icons/python.png" name="Python" />
        </div>
      </div>
    </motion.div>
  );
};

export default BackendStackSection;

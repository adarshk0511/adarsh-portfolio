"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tech } from "./Tech";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const DatabaseStackSection = () => {
  return (
    
    <motion.div
    id="stack"
      className="pt-30 relative"
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
  tracking-wide -ml-23 lg:-ml-8
  text-center md:text-left`}>          DATABASE
        </div>

        {/* RIGHT GRID */}
        <div className="flex flex-wrap gap-x-7 gap-y-8 lg:pl-16 pl-10">
          <Tech icon="/icons/mysql.png" name="MySQL" /> 
          <Tech icon="/icons/mongo.png" name="MongoDB" />
          <Tech icon="/icons/postgresql.png" name="PostgreSQL" />
        </div>
      </div>
    </motion.div>
  );
};

export default DatabaseStackSection;

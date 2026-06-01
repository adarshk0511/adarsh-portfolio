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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // 👈 controls delay between items
    },
  },
};

const tech = [
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Sass", icon: "/icons/sass.png" },
  { name: "Tailwind", icon: "/icons/tailwind.png" },
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
]

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

      <div className="-ml-18 mb-20">
        <SectionLabel text="MY STACK" className="text-left md:text-left" />
      </div>
       


      <motion.div id="stack" className="max-w-4xl mt-15 mx-auto grid grid-cols-1 md:grid-cols-[380px_1fr] gap-6 md:gap-10">
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
  variants={container}
  initial="hidden"
  whileInView="show"
          className="flex flex-wrap gap-x-7 gap-y-8 lg:pl-17 pl-10"
        >
          {tech.map((item, index) => (
            <Tech key={index} icon={item.icon} name={item.name} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FrontendStackSection;

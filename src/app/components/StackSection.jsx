"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tech } from "./Tech";

const StackSection = () => {
  return (
    <motion.div
    id="stack"
      className="py-40 px-6 relative"
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-24">
        {/* LEFT LABEL */}
        <div className="text-gray-400 text-5xl font-bold tracking-wide">
          FRONTEND
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Tech icon="/icons/js.png" name="JavaScript" /> 
          <Tech icon="/icons/react.png" name="React" />
          <Tech icon="/icons/sass.webp" name="Sass.js" />
          <Tech icon="/icons/tailwind.png" name="Tailwind" />
          <Tech icon="/icons/html.png" name="HTML" />
          <Tech icon="/icons/css.png" name="CSS" />
        </div>
      </div>
    </motion.div>
  );
};

export default StackSection;

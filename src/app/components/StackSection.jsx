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
        scale: 0.95,
        filter: "blur(10px)"
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)"
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true, margin: "-100px" }}
    
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-16">
        {/* LEFT LABEL */}
        <div className="text-gray-400 text-5xl font-bold tracking-wide">
          FRONTEND
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <Tech icon="/icons/js.svg" name="JavaScript" />
          <Tech icon="/icons/ts.svg" name="TypeScript" />
          <Tech icon="/icons/react.svg" name="React" />
          <Tech icon="/icons/next.svg" name="Next.js" />
          <Tech icon="/icons/redux.svg" name="Redux" />
          <Tech icon="/icons/tailwind.svg" name="Tailwind" />
        </div>
      </div>
    </motion.div>
  );
};

export default StackSection;

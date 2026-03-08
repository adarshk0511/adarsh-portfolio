"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tech } from "./Tech";

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
        <div className="text-gray-400 text-5xl font-bold tracking-wide">
          DATABASE
        </div>

        {/* RIGHT GRID */}
        <div className="flex flex-wrap gap-x-7 gap-y-8 pl-19">
          <Tech icon="/icons/mysql.png" name="MySQL" /> 
          <Tech icon="/icons/mongo.png" name="MongoDB" />
          <Tech icon="/icons/postgresql.png" name="PostgreSQL" />
        </div>
      </div>
    </motion.div>
  );
};

export default DatabaseStackSection;

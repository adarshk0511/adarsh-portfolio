"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tech } from "./Tech";

const StackSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    //   viewport={{ once: true }}
      id="stack"
      className="py-32 px-6 relative"
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

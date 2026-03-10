"use client";

import { motion } from "framer-motion";

export default function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 text-gray-300 text-2xl ml-[20%] mb-[2rem]">

      <motion.span
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear"
        }}
        className="text-3xl"
      >
        ✻
      </motion.span>

      <span className="font-medium font-(--font-grotesk)">{text}</span>

    </div>
  );
}
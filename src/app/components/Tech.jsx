"use client";
import { motion } from "framer-motion";

export function Tech({ icon, name }) {
  const item = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.42, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.08 }}
      className="flex items-center gap-3 text-lg text-gray-100 opacity-80 hover:opacity-100 transition italic will-change-transform hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
    >
      <img src={icon} className="w-10 h-10" />
      <span className="text-2xl">{name}</span>
    </motion.div>
  );
}
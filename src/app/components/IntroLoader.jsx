"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [show, setShow] = useState(true);
  const name = "ADARSH";

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200); // total duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* 🌈 Background Glow */}
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-[120px]"
          />

          {/* ✨ Animated Name */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 8,               // 🔥 BIG zoom out
              opacity: 0,
              filter: "blur(10px)",   // cinematic feel
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="relative flex gap-2 text-5xl md:text-9xl font-semibold text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.7)]"
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
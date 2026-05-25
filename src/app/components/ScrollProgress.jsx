"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {

  // 📜 SCROLL PROGRESS (0 → 1)
  const { scrollYProgress } = useScroll();

  // ✨ SMOOTH SPRING ANIMATION
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <>
      {/* TRACK */}
      <div
        className="
          fixed
          top-0
          right-6

          h-screen
          w-[2px]

          bg-white/10

          z-[999]
        "
      />

      {/* PROGRESS */}
      <motion.div
        style={{ scaleY }}

        className="
          fixed
          top-0
          right-6

          origin-top

          h-screen
          w-[2px]

          bg-gradient-to-b
          from-cyan-300
          via-white
          to-purple-400

          shadow-[0_0_12px_rgba(255,255,255,0.35),0_0_24px_rgba(168,85,247,0.25),0_0_40px_rgba(34,211,238,0.18)]

          z-[1000]
        "
      />
    </>
  );
}
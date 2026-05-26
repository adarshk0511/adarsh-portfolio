"use client";

import { motion } from "framer-motion";

export default function BottomGlow() {

  return (
    <div
      className="
        fixed
        bottom-0
        right-6

        w-[500px]
        h-[220px]

        pointer-events-none
        overflow-visible

        z-[999]
      "
    >

      {/* ⚡ MAIN LIGHT CORE */}
      <motion.div
        animate={{
          opacity: [0.75, 1, 0.75],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          bottom-[-120px]
          right-[-240px]

          w-[520px]
          h-[220px]

          rounded-full

          bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(233,213,255,0.75)_12%,rgba(192,132,252,0.28)_32%,rgba(168,85,247,0.12)_48%,transparent_72%)]

          blur-[55px]
        "
      />

      {/* ⚡ COMPRESSED HORIZON GLOW */}
      <div
        className="
          absolute
          bottom-[-18px]
          right-[-260px]

          w-[560px]
          h-[80px]

          bg-purple-300/20

          blur-[70px]
        "
      />

      {/* ⚡ VERTICAL ENERGY BEAM */}
      <motion.div
        animate={{
          opacity: [0.45, 0.8, 0.45],
          scaleY: [1, 1.04, 1],
        }}

        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          bottom-0
          right-0

          w-[3px]
          h-[180px]

          bg-[linear-gradient(to_top,rgba(255,255,255,0.95),rgba(233,213,255,0.45),transparent)]

          blur-[4px]
        "
      />

      {/* ✨ CORE DOT */}
      <div
        className="
          absolute
          bottom-[-4px]
          right-[-4px]

          w-[10px]
          h-[10px]

          rounded-full

          bg-white

          shadow-[0_0_30px_rgba(255,255,255,1)]
        "
      />

      {/* 🌊 HORIZONTAL LIGHT LINE */}
      <div
        className="
          absolute
          bottom-0
          right-[-260px]

          w-[560px]
          h-[1px]

          bg-gradient-to-l
          from-transparent
          via-purple-200/70
          to-transparent
        "
      />

    </div>
  );
}
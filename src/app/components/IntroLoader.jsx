/* eslint-disable react-hooks/refs */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function NameIntro() {
  const [show, setShow] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [height, setHeight] = useState(1000);

  const starsRef = useRef([]);

  useEffect(() => {
    setMounted(true);
    setHeight(window.innerHeight);

    const timer = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  // ⭐ Generate realistic layered stars
  useEffect(() => {
    starsRef.current = Array.from({ length: 150 }).map(() => {
      const depth = Math.random(); // 0 → far, 1 → near

      return {
        x: Math.random() * 100,
        y: Math.random() * 100,

        size: depth * 2 + 0.3,              // near stars bigger
        opacity: depth * 0.8 + 0.2,        // near stars brighter
        speed: depth * 20 + 20,            // near stars faster
        twinkleDelay: Math.random() * 3,
      };
    });
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
        >
          {/* 🌈 MOVING GRADIENT (FOOTER STYLE) */}
          <motion.div
            className="absolute inset-0 blur-[140px] opacity-60"
            style={{
              background:
                "linear-gradient(120deg, rgba(34,211,238,0.4), rgba(168,85,247,0.4), rgba(236,72,153,0.4))",
              backgroundSize: "200% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* ⭐ REALISTIC STARFIELD */}
          {starsRef.current.map((star, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: star.size,
                height: star.size,
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              initial={{ y: 0, opacity: star.opacity }}
              animate={{
                y: -height - 200,
                opacity: [
                  star.opacity,
                  star.opacity + 0.2,
                  star.opacity,
                ], // subtle twinkle
              }}
              transition={{
                y: {
                  duration: star.speed,
                  repeat: Infinity,
                  ease: "linear",
                },
                opacity: {
                  duration: 2 + star.twinkleDelay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          ))}

         
         
          

          {/* ✨ TEXT */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 12,
              opacity: 0,
              filter: "blur(25px)",
              transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="relative flex flex-col items-center text-white"
          >
            {/* ADARSH */}
            <div className="flex gap-2 text-5xl md:text-7xl font-semibold">
              {"ADARSH".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* FULL STACK DEV */}
            <div className="flex gap-1 text-lg md:text-2xl mt-4 text-gray-300">
              {"Full Stack Developer".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + i * 0.03,
                    duration: 0.4,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            
          </motion.div>
      
        </motion.div>
      )}
    </AnimatePresence>
  );
}
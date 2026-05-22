"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { Bebas_Neue, Dancing_Script, VT323 } from "next/font/google";

import Particles from "./Particles";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const fugazOne = VT323({
  subsets: ["latin"],
  weight: ["400"],
});
export default function NameIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[9999]

            flex
            items-center
            justify-center

            overflow-hidden

            bg-black
          "
        >
          {/* 🌌 PARTICLES BACKGROUND */}
          <div className="absolute inset-0">
            <Particles
              particleColors={["#ffffff"]}
              particleCount={490}
              particleSpread={5}
              speed={0.3}
              particleBaseSize={70}
              moveParticlesOnHover
              alphaParticles
              disableRotation={false}
            />
          </div>

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
            className="
              relative
              z-10

              flex
              flex-col
              items-center

              text-white
            "
          >
            {/* ADARSH */}
            <div
              className={`
                ${bebasNeue.className}

                flex
                gap-2

                text-7xl
                md:text-9xl

                font-semibold

                tracking-wide
              `}
            >
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
            <div
              className={`
                ${fugazOne.className}

                flex
                gap-1

                text-2xl
                md:text-5xl

                mt-3

                relative
                -top-6

                text-white/60

              `}
            >
              {"Full  Stack  Developer".split("").map((char, i) => (
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
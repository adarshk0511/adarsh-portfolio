"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionLabel from "./SectionLabel";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.55
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.85,
    filter: "blur(10px)"
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.3,
      ease: [0.42, 1, 0.36, 1]
    }
  },
  viewport: { margin: "-120px" }
};

export default function ExperienceSection() {
  return (
    <section className="relative py-40 px-6">
       <img
              src="/images/bg3.png"
              alt="bg"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-25 -z-10"
            />
      <div className="-ml-22">
        <SectionLabel text="MY EXPERIENCE" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{  margin: "-120px" }}
        >
        {/* Experience 1 */}
        <motion.div variants={item} className="mt-16 ">
          <div className="flex">
            <img
              src="/images/tcs.png"
              alt="TCS logo"
              className="w-12 h-6 mr-3 "
            />

            <span className="text-gray-400 text-xl mb-3">
              TATA Consultancy Services
            </span>
          </div>

          <h2 className="text-[72px] leading-[1.1] font-bold text-gray-200 tracking-tight">
            Angular Developer
          </h2>

          <h4 className="text-[30px] leading-[1.1] font-bold text-gray-500 tracking-tight">
            [Native Mobile App]
          </h4>

          <p className="text-gray-500 text-xl mt-4">Jul 2024 - Present</p>
        </motion.div>

        {/* Experience 2 */}
        <motion.div variants={item} className="mt-28">
           <div className="flex">
            <img
              src="/images/tcs.png"
              alt="TCS logo"
              className="w-12 h-6 mr-3 "
            />

            <span className="text-gray-400 text-xl mb-3">
              TATA Consultancy Services
            </span>
          </div>

          <h2 className="text-[72px] leading-[1.1] font-bold text-gray-200 tracking-tight">
            MERN Stack Developer
          </h2>

          <p className="text-gray-500 text-xl mt-4">Sept 2024 - Present</p>
        </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

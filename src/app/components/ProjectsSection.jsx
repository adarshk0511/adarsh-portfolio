    "use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { motion, AnimatePresence } from "framer-motion";
import { Pacifico, Lobster_Two, Archivo_Black } from "next/font/google";
import { ExternalIcon } from "./icons/ExternalIcon";

const archivo_black = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

const projects = [
  {
    id: 1,
    title: "Namma Udupi",
    tech: ["HTML", "CSS", "Bootstrap"],
    image: "/images/udupi.png",
  },
  {
    id: 2,
    title: "Testify",
    tech: ["ReactJS", "Tailwind CSS", "CSS"],
    image: "/images/testify.png",
  },
  {
    id: 3,
    title: "Jobify",
    tech: ["MongoDB", "Express", "ReactJS", "NodeJS"],
    image: "/images/jobify.png",
  },
  {
    id: 4,
    title: "Doc Vault",
    tech: ["HTML", "CSS", "PHP", "SQL"],
    image: "/images/doc.png",
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-40 px-6">


        <div className="-ml-22">
                <SectionLabel text="MY PROJECTS" />
              </div>

      <div className="max-w-5xl mx-auto flex gap-20">

        {/* LEFT SIDE */}
        <div className="flex-1">

         

          <div className="mt-16 space-y-10">

            {projects.map((project, index) => {
              const isActive = activeIndex === project.id-1;

              return (
                <div
                  key={project.id}
                 onMouseEnter={() => setActiveIndex(index)}
                  className="border-b border-white/10 pb-6 cursor-pointer"
                >
                  {/* INDEX */}
                  <p className={`${archivo_black.className} text-gray-500 text-sm mb-2`}>
                    _.0{index + 1}
                  </p>

                  {/* TITLE */}
                  <h2
                    className={`${archivo_black.className} relative text-[70px] font-bold tracking-tight
  
  ${activeIndex === index ? "active-text" : "inactive-text"}`}
   style={{
    background: "linear-gradient(90deg, #22c55e 50%, rgba(255,255,255,0.3) 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition:
      activeIndex === index ? "0% 0" : "100% 0",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent", 
    transition: "background-position 0.5s ease"
  }}
                  >
                    {project.title}
                  </h2>

                  {/* TECH */}
                  <div className="flex gap-4 mt-3 text-gray-500 text-sm">
                    {project.tech.map((t, i) => (
                      <span key={i} className="flex items-center gap-2">
                        {i !== 0 && <span className="w-1 h-1 bg-gray-600 rounded-full" />}
                        {t}
                      </span>
                    ))}
                  </div>

                   {/* ICON */}
  <span
    className={`
      absolute right-[-40px] top-1/2 -translate-y-1/2
      transition-all duration-300 ease-out
      ${activeIndex === index
        ? "opacity-100 translate-x-0 translate-y-0 scale-100"
        : "opacity-0 translate-x-[-10px] translate-y-[10px] scale-75"}
    `}
  >
    <ExternalIcon />
  </span>
                </div>
              );
            })}

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-[420px] relative hidden lg:block">

  <AnimatePresence mode="wait">
    {projects.map((project, index) => {
      if (index !== activeIndex) return null;

      // 🎯 Dynamic vertical position
      const topOffset = -80 + index * 90;

      return (
        <motion.img
          key={project.id}
          src={project.image}
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: `${topOffset}px`,
            right: 0,
          }}
          className="w-full rounded-xl shadow-2xl"
        />
      );
    })}
  </AnimatePresence>

</div>

      </div>

    </section>
  );
}
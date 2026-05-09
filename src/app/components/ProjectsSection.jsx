"use client";

import { useState, useEffect } from "react";
import SectionLabel from "./SectionLabel";
import { motion, AnimatePresence } from "framer-motion";
import { Archivo_Black } from "next/font/google";
import { ExternalIcon } from "./icons/ExternalIcon";
import Particles from "./Particles";

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
    link: "https://adarshk0511.github.io/Namma-Udupi/",
  },
  {
    id: 2,
    title: "Testify",
    tech: ["ReactJS", "Tailwind CSS", "CSS"],
    image: "/images/testify.png",
    link: "https://testify2.vercel.app/",
  },
  {
    id: 3,
    title: "Jobify",
    tech: ["MongoDB", "Express", "ReactJS", "NodeJS"],
    image: "/images/jobify.png",
    link: "https://github.com/adarshk0511/mern-jobify-v2-main",
  },
  {
    id: 4,
    title: "Doc Vault",
    tech: ["HTML", "CSS", "PHP", "SQL"],
    image: "/images/doc.png",
    link: "https://github.com/adarshk0511?tab=repositories",
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Detect screen size
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 🔁 Auto loop for mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 2200); // ⏱️ tweak speed here

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="relative py-40 px-6" id="projects">

       {/* 🌌 PARTICLES BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
      particleColors={[
        "#ffffff",
        "#8b5cf6",
        "#3b82f6",
        "#06b6d4"
      ]}      particleCount={420}
            particleSpread={4}
            speed={0.1}
            particleBaseSize={120}
            moveParticlesOnHover
            alphaParticles
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
      
        {/* 🌈 EXTRA GLOW */}
        <div
          className="
            absolute
            inset-0
            z-0
      
            bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]
      
            blur-[120px]
          "
        />

      <div className="-ml-22">
        <SectionLabel text="MY PROJECTS" />
      </div>

      <div className="max-w-5xl mx-auto flex gap-20">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <div className="mt-16 space-y-10">
            {projects.map((project, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => {
                    if (!isMobile) setActiveIndex(index);
                  }}
                  className="border-b border-white/10 pb-6 cursor-pointer"
                >
                  {/* INDEX */}
                  <p
                    className={`${archivo_black.className} text-gray-500 text-sm mb-2`}
                  >
                    _.0{index + 1}
                  </p>

                  {/* TITLE */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${archivo_black.className} relative text-[60px] md:text-[70px] font-bold tracking-tight`}
                    style={{
                      background:
                        "linear-gradient(90deg, #22c55e 50%, rgba(255,255,255,0.3) 50%)",
                      backgroundSize: "200% 100%",
                      backgroundPosition: isActive ? "0% 0" : "100% 0",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      transition:
                        "background-position 0.6s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    {project.title}

                    {/* ICON */}
                    <span
                      className={`
                        absolute top-1/2 right-[-40px] -translate-y-1/2
                        transition-all duration-300 ease-out
                        ${
                          isActive
                            ? "opacity-100 translate-x-0 scale-100"
                            : "opacity-0 translate-x-[-10px] scale-75"
                        }
                      `}
                    >
                      <ExternalIcon />
                    </span>
                  </a>

                  {/* TECH */}
                  <div className="flex gap-4 mt-3 text-gray-500 text-sm">
                    {project.tech.map((t, i) => (
                      <span key={i} className="flex items-center gap-2">
                        {i !== 0 && (
                          <span className="w-1 h-1 bg-gray-600 rounded-full" />
                        )}
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE (UNCHANGED) */}
        <div className="w-[420px] relative hidden lg:block">
          <AnimatePresence mode="wait">
            {projects.map((project, index) => {
              if (index !== activeIndex) return null;

              const topOffset = -80 + index * 110;

              return (
                <motion.img
                  key={project.id}
                  src={project.image}
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
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
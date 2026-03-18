    "use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Electro EV",
    tech: ["Next.js", "Payload CMS", "Tailwind CSS"],
    image: "/projects/electro.png",
  },
  {
    id: 2,
    title: "Epikcart",
    tech: ["React", "Redux", "i18n"],
    image: "/projects/epikcart.png",
  },
  {
    id: 3,
    title: "Resume Roaster",
    tech: ["GPT-4", "Next.js", "PostgreSQL"],
    image: "/projects/resume.png",
  },
  {
    id: 4,
    title: "Real Estate",
    tech: ["React", "Redux", "Tailwind"],
    image: "/projects/realestate.png",
  },
  {
    id: 5,
    title: "Consulting Finance",
    tech: ["HTML", "SCSS", "JavaScript"],
    image: "/projects/finance.png",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState(2);

  return (
    <section className="relative py-40 px-6">

      <div className="max-w-7xl mx-auto flex gap-20">

        {/* LEFT SIDE */}
        <div className="flex-1">

          <SectionLabel label="SELECTED PROJECTS" />

          <div className="mt-16 space-y-10">

            {projects.map((project, index) => {
              const isActive = active === project.id;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setActive(project.id)}
                  className="border-b border-white/10 pb-6 cursor-pointer"
                >
                  {/* INDEX */}
                  <p className="text-gray-500 text-sm mb-2">
                    .0{index + 1}
                  </p>

                  {/* TITLE */}
                  <h2
                    className={`text-[64px] leading-none font-bold tracking-tight transition-all duration-300
                    ${isActive ? "text-green-400" : "text-gray-500 opacity-40"}`}
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
                </div>
              );
            })}

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-[420px] relative hidden lg:block">

          <AnimatePresence mode="wait">
            {projects
              .filter((p) => p.id === active)
              .map((project) => (
                <motion.img
                  key={project.id}
                  src={project.image}
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-20 right-0 w-full rounded-xl shadow-2xl"
                />
              ))}
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}
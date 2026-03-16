"use client";

import React from "react";
import SectionLabel from "./SectionLabel";

export default function ExperienceSection() {
  return (
    <section className="relative py-40 px-6">
      <div className="-ml-22">
        <SectionLabel text="MY EXPERIENCE" />
      </div>
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}

        {/* Experience 1 */}
        <div className="mt-16 ">
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
        </div>

        {/* Experience 2 */}
        <div className="mt-28">
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
        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";

export default function GlassStack() {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;

    ref.current.style.transform = `
      rotateX(${-y}deg) rotateY(${x}deg)
    `;
  };

  const reset = () => {
    ref.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="perspective-[1400px]"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div
        ref={ref}
        className="relative transition-transform duration-300 ease-out"
      >

        {["React", "Node.js", "MongoDB"].map((tech, i) => (
          <div
            key={tech}
            className={`
              absolute w-[380px] h-[220px] rounded-3xl
              bg-gradient-to-br from-white/20 to-white/5
              backdrop-blur-2xl
              border border-white/20
              shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              flex items-center justify-center
              text-white text-2xl font-medium
              transition-all duration-300
            `}
            style={{
              transform: `translateY(${i * 18}px) translateX(${i * 18}px)`,
              zIndex: 10 - i,
            }}
          >
            {/* edge glow */}
            <div className="absolute inset-0 rounded-3xl 
              bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-500/20
              opacity-40 blur-xl
            " />

            <span className="relative z-10">{tech}</span>
          </div>
        ))}

      </div>
    </div>
  );
}
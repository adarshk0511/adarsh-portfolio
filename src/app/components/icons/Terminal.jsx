"use client";
import { useEffect, useState } from "react";

const lines = [
  { text: "> npm run build", type: "command" },
   { text: "✓ Compiled successfully", type: "success" },
  { text: "✓ Compiled successfully", type: "success" },
  { text: "> docker build ...", type: "command" },
  { text: "✓ Image built successfully", type: "success" },
  { text: "> Deploying to production...", type: "command" },
  { text: "✓ Live at harsh.dev", type: "success" },
];

export default function Terminal() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < lines.length) {
        setVisible((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 650);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-3xl overflow-hidden
                bg-gradient-to-b from-white/10 to-white/[0.03]
                backdrop-blur-xl
                border border-white/20
                shadow-[0_40px_120px_rgba(0,0,0,0.8)] p-[1px] rounded-3xl
                bg-gradient-to-r from-cyan-400/40 via-emerald-400/30 to-purple-400/40">

  {/* Inner Glass Reflection */}
  <div className="absolute inset-0 rounded-3xl
                  bg-gradient-to-b from-white/20 via-transparent to-transparent
                  opacity-20 pointer-events-none" />

      <div className="relative rounded-3xl overflow-hidden">

      
       {/* Top Bar */}
<div className="relative flex items-center justify-between px-6 py-4
                border-b border-white/10">

  {/* Left Section */}
  <div className="flex items-center gap-3">
    <span className="w-3 h-3 rounded-full bg-red-500/80" />
    <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
    <span className="w-3 h-3 rounded-full bg-green-500/80" />

    <span className="ml-4 text-xs text-white/40 font-mono">
      build.production
    </span>
  </div>

  {/* Center Progress Bar */}
  <div className="absolute left-1/2 -translate-x-1/2 w-35 h-[3px] 
                  bg-white/10 rounded-full overflow-hidden">
    <div className="h-full w-1/3 bg-gradient-to-r 
                    from-cyan-400 via-emerald-400 to-purple-400
                    animate-[pulse_2s_ease-in-out_infinite]" />
  </div>

  {/* Right Section */}
  <div className="flex items-center gap-6 text-xs font-mono">
    <span className="text-white/40">27%</span>
    <span className="text-white/40">629 MB</span>
    <span className="text-emerald-400 flex items-center gap-1">
      ●
      <span className="text-white/50">LIVE</span>
    </span>
  </div>
</div>

        {/* Terminal Content */}
        <div className="p-8 font-mono text-[16px] space-y-4">

         {visible.map((line, i) =>
  line ? (
    <div key={i} className="flex items-center gap-2">
      
      {line.type === "success" ? (
        <>
          <span className="text-emerald-400">✓</span>
          <span className="text-cyan-300/90">{line.text.replace("✓ ", "")}</span>
        </>
      ) : (
        <span className="text-white/80">{line.text}</span>
      )}

    </div>
  ) : null
)}

          <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse mt-2"></span>

        </div>
      </div>
    </div>
  );
}
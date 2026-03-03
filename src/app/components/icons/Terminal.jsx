"use client";
import { useEffect, useState } from "react";

const lines = [
  "> npm run build",
  "✔ Compiled successfully",
  "> docker build .",
  "✔ Image built successfully",
  "> Deploying to production...",
  "✔ Live at adarsh.dev",
];

export default function Terminal() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [
          ...prev,
          lines[currentLine],
        ]);
        setCurrentLine((prev) => prev + 1);
      }, 900);

      return () => clearTimeout(timeout);
    }
  }, [currentLine]);

  return (
    <div className="
      w-[420px] rounded-2xl 
      bg-black/70 backdrop-blur-xl
      border border-white/10
      p-6 text-green-400
      font-mono text-sm
      shadow-[0_20px_60px_rgba(0,0,0,0.6)]
    ">
      {displayedLines.map((line, i) => (
        <div key={i} className="mb-2">
          {line}
        </div>
      ))}

      <span className="animate-pulse">▌</span>
    </div>
  );
}
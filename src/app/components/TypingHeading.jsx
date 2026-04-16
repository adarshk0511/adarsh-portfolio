"use client";

import { useEffect, useState } from "react";

export default function TypingHeading({ audiowide }) {
  const fullText = "Full Stack Developer";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 70); // speed

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <h1 className={`${audiowide.className}text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight`}>
      
      {/* Split styling */}
      {text.includes("Developer") ? (
        <>
          {text.replace("Developer", "")}
          <span className={`${audiowide.className} text-gray-400`}>
            {"Developer".slice(0, text.length - "Full Stack ".length)}
          </span>
        </>
      ) : (
        text
      )}

      {/* Cursor */}
      <span className="inline-block w-[2px] h-8 md:h-12 bg-cyan-400 ml-2 animate-pulse"></span>
    </h1>
  );
}
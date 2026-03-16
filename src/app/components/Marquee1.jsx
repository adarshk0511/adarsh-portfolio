"use client"

export default function Marquee1({text}) {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">

      <div className="marquee flex gap-6 text-xl font-extralight italic text-gray-300">

            {[...Array(10)].map((_, i) => (
        <span key={i} className="flex items-center gap-3">
          <div className="h-2 w-2 bg-emerald-300 rounded-2xl animate-pulse"></div>
          {text}
        </span>
      ))}

      </div>

    </div>
  )
}
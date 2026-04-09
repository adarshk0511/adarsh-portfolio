"use client"

export default function Marquee() {
  
  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-6">

      <div className="marquee flex gap-16 text-5xl font-extralight italic text-gray-300">

        {Array(10).fill(
          <span className="flex items-center gap-5">
              HEBRI
            <span className="opacity-40">✦</span>
           ADARSH
          </span>
        )}

      </div>

    </div>
  )
}

"use client"

export default function Marquee1() {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">

      <div className="marquee flex gap-6 text-xl font-extralight italic text-gray-300">

        {Array(10).fill(
          <span className="flex items-center gap-3">
            
            <span className="">🟢</span>
           FULL STACK  DEVELOPER  
          </span>
        )}

      </div>

    </div>
  )
}
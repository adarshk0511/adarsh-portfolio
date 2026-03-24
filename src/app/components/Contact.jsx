import React from 'react'
import Image from 'next/image';

import LinkedInIcon  from '@/app/components/icons/LinkedInIcon';
import MailIcon from "@/app/components/icons/MailIcon";
import GithubIcon from "@/app/components/icons/GithubIcon";
import LeetCodeIcon from "@/app/components/icons/LeetCodeIcon";

const Contact = () => {
  return (
<div className="hidden md:flex fixed top-8 right-10 z-50">
  <div className="flex gap-6">
<a
  href="https://linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center 
             w-9 h-9 rounded-full
             text-white/70 hover:text-white
             transition hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 hover:scale-120"
>
  <LinkedInIcon className="w-7 h-7" />
</a>      <a
  href="mailto:your@email.com"
  className="inline-flex items-center justify-center 
             w-9 h-9 rounded-full
             text-white/70 hover:text-white
             transition hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 hover:scale-120"  
>
  <MailIcon className="w-9 h-9" />
</a>
       <a
  href="https://github.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center 
             w-9 h-9 rounded-full
             text-white/70 hover:text-white
             transition hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 hover:scale-120"
>
  <GithubIcon className="w-8 h-8" />
</a>
      <a
  href="https://leetcode.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center
             w-9 h-9 rounded-full
             text-white/70 hover:text-white
             transition hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 hover:scale-120"
>
   <Image  src='/leetcode.svg' alt="" width={25} height={25} className="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 hover:scale-110" ></Image>
   <LeetCodeIcon className="w-1 h-1" />
  

 
</a>
    </div>
    </div>
  )
}

export default Contact
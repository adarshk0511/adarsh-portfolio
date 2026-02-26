import React from 'react'
import Image from 'next/image';

import LinkedInIcon  from '@/app/components/icons/LinkedInIcon';
import MailIcon from "@/app/components/icons/MailIcon";
import GithubIcon from "@/app/components/icons/GithubIcon";
import LeetCodeIcon from "@/app/components/icons/LeetCodeIcon";

const Contact = () => {
  return (
    <div className="sticky mx-[80%] -mt-10">
         <div className="flex gap-6">
<a
  href="https://linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center 
             w-9 h-9 rounded-full
             text-white/70 hover:text-white
             transition"
>
  <LinkedInIcon className="w-7 h-7" />
</a>      <a
  href="mailto:your@email.com"
  className="inline-flex items-center justify-center 
             w-9 h-9 rounded-full
             text-white/70 hover:text-white
             transition"  
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
             transition"
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
             transition"
>
   <LeetCodeIcon className="w-5 h-5" />
   <Image  src='/leetcode.svg' alt="" width={50} height={50} ></Image>

 
</a>
    </div>
    </div>
  )
}

export default Contact
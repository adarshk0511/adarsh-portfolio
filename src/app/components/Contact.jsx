import React from 'react'
import Image from 'next/image';
import LinkedInIcon  from '@/app/components/icons/LinkedInIcon';
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
  <LinkedInIcon className="w-5 h-5" />
</a>      {/* <a className="hover:text-white transition text-xl">Experience</a>
       <a className="hover:text-white transition text-xl">Projects</a>
      <a className="hover:text-white transition text-xl">CV</a> */}
    </div>
    </div>
  )
}

export default Contact
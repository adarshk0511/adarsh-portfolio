import React from 'react'

const Navbar = () => {
  return (
  <nav className="
  sticky -top-10 -mt-4 z-50 bg-white border-b
  mx-auto w-[60%] max-w-6xl
  mx-auto h-[70px] 
  rounded-2xl
  border border-white/10
  bg-white
  backdrop-blur-xl
  shadow-lg
">
  <div className="flex items-center justify-between px-6 py-3 pt-7">

   

    {/* Links */}
    <div className="flex items-center gap-8 text-black">
      <a className="hover:text-black transition text-xl">Stack</a>
      <a className="hover:text-black transition text-xl">Experience</a>
     
    </div>

     {/* Logo */}
    <div className="text-black/80 font-bold tracking-wide text-2xl">
      AK
    </div>

    {/* Social */}
    <div className="flex gap-4 text-black/70">
       <a className="hover:text-black transition text-xl">Projects</a>
      <a className="hover:text-black transition text-xl">Contact</a>
    </div>

  </div>
</nav>
  )
}

export default Navbar
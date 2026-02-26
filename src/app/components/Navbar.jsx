import React from 'react'

const Navbar = () => {
  return (
  <nav className="
  sticky  mt-15  z-50 border-b
  mx-auto w-[40%] max-w-6xl
  h-[70px] 
  rounded-2xl
  border border-white/20
       bg-black/10
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.5)]
">
  <div className="flex items-center justify-between px-6 py-3 pt-5">

   

    {/* Links */}
    {/* <div className="flex items-center gap-8 text-white">
     
     
    </div> */}

     {/* Logo */}
    <div className="text-white/80 font-bold tracking-wide text-2xl">
      AK
    </div>

    {/* Social */}
    <div className="flex gap-6 text-white">
       <a className="hover:text-white transition text-xl">Stack</a>
      <a className="hover:text-white transition text-xl">Experience</a>
       <a className="hover:text-white transition text-xl">Projects</a>
      <a className="hover:text-white transition text-xl">CV</a>
    </div>

  </div>
</nav>
  )
}

export default Navbar
import React from 'react'

const Navbar = () => {
  return (
  <nav className="
  sticky  mt-15  z-50 border-b
  mx-auto w-[40%] max-w-6xl
  h-[70px] 
  rounded-2xl
  border border-white/10
       bg-black/10
       blurred-2xl
       bg-gradient-to-r from-white/5 to-white/10
       shadow-[0_10px_10px_rgba(0,0,0,0.9)]
       drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-300 hover:scale-110
        
">
  <div className="flex  justify-between px-6 py-3 pt-5">

   

    {/* Links */}
    {/* <div className="flex items-center gap-8 text-white">
     
     
    </div> */}

     {/* Logo */}
      <img src="/images/ak.png" alt="Logo" className="w-12 h-12 -mt-3" />
    {/* <div className="text-white/80 font-bold tracking-wide text-2xl">
     
    </div> */}

    {/* Social */}
    <div className="flex gap-6 text-white">
       <a className="hover:text-white transition text-xl hover:scale-90">Stack</a>
      <a className="hover:text-white transition text-xl hover:scale-90">Experience</a>
       <a className="hover:text-white transition text-xl hover:scale-90">Projects</a>
      <a className="hover:text-white transition text-xl hover:scale-90">CV</a>
    </div>

  </div>
</nav>
  )
}

export default Navbar
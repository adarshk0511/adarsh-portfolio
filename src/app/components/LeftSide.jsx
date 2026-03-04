import React from 'react'

const LeftSide = () => {
  return (
     <div className="space-y-8 text-white">
          
          <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
            Full Stack <span className="text-white/60">Developer</span>  <span className="inline-block w-4 h-13 bg-cyan-400 animate-pulse -mb-2"></span>

          </h1>
    
              <div>
            <h4 className="text-2xl text-white/80">
            Hi, Im Adarsh.
          </h4>
          <img src="/images/me5.jpg" alt="Profile Picture" className="w-20 h-20 rounded-full mt-4" />
          </div>
          <p className="text-white/70 text-lg max-w-xl">
            I build scalable web applications with modern frontend and backend 
            technologies. Passionate about performance, clean architecture, and 
            creating meaningful digital experiences.
          </p>
    
          <div className="flex gap-6">
            <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition">
              Explore Work
            </button>
    
            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              About Me
            </button>
          </div>
    
        
    
        </div>
  )
}

export default LeftSide
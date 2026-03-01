import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative max-h-screen overflow-hidden bg-black">

      {/* Background Video */}
      <video
        src="/videos/rgb-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-screen object-cover"
      />

      {/* Glass Border Overlay */}
      <div className=" w-full
            
            h-full pointer-events-none absolute inset-0 flex items-center justify-center p-8  
            backdrop-blur-xl"    style={{
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "50px",
            borderRadius: "20px",
          }}>
        
   

      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Contact />
       
          <section className="relative z-10 min-h-screen flex items-center px-8 lg:px-20">
  
  <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div className="space-y-8 text-white">
      
      <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
        Full Stack <span className="text-white/60">Developer</span>
      </h1>

          <div>
        <h4 className="text-2xl text-white/80">
        Hi, I'm Adarsh.
      </h4>
      <image src="/images/profile-pic.png" alt="Profile Picture" className="w-24 h-24 rounded-full mt-4" />
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

    {/* RIGHT SIDE */}
    <div className="relative">

      <div className="
        rounded-3xl
        border border-white/10
        bg-black/40
        backdrop-blur-xl
        p-6
      ">

        {/* <img
          src="/images/project-preview.png"
          alt="Project Preview"
          className="rounded-2xl"
        /> */}

      </div>

    </div>

  </div>

</section>
      </div>

    </div>
  );
}

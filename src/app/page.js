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
          }}>
        
   

      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Contact />
        <div className="h-screen flex items-center justify-center text-white text-4xl">
          Hero Content
        </div>
      </div>

    </div>
  );
}

import Contact from "./components/Contact";
import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";
import RightSide from "./components/RightSide";
import FrontendStackSection from "./components/FrontendStackSection";
import BackendStackSection from "./components/BackendStackSection";
import DatabaseStackSection from "./components/DatabaseStackSection";
import ToolsStackSection from "./components/ToolsStackSection";
import IdeStackSection from "./components/IdeStackSection";
import Marquee1 from "./components/Marquee1";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        {/* Glass Frame */}
        <div
          className="
        relative
        w-full
        max-w-[1400px]
        h-[90vh]
        md: h-[70vh]
        rounded-3xl
        overflow-hidden
        border border-white/10
        backdrop-blur-2xl
        bg-white/5
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      "
        >
          {/* Video */}
          <video
            src="/videos/rgb-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          {/* Content Layer */}
          <div className="relative -top-10 z-10">
            <Navbar />
            <div className="hidden md:block">
  <Contact />
</div>

         <section className="
 max-h-screen 
  px-6 lg:px-20 
  pt-24 md:pt-32
  flex
">

  <div className="
    max-w-7xl mx-auto w-full 
    grid lg:grid-cols-2 gap-16 
    items-center -mt-20
  ">

    {/* LEFT SIDE */}
   

    {/* RIGHT SIDE */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <LeftSide />
    </div>

     <div className="hidden md:block">
      <RightSide />
    </div>

  </div>
</section>
          </div>
        </div>
      </div>


      {/* ========= STACK SECTION ======================*/}
      <div className="relative overflow-hidden mb-1 pb-30">

  {/* 🌌 PARTICLES BACKGROUND */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Particles
particleColors={[
  "#ffffff",
  "#8b5cf6",
  "#3b82f6",
  "#06b6d4"
]}      particleCount={420}
      particleSpread={4}
      speed={0.1}
      particleBaseSize={120}
      moveParticlesOnHover
      alphaParticles
      disableRotation={false}
      pixelRatio={1}
    />
  </div>

  {/* 🌈 EXTRA GLOW */}
  <div
    className="
      absolute
      inset-0
      z-0

      bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]

      blur-[120px]
    "
  />

  {/* CONTENT */}
  <div className="relative z-10">

    <Marquee1 text={"FULL STACK DEVELOPER"} />

    <FrontendStackSection />
    <BackendStackSection />
    <DatabaseStackSection />
    <ToolsStackSection />
    <IdeStackSection />

  </div>
</div>
    
      {/* ========= EXPERIENCE SECTION ======================*/}
      <div className="max-w-screen">
       
        {/* <Marquee /> */}
         <Marquee1 text={"CAREER HISTORY"}/>
         <ExperienceSection />
          
      </div>

      {/* ========= Project SECTION ======================*/}
      <div className="max-w-screen">
       
        {/* <Marquee /> */}
         <Marquee1 text={"FEATURED BUILDS"}/>
         <ProjectsSection />
          
      </div>



      {/* ========= FOOTER SECTION ======================*/}
      <div className="max-w-screen mt-20">
       
        {/* <Marquee /> */}
         <Marquee1 text={"CONTACT BELOW"}/>
         <Footer />
          
      </div>
    </>
  );
}

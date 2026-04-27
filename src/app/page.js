import Contact from "./components/Contact";
import GlassStack from "./components/GlassStack";
import Terminal from "./components/Terminal";
import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";
import RightSide from "./components/RightSide";
import { Tech } from "./components/Tech";
import {motion} from "framer-motion";
import StackSection from "./components/FrontendStackSection";
import FrontendStackSection from "./components/FrontendStackSection";
import BackendStackSection from "./components/BackendStackSection";
import DatabaseStackSection from "./components/DatabaseStackSection";
import ToolsStackSection from "./components/ToolsStackSection";
import IdeStackSection from "./components/IdeStackSection";
import Marquee from "./components/Marquee";
import Marquee1 from "./components/Marquee1";
import SectionLabel from "./components/SectionLabel";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
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
      <div className="max-w-screen overflow-hidden mb-20">
       
        {/* <Marquee /> */}
         <Marquee1 text={"FULL STACK DEVELOPER"}/>
         
          <FrontendStackSection />
      <BackendStackSection />
      <DatabaseStackSection />
      <ToolsStackSection />
      <IdeStackSection />
     
      </div>
    
      {/* ========= EXPERIENCE SECTION ======================*/}
      <div className="max-w-screen">
       
        {/* <Marquee /> */}
         <Marquee1 text={"TATA CONSULTANCY SERVICES"}/>
         <ExperienceSection />
          
      </div>

      {/* ========= Project SECTION ======================*/}
      <div className="max-w-screen">
       
        {/* <Marquee /> */}
         <Marquee1 text={"NAMMA UDUPI"}/>
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

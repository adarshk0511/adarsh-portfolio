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
            <Contact />

            <section className="relative -top-20 z-10 min-h-screen flex items-center px-8 lg:px-20">
              <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                {/* LEFT SIDE */}
                <LeftSide />

                {/* RIGHT SIDE */}
                <RightSide />
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
    
      {/* ========= Experience SECTION ======================*/}
      <div className="max-w-screen">
       
        {/* <Marquee /> */}
         <Marquee1 text={"TATA CONSULTANCY SERVICES"}/>
         <ExperienceSection />
          
      </div>
    </>
  );
}

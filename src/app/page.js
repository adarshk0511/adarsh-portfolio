import Navbar from "./components/Navbar";

export default function Home() {
  return (
  <div className="min-h-screen bg-white p-2">
      
      {/* White Page Frame */}
      <div className="min-h-screen bg-white rounded-3xl overflow-hidden shadow-xl relative">
        
        <Navbar />

        {/* Hero Section */}
        <section className="max-h-screen overflow-hidden">

          {/* Video Background */}
          <video
            src="/videos/rgb-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-10"
          />

          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl font-bold">
            Your Hero Section
          </div>

        </section>

      </div>
    </div>
  );
}

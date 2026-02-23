
export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      <video
        src="/videos/rgb-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-5xl font-bold">
          Your Hero Section
        </h1>
      </div>

    </div>
  );
}

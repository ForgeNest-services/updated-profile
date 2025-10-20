import React from "react";

export default function Test() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Next Section
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          The journey continues with seamless transitions and engaging
          experiences
        </p>
      </div>
    </section>
  );
}

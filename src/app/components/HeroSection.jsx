import React from "react";

const HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `url('/assets/hero-img-desktop.webp')`,
  };
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={sectionStyle}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      {/* <!-- Overlay for better text visibility --> */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-4 animate-fade-in">
          ULTIMATE <span className="text-yellow-400">SALE</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 animate-fade-in delay-100">
          NEW COLLECTION
        </p>
        <a
          href="#shop"
          className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors animate-fade-in delay-200"
        >
          SHOP NOW
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

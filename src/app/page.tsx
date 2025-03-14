"use client";
import Image from "next/image";
import { FlipCountdown } from './components/clock'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrandDisplaySection />
      <DealOfTheMonth />
    </div>

  );
}

const HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `url('/assets/hero-img-desktop.webp')`,
  };
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={sectionStyle}>
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
  )
}

const BrandDisplaySection = () => {
  const brandSection = [
    {
      name: "Prada",
      image: "/assets/brands/brand-logo-1.webp",
    },
    {
      name: "Adidas",
      image: "/assets/brands/brand-logo-2.webp",
    },
    {
      name: "Puma",
      image: "/assets/brands/brand-logo-3.webp",
    },
    {
      name: "Reebok",
      image: "/assets/brands/brand-logo-4.webp",
    },
    {
      name: "Vans",
      image: "/assets/brands/brand-logo-5.webp",
    },
  ];
  return (
    <section className="container flex flex-row mx-auto py-12">
      {brandSection.map((brand) => (
        <div key={brand.name} className="flex items-center justify-center mx-2">
          <Image src={brand.image} alt={brand.name} width={200} height={40} loading="lazy" />
        </div>
      ))}
    </section>
  )
}

const DealOfTheMonth = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="volkhov-regular text-4xl font-bold text-gray-800 mb-4">Deals Of The Month</h2>
        <p className="text-gray-600 text-base mb-4 poppins-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Shop Now
        </button>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="poppins-medium text-2xl font-bold text-gray-800 mb-4">Hurry, Before It’s Too Late!</h2>
          <FlipCountdown
            type="countdown"
            to={"2025-03-30 00:00:00"}
          />
        </div>
      </div>
      <div></div>
    </section>
  )
}
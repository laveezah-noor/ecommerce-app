"use client";
import React, { useState } from "react";
import { Carousel, CarouselControl } from "./carousel";
import { FlipCountdown } from "./clock";

const DealOfTheMonth = () => {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/assets/clothes/image.svg",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slideData.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slideData.length ? 0 : next);
  };

  return (
    <section className="container flex flex-row mx-auto py-12">
      <div className="bg-white rounded-lg max-w-md">
        <h2 className="volkhov-regular text-4xl font-bold text-gray-800 mb-4">
          Deals Of The Month
        </h2>
        <p className="text-gray-600 text-base mb-4 poppins-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem.
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Shop Now
        </button>
        <div className="bg-white p-8 rounded-lg max-w-md mx-auto">
          <h2 className="poppins-medium text-2xl font-bold text-gray-800 mb-4">
            Hurry, Before It’s Too Late!
          </h2>
          <FlipCountdown type="countdown" to={"2025-03-30 00:00:00"} />
        </div>
      </div>
      <div className="overflow-hidden w-full h-full">
        <Carousel
          slides={slideData}
          current={current}
          setCurrent={setCurrent}
        />
        <div className="absolute flex items-center justify-center left-60 transform -translate-y-1/2 z-50">
          <CarouselControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />

          <CarouselControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>
    </section>
  );
};

export default DealOfTheMonth;

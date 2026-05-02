"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    video: "/videos/headerBackground_vid.mp4",
    title: "We make dream home a reality",
    desc: "Design your perfect living space with us.",
    btn: "Know More",
  },
  {
    video: "/videos/background2.mp4",
    title: "Modern Interior Design",
    desc: "Beautiful and minimal interiors for your home.",
    btn: "Explore",
  },
  {
    video: "/videos/background3.mp4",
    title: "Luxury Living Experience",
    desc: "Premium quality furniture and decor.",
    btn: "Get Started",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* Video */}
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-white text-3xl md:text-6xl font-bold mb-4">
              {slide.title}
            </h1>

            <p className="text-white text-sm md:text-lg mb-6 max-w-xl">
              {slide.desc}
            </p>

            <button
              className="text-white w-[120px] h-[50px] md:w-[120px] md:h-[50px] rounded-lg font-semibold text-base md:text-lg flex items-center justify-center transition transform hover:scale-105 shadow-xl"
              style={{
                background: "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
              }}
            >
              {slide.btn}
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-yellow-400" : "bg-white"
            }`}
          ></div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full z-20"
      >
        ◀
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full z-20"
      >
        ▶
      </button>
    </div>
  );
}

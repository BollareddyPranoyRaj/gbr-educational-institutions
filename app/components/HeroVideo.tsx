'use client';

import { useState, useEffect } from 'react';

const HERO_TEXTS = [
  "Nurturing Minds from Nursery to 10th Grade",
  "World-Class Fully Air-Conditioned Campus",
  "Expansive Green Spaces & Modern Labs",
  "Empowering the Leaders of Tomorrow"
];

export default function HeroVideo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HERO_TEXTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 pointer-events-none"
      >
        <source src="https://res.cloudinary.com/demo/video/upload/v1689798418/samples/sea-turtle.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-gray-300 mb-3 font-semibold">
          Welcome to Excellence
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white transition-all duration-500 ease-in-out">
          {HERO_TEXTS[index]}
        </h1>
      </div>
    </div>
  );
}
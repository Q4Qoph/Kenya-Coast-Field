import React, { useState, useEffect } from "react";

interface Slide {
  image: string;
  ctaLink: string;
  title: string;
}

const slides: Slide[] = [
  {
    image: "/assets/hero/hero-1.jpg",
    ctaLink: "/news",
    title: "Kenya Coast Field News & Announcements",
  },
  {
    image: "/assets/hero/hero-2.jpg",
    ctaLink: "/news",
    title: "KCF District Camp Meetings & Convocations",
  },
  {
    image: "/assets/hero/hero-3.jpg",
    ctaLink: "/giving",
    title: "KCF E-Giving & Faithful Stewardship",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[520px] bg-slate-950 overflow-hidden border-b border-slate-200">
      {/* Slides Container */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <a
            key={index}
            href={slide.ctaLink}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            title={slide.title}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </a>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition cursor-pointer hidden sm:block border border-white/10"
        aria-label="Previous Slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition cursor-pointer hidden sm:block border border-white/10"
        aria-label="Next Slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-xs">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            type="button"
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              index === current ? "bg-amber-400 w-6" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

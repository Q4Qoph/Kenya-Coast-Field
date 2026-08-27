import React, { useState, useEffect } from "react";

interface Slide {
  image: string;
  ctaLink: string;
  title: string;
}

const slides: Slide[] = [
  {
    image: "/assets/hero/one-voice-27.jpeg",
    ctaLink: "/news/one-voice-27-launch-2026",
    title: "One Voice 27: Mission For All - Official Fieldwide Launch",
  },
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

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] lg:h-[580px] bg-slate-950 overflow-hidden border-b border-slate-200"
      aria-label="Featured Announcements Carousel"
    >
      {/* Slides Container */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Ambient Blurred Background (Matches any aspect ratio's colors) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover blur-2xl scale-110 opacity-35"
              />
              <div className="absolute inset-0 bg-slate-950/40" />
            </div>

            {/* Foreground Clickable Banner: 100% Uncropped & Centered */}
            <a
              href={slide.ctaLink}
              className="relative z-10 w-full h-full flex items-center justify-center p-3 sm:p-5 md:p-6"
              title={slide.title}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="max-h-full max-w-full object-contain rounded-sm shadow-2xl drop-shadow-xl"
              />
            </a>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        type="button"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition cursor-pointer hidden sm:flex items-center justify-center border border-white/20 backdrop-blur-xs shadow-lg"
        aria-label="Previous Slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        type="button"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition cursor-pointer hidden sm:flex items-center justify-center border border-white/20 backdrop-blur-xs shadow-lg"
        aria-label="Next Slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/10 shadow-md">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            type="button"
            className={`h-2 rounded-full transition-all cursor-pointer ${
              index === current ? "bg-amber-400 w-6" : "bg-white/50 hover:bg-white/80 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

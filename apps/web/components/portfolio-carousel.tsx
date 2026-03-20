"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PortfolioCarousel({ portfolio }: { portfolio: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Give a 1px buffer for rounding errors
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by roughly one card width (320px) + gap (32px)
      const scrollAmount = direction === "left" ? -352 : 352;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-8 group/carousel">
      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="hide-scrollbar flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 scroll-smooth"
      >
        {portfolio.map((p) => (
          <div key={p.id} className="snap-start shrink-0 w-[240px] sm:w-[320px] group cursor-pointer">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-5">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex items-center justify-between mb-3 border-b border-black/10 pb-3">
              <p className="font-display text-xl uppercase tracking-widest">{p.title}</p>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 bg-gray-50 px-2 py-1">{p.tag}</span>
            </div>
            <p className="text-xs font-light leading-relaxed tracking-widest text-gray-500 line-clamp-2">{p.caption}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute top-[40%] -translate-y-1/2 -left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-xl transition-all hidden sm:flex ${canScrollLeft ? 'hover:bg-black hover:text-white cursor-pointer' : 'opacity-0 pointer-events-none'}`}
        aria-label="Scroll left"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <button 
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute top-[40%] -translate-y-1/2 -right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-xl transition-all hidden sm:flex ${canScrollRight ? 'hover:bg-black hover:text-white cursor-pointer' : 'opacity-0 pointer-events-none'}`}
        aria-label="Scroll right"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}

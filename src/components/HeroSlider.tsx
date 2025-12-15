import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Style & Grace",
    title: "Make your beautiful website with Fleur",
    cta: "Purchase",
  },
  {
    image: hero2,
    subtitle: "This is Beauty",
    title: "Designed with love & care, Fleur is all you ever wanted",
    cta: "Explore",
  },
  {
    image: hero3,
    subtitle: "Simply Charming",
    title: "Full of amazing templates and layouts",
    cta: "Discover",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1.1)" : "scale(1)",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-hero-overlay/40" />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <p
                className={cn(
                  "hero-subtitle mb-4 opacity-0",
                  index === currentSlide && "animate-fade-in-up"
                )}
                style={{ animationDelay: "0.3s" }}
              >
                {slide.subtitle}
              </p>
              <h1
                className={cn(
                  "hero-title mb-8 opacity-0",
                  index === currentSlide && "animate-fade-in-up"
                )}
                style={{ animationDelay: "0.6s" }}
              >
                {slide.title}
              </h1>
              <a
                href="#features"
                className={cn(
                  "inline-block px-10 py-4 border-2 border-primary-foreground text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-primary-foreground hover:text-header opacity-0",
                  index === currentSlide && "animate-fade-in-up"
                )}
                style={{ animationDelay: "0.9s" }}
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Counter */}
      <div className="absolute left-6 bottom-1/3 z-30 text-primary-foreground/70">
        <span className="text-2xl font-heading">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="mx-2">/</span>
        <span className="text-sm">{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}

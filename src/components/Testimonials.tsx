import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Nam nec tellus a odio tincidunt auctor a ornare odio. Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibhid elits sed odio sit amet nibh vulputate cursus a sit amet maorbi accumsan ipsum velit.",
    name: "Daniel Mitchell",
    company: "Google Analytics",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibhid elits sed odio sit amet nibh vulputate cursus a sit amet maorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
    name: "Raymond Myers",
    company: "Pingdom",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibhid elits sed odio sit amet nibh vulputate cursus a sit amet maorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
    name: "Nicole Burke",
    company: "Google Analytics",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Testimonials</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Content */}
          <div className="relative overflow-hidden min-h-[280px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-700 text-center px-4",
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                )}
              >
                <blockquote className="font-heading text-lg md:text-xl italic text-foreground/80 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <h4 className="font-heading text-xl text-foreground mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground tracking-wide">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentIndex ? "bg-foreground" : "bg-border"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

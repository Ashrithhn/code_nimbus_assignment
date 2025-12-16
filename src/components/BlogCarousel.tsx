import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

const posts = [
  {
    image: blog1,
    title: "Choose your style",
    category: "Decoration",
    date: "February 24, 2024",
    excerpt: "Proin gravida nibh vel velit auctor aliquet...",
  },
  {
    image: blog2,
    title: "Wedding lists",
    category: "Design",
    date: "March 24, 2024",
    excerpt: "Proin gravida nibh vel velit auctor aliquet...",
  },
  {
    image: blog3,
    title: "Something Special",
    category: "Planning",
    date: "April 24, 2024",
    excerpt: "Proin gravida nibh vel velit auctor aliquet...",
  },
  {
    image: blog4,
    title: "Connect your worlds",
    category: "Fashion",
    date: "January 24, 2024",
    excerpt: "Proin gravida nibh vel velit auctor aliquet...",
  },
];

// duplicate slides to avoid empty space
const slides = [...posts, ...posts];

export function BlogCarousel() {
  const [index, setIndex] = useState(0);

  const SLIDES_VISIBLE = 3;
  const TOTAL = posts.length;

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TOTAL);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % TOTAL);
  const prev = () => setIndex((prev) => (prev - 1 + TOTAL) % TOTAL);

  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">We're Sharing Everything</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetuer a gravida nibhumus.
          </p>
        </div>

        <div className="relative">

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 bg-background rounded-full shadow-md"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 bg-background rounded-full shadow-md"
          >
            <ChevronRight />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden px-12">

            {/* Track */}
            <motion.div
              className="flex gap-8"
              animate={{ x: `-${index * (100 / SLIDES_VISIBLE)}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ width: "200%" }} // duplicated slides
            >
              {slides.map((post, i) => (
                <article
                  key={i}
                  className="w-1/3 bg-background"
                >
                  <div className="aspect-[5/6] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl mb-3">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {post.category} · {post.date}
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

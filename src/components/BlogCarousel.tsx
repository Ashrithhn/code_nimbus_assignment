import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

const blogPosts = [
  {
    image: blog1,
    title: "Choose your style",
    category: "Decoration",
    date: "February 24, 2024",
    excerpt:
      "Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem...",
  },
  {
    image: blog2,
    title: "Wedding lists",
    category: "Design",
    date: "March 24, 2024",
    excerpt:
      "Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem...",
  },
  {
    image: blog3,
    title: "Something Special",
    category: "Planning",
    date: "April 24, 2024",
    excerpt:
      "Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem...",
  },
  {
    image: blog4,
    title: "Connect your worlds",
    category: "Fashion",
    date: "January 24, 2024",
    excerpt:
      "Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem...",
  },
];

export function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const visiblePosts = () => {
    const posts = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % blogPosts.length;
      posts.push({ ...blogPosts[index], originalIndex: index });
    }
    return posts;
  };

  return (
    <section id="blog" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">We're Sharing Everything</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetuer a gravida nibhumus vel velit auctor aliquet aenean sollicitudin lorem.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-background rounded-full shadow-md text-foreground hover:text-accent transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-background rounded-full shadow-md text-foreground hover:text-accent transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-8 md:px-12">
            {visiblePosts().map((post, index) => (
              <article
                key={`${post.originalIndex}-${index}`}
                className={cn(
                  "group bg-background card-hover",
                  index === 2 && "hidden md:block"
                )}
              >
                {/* Image */}
                <div className="image-zoom aspect-[5/6] relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <a href="#" className="hover:text-accent transition-colors">
                      {post.category}
                    </a>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const galleryImages = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
];

export const SimpleCleanSolutions = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">Simple and Clean Solutions</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="w-10 h-10 border border-foreground/50 flex items-center justify-center">
                  <span className="text-foreground text-2xl font-light">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center mt-12 font-heading text-xl lg:text-2xl italic text-muted-foreground">
          Less is definitely more.
        </p>
      </div>
    </section>
  );
};
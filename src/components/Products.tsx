import { Star, ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    image: product1,
    name: "Autumn Bouquet",
    price: 375,
    rating: 5,
  },
  {
    image: product2,
    name: "Cozy Armchair",
    price: 945,
    rating: 4.5,
  },
  {
    image: product3,
    name: "Forest Fairy",
    price: 188,
    rating: 3.5,
  },
  {
    image: product4,
    name: "Laced Dress",
    price: 2590,
    rating: 4.5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3 h-3 ${
            star <= rating
              ? "fill-gold text-gold"
              : star - 0.5 <= rating
              ? "fill-gold/50 text-gold"
              : "text-border"
          }`}
        />
      ))}
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Recommended Products</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group bg-background card-hover">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Quick Add Button */}
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-header text-header-foreground text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to cart
                </button>
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <StarRating rating={product.rating} />
                <h4 className="font-heading text-lg mt-2 mb-1 group-hover:text-accent transition-colors">
                  <a href="#">{product.name}</a>
                </h4>
                <p className="text-foreground font-medium">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#3d3845] text-header-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* About Us */}
          <div>
            <h3 className="font-heading text-xl mb-6 text-white">About Us</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, nam ut vero scribentur, mel veritus omnesque ei. Mutat labores mea ex, mei cu option indoctum, sumo errem partiendo ex cum.
            </p>
          </div>

          {/* Subscribe to Newsletter */}
          <div>
            <h3 className="font-heading text-xl mb-6 text-white">Subscribe to Our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Enter Your Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 pr-12 bg-transparent border-b border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors text-sm"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-3 text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo/Brand */}
            <div className="text-white font-heading text-2xl italic tracking-wide">
              fleur<span className="text-rose">~</span>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-8 items-center">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Home</a>
              <a href="#features" className="text-white/60 hover:text-white text-sm transition-colors duration-300">About</a>
              <a href="#portfolio" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Portfolio</a>
              <a href="#blog" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Blog</a>
              <a href="#team" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Contact</a>
            </nav>
            
            {/* Copyright */}
            <div className="text-white/50 text-sm text-center lg:text-right">
              Made with Ashrithn
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

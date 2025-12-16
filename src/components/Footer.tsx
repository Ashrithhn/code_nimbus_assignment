import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#3d3845] text-white">
      {/* MAIN FOOTER */}
      <div className="container mx-auto px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* ABOUT US */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">
              About Us
            </h4>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, nam ut vero scribentur, mel veritus
              omnesque ei. Mutat labores mea ex, mei cu option indoctum, sumo
              errem partiendo ex cum.
            </p>

            {/* Newsletter */}
            <h4 className="text-sm tracking-widest uppercase mt-12 mb-4">
              Subscribe to Our Newsletter
            </h4>

            <form onSubmit={handleSubmit} className="relative max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email*"
                className="w-full bg-transparent border-b border-white/30 py-2 pr-10 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2 text-white/60 hover:text-white transition"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* EMPTY CENTER COLUMN (INTENTIONAL) */}
          <div className="hidden md:block"></div>

          {/* INSTAGRAM (TITLE ONLY AS IN IMAGE) */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">
              Instagram
            </h4>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 bg-[#35303d]">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* LOGO AND NAVIGATION */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="font-heading italic text-xl tracking-wide">
                fleur<span className="text-white/60">~</span>
              </div>
              
              {/* NAV */}
              <nav className="flex gap-6 text-xs text-white/55">
                <a href="#" className="hover:text-white uppercase">Home</a>
                <a href="#" className="hover:text-white uppercase">About</a>
                <a href="#" className="hover:text-white uppercase">Portfolio</a>
                <a href="#" className="hover:text-white uppercase">Blog</a>
                <a href="#" className="hover:text-white uppercase">Contact</a>
              </nav>
            </div>

            {/* CREDIT */}
            <div className="text-xs text-white/45">
              Made with Ashrithn
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

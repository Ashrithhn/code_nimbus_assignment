import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-header text-header-foreground">
      {/* CTA Section */}
      <div className="border-b border-header-foreground/10">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Simple and Clean Solutions
          </h2>
          <p className="text-header-foreground/60 text-sm mb-8 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit.
          </p>
          <a
            href="#"
            className="inline-block px-10 py-4 border border-header-foreground/40 text-header-foreground text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-header-foreground hover:text-header"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Simplified Footer - Only links and copyright */}
      <div className="container mx-auto px-6 py-12">
        <div className="border-t border-header-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <nav className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
                <span className="text-2xl font-heading italic tracking-wide">
                  fleur<span className="text-rose">~</span>
                </span>
                <a href="#" className="text-header-foreground/60 hover:text-header-foreground text-sm transition-colors">Home</a>
                <a href="#features" className="text-header-foreground/60 hover:text-header-foreground text-sm transition-colors">About</a>
                <a href="#portfolio" className="text-header-foreground/60 hover:text-header-foreground text-sm transition-colors">Portfolio</a>
                <a href="#blog" className="text-header-foreground/60 hover:text-header-foreground text-sm transition-colors">Blog</a>
                <a href="#team" className="text-header-foreground/60 hover:text-header-foreground text-sm transition-colors">Contact</a>
              </nav>
            </div>
            <div className="text-header-foreground/50 text-sm">
              © 2017 Qode Interactive, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

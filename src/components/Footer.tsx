import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Team", href: "#team" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  services: [
    { name: "Design", href: "#" },
    { name: "Development", href: "#" },
    { name: "Marketing", href: "#" },
    { name: "Consulting", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#blog" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Shop", href: "#products" },
    { name: "FAQ", href: "#" },
  ],
};

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

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <a href="#" className="text-3xl font-heading italic tracking-wide mb-4 block">
              fleur<span className="text-rose">~</span>
            </a>
            <p className="text-header-foreground/60 text-sm leading-relaxed mb-6">
              Less is definitely more. Create beautiful experiences with Fleur.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center border border-header-foreground/20 rounded-full text-header-foreground/60 hover:text-header-foreground hover:border-header-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-header-foreground/80">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-header-foreground/60 text-sm hover:text-header-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-header-foreground/80">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-header-foreground/60 text-sm hover:text-header-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-header-foreground/80">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-header-foreground/60 text-sm hover:text-header-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-header-foreground/10 mt-12 pt-8 text-center">
          <p className="text-header-foreground/50 text-sm">
            © {new Date().getFullYear()} Fleur. All rights reserved. Made with love.
          </p>
        </div>
      </div>
    </footer>
  );
}

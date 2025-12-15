import { useState, useEffect } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Pages", href: "#features" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  { name: "Shop", href: "#products" },
  { name: "Elements", href: "#team" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-header shadow-lg py-3"
          : "bg-header/95 py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-header-foreground font-heading text-3xl italic tracking-wide">
          fleur<span className="text-rose">~</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-header-foreground/90 hover:text-header-foreground"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <button className="relative text-header-foreground/90 hover:text-header-foreground transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-rose text-[10px] rounded-full flex items-center justify-center text-header-foreground">
              0
            </span>
          </button>
          <button className="text-header-foreground/90 hover:text-header-foreground transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="lg:hidden text-header-foreground/90 hover:text-header-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-header overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        <nav className="container mx-auto px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-header-foreground/90 hover:text-header-foreground py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

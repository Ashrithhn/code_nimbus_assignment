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
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={cn(
          "font-heading text-3xl italic tracking-wide transition-colors",
          isScrolled ? "text-foreground" : "text-header-foreground"
        )}>
          fleur<span className="text-rose">~</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "nav-link transition-colors",
                isScrolled 
                  ? "text-foreground/70 hover:text-foreground" 
                  : "text-header-foreground/90 hover:text-header-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <button className={cn(
            "relative transition-colors",
            isScrolled 
              ? "text-foreground/70 hover:text-foreground" 
              : "text-header-foreground/90 hover:text-header-foreground"
          )}>
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-rose text-[10px] rounded-full flex items-center justify-center text-white">
              0
            </span>
          </button>
          <button className={cn(
            "transition-colors hidden sm:block",
            isScrolled 
              ? "text-foreground/70 hover:text-foreground" 
              : "text-header-foreground/90 hover:text-header-foreground"
          )}>
            <Search className="w-5 h-5" />
          </button>
          <button className={cn(
            "transition-colors hidden lg:block",
            isScrolled 
              ? "text-foreground/70 hover:text-foreground" 
              : "text-header-foreground/90 hover:text-header-foreground"
          )}>
            <Menu className="w-5 h-5" />
          </button>
          <button
            className={cn(
              "lg:hidden transition-colors",
              isScrolled 
                ? "text-foreground/70 hover:text-foreground" 
                : "text-header-foreground/90 hover:text-header-foreground"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300",
          isScrolled ? "bg-white" : "bg-header",
          isMobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        <nav className="container mx-auto px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "nav-link py-2 transition-colors",
                isScrolled 
                  ? "text-foreground/70 hover:text-foreground" 
                  : "text-header-foreground/90 hover:text-header-foreground"
              )}
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

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed right-6 bottom-8 z-50
                 w-12 h-12
                 bg-[#5b5861]
                 text-white
                 flex items-center justify-center
                 shadow-md
                 hover:bg-[#4a4750]
                 transition-all duration-300"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}

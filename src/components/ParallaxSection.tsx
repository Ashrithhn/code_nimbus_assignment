import { useEffect, useState } from "react";

interface ParallaxSectionProps {
  image: string;
  height?: number;
  speed?: number;
}

export function ParallaxSection({ 
  image, 
  height = 420, 
  speed = 0.3 
}: ParallaxSectionProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <section
      className="w-full bg-cover bg-center"
      style={{
        height: `${height}px`,
        backgroundImage: `url(${image})`,
        backgroundPosition: `50% ${-offset}px`,
      }}
    />
  );
}

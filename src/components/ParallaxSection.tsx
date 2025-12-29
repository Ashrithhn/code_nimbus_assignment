import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ParallaxSectionProps {
  image: string;
  height?: number;
  speed?: number;
  depth?: number;
  children?: React.ReactNode;
}

export function ParallaxSection({ 
  image, 
  height = 420, 
  speed = 0.15,
  depth = 0.5,
  children
}: ParallaxSectionProps) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setOffset(scrollPosition * speed);
      
      // Add 3D effect to container
      if (containerRef.current) {
        const rotateX = (scrollPosition / 10) % 10;
        const rotateY = (scrollPosition / 15) % 10;
        containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <section className="relative w-full overflow-hidden">
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out"
        style={{
          height: `${height}px`,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: `50% ${-offset * depth}px`,
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        {children}
      </div>
    </section>
  );
}

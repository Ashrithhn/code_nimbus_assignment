import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollAnimatedProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "fadeIn" | "slideInUp" | "slideInLeft" | "slideInRight" | "zoomIn";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function ScrollAnimated({
  children,
  className = "",
  animationType = "fadeIn",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}: ScrollAnimatedProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: true,
  });

  // Define animation variants
  const getVariants = () => {
    switch (animationType) {
      case "slideInUp":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration, delay } },
        };
      case "slideInLeft":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration, delay } },
        };
      case "slideInRight":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration, delay } },
        };
      case "zoomIn":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay } },
        };
      case "fadeIn":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        };
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getVariants()}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
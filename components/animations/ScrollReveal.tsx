"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  viewportAmount?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  viewportAmount = 0.2,
}: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: directionOffset[direction].x,
        y: directionOffset[direction].y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1], // cubic-bezier for smooth easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

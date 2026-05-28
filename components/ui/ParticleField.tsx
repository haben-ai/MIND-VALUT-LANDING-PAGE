"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "node" | "star";
}

export const ParticleField: React.FC = () => {
  const [elements, setElements] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate both green floating nodes and twinkling white space stars
    // This is generated purely client-side to prevent Next.js hydration conflicts.
    const nodes: Particle[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 3) + 2.5, // 2.5px to 5px
      top: Math.floor(Math.random() * 90) + 5,
      left: Math.floor(Math.random() * 90) + 5,
      duration: Math.random() * 5 + 4, // 4s to 9s
      delay: Math.random() * 4,
      opacity: Math.random() * 0.3 + 0.15, // 0.15 to 0.45 opacity
      type: "node",
    }));

    const stars: Particle[] = Array.from({ length: 28 }).map((_, i) => ({
      id: i + 100, // offset id
      size: Math.random() * 1.5 + 1.0, // 1px to 2.5px
      top: Math.floor(Math.random() * 95) + 2,
      left: Math.floor(Math.random() * 95) + 2,
      duration: Math.random() * 4 + 3, // 3s to 7s
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.2, // 0.2 to 0.8 opacity
      type: "star",
    }));

    setElements([...nodes, ...stars]);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => {
        if (el.type === "node") {
          return (
            <motion.div
              key={el.id}
              animate={{
                y: [0, -24, 0],
                opacity: [el.opacity, el.opacity * 2 > 0.85 ? 0.85 : el.opacity * 2, el.opacity],
              }}
              transition={{
                duration: el.duration,
                delay: el.delay,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="absolute rounded-full bg-forest-accent"
              style={{
                width: el.size,
                height: el.size,
                top: `${el.top}%`,
                left: `${el.left}%`,
                boxShadow: "0 0 10px rgba(61,153,112,0.5)",
              }}
            />
          );
        } else {
          // Sparkle-like Twinkling Star (Visual Effect: Star Field)
          return (
            <motion.div
              key={el.id}
              animate={{
                opacity: [el.opacity * 0.3, el.opacity, el.opacity * 0.3],
                scale: [0.75, 1.25, 0.75],
                y: [0, -6, 0], // subtle space drift
              }}
              transition={{
                duration: el.duration,
                delay: el.delay,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="absolute rounded-full bg-white dark:bg-white/80"
              style={{
                width: el.size,
                height: el.size,
                top: `${el.top}%`,
                left: `${el.left}%`,
                boxShadow: "0 0 6px rgba(255,255,255,0.7)",
              }}
            />
          );
        }
      })}
    </div>
  );
};

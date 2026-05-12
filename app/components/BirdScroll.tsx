"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const BIRDS = [
  { x: -50, y: 0,  delay: 0    },
  { x:  50, y: 0,  delay: 0.22 },
  { x: -25, y: 22, delay: 0.11 },
  { x:  25, y: 22, delay: 0.33 },
  { x:   0, y: 44, delay: 0.17 },
];

const FLAP = [
  "M 0,12 Q 11,2 22,10 Q 33,2 44,12",
  "M 0,10 Q 11,-7 22,5 Q 33,-7 44,10",
  "M 0,12 Q 11,2 22,10 Q 33,2 44,12",
  "M 0,14 Q 11,15 22,12 Q 33,15 44,14",
  "M 0,12 Q 11,2 22,10 Q 33,2 44,12",
];

export default function BirdScroll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      ref.current.style.opacity = String(Math.max(0, 1 - window.scrollY / 130));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      style={{ marginTop: "3.5rem", transition: "opacity 0.2s ease" }}
    >
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "relative", width: "144px", height: "72px" }}
      >
        {BIRDS.map((bird, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(50% + ${bird.x}px - 22px)`,
              top: bird.y,
            }}
          >
            <svg width="44" height="22" viewBox="0 0 44 22" fill="none">
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="var(--text-primary)"
                strokeWidth="1.8"
                fill="none"
                animate={{ d: FLAP }}
                transition={{
                  duration: 1.05,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: bird.delay,
                }}
              />
            </svg>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

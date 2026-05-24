"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[200] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 pointer-events-none"
    />
  );
}

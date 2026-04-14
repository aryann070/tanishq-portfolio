"use client";
import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0.5 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }} // 👈 runs after load
      transition={{
        duration: 0.6,
        delay: delay, // ⏱ delay after page load
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
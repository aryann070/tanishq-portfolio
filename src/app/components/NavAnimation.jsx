"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Reveal({ children, className = "" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -30 }} // 👈 start from top
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,  // 👈 quick stagger
      delayChildren: 0.2,     // 👈 small delay
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 }, // 👈 subtle bottom start
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,          // 👈 fast
      ease: [0.22, 1, 0.36, 1], // 👈 smooth easing (important)
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-start pt-16 bg-gradient-to-r from-[#0b1a3a] via-[#07122b] to-[#030814] text-white px-6 md:px-16 lg:px-24">

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl mx-auto"
      >

        {/* Badge */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-block px-5 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-sm text-blue-200">
            Active Candidate for PhD Positions in HCI & Human-AI Collaboration
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-snug md:leading-tight break-words"
        >
          Designing the Future of{" "}

          <span className="block bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Human-System
          </span>

          <span className="block bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">
            Interaction
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-gray-300 text-xl leading-relaxed"
        >
          Currently, I bridge the gap between complex aerospace technologies and human
          intuition. Currently researching Human Factors at{" "}
          <span className="font-semibold text-white">
            DLR (German Aerospace Center)
          </span>.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="mt-8 flex gap-4">
          <Link href="/projects">
            <button className="group px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition flex items-center gap-2">
              View Work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </Link>

          <button className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition">
            Get in Touch
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}
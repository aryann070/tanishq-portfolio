"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-gradient-to-r from-[#0b1a3a] via-[#07122b] to-[#030814]">
      
      <div className="w-full px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-semibold text-blue-400">
          Portfolio<span className="text-white">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-white font-medium">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>

          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-6 text-white font-medium bg-[#030814]">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold w-fit">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}
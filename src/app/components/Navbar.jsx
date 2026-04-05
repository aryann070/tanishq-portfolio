"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isProjectsPage = pathname.startsWith("/projects");
  const isActive = (path) => {
    if (path === "/projects") return pathname.startsWith("/projects");
    return pathname === path;
  };

  return (
    <nav
      className={`sticky top-0 w-full z-50 ${isProjectsPage
        ? "bg-gray-200"
        : "bg-gradient-to-r from-[#0b1a3a] via-[#07122b] to-[#030814]"
        }`}
    >
      <div className="w-full px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1
            className={`text-xl font-semibold ${isProjectsPage ? "text-blue-600" : "text-blue-400"
              }`}
          >
            Portfolio
            <span className={isProjectsPage ? "text-black" : "text-white"}>
              .
            </span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center gap-12 font-medium ${isProjectsPage ? "text-gray-600" : "text-white"
            }`}
        >
          <Link
            href="/"
            className={`transition ${isProjectsPage
              ? isActive("/")
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
              : "hover:text-gray-300 text-white"
              }`}
          >
            Home
          </Link>

          <Link
            href="/projects"
            className={`transition ${isProjectsPage
              ? isActive("/projects")
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
              : "hover:text-gray-300 text-white"
              }`}
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className={`transition ${isProjectsPage
              ? "text-gray-600 hover:text-blue-500"
              : "hover:text-gray-300 text-white"
              }`}
          >
            Contact
          </Link>

          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${isProjectsPage
              ? "bg-white text-black shadow-sm"
              : "bg-white text-black hover:scale-105"
              }`}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isProjectsPage ? "text-black" : "text-white"
            }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden px-6 pb-6 flex flex-col gap-6 font-medium ${isProjectsPage ? "bg-gray-200 text-black" : "bg-[#030814] text-white"
            }`}
        >
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
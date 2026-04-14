"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Reveal from "./Reveal";

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
      className={`sticky top-0 w-full z-50 backdrop-blur-md ${isProjectsPage
          ? "bg-gray-200/90"
          : "bg-gradient-to-r from-[#0b1a3a]/90 via-[#07122b]/90 to-[#030814]/90"
        } shadow-sm`}
    >
      <Reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-2 lg:pr-8 py-4 flex items-center justify-between">

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
          className={`hidden md:flex items-center gap-10 font-medium ${isProjectsPage ? "text-gray-600" : "text-white"
            }`}
        >
          <Link
            href="/"
            className={`transition ${isProjectsPage
                ? isActive("/")
                  ? "text-blue-600"
                  : "hover:text-blue-500"
                : "hover:text-gray-300"
              }`}
          >
            Home
          </Link>

          <Link
            href="/projects"
            className={`transition ${isProjectsPage
                ? isActive("/projects")
                  ? "text-blue-600"
                  : "hover:text-blue-500"
                : "hover:text-gray-300"
              }`}
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className="transition hover:text-blue-500"
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
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
        
      </div>
        </Reveal>
      

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div
          className={`px-4 sm:px-6 pb-6 pt-2 flex flex-col gap-5 font-medium ${isProjectsPage
              ? "bg-gray-200 text-black"
              : "bg-[#030814] text-white"
            }`}
        >
          <Link href="/" onClick={() => setOpen(false)} className="py-1">
            Home
          </Link>

          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="py-1"
          >
            Projects
          </Link>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="py-1"
          >
            Contact
          </Link>

          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold w-fit mt-2">
            Hire Me
          </button>
        </div>
      </div>
    </nav>

  );
}
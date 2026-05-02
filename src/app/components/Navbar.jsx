"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import NavAnimation from "./NavAnimation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isProjectsPage = pathname.startsWith("/projects");

  const isActive = (path) => {
    if (path === "/projects") return pathname.startsWith("/projects");
    return pathname === path;
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <nav
      className={`sticky top-0 w-full z-50 backdrop-blur-md ${isProjectsPage
        ? "bg-[#F8FAFC]"
        : "bg-gradient-to-r from-[#0b1a3a]/90 via-[#07122b]/90 to-[#030814]/90"
        }`}
    >
      <NavAnimation>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-2 lg:pr-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1
              className={`text-lg font-bold ${isProjectsPage ? "text-[#155DFC]" : "text-blue-400"
                }`}
            >
              Portfolio
              <span className={isProjectsPage ? "text-black" : "text-white"}>
                {" "}.
              </span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center gap-10 font-medium ${isProjectsPage ? "text-[#CAD5E2]" : "text-white"
              }`}
          >
            <Link
              href="/"
              className={`transition ${isProjectsPage
                ? isActive("/")
                  ? "text-[#155DFC]"
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
                  ? "text-[#155DFC]"
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

            <Link
              href="/#experience"
              className={`px-6 py-2 rounded-full font-semibold transition ${isProjectsPage
                ? "bg-white text-black shadow-sm"
                : "bg-white text-black hover:scale-105"
                }`}
            >
              Resume
            </Link>
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


      </NavAnimation>
      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div
          className={`px-4 sm:px-6 pb-10 pt-6 flex flex-col items-center justify-center gap-8 font-medium ${isProjectsPage
            ? "bg-white text-black"
            : "bg-gradient-to-r from-[#0b1a3a]/90 via-[#07122b]/90 to-[#030814]/90 text-white"
            }`}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-xl"
          >
            Home
          </Link>

          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="text-xl"
          >
            Projects
          </Link>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-xl"
          >
            Contact
          </Link>

          <Link
            href="#experience"
            onClick={() => setOpen(false)}
            className="mt-6 bg-gray-200 text-black px-12 py-4 rounded-full font-semibold text-lg shadow-md"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
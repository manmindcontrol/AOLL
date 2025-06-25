"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-[80px] z-50  text-purple-600 flex items-center px-6 md:px-16 text-4xl font-bold backdrop-blur-sm ">
      {/* Logo */}
      <Link
        href="/#hero"
        className="flex items-center gap-1 w-full md:w-fit transition duration-200 transform hover:scale-110"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap md:inline font-bold text-fuchsia-200 transition-transform duration-300 transform hover:scale-110">
          Art of Lasting Love
        </h1>
      </Link>

      {/* Desktop Social Links */}
      <div className="ml-auto hidden md:flex items-center gap-5 text-3xl">
        <Link
          href="#about"
          className="hover:text-cyan-500 transition duration-200 transform hover:scale-110"
        >
          <h1 className="text-lg sm:text-xl lg:text-2xl whitespace-nowrap md:inline font-bold text-fuchsia-200">
            About
          </h1>
        </Link>
        <Link
          href="#features"
          className="hover:text-cyan-500 transition duration-200 transform hover:scale-110"
        >
          <h1 className="text-lg sm:text-xl lg:text-2xl whitespace-nowrap md:inline font-bold text-fuchsia-200">
            Features
          </h1>
        </Link>
        <Link
          href="#testimonials"
          className="hover:text-cyan-500 transition duration-200 transform hover:scale-110"
        >
          <h1 className="text-lg sm:text-xl lg:text-2xl whitespace-nowrap md:inline font-bold text-fuchsia-200">
            Reviews
          </h1>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] right-5 w-2/4 flex flex-col items-center py-4 space-y-4 md:hidden bg-fuchsia-200 outline-1 outline-slate-600  opacity-70  rounded-lg shadow-xl backdrop-blur-sm ">
          <Link
            href="#about"
            className="hover:text-cyan-500 transition duration-200"
          >
            <h1 className="text-lg sm:text-xl lg:text-2xl whitespace-nowrap md:inline font-bold text-black transition-transform duration-300 transform hover:scale-110">
              About
            </h1>
          </Link>
          <Link
            href="#features"
            className="hover:text-cyan-500 transition duration-200"
          >
            <h1 className="text-lg sm:text-xl lg:text-2xl whitespace-nowrap md:inline font-bold text-black transition-transform duration-300 transform hover:scale-110">
              Features
            </h1>
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-cyan-500 transition duration-200"
          >
            <h1 className="text-lg sm:text-xl lg:text-2xl whitespace-nowrap md:inline font-bold text-black transition-transform duration-300 transform hover:scale-110">
              Reviews
            </h1>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

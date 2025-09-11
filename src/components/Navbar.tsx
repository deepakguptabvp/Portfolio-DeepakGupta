"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-200 dark:bg-gray-900/80 backdrop-blur-sm z-50 transition-colors duration-300 shadow-xl">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-3xl bg-gradient-to-r from-blue-800 to-slate-300 bg-clip-text text-transparent">
            <Link href={"#"}>Portfolio</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={"#home"} className="nav-link">
              Home
            </Link>
            <Link href={"#projects"} className="nav-link">
              Projects
            </Link>
            <Link href={"#skills"} className="nav-link">
              Skills
            </Link>
            <Link href={"#about"} className="nav-link">
              About
            </Link>
            <Link href={"#contact"} className="nav-link">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
              title="Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href={"#home"} className="mobile-nav-link">
            Home
          </Link>
          <Link href={"#projects"} className="mobile-nav-link">
            Projects
          </Link>
          <Link href={"#skills"} className="mobile-nav-link">
            Skills
          </Link>
          <Link href={"#about"} className="mobile-nav-link">
            About
          </Link>
          <Link href={"#contact"} className="mobile-nav-link">
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="w-full text-left px-3 py-2 mobile-nav-link"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

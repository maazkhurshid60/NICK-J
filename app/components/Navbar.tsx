"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Experience",     href: "#experience" },
  { label: "Specializations",href: "#specializations" },
  { label: "Contact",        href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b1f4a]/98 backdrop-blur-sm shadow-lg" : "bg-white/90 backdrop-blur-sm border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-0.5">
          <span
            className="text-lg font-bold tracking-tight transition-colors duration-300"
            style={{ fontFamily: "var(--font-heading)", color: scrolled ? "#fff" : "var(--color-dark)" }}
          >
            NJ
          </span>
          <span className="w-1.5 h-1.5 rounded-full ml-0.5" style={{ background: "var(--color-yellow)" }} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200 relative group"
              style={{ color: scrolled ? "rgba(255,255,255,0.6)" : "var(--color-gray)" }}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ background: "var(--color-yellow)" }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
          style={{
            background: "var(--color-yellow)",
            color: "var(--color-dark)",
            fontFamily: "var(--font-heading)",
          }}
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-6 transition-all duration-300 ${
                i === 0 && menuOpen ? "rotate-45 translate-y-2" :
                i === 1 && menuOpen ? "opacity-0" :
                i === 2 && menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ background: scrolled ? "#fff" : "var(--color-dark)" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--color-dark)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-white/80 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold mt-2"
                style={{ background: "var(--color-yellow)", color: "var(--color-dark)" }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

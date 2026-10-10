"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Programs", href: "#pathways" },
  { name: "Timings", href: "#schedule" },
  { name: "Pricing", href: "#pricing" },
  { name: "Instructors", href: "#instructors" },
  { name: "Reviews", href: "#reviews" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const WHATSAPP_NUMBER = "919105837321";
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Xanso Fitness! I want to join the female-only live yoga batches."
  )}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <nav
        className={`w-full px-6 sm:px-10 lg:px-16 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-forest-deep/90 backdrop-blur-xl border-b border-white/10 shadow-elevated"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Brand Logo from Figma */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 focus:outline-none"
          >
            <span className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-white hover:text-lime-accent transition-colors">
              Xanso.Fitness
            </span>
          </Link>

          {/* Center: Desktop Navigation links exactly matching Figma */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-normal text-white/90 hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </Link>
            ))}
          </div>

          {/* Right: WhatsApp pill button on scroll, or subtle action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-sans font-medium text-white bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 transition-all duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-white bg-black/25 backdrop-blur-md border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-forest-deep/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 shadow-elevated"
          >
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-medium text-white/90 hover:text-lime-accent py-2 transition-colors border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-sans font-semibold text-lime-text bg-lime-accent shadow-soft"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Start on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

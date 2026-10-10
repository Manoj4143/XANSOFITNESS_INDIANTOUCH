"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "Programs", href: "/#pathways" },
  { name: "Batch Timings", href: "/#schedule" },
  { name: "Instructors", href: "/#instructors" },
  { name: "Why Xanso", href: "/#why-us" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Blog", href: "/#blogs" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [bannerVisible, setBannerVisible] = React.useState(true);
  const WHATSAPP_NUMBER = "919105837321";
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Xanso Fitness! I want to claim the extra 10% discount on your live yoga & fitness plans."
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Special Offer Announcement Bar (with Close button & Mobile responsive wrapping) */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            initial={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.25 }}
            className="relative bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white py-2 px-3 sm:px-4 pr-10 text-[11px] sm:text-xs font-sans font-medium shadow-xs"
          >
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center text-center gap-x-2 gap-y-1">
              <span className="inline-flex items-center gap-1.5 justify-center">
                <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 flex-shrink-0" />
                <span>
                  <strong className="text-amber-300">Special Community Offer:</strong> Extra 10% OFF all live batches + Free Personalized Diet Plan!
                </span>
              </span>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-amber-200 font-semibold inline-flex items-center gap-1 whitespace-nowrap ml-1"
              >
                <span>WhatsApp: +91 91058 37321</span>
                <MessageCircle className="w-3 h-3 fill-current flex-shrink-0" />
              </a>
            </div>

            {/* Close Button with generous touch target */}
            <button
              type="button"
              onClick={() => setBannerVisible(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-black/20 text-white/90 hover:text-white transition-colors cursor-pointer focus:outline-none"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation Bar */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 h-16 sm:h-20">
          {/* Left: Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 sm:gap-2 focus:outline-none"
          >
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-text-main group-hover:text-primary transition-colors">
              Xanso<span className="text-primary font-serif">.</span>
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-bold px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              Fitness
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-text-muted hover:text-text-main transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              href="#pricing"
              className="shadow-soft"
            >
              <span>Join Live Batch</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text-muted hover:text-text-main focus:outline-none flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background px-6 py-6 shadow-card"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-medium text-text-main hover:text-primary transition-colors py-1 border-b border-border/40"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-emerald-600 text-white text-xs font-sans font-semibold"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp: +91 91058 37321</span>
                </a>

                <Button
                  variant="primary"
                  size="md"
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center"
                >
                  Claim 10% Extra Discount
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

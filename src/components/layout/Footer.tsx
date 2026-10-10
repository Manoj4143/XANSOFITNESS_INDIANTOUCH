"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

const FOOTER_COLUMNS = [
  {
    title: "Programs & Batches",
    links: [
      { name: "Group Yoga Sessions (Zoom)", href: "/#pathways" },
      { name: "1:1 Transformation Plans", href: "/#pathways" },
      { name: "Corporate Wellness Batches", href: "/#pathways" },
      { name: "7-Day Face Yoga Masterclass", href: "/#pathways" },
      { name: "Daily Batch Timings (IST)", href: "/#schedule" },
    ],
  },
  {
    title: "Memberships & Pricing",
    links: [
      { name: "2 Months Plan (₹1,799 / Save 10%)", href: "/#pricing" },
      { name: "3 Months Popular (₹2,609 / Save 10%)", href: "/#pricing" },
      { name: "6 Months Immersion (₹4,409 / Save 10%)", href: "/#pricing" },
      { name: "Free Customized Diet Plan", href: "/#pricing" },
      { name: "Membership Transfer Policy", href: "/#faq" },
    ],
  },
  {
    title: "Certified Instructors",
    links: [
      { name: "Neelam Rana (04:30 & 05:30 PM)", href: "/#instructors" },
      { name: "Muskaan Wahi (09:00 AM & 07:30 PM)", href: "/#instructors" },
      { name: "Apeksha Chauhan (05:30 & 07:00 AM)", href: "/#instructors" },
      { name: "Navya Gupta (08:00 AM & 06:30 PM)", href: "/#instructors" },
      { name: "Verified Google Reviews (4.9/5)", href: "/#reviews" },
    ],
  },
  {
    title: "Community & Support",
    links: [
      { name: "Chat on WhatsApp (+91 91058 37321)", href: "https://wa.me/919105837321" },
      { name: "Instagram (@xanso_yoga)", href: "https://www.instagram.com/xanso_yoga" },
      { name: "Facebook Community", href: "https://www.facebook.com/profile.php?id=100091960338360" },
      { name: "YouTube Channel (@xansofitness)", href: "https://www.youtube.com/@xansofitness" },
      { name: "Expert Blogs & Lifestyle Guides", href: "/#blogs" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);
  const WHATSAPP_NUMBER = "919105837321";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="w-full bg-surfaceVariant text-text-main border-t border-border/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-border">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                Xanso<span className="text-primary font-serif">.</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                Fitness
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed max-w-sm">
              Online fitness classes via Zoom. Live interactive group yoga, female-only batches, personalized Indian diet plans, and 1:1 WhatsApp support.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi Xanso Fitness! I want to join your live yoga batch and claim 10% discount."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-soft transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp: +91 91058 37321</span>
              </a>
            </div>
          </div>

          {/* Newsletter / Diet Plan Signup */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                Free Indian Nutrition Guide
              </span>
              <h4 className="font-display text-lg font-medium text-text-main">
                Receive Our Weekly Ayurvedic Diet &amp; Yoga Protocol
              </h4>
              <p className="font-sans text-xs text-text-muted leading-relaxed">
                Join 10,000+ members getting weekly immunity tips, desk posture routines, and healthy Indian kitchen swaps.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Namaste! You are subscribed. Check your inbox for the welcome diet plan.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 pt-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <Button variant="primary" size="md" type="submit">
                    Subscribe Free
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-border text-xs sm:text-sm">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-3">
              <h5 className="font-display text-sm font-semibold uppercase tracking-wider text-text-main">
                {column.title}
              </h5>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-primary transition-colors block py-0.5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal, Social & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-text-muted">
          <div>
            &copy; 2025 Proprietor Xanso Fitness || Trademark Xanso Fitness. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/#faq" className="hover:text-text-main transition-colors">
              FAQ
            </Link>
            <span>&bull;</span>
            <Link href="/#contact" className="hover:text-text-main transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/#contact" className="hover:text-text-main transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <a
              href="https://www.instagram.com/xanso_yoga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Instagram
            </a>
            <span>&bull;</span>
            <a
              href="https://www.youtube.com/@xansofitness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

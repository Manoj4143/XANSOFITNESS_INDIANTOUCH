"use client";

import * as React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ThreeWaysToTrain() {
  const WHATSAPP_NUMBER = "919105837321";
  const corporateWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Xanso Fitness! I want to enquire about Corporate Wellness sessions for our team."
  )}`;
  const transformationWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Xanso Fitness! I want to begin a 1:1 Transformation Plan."
  )}`;

  return (
    <section id="pathways" className="py-24 md:py-36 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: The Form Collective Editorial Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[480px] lg:min-h-[580px] group shadow-card"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/form-collective.jpg"
            alt="The Form Collective - Purpose Driven Physical Therapy"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Editorial Typography Overlay */}
          <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between text-white">
            <div className="space-y-1">
              <span className="font-display italic text-2xl sm:text-3xl font-light tracking-wide text-white/90">
                The
              </span>
              <h3 className="font-sans font-bold text-3xl sm:text-4xl tracking-tight leading-none">
                FORM
                <br />
                COLLECTIVE
              </h3>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-white/80">
                PURPOSE-DRIVEN PHYSICAL THERAPY BY STUDIO ELEVATE
              </p>
              <p className="text-xs text-white/70 max-w-xs font-sans leading-relaxed">
                Sculpting alignment, restoring joint decompression, and cultivating mindful strength through precision movement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Three Ways to Train Pathways */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="lg:col-span-7 flex flex-col justify-between space-y-8"
        >
          {/* Header */}
          <div className="space-y-3">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl font-medium tracking-tight text-forest-deep leading-tight">
              Three ways to train with us
            </h2>
            <p className="font-sans text-base sm:text-lg text-muted-gray max-w-xl">
              Pick the pathway that fits your life, not the other way around.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* 1. Group Yoga Card */}
            <div className="bg-neutral-surface rounded-3xl p-7 flex flex-col justify-between space-y-6 hover:shadow-card transition-all duration-300">
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-semibold text-charcoal">
                  Group Yoga
                </h3>
                <p className="font-sans text-sm text-muted-gray leading-relaxed">
                  Daily interactive zoom batches with certified instructors. Morning and evening slots.
                </p>
              </div>

              <div>
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-charcoal hover:text-primary transition-colors group"
                >
                  <span className="underline underline-offset-4">Explore schedule</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* 2. Transformation Card (Lime Accent) */}
            <div className="bg-lime-accent rounded-3xl p-7 flex flex-col justify-between space-y-6 hover:shadow-card transition-all duration-300">
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-semibold text-lime-text">
                  Transformation
                </h3>
                <p className="font-sans text-sm text-lime-text/90 leading-relaxed">
                  Custom plan for your body, dedicated 1:1 guidance, and real-time form checks when you need it.
                </p>
              </div>

              <div>
                <a
                  href={transformationWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-lime-text hover:text-black transition-colors group"
                >
                  <span className="underline underline-offset-4">Begin 1:1</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* 3. Corporate Sessions Card (Spans 2 columns on tablet/desktop) */}
            <div className="sm:col-span-2 bg-neutral-surface rounded-3xl p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 hover:shadow-card transition-all duration-300">
              <div className="space-y-2 max-w-lg">
                <h3 className="font-display text-2xl font-semibold text-charcoal">
                  Corporate Sessions
                </h3>
                <p className="font-sans text-sm text-muted-gray leading-relaxed">
                  Wellness sessions for your team designed to boost focus, posture, and energy across every department.
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href={corporateWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-charcoal hover:text-primary transition-colors group"
                >
                  <span className="underline underline-offset-4">Enquire your team</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

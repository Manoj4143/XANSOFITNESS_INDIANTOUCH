"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

const MORNING_SCHEDULE = [
  { time: "6:00 AM", name: "Brahma Muhurta Flow", instructor: "Apeksha" },
  { time: "7:00 AM", name: "Classical Hatha", instructor: "Apeksha" },
  { time: "8:00 AM", name: "Strength & Alignment", instructor: "Navya" },
  { time: "9:00 AM", name: "Gentle Flow & Breath", instructor: "Muskaan" },
];

const EVENING_SCHEDULE = [
  { time: "4:30 PM", name: "Neck & Spine Relief", instructor: "Neelam" },
  { time: "5:30 PM", name: "Sunset Hatha", instructor: "Neelam" },
  { time: "6:30 PM", name: "Facial Reboot & Core", instructor: "Navya" },
  { time: "7:30 PM", name: "Restorative Yin", instructor: "Muskaan" },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WeeklyScheduleAndBatches() {
  return (
    <section id="schedule" className="relative py-28 md:py-40 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-transparent">
      {/* Dynamic 3D Neon-Lime Curving Ribbon Background SVG */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <svg
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          {/* Main Lime Ribbon Flowing Curve */}
          <path
            d="M-100,180 C180,60 280,380 620,380 C950,380 1080,180 1500,480"
            stroke="#D4FA70"
            strokeWidth="82"
            strokeLinecap="round"
            className="filter drop-shadow-[0_20px_35px_rgba(212,250,112,0.45)]"
          />
          <path
            d="M-50,210 C220,100 320,400 640,400 C970,400 1100,220 1500,510"
            stroke="#C3F554"
            strokeWidth="32"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Title Centered (Exact Figma: "Daily live batches") */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-16 sm:mb-24"
      >
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#163324]">
          Daily live batches
        </h2>
      </motion.div>

      {/* Main Composition Layout */}
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between">
        {/* Top Right: Morning Awaken (Floating cleanly, unboxed) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="self-end max-w-md w-full sm:w-auto z-20 space-y-4 pr-2 sm:pr-8 lg:pr-16"
        >
          <h3 className="font-sans text-xl sm:text-2xl font-semibold text-charcoal">
            Morning Awaken
          </h3>

          <div className="space-y-3 font-sans text-xs sm:text-sm">
            {MORNING_SCHEDULE.map((item) => (
              <div
                key={item.time}
                className="flex items-center gap-6 sm:gap-10 hover:translate-x-1 transition-transform"
              >
                <span className="font-bold text-charcoal w-16 sm:w-20 tracking-tight flex-shrink-0">
                  {item.time}
                </span>
                <span className="text-muted-gray">
                  {item.name} &bull; <strong className="text-charcoal font-semibold">{item.instructor}</strong>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Center: Exact Monochrome Yogi Backbend Pose (Seamless multiply blend - NO WHITE BOX) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-full max-w-xl lg:max-w-2xl px-4 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/yogi-pose-exact.jpg"
              alt="Yogi in graceful athletic backbend pose intertwined with ribbon"
              className="w-full h-auto max-h-[460px] sm:max-h-[520px] object-contain mix-blend-multiply filter contrast-125"
            />
          </div>
        </div>

        {/* Bottom Left: Evening Unwind (Floating cleanly, unboxed) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="self-start max-w-md w-full sm:w-auto z-20 space-y-4 pl-2 sm:pl-8 lg:pl-16 mt-32 sm:mt-24 lg:mt-16"
        >
          <h3 className="font-sans text-xl sm:text-2xl font-semibold text-charcoal">
            Evening Unwind
          </h3>

          <div className="space-y-3 font-sans text-xs sm:text-sm">
            {EVENING_SCHEDULE.map((item) => (
              <div
                key={item.time}
                className="flex items-center gap-6 sm:gap-10 hover:translate-x-1 transition-transform"
              >
                <span className="font-bold text-charcoal w-16 sm:w-20 tracking-tight flex-shrink-0">
                  {item.time}
                </span>
                <span className="text-muted-gray">
                  {item.name} &bull; <strong className="text-charcoal font-semibold">{item.instructor}</strong>
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

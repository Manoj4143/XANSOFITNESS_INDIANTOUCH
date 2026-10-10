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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WeeklyScheduleAndBatches() {
  return (
    <section
      id="schedule"
      className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* 1. Header (Centered, Green Display Font matching Figma) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-12 sm:mb-20"
      >
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#163324]">
          Daily live batches
        </h2>
      </motion.div>

      {/* 2. Composition Stage */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] w-full flex flex-col justify-between items-stretch">
        {/* Curving 3D Neon-Lime Ribbon SVG Layer (Vibrant, positioned behind woman) */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-visible">
          <svg
            viewBox="0 0 1200 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-contain overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="neonRibbonGrad" x1="0%" y1="20%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#D4FA70" />
                <stop offset="45%" stopColor="#C3F554" />
                <stop offset="85%" stopColor="#D9FA75" />
                <stop offset="100%" stopColor="#B4EE4D" />
              </linearGradient>
              <filter id="ribbonShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="16" stdDeviation="24" floodColor="#B4EE4D" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* Background Ribbon Glow Path */}
            <path
              d="M-40,240 C140,80 260,420 540,430 C820,440 920,200 1240,420"
              stroke="#D4FA70"
              strokeWidth="94"
              strokeLinecap="round"
              filter="url(#ribbonShadow)"
              opacity="0.95"
            />
            {/* Inner Highlight Line */}
            <path
              d="M-20,255 C160,105 280,430 550,440 C830,450 930,220 1230,435"
              stroke="#E8FF9E"
              strokeWidth="28"
              strokeLinecap="round"
              opacity="0.75"
            />
          </svg>
        </div>

        {/* Top-Right: Morning Awaken Schedule */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="self-end max-w-sm sm:max-w-md w-full z-20 space-y-4 pr-2 sm:pr-6 lg:pr-12"
        >
          <h3 className="font-sans text-xl sm:text-2xl font-semibold text-charcoal">
            Morning Awaken
          </h3>

          <div className="space-y-3 font-sans text-xs sm:text-sm">
            {MORNING_SCHEDULE.map((item) => (
              <div
                key={item.time}
                className="flex items-center gap-5 sm:gap-8 group"
              >
                <span className="font-bold text-charcoal w-16 sm:w-20 tracking-tight flex-shrink-0">
                  {item.time}
                </span>
                <span className="text-muted-gray">
                  {item.name} &bull;{" "}
                  <strong className="text-charcoal font-semibold">{item.instructor}</strong>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Center: Transparent PNG Yogi (Zero bounding box, centered perfectly) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl px-4 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/yogi-pose-transparent.png"
              alt="Yogi in graceful athletic backbend pose intertwined with ribbon"
              className="w-full h-auto max-h-[460px] sm:max-h-[520px] object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Bottom-Left: Evening Unwind Schedule */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="self-start max-w-sm sm:max-w-md w-full z-20 space-y-4 pl-2 sm:pl-6 lg:pl-12 mt-28 sm:mt-20 lg:mt-12"
        >
          <h3 className="font-sans text-xl sm:text-2xl font-semibold text-charcoal">
            Evening Unwind
          </h3>

          <div className="space-y-3 font-sans text-xs sm:text-sm">
            {EVENING_SCHEDULE.map((item) => (
              <div
                key={item.time}
                className="flex items-center gap-5 sm:gap-8 group"
              >
                <span className="font-bold text-charcoal w-16 sm:w-20 tracking-tight flex-shrink-0">
                  {item.time}
                </span>
                <span className="text-muted-gray">
                  {item.name} &bull;{" "}
                  <strong className="text-charcoal font-semibold">{item.instructor}</strong>
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

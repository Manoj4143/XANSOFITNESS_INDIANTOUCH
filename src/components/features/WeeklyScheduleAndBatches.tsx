"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Clock, Calendar, CheckCircle2, MessageCircle, Sparkles, Flame, ShieldAlert, Heart, Activity } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

const MORNING_BATCHES = [
  { time: "05:30 - 06:30 AM IST", label: "Brahma Muhurta Flow", instructor: "Apeksha Chauhan", tag: "Energy Awakening" },
  { time: "07:00 - 08:00 AM IST", label: "Classical Hatha Flow", instructor: "Apeksha Chauhan", tag: "Spinal Mobility" },
  { time: "08:00 - 09:00 AM IST", label: "Strength & Alignment", instructor: "Navya Gupta", tag: "Core Activation" },
  { time: "09:00 - 10:00 AM IST", label: "Gentle Flow & Breath", instructor: "Muskaan Wahi", tag: "Low Impact" },
];

const EVENING_BATCHES = [
  { time: "04:30 - 05:30 PM IST", label: "Post-Work Neck & Spine Reset", instructor: "Neelam Rana", tag: "Desk Fatigue Relief" },
  { time: "05:30 - 06:30 PM IST", label: "Sunset Hatha & Flexibility", instructor: "Neelam Rana", tag: "Full Body Tone" },
  { time: "06:30 - 07:30 PM IST", label: "Deep Fascial Release & Core", instructor: "Navya Gupta", tag: "Metabolic Burn" },
  { time: "07:30 - 08:30 PM IST", label: "Restorative Yin & Pranayama", instructor: "Muskaan Wahi", tag: "Deep Sleep & Calm" },
];

const WEEKLY_FOCUS = [
  {
    day: "Monday",
    title: "Joints Opening & Stretching",
    focus: "Sandhi Chalana, synovial fluid activation, loosening stiffness after the weekend.",
    icon: Activity,
    accent: "bg-amber-500/10 text-amber-900 border-amber-200",
  },
  {
    day: "Tuesday",
    title: "Arms + Shoulder Joints",
    focus: "Cervical spine release, rotator cuff mobility, upper back posture correction.",
    icon: ShieldAlert,
    accent: "bg-emerald-500/10 text-emerald-900 border-emerald-200",
  },
  {
    day: "Wednesday",
    title: "Belly Fat & Tummy",
    focus: "Core engagement, visceral tone, digestion fire (Agni) stimulation & waist sculpting.",
    icon: Flame,
    accent: "bg-orange-500/10 text-orange-900 border-orange-200",
  },
  {
    day: "Thursday",
    title: "Back Bending & Neck",
    focus: "Thoracic extension, posture restoration for IT desk sitters, counteracting forward slouch.",
    icon: Heart,
    accent: "bg-teal-500/10 text-teal-900 border-teal-200",
  },
  {
    day: "Friday",
    title: "Legs & Thigh Fat",
    focus: "Lower body stamina, pelvic floor toning, hamstring lengthening & fluid circulation.",
    icon: Sparkles,
    accent: "bg-indigo-500/10 text-indigo-900 border-indigo-200",
  },
  {
    day: "Saturday - Sunday",
    title: "Rest & Recovery",
    focus: "Guided Yoga Nidra, breathwork, muscle tissue repair and mindful restorative rest.",
    icon: Clock,
    accent: "bg-stone-500/10 text-stone-900 border-stone-200",
  },
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
  const WHATSAPP_NUMBER = "919105837321";

  return (
    <section id="schedule" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          DAILY LIVE BATCH TIMINGS & FOCUS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Structured Weekly{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Program Blueprint
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          We have 4 time slots in the morning and 4 time slots in the evening (IST). Even if you miss your registered batch, you can join in any other batch that day so you never miss a session.
        </p>
      </motion.div>

      {/* Batch Timings Grid: Morning & Evening */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Morning Batches */}
        <SurfaceCard className="p-6 sm:p-8 border border-border shadow-soft bg-gradient-to-b from-amber-500/5 to-surface">
          <div className="flex items-center justify-between pb-4 border-b border-border/70 mb-6">
            <div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                Morning IST Batches
              </span>
              <h3 className="font-display text-2xl font-semibold text-text-main mt-2">
                Awaken & Re-energize
              </h3>
            </div>
            <Clock className="w-8 h-8 text-amber-600 stroke-[1.5]" />
          </div>

          <div className="space-y-3">
            {MORNING_BATCHES.map((batch) => (
              <div
                key={batch.time}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-surface border border-border/80 hover:border-primary/40 transition-colors"
              >
                <div>
                  <span className="font-display text-base font-semibold text-text-main block">
                    {batch.time}
                  </span>
                  <span className="text-xs text-text-muted font-sans">
                    {batch.label} &bull; Guide: <strong className="text-text-main">{batch.instructor}</strong>
                  </span>
                </div>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mt-2 sm:mt-0 self-start sm:self-auto border border-emerald-200">
                  {batch.tag}
                </span>
              </div>
            ))}
          </div>
        </SurfaceCard>

        {/* Evening Batches */}
        <SurfaceCard className="p-6 sm:p-8 border border-border shadow-soft bg-gradient-to-b from-teal-500/5 to-surface">
          <div className="flex items-center justify-between pb-4 border-b border-border/70 mb-6">
            <div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-1 rounded-full border border-teal-300">
                Evening IST Batches
              </span>
              <h3 className="font-display text-2xl font-semibold text-text-main mt-2">
                Unwind & Restructure
              </h3>
            </div>
            <Clock className="w-8 h-8 text-teal-600 stroke-[1.5]" />
          </div>

          <div className="space-y-3">
            {EVENING_BATCHES.map((batch) => (
              <div
                key={batch.time}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-surface border border-border/80 hover:border-primary/40 transition-colors"
              >
                <div>
                  <span className="font-display text-base font-semibold text-text-main block">
                    {batch.time}
                  </span>
                  <span className="text-xs text-text-muted font-sans">
                    {batch.label} &bull; Guide: <strong className="text-text-main">{batch.instructor}</strong>
                  </span>
                </div>
                <span className="text-[11px] font-medium text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md mt-2 sm:mt-0 self-start sm:self-auto border border-teal-200">
                  {batch.tag}
                </span>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </div>

      {/* Note about IST */}
      <div className="text-center mb-16 p-4 rounded-2xl bg-surfaceVariant border border-border text-xs sm:text-sm text-text-muted">
        <p>
          * <strong>Note:</strong> All batch timings are in <strong>Indian Standard Time (IST)</strong>. Sessions run live Monday to Friday on Zoom with certified female instructors and flexible batch switching.
        </p>
      </div>

      {/* Weekly Focus Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-text-main">
            Weekly Focus Calendar (Mon &ndash; Fri)
          </h3>
          <p className="font-sans text-xs sm:text-sm text-text-muted">
            Targeted anatomical focus for balanced bodyweight fat loss, posture correction, and full-body vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEEKLY_FOCUS.map((item) => {
            const Icon = item.icon;
            return (
              <SurfaceCard
                key={item.day}
                hoverEffect
                className="p-6 border border-border shadow-soft flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-text-main">
                      {item.day}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.accent}`}>
                      Live Focus
                    </span>
                  </div>
                  <h4 className="font-sans text-base font-semibold text-primary">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </SurfaceCard>
            );
          })}
        </div>
      </div>

      {/* Bottom Proof Metric Banner */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-primary to-teal-900 text-white text-center shadow-soft relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h3 className="font-display text-2xl sm:text-3xl font-normal">
            Joined by More Than <span className="font-bold underline decoration-amber-400">10,000+ Women</span> with an 82% Success Rate
          </h3>
          <p className="font-sans text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto leading-relaxed">
            Achieve your weight loss and fitness goals from the comfort of home. Get a FREE personalized Indian diet plan upon joining today.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#pricing"
              className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold border-none"
            >
              Start My Fitness Journey (10% Off)
            </Button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi! I want to join Xanso Fitness and claim my 10% extra discount and Free Diet Plan."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-sm transition-all border border-white/20"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Consult on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

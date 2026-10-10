"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Video,
  Clock,
  Sparkles,
  Utensils,
  HelpCircle,
  Users,
  Award,
  CheckCircle2,
} from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const VALUE_PROPS = [
  {
    icon: Video,
    title: "Live and Interactive Sessions on Zoom",
    description:
      "Get fit from the comfort of your home with live interactive fitness classes. Our certified instructors actively guide your posture, form, and alignment in real-time.",
    badge: "100% Live via Zoom",
  },
  {
    icon: Clock,
    title: "Flexible Timings on Daily Basis",
    description:
      "We operate 4 morning and 4 evening batch timings daily. Even if you miss your scheduled batch, you can easily attend any other batch on the same day.",
    badge: "8 Daily Slots",
  },
  {
    icon: Utensils,
    title: "Free Personalized Diet Plan",
    description:
      "Receive a customized diet plan upon joining created by expert nutritional guidance to help you lose weight easily and stay energetic without confusing diets.",
    badge: "Free Upon Joining",
  },
  {
    icon: Users,
    title: "Dedicated Female-Only Batches",
    description:
      "A welcoming, comfortable space led by our senior certified female instructors (Neelam Rana, Muskaan Wahi, Apeksha Chauhan, Navya Gupta).",
    badge: "Comfort & Privacy",
  },
  {
    icon: HelpCircle,
    title: "Daily Doubt Solving & WhatsApp Support",
    description:
      "Direct 1:1 doubt clearing and motivation whenever you need it. Weekly follow-ups ensure consistency, habit formation, and long-term results.",
    badge: "WhatsApp: +91 91058 37321",
  },
  {
    icon: Sparkles,
    title: "7-Day Signature Face Yoga Included",
    description:
      "Sculpt facial muscles, relieve jaw clenching, drain lymphatics, and restore natural skin radiance through our signature Face Yoga program.",
    badge: "Included Free",
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

export function WhyChooseXanso() {
  return (
    <section id="why-us" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header with xanso.in quote */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          CLEAR GOALS &bull; NOTHING COMPLICATED
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Why Choose{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Xanso Fitness?
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
          &ldquo;We build simple, effective fitness programs. No random workouts. No confusing diets. Just structured training that fits your life. You&apos;re busy. We get it. That&apos;s why our programs are built around your schedule &mdash; not the other way around.&rdquo;
        </p>
      </motion.div>

      {/* Grid of 6 Core Value Props */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {VALUE_PROPS.map((prop) => {
          const Icon = prop.icon;
          return (
            <motion.div key={prop.title} variants={fadeInUp} className="flex">
              <SurfaceCard
                hoverEffect
                className="p-8 flex flex-col justify-between w-full h-full border border-border/80 shadow-soft hover:shadow-card transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {prop.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-text-main">
                    {prop.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </SurfaceCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Lock,
  Star,
  Video,
  Sliders,
  Clock,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Heart,
  Flame,
  Wind,
  CheckCircle2,
  Mail,
  MapPin,
  Building2,
  Phone,
  Send,
  X,
  Volume2,
  MessageCircle,
  Tag,
  Percent,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { ThreeWaysToTrain } from "@/components/features/ThreeWaysToTrain";
import { WeeklyScheduleAndBatches } from "@/components/features/WeeklyScheduleAndBatches";
import { HealthBenefitsGrid } from "@/components/features/HealthBenefitsGrid";
import { WhyChooseXanso } from "@/components/features/WhyChooseXanso";
import { TrainerProfiles } from "@/components/features/TrainerProfiles";
import { PricingArchitecture } from "@/components/features/PricingArchitecture";
import { SuccessStories } from "@/components/features/SuccessStories";
import { ExpertBlogs } from "@/components/features/ExpertBlogs";
import { XansoFAQ } from "@/components/features/XansoFAQ";
import { WellnessConcierge } from "@/components/ai/WellnessConcierge";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { playSanctuaryChime } from "@/lib/sound";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const STATS_DATA = [
  {
    icon: Video,
    number: "100%",
    label: "Live Interactive via Zoom",
    description: "Daily interactive classes with real-time audio posture corrections",
  },
  {
    icon: Clock,
    number: "8 Batches",
    label: "Daily Morning & Evening IST",
    description: "4 morning slots & 4 evening slots with flexible batch switching",
  },
  {
    icon: Sliders,
    number: "10,000+",
    label: "Clients Transformed",
    description: "Proven 82% success rate in healthy weight loss & flexibility",
  },
  {
    icon: ShieldCheck,
    number: "10% Extra",
    label: "Discount vs Xanso Standard",
    description: "Exclusive community pricing + Free customized Indian diet plan",
  },
];

const CATEGORY_ITEMS = [
  {
    title: "Live Group Yoga Sessions",
    level: "All Levels",
    description: "Certified instructor led sessions via Zoom focusing on flexibility, breathing, and posture.",
    duration: "4 Morning & 4 Evening Batches",
    icon: Flame,
    accent: "from-[#F6EDE8] to-[#ECD8CF]",
    badgeColor: "bg-surface/90 text-primary",
  },
  {
    title: "1:1 Transformation Plans",
    level: "Personalized",
    description: "Tailored strength training plan, nutrition support and daily WhatsApp check-ins.",
    duration: "Custom Goal Oriented",
    icon: Heart,
    accent: "from-[#EFECE8] to-[#E3DCD3]",
    badgeColor: "bg-surface/90 text-[#605B54]",
  },
  {
    title: "7-Day Signature Face Yoga",
    level: "Special Bonus",
    description: "Ayush certified facial muscle sculpting, lymphatic drainage, and natural skin glow.",
    duration: "20-25 min daily",
    icon: Sparkles,
    accent: "from-[#F8EDE6] to-[#EAD5C8]",
    badgeColor: "bg-surface/90 text-primary",
  },
  {
    title: "Corporate Team Sessions",
    level: "For Companies",
    description: "Virtual or on-site delivery reducing fatigue, neck stiffness, and boosting productivity.",
    duration: "Custom Team Timings",
    icon: Wind,
    accent: "from-[#F3ECE4] to-[#E7DDD0]",
    badgeColor: "bg-surface/90 text-[#7C6E5F]",
  },
];

export default function HomePage() {
  const [contactSubmitted, setContactSubmitted] = React.useState(false);
  const [chimeActive, setChimeActive] = React.useState(false);

  const WHATSAPP_NUMBER = "919105837321";
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Xanso Fitness! I want to start my fitness journey and claim the extra 10% discount on live yoga batches."
  )}`;

  const handlePlayChime = () => {
    playSanctuaryChime();
    setChimeActive(true);
    setTimeout(() => setChimeActive(false), 3800);
  };

  return (
    <div className="min-h-screen bg-background text-text-main flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. HERO SECTION (Split Layout with Exact xanso.in Copy)
        ======================================================== */}
        <section className="relative pt-10 md:pt-16 pb-20 md:pb-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typography & CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="md:col-span-6 lg:col-span-7 space-y-6 md:space-y-8 z-10"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-emerald-800 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                  NAMASTE &bull; XANSO ONLINE FITNESS CLASSES
                </span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  Extra 10% OFF
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-text-main leading-[1.08]"
              >
                Get Fit from the Comfort of Your{" "}
                <span className="font-accent text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl block mt-1">
                  Home
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="font-sans text-base sm:text-lg md:text-xl text-text-muted max-w-xl leading-relaxed"
              >
                Join India&apos;s most loved online program that has been created by expert guidance to help you loose weight easily and get in shape from the comfort of your home. Live interactive classes via Zoom with a free personalized Indian diet plan upon joining!
              </motion.p>

              {/* 4 Feature Highlights */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-text-main font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Live &amp; Interactive on Zoom</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-text-main font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Flexible Timings on Daily Basis</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-text-main font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Free Personalized Diet Plan</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-text-main font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Weekly Follow-Ups for Regularity</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Button variant="primary" size="lg" href="#pricing">
                  YES, I WANT TO START MY FITNESS JOURNEY!
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold shadow-soft transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp: +91 91058 37321</span>
                </a>
              </motion.div>

              {/* Interactive Solfeggio 432 Hz Sound Bell */}
              <motion.div variants={fadeInUp} className="pt-2">
                <button
                  type="button"
                  onClick={handlePlayChime}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surfaceVariant/60 hover:bg-surfaceVariant text-xs font-sans text-text-muted hover:text-text-main transition-colors group cursor-pointer"
                >
                  <Volume2
                    className={`w-3.5 h-3.5 text-primary transition-transform group-hover:scale-110 ${
                      chimeActive ? "animate-pulse" : ""
                    }`}
                  />
                  <span>
                    {chimeActive
                      ? "Acoustic Resonance Flowing (432 Hz)..."
                      : "Sound Bell: Himalayan Singing Bowl (432 Hz)"}
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column: Hero Visual Asset (Preserved Picture) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-6 lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md">
                {/* Decorative Indian Mandala Glow */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/10 via-amber-500/10 to-emerald-500/10 blur-2xl -z-10" />

                <SurfaceCard
                  hoverEffect
                  className="relative overflow-hidden rounded-3xl border border-border shadow-card p-2 bg-surface"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero-yoga.jpg"
                    alt="Authentic Indian Yoga & Fitness"
                    className="w-full h-[460px] sm:h-[500px] object-cover rounded-2xl"
                  />

                  {/* Floating Overlay Badge: Live Zoom */}
                  <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-soft flex items-center gap-2 text-xs font-sans font-medium text-text-main">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live via Zoom &bull; 8 Batches IST</span>
                  </div>

                  {/* Floating Overlay Badge: Free Diet Plan */}
                  <div className="absolute bottom-5 right-5 px-3.5 py-1.5 rounded-full bg-amber-400 text-stone-950 font-bold shadow-soft flex items-center gap-1.5 text-xs font-sans">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free Personalized Diet Plan</span>
                  </div>
                </SurfaceCard>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            2. KEY TRUST & PERFORMANCE METRICS
        ======================================================== */}
        <section className="border-y border-border/60 bg-surfaceVariant/50 py-12 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS_DATA.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-border text-primary flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-text-main block">
                      {stat.number}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-wider font-semibold text-text-main block mt-0.5">
                      {stat.label}
                    </span>
                    <p className="font-sans text-xs text-text-muted mt-1">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            3. THREE WAYS TO TRAIN WITH US
        ======================================================== */}
        <div id="pathways">
          <ThreeWaysToTrain />
        </div>

        {/* ========================================================
            4. DAILY LIVE BATCH TIMINGS & WEEKLY FOCUS CALENDAR
        ======================================================== */}
        <WeeklyScheduleAndBatches />

        {/* ========================================================
            5. WHY CHOOSE XANSO FITNESS
        ======================================================== */}
        <WhyChooseXanso />

        {/* ========================================================
            6. HEALTH CONCERNS & SCIENTIFIC ASANA PROTOCOLS
        ======================================================== */}
        <div id="health-concerns">
          <HealthBenefitsGrid />
        </div>

        {/* ========================================================
            7. MEET YOUR INSTRUCTORS (All 4 Instructors with Batches)
        ======================================================== */}
        <div id="training">
          <TrainerProfiles />
        </div>

        {/* ========================================================
            8. PRICING ARCHITECTURE (2 / 3 / 6 Months with 10% Off)
        ======================================================== */}
        <PricingArchitecture />

        {/* ========================================================
            9. SUCCESS STORIES & VERIFIED GOOGLE REVIEWS
        ======================================================== */}
        <SuccessStories />

        {/* ========================================================
            10. EXPERT BLOGS & LIFESTYLE GUIDES
        ======================================================== */}
        <ExpertBlogs />

        {/* ========================================================
            11. FREQUENTLY ASKED QUESTIONS
        ======================================================== */}
        <XansoFAQ />

        {/* ========================================================
            12. DIRECT CONTACT SECTION
        ======================================================== */}
        <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
                WE ARE HERE TO HELP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-text-main">
                Connect with Us Directly
              </h2>
              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
                Have questions about batch timings, instructor schedules, customized diet plans, or claiming your 10% extra discount? Reach out to us directly on WhatsApp or submit a quick note.
              </p>

              <div className="space-y-4 pt-4 font-sans text-xs sm:text-sm">
                {/* Highlighted WhatsApp Card */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="font-bold text-emerald-900 block text-sm">
                      WhatsApp Quick Support
                    </span>
                    <span className="text-emerald-700 font-semibold text-sm">
                      +91 91058 37321
                    </span>
                    <span className="text-[11px] text-emerald-600 block mt-0.5">
                      Instant response &bull; 10% discount claim
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-text-main block">Email Support</span>
                    <span className="text-text-muted">contact@xanso.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-text-main block">Lineage Roots &amp; Centers</span>
                    <span className="text-text-muted">Rishikesh &bull; Bengaluru &bull; Mumbai &bull; Delhi NCR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <SurfaceCard className="lg:col-span-7 p-6 sm:p-8 border border-border shadow-soft">
              {contactSubmitted ? (
                <div className="text-center py-12 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="font-display text-2xl font-medium text-text-main">
                    Message Received!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-text-muted max-w-sm mx-auto">
                    Thank you for reaching out. We will connect with you on WhatsApp (+91 91058 37321) or email within 24 hours.
                  </p>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setContactSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="space-y-5 font-sans"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-main">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Rohan / Priya"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-main">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-main">
                      Inquiry Focus
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30">
                      <option>Claim 10% Extra Discount on 2/3/6 Month Plan</option>
                      <option>1:1 Personal Yoga &amp; Strength Training</option>
                      <option>7-Day Face Yoga Masterclass</option>
                      <option>Desk Posture &amp; Spine Relief for IT Professionals</option>
                      <option>Corporate Team Wellness Batches</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-main">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your fitness goals, preferred batch timings (Morning/Evening IST), or any back/neck pain..."
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <Button variant="primary" size="lg" type="submit" className="w-full justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Inquiry (Claim 10% Off)
                  </Button>
                </form>
              )}
            </SurfaceCard>
          </div>
        </section>
      </main>

      {/* Indian Wellness Footer */}
      <Footer />

      {/* Global AI Wellness Concierge */}
      <WellnessConcierge />

      {/* Global Floating WhatsApp Button (+91 91058 37321) */}
      <WhatsAppButton phoneNumber="919105837321" />
    </div>
  );
}

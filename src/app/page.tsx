"use client";

import * as React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Mail,
  MapPin,
  Send,
  Star,
  Users,
  ShieldCheck,
  Video,
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
      staggerChildren: 0.15,
    },
  },
};

const HERO_STATS = [
  { value: "10,000+", label: "members", sublabel: "Transformed across India" },
  { value: "4.8/5", label: "avg rating", sublabel: "Verified student reviews" },
  { value: "Qualified", label: "instructors", sublabel: "Ayush & Yoga Alliance certified" },
  { value: "100% Live", label: "non-recorded classes", sublabel: "Real-time audio form feedback" },
];

export default function HomePage() {
  const [contactSubmitted, setContactSubmitted] = React.useState(false);

  const WHATSAPP_NUMBER = "919105837321";
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Xanso Fitness! I want to start my yoga journey with the female-only batch from home."
  )}`;

  return (
    <div className="min-h-screen bg-background text-text-main flex flex-col font-sans selection:bg-lime-accent selection:text-lime-text">
      {/* Botanical Dark Glass Floating Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. HERO SECTION (Full Cover Image from Figma Reference)
        ======================================================== */}
        <section className="relative min-h-[95vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-forest-deep text-white">
          {/* Full Cover Background Picture */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-grass-mat.jpg"
            alt="Practitioner meditating on yoga mat on grass lawn with palm shadows"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Contrast scrims */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35 pointer-events-none" />

          {/* Left Hero Typography Content */}
          <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-36 sm:pt-44 pb-12 flex-1 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-xl space-y-5 text-left"
            >
              {/* Eyebrow */}
              <motion.div variants={fadeInUp}>
                <span className="text-xs sm:text-[13px] uppercase tracking-[0.2em] font-sans font-medium text-white/95 block">
                  LIVE YOGA ON ZOOM &bull; FEMALE-ONLY BATCHES
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeInUp}
                className="font-sans text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08]"
              >
                Get fit from the
                <br />
                comfort of your
                <br />
                home.
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeInUp}
                className="font-sans text-sm sm:text-base text-white/85 max-w-md leading-relaxed font-light"
              >
                Live, interactive classes with certified instructors, 8 flexible batches a day, and a free personalised Indian diet plan when you join.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-6 pt-3"
              >
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs sm:text-sm font-sans font-medium text-white bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 transition-all duration-200 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                  <span>Start on Whatsapp</span>
                </a>

                <a
                  href="#schedule"
                  className="text-xs sm:text-sm font-sans font-normal text-white underline underline-offset-8 hover:text-white/80 transition-colors"
                >
                  See batch timings
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom 4-Column Stats Strip directly matching Figma reference */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-8 sm:pb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-white/90"
            >
              <div>
                <span className="font-sans text-2xl sm:text-3xl lg:text-4xl font-light text-white block">
                  10000+
                </span>
                <span className="font-sans text-xs text-white/80 block mt-0.5">
                  members
                </span>
              </div>

              <div>
                <span className="font-sans text-2xl sm:text-3xl lg:text-4xl font-light text-white block">
                  4.9/5
                </span>
                <span className="font-sans text-xs text-white/80 block mt-0.5">
                  Google rating
                </span>
              </div>

              <div>
                <span className="font-sans text-2xl sm:text-3xl lg:text-4xl font-light text-white block">
                  8batches
                </span>
                <span className="font-sans text-xs text-white/80 block mt-0.5">
                  every weekday.IST
                </span>
              </div>

              <div>
                <span className="font-sans text-2xl sm:text-3xl lg:text-4xl font-light text-white block">
                  100%Live
                </span>
                <span className="font-sans text-xs text-white/80 block mt-0.5">
                  real-time posture cues
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            2. THREE WAYS TO TRAIN WITH US (The Form Collective)
        ======================================================== */}
        <ThreeWaysToTrain />

        {/* ========================================================
            3. DAILY LIVE BATCHES (Neon Ribbon & Asana Cutout)
        ======================================================== */}
        <WeeklyScheduleAndBatches />

        {/* ========================================================
            4. SIMPLE MEMBERSHIP PLANS (3-Tier Pricing Architecture)
        ======================================================== */}
        <PricingArchitecture />

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
            7. MEET YOUR INSTRUCTORS (Certified Master Trainers)
        ======================================================== */}
        <div id="instructors">
          <TrainerProfiles />
        </div>

        {/* ========================================================
            8. SUCCESS STORIES & VERIFIED GOOGLE REVIEWS
        ======================================================== */}
        <div id="reviews">
          <SuccessStories />
        </div>

        {/* ========================================================
            9. EXPERT BLOGS & LIFESTYLE GUIDES
        ======================================================== */}
        <div id="blogs">
          <ExpertBlogs />
        </div>

        {/* ========================================================
            10. FREQUENTLY ASKED QUESTIONS
        ======================================================== */}
        <XansoFAQ />

        {/* ========================================================
            11. DIRECT CONNECT & WHATSAPP SECTION
        ======================================================== */}
        <section id="contact" className="py-24 md:py-36 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-forest-deep px-3.5 py-1.5 rounded-full bg-forest-deep/5 border border-forest-deep/10">
                WE ARE HERE TO HELP
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-normal text-forest-deep leading-tight">
                Connect with Us Directly
              </h2>
              <p className="font-sans text-sm sm:text-base text-muted-gray leading-relaxed">
                Have questions about batch timings, instructor schedules, customized diet plans, or claiming your membership? Reach out to us directly on WhatsApp or submit a quick note.
              </p>

              <div className="space-y-4 pt-4 font-sans text-xs sm:text-sm">
                {/* Highlighted WhatsApp Card */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-3xl bg-neutral-surface border border-black/5 hover:border-lime-accent transition-all duration-300 group shadow-soft"
                >
                  <div className="w-12 h-12 rounded-full bg-lime-accent text-lime-text flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <span className="font-bold text-charcoal block text-sm">
                      WhatsApp Instant Support
                    </span>
                    <span className="text-forest-deep font-semibold text-sm">
                      +91 91058 37321
                    </span>
                    <span className="text-[11px] text-muted-gray block mt-0.5">
                      Instant response &bull; Female-only batch consultation
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 rounded-full bg-forest-deep/5 text-forest-deep flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-charcoal block">Email Support</span>
                    <span className="text-muted-gray">contact@xanso.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 rounded-full bg-forest-deep/5 text-forest-deep flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-charcoal block">Lineage Roots &amp; Centers</span>
                    <span className="text-muted-gray">Rishikesh &bull; Bengaluru &bull; Mumbai &bull; Delhi NCR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-neutral-surface rounded-3xl p-8 sm:p-10 border border-black/5 shadow-soft">
              {contactSubmitted ? (
                <div className="text-center py-12 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-forest-deep mx-auto" />
                  <h3 className="font-display text-2xl font-medium text-charcoal">
                    Message Received!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted-gray max-w-sm mx-auto">
                    Thank you for reaching out. We will connect with you on WhatsApp (+91 91058 37321) within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setContactSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-charcoal text-white text-xs font-semibold"
                  >
                    Send Another Note
                  </button>
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
                      <label className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Rohan / Priya"
                        className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-lime-accent"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-lime-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                      Inquiry Focus
                    </label>
                    <select className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-lime-accent">
                      <option>Choose a Membership Plan (2 / 3 / 6 Months)</option>
                      <option>1:1 Personal Transformation Program</option>
                      <option>Female-Only Live Zoom Batches</option>
                      <option>Desk Posture &amp; Spine Relief</option>
                      <option>Corporate Team Wellness</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your fitness goals, preferred batch timings (Morning/Evening IST), or any body concerns..."
                      className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-white text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-lime-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-charcoal hover:bg-black text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-card hover:scale-[1.01] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Wellness Concierge */}
      <WellnessConcierge />

      {/* Floating WhatsApp Button (+91 91058 37321) */}
      <WhatsAppButton phoneNumber="919105837321" />
    </div>
  );
}

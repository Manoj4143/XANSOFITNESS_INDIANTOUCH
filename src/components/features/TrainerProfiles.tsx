"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Star, Award, MessageCircle, ArrowRight, CheckCircle2, Clock, Calendar } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

export interface Trainer {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  specialties: string;
  batchSchedule: string;
  days: string;
  rating: number;
  reviewsCount: number;
  accentBg: string;
  bio: string;
  image: string;
  whatsappMessage: string;
}

const INDIAN_TRAINERS: Trainer[] = [
  {
    id: "trainer-neelam",
    name: "Neelam Rana",
    role: "Certified Yoga Instructor",
    qualifications: "Yoga Alliance & Ministry of Ayush Certified",
    specialties: "Hatha, Ashtanga & Pranic Alignment",
    days: "Monday - Friday",
    batchSchedule: "04:30 - 05:30 PM IST & 05:30 - 06:30 PM IST",
    rating: 4.99,
    reviewsCount: 520,
    accentBg: "bg-[#F3E2DA] text-primary",
    bio: "Certified Yoga Instructor leading our popular evening batches. Expert in joints opening, cervical spine mobility, and posture correction.",
    image: "/images/trainer-neelam.jpg",
    whatsappMessage: "Hi Neelam Rana! I want to join your live evening batch (04:30 PM / 05:30 PM IST) with 10% discount.",
  },
  {
    id: "trainer-muskaan",
    name: "Muskaan Wahi",
    role: "Certified Yoga & Face Yoga Instructor",
    qualifications: "Ayush Mantralaya & Face Yoga Master",
    specialties: "Face Yoga, Vinyasa & Core Mobility",
    days: "Monday - Friday",
    batchSchedule: "09:00 - 10:00 AM IST & 07:30 - 08:30 PM IST",
    rating: 4.98,
    reviewsCount: 440,
    accentBg: "bg-[#EAE4DC] text-[#605B54]",
    bio: "Certified Yoga Instructor and pioneer of our 7-Day Face Yoga program. Renowned for soothing bedtime pranayama and energizing morning flows.",
    image: "/images/trainer-muskaan.jpg",
    whatsappMessage: "Hi Muskaan Wahi! I want to enroll in your morning (09:00 AM) or evening (07:30 PM IST) batch with 10% discount.",
  },
  {
    id: "trainer-apeksha",
    name: "Apeksha Chauhan",
    role: "Certified Yoga Instructor",
    qualifications: "Ayush Mantralaya Certified",
    specialties: "Desk Posture Correction, Pranayama",
    days: "Monday - Friday",
    batchSchedule: "05:30 - 06:30 AM IST & 07:00 - 08:00 AM IST",
    rating: 4.97,
    reviewsCount: 380,
    accentBg: "bg-[#F6EDE8] text-primary",
    bio: "Certified Yoga Instructor guiding early morning Brahma Muhurta and classical Hatha batches. Specializes in spinal alignment and breathwork.",
    image: "/images/trainer-apeksha.jpg",
    whatsappMessage: "Hi Apeksha! I want to join your early morning batch (05:30 AM / 07:00 AM IST) with 10% discount.",
  },
  {
    id: "trainer-navya",
    name: "Navya Gupta",
    role: "Certified Yoga Instructor",
    qualifications: "National Player & Ministry of Ayush",
    specialties: "Deep Flexibility, Spine Mobility",
    days: "Monday - Friday",
    batchSchedule: "08:00 - 09:00 AM IST & 06:30 - 07:30 PM IST",
    rating: 4.96,
    reviewsCount: 340,
    accentBg: "bg-[#EFECE8] text-[#842503]",
    bio: "National level yoga player and Ministry of Ayush certified trainer. Focuses on safe structural flexibility, hip opening, and belly fat reduction.",
    image: "/images/trainer-navya.jpg",
    whatsappMessage: "Hi Navya! I would like to join your 08:00 AM or 06:30 PM IST batch with 10% discount.",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function TrainerProfiles({
  trainers = INDIAN_TRAINERS,
}: {
  trainers?: Trainer[];
}) {
  const WHATSAPP_NUMBER = "919105837321";

  return (
    <section id="instructors" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          EXPERIENCE &amp; DEDICATION
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Meet Your{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Instructors
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          With more than 25+ years of combined experience between them, our certified trainers will guide and encourage you to help achieve your fitness goals with ease.
        </p>

        {/* 4 Feature Pills from xanso.in */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-3">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
            Live Zoom Sessions
          </span>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
            Flexible Timings
          </span>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-teal-50 text-teal-900 border border-teal-200">
            Daily Doubt Solving
          </span>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-rose-50 text-rose-900 border border-rose-200">
            Personalized Diet Plan
          </span>
        </div>
      </motion.div>

      {/* Trainers Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10"
      >
        {trainers.map((trainer) => {
          const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            trainer.whatsappMessage
          )}`;

          return (
            <motion.div key={trainer.id} variants={fadeInUp} className="relative pt-12 flex">
              <SurfaceCard
                hoverEffect
                className="relative p-6 pt-16 text-center flex flex-col justify-between w-full h-full border border-border/80 shadow-soft hover:shadow-card transition-all"
              >
                {/* Overlapping Circular Avatar */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="relative group">
                    <div
                      className={`w-24 h-24 rounded-full border-4 border-surface shadow-card flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 ${trainer.accentBg}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Verified Ayush Badge */}
                    <div
                      className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs"
                      title="Certified Yoga Instructor"
                    >
                      <Award className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Bio & Details */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-text-main">
                      {trainer.name}
                    </h3>
                    <p className="font-sans text-xs text-primary font-semibold mt-0.5">
                      {trainer.role}
                    </p>
                  </div>

                  {/* Batch Schedule Box */}
                  <div className="p-2.5 rounded-xl bg-surfaceVariant border border-border text-left space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-text-main">
                      <Calendar className="w-3 h-3 text-primary" />
                      <span>{trainer.days}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-text-muted">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span className="font-medium text-emerald-800">{trainer.batchSchedule}</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-text-muted leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 mt-4 border-t border-border/60 space-y-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl text-xs font-sans font-medium bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp {trainer.name.split(" ")[0]}</span>
                  </a>
                </div>
              </SurfaceCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { CheckCircle, Quote, Star, ArrowUpRight } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  practiceDuration: string;
  rating: number;
  offsetClass?: string;
}

const INDIAN_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-soujanya",
    quote:
      "Xanso fitness has completely changed my daily routine. The live Zoom classes with individual posture attention helped me relieve chronic back pain and lose 6 kgs comfortably. The diet plan was super easy to follow in an Indian household.",
    author: "Soujanya N",
    role: "Software Professional",
    location: "Bengaluru, Karnataka",
    practiceDuration: "Verified Google Review",
    rating: 5,
    offsetClass: "md:translate-y-0",
  },
  {
    id: "test-aditi",
    quote:
      "Working 10+ hours a day in front of a laptop gave me severe cervical stiffness. Apeksha's morning 7:00 AM batch and the 15-minute desk posture resets completely dissolved the pain. The flexible batch timings are a lifesaver for busy ladies.",
    author: "Aditi Narang",
    role: "Senior Product Designer",
    location: "Bengaluru, Karnataka",
    practiceDuration: "Member for 8 months",
    rating: 5,
    offsetClass: "md:translate-y-6",
  },
  {
    id: "test-pooja",
    quote:
      "The 7-Day Face Yoga with Muskaan Wahi is phenomenal! My face feels sculpted, and my morning puffiness is gone. Practicing live on Zoom from home with authentic certified trainers is so much better and safer than crowded gyms.",
    author: "Pooja Hegde",
    role: "Marketing Director",
    location: "Mumbai, Maharashtra",
    practiceDuration: "Member for 5 months",
    rating: 5,
    offsetClass: "md:-translate-y-4",
  },
  {
    id: "test-rohan",
    quote:
      "I was skeptical of online classes until I joined Neelam's live evening batch. Her attention to detail and live audio posture cues feel just like an in-person yoga shala. Truly authentic, disciplined, and grounding.",
    author: "Rohan Deshmukh",
    role: "Architect & Yogi",
    location: "Pune, Maharashtra",
    practiceDuration: "Member for 12 months",
    rating: 5,
    offsetClass: "md:translate-y-4",
  },
  {
    id: "test-priya",
    quote:
      "The female-only batch gave me so much comfort and confidence. Navya Gupta's flexibility cues helped me achieve full hip mobility in 3 months. Having direct WhatsApp contact with trainers for diet questions is unmatched.",
    author: "Priya Sharma",
    role: "Chartered Accountant",
    location: "Delhi NCR",
    practiceDuration: "Member for 6 months",
    rating: 5,
    offsetClass: "md:translate-y-2",
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

export function SuccessStories() {
  const GOOGLE_REVIEWS_URL =
    "https://www.google.com/search?q=xanso+reviews&sca_esv=741749e29e505560&sxsrf=ADLYWILZI4CWfYk__4bBl1aa9-BB7TJyww%3A1716880359787&ei=54NVZvbbL5Dn4-EPtOWQwAo&ved=0ahUKEwi2693f5a-GAxWQ8zgGHbQyBKgQ4dUDCBA&uact=5&oq=xanso+reviews";

  return (
    <section id="reviews" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          GOOGLE REVIEWS &bull; VERIFIED RESULTS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          What Ladies Like Yourself{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Say About Us
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          Have a look at our Google reviews from ladies like yourself who have joined our sessions and got amazing results.
        </p>

        {/* Read All on Google Link */}
        <div className="pt-2">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            <span>Read all reviews on Google (4.9 / 5.0)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Testimonials Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {INDIAN_TESTIMONIALS.map((t) => (
          <SurfaceCard
            key={t.id}
            hoverEffect
            className={`p-7 border border-border/80 shadow-soft flex flex-col justify-between ${t.offsetClass} transition-all`}
          >
            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-sans text-xs sm:text-sm text-text-main leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
              <div>
                <h4 className="font-display text-base font-semibold text-text-main">
                  {t.author}
                </h4>
                <p className="font-sans text-xs text-text-muted">
                  {t.role} &bull; {t.location}
                </p>
              </div>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {t.practiceDuration}
              </span>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </section>
  );
}

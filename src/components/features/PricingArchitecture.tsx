"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Check, Sparkles, MessageCircle, Tag, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  badgeColor?: string;
  standardPrice: number;
  discountedPrice: number;
  savings: number;
  durationLabel: string;
  billingFrequency: string;
  targetAudience: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const LIVE_GROUP_PLANS: PlanTier[] = [
  {
    id: "plan-2-months",
    name: "2 Months Plan",
    badge: "Beginner Choice",
    badgeColor: "bg-surfaceVariant text-text-muted border-border",
    standardPrice: 1999,
    discountedPrice: 1799,
    savings: 200,
    durationLabel: "2 Months",
    billingFrequency: "Every 2 months",
    targetAudience: "Best for starting out and trying online sessions for the first time",
    description: "Ideal foundation for beginners looking to build posture, flexibility, and daily mindfulness.",
    features: [
      "Live Sessions on Zoom (Mon - Fri)",
      "Certified Yoga Instructor",
      "Female only Batch",
      "Morning & Evening Batches (8 flexible slots daily)",
      "Free Diet Plan upon joining",
      "Daily Doubt Solving & WhatsApp guidance",
    ],
    highlighted: false,
  },
  {
    id: "plan-3-months",
    name: "3 Months Plan",
    badge: "BEST VALUE & MOST POPULAR",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    standardPrice: 2899,
    discountedPrice: 2609,
    savings: 290,
    durationLabel: "3 Months",
    billingFrequency: "Every 3 months",
    targetAudience: "Our most popular plan. For people already invested in yoga",
    description: "Our most chosen plan for lasting habit formation, weight management, and spinal ease.",
    features: [
      "Access to 7 Day Face Yoga included",
      "Live Sessions on Zoom (Mon - Fri)",
      "Certified Yoga Instructor",
      "Female only Batch",
      "Morning & Evening Batches (8 flexible slots daily)",
      "Free Customized Diet Plan",
      "Full On-Demand Recording Vault Access",
      "Weekly trainer progress check-ins",
    ],
    highlighted: true,
  },
  {
    id: "plan-6-months",
    name: "6 Months Plan",
    badge: "Deep Immersion",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    standardPrice: 4899,
    discountedPrice: 4409,
    savings: 490,
    durationLabel: "6 Months",
    billingFrequency: "Every 6 months",
    targetAudience: "If you are addicted to yoga, this plan is definitely for you!",
    description: "Comprehensive holistic lifestyle immersion for total mind, body, and breath transformation.",
    features: [
      "Unlimited online yoga access for 180 days",
      "1 month Access to Face Yoga masterclass",
      "+ Everything in 3 Months Plan",
      "Live Sessions on Zoom (Mon - Fri)",
      "Certified Yoga Instructor & Female only batch",
      "Priority batch switching & 1:1 diet updates",
      "Personalized Ayurvedic lifestyle consultation",
    ],
    highlighted: false,
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

export function PricingArchitecture() {
  const WHATSAPP_NUMBER = "919105837321";

  return (
    <section id="pricing" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <div className="inline-flex items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            TRANSPARENT VALUE &bull; OFFICIAL XANSO RATES
          </span>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1">
            <Tag className="w-3 h-3 text-amber-800" />
            <span>Extra 10% Discount</span>
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Simple, Affordable{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Membership Plans
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          Standard plans from the official Xanso platform with an extra 10% community discount applied. All plans include live interactive Zoom classes and a complimentary customized Indian diet plan!
        </p>
      </motion.div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {LIVE_GROUP_PLANS.map((plan) => {
          const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            `Hi! I would like to join Xanso's ${plan.name} at the discounted price of ₹${plan.discountedPrice.toLocaleString(
              "en-IN"
            )} (saved ₹${plan.savings}). Please send enrollment and Zoom details.`
          )}`;

          return (
            <SurfaceCard
              key={plan.id}
              hoverEffect
              className={`relative p-8 flex flex-col justify-between rounded-3xl transition-all ${
                plan.highlighted
                  ? "border-2 border-primary shadow-card ring-4 ring-primary/10 bg-surface"
                  : "border border-border/80 shadow-soft bg-surface"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-[11px] font-sans font-bold tracking-wider uppercase shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>BEST VALUE</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-semibold text-text-main">
                      {plan.name}
                    </span>
                    <span
                      className={`text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${plan.badgeColor}`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-text-muted mt-2 leading-relaxed">
                    {plan.targetAudience}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-4 border-t border-border/60">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-text-main">
                      ₹{plan.discountedPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="font-sans text-sm text-text-muted line-through">
                      ₹{plan.standardPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1 text-xs font-sans">
                    <span className="text-text-muted">{plan.billingFrequency}</span>
                    <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Save ₹{plan.savings} (10% OFF)
                    </span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="pt-4 border-t border-border/60 space-y-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-text-main block">
                    What is Included:
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-text-muted"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-6 border-t border-border/60 space-y-2.5">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-sans font-semibold transition-all shadow-soft ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-primaryHover"
                      : "bg-text-main text-surface hover:bg-black"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>SELECT &amp; CLAIM 10% OFF</span>
                </a>
                <p className="text-center text-[11px] font-sans text-text-muted">
                  Instant Zoom access &bull; Free diet plan upon joining
                </p>
              </div>
            </SurfaceCard>
          );
        })}
      </div>

      {/* Free Diet Plan Callout Banner */}
      <div className="mt-16 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-3 py-1 rounded-full inline-block">
          Exclusive Enrollment Bonus
        </span>
        <h4 className="font-display text-xl font-semibold text-amber-950">
          Get a Personalized Diet Plan for FREE upon joining!
        </h4>
        <p className="font-sans text-xs sm:text-sm text-amber-800">
          Formulated by qualified Indian dietitians for natural digestion, hormonal balance (PCOS/PCOD), and sustainable fat loss.
        </p>
      </div>
    </section>
  );
}

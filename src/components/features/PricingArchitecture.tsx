"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Check, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";

interface PlanTier {
  id: string;
  duration: string;
  tagline: string;
  price: string;
  priceSubtext: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

const PLANS: PlanTier[] = [
  {
    id: "plan-2-months",
    duration: "2 Months",
    tagline: "INVEST IN YOUR ROUTINE",
    price: "₹3,750",
    priceSubtext: "total investment",
    features: [
      "Female-only batches",
      "6 daily live Zoom slots",
      "WhatsApp trainer support",
      "Free personalized Indian diet plan",
      "Beginner low-impact posture focus",
    ],
    highlighted: false,
    ctaText: "Choose a plan",
  },
  {
    id: "plan-3-months",
    duration: "3 Months",
    tagline: "For those already invested in yoga",
    price: "₹2,899",
    priceSubtext: "/ month",
    features: [
      "Face Yoga masterclass included",
      "Full on-demand recording vault",
      "Weekly trainer check-ins & feedback",
      "Unlimited batch hopping flexibility",
      "Direct WhatsApp accountability mentor",
    ],
    highlighted: true,
    ctaText: "Choose a plan",
  },
  {
    id: "plan-6-months",
    duration: "6 Months",
    tagline: "DEEP TRANSFORMATION",
    price: "₹4,950",
    priceSubtext: "total investment",
    features: [
      "Everything in 3 months",
      "Priority batch switching",
      "Personalized Ayurvedic consult",
      "Bi-weekly diet progression tuning",
      "Lifetime community access & events",
    ],
    highlighted: false,
    ctaText: "Choose a plan",
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

  const getWaLinkForPlan = (planName: string, price: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hi Xanso Fitness! I want to enroll in the ${planName} (${price}) with the female-only batch.`
    )}`;
  };

  return (
    <section id="pricing" className="py-24 md:py-36 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-16 space-y-3"
      >
        <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-forest-deep px-4 py-1.5 rounded-full bg-forest-deep/5 border border-forest-deep/10">
          TRANSPARENT VALUE
        </span>
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep uppercase">
          SIMPLE MEMBERSHIP PLANS
        </h2>
        <p className="font-sans text-sm sm:text-base text-muted-gray">
          Every plan includes all live batches and full on-demand access.
        </p>
      </motion.div>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {PLANS.map((plan) => {
          const isLime = plan.highlighted;

          return (
            <motion.div
              key={plan.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                isLime
                  ? "bg-lime-accent text-lime-text shadow-elevated scale-100 md:-translate-y-2 border-2 border-lime-text/10"
                  : "bg-neutral-surface text-charcoal shadow-soft border border-black/5 hover:shadow-card"
              }`}
            >
              {/* Card Header & Tag */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-display text-2xl sm:text-3xl font-semibold ${
                      isLime ? "text-lime-text" : "text-charcoal"
                    }`}
                  >
                    {plan.duration}
                  </h3>
                  {isLime && (
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-charcoal text-white">
                      Featured
                    </span>
                  )}
                </div>

                <p
                  className={`text-xs font-sans font-medium uppercase tracking-wider ${
                    isLime ? "text-lime-text/80" : "text-muted-gray"
                  }`}
                >
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="pt-2 pb-4 border-b border-black/10">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`font-display text-4xl sm:text-5xl font-bold tracking-tight ${
                        isLime ? "text-lime-text" : "text-charcoal"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs font-sans ${
                        isLime ? "text-lime-text/80" : "text-muted-gray"
                      }`}
                    >
                      {plan.priceSubtext}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isLime ? "bg-lime-text text-lime-accent" : "bg-forest-deep text-white"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-sans leading-relaxed ${
                          isLime ? "text-lime-text font-medium" : "text-charcoal"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-auto">
                <a
                  href={getWaLinkForPlan(plan.duration, plan.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isLime
                      ? "bg-charcoal text-white hover:bg-black shadow-card hover:scale-[1.02]"
                      : "bg-white/80 hover:bg-white text-charcoal border border-black/10 hover:border-black/20 shadow-xs hover:scale-[1.02]"
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>{plan.ctaText}</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Trust Guarantee Strip */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-14 max-w-xl mx-auto flex items-center justify-center gap-2 text-center text-xs font-sans text-muted-gray"
      >
        <ShieldCheck className="w-4 h-4 text-forest-deep flex-shrink-0" />
        <span>100% Risk-Free Guarantee &bull; Flexible Batch Rescheduling &bull; Ayush Certified Guidance</span>
      </motion.div>
    </section>
  );
}

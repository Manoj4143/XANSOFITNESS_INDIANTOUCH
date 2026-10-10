"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { BookOpen, ArrowUpRight, Sparkles, Heart, Activity, Moon, ShieldAlert } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  tag: string;
  accent: string;
}

const XANSO_BLOGS: BlogPost[] = [
  {
    title: "Boosting Immunity Naturally: Yoga & Ayurvedic Tips in the Face of Rising Infections",
    category: "Ayurveda & Immunity",
    excerpt: "Ancient Indian preventative techniques combining Dinacharya, Pranayama (Bhastrika, Kapalbhati), and immune-boosting spices like Giloy, Tulsi, and Haldi.",
    readTime: "5 min read",
    tag: "Ayush Guidance",
    accent: "from-amber-500/10 to-orange-500/5",
  },
  {
    title: "Navigating Menopause: Yoga and Lifestyle Tips for Indian Women",
    category: "Women's Wellness",
    excerpt: "Managing hormonal shifts, hot flashes, bone density, and emotional equilibrium through pelvic floor restoration, cooling Sheetali pranayama, and nutrition.",
    readTime: "6 min read",
    tag: "Female Health",
    accent: "from-rose-500/10 to-pink-500/5",
  },
  {
    title: "Is Your Diet Ruining Your Yoga Progress? The Best Foods for Flexibility & Strength",
    category: "Nutrition & Diet",
    excerpt: "Why excessive processed foods cause joint inflammation and how simple Sattvic meals, hydration, and natural plant proteins unlock deeper flexibility in asanas.",
    readTime: "4 min read",
    tag: "Diet Advice",
    accent: "from-emerald-500/10 to-teal-500/5",
  },
  {
    title: "Overthinking at Night? This Simple Yoga Routine Will Help You Sleep Better",
    category: "Mental Peace & Sleep",
    excerpt: "A calm 12-minute bedtime sequence including Viparita Karani (legs up the wall), gentle spinal twists, and 4-7-8 breathwork to quiet the nocturnal monkey mind.",
    readTime: "4 min read",
    tag: "Sleep & Calm",
    accent: "from-indigo-500/10 to-blue-500/5",
  },
  {
    title: "The Complete Guide to PCOD and PCOS (Explained Simply)",
    category: "Hormonal Balance",
    excerpt: "Demystifying polycystic ovarian syndrome for Indian women with science-backed, sustainable movement, stress mitigation, and insulin-regulating Indian dietary adjustments.",
    readTime: "7 min read",
    tag: "PCOD Relief",
    accent: "from-purple-500/10 to-violet-500/5",
  },
  {
    title: "Healthy Kids, Happy Parents: DIY Nutritious Alternatives to Store-Bought Cereals",
    category: "Family Health",
    excerpt: "Nutrient-dense Indian kitchen breakfast swaps like ragi sheera, sprouted moong chilla, and dry-fruit laddoos that keep children energetic and focus-ready without refined sugar.",
    readTime: "5 min read",
    tag: "Parenting & Diet",
    accent: "from-amber-500/10 to-yellow-500/5",
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

export function ExpertBlogs() {
  return (
    <section id="blogs" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          HEALTH & AYUSH WISDOM
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Expert Articles &{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Lifestyle Guides
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          Go through our detailed blogs by wellness experts on how to maintain a healthy lifestyle without sacrificing your schedule and minimal diet.
        </p>
      </motion.div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {XANSO_BLOGS.map((blog) => (
          <SurfaceCard
            key={blog.title}
            hoverEffect
            className={`p-6 sm:p-7 border border-border shadow-soft flex flex-col justify-between bg-gradient-to-b ${blog.accent} to-surface transition-all`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                  {blog.category}
                </span>
                <span className="text-xs text-text-muted font-sans font-medium">
                  {blog.readTime}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-text-main leading-snug hover:text-primary transition-colors">
                {blog.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
                {blog.excerpt}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-sans">
              <span className="text-primary font-semibold">
                By Xanso Wellness Team
              </span>
              <a
                href="#pricing"
                className="inline-flex items-center gap-1 font-semibold text-text-main hover:text-primary transition-colors"
              >
                <span>Read Guide</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </section>
  );
}

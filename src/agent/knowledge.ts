/**
 * Xanso Fitness Website Knowledge Base
 * Sourced directly from the official Xanso platform:
 * - Daily Live Batches & Timings (8 weekday batches)
 * - Ayush & Yoga Alliance Certified Instructors
 * - Transparent Membership Pricing (2, 3, 6 Months & 10% WhatsApp discount)
 * - 3 Ways to Train (Group, 1:1 Transformation, Corporate)
 * - Female-Only Batches, Free Indian Diet Plan, 7-Day Face Yoga
 * - Posture, weight loss, pranayama, and beginner modifications
 */

export interface ScheduleItem {
  time: string;
  name: string;
  instructor: string;
  focus: string;
  period: "morning" | "evening";
}

export interface TrainerKnowledge {
  name: string;
  role: string;
  qualifications: string;
  specialties: string;
  timings: string;
  days: string;
  rating: number;
  bio: string;
}

export interface PlanKnowledge {
  duration: string;
  tagline: string;
  price: string;
  priceSubtext: string;
  discountPrice?: string;
  features: string[];
  highlighted: boolean;
}

export const XANSO_KNOWLEDGE = {
  brand: {
    name: "Xanso Fitness",
    tagline: "Get fit from the comfort of your home.",
    subtext:
      "Live, interactive yoga classes with certified instructors, 8 flexible batches a day, and a free personalised Indian diet plan when you join.",
    website: "https://xanso.in",
    whatsappNumber: "919105837321",
    whatsappLink: "https://wa.me/919105837321",
    stats: {
      members: "10,000+ members",
      rating: "4.9/5 Google rating",
      batchesCount: "8 batches every weekday (IST)",
      format: "100% Live on Zoom with real-time posture corrections",
    },
  },

  schedule: {
    morning: [
      {
        time: "6:00 AM IST",
        name: "Brahma Muhurta Flow",
        instructor: "Apeksha Chauhan",
        focus: "Pranic alignment, energy awakening, spinal mobility",
        period: "morning",
      },
      {
        time: "7:00 AM IST",
        name: "Classical Hatha",
        instructor: "Apeksha Chauhan",
        focus: "Traditional asana alignment, strength, breathing",
        period: "morning",
      },
      {
        time: "8:00 AM IST",
        name: "Strength & Alignment",
        instructor: "Navya Gupta",
        focus: "Core stability, pelvic & hip opening, posture",
        period: "morning",
      },
      {
        time: "9:00 AM IST",
        name: "Gentle Flow & Breath",
        instructor: "Muskaan Wahi",
        focus: "Gentle morning mobility, joint decompression, breathwork",
        period: "morning",
      },
    ] as ScheduleItem[],

    evening: [
      {
        time: "4:30 PM IST",
        name: "Neck & Spine Relief",
        instructor: "Neelam Rana",
        focus: "Cervical & thoracic decompression, desk posture reset",
        period: "evening",
      },
      {
        time: "5:30 PM IST",
        name: "Sunset Hatha",
        instructor: "Neelam Rana",
        focus: "Hatha flow, restorative hip openers, stress release",
        period: "evening",
      },
      {
        time: "6:30 PM IST",
        name: "Facial Reboot & Core",
        instructor: "Navya Gupta",
        focus: "Face toning, core strengthening, joint flexibility",
        period: "evening",
      },
      {
        time: "7:30 PM IST",
        name: "Restorative Yin",
        instructor: "Muskaan Wahi",
        focus: "Deep fascia release, parasympathetic nervous system, sleep prep",
        period: "evening",
      },
    ] as ScheduleItem[],

    flexibilityNote:
      "All batches run Monday to Friday on Zoom. If your work schedule changes, you can attend any other morning or evening batch on the same day without extra fees.",
  },

  trainers: [
    {
      name: "Neelam Rana",
      role: "Certified Yoga Instructor",
      qualifications: "Yoga Alliance & Ministry of Ayush Certified",
      specialties: "Hatha, Ashtanga, cervical spine mobility, posture correction, joints opening",
      timings: "04:30 - 05:30 PM IST & 05:30 - 06:30 PM IST",
      days: "Monday - Friday",
      rating: 4.99,
      bio: "Leads popular evening batches. Expert in joints opening, cervical spine mobility, and posture correction.",
    },
    {
      name: "Muskaan Wahi",
      role: "Certified Yoga & Face Yoga Instructor",
      qualifications: "Ayush Mantralaya & Face Yoga Master",
      specialties: "Face Yoga, Vinyasa, core mobility, restorative bedtime pranayama",
      timings: "09:00 - 10:00 AM IST & 07:30 - 08:30 PM IST",
      days: "Monday - Friday",
      rating: 4.98,
      bio: "Pioneer of our 7-Day Face Yoga program. Renowned for soothing bedtime pranayama and energizing morning flows.",
    },
    {
      name: "Apeksha Chauhan",
      role: "Certified Yoga Instructor",
      qualifications: "Ayush Mantralaya Certified",
      specialties: "Early morning Brahma Muhurta, classical Hatha, desk posture relief, pranayama",
      timings: "05:30 - 06:30 AM IST & 07:00 - 08:00 AM IST",
      days: "Monday - Friday",
      rating: 4.97,
      bio: "Specializes in early morning spinal alignment, classical breathwork, and decompressing desk posture.",
    },
    {
      name: "Navya Gupta",
      role: "Certified Yoga Instructor",
      qualifications: "National Yoga Player & Ministry of Ayush Certified",
      specialties: "Deep flexibility, spine mobility, safe structural conditioning, belly fat reduction",
      timings: "08:00 - 09:00 AM IST & 06:30 - 07:30 PM IST",
      days: "Monday - Friday",
      rating: 4.96,
      bio: "National level player focusing on safe flexibility, hip opening, and functional core toning.",
    },
  ] as TrainerKnowledge[],

  pricing: [
    {
      duration: "2 Months",
      tagline: "INVEST IN YOUR ROUTINE",
      price: "₹3,750",
      priceSubtext: "total investment",
      discountPrice: "₹1,799 - ₹3,375",
      features: [
        "Dedicated Female-only batches available",
        "6-8 daily live Zoom slots (flexible switching)",
        "Direct WhatsApp trainer support",
        "Free personalized Indian diet plan",
        "Beginner low-impact posture focus",
      ],
      highlighted: false,
    },
    {
      duration: "3 Months",
      tagline: "MOST POPULAR • DEEP VALUE",
      price: "₹2,899",
      priceSubtext: "/ month",
      discountPrice: "₹2,609 / mo with WhatsApp discount",
      features: [
        "7-Day Face Yoga masterclass included free",
        "Full on-demand recording vault",
        "Weekly trainer check-ins & feedback",
        "Unlimited batch hopping flexibility",
        "Direct WhatsApp accountability mentor",
      ],
      highlighted: true,
    },
    {
      duration: "6 Months",
      tagline: "DEEP TRANSFORMATION",
      price: "₹4,950",
      priceSubtext: "total investment",
      discountPrice: "₹4,409 with WhatsApp discount",
      features: [
        "Everything in 3 months",
        "Priority batch switching",
        "Personalized Ayurvedic consultation",
        "Bi-weekly diet progression tuning",
        "Lifetime community access & events",
      ],
      highlighted: false,
    },
  ] as PlanKnowledge[],

  threeWaysToTrain: [
    {
      name: "Group Yoga",
      description:
        "Daily interactive Zoom batches with certified instructors. Morning and evening slots, plus dedicated female-only batches.",
      action: "Explore live schedule (#schedule)",
    },
    {
      name: "Transformation (1:1)",
      description:
        "Custom fitness plan for your body, dedicated 1:1 mentor guidance, and real-time form checks.",
      action: "Begin 1:1 on WhatsApp",
    },
    {
      name: "Corporate Sessions",
      description:
        "Wellness and ergonomic sessions for company teams designed to boost focus, energy, and relieve desk posture tension.",
      action: "Enquire for your team on WhatsApp",
    },
  ],

  femaleOnlyBatches: {
    description:
      "Specialized female-only batches run both in morning and evening slots. Guided exclusively by certified senior female instructors (Neelam Rana, Muskaan Wahi, Apeksha Chauhan, Navya Gupta) in a private, supportive environment.",
    highlight: "Safe, supportive, private, and comfortable for women of all fitness levels.",
  },

  dietPlan: {
    title: "Free Personalized Indian Diet Plan",
    description:
      "Every new member receives a complimentary 1-on-1 diet assessment and custom Indian meal plan formulated by qualified nutritionists. Built around sustainable home meals (roti, dal, sabzi, seasonal fruits, Ayurvedic spices) for weight loss, gut health, joint flexibility, and energy—no crash dieting or starvation.",
  },

  faceYoga: {
    title: "7-Day Signature Face Yoga Masterclass",
    instructor: "Muskaan Wahi",
    description:
      "Natural facial muscle exercises, lymphatic drainage massage, and acupressure points. Designed to relieve jaw clenching, drain morning puffiness, lift facial contour, and restore natural glow.",
  },

  deskPostureAndHealth: {
    deskJobRelief:
      "Targeted decompression for cervical spine, shoulders, and lumbar back strained by long sitting and laptop work. Led in morning by Apeksha Chauhan and evening by Neelam Rana.",
    beginnerFriendly:
      "Over 60% of Xanso members start as complete beginners with stiff bodies. Instructors demonstrate modifications, regressions, and prop usage (yoga belts, blocks, pillows) so you never feel strained.",
    weightLoss:
      "Combines dynamic Hatha, core conditioning, and clean Indian nutrition for steady, joint-safe fat loss without crash dieting.",
  },

  specialDiscount: {
    offer: "Extra 10% Discount",
    howToClaim:
      "Book directly through our WhatsApp hotline (+91 91058 37321) to unlock an instant 10% discount on all 2-month, 3-month, and 6-month plans.",
  },
};

---
name: Botanical Editorial Luxury
colors:
  surface: '#f8faf7'
  surface-dim: '#d8dbd8'
  surface-bright: '#f8faf7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f1'
  surface-container: '#eceeeb'
  surface-container-high: '#e7e9e6'
  surface-container-highest: '#e1e3e0'
  on-surface: '#191c1b'
  on-surface-variant: '#444937'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#eff1ee'
  outline: '#757966'
  outline-variant: '#c5c9b2'
  surface-tint: '#4f6700'
  primary: '#4f6700'
  on-primary: '#ffffff'
  primary-container: '#d4fa70'
  on-primary-container: '#597300'
  inverse-primary: '#b0d44f'
  secondary: '#4d6355'
  on-secondary: '#ffffff'
  secondary-container: '#d0e9d7'
  on-secondary-container: '#53695b'
  tertiary: '#476553'
  on-tertiary: '#ffffff'
  tertiary-container: '#d2f4dd'
  on-tertiary-container: '#53715f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbf168'
  primary-fixed-dim: '#b0d44f'
  on-primary-fixed: '#161f00'
  on-primary-fixed-variant: '#3a4d00'
  secondary-fixed: '#d0e9d7'
  secondary-fixed-dim: '#b4ccbb'
  on-secondary-fixed: '#0a2015'
  on-secondary-fixed-variant: '#364c3f'
  tertiary-fixed: '#c9ebd4'
  tertiary-fixed-dim: '#adceb9'
  on-tertiary-fixed: '#032113'
  on-tertiary-fixed-variant: '#304d3c'
  background: '#f8faf7'
  on-background: '#191c1b'
  surface-variant: '#e1e3e0'
  forest-deep: '#0E2318'
  forest-surface: '#163324'
  lime-accent: '#D4FA70'
  lime-text: '#1E3A0F'
  neutral-surface: '#E8EBE6'
  neutral-light: '#F8FAF7'
  charcoal: '#181A18'
  muted-gray: '#707570'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  eyebrow:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.15em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.5rem
  margin-desktop: 4rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

# DESIGN.md — Xanso Fitness & Sanctuary
## 1. Brand Essence & Visual Language
- **Aesthetic**: Editorial Botanical Luxury. A blend of organic Ayurvedic tradition with high-fashion minimalist wellness.
- **Lighting & Texture**: Dappled sunlight through tropical monstera/palm foliage over rich deep green velvet backgrounds, contrasted with clean, airy off-white gallery spaces.
- **Signature Visual Signature**: The flowing neon-pistachio ribbon intertwining with high-contrast grayscale bodily forms.
---
## 2. Color System & Tokens
| Token Name | Hex Code | Role |
| :--- | :--- | :--- |
| `forest-deep` | `#0E2318` | Hero background & dark surface base |
| `forest-surface` | `#163324` | Hero pill tags & card borders |
| `lime-accent` | `#D4FA70` | Primary brand accent, 3-Month tier, ribbon element |
| `lime-text` | `#1E3A0F` | High-contrast text on lime backgrounds |
| `neutral-surface` | `#E8EBE6` | Light section card surfaces & inactive pricing cards |
| `neutral-light` | `#F8FAF7` | Body background for lower sections |
| `charcoal` | `#181A18` | Primary dark headings & active CTA buttons |
| `muted-gray` | `#707570` | Subtitles, batch instructor names, timings |
---
## 3. Typography Hierarchy
- **Primary Display Font**: Editorial Serif (Playfair Display / Cormorant Garamond)
- **Body & Interface Font**: Plus Jakarta Sans
- **Hierarchy**:
  - `Hero H1`: 48px - 64px, font-normal, tracking-tight
  - `Section H2`: 36px - 44px, font-medium, color `forest-deep` or `charcoal`
  - `Category Eyebrow`: 12px - 14px, uppercase, tracking-widest, font-semibold
  - `Card Title`: 20px - 24px, font-medium
  - `Batch Schedule List`: 14px - 15px, tabular layout
---
## 4. Layout & Component Architecture
### A. Hero Section (Botanical Dark Mode)
- **Background**: Deep forest green `#0E2318` with soft leaf shadow overlay.
- **Navbar**: Translucent, minimalist text links (Programs, Timings, Pricing, Instructors, Reviews).
- **Eyebrow**: Pill badge with LIVE YOGA ON ZOOM · FEMALE-ONLY BATCHES.
- **H1**: "Get fit from the comfort of your home."
- **Subtext**: "Live interactive classes with certified instructors, a flexible schedule, and a free personalized roadmap when you join."
- **CTAs**: Primary [Start on WhatsApp], Secondary [See batch timings].
- **Center Hero Asset**: Meditating practitioner centered on yoga mat.
- **Stats Strip**: 4-column counter (10,000+ Members, 4.8/5 Avg Rating, Qualified Instructors, 100% Live Classes).
### B. "Three Ways to Train with Us"
- **Left Column**: Full-height monochrome editorial card titled "The FORM COLLECTIVE - Purpose-Driven Physical Therapy".
- **Right Column**: "Three ways to train with us", Group Yoga Card, Transformation Card (Lime #D4FA70), Corporate Sessions Card.
### C. "Daily Live Batches" (Ribbon & Schedule)
- **Visual Motif**: Dynamic, curving neon-lime ribbon crossing the canvas behind a monochrome yoga asana photo cutout.
- **Morning Awaken & Evening Unwind** schedules.
### D. Simple Membership Plans (Pricing)
- **3-Tier Grid**: 2 Months (₹3,750), 3 Months Featured in #D4FA70 (₹2,899 / mo), 6 Months (₹4,950).

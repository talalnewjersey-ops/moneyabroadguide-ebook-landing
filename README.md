# MoneyAbroadGuide — Ebook Sales Landing Page

> **"How to Build Your Credit Score in the USA (2026)"**
> Premium fintech-style landing page by Talal Eddaouahiri

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-FF0080?logo=framer)](https://framer.com/motion)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?logo=vite)](https://vitejs.dev)

---

## Project Overview

A **production-ready, premium fintech-style ebook sales landing page** for MoneyAbroadGuide. Designed to look comparable to Stripe, Mercury, Linear, and Ramp — targeting immigrants, expats, international students, and visa holders in the USA.

**Product:** How to Build Your Credit Score in the USA (2026)
**Price:** $19.99
**Author:** Talal Eddaouahiri

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3 | UI Framework |
| TypeScript | 5.8 | Type Safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations |
| Vite | 6.1 | Build Tool |
| Lucide React | 0.475 | Icons |

---

## Project Structure

```
moneyabroadguide-ebook-landing/
├── index.html                    # HTML with SEO, OG, Schema.org
├── package.json                  # Dependencies
├── vite.config.ts                # Vite config (code splitting)
├── tailwind.config.ts            # Custom theme (navy/emerald palette)
├── tsconfig.json                 # TypeScript strict config
├── postcss.config.js             # PostCSS config
└── src/
    ├── main.tsx                  # React entry point
    ├── App.tsx                   # Root component
    ├── index.css                 # Global styles + Tailwind
    └── components/
        ├── Navbar.tsx            # Sticky navbar with mobile menu
        ├── Hero.tsx              # Hero section with animations
        ├── Problem.tsx           # Problem section (pain points)
        ├── Solution.tsx          # Solution + book mockup
        ├── WhatsInside.tsx       # 6-chapter breakdown
        ├── Timeline.tsx          # Credit score journey timeline
        ├── BeforeAfter.tsx       # Before/After comparison
        ├── Bonuses.tsx           # 4 free bonus resources
        ├── Author.tsx            # Author profile section
        ├── Testimonials.tsx      # 6 testimonials grid
        ├── ValueStack.tsx        # Price/value display
        ├── FAQ.tsx               # Accordion FAQ (10 questions)
        ├── Guarantee.tsx         # 30-day money-back guarantee
        ├── FinalCTA.tsx          # Final conversion section
        └── Footer.tsx            # Links + legal
```

---

## All Sections Implemented

1. **Navbar** — Fixed, scroll-aware, mobile-responsive with hamburger menu
2. **Hero** — Animated headline, floating cards, social proof, stats
3. **Problem** — 4 pain point cards with red visual treatment
4. **Solution** — Book mockup + pillar benefits
5. **What's Inside** — 6-chapter grid with topics
6. **Timeline** — Animated credit score journey (0 → 750+)
7. **Before/After** — Comparison cards + score visualization
8. **Bonuses** — 4 bonus resources with value display
9. **Author** — Talal Eddaouahiri profile with credentials
10. **Testimonials** — 6 reviews with score journeys
11. **Value Stack** — Full price/value breakdown
12. **FAQ** — Accordion with 10 Q&As
13. **Guarantee** — 30-day money-back guarantee section
14. **Final CTA** — Conversion-optimized final section
15. **Footer** — Navigation + legal links

---

## Design System

### Colors
```
Deep Navy Background: #0a1628
Darkest Navy:         #020b18
Card Background:      rgba(255,255,255,0.03)
Primary Emerald:      #10b981
Light Emerald:        #34d399
Dark Emerald:         #059669
White:                #ffffff
Soft Gray:            rgba(255,255,255,0.6)
```

### Typography
- **Headings:** Bricolage Grotesque (Display font)
- **Body:** Inter (System font)
- **Letter spacing:** -0.02em on headings

### Effects
- ✅ Glassmorphism cards (`backdrop-blur + bg-white/5`)
- ✅ Premium gradients (navy-to-navy-dark, emerald gradient)
- ✅ Glow effects on key CTAs
- ✅ Subtle grid background pattern
- ✅ Floating animation on book mockup
- ✅ Animated progress bars

---

## SEO & Performance

### Meta Tags
- ✅ Title, description, keywords, author
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Card (Large Image)
- ✅ Canonical URL

### Schema.org Structured Data
- ✅ Product schema with price
- ✅ Author/Person schema
- ✅ AggregateRating schema
- ✅ Offer schema

### Performance
- ✅ Google Fonts preconnect
- ✅ Manual chunk splitting (vendor/animations)
- ✅ Framer Motion lazy animations
- ✅ React intersection observer (lazy section loading)
- ✅ Mobile-first responsive design

---

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/talalnewjersey-ops/moneyabroadguide-ebook-landing.git
cd moneyabroadguide-ebook-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

### Type Checking

```bash
npm run typecheck
```

---

## Deployment Guide

### Option 1: Vercel (Recommended — Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (auto-detects Vite)
vercel

# Set custom domain in Vercel dashboard
# Example: credit.moneyabroadguide.com
```

### Option 2: Netlify

```bash
# Build command: npm run build
# Publish directory: dist
# Node version: 18+

# Or drag-and-drop the dist/ folder to netlify.com/drop
```

### Option 3: GitHub Pages

```bash
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm install gh-pages --save-dev
npm run build
npm run deploy
```

### Environment Variables (Optional)

Create a `.env` file for any future integrations:

```env
VITE_GUMROAD_PRODUCT_ID=your_product_id
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

---

## Checkout Integration

To connect a payment processor, update the CTA links in:
- `src/components/Guarantee.tsx` (line ~80)
- `src/components/FinalCTA.tsx` (line ~60)

**Recommended platforms:**
- **Gumroad** — Easiest, no code needed
- **Lemon Squeezy** — Modern, great UX
- **Stripe** — Full control, requires backend

```tsx
// Replace the href in CTA buttons:
href="https://gumroad.com/l/YOUR_PRODUCT"
// OR
href="https://your-lemon-squeezy-link"
```

---

## Customization Guide

### Update Price
Search for `$19.99` across all files and update.

### Update Author Photo
Replace the text avatar "TE" in `Author.tsx` with:
```tsx
<img src="/author-photo.jpg" alt="Talal Eddaouahiri" className="w-48 h-48 rounded-full" />
```

### Add Real Testimonial Photos
In `Testimonials.tsx`, replace avatar divs with `<img>` tags.

### Update OG Image
Replace the placeholder URL in `index.html`:
```html
<meta property="og:image" content="https://your-domain.com/og-image.jpg" />
```

---

## Analytics Integration

Add to `index.html` `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## License

MIT — Free to use and modify for your projects.

---

## Credits

**Built by:** Claude (Anthropic) for MoneyAbroadGuide
**Brand:** MoneyAbroadGuide
**Author:** Talal Eddaouahiri
**Stack:** React + TypeScript + Tailwind CSS + Framer Motion + Vite

---

*This landing page is designed to convert at premium fintech standards — comparable to Stripe, Mercury, Linear, and Ramp.*# moneyabroadguide-ebook-landing
Premium ebook sales landing page for MoneyAbroadGuide - How to Build Your Credit Score in the USA (2026)

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mohammed A.',
    origin: 'Saudi Arabia to New Jersey',
    visa: 'H-1B Visa',
    rating: 5,
    score: '0 to 720',
    time: '8 months',
    review: "I arrived in the US with absolutely nothing in terms of credit. This guide gave me the exact steps to follow. Within 8 months I went from no credit to a 720 score and got approved for my first apartment without a co-signer.",
    avatar: 'MA',
  },
  {
    name: 'Priya S.',
    origin: 'India to California',
    visa: 'F-1 to H-1B',
    rating: 5,
    score: '580 to 745',
    time: '10 months',
    review: "As an international student, I thought I had to wait until I got my H-1B to start building credit. This guide showed me that was completely wrong. I started during my OPT and now have an excellent score.",
    avatar: 'PS',
  },
  {
    name: 'Carlos M.',
    origin: 'Mexico to Texas',
    visa: 'Green Card',
    rating: 5,
    score: '0 to 760',
    time: '14 months',
    review: "The authorized user strategy alone was worth the price of this book 10x over. My wife added me to her account and my score jumped 80 points in one month. Clear, actionable, and no fluff.",
    avatar: 'CM',
  },
  {
    name: 'Yuki T.',
    origin: 'Japan to New York',
    visa: 'O-1 Visa',
    rating: 5,
    score: '640 to 780',
    time: '6 months',
    review: "The most comprehensive guide on US credit I have found, specifically written for immigrants. The chapter on ITIN vs SSN cleared up so much confusion. My score went from 640 to 780 following these steps.",
    avatar: 'YT',
  },
  {
    name: 'Amara K.',
    origin: 'Nigeria to Georgia',
    visa: 'F-1 Student',
    rating: 5,
    score: '0 to 690',
    time: '7 months',
    review: "I thought as an F-1 student I had no options. This guide proved me wrong. The secured card recommendations alone saved me from making costly mistakes. Seven months later and I have a solid credit foundation.",
    avatar: 'AK',
  },
  {
    name: 'Wei L.',
    origin: 'China to Washington',
    visa: 'H-1B to Green Card',
    rating: 5,
    score: '700 to 800',
    time: '12 months',
    review: "Already had some credit but could not break the 750 barrier. The optimization strategies in chapter 6 were exactly what I needed. Crossed 800 for the first time last month. Highly recommend to anyone serious about credit.",
    avatar: 'WL',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="testimonials" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080f1e] to-[#0a1628]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Real Results from
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #059669)' }}>
              Real Immigrants
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            847+ readers from 40+ countries have used this guide to build their US credit score.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <Quote className="w-8 h-8 text-emerald-400/20 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="flex items-center gap-3 mb-4 px-3 py-2 rounded-lg" style={{ background: 'rgba(16,185,129,0.08)' }}>
                <div>
                  <div className="text-white/40 text-xs">Score journey</div>
                  <div className="text-emerald-400 font-bold text-sm">{t.score}</div>
                </div>
                <div className="border-l border-white/10 pl-3">
                  <div className="text-white/40 text-xs">Timeframe</div>
                  <div className="text-white font-medium text-sm">{t.time}</div>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6">"{t.review}"</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3a6c)', color: '#10b981' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.origin}</div>
                  <div className="text-emerald-400/60 text-xs">{t.visa}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 text-white/30 text-sm"
        >
          <span>847+ verified readers</span>
          <span>•</span>
          <span>40+ countries represented</span>
          <span>•</span>
          <span>4.9/5 average rating</span>
          <span>•</span>
          <span>All reviews are from real customers</span>
        </motion.div>
      </div>
    </section>
  );
}import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mohammed A.',
    origin: 'Saudi Arabia → New Jersey',
    visa: 'H-1B Visa',
    rating: 5,
    score: '0 → 720',
    time: '8 months',
    review: 'I arrived in the US with absolutely nothing in terms of credit. This guide gave me the exact steps to follow. Within 8 months I went from no credit to a 720 score and got approved for my first apartment without a co-signer.',
    avatar: 'MA',
  },
  {
    name: 'Priya S.',
    origin: 'India → California',
    visa: 'F-1 → H-1B',
    rating: 5,
    score: '580 → 745',
    time: '10 months',
    review: 'As an international student, I thought I had to wait until I got my H-1B to start building credit. This guide showed me that was completely wrong. I started during my OPT and now have an excellent score.',
    avatar: 'PS',
  },
  {
    name: 'Carlos M.',
    origin: 'Mexico → Texas',
    visa: 'Green Card',
    rating: 5,
    score: '0 → 760',
    time: '14 months',
    review: 'The authorized user strategy alone was worth the price of this book 10x over. My wife added me to her account and my score jumped 80 points in one month. Clear, actionable, and no fluff.',
    avatar: 'CM',
  },
  {
    name: 'Yuki T.',
    origin: 'Japan → New York',
    visa: 'O-1 Visa',
    rating: 5,
    score: '640 → 780',
    time: '6 months',
    review: 'The most comprehensive guide on US credit I have found, specifically written for immigrants. The chapter on ITIN vs SSN cleared up so much confusion. My score went from 640 to 780 following these steps.',
    avatar: 'YT',
  },
  {
    name: 'Amara K.',
    origin: 'Nigeria → Georgia',
    visa: 'F-1 Student',
    rating: 5,
    score: '0 → 690',
    time: '7 months',
    review: 'I thought as an F-1 student I had no options. This guide proved me wrong. The secured card recommendations alone saved me from making costly mistakes. Seven months later and I have a solid credit foundation.',
    avatar: 'AK',
  },
  {
    name: 'Wei L.',
    origin: 'China → Washington',
    visa: 'H-1B → Green Card',
    rating: 5,
    score: '700 → 800',
    time: '12 months',
    review: 'Already had some credit but couldn't break the 750 barrier. The optimization strategies in chapter 6 were exactly what I needed. Crossed 800 for the first time last month. Highly recommend to anyone serious about credit.',
    avatar: 'WL',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="testimonials" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080f1e] to-[#0a1628]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Real Results from
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #059669)' }}>
              Real Immigrants
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            847+ readers from 40+ countries have used this guide to build their US credit score.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-emerald-400/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Score result */}
              <div className="flex items-center gap-3 mb-4 px-3 py-2 rounded-lg" style={{ background: 'rgba(16,185,129,0.08)' }}>
                <div>
                  <div className="text-white/40 text-xs">Score journey</div>
                  <div className="text-emerald-400 font-bold text-sm">{t.score}</div>
                </div>
                <div className="border-l border-white/10 pl-3">
                  <div className="text-white/40 text-xs">Timeframe</div>
                  <div className="text-white font-medium text-sm">{t.time}</div>
                </div>
              </div>

              {/* Review text */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">"{t.review}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3a6c)', color: '#10b981' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.origin}</div>
                  <div className="text-emerald-400/60 text-xs">{t.visa}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 text-white/30 text-sm"
        >
          <span>847+ verified readers</span>
          <span>•</span>
          <span>40+ countries represented</span>
          <span>•</span>
          <span>4.9/5 average rating</span>
          <span>•</span>
          <span>All reviews are from real customers</span>
        </motion.div>
      </div>
    </section>
  );
}

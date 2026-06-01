import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Star, Shield, Zap, Globe } from 'lucide-react';

export default function FinalCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="cta" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#020b18]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.08]"
        style={{ background: 'radial-gradient(ellipse, #10b981, transparent)' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Audience tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {['Immigrants', 'Expats', 'Int'l Students', 'Visa Holders', 'Green Card'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#34d399' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Your Financial Future
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)' }}
            >
              Starts Today
            </span>
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Every day without a credit score is a day you're paying more, qualifying for less,
            and falling behind. The best time to start was when you arrived. The second best time is now.
          </p>

          {/* Feature icons */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            {[
              { icon: Zap, text: 'Instant Download' },
              { icon: Globe, text: 'Works for All Visas' },
              { icon: Star, text: '4.9/5 Rating' },
              { icon: Shield, text: '30-Day Guarantee' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/50 text-sm">
                <item.icon className="w-5 h-5 text-emerald-400" />
                {item.text}
              </div>
            ))}
          </div>

          {/* Price display */}
          <div className="inline-flex flex-col items-center mb-8">
            <div className="text-white/30 text-sm mb-1">One-time payment</div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-white/30 text-2xl line-through">$94.99</span>
              <span
                className="font-extrabold text-6xl bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #10b981)' }}
              >
                $19.99
              </span>
            </div>
            <div className="text-emerald-400/60 text-sm">Save $75 — Limited time offer</div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <motion.a
              href="https://moneyabroadguide.com/checkout"
              whileHover={{ scale: 1.05, boxShadow: '0 0 80px rgba(16,185,129,0.6)' }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl text-white font-bold text-xl"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                boxShadow: '0 0 40px rgba(16,185,129,0.4)',
              }}
            >
              Get the Guide Now — $19.99
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <p className="text-white/30 text-sm">
            Join 847+ immigrants who are building their US credit score right now.
            <br />
            Instant download · 30-day money-back guarantee · Lifetime updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}

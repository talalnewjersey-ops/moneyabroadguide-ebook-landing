import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gift, FileText, Calculator, List, Star } from 'lucide-react';

const bonuses = [
  {
    icon: List,
    title: 'Credit Building Checklist',
    description: 'A week-by-week action plan so you always know exactly what to do next. Never get lost or confused.',
    value: '$27',
    color: 'emerald',
  },
  {
    icon: FileText,
    title: 'Secured Card Comparison Sheet',
    description: '15+ secured credit cards compared side-by-side with fees, requirements, and approval rates for newcomers.',
    value: '$17',
    color: 'blue',
  },
  {
    icon: Calculator,
    title: 'Credit Utilization Calculator',
    description: 'Excel/Google Sheets template to track your utilization across all cards and optimize for maximum score impact.',
    value: '$12',
    color: 'purple',
  },
  {
    icon: Star,
    title: 'Dispute Letter Templates',
    description: 'Pre-written letters to dispute errors on your credit report with the major bureaus — ready to customize and send.',
    value: '$19',
    color: 'gold',
  },
];

export default function Bonuses() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="bonuses" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080f1e] to-[#0a1628]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)' }}>
            <Gift className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Exclusive Bonuses — FREE with Your Purchase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            4 Free Bonuses
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #fbbf24, #f59e0b)' }}>
              Worth $75 — Included Free
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Every purchase comes with these powerful resources to accelerate your credit building journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={bonus.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group p-6 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(251,191,36,0.15)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center border border-yellow-400/20">
                  <bonus.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-bold text-lg">{bonus.title}</h3>
                    <div className="flex flex-col items-end">
                      <span className="text-white/30 text-xs line-through">Value: {bonus.value}</span>
                      <span className="text-emerald-400 text-sm font-bold">FREE</span>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm">{bonus.description}</p>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.03), transparent)' }} />
            </motion.div>
          ))}
        </div>

        {/* Total value summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto p-8 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.05))',
            border: '1px solid rgba(16,185,129,0.3)',
          }}
        >
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Main Guide</span>
              <span className="text-white">$19.99</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">4 Bonus Resources</span>
              <span className="text-white/40 line-through">$75.00</span>
            </div>
            <div className="border-t border-white/10 pt-2 flex justify-between">
              <span className="text-white font-bold">You Pay Today</span>
              <span className="text-emerald-400 font-extrabold text-xl">$19.99</span>
            </div>
          </div>
          
          <motion.a
            href="#guarantee"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 0 30px rgba(16,185,129,0.3)',
            }}
          >
            <Gift className="w-5 h-5" />
            Get Everything for $19.99
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

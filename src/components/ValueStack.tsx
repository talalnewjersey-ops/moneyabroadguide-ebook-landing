import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, ArrowRight } from 'lucide-react';

const items = [
  { name: 'How to Build Your Credit Score in the USA (2026)', type: 'MAIN GUIDE', value: 19.99, included: true },
  { name: 'Credit Building Week-by-Week Checklist', type: 'BONUS #1', value: 27, included: true },
  { name: 'Secured Card Comparison Sheet (15+ cards)', type: 'BONUS #2', value: 17, included: true },
  { name: 'Credit Utilization Calculator Template', type: 'BONUS #3', value: 12, included: true },
  { name: 'Credit Dispute Letter Templates (3 bureaus)', type: 'BONUS #4', value: 19, included: true },
  { name: 'Lifetime Updates (Future Editions)', type: 'BONUS #5', value: 'Priceless', included: true },
  { name: '30-Day Money-Back Guarantee', type: 'GUARANTEE', value: 'Risk-Free', included: true },
];

export default function ValueStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const totalValue = 94.99;

  return (
    <section id="value" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#080f1e]" />
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #10b981 0%, transparent 60%)' }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Everything You Get
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #059669)' }}>
              For One Low Price
            </span>
          </h2>
        </motion.div>

        {/* Value Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(16,185,129,0.3)', background: 'rgba(255,255,255,0.02)' }}
        >
          {/* Header */}
          <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))' }}>
            <div className="flex items-center justify-between">
              <span className="text-white font-bold text-lg">What You're Getting</span>
              <span className="text-white/40 text-sm">Retail Value</span>
            </div>
          </div>

          {/* Items */}
          <div className="divide-y divide-white/[0.04]">
            {items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="px-8 py-4 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="text-emerald-400/60 text-xs font-bold tracking-wider mb-0.5">{item.type}</div>
                  <div className="text-white text-sm font-medium">{item.name}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  {typeof item.value === 'number' ? (
                    <span className="text-white/40 text-sm line-through">$${item.value}</span>
                  ) : (
                    <span className="text-emerald-400 text-sm font-semibold">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total */}
          <div className="px-8 py-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60">Total retail value</span>
              <span className="text-white/40 text-xl line-through">$${totalValue}</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-white font-bold text-xl">Your price today</span>
              <div className="text-right">
                <span className="text-emerald-400 font-extrabold text-4xl">$19.99</span>
                <div className="text-emerald-400/60 text-xs">One-time payment</div>
              </div>
            </div>

            <motion.a
              href="#guarantee"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-white font-bold text-lg"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                boxShadow: '0 0 40px rgba(16,185,129,0.3)',
              }}
            >
              Get Instant Access Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <p className="text-center text-white/30 text-sm mt-4">
              30-day money-back guarantee · Instant digital delivery · Lifetime updates
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

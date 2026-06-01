import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';

const comparisons = [
  { before: 'Rejected for every credit card application', after: 'Approved for premium rewards cards' },
  { before: 'Required 3-6 months rent deposit', after: 'Standard 1-month deposit like everyone else' },
  { before: 'Paying cash for car or sky-high rates', after: 'Financing at 4-6% APR like any US resident' },
  { before: 'No access to 0% intro APR offers', after: 'Taking advantage of 0% APR for 15+ months' },
  { before: 'Turned down for basic loans', after: 'Approved for personal loans at competitive rates' },
  { before: 'No credit = invisible to financial system', after: 'Fully integrated into US financial ecosystem' },
];

const scoreData = [
  { label: 'Before', score: 0, label2: 'No Score', color: '#6b7280', width: '5%' },
  { label: 'Month 1', score: 580, label2: 'Poor', color: '#ef4444', width: '40%' },
  { label: 'Month 3', score: 650, label2: 'Fair', color: '#f59e0b', width: '55%' },
  { label: 'Month 6', score: 710, label2: 'Good', color: '#3b82f6', width: '68%' },
  { label: 'Month 12', score: 750, label2: 'Very Good', color: '#10b981', width: '80%' },
];

export default function BeforeAfter() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="before-after" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#080f1e]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Before vs After
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #059669)' }}>
              The Transformation
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-2xl"
            style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-400" />
              <h3 className="text-white font-bold text-xl">Before the Guide</h3>
            </div>
            <div className="space-y-3">
              {comparisons.map((c) => (
                <div key={c.before} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                  <span className="text-white/50 text-sm">{c.before}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 rounded-2xl"
            style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <h3 className="text-white font-bold text-xl">After the Guide</h3>
            </div>
            <div className="space-y-3">
              {comparisons.map((c) => (
                <div key={c.after} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400/60 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{c.after}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h3 className="text-white font-bold text-xl mb-8 text-center">Your Score Progression</h3>
          <div className="space-y-4">
            {scoreData.map((item, i) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-24 text-right">
                  <div className="text-white/60 text-xs">{item.label}</div>
                  {item.score > 0 && <div className="text-white font-bold text-sm">{item.score}</div>}
                </div>
                <div className="flex-1 h-6 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full flex items-center justify-end pr-3"
                    style={{ background: item.color }}
                    initial={{ width: '0%' }}
                    animate={inView ? { width: item.width } : { width: '0%' }}
                    transition={{ duration: 1, delay: 0.8 + i * 0.15 }}
                  >
                    <span className="text-white text-xs font-bold">{item.label2}</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <a href="#guarantee" className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:gap-3 transition-all">
            Start your transformation today
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

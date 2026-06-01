import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock } from 'lucide-react';

const milestones = [
  {
    day: 'Day 1-7',
    title: 'Setup & Foundation',
    description: 'Open your first account, apply for ITIN if needed, understand your starting point.',
    score: '0 (No Score)',
    color: '#6b7280',
    bgColor: 'rgba(107,114,128,0.1)',
  },
  {
    day: 'Month 1',
    title: 'First Credit Account',
    description: 'Secured credit card approved. Make small purchases, pay in full every month.',
    score: '580-620',
    color: '#ef4444',
    bgColor: 'rgba(239,68,68,0.1)',
  },
  {
    day: 'Month 3',
    title: 'Score Established',
    description: 'Your FICO score appears. Add a second account. Optimize utilization to under 10%.',
    score: '650-680',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.1)',
  },
  {
    day: 'Month 6',
    title: 'Qualifying for Real Cards',
    description: 'Get approved for an unsecured card. Request credit limit increases. Add diversity.',
    score: '700-720',
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.1)',
  },
  {
    day: 'Month 12',
    title: 'Good Credit Unlocked',
    description: 'Qualify for premium cards, apartments, and auto loans at good rates.',
    score: '720-740',
    color: '#8b5cf6',
    bgColor: 'rgba(139,92,246,0.1)',
  },
  {
    day: 'Month 18-24',
    title: 'Excellent Credit Achieved',
    description: 'Premium cards, best interest rates, maximum financial freedom in the USA.',
    score: '750-800+',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.1)',
  },
];

export default function Timeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="timeline" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080f1e] to-[#0a1628]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}>
            <Clock className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Your Credit Score Journey</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            From Zero to 750+
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #059669)' }}>
              Step by Step
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Follow this exact timeline and you'll reach an excellent credit score faster than you thought possible.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.day}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } pl-20 lg:pl-0`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold mb-3"
                    style={{ background: milestone.bgColor, color: milestone.color }}
                  >
                    {milestone.day}
                  </div>
                  <div
                    className="p-5 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <h3 className="text-white font-bold text-lg mb-2">{milestone.title}</h3>
                    <p className="text-white/50 text-sm mb-3">{milestone.description}</p>
                    <div className="flex items-center gap-2" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <span className="text-white/30 text-xs">Score:</span>
                      <span className="font-bold text-sm" style={{ color: milestone.color }}>{milestone.score}</span>
                    </div>
                  </div>
                </div>

                {/* Dot */}
                <div
                  className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#0a1628] top-6"
                  style={{ background: milestone.color, boxShadow: `0 0 10px ${milestone.color}` }}
                />

                {/* Empty space for other side */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XCircle, AlertTriangle, DollarSign, Home, CreditCard, Car } from 'lucide-react';

const problems = [
  {
    icon: CreditCard,
    title: 'Rejected for Credit Cards',
    description: 'No US credit history means automatic rejection — even for basic secured cards.',
    impact: 'Missing out on rewards, cashback & fraud protection',
  },
  {
    icon: Home,
    title: 'Denied for Apartment Rentals',
    description: 'Landlords run credit checks. Without a score, you need a massive deposit or a co-signer.',
    impact: 'Paying 3-6 months rent upfront or being rejected entirely',
  },
  {
    icon: Car,
    title: "Can't Finance a Car",
    description: "Auto lenders won't approve you without credit history, leaving you stuck with cash-only options.",
    impact: 'Paying cash for a depreciating asset or using expensive ride-shares',
  },
  {
    icon: DollarSign,
    title: 'Sky-High Interest Rates',
    description: 'If you do get approved, poor credit means APRs of 25-35% vs 15% for good credit holders.',
    impact: 'Paying thousands extra in interest over your lifetime',
  },
];

export default function Problem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="problem" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#080f1e]" />
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(239,68,68,0.05) 0%, transparent 60%)' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}>
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">The Credit Score Problem</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            You Arrived in the USA With
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
              Zero Credit History
            </span>
          </h2>
          
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The US credit system is designed for people who already have credit.
            As a newcomer, you are stuck in a frustrating catch-22.
          </p>
        </motion.div>

        {/* The Catch-22 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 p-6 rounded-2xl text-center"
          style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}
        >
          <p className="text-white/80 text-xl">
            <span className="text-red-400 font-bold">Banks want credit history to give you credit</span>
            {' '}— but you need credit to{' '}
            <span className="text-red-400 font-bold">build credit history.</span>
          </p>
          <p className="text-white/40 text-sm mt-3">The impossible loop that traps every newcomer to the US</p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group p-6 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{problem.title}</h3>
                  <p className="text-white/50 text-sm mb-3">{problem.description}</p>
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-red-400/80 text-xs">{problem.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom hook */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-white/40 text-lg mt-12"
        >
          Sound familiar?{' '}
          <span className="text-emerald-400 font-semibold">There is a way out.</span>
        </motion.p>
      </div>
    </section>
  );
}

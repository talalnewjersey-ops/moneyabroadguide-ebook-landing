import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Zap, BookOpen, Target } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Understand the System',
    description: 'Master how the US credit system works — FICO scores, credit bureaus, and what lenders actually look at.',
    color: 'emerald',
  },
  {
    icon: Zap,
    title: 'Fast-Track Strategies',
    description: 'Proven techniques to build credit history quickly, even without a SSN or long residency history.',
    color: 'blue',
  },
  {
    icon: CheckCircle,
    title: 'Avoid Costly Mistakes',
    description: 'Learn the exact traps that destroy credit scores — and how to sidestep every single one of them.',
    color: 'purple',
  },
  {
    icon: BookOpen,
    title: 'Immigrant-Specific Strategies',
    description: 'Tactics designed specifically for visa holders, green card holders, and new US residents.',
    color: 'gold',
  },
];

export default function Solution() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="solution" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080f1e] via-[#0a1628] to-[#0a1628]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #10b981, transparent)' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Book Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Book mockup */}
            <div className="relative mx-auto max-w-sm">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Book shadow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-8 rounded-full opacity-30 blur-xl"
                  style={{ background: '#10b981' }} />
                
                {/* Book cover */}
                <div
                  className="relative w-64 h-80 mx-auto rounded-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #0d1f3c 0%, #0a1628 100%)',
                    boxShadow: '20px 20px 60px rgba(0,0,0,0.6), -5px -5px 20px rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.2)',
                  }}
                >
                  {/* Book spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-emerald-900/50 to-transparent" />
                  
                  {/* Cover content */}
                  <div className="p-6 h-full flex flex-col">
                    <div className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">
                      MoneyAbroadGuide
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="text-white/80 text-xs mb-2">2026 Edition</div>
                      <h3 className="text-white font-extrabold text-xl leading-tight mb-4">
                        How to Build Your Credit Score in the USA
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                          <span className="text-emerald-400 text-xs font-bold">TE</span>
                        </div>
                        <div>
                          <div className="text-white/60 text-xs">By</div>
                          <div className="text-white text-xs font-medium">Talal Eddaouahiri</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Credit score visual */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white/40 text-xs">Score</span>
                        <span className="text-emerald-400 font-bold text-sm">750+</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: 'linear-gradient(90deg, #10b981, #34d399)' }}
                          initial={{ width: '0%' }}
                          animate={inView ? { width: '83%' } : { width: '0%' }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow overlay */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.05) 0%, transparent 60%)' }} />
                </div>
              </motion.div>
              
              {/* Price badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, type: 'spring' }}
                className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  boxShadow: '0 0 30px rgba(16,185,129,0.5)',
                }}
              >
                <div className="text-white/80 text-xs">Only</div>
                <div className="text-white font-extrabold text-lg leading-none">$19.99</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">The Solution</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              A Complete Roadmap
              <br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #059669)' }}>
                Built for Newcomers
              </span>
            </h2>
            
            <p className="text-white/60 text-lg mb-8">
              This isn't generic credit advice. Every strategy is designed specifically 
              for immigrants, expats, and international students navigating the US financial system.
            </p>
            
            <div className="space-y-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <pillar.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{pillar.title}</h4>
                    <p className="text-white/50 text-sm">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

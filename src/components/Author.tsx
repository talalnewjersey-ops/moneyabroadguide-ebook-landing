import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, TrendingUp, Users, BookOpen, Award } from 'lucide-react';

const credentials = [
  { icon: Globe, text: 'Immigrant who navigated the US credit system firsthand' },
  { icon: TrendingUp, text: 'Built credit score from 0 to 780 in under 18 months' },
  { icon: Users, text: 'Helped 1,000+ immigrants improve their financial profiles' },
  { icon: BookOpen, text: 'Founder of MoneyAbroadGuide.com' },
  { icon: Award, text: '5+ years of personal finance expertise for expats' },
];

export default function Author() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="author" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#080f1e]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #10b981, transparent)', transform: 'translate(50%, -50%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Author Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Avatar placeholder */}
              <div
                className="w-48 h-48 mx-auto rounded-full flex items-center justify-center text-6xl font-extrabold mb-6"
                style={{
                  background: 'linear-gradient(135deg, #0d1f3c, #112d54)',
                  border: '3px solid rgba(16,185,129,0.3)',
                  boxShadow: '0 0 40px rgba(16,185,129,0.15)',
                  color: '#10b981',
                }}
              >
                TE
              </div>

              {/* Floating stat */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -right-4 top-8 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}
              >
                <div className="text-emerald-400 font-bold">780</div>
                <div className="text-white/50 text-xs">Credit Score</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
                className="absolute -left-4 bottom-12 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)' }}
              >
                <div className="text-blue-400 font-bold">1,000+</div>
                <div className="text-white/50 text-xs">Helped</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Author Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}>
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">About the Author</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
              Talal Eddaouahiri
            </h2>
            <p className="text-emerald-400 font-medium text-lg mb-6">
              Founder, MoneyAbroadGuide
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-white/70 text-base leading-relaxed">
                Talal came to the United States with no credit history, no SSN, and no idea how 
                the American financial system worked. After years of research, trial and error, 
                and building his own credit score from scratch, he created MoneyAbroadGuide to 
                share everything he learned.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                This guide is the resource he wishes existed when he first arrived. Every strategy 
                has been personally tested and refined with thousands of readers from over 40 countries.
              </p>
            </div>

            <div className="space-y-3">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-white/70 text-sm">{cred.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

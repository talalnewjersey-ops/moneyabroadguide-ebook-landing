import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, RefreshCw, Lock, ArrowRight, Star } from 'lucide-react';

export default function Guarantee() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="guarantee" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#0a1628]" />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #10b981 0%, transparent 60%)' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guarantee Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="p-8 lg:p-12 rounded-3xl mb-16 text-center"
          style={{
            background: 'rgba(16,185,129,0.05)',
            border: '2px solid rgba(16,185,129,0.3)',
            boxShadow: '0 0 60px rgba(16,185,129,0.1)',
          }}
        >
          <div className="flex justify-center mb-8">
            <div
              className="w-32 h-32 rounded-full flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.05))',
                border: '2px solid rgba(16,185,129,0.4)',
                boxShadow: '0 0 40px rgba(16,185,129,0.2)',
              }}
            >
              <Shield className="w-10 h-10 text-emerald-400 mb-1" />
              <div className="text-white font-extrabold text-lg leading-none">30-Day</div>
              <div className="text-emerald-400 text-xs">GUARANTEE</div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            100% Money-Back Guarantee
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Try the complete guide for 30 days. If you do not find it valuable,
            if the strategies do not work for your situation, or if you are
            unsatisfied for <em>any reason at all</em> — just email us and
            you will receive a full refund. No questions, no hassle.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Clock, text: '30 full days to try it' },
              { icon: RefreshCw, text: 'Full refund if not satisfied' },
              { icon: Lock, text: 'Keep the bonuses either way' },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center gap-2 p-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)' }}>
                <item.icon className="w-5 h-5 text-emerald-400" />
                <span className="text-white/60 text-sm text-center">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-sm italic">
            "We are so confident in this guide that we are taking all the risk.
            You have nothing to lose and a strong credit score to gain."
            <br />
            <span className="text-emerald-400 not-italic font-semibold">— Talal Eddaouahiri, Author</span>
          </p>
        </motion.div>

        {/* Purchase Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-8 lg:p-12 rounded-3xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.03))',
            border: '1px solid rgba(16,185,129,0.2)',
          }}
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white/60 text-sm ml-2">4.9/5 from 847+ readers</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Ready to Build Your Credit Score?
          </h3>
          <p className="text-white/60 mb-8">
            Join 847+ immigrants who have already started their credit building journey.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-right">
              <div className="text-white/30 text-sm line-through">Regular price: $94.99</div>
              <div className="text-white/50 text-sm">Today price:</div>
            </div>
            <div className="text-emerald-400 font-extrabold text-5xl">$19.99</div>
          </div>

          <motion.a
            href="https://moneyabroadguide.com/checkout"
            whileHover={{ scale: 1.05, boxShadow: '0 0 80px rgba(16,185,129,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-white font-bold text-xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 0 40px rgba(16,185,129,0.4)',
            }}
          >
            Get Instant Access — $19.99
            <ArrowRight className="w-6 h-6" />
          </motion.a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-emerald-400" />
              30-day guarantee
            </span>
            <span className="flex items-center gap-1">
              <Lock className="w-4 h-4 text-emerald-400" />
              Secure checkout
            </span>
            <span className="flex items-center gap-1">
              <RefreshCw className="w-4 h-4 text-emerald-400" />
              Instant delivery
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, RefreshCw, Lock, ArrowRight, Star } from 'lucide-react';

export default function Guarantee() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="guarantee" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#0a1628]" />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #10b981 0%, transparent 60%)' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guarantee Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="p-8 lg:p-12 rounded-3xl mb-16 text-center"
          style={{
            background: 'rgba(16,185,129,0.05)',
            border: '2px solid rgba(16,185,129,0.3)',
            boxShadow: '0 0 60px rgba(16,185,129,0.1)',
          }}
        >
          {/* Guarantee Badge */}
          <div className="flex justify-center mb-8">
            <div
              className="w-32 h-32 rounded-full flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.05))',
                border: '2px solid rgba(16,185,129,0.4)',
                boxShadow: '0 0 40px rgba(16,185,129,0.2)',
              }}
            >
              <Shield className="w-10 h-10 text-emerald-400 mb-1" />
              <div className="text-white font-extrabold text-lg leading-none">30-Day</div>
              <div className="text-emerald-400 text-xs">GUARANTEE</div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            100% Money-Back Guarantee
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Try the complete guide for 30 days. If you don't find it valuable, 
            if the strategies don't work for your situation, or if you're 
            unsatisfied for <em>any reason at all</em> — just email us and 
            you'll receive a full refund. No questions, no hassle.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Clock, text: '30 full days to try it' },
              { icon: RefreshCw, text: 'Full refund if not satisfied' },
              { icon: Lock, text: 'Keep the bonuses either way' },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center gap-2 p-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)' }}>
                <item.icon className="w-5 h-5 text-emerald-400" />
                <span className="text-white/60 text-sm text-center">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-sm italic">
            "We're so confident in this guide that we're taking all the risk. 
            You have nothing to lose and a strong credit score to gain."
            <br />
            <span className="text-emerald-400 not-italic font-semibold">— Talal Eddaouahiri, Author</span>
          </p>
        </motion.div>

        {/* Purchase Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-8 lg:p-12 rounded-3xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.03))',
            border: '1px solid rgba(16,185,129,0.2)',
          }}
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white/60 text-sm ml-2">4.9/5 from 847+ readers</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Ready to Build Your Credit Score?
          </h3>
          <p className="text-white/60 mb-8">
            Join 847+ immigrants who have already started their credit building journey.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-right">
              <div className="text-white/30 text-sm line-through">Regular price: $94.99</div>
              <div className="text-white/50 text-sm">Today's price:</div>
            </div>
            <div className="text-emerald-400 font-extrabold text-5xl">$19.99</div>
          </div>

          <motion.a
            href="https://moneyabroadguide.com/checkout"
            whileHover={{ scale: 1.05, boxShadow: '0 0 80px rgba(16,185,129,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-white font-bold text-xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 0 40px rgba(16,185,129,0.4)',
            }}
          >
            Get Instant Access — $19.99
            <ArrowRight className="w-6 h-6" />
          </motion.a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-emerald-400" />
              30-day guarantee
            </span>
            <span className="flex items-center gap-1">
              <Lock className="w-4 h-4 text-emerald-400" />
              Secure checkout
            </span>
            <span className="flex items-center gap-1">
              <RefreshCw className="w-4 h-4 text-emerald-400" />
              Instant delivery
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

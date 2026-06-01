import { motion } from 'framer-motion';
import { Star, ArrowRight, Shield, Users, BookOpen, TrendingUp, ChevronDown } from 'lucide-react';

const stats = [
  { value: '847+', label: 'Readers', icon: Users },
  { value: '4.9★', label: 'Average Rating', icon: Star },
  { value: '30-Day', label: 'Money-Back Guarantee', icon: Shield },
];

const floatingCards = [
  { title: 'Credit Score', value: '750+', color: 'emerald', delay: 0 },
  { title: 'Approval Rate', value: '94%', color: 'blue', delay: 0.2 },
  { title: 'Days to Build', value: '90 Days', color: 'purple', delay: 0.4 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b18] via-[#0a1628] to-[#0a1628]" />
        
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />
      </div>

      {/* Floating Cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={card.title}
          className="absolute hidden lg:flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10"
          style={{
            top: i === 0 ? '30%' : i === 1 ? '55%' : '40%',
            left: i === 0 ? '5%' : i === 2 ? '5%' : undefined,
            right: i === 1 ? '5%' : undefined,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: card.delay + 1, duration: 0.8 } }}
        >
          <div className={`w-10 h-10 rounded-lg bg-${card.color}-500/20 flex items-center justify-center`}>
            <TrendingUp className={`w-5 h-5 text-${card.color}-400`} />
          </div>
          <div>
            <div className="text-white/50 text-xs">{card.title}</div>
            <div className="text-white font-bold text-lg leading-none">{card.value}</div>
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(16,185,129,0.1)',
            border: '1px solid rgba(16,185,129,0.3)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium">2026 Updated Edition — Most Comprehensive Guide Available</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05]"
        >
          <span className="text-white">Build Your</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)' }}
          >
            US Credit Score
          </span>
          <br />
          <span className="text-white">From Zero</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          The definitive step-by-step guide for{' '}
          <span className="text-white font-medium">immigrants, expats, international students,</span>{' '}
          and visa holders to build a strong US credit profile — fast.
        </motion.p>

        {/* Price + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#guarantee"
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(16,185,129,0.6)' }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 0 30px rgba(16,185,129,0.4), 0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <BookOpen className="w-5 h-5" />
            <span>Get the Guide for $19.99</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <div className="flex items-center gap-2 text-white/50 text-sm">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>30-day money-back guarantee</span>
          </div>
        </motion.div>

        {/* Social Proof Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-3 mb-16"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-white/50 text-sm">
            <span className="text-white font-semibold">847 readers</span> building their credit score right now
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center gap-2 p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <stat.icon className="w-5 h-5 text-emerald-400" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/40 text-xs text-center">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-white/20" />
        </motion.div>
      </div>
    </section>
  );
}

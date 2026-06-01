import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, BookOpen } from 'lucide-react';

const chapters = [
  {
    number: '01',
    title: 'The US Credit System Decoded',
    description: 'Understand how FICO scores work, the 5 factors that determine your score, and what lenders actually care about.',
    topics: ['FICO vs VantageScore explained', 'The 5 credit score factors', 'How credit bureaus work', 'What thin file means for you'],
  },
  {
    number: '02',
    title: 'Your First Credit Account Without SSN',
    description: 'Step-by-step guide to getting your first US credit product — even if you just arrived and have no social security number.',
    topics: ['ITIN vs SSN — what you need', 'Secured credit cards that accept newcomers', 'Credit unions for immigrants', 'International programs (Amex, Chase)'],
  },
  {
    number: '03',
    title: 'Rapid Score Building Strategies',
    description: 'Accelerate your credit score growth with proven techniques that work in 90 days or less.',
    topics: ['Authorized user strategy', 'Experian Boost & similar tools', 'Credit builder loans', 'Optimal utilization tactics'],
  },
  {
    number: '04',
    title: 'The Mistakes That Kill Your Score',
    description: 'Avoid the common errors that newcomers make — some of which can set you back 100+ points instantly.',
    topics: ['Hard inquiry mistakes', 'Account closing pitfalls', 'The 30% rule explained', 'Late payment recovery'],
  },
  {
    number: '05',
    title: 'Visa & Immigration Considerations',
    description: 'Special strategies for F-1, H-1B, O-1, and other visa holders with unique constraints and timelines.',
    topics: ['F-1 student credit tactics', 'H-1B holder strategies', 'Green card transition plan', 'DACA credit building'],
  },
  {
    number: '06',
    title: 'From Good to Excellent (750+)',
    description: 'Once you have credit, this is the exact roadmap to reaching an excellent score and keeping it there.',
    topics: ['The 750+ credit portfolio', 'Premium card qualification', 'Credit limit increase tactics', 'Long-term credit health'],
  },
];

export default function WhatsInside() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="whats-inside" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#080f1e]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}>
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">{"What's Inside"}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            6 Comprehensive Chapters
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #059669)' }}>
              200+ Pages of Actionable Content
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Every chapter is packed with specific, actionable strategies — no fluff, no filler.
            Just exactly what you need to build a strong US credit score.
          </p>
        </motion.div>

        {/* Chapter Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl transition-all duration-300 hover:border-emerald-500/30"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Chapter number */}
              <div className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(16,185,129,0.1))' }}>
                {chapter.number}
              </div>
              
              <h3 className="text-white font-bold text-lg mb-3">{chapter.title}</h3>
              <p className="text-white/50 text-sm mb-4">{chapter.description}</p>
              
              <div className="space-y-2">
                {chapter.topics.map((topic) => (
                  <div key={topic} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/60 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
              
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.03), transparent)' }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-white/40 mb-6">Plus bonus resources, checklists, and templates</p>
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
            <BookOpen className="w-5 h-5" />
            Get All 6 Chapters for $19.99
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

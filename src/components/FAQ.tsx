import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "Do I need a Social Security Number (SSN) to follow this guide?",
    a: "No! The guide specifically covers how to start building credit without an SSN using an ITIN (Individual Taxpayer Identification Number). There are multiple strategies for newcomers without SSNs, including specific cards that accept ITINs.",
  },
  {
    q: "Does this guide work for F-1 student visa holders?",
    a: "Absolutely. There is an entire chapter dedicated to F-1 and other student visa strategies. You can start building credit during your studies, and the guide shows you exactly which products are available to students and how to qualify for them.",
  },
  {
    q: "How long before I see my first credit score?",
    a: "Typically 1-6 months after opening your first account. The guide includes strategies to speed up this process, including tools like Experian Boost that can help you get a score even faster.",
  },
  {
    q: "I just arrived in the US last month. Is this guide right for me?",
    a: "Yes! The guide is specifically designed for newcomers at all stages, including people who just arrived. The earlier you start, the better. Chapter 1 covers exactly what to do in your first 30 days.",
  },
  {
    q: "What if I am a green card holder, not a visa holder?",
    a: "Green card holders have more credit building options available to them. The guide covers strategies for permanent residents and how to maximize your position as a green card holder.",
  },
  {
    q: "Is the guide updated for 2026?",
    a: "Yes! This is the 2026 edition with the latest credit building tools, updated bank policies, and new products that accept newcomers. Credit card offers and bank policies change frequently — this guide reflects the current landscape.",
  },
  {
    q: "What if I already have a credit score but want to improve it?",
    a: "The guide covers everything from starting at zero to reaching 800+. If you already have a score, Chapters 3, 4, and 6 are especially relevant for optimization strategies to push past your current score.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes! You have 30 full days to try the guide. If you are not satisfied for any reason, email us for a complete refund — no questions asked. We are confident in the value this guide provides.",
  },
  {
    q: "How is this different from free information on the internet?",
    a: "Free information is generic and written for US citizens who already have credit history. This guide is specifically written for immigrants, expats, and international students — covering products that accept newcomers, immigration-specific considerations, and strategies that actually work when starting from zero in a new country.",
  },
  {
    q: "What format is the guide delivered in?",
    a: "The guide is delivered as a PDF that you can read on any device — phone, tablet, or computer. You also get access to all bonus spreadsheets as downloadable files. After purchase, you will receive an email with download links immediately.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="faq" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080f1e] to-[#0a1628]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}>
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Got Questions?
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #059669)' }}>
              We Have Answers
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: openIndex === i ? 'rgba(16,185,129,0.05)' : 'rgba(255,255,255,0.03)',
                border: openIndex === i ? '1px solid rgba(16,185,129,0.2)' : '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-start gap-4 text-left"
                aria-expanded={openIndex === i}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-white/40" />
                  )}
                </div>
                <span className={`font-semibold text-base ${openIndex === i ? 'text-emerald-400' : 'text-white'}`}>
                  {faq.q}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-white/60 text-base leading-relaxed pl-9">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm">
            Still have questions?{' '}
            <a href="mailto:support@moneyabroadguide.com" className="text-emerald-400 hover:underline">
              Email us at support@moneyabroadguide.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

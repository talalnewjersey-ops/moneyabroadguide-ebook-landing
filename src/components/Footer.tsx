import { motion } from 'framer-motion';
import { TrendingUp, Twitter, Mail, Globe } from 'lucide-react';

const links = [
  {
    title: 'Product',
    items: [
      { label: "What's Inside", href: '#whats-inside' },
      { label: 'Bonuses', href: '#bonuses' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About the Author', href: '#author' },
      { label: 'MoneyAbroadGuide.com', href: 'https://moneyabroadguide.com' },
      { label: 'Contact Us', href: 'mailto:support@moneyabroadguide.com' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Refund Policy', href: '#guarantee' },
      { label: 'Disclaimer', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden" style={{ background: '#020b18' }}>
      <div className="absolute inset-0 border-t border-white/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">MoneyAbroadGuide</div>
                <div className="text-emerald-400 text-xs">Financial Freedom</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Helping immigrants, expats, and international students build financial success in the USA.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/MoneyAbroadGuide"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white/50" />
              </a>
              <a
                href="https://moneyabroadguide.com"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4 text-white/50" />
              </a>
              <a
                href="mailto:support@moneyabroadguide.com"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-white/50" />
              </a>
            </div>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/40 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 MoneyAbroadGuide. All rights reserved.
          </p>
          <p className="text-white/20 text-xs text-center sm:text-right max-w-md">
            <strong className="text-white/30">Disclaimer:</strong> This guide is for educational purposes only. 
            Results vary. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}

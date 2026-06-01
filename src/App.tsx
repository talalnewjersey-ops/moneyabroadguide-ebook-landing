import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import WhatsInside from './components/WhatsInside';
import Timeline from './components/Timeline';
import BeforeAfter from './components/BeforeAfter';
import Bonuses from './components/Bonuses';
import Author from './components/Author';
import Testimonials from './components/Testimonials';
import ValueStack from './components/ValueStack';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const el = document.querySelector(target.hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhatsInside />
        <Timeline />
        <BeforeAfter />
        <Bonuses />
        <Author />
        <Testimonials />
        <ValueStack />
        <FAQ />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

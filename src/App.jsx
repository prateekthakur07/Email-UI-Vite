import { useRef } from 'react';
import './index.css';

import { useScrollReveal } from './hooks/useScrollReveal.js';
import Background from './components/Background.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import LogoMarquee from './components/LogoMarquee.jsx';
import StatsStrip from './components/StatsStrip.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Comparison from './components/Comparison.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import Cta from './components/Cta.jsx';
import Footer from './components/Footer.jsx';
import DummyFun from './components/DummyTest.jsx';

export default function App() {
  const rootRef = useRef(null);

  // Reveals every `.reveal` element rendered by the sections below.
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <Background />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <StatsStrip />
      <Features />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
      {/* <DummyFun/> */}
    </div>
  );
}

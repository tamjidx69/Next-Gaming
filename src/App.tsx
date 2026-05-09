import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Platforms from './components/sections/Platforms';
import Videos from './components/sections/Videos';
import Contact from './components/sections/Contact';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-white selection:bg-accent-red selection:text-white">
      <div className="grain-overlay" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Platforms />
        <Videos />
        <Contact />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

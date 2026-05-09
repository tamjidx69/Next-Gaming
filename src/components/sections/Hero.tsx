import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
      {/* Background with Ambient Motion */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/src/assets/images/hero_cinematic_gaming_1778310520033.png"
          className="w-full h-full object-cover grayscale brightness-50"
          alt="Cinematic Background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] md:text-sm tracking-[0.4em] uppercase text-accent-red font-bold mb-8"
          >
            The Future of Entertainment
          </motion.div>

          <motion.h1 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] lg:text-[140px] leading-[0.8] font-black tracking-tighter uppercase mb-12"
          >
            <span className="block mb-2">Bangladesh’s</span>
            <span className="block text-white/10 mb-2">gaming</span>
            <span className="block italic font-light serif text-white">platform</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-12 font-medium tracking-wide"
          >
            We create cinematic gaming entertainment, viral content, esports storytelling, and digital experiences for the next generation.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="btn-premium btn-premium-filled group">
              Explore Platforms
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-premium">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;

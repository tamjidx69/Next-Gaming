import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
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
        
        {/* iOS Style Red Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-red/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-red/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 relative"
          >
            <img src="/src/assets/images/logo_professional.png" alt="NEXT GAMING Logo" className="h-32 md:h-48 w-auto red-glow relative z-10" />
            <div className="absolute inset-0 bg-accent-red/20 blur-3xl rounded-full scale-50 opacity-30" />
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] md:text-sm tracking-[0.4em] uppercase text-accent-red font-bold mb-4"
          >
            The Future of Entertainment
          </motion.div>

          <motion.h1 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] lg:text-[150px] leading-[0.7] font-black tracking-[-0.05em] uppercase mb-10"
          >
            <span className="block mb-2 text-white/95">Gamer</span>
            <span className="block text-accent-red/10 mb-2">Artisan</span>
            <span className="block italic font-light serif text-accent-red drop-shadow-[0_0_10px_rgba(255,59,48,0.4)]">Pioneer</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-md mx-auto text-xs md:text-sm leading-relaxed mb-12 font-medium tracking-tight text-white/60"
          >
            A high-end media collective crafting cinematic experiences at the edge of gaming culture.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="#platforms" className="btn-premium btn-premium-filled group hover:scale-105 transition-all">
              The Network
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:tamjidx69@gmail.com" className="btn-premium text-center hover:bg-white/5 transition-all">
              Connect
            </a>
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

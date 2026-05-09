import { motion } from 'motion/react';

const CTA = () => {
  return (
    <section className="cinematic-spacing px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent-red/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 py-32 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter uppercase leading-[0.85] mb-16"
        >
          Let’s Build <br />
          <span className="text-white/10">Something</span> <br />
          Legendary.
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
        >
          <button className="btn-premium btn-premium-filled px-12 py-5 text-base">
            Collaborate With Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

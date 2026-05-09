import { motion } from 'motion/react';

const CTA = () => {
  return (
    <section className="cinematic-spacing px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent-red/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-accent-red/[0.02] to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 py-20 text-center flex flex-col items-center">
        <motion.img 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src="/src/assets/images/logo_professional.png"
          alt="NEXT GAMING"
          className="h-20 w-auto mb-8 opacity-80"
        />
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter uppercase leading-[0.85] mb-12"
        >
          Let’s Build <br />
          <span className="text-white/10 italic serif font-light">Excellence</span> <br />
          Is Earned.
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
        >
          <a 
            href="https://www.facebook.com/groups/1373434454476901" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium btn-premium-filled px-14 py-6 text-sm"
          >
            Enter the Community
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

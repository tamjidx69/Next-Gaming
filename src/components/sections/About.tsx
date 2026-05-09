import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="cinematic-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-[-0.05em] leading-[0.75] uppercase group">
              The <br />
              New <br />
              <span className="text-accent-red italic serif font-light drop-shadow-[0_0_15px_rgba(255,59,48,0.3)]">Standard.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg md:text-xl text-white/90 leading-tight font-medium tracking-tight max-w-md">
              We define the next era of digital entertainment through minimalist design and cinematic authority.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light tracking-wide">
              Chittagong based. Globally minded.
            </p>
            
            <div className="h-[1px] w-12 bg-accent-red/50" />
            
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold">
              Est. 2024 / NEXT MEDIA GROUP
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

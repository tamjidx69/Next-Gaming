import { motion } from 'motion/react';

const About = () => {
  return (
    <section className="cinematic-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
              NEXT <br />
              GAMING <br />
              IS <span className="text-accent-red">BUILDING</span> <br />
              THE FUTURE.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
              NEXT GAMING is the premier gaming media platform in Bangladesh. We represent the intersection of high-end entertainment, competitive gaming culture, and visionary content creation.
            </p>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
              Our mission is to elevate the gaming landscape through cinematic storytelling and professionally art-directed experiences that resonate with the next generation of digital pioneers.
            </p>
            
            <div className="h-[1px] w-full bg-white/10 my-4" />
            
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">
              EST. 2024 / Dhaka, Bangladesh
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

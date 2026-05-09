import { motion } from 'motion/react';

const stats = [
  { label: 'Subscribers', value: '395+', platform: 'YouTube' },
  { label: 'Followers', value: '200+', platform: 'Facebook' },
  { label: 'Followers', value: '420+', platform: 'Instagram' },
  { label: 'Followers', value: '10+', platform: 'TikTok' },
];

const Stats = () => {
  return (
    <section className="cinematic-spacing border-y border-white/5 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <span className="text-5xl md:text-7xl font-light tracking-tighter mb-2">
                {stat.value}
              </span>
              <div className="flex flex-col opacity-40">
                <span className="text-[10px] uppercase tracking-widest font-bold">{stat.platform}</span>
                <span className="text-[10px] uppercase tracking-widest">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

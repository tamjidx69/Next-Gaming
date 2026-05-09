import { motion } from 'motion/react';

const content = [
  {
    title: 'The Rise of Bangladeshi Esports',
    category: 'Documentary',
    image: '/src/assets/images/gaming_thumbnail_1_1778310537949.png',
    large: true
  },
  {
    title: 'Precision in Every Frame',
    category: 'Technical',
    image: '/src/assets/images/gaming_thumbnail_2_1778310554465.png',
    large: false
  },
  {
    title: 'Behind the Screen',
    category: 'Storytelling',
    image: '/src/assets/images/gaming_thumbnail_3_1778310568840.png',
    large: false
  }
];

const FeaturedContent = () => {
  return (
    <section className="cinematic-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter uppercase"
          >
            Featured <br /> <span className="text-white/20">Works</span>
          </motion.h2>
          
          <a href="#" className="hidden md:block text-[10px] uppercase tracking-widest font-bold pb-2 border-b border-white/20 hover:border-white transition-all">
            View All Content
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-white/5 rounded-2xl aspect-[4/5] ${item.large ? 'md:col-span-2 lg:col-span-2 aspect-[16/10]' : ''}`}
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-red mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl md:text-3xl font-bold tracking-tight uppercase leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;

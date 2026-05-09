import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'YouTube',
    handle: '@nextgamin.g',
    audience: '2.1M Subscribers',
    content: 'Cinematic Gameplays & Challenges',
    link: 'https://www.youtube.com/@nextgamin.g'
  },
  {
    name: 'TikTok',
    handle: '@next.gamingg',
    audience: '500K+ Followers',
    content: 'Viral Clips & Short Stories',
    link: 'https://linktr.ee/next.gamingg'
  },
  {
    name: 'Instagram',
    handle: '@nextgamin.g',
    audience: '100K+ Followers',
    content: 'Life of Next Gaming',
    link: 'https://www.instagram.com/nextgamin.g'
  },
  {
    name: 'Facebook',
    handle: 'Next Gaming',
    audience: '300K+ Community',
    content: 'Live Interactions & News',
    link: 'https://www.facebook.com/Next.Gamingx'
  },
  {
    name: 'Discord',
    handle: 'NEXT SQUAD',
    audience: '50K Members',
    content: 'Private Community & Events',
    link: '#'
  }
];

const Platforms = () => {
  return (
    <section className="cinematic-spacing px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-16"
        >
          Our Networks
        </motion.h2>

        <div className="border-t border-white/5">
          {platforms.map((platform, index) => (
            <motion.a 
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:grid md:grid-cols-[2fr_1.5fr_2fr_40px] items-start md:items-center py-10 border-b border-white/5 hover:px-6 transition-all duration-500 ease-out cursor-pointer"
            >
              <div className="flex flex-col gap-1 mb-4 md:mb-0">
                <span className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-accent-red transition-colors">{platform.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">{platform.handle}</span>
              </div>
              
              <span className="text-sm md:text-base font-medium text-white/60 mb-2 md:mb-0">
                {platform.audience}
              </span>
              
              <span className="text-sm md:text-base font-light text-white/40 italic">
                {platform.content}
              </span>

              <div className="mt-4 md:mt-0 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                <ExternalLink size={18} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;

import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'Instagram',
    handle: '@nextgamin.g',
    audience: '420+ Followers',
    content: 'Life of Next Gaming',
    link: 'https://www.instagram.com/nextgamin.g'
  },
  {
    name: 'YouTube',
    handle: '@nextgamin.g',
    audience: '395+ Subscribers',
    content: 'Cinematic Gameplays & Challenges',
    link: 'https://www.youtube.com/@nextgamin.g'
  },
  {
    name: 'Facebook',
    handle: 'Next Gaming',
    audience: '200+ Family',
    content: 'Official Brand Updates',
    link: 'https://www.facebook.com/Next.Gamingx'
  },
  {
    name: 'TikTok',
    handle: '@tamjidxislam1',
    audience: '10+ Followers',
    content: 'Viral Clips & Short Stories',
    link: 'https://www.tiktok.com/@tamjidxislam1'
  },
  {
    name: 'Community',
    handle: 'NEXT SQUAD',
    audience: 'Active Group',
    content: 'Private Discussion & Events',
    link: 'https://www.facebook.com/groups/1373434454476901'
  }
];

const Platforms = () => {
  return (
    <section id="platforms" className="cinematic-spacing px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.5em] text-white/60 font-bold mb-12"
        >
          Our Networks
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <motion.a 
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="macos-card group p-8 flex flex-col justify-between h-[300px] relative hover:border-accent-red/40"
            >
              <div className="absolute top-4 left-6 flex gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full dot-red" />
                <div className="w-2 h-2 rounded-full dot-yellow" />
                <div className="w-2 h-2 rounded-full dot-green" />
              </div>

              <div className="flex justify-between items-start mt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-accent-red uppercase">{platform.name}</span>
                  <span className="text-xl font-bold tracking-tight truncate max-w-[180px] text-white/90 group-hover:text-white transition-colors">{platform.handle}</span>
                </div>
                <div className="p-3 rounded-2xl glass opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 group-hover:text-accent-red">
                  <ExternalLink size={14} />
                </div>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-light tracking-[-0.05em] serif italic text-white/95 group-hover:text-accent-red transition-colors duration-500">{platform.audience}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold group-hover:text-white/80">Engagement metric</span>
                </div>
                <p className="text-xs text-white/80 font-medium leading-relaxed tracking-wide group-hover:text-white transition-colors">
                  {platform.content}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;

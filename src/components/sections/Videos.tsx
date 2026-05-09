import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 'Tl7UmZmhiX8',
    title: 'Valorant High-Level Challenges',
    thumbnail: 'https://img.youtube.com/vi/Tl7UmZmhiX8/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=Tl7UmZmhiX8'
  },
  {
    id: 'w7h21Dr2PjY',
    title: 'Competitive Gameplay Mastery',
    thumbnail: 'https://img.youtube.com/vi/w7h21Dr2PjY/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=w7h21Dr2PjY'
  },
  {
    id: 'eymatlXpJIc',
    title: 'Viral Moments & Pro Highlights',
    thumbnail: 'https://img.youtube.com/vi/eymatlXpJIc/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=eymatlXpJIc'
  }
];

const Videos = () => {
  return (
    <section className="cinematic-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              LATEST <br /> <span className="text-white/20">RELEASES</span>
            </h2>
          </motion.div>
          
          <motion.a 
            href="https://www.youtube.com/@nextgamin.g"
            target="_blank"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold pb-2 border-b border-white/20 hover:border-white transition-all"
          >
            Go to Channel
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col gap-6"
            >
              <div className="relative overflow-hidden rounded-[40px] aspect-video ios-card">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-14 h-14 rounded-full glass border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-transparent transition-all duration-500"
                  >
                    <Play className="w-4 h-4 text-white group-hover:text-black fill-current ml-1" />
                  </motion.div>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-2">
                <h3 className="text-xl font-bold tracking-[-0.03em] uppercase group-hover:text-accent-red transition-colors">
                  {video.title}
                </h3>
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-[0.4em]">Cinematic Release</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;

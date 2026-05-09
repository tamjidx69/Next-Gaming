import { motion } from 'motion/react';
import { Mail, ArrowUpRight, Instagram, Youtube, Facebook } from 'lucide-react';

const Contact = () => {
  const socials = [
    {
      name: 'Instagram',
      handle: '@nextgamin.g',
      icon: <Instagram className="w-5 h-5" />,
      link: 'https://www.instagram.com/nextgamin.g',
      color: 'hover:bg-pink-500/20 hover:text-pink-500'
    },
    {
      name: 'YouTube',
      handle: 'Next Gaming',
      icon: <Youtube className="w-5 h-5" />,
      link: 'https://www.youtube.com/@nextgamin.g',
      color: 'hover:bg-red-500/20 hover:text-red-500'
    },
    {
      name: 'Facebook',
      handle: 'Next Gaming',
      icon: <Facebook className="w-5 h-5" />,
      link: 'https://www.facebook.com/Next.Gamingx',
      color: 'hover:bg-blue-500/20 hover:text-blue-500'
    }
  ];

  return (
    <section id="contact" className="cinematic-spacing px-6 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-[-0.05em] uppercase leading-[0.75] mb-8">
              Let's <br />
              <span className="text-white/10">Connect.</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-sm font-medium tracking-tight mb-12 leading-relaxed">
              For direct inquiries, collaborations, or media requests, reach out through our official channels.
            </p>

            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-[20px] bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-accent-red group-hover:text-white group-hover:border-accent-red transition-all duration-700 group-hover:shadow-[0_0_30px_rgba(255,59,48,0.3)]">
                  <Mail className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/40">Digital Mail</span>
                  <a href="mailto:tamjidx69@gmail.com" className="text-lg font-bold tracking-tight hover:text-accent-red transition-colors">tamjidx69@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-[20px] bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-accent-red group-hover:text-white group-hover:border-accent-red transition-all duration-700 group-hover:shadow-[0_0_30px_rgba(255,59,48,0.3)]">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/40">Headquarters</span>
                  <span className="text-lg font-bold tracking-tight text-white/90">Chittagong, BD</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Social Grid */}
          <div className="grid grid-cols-1 gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`ios-card group p-6 flex items-center justify-between transition-all duration-500 ${social.color}`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {social.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 group-hover:opacity-100 transition-opacity">{social.name}</span>
                    <span className="text-xl font-bold tracking-tighter uppercase">{social.handle}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


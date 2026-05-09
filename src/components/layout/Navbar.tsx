import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <img 
            src="/src/assets/images/logo_professional.png" 
            alt="NEXT GAMING" 
            className="h-12 w-auto transition-all duration-500 group-hover:scale-105" 
          />
          <div className="flex flex-col -gap-1">
            <span className="text-xl font-black tracking-tighter leading-none">NEXT</span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 leading-none">MEDIA GROUP</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
          <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
          <a href="#platforms" className="hover:text-white transition-colors duration-300">Network</a>
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://www.facebook.com/groups/1373434454476901" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] uppercase tracking-[0.2em] font-bold px-6 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-500 shadow-[0_10px_25px_rgba(255,255,255,0.1)]"
          >
            Digital Community
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

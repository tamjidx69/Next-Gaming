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
        <a href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <span>NEXT</span>
          <span className="text-white/40">GAMING</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
          <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Content</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Platforms</a>
          <a href="#" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[10px] uppercase tracking-widest px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-500">
            Join Community
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 glass h-14"
    >
      <div className="max-w-[1600px] mx-auto px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/src/assets/images/logo_professional.png" 
              alt="NEXT GAMING" 
              className="h-9 w-auto transition-all duration-500" 
            />
          </a>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-medium text-white/90">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#platforms" className="hover:text-white transition-colors">Network</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4 text-[10px] text-white/60 font-medium">
            <span>Sat May 09</span>
            <span>10:14 AM</span>
          </div>
          <a 
            href="https://www.facebook.com/groups/1373434454476901" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold px-4 py-1.5 bg-white text-black rounded-md hover:bg-white/90 transition-all shadow-sm active:scale-95"
          >
            Join Community
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

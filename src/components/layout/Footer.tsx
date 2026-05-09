const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/src/assets/images/logo_professional.png" 
              alt="NEXT GAMING" 
              className="h-12 w-auto" 
            />
            <div className="flex flex-col -gap-1">
              <span className="text-2xl font-black tracking-tighter leading-none">NEXT</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 leading-none">GAMING</span>
            </div>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Representing the future of gaming culture in Bangladesh. Premium media. Cinematic storytelling. Creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Navigation</span>
            <div className="flex flex-col gap-2 text-sm text-white/50 font-medium tracking-tight">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#platforms" className="hover:text-white transition-colors">Network</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Social</span>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <a href="https://www.youtube.com/@nextgamin.g" className="hover:text-white transition-colors" target="_blank">YouTube</a>
              <a href="https://www.instagram.com/nextgamin.g" className="hover:text-white transition-colors" target="_blank">Instagram</a>
              <a href="https://www.facebook.com/Next.Gamingx" className="hover:text-white transition-colors" target="_blank">Facebook Page</a>
              <a href="https://www.facebook.com/groups/1373434454476901" className="hover:text-white transition-colors" target="_blank">Community Group</a>
              <a href="https://www.tiktok.com/@tamjidxislam1" className="hover:text-white transition-colors" target="_blank">TikTok</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Contact</span>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <a href="mailto:tamjidx69@gmail.com" className="hover:text-white transition-colors">tamjidx69@gmail.com</a>
              <span className="hover:text-white transition-colors">Chittagong, BD</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-white/20">
        <span>&copy; {currentYear} NEXT GAMING MEDIA GROUP.</span>
        <span>Crafted for high performance.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

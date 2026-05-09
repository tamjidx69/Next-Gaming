const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
        <div>
          <div className="text-2xl font-black tracking-tighter mb-6">
            NEXT<span className="text-white/20">GAMING</span>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Representing the future of gaming culture in Bangladesh. Premium media. Cinematic storytelling. Creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Navigation</span>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">Content</a>
              <a href="#" className="hover:text-white transition-colors">Platforms</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Social</span>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <a href="https://www.youtube.com/@nextgamin.g" className="hover:text-white transition-colors" target="_blank">YouTube</a>
              <a href="https://www.instagram.com/nextgamin.g" className="hover:text-white transition-colors" target="_blank">Instagram</a>
              <a href="https://www.facebook.com/Next.Gamingx" className="hover:text-white transition-colors" target="_blank">Facebook</a>
              <a href="https://linktr.ee/next.gamingg" className="hover:text-white transition-colors" target="_blank">TikTok</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Contact</span>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <a href="mailto:hello@nextgaming.com" className="hover:text-white transition-colors">hello@nextgaming.com</a>
              <a href="#" className="hover:text-white transition-colors">Dhaka, BD</a>
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

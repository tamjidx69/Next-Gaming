import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Cpu, Monitor, Headphones, Mouse, Keyboard, HardDrive, Layout, MonitorCheck, Zap, Fan, Box } from 'lucide-react';

const products = [
  {
    name: "AMD Ryzen™ 5 5600G Desktop Processor",
    link: "https://amzn.to/4ubTNTK",
    icon: <Cpu className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/51f286InAnL._AC_SL1000_.jpg",
    category: "Processor",
    isAmazonChoice: true
  },
  {
    name: "Samsung 24\" S30GD Essential Monitor",
    link: "https://amzn.to/4wiXQit",
    icon: <Monitor className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/81Tj8XPV7XL._AC_SL1500_.jpg",
    category: "Monitor",
    isPrime: true
  },
  {
    name: "Havit H2002d Wired Gaming Headset",
    link: "https://amzn.to/4d5qFaE",
    icon: <Headphones className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/71N7mOkV9kL._AC_SL1500_.jpg",
    category: "Headset",
    isAmazonChoice: true
  },
  {
    name: "Custom Topographic Gaming Mouse",
    link: "https://amzn.to/42o2AWl",
    icon: <Mouse className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/51rY+JqS8UL._AC_SL1500_.jpg",
    category: "Mouse",
    isPrime: true
  },
  {
    name: "MageGee 60% Mechanical Keyboard",
    link: "https://amzn.to/4u61fQf",
    icon: <Keyboard className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/61SjC6oN5mL._AC_SL1500_.jpg",
    category: "Keyboard",
    isAmazonChoice: true
  },
  {
    name: "T-Force G50 1TB NVMe PCIe 4.0 SSD",
    link: "https://amzn.to/4ubWkgI",
    icon: <HardDrive className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/71oD428qZ1L._AC_SL1500_.jpg",
    category: "Storage",
    isPrime: true
  },
  {
    name: "Corsair Vengeance LPX 16GB RAM",
    link: "https://amzn.to/4npt9UP",
    icon: <Layout className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/51X5f69S9rL._AC_SL1000_.jpg",
    category: "Memory",
    isPrime: true
  },
  {
    name: "MSI A520M-A PRO Motherboard",
    link: "https://amzn.to/4uInqM9",
    icon: <MonitorCheck className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/71lqW9XwUGL._AC_SL1200_.jpg",
    category: "Motherboard",
    isAmazonChoice: true
  },
  {
    name: "Morovol Mesh Micro-ATX Case",
    link: "https://amzn.to/4301nVd",
    icon: <Box className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/81Zc9+vXpRL._AC_SL1500_.jpg",
    category: "Case",
    isPrime: true
  },
  {
    name: "AUOTAC 1000W Fully Modular PSU",
    link: "https://amzn.to/42uPRkF",
    icon: <Zap className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/71u9Y0xInCL._AC_SL1500_.jpg",
    category: "Power",
    isAmazonChoice: true
  },
  {
    name: "Corsair iCUE H150i Liquid Cooler",
    link: "https://amzn.to/435oDRG",
    icon: <Fan className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/61N+u3+nL+L._AC_SL1500_.jpg",
    category: "Cooling",
    isPrime: true
  },
  {
    name: "ASUS Dual GeForce RTX™ 4060 Ti",
    link: "https://amzn.to/4v17y7N",
    icon: <Cpu className="w-5 h-5" />,
    image: "https://m.media-amazon.com/images/I/71j2p+2QZWL._AC_SL1500_.jpg",
    category: "Graphics",
    isPrime: true
  }
];

const Setup = () => {
  return (
    <section id="setup" className="cinematic-spacing px-6 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50vw] h-[50vw] bg-accent-red/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24 relative"
        >
          <div className="absolute top-0 right-0 hidden lg:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-white/50 group-hover:text-white uppercase tracking-widest transition-colors">System Report: Healthy</span>
          </div>

          <span className="text-[11px] uppercase tracking-[0.4em] text-accent-red font-bold mb-4 block">Hardware Inventory</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em] uppercase leading-[0.8] mb-8 text-white">
            My <span className="text-white/30">Setup.</span>
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-md mx-auto font-medium tracking-tight leading-relaxed">
            Personal hardware selection powering the NEXT Media Group ecosystem. Use the links below to support our work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.a
              key={index}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="macos-card group flex flex-col p-6 hover:border-accent-red/40 hover:shadow-[0_0_40px_rgba(255,59,48,0.2)] transition-all duration-700 relative overflow-hidden h-full"
            >
              <div className="macos-window-header">
                <div className="window-dot dot-red" />
                <div className="window-dot dot-yellow" />
                <div className="window-dot dot-green" />
                <div className="ml-2 text-[8px] font-medium text-white/30 uppercase tracking-widest">{product.category}.sh</div>
              </div>

              <div className="relative aspect-square w-full mb-6 mt-10 overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center p-6 group-hover:bg-white/[0.05] transition-colors duration-500">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 pointer-events-none drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Amazon Specific Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {product.isAmazonChoice && (
                    <div className="bg-[#232F3E] text-white text-[8px] font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-white/10">
                      <span className="text-[#FF9900]">Amazon's</span> Choice
                    </div>
                  )}
                  {product.isPrime && (
                    <div className="bg-white text-[#00A8E1] text-[8px] font-black px-2 py-0.5 rounded italic border border-[#00A8E1]/20">
                      ✓ prime
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                   <div className="text-[10px] font-black text-white uppercase tracking-widest bg-accent-red px-6 py-2 rounded-lg shadow-[0_0_20px_rgba(255,59,48,0.4)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                     Check Price
                   </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:bg-accent-red group-hover:text-white transition-all duration-500 shadow-inner">
                      {product.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 group-hover:text-accent-red transition-colors">{product.category}</span>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-white leading-tight tracking-tight mt-1 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                   <div className="flex items-center gap-2 text-white/40 group-hover:text-accent-red transition-colors">
                     <ShoppingCart size={14} />
                     <span className="text-[11px] font-bold uppercase tracking-widest">Buy on Amazon</span>
                   </div>
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-accent-red group-hover:text-accent-red group-hover:bg-accent-red/10 transition-all duration-300">
                     <span className="text-[18px]">→</span>
                   </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Amazon Associate Disclosure */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-20 text-center"
        >
          <p className="text-[10px] text-white/30 max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-widest">
            As an Amazon Associate I earn from qualifying purchases.
            All products listed are part of our active production environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Setup;

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#020202] text-white px-6 md:px-16 py-32 border-t border-white/5 relative overflow-hidden">
      {/* Subtle abstract glare indicating high-tech finish */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/[0.015] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-24 relative z-10 w-full">
        
        {/* Massive Call to Action */}
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9]">
            Force of <br/><span className="text-white/30">Nature.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-5 bg-white text-black text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-300">
              Build Your Own
            </button>
            <button className="px-10 py-5 bg-transparent border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-colors duration-300">
              Find Retailer
            </button>
          </div>
        </div>

        {/* Links & Legal Boilerplate */}
        <div className="flex flex-col items-start lg:items-end gap-16 w-full lg:w-auto">
          <div className="flex flex-wrap gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Recalls</a>
          </div>
          <p className="text-[10px] text-white/30 tracking-[0.25em] font-light uppercase">
            © 2026 MCLAREN AUTOMOTIVE LIMITED
          </p>
        </div>
        
      </div>
    </footer>
  );
}

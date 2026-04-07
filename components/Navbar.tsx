'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-6 flex items-center justify-between pointer-events-auto"
    >
      {/* Subtle glass backdrop */}
      <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-lg border-b border-white/5 -z-10" />
      
      {/* Brand */}
      <div className="text-white font-bold tracking-[0.2em] text-sm md:text-base uppercase flex items-center gap-2 cursor-pointer">
        <span>McLAREN</span>
        <span className="w-1 h-1 rounded-full bg-white/40 block"></span>
        <span className="font-light text-white/70">ARTURA</span>
      </div>

      {/* Links - Hidden on mobile for simplicity, standard on larger screens */}
      <div className="hidden md:flex items-center space-x-10 text-[11px] font-medium tracking-[0.2em] text-white/50">
        <a href="#" className="hover:text-white transition-colors duration-300">DISCOVER</a>
        <a href="#" className="hover:text-white transition-colors duration-300">INNOVATION</a>
        <a href="#" className="hover:text-white transition-colors duration-300">PERFORMANCE</a>
      </div>

      {/* CTA Button */}
      <button className="px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase border border-white/20 text-white rounded-sm hover:bg-white hover:text-black transition-all duration-500 hidden sm:block">
        Find Retailer
      </button>
    </motion.nav>
  );
}

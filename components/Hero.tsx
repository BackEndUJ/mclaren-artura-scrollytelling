'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle ambient lighting behind the Hero text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center text-center px-4 mt-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-white/40 tracking-[0.4em] uppercase text-xs md:text-sm font-medium mb-8"
        >
          High-Performance Hybrid
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter mix-blend-lighten"
        >
          THE ARTURA
        </motion.h1>
      </div>

      {/* Gravity-defying elegant bounce scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-16 flex flex-col items-center gap-4"
      >
        <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">Scroll to Deconstruct</p>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

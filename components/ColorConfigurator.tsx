'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = [
  { id: 'papaya', name: 'McLaren Orange', hex: '#FF8A00', glow: 'rgba(255,138,0,0.5)' },
  { id: 'onyx', name: 'Onyx Black', hex: '#111111', glow: 'rgba(255,255,255,0.08)' },
  { id: 'flux', name: 'Flux Green', hex: '#B8FF00', glow: 'rgba(184,255,0,0.4)' },
  { id: 'vermillion', name: 'Vermillion Red', hex: '#D2101A', glow: 'rgba(210,16,26,0.5)' },
  { id: 'silica', name: 'Silica White', hex: '#F2F2F2', glow: 'rgba(242,242,242,0.4)' },
];

export default function ColorConfigurator() {
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <section className="relative w-full py-48 md:py-64 bg-[#050505] overflow-hidden">
      
      {/* Ambient reactive lighting driven by React state */}
      <AnimatePresence>
        <motion.div 
          key={activeColor.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none blur-[120px] opacity-20"
          style={{ background: `radial-gradient(circle at center right, ${activeColor.glow} 0%, transparent 70%)` }}
        />
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-24">
        
        {/* Placeholder UI representing the Artura reflecting color */}
        <div className="w-full lg:w-3/5 aspect-[16/9] bg-[#020202] border border-white/5 backdrop-blur-3xl rounded-[2rem] flex flex-col items-center justify-center relative shadow-2xl group transition-all duration-700">
          
          <motion.div 
             className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 mix-blend-overlay opacity-30 transition-opacity duration-700 group-hover:opacity-100 rounded-[2rem]"
          />
          
          <h3 className="text-[10rem] font-black tracking-tighter uppercase blur-3xl opacity-30 absolute transition-all duration-1000 select-none" style={{ color: activeColor.hex }}>
            ARTURA
          </h3>
          
          <h3 className="text-white/20 text-3xl font-light tracking-[0.5em] uppercase transition-all duration-1000 z-10 text-center px-4" style={{ color: activeColor.hex }}>
            Color Visualizer <br />
            <span className="text-xs tracking-[1em] text-white/40 block mt-4">Interactive Component</span>
          </h3>

        </div>

        {/* Configuration Controls */}
        <div className="w-full lg:w-2/5 flex flex-col items-start">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">Configure Your Vision</h2>
          <p className="text-white/50 text-lg font-light mb-16 leading-relaxed max-w-md">Discover how the breathtaking architecture of the Artura responds to light by selecting a signature MSO (McLaren Special Operations) finish.</p>
          
          <div className="flex flex-wrap gap-6 mb-16">
            {colors.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveColor(c)}
                className={`w-16 h-16 rounded-full border border-white/10 transition-all duration-500 relative flex items-center justify-center ${activeColor.id === c.id ? 'scale-110 ring-2 ring-white/20 ring-offset-8 ring-offset-[#050505]' : 'hover:scale-105'}`}
                style={{ backgroundColor: c.hex }}
                aria-label={`Select ${c.name}`}
              >
                {activeColor.id === c.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="w-2 h-2 rounded-full bg-white absolute" 
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col border-l border-white/20 pl-6">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold mb-3">Selected Finish</p>
            <AnimatePresence mode="wait">
              <motion.p 
                key={activeColor.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-3xl text-white font-medium tracking-tight"
              >
                {activeColor.name}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function DesignPhilosophy() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax mapping: The background moves opposite to the scrolling text
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center justify-center border-t border-white/5">
      
      {/* Immersive radial gradient simulating a spotlight */}
      <motion.div 
        style={{ y: y1 }} 
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,138,0,0.03)_0%,transparent_70%)] pointer-events-none scale-150" 
      />
      
      {/* Massive subtle background watermark */}
      <h2 className="absolute text-[15rem] md:text-[30rem] font-black tracking-tighter text-white/[0.01] pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        SOUL
      </h2>
      
      <motion.div style={{ y: y2 }} className="max-w-6xl px-8 text-center relative z-10">
        <p className="text-3xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-snug mix-blend-lighten">
          "The Artura is the pure distillation of everything we have ever learned. It's the exact moment where visceral power meets <span className="text-white/30 italic">digital soul</span>."
        </p>
      </motion.div>

    </section>
  );
}

'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Specifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative w-full bg-[#050505] py-32 md:py-56 px-6 md:px-16 border-t border-white/5 overflow-hidden">
      
      {/* Background visual texture */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12"
        >
          {/* Spec 1 */}
          <motion.div variants={itemVariants} className="flex flex-col items-start border-l border-white/10 pl-8">
            <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Total Output</h3>
            <p className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
              680<span className="text-3xl text-white/30 font-light tracking-normal ml-2">PS</span>
            </p>
            <p className="mt-6 text-white/50 text-sm font-light leading-relaxed max-w-sm">
              Targeted combined power from the V6 engine and E-Motor, delivering instant and relentless acceleration that redefines limits.
            </p>
          </motion.div>

          {/* Spec 2 */}
          <motion.div variants={itemVariants} className="flex flex-col items-start border-l border-white/10 pl-8">
            <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Acceleration</h3>
            <p className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
              3.0<span className="text-3xl text-white/30 font-light tracking-normal ml-2">s</span>
            </p>
            <p className="mt-6 text-white/50 text-sm font-light leading-relaxed max-w-sm">
              0-100 km/h (0-62 mph). Blistering pace achieved through advanced lightweight engineering and unadulterated hybrid torque.
            </p>
          </motion.div>

          {/* Spec 3 */}
          <motion.div variants={itemVariants} className="flex flex-col items-start border-l border-white/10 pl-8">
            <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Dry Weight</h3>
            <p className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
              1395<span className="text-3xl text-white/30 font-light tracking-normal ml-2">kg</span>
            </p>
            <p className="mt-6 text-white/50 text-sm font-light leading-relaxed max-w-sm">
              Lightest in its class. The all-new McLaren Carbon Lightweight Architecture pushes the extreme boundaries of agility.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

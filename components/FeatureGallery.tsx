'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    id: 1,
    title: "Mclaren Carbon Lightweight Architecture (MCLA)",
    description: "The core of the Artura. An all-new, ultra-light carbon fibre tub built to handle the immense torque of the E-Motor while carving corners."
  },
  {
    id: 2,
    title: "Axial Flux E-Motor",
    description: "Nestled entirely within the transmission bell housing, delivering instant 225Nm torque with zero latency. A marvel of packaging density."
  },
  {
    id: 3,
    title: "Aerodynamic Purity",
    description: "Every vent, intake, and curve is dictated by the wind. The seamless bodywork wraps around the mechanics to generate supreme downforce without drag."
  }
];

export default function FeatureGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // This takes the vertical scroll progress over the 300vh container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Maps vertical scroll to horizontal scroll. Moving 2 full viewports to the left (-66.66% of a 300vw container)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#050505]">
      {/* Sticky box that sits on the screen while the container scrolls horizontally */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden border-t border-b border-white/5">
        
        <motion.div style={{ x }} className="flex w-[300vw] h-full items-center">
          {features.map((feature, index) => (
            <div key={feature.id} className="w-[100vw] h-full flex flex-col items-center justify-center p-8 md:p-24 relative overflow-hidden">
              
              {/* Subtle divider graphic in the background to show movement */}
              <div className="absolute inset-0 bg-white/[0.01] border-x border-white/5 flex items-center justify-center pointer-events-none">
                 <div className="w-[1px] h-3/4 bg-white/5 absolute left-10" />
                 <div className="w-[1px] h-3/4 bg-white/5 absolute right-10" />
              </div>
              
              <div className="max-w-[1200px] w-full relative z-10 px-4 md:px-0">
                <p className="text-white/30 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-white/30 block"></span>
                  Engineering File 0{index + 1}
                </p>
                <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tighter mb-8 leading-[0.9] max-w-4xl">
                  {feature.title}
                </h2>
                <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed max-w-3xl">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

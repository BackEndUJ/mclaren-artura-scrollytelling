'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';

const FRAME_COUNT = 191;

export default function ArturaExplodedView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let currentLoadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    const handleLoad = () => {
      currentLoadedCount++;
      setLoadedCount(currentLoadedCount);
      if (currentLoadedCount === FRAME_COUNT + 1) {
        setLoaded(true);
      }
    };

    for (let i = 0; i <= FRAME_COUNT; i++) {
        const img = new window.Image();
        // Fallback for demo so it doesn't break if images are not yet available physically
        img.src = `/sequence/artura_${i}.webp`;
        img.onload = handleLoad;
        img.onerror = () => { 
          // Treat as loaded to prevent getting stuck in loading screen
          handleLoad(); 
        };
        imgArray.push(img);
    }
    setImages(imgArray);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Render function for canvas
  const renderFrame = (progressValue: number) => {
    if (!loaded || images.length === 0) return;
    
    const frameIndex = Math.min(
      FRAME_COUNT,
      Math.max(0, Math.floor(progressValue * FRAME_COUNT))
    );
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = images[frameIndex];
    if (img && img.width > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio); // Use cover logic to fill screen
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      ctx.drawImage(img, 0, 0, img.width, img.height,
                    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }
  };

  useEffect(() => {
    const unsubscribe = springProgress.on("change", renderFrame);
    return () => unsubscribe();
  }, [springProgress, loaded, images]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // High DPI canvas setup for sharper renders
        const DPR = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * DPR;
        canvasRef.current.height = window.innerHeight * DPR;
        // Redraw current frame instantly upon resize
        renderFrame(springProgress.get());
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // trigger once on mount
    return () => window.removeEventListener('resize', handleResize);
  }, [loaded, images, springProgress]); // eslint-disable-line react-hooks/exhaustive-deps

  // Opacity & Transform maps for Scrollytelling Beats
  
  // Beat A: 0-15%
  const beatAOpacity = useTransform(springProgress, [0, 0.05, 0.1, 0.15], [0, 1, 1, 0]);
  const beatAY = useTransform(springProgress, [0, 0.05], [50, 0]);
  
  // Beat B: 20-45%
  const beatBOpacity = useTransform(springProgress, [0.15, 0.2, 0.4, 0.45], [0, 1, 1, 0]);
  const beatBY = useTransform(springProgress, [0.15, 0.2], [50, 0]);
  
  // Beat C: 50-75%
  const beatCOpacity = useTransform(springProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const beatCY = useTransform(springProgress, [0.45, 0.5], [50, 0]);
  
  // Beat D: 80-100%
  const beatDOpacity = useTransform(springProgress, [0.75, 0.8, 1, 1], [0, 1, 1, 1]);
  const beatDY = useTransform(springProgress, [0.75, 0.8], [50, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#050505]">
      {/* Sticky container tracking the window view */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Minimalist Loading State */}
        {!loaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="flex flex-col items-center space-y-6"
            >
              <div className="w-64 h-[2px] bg-white/10 overflow-hidden relative">
                 <div 
                   className="absolute top-0 left-0 h-full bg-white/70 transition-all duration-300 ease-out" 
                   style={{ width: `${(loadedCount / (FRAME_COUNT + 1)) * 100}%` }}
                 />
              </div>
              <p className="text-white/50 uppercase tracking-[0.3em] text-[10px] font-medium font-sans animate-pulse">
                Synchronizing Components...
              </p>
            </motion.div>
          </div>
        )}

        <canvas 
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ objectFit: 'cover' }}
        />

        {/* Subtle Text Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Scrollytelling Text Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end pb-24 px-8 md:px-24 xl:px-32 max-w-[1600px] mx-auto w-full">
          
          <motion.div style={{ opacity: beatAOpacity, y: beatAY }} className="absolute bottom-24 left-8 md:left-24 xl:left-32 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white/90 tracking-tighter mb-4 leading-tight">ARTURA</h2>
            <p className="text-lg md:text-2xl text-white/60 tracking-wider font-light">The next generation of supercar.</p>
          </motion.div>

          <motion.div style={{ opacity: beatBOpacity, y: beatBY }} className="absolute bottom-24 left-8 md:left-24 xl:left-32 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white/90 tracking-tighter mb-4 leading-tight">CARBON MONOCELL II</h2>
            <p className="text-lg md:text-2xl text-white/60 tracking-wider font-light">Ultra-lightweight architecture weighing just 82kg.</p>
          </motion.div>

          <motion.div style={{ opacity: beatCOpacity, y: beatCY }} className="absolute bottom-24 left-8 md:left-24 xl:left-32 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white/90 tracking-tighter mb-4 leading-tight">HPH HYBRID V6</h2>
            <p className="text-lg md:text-2xl text-white/60 tracking-wider font-light">Twin-turbocharged precision meets axial flux electric power.</p>
          </motion.div>

          <motion.div style={{ opacity: beatDOpacity, y: beatDY }} className="absolute bottom-24 left-8 md:left-24 xl:left-32 max-w-2xl">
             <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white/90 tracking-tighter mb-4 leading-tight">EVERY BOLT.<br/>EVERY MICRON.</h2>
             <p className="text-lg md:text-2xl text-white/60 tracking-wider font-light">Experience the symmetry of 3,000+ individual parts.</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

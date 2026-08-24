"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grille animée plus visible */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Orbes de lumière flottants plus intenses */}
      <motion.div 
        animate={{ 
          x: [0, 120, 0], 
          y: [0, 70, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-emerald-500/20 blur-[100px] rounded-full"
      />
      <motion.div 
        animate={{ 
          x: [0, -100, 0], 
          y: [0, 120, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-cyan-500/15 blur-[130px] rounded-full"
      />

      {/* Scanline plus prononcée */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="scanline opacity-20" />
      </div>
      
      {/* Vignettage pour concentrer le regard */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(1,4,2,0.8)_100%)]" />
    </div>
  );
};

export default BackgroundEffects;
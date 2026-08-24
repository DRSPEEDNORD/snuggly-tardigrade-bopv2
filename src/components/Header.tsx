"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

const Header = () => {
  return (
    <header className="w-full pt-16 pb-10 px-6 flex flex-col items-center text-center relative">
      {/* Logo avec double anneau et animation heartbeat */}
      <div className="relative mb-10">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-3 border border-emerald-500/20 rounded-full border-dashed"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-6 border border-white/5 rounded-full"
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1, 1.08, 1],
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.4, 1]
          }}
          className="relative w-32 h-32 rounded-full p-[2px] bg-gradient-to-b from-emerald-500 via-emerald-500/20 to-transparent shadow-[0_0_40px_rgba(16,185,129,0.15)]"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-[#010402] flex items-center justify-center border border-white/10">
            <img 
              src="/logo.jpg" 
              alt="Dr Speed Nord" 
              className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = '<span class="text-4xl font-black text-emerald-400 italic glow-emerald">DSN</span>';
                }
              }}
            />
          </div>
        </motion.div>
      </div>

      <div className="space-y-4 relative z-10">
        <div className="relative">
          <h2 className="text-5xl font-black italic tracking-tighter text-outline absolute -top-3 left-1/2 -translate-x-1/2 opacity-20 select-none">
            DR SPEED
          </h2>
          <h1 className="text-4xl font-black italic tracking-tighter text-white uppercase leading-none relative flex items-center justify-center gap-3">
            <ScrambleText text="DRSPEED" delay={500} />
            <ScrambleText text="NORD" className="text-emerald-400 glow-emerald" delay={1200} />
          </h1>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <span className="text-[9px] font-black tracking-[0.4em] text-white/40 uppercase">Quality</span>
          <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
          <span className="text-[9px] font-black tracking-[0.4em] text-white/40 uppercase">Speed</span>
          <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
          <span className="text-[9px] font-black tracking-[0.4em] text-white/40 uppercase">Privacy</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
"use client";

import React from 'react';
import { Send, Download, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const ActionCards = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-8 px-6 w-full max-w-md mx-auto"
    >
      {/* Install App Button */}
      <motion.a
        variants={item}
        href="https://drspeedpwa.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hyper-card group p-8 flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:scale-110 transition-transform duration-500">
            <Download size={28} strokeWidth={2} />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[9px] font-black text-emerald-400 tracking-widest uppercase">Live Now</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-black text-white tracking-tight uppercase italic">INSTALLER L'APP</h3>
            <ArrowRight size={20} className="text-emerald-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
          </div>
          <p className="text-[11px] text-white/40 font-medium leading-relaxed uppercase tracking-wider">
            Accédez à notre catalogue complet et commandez en 2 clics avec notre application optimisée.
          </p>
        </div>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">v2.4.0 Stable</span>
          <Shield size={14} className="text-white/10" />
        </div>
      </motion.a>

      {/* Telegram Button */}
      <motion.a 
        variants={item}
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hyper-card group p-8 flex flex-col gap-6 border-cyan-500/10 hover:border-cyan-500/30"
      >
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.1)] group-hover:scale-110 transition-transform duration-500">
            <Send size={28} strokeWidth={2} className="-rotate-12 -translate-x-0.5" />
          </div>
          <span className="text-[9px] font-black text-cyan-400/50 tracking-widest uppercase">Community</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-black text-white tracking-tight uppercase italic">CANAL TELEGRAM</h3>
            <ArrowRight size={20} className="text-cyan-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
          </div>
          <p className="text-[11px] text-white/40 font-medium leading-relaxed uppercase tracking-wider">
            Rejoignez plus de 5000 membres. News exclusives, drops et support client 24/7.
          </p>
        </div>

        <div className="pt-4 border-t border-white/5 flex items-center gap-2">
          <div className="flex -space-x-2">
            {[1,2,3].map(i => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-[#010402] bg-white/10"></div>
            ))}
          </div>
          <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] ml-2">+5k membres</span>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default ActionCards;
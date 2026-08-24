"use client";

import React from 'react';
import { Send, Download, ArrowUpRight, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const ActionCards = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-5 px-6 w-full max-w-md mx-auto"
    >
      {/* Main Install Card - Redimensionnée */}
      <motion.a
        variants={item}
        href="https://drspeedpwa.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hyper-card group p-6 flex flex-col gap-4 border-emerald-500/20 hover:border-emerald-500/40"
      >
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <Download size={24} />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-bold text-emerald-400 uppercase flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
              Innovation DrSpeedNord
            </span>
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic flex items-center justify-between">
            <span className="flex items-center gap-2">
              INSTALLER L'APP
              <Zap size={18} className="text-emerald-400 fill-emerald-400/20" />
            </span>
            <ArrowUpRight size={18} className="text-white/10 group-hover:text-emerald-400 transition-colors" />
          </h3>
          <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider leading-relaxed">
            Accès direct à notre plateforme sécurisée.
          </p>
        </div>
      </motion.a>

      {/* Telegram Card - Secondary but Stylish */}
      <motion.a 
        variants={item}
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hyper-card group p-6 flex items-center gap-5 border-cyan-500/10 hover:border-cyan-500/30"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 group-hover:rotate-12 transition-transform">
          <Send size={24} className="-rotate-12" />
        </div>
        
        <div className="flex-1">
          <h4 className="text-lg font-black text-white uppercase italic tracking-tight">CANAL TELEGRAM</h4>
          <div className="flex items-center gap-2 mt-0.5">
            <Users size={12} className="text-white/20" />
            <span className="text-[10px] font-bold text-cyan-400/60 uppercase tracking-widest">+5,000 MEMBRES</span>
          </div>
        </div>

        <ArrowUpRight size={18} className="text-white/10 group-hover:text-cyan-400 transition-colors" />
      </motion.a>
    </motion.div>
  );
};

export default ActionCards;
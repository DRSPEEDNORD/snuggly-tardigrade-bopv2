"use client";

import React from 'react';
import { Send, Download, ArrowUpRight, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const ActionCards = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 px-6 w-full max-w-md mx-auto"
    >
      {/* Carte Installer l'App */}
      <motion.a
        variants={item}
        href="https://drspeedpwa.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group overflow-hidden rounded-[2.5rem] bg-black/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 p-7"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-emerald-500/5 text-emerald-400 border border-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
              <Download size={28} strokeWidth={1.5} />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[9px] font-black text-emerald-500 tracking-widest uppercase">EXCLUSIVITÉ DRSPEEDNORD</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-none flex items-center gap-2">
                INSTALLER L'APP <Zap size={24} className="text-emerald-400 fill-emerald-400/20" />
              </h3>
              <ArrowUpRight size={20} className="text-white/10 group-hover:text-emerald-400 transition-colors" />
            </div>
            <p className="text-[11px] text-white/30 font-bold uppercase tracking-wider">
              ACCÈS DIRECT À NOTRE PLATEFORME SÉCURISÉE.
            </p>
          </div>
        </div>
      </motion.a>

      {/* Carte Canal Telegram */}
      <motion.a 
        variants={item}
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative group overflow-hidden rounded-[2.5rem] bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 p-7"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 flex items-center gap-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all shrink-0">
            <Send size={28} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic leading-none">
                CANAL TELEGRAM
              </h3>
              <ArrowUpRight size={20} className="text-white/10 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-cyan-400/50" />
              <span className="text-[11px] font-black text-cyan-400/70 uppercase tracking-widest">+5,000 MEMBRES</span>
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default ActionCards;
"use client";

import React from 'react';
import { Send, Download, ArrowUpRight, Zap, Users, Shield } from 'lucide-react';
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
      {/* Main Install Card - Design Industriel/Tech */}
      <motion.a
        variants={item}
        href="https://drspeedpwa.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group overflow-hidden rounded-3xl bg-black/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 p-6"
      >
        {/* Effet de lumière au survol */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
                <Download size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-emerald-500 tracking-widest uppercase">Système V2.0</span>
                <span className="text-[8px] text-white/30 font-bold uppercase">Statut: Opérationnel</span>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic leading-none">
              INSTALLER <span className="text-emerald-400">L'APPLICATION</span>
            </h3>
            <div className="flex items-center gap-2">
              <div className="h-[1px] flex-1 bg-white/5"></div>
              <p className="text-[9px] text-white/40 font-bold uppercase tracking-tighter">Accès direct & sécurisé</p>
            </div>
          </div>
        </div>
      </motion.a>

      {/* Telegram Card - Design Minimaliste/Dark */}
      <motion.a 
        variants={item}
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative group overflow-hidden rounded-3xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 p-5 flex items-center gap-4"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 group-hover:bg-cyan-500/10 transition-colors">
          <Send size={22} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
        
        <div className="flex-1">
          <h4 className="text-sm font-black text-white uppercase italic tracking-wide">CANAL TELEGRAM</h4>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Communauté Active</span>
          </div>
        </div>

        <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/5 text-white/20 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all">
          <ArrowUpRight size={14} />
        </div>
      </motion.a>

      {/* Petite carte de statut/sécurité */}
      <motion.div 
        variants={item}
        className="flex gap-3"
      >
        <div className="flex-1 rounded-2xl bg-white/[0.02] border border-white/5 p-3 flex items-center gap-3">
          <Shield size={14} className="text-emerald-500/50" />
          <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">Chiffrement AES-256</span>
        </div>
        <div className="flex-1 rounded-2xl bg-white/[0.02] border border-white/5 p-3 flex items-center gap-3">
          <Zap size={14} className="text-orange-500/50" />
          <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">Latence 12ms</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ActionCards;
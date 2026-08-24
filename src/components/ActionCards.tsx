"use client";

import React from 'react';
import { Send, Download, ArrowUpRight, Shield, Zap, Users } from 'lucide-react';
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
      {/* Main Install Card - Dominant */}
      <motion.a
        variants={item}
        href="https://drspeedpwa.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hyper-card group p-7 flex flex-col gap-5 border-emerald-500/20 hover:border-emerald-500/40"
      >
        <div className="flex justify-between items-start">
          <div className="w-14 h-14 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <Download size={28} />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-black text-emerald-500/50 tracking-[0.2em] uppercase">Security Protocol</span>
            <span className="text-[10px] font-bold text-emerald-400 uppercase flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              Encrypted
            </span>
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic flex items-center gap-3">
            INSTALLER L'APP
            <Zap size={20} className="text-emerald-400 fill-emerald-400/20" />
          </h3>
          <p className="text-[11px] text-white/40 font-medium uppercase tracking-wider leading-relaxed">
            Accès direct à notre plateforme sécurisée. <br/>Expérience fluide sans intermédiaire.
          </p>
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-white/5">
          <div className="flex items-center gap-2">
            <Shield size={12} className="text-white/20" />
            <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">SECURED ACCESS</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[9px] font-black uppercase">Lancer</span>
            <ArrowUpRight size={14} />
          </div>
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

      {/* Technical Footer Strip */}
      <motion.div 
        variants={item}
        className="py-3 px-6 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center gap-4 opacity-50"
      >
        <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
        <span className="text-[8px] font-black text-white/40 tracking-[0.4em] uppercase">End-to-End Encryption Active</span>
        <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
      </motion.div>
    </motion.div>
  );
};

export default ActionCards;
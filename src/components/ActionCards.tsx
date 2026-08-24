"use client";

import React from 'react';
import { Send, Download, ArrowUpRight } from 'lucide-react';
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
      {/* Main Install Card */}
      <motion.a
        variants={item}
        href="https://drspeedpwa.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group overflow-hidden rounded-3xl bg-black/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 p-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
              <Download size={24} />
            </div>
            <ArrowUpRight size={20} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic leading-none">
              INSTALLER <span className="text-emerald-400">L'APPLICATION</span>
            </h3>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Accès direct à la plateforme</p>
          </div>
        </div>
      </motion.a>

      {/* Telegram Card */}
      <motion.a 
        variants={item}
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative group overflow-hidden rounded-3xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 p-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all">
              <Send size={24} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <ArrowUpRight size={20} className="text-white/20 group-hover:text-cyan-400 transition-colors" />
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic leading-none">
              CANAL <span className="text-cyan-400">TELEGRAM</span>
            </h3>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Rejoindre la communauté</p>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default ActionCards;
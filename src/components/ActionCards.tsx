"use client";

import React from 'react';
import { Send, Download, ArrowUpRight, Shield, Zap, Users, Globe } from 'lucide-react';
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 gap-4 px-6 w-full max-w-md mx-auto"
    >
      {/* Main Install Card - Full Width */}
      <motion.a
        variants={item}
        href="https://drspeedpwa.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hyper-card col-span-2 group p-6 flex flex-col gap-4 border-emerald-500/20 hover:border-emerald-500/40"
      >
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform">
            <Download size={24} />
          </div>
          <div className="text-right">
            <span className="text-[8px] font-black text-emerald-500/50 tracking-[0.2em] uppercase block">System Status</span>
            <span className="text-[10px] font-bold text-emerald-400 uppercase">Online & Secure</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic flex items-center gap-2">
            INSTALLER L'APP
            <Zap size={18} className="text-emerald-400 fill-emerald-400/20" />
          </h3>
          <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider mt-1">
            Plateforme optimisée pour une expérience fluide et anonyme.
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <Shield size={12} className="text-emerald-500/50" />
            <span className="text-[9px] font-bold text-white/20 uppercase">Encrypted V2.4</span>
          </div>
          <ArrowUpRight size={16} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
        </div>
      </motion.a>

      {/* Telegram Card - Half Width */}
      <motion.a 
        variants={item}
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hyper-card group p-5 flex flex-col gap-3 border-cyan-500/10 hover:border-cyan-500/30"
      >
        <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400">
          <Send size={20} className="-rotate-12" />
        </div>
        <div>
          <h4 className="text-sm font-black text-white uppercase italic">TELEGRAM</h4>
          <div className="flex items-center gap-1.5 mt-1">
            <Users size={10} className="text-white/20" />
            <span className="text-[9px] font-bold text-cyan-400/60 uppercase">+5K</span>
          </div>
        </div>
      </motion.a>

      {/* Network/Support Card - Half Width */}
      <motion.div 
        variants={item}
        className="hyper-card group p-5 flex flex-col gap-3 border-purple-500/10 hover:border-purple-500/30 cursor-default"
      >
        <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400">
          <Globe size={20} />
        </div>
        <div>
          <h4 className="text-sm font-black text-white uppercase italic">RÉSEAU</h4>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
            <span className="text-[9px] font-bold text-purple-400/60 uppercase">Active</span>
          </div>
        </div>
      </motion.div>

      {/* Small Info Strip */}
      <motion.div 
        variants={item}
        className="col-span-2 py-3 px-6 rounded-full bg-white/5 border border-white/5 flex items-center justify-between"
      >
        <span className="text-[8px] font-black text-white/20 tracking-[0.3em] uppercase">Protocol: Secure_Access_v4</span>
        <div className="flex gap-2">
          <div className="w-1 h-1 rounded-full bg-emerald-500/30"></div>
          <div className="w-1 h-1 rounded-full bg-emerald-500/30"></div>
          <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ActionCards;
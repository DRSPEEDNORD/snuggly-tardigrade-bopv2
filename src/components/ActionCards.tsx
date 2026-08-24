"use client";

import React from 'react';
import { Send, Download, ArrowUpRight } from 'lucide-react';

const ActionCards = () => {
  return (
    <div className="flex flex-col gap-6 px-6 w-full max-w-md mx-auto">
      {/* Install App Button */}
      <a
        href="https://drspeedpwa.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="cyber-card group p-6 flex items-center gap-5"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full group-hover:bg-emerald-500/40 transition-colors"></div>
          <div className="relative w-16 h-16 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400">
            <Download size={32} strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-black text-white tracking-tight uppercase italic">INSTALLER</h3>
            <ArrowUpRight size={16} className="text-emerald-500/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <p className="text-[11px] text-white/40 font-bold uppercase tracking-wider mt-0.5">Application Mobile Native</p>
        </div>
      </a>

      {/* Telegram Button */}
      <a 
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cyber-card group p-6 flex items-center gap-5"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-500/40 transition-colors"></div>
          <div className="relative w-16 h-16 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-cyan-400">
            <Send size={32} strokeWidth={1.5} className="-rotate-12 -translate-x-0.5" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-black text-white tracking-tight uppercase italic">TELEGRAM</h3>
            <ArrowUpRight size={16} className="text-cyan-500/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <p className="text-[11px] text-white/40 font-bold uppercase tracking-wider mt-0.5">Accès Canal Privé</p>
        </div>
      </a>
    </div>
  );
};

export default ActionCards;
"use client";

import React from 'react';
import { Send, Download, ChevronRight } from 'lucide-react';

const ActionCards = () => {
  return (
    <div className="flex flex-col gap-5 px-8 w-full max-w-md mx-auto">
      {/* Install App Button */}
      <a
        href="https://drspeedpwa.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="cyber-border group flex items-center p-5 transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400/60"
      >
        <div className="w-14 h-14 flex items-center justify-center text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
          <Download size={32} strokeWidth={1.5} />
        </div>
        <div className="ml-4 flex-1 text-left">
          <h3 className="text-xl font-bold text-white tracking-wide uppercase">INSTALLER</h3>
          <p className="text-xs text-gray-400 font-medium">Ajouter l'application mobile</p>
        </div>
        <ChevronRight size={24} className="text-emerald-500/50 group-hover:text-emerald-400" />
      </a>

      {/* Telegram Button */}
      <a 
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cyber-border group flex items-center p-5 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/60"
      >
        <div className="w-14 h-14 flex items-center justify-center text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
          <Send size={32} strokeWidth={1.5} className="rotate-[-10deg]" />
        </div>
        <div className="ml-4 flex-1 text-left">
          <h3 className="text-xl font-bold text-white tracking-wide uppercase">TELEGRAM</h3>
          <p className="text-xs text-gray-400 font-medium">Rejoindre le canal privé</p>
        </div>
        <ChevronRight size={24} className="text-cyan-500/50 group-hover:text-cyan-400" />
      </a>
    </div>
  );
};

export default ActionCards;
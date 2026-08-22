"use client";

import React from 'react';
import { Send, LayoutGrid, ArrowRight } from 'lucide-react';

const ActionCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-6">
      <a 
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative flex items-center justify-between p-7 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 hover:border-purple-500/40 transition-all duration-500"
      >
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
            <Send size={26} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Canal Telegram</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Communauté & News</p>
          </div>
        </div>
        <ArrowRight size={20} className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </a>

      <a 
        href="https://votre-autre-app.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative flex items-center justify-between p-7 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 hover:border-purple-500/40 transition-all duration-500"
      >
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
            <LayoutGrid size={26} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Application Web</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Services en ligne</p>
          </div>
        </div>
        <ArrowRight size={20} className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </a>
    </div>
  );
};

export default ActionCards;
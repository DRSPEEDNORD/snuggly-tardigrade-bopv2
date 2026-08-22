"use client";

import React from 'react';
import { Send, LayoutGrid, ArrowUpRight } from 'lucide-react';

const ActionCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-6 mt-4">
      <a 
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-500"
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
            <Send size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Canal Telegram</h3>
            <p className="text-sm text-gray-500">Rejoindre la communauté</p>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-white/20 transition-all">
          <ArrowUpRight size={20} />
        </div>
      </a>

      <a 
        href="https://votre-autre-app.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-500"
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-500">
            <LayoutGrid size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Application Web</h3>
            <p className="text-sm text-gray-500">Accéder à nos services</p>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-white/20 transition-all">
          <ArrowUpRight size={20} />
        </div>
      </a>
    </div>
  );
};

export default ActionCards;
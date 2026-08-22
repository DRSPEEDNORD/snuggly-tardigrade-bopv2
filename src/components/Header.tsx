"use client";

import React from 'react';
import { MoreHorizontal, X, ShieldCheck } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full pt-8 pb-6 px-6 flex flex-col items-center gap-6">
      <div className="w-full flex justify-between items-center">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
          <X size={20} className="text-gray-400" />
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <ShieldCheck size={14} className="text-purple-500" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Verified Portal</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
          <MoreHorizontal size={20} className="text-gray-400" />
        </button>
      </div>

      <div className="relative group">
        {/* Glow effect behind logo */}
        <div className="absolute -inset-4 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all duration-700"></div>
        
        <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/src/assets/logo.jpg" 
              alt="Dr Speed Nord" 
              className="w-full h-full object-contain scale-110" 
            />
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="absolute bottom-3 right-3 w-5 h-5 bg-green-500 rounded-full border-[4px] border-[#050508] shadow-lg"></div>
      </div>

      <div className="text-center space-y-1">
        <h1 className="text-4xl font-black tracking-tighter uppercase italic italic text-white">
          DR SPEED <span className="text-purple-500">NORD</span>
        </h1>
        <p className="text-gray-500 text-xs font-medium tracking-[0.3em] uppercase">Premium Delivery Service</p>
      </div>
    </div>
  );
};

export default Header;
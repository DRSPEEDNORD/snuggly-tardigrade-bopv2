"use client";

import React from 'react';
import { MoreHorizontal, X, ShieldCheck } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full pt-10 pb-6 px-6 flex flex-col items-center gap-8">
      <div className="w-full flex justify-between items-center">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111] border border-white/5 hover:bg-[#1a1a1a] transition-all">
          <X size={20} className="text-gray-500" />
        </button>
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111] border border-white/5">
          <ShieldCheck size={14} className="text-purple-500" />
          <span className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-400">Premium Access</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111] border border-white/5 hover:bg-[#1a1a1a] transition-all">
          <MoreHorizontal size={20} className="text-gray-500" />
        </button>
      </div>

      <div className="relative">
        {/* Halo violet très discret pour la profondeur */}
        <div className="absolute -inset-10 bg-purple-600/10 rounded-full blur-[80px]"></div>
        
        <div className="relative w-44 h-44 rounded-full p-[2px] bg-gradient-to-b from-white/10 to-transparent">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,1)]">
            <img 
              src="/src/assets/logo.jpg" 
              alt="Dr Speed Nord" 
              className="w-full h-full object-contain scale-105" 
            />
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-[4px] border-black shadow-xl"></div>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black tracking-tighter uppercase italic text-white">
          DR SPEED <span className="text-purple-600">NORD</span>
        </h1>
        <div className="h-[1px] w-12 bg-purple-600 mx-auto"></div>
      </div>
    </div>
  );
};

export default Header;
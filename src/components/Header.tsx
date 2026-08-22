"use client";

import React from 'react';
import { ChevronDown, MoreHorizontal, X } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full pt-6 pb-4 px-4 flex flex-col items-center gap-4">
      <div className="w-full flex justify-between items-center">
        <button className="bg-white/10 backdrop-blur-md p-2 rounded-full px-4 flex items-center gap-2 text-sm font-medium">
          <X size={18} /> Fermer
        </button>
        <div className="flex gap-2">
          <button className="bg-white/10 backdrop-blur-md p-2 rounded-xl">
            <ChevronDown size={20} />
          </button>
          <button className="bg-white/10 backdrop-blur-md p-2 rounded-xl">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="w-24 h-24 rounded-full border-2 border-purple-500 p-1 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden">
            <span className="text-xs font-bold text-center leading-tight">DR SPEED<br/>NORD</span>
          </div>
        </div>
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#0B0B12] rounded-full"></div>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-black tracking-tighter uppercase italic">DR SPEED NORD</h1>
        <p className="text-gray-500 text-sm mt-1 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Services actifs • 24/7
        </p>
      </div>
    </div>
  );
};

export default Header;
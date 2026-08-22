"use client";

import React from 'react';
import { ChevronDown, MoreHorizontal, X } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full pt-6 pb-4 px-4 flex flex-col items-center gap-4">
      <div className="w-full flex justify-between items-center">
        <button className="bg-white/10 backdrop-blur-md p-2 rounded-full px-4 flex items-center gap-2 text-sm font-medium hover:bg-white/20 transition-colors">
          <X size={18} /> Fermer
        </button>
        <div className="flex gap-2">
          <button className="bg-white/10 backdrop-blur-md p-2 rounded-xl hover:bg-white/20 transition-colors">
            <ChevronDown size={20} />
          </button>
          <button className="bg-white/10 backdrop-blur-md p-2 rounded-xl hover:bg-white/20 transition-colors">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Cercle néon extérieur avec fond noir pour fusionner avec le logo */}
        <div className="w-36 h-36 rounded-full border-2 border-purple-500/50 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.4)] bg-black overflow-hidden">
          <img 
            src="/src/assets/logo.jpg" 
            alt="Dr Speed Nord Logo" 
            className="w-full h-full object-contain" 
          />
        </div>
        {/* Indicateur de statut en ligne */}
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-[#0B0B12] rounded-full shadow-lg z-10"></div>
      </div>

      <div className="text-center mt-2">
        <h1 className="text-3xl font-black tracking-tighter uppercase italic bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          DR SPEED NORD
        </h1>
      </div>
    </div>
  );
};

export default Header;
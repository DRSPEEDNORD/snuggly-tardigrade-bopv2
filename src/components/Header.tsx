"use client";

import React from 'react';

const Header = () => {
  return (
    <div className="w-full pt-16 pb-12 px-8 flex flex-col items-center">
      <div className="relative mb-10">
        {/* Cadre minimaliste autour du logo */}
        <div className="w-48 h-48 border border-white/10 p-4 relative">
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-white/40"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/40"></div>
          
          <div className="w-full h-full bg-[#050505] flex items-center justify-center overflow-hidden">
            <img 
              src="/src/assets/logo.jpg" 
              alt="Dr Speed Nord" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-3xl font-light tracking-[0.3em] uppercase text-white">
          DR SPEED <span className="font-bold">NORD</span>
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-8 bg-white/20"></div>
          <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-medium">
            Privé • Sécurisé
          </span>
          <div className="h-[1px] w-8 bg-white/20"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
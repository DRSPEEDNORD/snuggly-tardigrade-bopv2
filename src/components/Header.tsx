"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="w-full pt-20 pb-12 px-8 flex flex-col items-center text-center">
      <div className="relative mb-8">
        {/* Halo lumineux derrière le logo */}
        <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative w-32 h-32 rounded-[2.5rem] p-1 bg-gradient-to-br from-white/20 via-white/5 to-transparent shadow-2xl">
          <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-[#0A0A0A]">
            <img 
              src="/src/assets/logo.jpg" 
              alt="Dr Speed Nord" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight premium-gradient-text">
          DR SPEED NORD
        </h1>
        <div className="flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
          <p className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
            Service Premium • 24/7
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
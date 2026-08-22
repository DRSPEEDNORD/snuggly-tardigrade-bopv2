"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="w-full pt-12 pb-8 px-6 flex flex-col items-center text-center">
      {/* Logo Container - Style Badge Premium */}
      <div className="relative w-full max-w-[320px] mb-8 group">
        {/* Bordure lumineuse subtile autour de l'image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)] bg-[#0d1512]">
          <img 
            src="/logo.jpg" 
            alt="Dr Speed Nord" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-5xl font-black text-emerald-400 italic">DSN</span>';
              }
            }}
          />
        </div>
        
        {/* Petit badge décoratif en coin */}
        <div className="absolute -top-2 -right-2 bg-emerald-500 text-[8px] font-black px-2 py-1 rounded-md tracking-tighter shadow-lg">
          OFFICIAL
        </div>
      </div>

      <div className="space-y-1">
        <h1 className="text-4xl font-black italic tracking-tighter text-white uppercase">
          DR SPEED <span className="text-emerald-400">NORD</span>
        </h1>
        <div className="flex items-center justify-center gap-3 opacity-50">
          <div className="h-[1px] w-6 bg-emerald-500"></div>
          <p className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">
            PREMIUM SELECTION
          </p>
          <div className="h-[1px] w-6 bg-emerald-500"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
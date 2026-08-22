"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="w-full pt-12 pb-8 px-6 flex flex-col items-center text-center">
      {/* Logo Circulaire */}
      <div className="relative mb-6 group">
        {/* Cercle extérieur avec une bordure fine et lumineuse */}
        <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-b from-emerald-500/40 to-transparent shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1512] border border-white/10">
            <img 
              src="/logo.jpg" 
              alt="Dr Speed Nord" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = '<span class="text-3xl font-black text-emerald-400 italic">DSN</span>';
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <h1 className="text-4xl font-black italic tracking-tighter text-white uppercase">
          DR SPEED <span className="text-emerald-400">NORD</span>
        </h1>
        <div className="flex items-center justify-center gap-3 opacity-40">
          <div className="h-[1px] w-6 bg-emerald-500"></div>
          <p className="text-[9px] font-bold tracking-[0.4em] text-white uppercase">
            PREMIUM SELECTION
          </p>
          <div className="h-[1px] w-6 bg-emerald-500"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
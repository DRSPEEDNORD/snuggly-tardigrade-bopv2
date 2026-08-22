"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="w-full pt-12 pb-8 px-6 flex flex-col items-center text-center">
      {/* Logo Container avec effet de fusion */}
      <div className="relative w-full max-w-[340px] aspect-video mb-10 flex items-center justify-center group">
        {/* Halo lumineux en arrière-plan */}
        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-[80px] opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
        
        <div className="relative w-full h-full overflow-hidden">
          {/* L'image du logo */}
          <img 
            src="/logo.jpg" 
            alt="Dr Speed Nord" 
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-5xl font-black text-emerald-400 italic tracking-tighter">DSN</span>';
              }
            }}
          />
          
          {/* Masque de fusion radial (centre clair, bords noirs) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050c0a_100%)]"></div>
          
          {/* Dégradés linéaires sur les bords pour renforcer la fusion avec le fond du site */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050c0a] via-transparent to-[#050c0a] opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050c0a] via-transparent to-[#050c0a] opacity-60"></div>
        </div>

        {/* Ligne décorative subtile en dessous */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      </div>

      <div className="space-y-1 relative">
        <h1 className="text-4xl font-black italic tracking-tighter text-white cyber-glow-text uppercase">
          DR SPEED <span className="text-emerald-400">NORD</span>
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-8 bg-emerald-500/30"></div>
          <p className="text-[10px] font-bold tracking-[0.4em] text-emerald-500/60 uppercase">
            PREMIUM QUALITY
          </p>
          <div className="h-[1px] w-8 bg-emerald-500/30"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
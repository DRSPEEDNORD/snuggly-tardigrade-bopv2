"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Bell, ShoppingBag, ArrowUpRight, ShieldCheck } from 'lucide-react';

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-[#010402] text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden pb-20">
      {/* 1. BACKGROUND LAYER (Le secret de la profondeur) */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grille ultra-subtile */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:30px_30px]" />
        {/* Dégradé radial central */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#064e3b33_0%,#010402_70%)]" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-6 pt-16 space-y-12">
        
        {/* 2. HEADER STYLE */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-emerald-500"></div>
            <span className="text-[9px] font-black text-emerald-500 tracking-[0.3em] uppercase">Design System V1</span>
          </div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-[0.9] drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            STYLE <br />
            <span className="text-emerald-400">PREMIUM</span>
          </h1>
        </header>

        {/* 3. CARDS STYLE (Glassmorphism + Neon Border) */}
        <div className="space-y-4">
          <p className="text-[10px] font-black text-white/30 tracking-widest uppercase">Composants Cartes</p>
          
          <div className="group relative overflow-hidden rounded-[2rem] bg-white/[0.03] border border-emerald-500/20 backdrop-blur-xl p-6 transition-all duration-500 hover:border-emerald-500/40 hover:bg-white/[0.05]">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <Zap size={24} />
              </div>
              <ArrowUpRight size={20} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
            </div>
            <h3 className="text-xl font-black italic uppercase tracking-tight mb-1">Carte Interactive</h3>
            <p className="text-[11px] text-white/40 font-bold uppercase tracking-wide leading-relaxed">
              Bordure fine, fond translucide et typographie italique serrée.
            </p>
          </div>
        </div>

        {/* 4. BUTTONS STYLE */}
        <div className="space-y-4">
          <p className="text-[10px] font-black text-white/30 tracking-widest uppercase">Boutons Action</p>
          
          <button className="w-full py-5 rounded-2xl bg-gradient-to-b from-emerald-400 to-emerald-600 text-black font-black italic uppercase tracking-tighter text-lg shadow-[0_10px_20px_-5px_rgba(16,185,129,0.4)] active:scale-[0.98] transition-transform">
            Menu Officiel
          </button>

          <button className="w-full py-5 rounded-2xl bg-transparent border-2 border-emerald-500/30 text-emerald-400 font-black italic uppercase tracking-tighter text-lg hover:bg-emerald-500/5 transition-colors">
            Canal Telegram
          </button>
        </div>

        {/* 5. INFO BOX STYLE */}
        <div className="p-6 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/10 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck size={18} className="text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Sécurité Maximale</span>
          </div>
          <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-wider">
            Ceci est le rendu exact de la profondeur et des contrastes souhaités.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DesignSystem;
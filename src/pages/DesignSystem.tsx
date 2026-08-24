"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Bell, ShoppingBag, ArrowUpRight, ShieldCheck, Send, Download } from 'lucide-react';

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-[#010402] text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden pb-40 relative">
      {/* 1. BACKGROUND LAYER (Le secret de la profondeur) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Grille ultra-subtile */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98105_1px,transparent_1px),linear-gradient(to_bottom,#10b98105_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Dégradé radial central (Le Halo) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#064e3b44_0%,#010402_70%)]" />
        {/* Scanline cybernétique */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-[100px] bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent absolute -top-full animate-[scanline_8s_linear_infinite]" />
        </div>
      </div>

      <div className="relative z-10 max-w-md mx-auto px-6 pt-20 space-y-16">
        
        {/* 2. HEADER STYLE (Typographie agressive + Glow) */}
        <header className="flex flex-col items-center text-center space-y-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          >
            <Zap size={32} className="text-emerald-400 fill-emerald-400/20" />
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-[0.85] drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              DESIGN <br />
              <span className="text-emerald-400">PREMIUM</span>
            </h1>
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="h-[1px] w-8 bg-emerald-500/30"></div>
              <span className="text-[9px] font-black text-emerald-500/60 tracking-[0.3em] uppercase">Système Visuel V2</span>
              <div className="h-[1px] w-8 bg-emerald-500/30"></div>
            </div>
          </div>
        </header>

        {/* 3. CARDS STYLE (Glassmorphism + Neon Border) */}
        <div className="space-y-6">
          <p className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase text-center">Composants Cartes</p>
          
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-emerald-500/10 backdrop-blur-2xl p-8 transition-all duration-500 hover:border-emerald-500/30">
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/5 flex items-center justify-center text-emerald-400 border border-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                <Download size={28} strokeWidth={1.5} />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
                <span className="text-[8px] font-black text-emerald-500 tracking-widest uppercase">Actif</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black italic uppercase tracking-tight text-white">Installer l'App</h3>
                <ArrowUpRight size={20} className="text-white/10 group-hover:text-emerald-400 transition-colors" />
              </div>
              <p className="text-[11px] text-white/30 font-bold uppercase tracking-wider leading-relaxed">
                Accès direct à notre plateforme sécurisée avec optimisation maximale.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-cyan-500/10 backdrop-blur-2xl p-8 transition-all duration-500 hover:border-cyan-500/30">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/5 flex items-center justify-center text-cyan-400 border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all shrink-0">
                <Send size={28} strokeWidth={1.5} />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-xl font-black italic uppercase tracking-tight text-white">Canal Telegram</h3>
                <span className="text-[9px] font-black text-cyan-400/60 uppercase tracking-widest">+5,000 Membres</span>
              </div>
              <ArrowUpRight size={20} className="text-white/10 group-hover:text-cyan-400 transition-colors" />
            </div>
          </div>
        </div>

        {/* 4. BUTTONS STYLE (Gradient Premium) */}
        <div className="space-y-4 pt-4">
          <p className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase text-center">Boutons Action</p>
          
          <button className="w-full py-6 rounded-[2rem] bg-gradient-to-b from-emerald-400 to-emerald-600 text-black font-black italic uppercase tracking-tighter text-xl shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] active:scale-[0.98] transition-all">
            Menu Officiel
          </button>

          <button className="w-full py-6 rounded-[2rem] bg-transparent border-2 border-emerald-500/20 text-emerald-400 font-black italic uppercase tracking-tighter text-xl hover:bg-emerald-500/5 transition-all">
            Rejoindre le Canal
          </button>
        </div>

        {/* 5. FOOTER STYLE */}
        <footer className="pt-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-emerald-500/30"></div>
            <ShieldCheck size={16} className="text-emerald-500/40" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-emerald-500/30"></div>
          </div>
          <p className="text-[8px] font-black tracking-[0.6em] uppercase text-white/10 text-center">
            DR SPEED NORD ECOSYSTEM v2.0
          </p>
        </footer>

      </div>
    </div>
  );
};

export default DesignSystem;
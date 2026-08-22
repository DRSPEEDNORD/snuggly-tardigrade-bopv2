"use client";

import React from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';

const Index = () => {
  return (
    <div className="min-h-screen max-w-md mx-auto pb-20 selection:bg-purple-500/30">
      <Header />
      
      <div className="mt-8 space-y-8">
        <div className="px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600">Navigation</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
          <ActionCards />
        </div>

        <div className="px-6">
          <div className="relative p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-900/20 to-transparent border border-white/5 overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <div className="w-24 h-24 bg-purple-500 rounded-full blur-[60px]"></div>
            </div>
            <h3 className="text-purple-400 text-xs font-black tracking-widest uppercase mb-3">Dernière Mise à Jour</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Notre catalogue a été mis à jour. Consultez les nouveautés directement sur Telegram pour ne rien manquer.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-[10px] font-bold tracking-[0.3em] text-gray-700 uppercase">
          © 2024 Dr Speed Nord • Excellence & Rapidité
        </p>
      </footer>
    </div>
  );
};

export default Index;
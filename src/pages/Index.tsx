"use client";

import React from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';
import { Info } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pb-20">
      <Header />
      
      <main className="w-full space-y-10">
        <ActionCards />

        <div className="px-8 w-full max-w-md mx-auto">
          <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Info size={40} />
            </div>
            <h4 className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
              Note Importante
            </h4>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Toutes nos livraisons sont effectuées dans le respect total de votre vie privée. Pour toute assistance, notre support est disponible via Telegram.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-auto pt-20 text-center">
        <p className="text-[9px] text-white/20 font-medium uppercase tracking-[0.4em]">
          © 2024 Dr Speed Nord • Excellence & Discrétion
        </p>
      </footer>
    </div>
  );
};

export default Index;
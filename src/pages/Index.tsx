"use client";

import React from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pb-12">
      <Header />
      
      <main className="w-full space-y-8">
        <ActionCards />

        {/* Info Section */}
        <div className="px-8 w-full max-w-md mx-auto">
          <div className="relative rounded-[2.5rem] bg-gradient-to-b from-gray-900/80 to-black border border-white/5 p-8 text-center overflow-hidden shadow-2xl">
            {/* Points décoratifs néon */}
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]"></div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">INFORMATION</h4>
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]"></div>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed font-medium">
              Livraisons sécurisées 7j/7. Consultez nos menus mis à jour en temps réel sur notre canal Telegram.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-auto pt-12">
        <div className="neon-line mb-4"></div>
        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.4em] text-center">
          DR SPEED NORD • EST. 2024
        </p>
      </footer>
    </div>
  );
};

export default Index;
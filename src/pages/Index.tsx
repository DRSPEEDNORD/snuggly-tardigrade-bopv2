"use client";

import React from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';

const Index = () => {
  return (
    <div className="min-h-screen max-w-md mx-auto pb-16">
      <Header />
      
      <main className="mt-6 space-y-8">
        <ActionCards />

        <div className="px-6">
          <div className="glass-panel p-6 rounded-[2rem] relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <h4 className="text-[10px] tracking-[0.3em] text-white/80 uppercase font-black">Information</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-medium">
              Livraisons sécurisées 7j/7. Consultez nos menus mis à jour en temps réel sur notre canal Telegram.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-white/5 bg-white/[0.02]">
          <p className="text-[9px] tracking-[0.2em] text-gray-600 font-bold uppercase">
            Dr Speed Nord — Est. 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
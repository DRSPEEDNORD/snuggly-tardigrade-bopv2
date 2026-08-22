"use client";

import React from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';

const Index = () => {
  return (
    <div className="min-h-screen max-w-md mx-auto pb-20 bg-black">
      <Header />
      
      <div className="mt-10 space-y-10">
        <div className="px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-gray-700">Menu</span>
            <div className="h-[1px] flex-1 bg-white/5"></div>
          </div>
          <ActionCards />
        </div>

        <div className="px-6">
          <div className="p-8 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-[50px]"></div>
            <h3 className="text-white text-xs font-black tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span>
              Update
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Le catalogue a été mis à jour. Les nouveaux tarifs et produits sont disponibles sur Telegram.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center px-6">
        <p className="text-[9px] font-bold tracking-[0.4em] text-gray-800 uppercase">
          Dr Speed Nord • Excellence & Discrétion
        </p>
      </footer>
    </div>
  );
};

export default Index;
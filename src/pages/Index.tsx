"use client";

import React from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pb-40 relative">
      {/* Background Elements */}
      <div className="bg-grid" />
      <div className="bg-glow" />
      
      <Header />
      
      <main className="w-full flex-1 flex flex-col justify-center z-10">
        <ActionCards />
      </main>

      <footer className="w-full mt-auto pt-16 pb-8 opacity-30">
        <div className="flex flex-col items-center gap-2">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          <p className="text-[10px] text-white font-black uppercase tracking-[0.6em] text-center">
            DR SPEED NORD • EST 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
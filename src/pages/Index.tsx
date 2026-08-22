"use client";

import React from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pb-32">
      <Header />
      
      <main className="w-full flex-1 flex flex-col justify-center">
        <ActionCards />
      </main>

      <footer className="w-full mt-auto pt-12 opacity-20">
        <p className="text-[10px] text-white font-bold uppercase tracking-[0.4em] text-center">
          DR SPEED NORD • EST. 2024
        </p>
      </footer>
    </div>
  );
};

export default Index;
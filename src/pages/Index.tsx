"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ActionButtons from '@/components/ActionButtons';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-indigo-100">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <Hero />
          <ActionButtons />
        </div>
      </main>
      <footer className="mt-auto border-t border-slate-100">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;
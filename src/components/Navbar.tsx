"use client";

import React from 'react';
import { Zap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-indigo-50">
      <div className="flex items-center gap-2">
        <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-200">
          <Zap className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-slate-900">
          Dr <span className="text-indigo-600">Speed Nord</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
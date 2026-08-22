"use client";

import React from 'react';

const Hero = () => {
  return (
    <div className="text-center space-y-6 max-w-2xl mx-auto pt-12 pb-8">
      <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
        La performance <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
          sans compromis.
        </span>
      </h1>
      <p className="text-lg text-slate-600 leading-relaxed px-4">
        Bienvenue sur Dr Speed Nord. Accédez rapidement à nos services et restez connecté avec notre communauté.
      </p>
    </div>
  );
};

export default Hero;
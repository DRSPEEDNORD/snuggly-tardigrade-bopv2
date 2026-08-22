"use client";

import React from 'react';
import { Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
      <Button 
        asChild
        className="w-full sm:w-auto bg-[#229ED9] hover:bg-[#1e8dbf] text-white px-8 py-6 rounded-2xl text-lg font-semibold transition-all hover:scale-105 shadow-xl shadow-blue-100"
      >
        <a href="https://t.me/votre_canal" target="_blank" rel="noopener noreferrer">
          <Send className="mr-2 h-5 w-5" />
          Canal Telegram
        </a>
      </Button>
      
      <Button
        asChild
        variant="outline"
        className="w-full sm:w-auto border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 rounded-2xl text-lg font-semibold transition-all hover:scale-105"
      >
        <a href="https://drspeedpwa.netlify.app/" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-5 w-5" />
          Installer l'App
        </a>
      </Button>
    </div>
  );
};

export default ActionButtons;
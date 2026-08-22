"use client";

import React from 'react';
import { Home, Info } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'home', label: 'ACCUEIL', icon: Home, path: '/' },
    { id: 'infos', label: 'INFOS', icon: Info, path: '/infos' },
  ];

  return (
    <div className="druid-tab-bar">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={cn(
              "flex flex-col items-center justify-center gap-1.5 transition-all duration-300 w-24 h-16 rounded-2xl relative",
              isActive ? "text-emerald-400" : "text-white/30 hover:text-white/50"
            )}
          >
            <tab.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span className={cn(
              "text-[9px] font-black tracking-[0.15em]",
              isActive ? "text-emerald-400" : "text-white/30"
            )}>
              {tab.label}
            </span>
            {isActive && (
              <div className="absolute bottom-2 w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]"></div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
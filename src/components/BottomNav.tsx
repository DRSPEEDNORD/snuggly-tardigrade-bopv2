"use client";

import React from 'react';
import { Home, Star, Info } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'shop', label: 'SHOP', icon: Home, path: '/' },
    { id: 'avis', label: 'AVIS', icon: Star, path: '/avis' },
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
              "flex flex-col items-center justify-center gap-1 transition-all duration-300 w-20 h-16 rounded-2xl",
              isActive ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"
            )}
          >
            <tab.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-bold tracking-widest">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
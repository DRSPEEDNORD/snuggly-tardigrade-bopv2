"use client";

import React from 'react';
import { LayoutGrid, ShoppingCart, History, MessageSquare, User, SlidersHorizontal } from 'lucide-react';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#161622]/90 backdrop-blur-xl border-t border-white/5 px-6 py-3 flex justify-between items-center z-50">
      <NavItem icon={<SlidersHorizontal size={22} />} label="Filtres" active />
      <NavItem icon={<LayoutGrid size={22} />} label="Catégories" />
      <NavItem icon={<ShoppingCart size={22} />} label="Panier" />
      <NavItem icon={<History size={22} />} label="Historique" />
      <NavItem icon={<MessageSquare size={22} />} label="Contact" />
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-[10px] font-bold text-white">P</div>
        <span className="text-[10px] text-gray-500">Profil</span>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`flex flex-col items-center gap-1 ${active ? 'text-purple-500' : 'text-gray-500'}`}>
    {icon}
    <span className="text-[10px]">{label}</span>
  </div>
);

export default BottomNav;
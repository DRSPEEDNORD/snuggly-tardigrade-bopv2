"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Package, Plus, LogOut, Trash2 } from 'lucide-react';
import BackgroundEffects from '@/components/BackgroundEffects';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [code, setCode] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Code secret simple pour l'exemple
    if (code === "DSN2024") {
      setIsAuthenticated(true);
      toast.success("Accès autorisé");
    } else {
      toast.error("Code incorrect");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#010402] p-6">
        <BackgroundEffects />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl z-10 text-center space-y-8"
        >
          <div className="w-20 h-20 bg-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto border border-emerald-500/30">
            <Shield className="text-emerald-400" size={40} />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-black uppercase italic tracking-tighter text-white">ADMIN PORTAL</h1>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Accès restreint au personnel autorisé</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input 
              type="password" 
              placeholder="CODE D'ACCÈS" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="bg-white/5 border-white/10 text-center font-black tracking-[0.5em] h-14 rounded-2xl focus:ring-emerald-500"
            />
            <Button type="submit" className="w-full h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-black font-black uppercase italic tracking-widest transition-all">
              VÉRIFIER
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#010402] pb-40">
      <BackgroundEffects />
      <div className="max-w-4xl mx-auto px-6 pt-16 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-[10px] font-black text-emerald-500 tracking-[0.3em] uppercase">Dashboard</span>
            <h1 className="text-4xl font-black italic tracking-tighter uppercase text-white">GESTION <span className="text-emerald-400">STOCKS</span></h1>
          </div>
          <Button variant="ghost" onClick={() => setIsAuthenticated(false)} className="text-white/40 hover:text-white">
            <LogOut size={20} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-[2rem] bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center gap-4 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-black shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <Plus size={32} />
            </div>
            <span className="font-black uppercase italic tracking-widest text-emerald-400">Ajouter Produit</span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white">
              <Package size={32} />
            </div>
            <span className="font-black uppercase italic tracking-widest text-white">Voir Inventaire</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
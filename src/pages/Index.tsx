"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';
import { supabase } from '@/lib/supabase';

const Index = () => {
  const [connectionStatus, setConnectionStatus] = useState<'loading' | 'connected' | 'error'>('loading');

  useEffect(() => {
    const checkConnection = async () => {
      // On vérifie simplement si l'URL est configurée
      const url = import.meta.env.VITE_SUPABASE_URL;
      if (!url || url.includes('placeholder')) {
        setConnectionStatus('error');
        return;
      }

      try {
        // Test rapide pour voir si Supabase répond
        const { error } = await supabase.from('_test_connection').select('*').limit(1);
        // Si on a une erreur de table inexistante (42P01), c'est que la connexion fonctionne quand même !
        if (error && error.code !== '42P01' && error.code !== 'PGRST116') {
          setConnectionStatus('error');
        } else {
          setConnectionStatus('connected');
        }
      } catch (err) {
        setConnectionStatus('error');
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center pb-32">
      <Header />
      
      <main className="w-full flex-1 flex flex-col justify-center">
        <ActionCards />
        
        <div className="mt-8 flex justify-center">
          <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-colors duration-500 ${
            connectionStatus === 'connected' ? 'border-emerald-500/30 text-emerald-500/50' : 
            connectionStatus === 'error' ? 'border-red-500/30 text-red-500/50' : 
            'border-white/10 text-white/20 animate-pulse'
          }`}>
            Supabase: {connectionStatus}
          </div>
        </div>
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
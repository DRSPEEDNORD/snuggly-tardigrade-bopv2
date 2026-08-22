"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';
import { supabase } from '@/lib/supabase';
import { showSuccess, showError } from '@/utils/toast';

const Index = () => {
  const [connectionStatus, setConnectionStatus] = useState<'loading' | 'connected' | 'error'>('loading');

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { data, error } = await supabase.from('_test_connection').select('*').limit(1);
        // Note: _test_connection might not exist, but a 404 or empty response still means the client is working
        if (error && error.code !== 'PGRST116' && error.code !== '42P01') {
          throw error;
        }
        setConnectionStatus('connected');
      } catch (err) {
        console.error('Supabase connection error:', err);
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
        
        {/* Indicateur de connexion discret pour le debug */}
        <div className="mt-8 flex justify-center">
          <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
            connectionStatus === 'connected' ? 'border-emerald-500/30 text-emerald-500/50' : 
            connectionStatus === 'error' ? 'border-red-500/30 text-red-500/50' : 
            'border-white/10 text-white/20'
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
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VerticalScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const VerticalScramble = ({ text, className, delay = 0 }: VerticalScrambleProps) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  
  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {text.split("").map((char, index) => (
        <LetterSlot 
          key={index} 
          targetChar={char} 
          delay={delay + (index * 150)} 
          chars={chars}
        />
      ))}
    </span>
  );
};

const LetterSlot = ({ targetChar, delay, chars }: { targetChar: string, delay: number, chars: string }) => {
  const [isDone, setIsDone] = useState(false);
  const [currentChar, setCurrentChar] = useState(chars[Math.floor(Math.random() * chars.length)]);

  useEffect(() => {
    let timeout: any;
    let interval: any;

    timeout = setTimeout(() => {
      let iterations = 0;
      const maxIterations = 15; // Plus d'itérations pour ralentir l'effet

      interval = setInterval(() => {
        setCurrentChar(chars[Math.floor(Math.random() * chars.length)]);
        iterations++;

        if (iterations >= maxIterations) {
          setCurrentChar(targetChar);
          setIsDone(true);
          clearInterval(interval);
        }
      }, 80); // Vitesse de défilement plus lente
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [targetChar, delay, chars]);

  return (
    <span className="relative inline-block w-[0.65em] text-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentChar}
          initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="inline-block"
        >
          {currentChar}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default VerticalScramble;
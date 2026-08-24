"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VerticalScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const VerticalScramble = ({ text, className, delay = 0 }: VerticalScrambleProps) => {
  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {text.split("").map((char, index) => (
        <LetterSlot 
          key={index} 
          targetChar={char} 
          delay={delay + (index * 100)} 
        />
      ))}
    </span>
  );
};

const LetterSlot = ({ targetChar, delay }: { targetChar: string, delay: number }) => {
  const [currentChar, setCurrentChar] = useState("");
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let timeout: any;
    let interval: any;
    let iterations = 0;
    const maxIterations = 12;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (iterations >= maxIterations) {
          setCurrentChar(targetChar);
          clearInterval(interval);
        } else {
          setCurrentChar(chars[Math.floor(Math.random() * chars.length)]);
          iterations++;
        }
      }, 60);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [targetChar, delay]);

  return (
    <span className="relative inline-block w-[0.6em] text-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentChar}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.1, ease: "linear" }}
          className="inline-block"
        >
          {currentChar || " "}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default VerticalScramble;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const darkSections = ['experience', 'contact'];
      const sections = ['home', 'about', 'skills', 'professional', 'experience', 'education', 'contact'];
      
      let currentSection = '';
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = id;
          }
        }
      }
      
      setIsDark(darkSections.includes(currentSection));
    };

    window.addEventListener('scroll', handleScroll);
    // Appel initial
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Parcours', href: '#professional' },
    { name: 'Projets', href: '#experience' },
    { name: 'Études', href: '#education' },
  ];

  return (
    <motion.nav 
      initial={{ y: -150, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-8 left-1/2 z-50 px-6 py-3 rounded-2xl border shadow-xl",
        isDark 
          ? "bg-gray-900/80 backdrop-blur-xl border-white/10 shadow-black/20" 
          : "glass-panel border-white/60 shadow-gray-200/50"
      )}
    >
      <ul className="flex items-center gap-1 md:gap-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className={cn(
                "relative block px-4 py-2 text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-colors duration-500 whitespace-nowrap",
                isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;

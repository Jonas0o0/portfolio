'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si l'une des sections sombres est visible sous la nav
          if (entry.isIntersecting) {
            setIsDark(true);
          } else {
            // Vérifier si aucune autre section sombre n'est intersectée
            const darkSections = document.querySelectorAll('#experience, #contact');
            const anyVisible = Array.from(darkSections).some(section => {
                const rect = section.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });
            setIsDark(anyVisible);
          }
        });
      },
      {
        // On observe quand la section passe sous la barre de nav (environ 80px du haut)
        rootMargin: '-80px 0px -90% 0px',
        threshold: 0
      }
    );

    const darkSections = document.querySelectorAll('#experience, #contact');
    darkSections.forEach((section) => observer.observe(section));

    return () => darkSections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#experience' },
    { name: 'Études', href: '#education' },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-8 left-1/2 z-50 px-6 py-3 rounded-2xl border transition-all duration-500 shadow-xl",
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
                "relative block px-4 py-2 text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-colors duration-500 group",
                isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-1 left-4 right-4 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full",
                isDark ? "bg-purple-400" : "bg-pink-500"
              )}></span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;

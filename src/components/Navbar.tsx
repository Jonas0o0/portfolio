'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
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
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass-panel rounded-2xl border-white/60 shadow-xl"
    >
      <ul className="flex items-center gap-2 md:gap-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest"
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

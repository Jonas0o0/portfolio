'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <ul className="flex items-center justify-center rounded-full overflow-hidden text-gray-800 shadow-lg">
                <li>
                    <Link href="#home" className="block px-6 py-2 transition-all duration-300 bg-white/30 backdrop-blur-md border border-white/40 rounded-l-full hover:bg-white/20 hover:backdrop-blur-sm"><span className="relative underline-from-left">Accueil</span></Link>
                </li>
                <li>
                    <Link href="#about" className="block px-6 py-2 transition-all duration-300 bg-white/30 backdrop-blur-md border-y border-r border-white/40 hover:bg-white/20 hover:backdrop-blur-sm"><span className="relative underline-from-left">A Propos</span></Link>
                </li>
                <li>
                    <Link href="#skills" className="block px-6 py-2 transition-all duration-300 bg-white/30 backdrop-blur-md border-y border-r border-white/40 hover:bg-white/20 hover:backdrop-blur-sm"><span className="relative underline-from-left">Compétences</span></Link>
                </li>
                <li>
                    <Link href="#experience" className="block px-6 py-2 transition-all duration-300 bg-white/30 backdrop-blur-md border-y border-r border-white/40 hover:bg-white/20 hover:backdrop-blur-sm"><span className="relative underline-from-left">Experience</span></Link>
                </li>
                <li>
                    <Link href="#education" className="block px-6 py-2 transition-all duration-300 bg-white/30 backdrop-blur-md border border-white/40 rounded-r-full hover:bg-white/20 hover:backdrop-blur-sm"><span className="relative underline-from-left">Études</span></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

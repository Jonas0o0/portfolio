'use client';

import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Header = () => {
    return (
        <header id="home" className="flex items-center justify-center h-screen w-full">
            <div className="">
                <a href="mailto:jonas.facon@proton.me"
                   className="hero-badge inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-pink-600 font-semibold mb-4 shadow-lg">
                    <Sparkles size={20}/>
                    <span>Disponible pour de nouveaux projets</span>
                </a>
                <h1 className="font-extrabold text-8xl">Jonas Facon</h1>
                <p className="w-[600px]">
                    Actuellement étudiant en 2ᵉ année de BUT Informatique, à la recherche d’un stage de 10 semaines.
                </p>

                <a href="https://cv.jonas-facon.dev"
                   className="w-full text-xl p-20 mt-8 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                    Télécharger mon CV
                </a>

            </div>
            <div className="w-[10%]"></div>
            <div className="relative w-[20%]">
                <img className="h-[100%] w-[100%] rounded-full" src="/images/portrait.jpg" alt="Portrait of Jonas Facon"/>
                <a href="https://www.linkedin.com/in/jonas-facon/"
                   className="absolute -left-1 bottom-14 h-[60px] w-[60px] mt-2 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                    <Linkedin/>
                </a>
                <a href="mailto:jonas.facon@proton.me"
                   className="absolute left-5 bottom-5 h-[60px] w-[60px] mt-2 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                    <Mail/>
                </a>
                <a href="https://github.com/Jonas0o0"
                   className="absolute left-[60px] bottom-0 h-[60px] w-[60px] mt-2 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                    <Github/>
                </a>
            </div>
        </header>
    );
};

export default Header;

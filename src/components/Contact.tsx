'use client';

import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="pb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
            <div className="flex justify-center gap-8">
                <a href="https://www.linkedin.com/in/jonas-facon/"
                   className="h-[60px] w-[60px] mt-2 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                    <Linkedin/>
                </a>
                <a href="mailto:jonas.facon@proton.me"
                   className="h-[60px] w-[60px] mt-2 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                    <Mail/>
                </a>
                <a href="https://github.com/Jonas0o0"
                   className="h-[60px] w-[60px] mt-2 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                    <Github/>
                </a>
                <a href="https://discord.com/users/jonas0o0"
                   className="h-[60px] w-[60px] mt-2 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                    <MessageSquare/>
                </a>
            </div>
        </section>
    );
}

export default Contact;

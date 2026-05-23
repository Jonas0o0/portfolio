'use client';

import { Github, Linkedin, Mail, Sparkles, ArrowDown, X } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Hero3D from './Hero3D';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";

const Header = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleDownload = (e: React.MouseEvent) => {
    // Empêche la propagation si nécessaire, mais ici on veut juste déclencher le download
    const link = document.createElement('a');
    link.href = "/documents/Jonas-Facon-CV.pdf";
    link.download = "Jonas-Facon-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* 3D Organic Cluster Background */}
      <Hero3D />

      <div className="max-w-7xl w-full z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="outline" className="glass-panel text-pink-600 font-bold px-4 py-1.5 rounded-full inline-flex gap-2 items-center border-pink-200/50 shadow-sm w-fit">
              <Sparkles size={16} className="text-pink-500" />
              Disponible pour de nouveaux projets
            </Badge>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-gray-900 mb-6 leading-tight whitespace-nowrap"
          >
            Jonas Facon
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-10 leading-relaxed font-medium"
          >
            Étudiant en 2ᵉ année de <span className="text-gray-900">BUT Informatique</span>. 
            Passionné par le développement et l&apos;exploration des nouvelles technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <button 
                  onClick={handleDownload}
                  className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  Télécharger mon CV
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-7xl w-full h-screen p-0 border-none bg-transparent shadow-none rounded-none">
                <DialogTitle className="sr-only">Mon CV - Jonas Facon</DialogTitle>
                <div className="relative w-full h-full glass-panel rounded-none overflow-hidden border-white/10 shadow-2xl flex flex-col">
                   <div className="absolute top-4 right-4 z-50">
                      <DialogClose className="p-2 bg-gray-900/60 hover:bg-gray-900/80 backdrop-blur-md rounded-full text-white transition-all border border-white/10">
                         <X size={24} />
                      </DialogClose>
                   </div>
                   <iframe 
                     src="/documents/Jonas-Facon-CV.pdf#toolbar=0&navpanes=0&view=FitH" 
                     className="w-full h-full border-none" 
                     title="Jonas Facon CV"
                   />
                </div>
              </DialogContent>
            </Dialog>

            <div className="flex gap-2">
              <SocialIcon href="https://www.linkedin.com/in/jonas-facon/" icon={<Linkedin size={20} />} />
              <SocialIcon href="mailto:jonas.facon@proton.me" icon={<Mail size={20} />} />
              <SocialIcon href="https://github.com/Jonas0o0" icon={<Github size={20} />} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-400"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Défiler</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </header>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ 
      boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.08), inset -1px -1px 5px rgba(255, 255, 255, 0.2), 0px 0px 0px transparent",
      borderColor: "rgba(255, 255, 255, 0.1)",
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 600, damping: 25 }}
    className="h-14 w-14 flex items-center justify-center rounded-2xl glass-panel border border-white/30 text-gray-500 hover:text-gray-900 shadow-sm transition-all"
  >
    {icon}
  </motion.a>
);

export default Header;

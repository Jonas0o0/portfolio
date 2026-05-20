'use client';

import { Github, Linkedin, Mail, Sparkles, ArrowDown } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Hero3D from './Hero3D';

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
              Disponible
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
            <a href="https://cv.jonas-facon.dev" className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl hover:scale-105 active:scale-95">
              Télécharger mon CV
            </a>
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
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.9 }}
    className="h-14 w-14 flex items-center justify-center rounded-2xl glass-panel border-white/60 text-gray-500 hover:text-gray-900 hover:bg-white/50 transition-all shadow-sm"
  >
    {icon}
  </motion.a>
);

export default Header;

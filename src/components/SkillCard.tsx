'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: string;
  name: string;
}

const SkillCard = ({ icon, name }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.08), inset -1px -1px 5px rgba(255, 255, 255, 0.2), 0px 0px 0px transparent",
        border: "none",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 600, damping: 25 }}
      className="relative flex items-center gap-4 px-6 py-4 rounded-2xl glass-panel border border-white/40 cursor-default transition-all duration-200"
    >
      <div className="relative w-10 h-10 flex items-center justify-center pointer-events-none">
        <Image width="40" height="40" src={icon} alt={`${name} logo`} className="object-contain" />
      </div>
      <span className="text-lg font-semibold text-gray-700 pointer-events-none">{name}</span>
    </motion.div>
  );
};

export default SkillCard;

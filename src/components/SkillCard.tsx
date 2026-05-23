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
        boxShadow: "inset 4px 4px 10px rgba(0, 0, 0, 0.08), inset -4px -4px 10px rgba(255, 255, 255, 0.6)",
        scale: 0.98,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative flex items-center gap-4 px-6 py-4 rounded-2xl glass-panel border-white/40 cursor-default transition-colors duration-300"
    >
      <div className="relative w-10 h-10 flex items-center justify-center transition-all duration-500">
        <Image width="40" height="40" src={icon} alt={`${name} logo`} className="object-contain" />
      </div>
      <span className="text-lg font-semibold text-gray-700 transition-colors">{name}</span>
    </motion.div>
  );
};

export default SkillCard;

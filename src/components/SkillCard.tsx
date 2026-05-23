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
        boxShadow: "inset 2px 4px 8px rgba(31, 38, 135, 0.08), inset -2px -4px 8px rgba(255, 255, 255, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="relative flex items-center gap-4 px-6 py-4 rounded-2xl glass-panel border-white/40 cursor-default shadow-sm transition-all duration-300"
    >
      <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300">
        <Image width="40" height="40" src={icon} alt={`${name} logo`} className="object-contain" />
      </div>
      <span className="text-lg font-semibold text-gray-700">{name}</span>
    </motion.div>
  );
};

export default SkillCard;

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
        boxShadow: "inset 6px 6px 12px rgba(0, 0, 0, 0.12), inset -6px -6px 12px rgba(255, 255, 255, 0.9), 0px 0px 0px rgba(0,0,0,0)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="relative flex items-center gap-4 px-6 py-4 rounded-2xl glass-panel border-white/40 cursor-default shadow-sm transition-colors duration-200"
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        <Image width="40" height="40" src={icon} alt={`${name} logo`} className="object-contain" />
      </div>
      <span className="text-lg font-semibold text-gray-700">{name}</span>
    </motion.div>
  );
};

export default SkillCard;

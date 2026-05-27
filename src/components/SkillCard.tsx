'use client';

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
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 600, damping: 25 }}
      className="relative flex items-center gap-4 px-6 py-4 rounded-2xl glass-panel cursor-default transition-all duration-200"
    >
      <div className="relative w-8 h-8 flex items-center justify-center pointer-events-none">
        <img src={icon} alt={`${name} logo`} className="w-full h-full object-contain" />
      </div>
      <span className="text-base font-semibold text-gray-700 pointer-events-none">{name}</span>
    </motion.div>
  );
};

export default SkillCard;

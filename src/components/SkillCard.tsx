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
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center gap-4 px-6 py-4 rounded-2xl glass-panel border-white/40 hover:bg-white/50 hover:border-white/60 transition-all duration-300 shadow-sm hover:shadow-md group cursor-default"
    >
      <div className="relative w-10 h-10 flex items-center justify-center transition-all duration-500">
        <Image width="40" height="40" src={icon} alt={`${name} logo`} className="object-contain" />
      </div>
      <span className="text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">{name}</span>
    </motion.div>
  );
};

export default SkillCard;

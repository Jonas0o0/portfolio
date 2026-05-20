'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Background() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-pink-100/30 rounded-full blur-[120px]"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[40%] right-[5%] w-[35rem] h-[35rem] bg-blue-100/30 rounded-full blur-[100px]"
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-[10%] left-[20%] w-[30rem] h-[30rem] bg-purple-100/30 rounded-full blur-[110px]"
      />
    </div>
  );
}

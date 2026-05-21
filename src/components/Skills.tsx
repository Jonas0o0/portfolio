'use client';

import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

const skills = {
    programming: [
        { name: 'Java', icon: '/logos/java-icon.svg' },
        { name: 'Python', icon: '/logos/python-logo-only.svg' },
        { name: 'C', icon: '/logos/C_Programming_Language.svg' },
    ],
    web: [
        { name: 'HTML', icon: '/logos/HTML5-Logo.svg' },
        { name: 'CSS', icon: '/logos/w3_css-official.svg' },
        { name: 'JS', icon: '/logos/javascript-seeklogo.png' },
        { name: 'React', icon: '/logos/React-Logo.svg' },
        { name: 'Next.js', icon: '/logos/nextjs-icon-svgrepo-com.svg' },
    ],
    database: [
        { name: 'Postgresql', icon: '/logos/PostgreSQL_logo.3colors.svg' },
        { name: 'JDBC', icon: '/logos/java-icon.svg' },
        { name: 'SQL', icon: '/logos/sqlitebrowser.png' },
    ],
    tools: [
        { name: 'GIT', icon: '/logos/Git-Icon-1788C.svg' },
        { name: 'Docker', icon: '/logos/docker-mark-blue.svg' },
        { name: 'Dokploy', icon: '/logos/dokploy.svg' },
    ],
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-4">
            Compétences<span className="text-pink-500">.</span>
          </h2>
          <div className="h-1 w-20 bg-pink-500 rounded-full mx-auto lg:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SkillCategory title="Programmation" items={skills.programming} containerVariants={containerVariants} itemVariants={itemVariants} />
          <SkillCategory title="Web Design & Dev" items={skills.web} containerVariants={containerVariants} itemVariants={itemVariants} />
          <SkillCategory title="Bases de Données" items={skills.database} containerVariants={containerVariants} itemVariants={itemVariants} />
          <SkillCategory title="Outils & DevOps" items={skills.tools} containerVariants={containerVariants} itemVariants={itemVariants} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, items, containerVariants, itemVariants }: any) {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest flex items-center gap-3">
        <span className="w-8 h-[2px] bg-pink-500/30"></span>
        {title}
      </h3>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-4"
      >
        {items.map((skill: any) => (
          <motion.div key={skill.name} variants={itemVariants}>
            <SkillCard name={skill.name} icon={skill.icon} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

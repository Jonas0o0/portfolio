'use client';

import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

const skills = {
    languages: [
        { name: 'Java', icon: '/logos/java-icon.svg' },
        { name: 'C#', icon: '/logos/csharp.svg' },
        { name: 'TypeScript', icon: '/logos/typescript.svg' },
        { name: 'Python', icon: '/logos/python-logo-only.svg' },
        { name: 'C', icon: '/logos/C_Programming_Language.svg' },
        { name: 'JS', icon: '/logos/javascript-seeklogo.png' },
    ],
    frameworks: [
        { name: 'Next.js', icon: '/logos/nextjs-icon-svgrepo-com.svg' },
        { name: 'React', icon: '/logos/React-Logo.svg' },
        { name: 'Angular', icon: '/logos/angular.svg' },
        { name: '.NET', icon: '/logos/dotnet.svg' },
        { name: 'Tailwind', icon: '/logos/tailwindcss.svg' },
        { name: 'Three.js', icon: '/logos/threejs.svg' },
        { name: 'Framer', icon: '/logos/framer-motion.svg' },
        { name: 'Node-RED', icon: '/logos/node-red.svg' },
        { name: 'HTML', icon: '/logos/HTML5-Logo.svg' },
        { name: 'CSS', icon: '/logos/w3_css-official.svg' },
    ],
    database: [
        { name: 'PostgreSQL', icon: '/logos/PostgreSQL_logo.3colors.svg' },
        { name: 'SQL', icon: '/logos/sqlitebrowser.png' },
        { name: 'JDBC', icon: '/logos/java-icon.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logos/Git-Icon-1788C.svg' },
        { name: 'Docker', icon: '/logos/docker-mark-blue.svg' },
        { name: 'Linux', icon: '/logos/linux.svg' },
        { name: 'Mosquitto', icon: '/logos/mosquitto.svg' },
        { name: 'Dokploy', icon: '/logos/dokploy.svg' },
    ],
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
  };

  return (
    <section id="skills" className="w-full py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="mb-24 text-center lg:text-left">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-4">
            Compétences<span className="text-pink-500">.</span>
          </h2>
          <div className="h-1 w-20 bg-pink-500 rounded-full mx-auto lg:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
          <SkillCategory title="Langages" items={skills.languages} containerVariants={containerVariants} itemVariants={itemVariants} />
          <SkillCategory title="Frameworks & Bibliothèques" items={skills.frameworks} containerVariants={containerVariants} itemVariants={itemVariants} />
          <SkillCategory title="Bases de données" items={skills.database} containerVariants={containerVariants} itemVariants={itemVariants} />
          <SkillCategory title="Outils & DevOps" items={skills.tools} containerVariants={containerVariants} itemVariants={itemVariants} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, items, containerVariants, itemVariants }: any) {
  return (
    <div className="space-y-10">
      <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] flex items-center gap-4">
        <span className="w-12 h-[2px] bg-pink-500"></span>
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

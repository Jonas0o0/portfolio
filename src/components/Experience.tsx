'use client';

import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    "name": "Portfolio 2026",
    "description": "Une vitrine numérique immersive conçue avec Next.js 15, Three.js et Framer Motion. Focus sur le storytelling et l'expérience utilisateur.",
    "language": "TypeScript",
    "html_url": "https://github.com/Jonas0o0/portfolio",
    "category": "Personnal",
    "color": "from-purple-500 to-indigo-500"
  },
  {
    "name": "Dys-Parus",
    "description": "Jeu de labyrinthe expérimental en Java. Une exploration ludique de la perception et du changement de perspective à travers plusieurs niveaux évolutifs.",
    "language": "Java",
    "html_url": "https://github.com/Jonas0o0/Labyrinthe-des-Dys-Parus",
    "category": "Academic",
    "color": "from-pink-500 to-rose-500"
  },
  {
    "name": "Kass-Brikerie",
    "description": "Casse-brique moderne développé en mode agile. Une démonstration de collaboration technique et de gestion de projet au sein d'une équipe de 6 développeurs.",
    "language": "Java",
    "html_url": "https://github.com/Jonas0o0/Kass-Brikerie",
    "category": "Academic",
    "color": "from-blue-500 to-cyan-500"
  },
  {
    "name": "Cryptodec",
    "description": "Solution d'analyse et de déclaration fiscale pour portefeuilles multi-chaînes. Simplifier la complexité de l'écosystème crypto.",
    "language": "TypeScript",
    "html_url": "https://github.com/Jonas0o0/cryptodec",
    "category": "Personnal",
    "color": "from-orange-500 to-yellow-500"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-32 px-6 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-purple-500 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Selected Works</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter">Projets<span className="text-purple-500">.</span></h2>
          </div>
          <p className="text-gray-400 max-w-md text-lg leading-relaxed">
            Une exploration constante de la technique et du design, où chaque projet est un nouveau défi.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectItem key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project, index }: { project: any; index: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const isEven = index % 2 === 0;

  return (
    <div ref={container} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
      {/* Visual Part */}
      <div className="w-full md:w-3/5 relative group cursor-pointer">
        <motion.div 
          style={{ y }}
          className={`aspect-video rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} p-1`}
        >
          <div className="w-full h-full bg-gray-800 rounded-[1.4rem] flex items-center justify-center relative overflow-hidden group-hover:bg-transparent transition-colors duration-700">
             <Github size={120} className="text-gray-700 group-hover:text-white group-hover:scale-110 transition-all duration-700 opacity-20 group-hover:opacity-100" />
             
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rotate-45 translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700"></div>
          </div>
        </motion.div>
      </div>

      {/* Info Part */}
      <div className="w-full md:w-2/5 space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-black text-gray-800">0{index + 1}</span>
          <Badge variant="outline" className="border-gray-700 text-gray-400 rounded-full px-4">{project.category}</Badge>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-black tracking-tight group-hover:text-purple-400 transition-colors">{project.name}</h3>
        
        <p className="text-xl text-gray-400 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
           <Badge className="bg-white/5 hover:bg-white/10 text-white border-none px-4 py-1">{project.language}</Badge>
        </div>

        <div className="pt-6 flex gap-6">
          <a href={project.html_url} target="_blank" className="flex items-center gap-2 text-white font-bold group/link">
             Github <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
             <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

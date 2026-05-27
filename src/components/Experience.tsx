'use client';

import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    "name": "Portfolio 2026",
    "description": "Une vitrine numérique immersive conçue avec Next.js 15, Three.js et Framer Motion. Focus sur le storytelling et l'expérience utilisateur.",
    "language": "TypeScript",
    "html_url": "https://github.com/Jonas0o0/portfolio",
    "category": "Personnal",
    "color": "from-purple-500 to-indigo-500",
    "images": ["/images/projets/Portfolio/1.png"]
  },
  {
    "name": "EcoDrop API",
    "description": "API REST robuste pour la gestion intelligente des déchets. J'ai réalisé 50% du backend, incluant l'implémentation de l'authentification OAuth2 multi-fournisseurs (Google, GitHub, Discord) et le monitoring temps réel.",
    // "description": "API REST robuste pour la gestion intelligente des déchets. Authentification OAuth2 multi-fournisseurs (Google, GitHub, Discord), gestion de sessions JWT et monitoring en temps réel des capacités de collecte.",
    "language": "Java",
    "html_url": "https://github.com/edihamiti/ecodrop-api",
    "homepage": "https://ecodrop.jonas-facon.dev/docs",
    "category": "Academic",
    "color": "from-emerald-500 to-teal-500",
    "images": ["/images/projets/Ecodrop/1.png"]
  },
  {
    "name": "Dys-Parus",
    "description": "Jeu de labyrinthe expérimental en Java. En tant que Lead Developer, j'ai assuré 70% de la réalisation technique pour soutenir l'équipe, tout en explorant des mécaniques de changement de perspective complexes.",
    // "description": "Jeu de labyrinthe expérimental en Java. Une exploration ludique de la perception et du changement de perspective à travers plusieurs niveaux évolutifs.",
    "language": "Java",
    "html_url": "https://github.com/Jonas0o0/Labyrinthe-des-Dys-Parus",
    "category": "Academic",
    "color": "from-pink-500 to-rose-500",
    "images": [
      "/images/projets/Dys-parus/1.png",
      "/images/projets/Dys-parus/2.png",
      "/images/projets/Dys-parus/3.png"
    ]
  },
  {
    "name": "Kass-Brikerie",
    "description": "Casse-brique moderne en mode agile (Scrum Master & Dev). J'ai conçu l'intégralité du moteur physique : gestion des rebonds (murs, briques, pad) et système de destruction dynamique des éléments.",
    // "description": "Casse-brique moderne développé en mode agile. Une démonstration de collaboration technique et de gestion de projet au sein d'une équipe de 6 développeurs.",
    "language": "Java",
    "html_url": "https://github.com/Jonas0o0/Kass-Brikerie",
    "category": "Academic",
    "color": "from-blue-500 to-cyan-500",
    "images": [
      "/images/projets/Kass-Brikerie/1.png",
      "/images/projets/Kass-Brikerie/2.png",
      "/images/projets/Kass-Brikerie/3.png",
      "/images/projets/Kass-Brikerie/4.png"
    ]
  },
  {
    "name": "Cryptodec",
    "description": "Projet solo intégral : solution d'analyse et de déclaration fiscale pour portefeuilles multi-chaînes. Gestion de la complexité des flux de données blockchain et calculs de plus-values.",
    // "description": "Solution d'analyse et de déclaration fiscale pour portefeuilles multi-chaînes. Simplifier la complexité de l'écosystème crypto.",
    "language": "TypeScript",
    "html_url": "https://github.com/Jonas0o0/cryptodec",
    "category": "Personnal",
    "color": "from-orange-500 to-yellow-500",
    "images": [
      "/images/projets/Cryptodec/1.png",
      "/images/projets/Cryptodec/2.png",
      "/images/projets/Cryptodec/3.png"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [project.images]);

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
             {project.images && project.images.length > 0 ? (
               <AnimatePresence mode="wait">
                 <motion.img
                   key={project.images[currentImageIndex]}
                   src={project.images[currentImageIndex]}
                   alt={project.name}
                   initial={{ opacity: 0, scale: 1.1 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.8, ease: "easeInOut" }}
                   className="w-full h-full object-cover"
                 />
               </AnimatePresence>
             ) : (
               <Github size={120} className="text-gray-700 group-hover:text-white group-hover:scale-110 transition-all duration-700 opacity-20 group-hover:opacity-100" />
             )}
             
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

        <div className="pt-6 flex gap-8 items-center">
          <a href={project.html_url} target="_blank" className="flex items-center gap-2 text-white font-bold group/link">
             Github <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
          </a>
          {project.homepage && (
            <a href={project.homepage} target="_blank" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold group/doc transition-colors">
               Documentation <ExternalLink size={18} className="group-hover/doc:scale-110 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

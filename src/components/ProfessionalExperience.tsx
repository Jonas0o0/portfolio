'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProfessionalExperience = () => {
  const experiences = [
    {
      company: "ADTI",
      role: "Stagiaire Développeur Full Stack",
      stack: ".NET / Angular",
      period: "Mai 2026 – Juin 2026",
      logo: "/logos/logo-adti-icon-80.png",
      color: "from-blue-600 to-indigo-600",
      description: "Immersion au cœur du développement industriel pour moderniser et sécuriser une solution de GMAO d'envergure.",
      tasks: [
        "Mise en place d’un écosystème de webhooks (Backend .NET & Notifications).",
        "Conception d'interfaces de gestion dynamiques en Angular.",
        "Interopérabilité IoT via Node-RED et Mosquitto.",
        "PoC d'intégration Microsoft Dynamics 365 Business Central.",
        "Refactoring backend & sécurisation par attributs C#.",
        "Optimisation de la stack Docker & Dev Containers."
      ],
      tags: [".NET", "Angular", "C#", "Docker", "IoT"]
    }
  ];

  return (
    <section id="professional" className="w-full py-32 bg-white/30">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-4">
            Parcours<span className="text-blue-600">.</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="space-y-40">
          {experiences.map((exp, index) => (
            <FeaturedExperience key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

function FeaturedExperience({ exp, index }: { exp: any; index: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div ref={container} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      
      {/* Visual Block - mirrors the Project style */}
      <div className="lg:col-span-6 relative group">
        <motion.div 
          style={{ y }}
          className={`aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br ${exp.color} p-1 shadow-2xl`}
        >
          <div className="w-full h-full bg-gray-50 rounded-[2.8rem] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-transparent transition-colors duration-700">
             {/* Logo background decoration */}
             <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700">
                <img src={exp.logo} alt="" className="w-full h-full object-cover scale-150 rotate-12" />
             </div>
             
             <img 
               src={exp.logo} 
               alt={exp.company} 
               className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 group-hover:scale-110 transition-transform duration-700" 
             />
             
             <div className="mt-8 text-center relative z-10">
                <span className="block text-2xl font-black text-gray-900 group-hover:text-white transition-colors uppercase tracking-widest">{exp.company}</span>
                <span className="text-gray-400 group-hover:text-white/80 transition-colors font-bold uppercase tracking-widest text-xs mt-2 block">{exp.period}</span>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Content Block */}
      <div className="lg:col-span-6 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
             <Badge className="bg-blue-100 text-blue-700 border-none px-4 py-1 font-black uppercase tracking-widest text-[10px]">Expérience pro</Badge>
             <div className="flex items-center gap-2 text-gray-400 text-sm font-bold">
                <Calendar size={14} />
                {exp.period}
             </div>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
            {exp.role}
          </h3>
          <p className="text-xl font-bold text-blue-600 uppercase tracking-[0.2em]">{exp.stack}</p>
        </div>

        <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-blue-600 pl-6">
          &quot;{exp.description}&quot;
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4">
          {exp.tasks.map((task: string, i: number) => (
            <div key={i} className="flex gap-3 group/item">
              <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1 group-hover/item:scale-125 transition-transform" />
              <span className="text-sm text-gray-600 font-medium leading-snug">{task}</span>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-wrap gap-3">
          {exp.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 group-hover:border-blue-200 transition-colors">
               {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfessionalExperience;

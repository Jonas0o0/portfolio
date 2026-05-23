'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProfessionalExperience = () => {
  const experiences = [
    {
      company: "ADTI",
      role: "Stagiaire Développeur Full Stack",
      stack: ".NET / Angular",
      period: "Mai 2026 – Juin 2026",
      logo: "/logos/logo-adti-icon-80.jpegok",
      color: "from-orange-500 to-amber-600",
      accent: "text-orange-600",
      bgAccent: "bg-orange-600",
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
            Parcours<span className="text-orange-500">.</span>
          </h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
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

  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div ref={container} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      
      {/* Visual Block - Reduced width (col-span-4) */}
      <div className="lg:col-span-4 relative group">
        <motion.div 
          style={{ y }}
          className={`aspect-square rounded-[2.5rem] overflow-hidden bg-gradient-to-br ${exp.color} p-1 shadow-2xl`}
        >
          <div className="w-full h-full bg-gray-50 rounded-[2.3rem] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-transparent transition-colors duration-700">
             <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700">
                <img src={exp.logo} alt="" className="w-full h-full object-cover scale-150 rotate-12" />
             </div>
             
             <img 
               src={exp.logo} 
               alt={exp.company} 
               className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10 group-hover:scale-110 transition-transform duration-700" 
             />
             
             <div className="mt-6 text-center relative z-10 px-4">
                <span className="block text-xl font-black text-gray-900 group-hover:text-white transition-colors uppercase tracking-widest">{exp.company}</span>
                <span className="text-gray-400 group-hover:text-white/80 transition-colors font-bold uppercase tracking-widest text-[10px] mt-2 block">{exp.period}</span>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Content Block - Increased width (col-span-8) */}
      <div className="lg:col-span-8 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
             <Badge className="bg-orange-100 text-orange-700 border-none px-4 py-1 font-black uppercase tracking-widest text-[10px]">Expérience pro</Badge>
             <div className="flex items-center gap-2 text-gray-400 text-sm font-bold">
                <Calendar size={14} />
                {exp.period}
             </div>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
            {exp.role}
          </h3>
          <p className="text-xl font-bold text-orange-600 uppercase tracking-[0.2em]">{exp.stack}</p>
        </div>

        <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-orange-500 pl-6">
          &quot;{exp.description}&quot;
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4">
          {exp.tasks.map((task: string, i: number) => (
            <div key={i} className="flex gap-3 group/item">
              <CheckCircle2 size={18} className="text-orange-500 shrink-0 mt-1 group-hover/item:scale-125 transition-transform" />
              <span className="text-sm text-gray-600 font-medium leading-snug">{task}</span>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-wrap gap-3">
          {exp.tags.map((tag: string) => (
            <span key={tag} className="text-[11px] font-black uppercase tracking-widest text-gray-700 bg-gray-200/50 px-4 py-2 rounded-xl border border-gray-300/50 hover:border-orange-300 transition-colors">
               {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfessionalExperience;

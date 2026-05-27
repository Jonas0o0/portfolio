'use client';

import { Award, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      title: "BUT Informatique",
      institution: "Université de Lille",
      campus: "IUT de Lille - Université de Lille",
      logo: "/logos/univ.jpeg",
      date: "Depuis 2024",
      description: "Formation axée sur la pratique avec des matières comme :\nJava, Technologies Web (HTML, CSS, JS), Réseaux & Systèmes, Communication.",
      icon: <Award size={24} />,
    },
    {
      title: "Baccalauréat Général - Mention Bien",
      institution: "Lycée Gustave Eiffel",
      campus: "Lycée Gustave Eiffel, Armentières",
      logo: "/logos/lycee.png",
      date: "2021 - 2024",
      description: "Spécialités : Mathématiques et Numérique et Sciences Informatiques (NSI).\nOption : Mathématiques Expertes.\nAutres matières : Python, Anglais, Espagnol.",
      icon: <GraduationCap size={24} />,
    }
  ];

  return (
    <section id="education" className="w-full py-32 relative overflow-hidden">
       {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-500/[0.02] -skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center lg:text-left"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-4">Études<span className="text-purple-500">.</span></h2>
        </motion.div>

        <div className="space-y-24 max-w-4xl">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-12 md:pl-0"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/4 pt-2">
                   <span className="text-2xl font-black text-purple-600 block">{item.date}</span>
                </div>
                
                <div className="md:w-3/4 group">
                  <div className="flex items-center gap-6 mb-4">
                     <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shadow-xl border border-gray-100 shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <img src={item.logo} alt={item.institution} className="w-full h-full object-contain rounded-lg" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-black text-gray-900 tracking-tight">{item.title}</h3>
                        <h4 className="text-xl font-bold text-purple-600/80">{item.institution}</h4>
                     </div>
                  </div>
                  
                  <h5 className="text-lg font-bold text-gray-400 mb-4 uppercase tracking-widest text-xs">{item.campus}</h5>
                  
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

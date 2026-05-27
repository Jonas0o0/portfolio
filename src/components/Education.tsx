'use client';

import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      title: "BUT Informatique",
      specialization: "Parcours A : Réalisation d'applications",
      institution: "Université de Lille",
      campus: "IUT de Lille - Université de Lille",
      logo: "/logos/univ.jpeg",
      date: "Depuis 2024",
      description: [
        "Spécialisation 'Réalisation d'applications' axée sur l'ingénierie logicielle et la conception robuste.",
        "Maîtrise du cycle de vie logiciel : Conception OO (Java), Design Patterns et validation par tests unitaires.",
        "Développement Full-stack avec intégration de bases de données avancées (SQL) et administration réseaux.",
        "Conduite de projets complexes en mode Agile (Scrum) au travers des Situations d'Apprentissage et d'Évaluation (SAÉ)."
      ]
    },
    {
      title: "Baccalauréat Général",
      specialization: "Mention Bien",
      institution: "Lycée Gustave Eiffel",
      campus: "Lycée Gustave Eiffel, Armentières",
      logo: "/logos/lycee.png",
      date: "2021 - 2024",
      description: [
        "Spécialités suivies : Mathématiques, NSI (Numérique et Sciences Informatiques) et Physique-Chimie en classe de Première.",
        "Spécialités conservées en Terminale : Mathématiques et NSI.",
        "Option Mathématiques Expertes : Approfondissement en arithmétique, nombres complexes et théorie des graphes.",
        "Développement Python (POO, récursivité), gestion de bases de données SQL et administration système Linux."
      ]
    }
  ];

  return (
    <section id="education" className="w-full py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-4">
            Études<span className="text-gray-400">.</span>
          </h2>
          <div className="h-1 w-20 bg-gray-900 rounded-full"></div>
        </div>

        <div className="space-y-40">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              {/* Sober Visual Block */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="aspect-square rounded-3xl bg-slate-900 flex flex-col items-center justify-center relative p-8 shadow-2xl border border-white/5">
                   <div className="flex-grow flex items-center justify-center w-full">
                      <img 
                        src={item.logo} 
                        alt={item.institution} 
                        className="w-32 h-32 object-contain rounded-xl" 
                      />
                   </div>
                   
                   <div className="w-full pt-6 mt-6 border-t border-white/10 text-center">
                      <span className="block text-sm font-black text-white uppercase tracking-[0.3em] mb-1">{item.date}</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.institution}</span>
                   </div>
                </div>
              </div>

              {/* Content Block */}
              <div className="lg:col-span-8 space-y-10">
                <div>
                   <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-2">
                     {item.title}
                   </h3>
                   <div className="flex flex-col gap-1">
                      <span className="text-xl font-bold text-purple-600">{item.specialization}</span>
                      <span className="text-lg font-medium text-slate-400">{item.campus}</span>
                   </div>
                </div>

                <div className="space-y-6">
                  {item.description.map((paragraph, pIndex) => (
                    <p 
                      key={pIndex} 
                      className="text-xl text-gray-600 leading-relaxed max-w-2xl text-justify"
                    >
                      {paragraph}
                    </p>
                  ))}
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

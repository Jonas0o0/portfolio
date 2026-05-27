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
      highlights: [
        { label: "Ingénierie", value: "Conception OO, Design Patterns, Cycle de vie" },
        { label: "Full-stack", value: "Java, Web, SQL/NoSQL, Administration réseaux" },
        { label: "Méthodologie", value: "Agile Scrum, SAÉ (Projets complexes)" }
      ],
      description: "Focus sur la conception, le développement et la validation d'applications robustes et scalables."
    },
    {
      title: "Baccalauréat Général",
      specialization: "Mention Bien",
      institution: "Lycée Gustave Eiffel",
      campus: "Lycée Gustave Eiffel, Armentières",
      logo: "/logos/lycee.png",
      date: "2021 - 2024",
      highlights: [
        { label: "Spécialités", value: "NSI (Informatique) & Mathématiques" },
        { label: "NSI", value: "Python (POO), SQL, Linux, Réseaux (TCP/IP)" },
        { label: "Maths", value: "Option Expertes (Théorie des graphes, Arithmétique)" }
      ],
      description: "Solide socle scientifique axé sur l'algorithmique et le développement logiciel."
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

        <div className="space-y-32">
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
              <div className="lg:col-span-4 sticky top-32">
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
              <div className="lg:col-span-8 space-y-8">
                <div>
                   <div className="flex flex-wrap items-baseline gap-4 mb-2">
                      <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                        {item.title}
                      </h3>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-xl font-bold text-purple-600">{item.specialization}</span>
                      <span className="text-lg font-medium text-slate-400">{item.campus}</span>
                   </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-medium italic">
                  "{item.description}"
                </p>

                <div className="grid gap-6">
                  {item.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex gap-6 items-start">
                       <div className="w-24 shrink-0 pt-1">
                          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">{highlight.label}</span>
                       </div>
                       <div className="flex-grow pb-4 border-b border-slate-100">
                          <p className="text-lg text-gray-800 font-semibold">{highlight.value}</p>
                       </div>
                    </div>
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

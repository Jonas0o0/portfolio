'use client';

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
    },
    {
      title: "Baccalauréat Général - Mention Bien",
      institution: "Lycée Gustave Eiffel",
      campus: "Lycée Gustave Eiffel, Armentières",
      logo: "/logos/lycee.png",
      date: "2021 - 2024",
      description: "Spécialités : Mathématiques et Numérique et Sciences Informatiques (NSI).\nOption : Mathématiques Expertes.\nAutres matières : Python, Anglais, Espagnol.",
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Sober Visual Block */}
              <div className="lg:col-span-4">
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
              <div className="lg:col-span-8 space-y-6">
                <div>
                   <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
                     {item.title}
                   </h3>
                   <h4 className="text-xl md:text-2xl font-bold text-slate-500 mt-2">
                     {item.institution}
                   </h4>
                </div>

                <div className="space-y-4">
                   <span className="text-xs uppercase tracking-[0.3em] font-black text-gray-400 block">{item.campus}</span>
                   <p className="text-xl text-gray-600 leading-relaxed max-w-2xl whitespace-pre-line border-l-4 border-slate-200 pl-8">
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

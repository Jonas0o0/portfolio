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
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Baccalauréat Général - Mention Bien",
      institution: "Lycée Gustave Eiffel",
      campus: "Lycée Gustave Eiffel, Armentières",
      logo: "/logos/lycee.png",
      date: "2021 - 2024",
      description: "Spécialités : Mathématiques et Numérique et Sciences Informatiques (NSI).\nOption : Mathématiques Expertes.\nAutres matières : Python, Anglais, Espagnol.",
      color: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <section id="education" className="w-full py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-4">
            Études<span className="text-purple-500">.</span>
          </h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
        </div>

        <div className="space-y-32">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Visual Block - Matching Professional Style */}
              <div className="lg:col-span-4 relative group">
                <div className={`aspect-square rounded-[2.5rem] overflow-hidden bg-gradient-to-br ${item.color} p-1 shadow-2xl`}>
                  <div className="w-full h-full bg-gray-50 rounded-[2.3rem] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-transparent transition-colors duration-700">
                    {/* Faded logo background decoration */}
                    <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700">
                        <img src={item.logo} alt="" className="w-full h-full object-cover scale-150 rotate-12" />
                    </div>
                    
                    <img 
                      src={item.logo} 
                      alt={item.institution} 
                      className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10 transition-transform duration-700" 
                    />
                    
                    <div className="mt-6 text-center relative z-10 px-4">
                        <span className="block text-xl font-black text-gray-900 group-hover:text-white transition-colors uppercase tracking-widest">{item.institution}</span>
                        <span className="text-gray-400 group-hover:text-white/80 transition-colors font-bold uppercase tracking-widest text-[10px] mt-2 block">{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Block - Keeping the text part you liked */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                   <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                     {item.title}
                   </h3>
                   <h4 className="text-xl md:text-2xl font-bold text-purple-600 mt-2">
                     {item.institution}
                   </h4>
                </div>

                <div className="space-y-4">
                   <span className="text-xs uppercase tracking-[0.3em] font-black text-gray-400 block">{item.campus}</span>
                   <p className="text-xl text-gray-600 leading-relaxed max-w-2xl whitespace-pre-line border-l-4 border-purple-100 pl-8">
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

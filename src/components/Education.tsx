'use client';

import { Award, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      title: "BUT Informatique",
      institution: "IUT de Lille - Université de Lille",
      date: "2024 - Présent",
      description: "Formation intensive en développement logiciel, architectures web et systèmes d'information.",
      icon: <Award size={24} />,
    },
    {
      title: "Baccalauréat Général",
      institution: "Lycée Gustave Eiffel",
      date: "2021 - 2024",
      description: "Spécialités Mathématiques & NSI. Mention Bien.",
      icon: <GraduationCap size={24} />,
    }
  ];

  return (
    <section id="education" className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden">
       {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-500/[0.02] -skew-x-12 pointer-events-none"></div>

      <div className="max-w-4xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter">Éducation<span className="text-purple-500">.</span></h2>
        </motion.div>

        <div className="space-y-24">
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
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center shadow-2xl group-hover:bg-purple-600 transition-colors duration-500">
                        {item.icon}
                     </div>
                     <h3 className="text-3xl font-black text-gray-900 tracking-tight">{item.title}</h3>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-500 mb-4">{item.institution}</h4>
                  
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
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

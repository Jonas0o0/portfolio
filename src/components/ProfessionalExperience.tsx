'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProfessionalExperience = () => {
  const experiences = [
    {
      company: "ADTI",
      role: "Stagiaire Développeur Full Stack (.NET / Angular)",
      period: "Mai 2026 – Juin 2026",
      location: "France",
      logo: "/logos/logo-adti-icon-80.png",
      description: "Développement et amélioration d’une application de GMAO développée en Angular et .NET.",
      tasks: [
        "Mise en place d’un système de webhooks : création des entités, services, contrôleurs et intégration au système de notifications.",
        "Développement d’interfaces permettant la gestion et la configuration des webhooks.",
        "Intégration de solutions ERP via Node-RED et Mosquitto (IoT).",
        "Réalisation d’une preuve de concept pour l’intégration de Microsoft Dynamics 365 Business Central.",
        "Refactoring backend et mise en place d’attributs personnalisés en C#.",
        "Correction et maintenance de l’environnement de développement (Dev Containers, Docker)."
      ],
      tags: [".NET", "Angular", "C#", "Docker", "IoT", "Node-RED"]
    }
  ];

  return (
    <section id="professional" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center lg:text-left"
      >
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-4">
          Parcours Pro<span className="text-purple-600">.</span>
        </h2>
        <div className="h-1 w-20 bg-purple-600 rounded-full mx-auto lg:mx-0"></div>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="glass-panel border-white/60 overflow-hidden shadow-2xl">
              <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shadow-inner border border-gray-100">
                    <img src={exp.logo} alt={exp.company} className="object-contain" onError={(e) => { e.currentTarget.src = "/logos/placeholder.png" }} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-black text-gray-900">{exp.company}</CardTitle>
                    <div className="flex items-center gap-2 text-purple-600 font-bold">
                      <Briefcase size={16} />
                      {exp.role}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start md:items-end">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none px-4 py-1 font-bold">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </Badge>
                  <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-700 font-medium">
                  {exp.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-1" />
                      <span className="text-sm leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-gray-100/50 text-gray-600 border-white/40">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;

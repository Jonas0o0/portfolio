'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-8">
              À Propos<span className="text-pink-500">.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Étudiant en 2ème année de <span className="text-gray-900 font-bold">BUT Informatique</span>, je suis un créatif insatiable. Lego, couture, dessin, peinture... j&apos;ai toujours exploré pour comprendre le <span className="italic">comment</span> des choses.
              </p>
              
              <p>
                Ma force réside dans ma capacité à ne pas me limiter à une seule discipline. Cette habitude de toucher à tout me donne une vision différente des projets. Là où certains voient des technologies séparées, je vois des possibilités de les combiner.
              </p>

              <p>
                Ma curiosité me pousse à voir au-delà du code : je m&apos;intéresse aux <span className="text-gray-900 font-bold underline decoration-pink-500 decoration-4">pourquoi</span> autant qu&apos;aux <span className="text-gray-900 font-bold">comment</span>. Je cherche sincèrement à comprendre comment les technologies évoluent et comment y contribuer.
              </p>

              <div className="pt-8 flex flex-col sm:flex-row gap-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black text-pink-500 mb-2">Vision</h4>
                  <p className="text-sm font-medium">Aborder les problèmes sous un autre angle pour faire naître de nouvelles idées.</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black text-pink-500 mb-2">Objectif</h4>
                  {/* <p className="text-sm font-medium">Mettre mes compétences au service de projets concrets et continuer à apprendre.</p> */}
                  <p className="text-sm font-medium">Découvrir le monde de la R&D via un stage en laboratoire de recherche (Cristal) pour l&apos;année prochaine.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-pink-200 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative aspect-[4/5] w-full max-w-sm rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl">
                <img 
                  src="/images/portrait.jpg" 
                  alt="Jonas Facon" 
                  className="w-full h-full object-cover rounded-2xl transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

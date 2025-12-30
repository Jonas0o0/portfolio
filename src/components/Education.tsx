'use client';

import { Award, GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="min-h-screen p-20">
            <h1 className="mb-20 font-extrabold text-5xl italic text-center">Études</h1>
            <div className="flex flex-col items-center gap-12">
                <div
                    className="w-2/3 p-8 border rounded-xl bg-white/2.5 border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] transition-all duration-300">
                    <div className="flex items-start gap-6">
                        <Award size={40} className="text-purple-600"/>
                        <div>
                            <h2 className="font-bold text-2xl">BUT Informatique</h2>
                            <h3 className="font-semibold text-xl text-gray-800">IUT de Lille - Université de
                                Lille</h3>
                            <p className="text-sm text-gray-500">Depuis 2024</p>
                            <p className="mt-4">
                                Formation axée sur la pratique avec des matières comme :
                                <br/>
                                Java, Technologies Web (HTML, CSS, JS), Réseaux & Systèmes, Communication.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-2/3 p-8 border rounded-xl bg-white/2.5 border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] transition-all duration-300">
                    <div className="flex items-start gap-6">
                        <GraduationCap size={40} className="text-purple-600"/>
                        <div>
                            <h2 className="font-bold text-2xl">Baccalauréat Général - Mention Bien</h2>
                            <h3 className="font-semibold text-xl text-gray-800">Lycée Gustave Eiffel,
                                Armentières</h3>
                            <p className="text-sm text-gray-500">2021 - 2024</p>
                            <p className="mt-4">
                                Spécialités : Mathématiques et Numérique et Sciences Informatiques (NSI).
                                <br/>
                                Option : Mathématiques Expertes.
                                <br/>
                                Autres matières : Python, Anglais, Espagnol.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

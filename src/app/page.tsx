'use client';

import {
    Menu,
    X,
    Github,
    Linkedin,
    Mail,
    Code2,
    Sparkles,
    Rocket,
    Zap,
    Heart,
    Star,
    Coffee,
    GraduationCap,
    Award
} from 'lucide-react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import {Nabla} from "next/dist/compiled/@next/font/dist/google";
import Navbar from "@/components/Navbar";

export default function Home() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])
    return (
        <main className=" text-lg bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-900 min-h-screen">
            <Navbar/>
            <header className="flex items-center justify-center h-screen w-full">
                <div className="">
                    <a href="mailto:jonas.facon@proton.me"
                       className="hero-badge inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-pink-600 font-semibold mb-4 shadow-lg">
                        <Sparkles size={20}/>
                        <span>Disponible pour de nouveaux projets</span>
                    </a>
                    <h1 className="font-extrabold text-8xl">Jonas Facon</h1>
                    <p className="w-[600px]">
                        Actuellement étudiant en 2ᵉ année de BUT Informatique, à la recherche d’un stage de 10 semaines.
                    </p>

                    <a href="https://cv.jonas-facon.dev"
                       className="w-full text-xl p-20 mt-8 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                        Télécharger mon CV
                    </a>

                </div>
                <div className="w-[10%]"></div>
                <div className="relative w-[20%]">
                    <img className="h-[100%] w-[100%] rounded-full" src="/images/portrait.jpg"/>
                    <a href="https://www.linkedin.com/in/jonas-facon/" className="absolute -left-1 bottom-14 h-[60px] w-[60px] mt-2 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                        <Linkedin/>
                    </a>
                    <a href="mailto:jonas.facon@proton.me" className="absolute left-5 bottom-5 h-[60px] w-[60px] mt-2 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                        <Mail/>
                    </a>
                    <a href="https://github.com/Jonas0o0" className="absolute left-[60px] bottom-0 h-[60px] w-[60px] mt-2 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                        <Github/>
                    </a>
                </div>
            </header>
            <section className=" min-h-screen flex-col justify-center items-center p-20">
                <h1 className="mb-20 font-extrabold text-5xl italic text-center">A Propos</h1>
                <section className="flex justify-around items-center">
                    <img className="h-[600px] w-[600px] rounded-full" src="/images/portrait.jpg"/>
                    <div className="w-4xl">
                        <p>
                            <h4 className="pt-4 pb-4">Construire les algorithmes de demain</h4>

                            Étudiant en 2ème année de BUT Informatique, je suis de ceux qui touchent à tout. Lego, couture, dessin, peinture... j'ai toujours eu besoin d'explorer, de créer, de comprendre comment les choses fonctionnent. Aujourd'hui, ce sont l'intelligence artificielle, la crypto et la finance qui captent mon attention.

                            <h4 className="pt-4 pb-4">Ce qui me drive</h4>

                            J'explore le fonctionnement de l'IA et de la blockchain à la recherche de possibilités pour créer les services du futur. Pas de grandes déclarations — je préfère creuser, expérimenter et comprendre réellement ce qui se passe. Ma curiosité pour la finance me pousse à voir au-delà du code : je m'intéresse aux <strong>pourquoi</strong> autant qu'aux <strong>comment</strong>.

                            <h4 className="pt-4" pb-4>Mon approche</h4>

                            Ma force ? <strong>Je ne me limite pas à une seule discipline.</strong> Cette habitude de toucher à tout me donne une vision différente des projets. Là où certains voient des technologies séparées, je vois des possibilités de les combiner. Ma créativité et mes connaissances en finance me permettent d'aborder les problèmes sous un autre angle et ainsi de nouvelles idées intéressantes peuvent naître.<br/>
                            <br/>
                            Je ne prétends pas révolutionner le monde, mais j'essaie sincèrement de comprendre où va la tech et comment y contribuer.

                            <h4 className="pt-4 pb-4">Vers où je vais</h4>

                            Mon objectif à long terme ? Contribuer à la recherche en IA ou dans l'écosystème crypto. Mais pour l'instant, je cherche un <strong>stage de 10 semaines</strong> pour avril où mettre mes compétences au service de projets concrets, apprendre auprès de gens qui savent, et continuer à nourrir ma curiosité.<br/>
                            <br/>
                            <strong>Une question ? Un projet ?</strong> N'hésitez pas à me contacter.
                        </p>
                    </div>
                </section>
            </section>
            <section className="min-h-screen flex-col items-center justify-start w-full p-50">
                <h1 className="mb-20 font-extrabold text-5xl italic">Compétences</h1>
                <section className="flex justify-center mt-2">
                    <div className="flex justify-end items-start w-[550px]">
                        <h2 className="font-extrabold text-3xl">LANGAGES DE PROGRAMMATION</h2>
                    </div>
                    <div className="flex flex-wrap w-[800px]">
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/java-icon.svg"/>
                            <span className="text-xl mx-3">Java</span>
                        </div>
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/python-logo-only.svg"/>
                            <span className="text-xl mx-3">Python</span>
                        </div>
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/C_Programming_Language.svg/"/>
                            <span className="text-xl mx-3">C</span>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center mt-2">
                    <div className="flex justify-end items-start w-[550px]">
                        <h2 className="font-extrabold text-3xl">DÉVELOPPEMENT WEB</h2>
                    </div>

                    <div className="flex flex-wrap w-[800px]">
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/HTML5-Logo.svg"/>
                            <span className="text-xl mx-3">HTML</span>
                        </div>
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/w3_css-official.svg"/>
                            <span className="text-xl mx-3">CSS</span>
                        </div>
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/javascript-seeklogo.png"/>
                            <span className="text-xl mx-3">JS</span>
                        </div>
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/React-Logo.svg"/>
                            <span className="text-xl mx-3">Réact</span>
                        </div>
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/nextjs-icon-svgrepo-com.svg"/>
                            <span className="text-xl mx-3">Next.js</span>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center mt-2">
                    <div className="flex justify-end items-start w-[550px]">
                        <h2 className="font-extrabold text-3xl">BASE DE DONNÉES</h2>
                    </div>
                    <div className="flex flex-wrap w-[800px]">
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/PostgreSQL_logo.3colors.svg"/>
                            <span className="text-xl mx-3">Postgresql</span>
                        </div>
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/java-icon.svg"/>
                            <span className="text-xl mx-3">JDBC</span>
                        </div>
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/sqlitebrowser.png/"/>
                            <span className="text-xl mx-3">SQL</span>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center mt-2">
                    <div className="flex justify-end items-start w-[550px]">
                        <h2 className="font-extrabold text-3xl">OUTILS ET ENVORONNEMENTS</h2>
                    </div>
                    <div className="flex flex-wrap w-[800px]">
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/Git-Icon-1788C.svg"/>
                            <span className="text-xl mx-3">GIT</span>
                        </div>
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/docker-mark-blue.svg"/>
                            <span className="text-xl mx-3">Docker</span>
                        </div>
                        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
                            <img width="40" height="40" src="/logos/dokploy.svg"/>
                            <span className="text-xl mx-3">Dockploy</span>
                        </div>
                    </div>
                </section>
            </section>

            <Experience/>
            <section className="min-h-screen p-20">
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
            <Footer />
        </main>
    );
}

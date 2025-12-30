'use client';

const About = () => {
    return (
        <section id="about" className=" min-h-screen flex-col justify-center items-center p-20">
            <h1 className="mb-20 font-extrabold text-5xl italic text-center">A Propos</h1>
            <section className="flex justify-around items-center">
                <img className="h-[600px] w-[600px] rounded-full" src="/images/portrait.jpg" alt="Portrait of Jonas Facon"/>
                <div className="w-4xl">
                    <p>
                        <h4 className="pt-4 pb-4">Construire les algorithmes de demain</h4>

                        Étudiant en 2ème année de BUT Informatique, je suis de ceux qui touchent à tout. Lego, couture,
                        dessin, peinture... j'ai toujours eu besoin d'explorer, de créer, de comprendre comment les
                        choses fonctionnent. Aujourd'hui, ce sont l'intelligence artificielle, la crypto et la finance
                        qui captent mon attention.

                        <h4 className="pt-4 pb-4">Ce qui me drive</h4>

                        J'explore le fonctionnement de l'IA et de la blockchain à la recherche de possibilités pour créer
                        les services du futur. Pas de grandes déclarations — je préfère creuser, expérimenter et
                        comprendre réellement ce qui se passe. Ma curiosité pour la finance me pousse à voir au-delà du
                        code : je m'intéresse aux <strong>pourquoi</strong> autant qu'aux <strong>comment</strong>.

                        <h4 className="pt-4" pb-4>Mon approche</h4>

                        Ma force ? <strong>Je ne me limite pas à une seule discipline.</strong> Cette habitude de
                        toucher à tout me donne une vision différente des projets. Là où certains voient des technologies
                        séparées, je vois des possibilités de les combiner. Ma créativité et mes connaissances en finance
                        me permettent d'aborder les problèmes sous un autre angle et ainsi de nouvelles idées
                        intéressantes peuvent naître.<br/>
                        <br/>
                        Je ne prétends pas révolutionner le monde, mais j'essaie sincèrement de comprendre où va la tech
                        et comment y contribuer.

                        <h4 className="pt-4 pb-4">Vers où je vais</h4>

                        Mon objectif à long terme ? Contribuer à la recherche en IA ou dans l'écosystème crypto. Mais
                        pour l'instant, je cherche un <strong>stage de 10 semaines</strong> pour avril où mettre mes
                        compétences au service de projets concrets, apprendre auprès de gens qui savent, et continuer à
                        nourrir ma curiosité.<br/>
                        <br/>
                        <strong>Une question ? Un projet ?</strong> N'hésitez pas à me contacter.
                    </p>
                </div>
            </section>
        </section>
    );
};

export default About;

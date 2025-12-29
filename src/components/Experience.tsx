import { Github, Star } from 'lucide-react';

const projects = [
  {
    "name": "portfolio",
    "description": "Portfolio personnel présentant mes projets, mes compétences et mon parcours. Il met en avant mon travail en développement et sert de vitrine de mes réalisations.",
    "language": "CSS",
    "html_url": "https://github.com/Jonas0o0/portfolio",
    "stargazers_count": 1,
    "category": "perso"
  },
  {
    "name": "Labyrinthe-des-Dys-Parus",
    "description": "Le labyrinthe des dys-parus est un jeu de labyrinthe dans lequel on progresse parmi plusieurs étapes changeant la manière de voir le jeu. Un mode coop et un mode libre sont aussi inclut.",
    "language": "Java",
    "html_url": "https://github.com/Jonas0o0/Labyrinthe-des-Dys-Parus",
    "stargazers_count": 1,
    "category": "universitaire"
  },
  {
    "name": "Kass-Brikerie",
    "description": "Kass Brikerie est un jeu de casse-brique développé en Java pour terminal, en utilisant la méthode agile, réalisé par une équipe aléatoire de 6 personnes.",
    "language": "Java",
    "html_url": "https://github.com/Jonas0o0/Kass-Brikerie",
    "stargazers_count": 1,
    "category": "universitaire"
  },
  {
    "name": "Application-association-etudiants",
    "description": "Outil d’Aide à la Décision pour Séjours Linguistiques",
    "language": "Java",
    "html_url": "https://github.com/Jonas0o0/Application-association-etudiants",
    "stargazers_count": 1,
    "category": "universitaire"
  },
  {
    "name": "cryptodec",
    "description": "Web app pour analyser et déclarer ses crypto de different wallet",
    "language": "TypeScript",
    "html_url": "https://github.com/Jonas0o0/cryptodec",
    "stargazers_count": 1,
    "category": "perso"
  },
  {
    "name": "cooffe-machine",
    "description": "Le but de ce projet est de réaliser une machine à café en utilisant le langage Java et des outils de test et de build. Ce projet est réalisé en pair-programming.",
    "language": "Java",
    "html_url": "https://github.com/EvanDelepine/coffee-machine",
    "stargazers_count": 1,
    "category": "perso"
  }
];

export default function Experience() {
  const persoProjects = projects.filter(p => p.category === 'perso');
  const universitaireProjects = projects.filter(p => p.category === 'universitaire');

  return (
    <section id="experience" className="min-h-screen p-20">
      <h1 className="mb-20 font-extrabold text-5xl italic text-center">Expérience</h1>

      <h2 className="mb-10 font-extrabold text-3xl italic">Projets Personnels</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {persoProjects.map((project) => (
            <a key={project.name} href={project.html_url} target="_blank" rel="noopener noreferrer" className="block w-[500px] p-8 border rounded-xl bg-white/2.5 border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <Github size={20} className="h-8 w-8 text-purple-600"/>
                  <h2 className="font-bold text-xl">{project.name}</h2>
                </div>
                <div className="flex-col items-end gap-6">
                    <p className="mt-4 text-gray-700">{project.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                      <span>{project.language}</span>
                      <div className="flex items-center gap-1">
                        <Star size={16}/>
                        <span>{project.stargazers_count}</span>
                      </div>
                    </div>
                </div>
            </a>
        ))}
      </div>

      <h2 className="mb-10 font-extrabold text-3xl italic">Projets Universitaires</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {universitaireProjects.map((project) => (
            <a key={project.name} href={project.html_url} target="_blank" rel="noopener noreferrer" className="block w-[500px] p-8 border rounded-xl bg-white/2.5 border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300">
                <div className="flex items-start gap-6">
                    <Github size={20} className="h-8 w-8 text-purple-600"/>
                    <h2 className="font-bold text-xl">{project.name}</h2>
                </div>
                <div className="flex-col items-end gap-6">
                    <p className="mt-4 text-gray-700">{project.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                        <span>{project.language}</span>
                        <div className="flex items-center gap-1">
                            <Star size={16}/>
                            <span>{project.stargazers_count}</span>
                        </div>
                    </div>
                </div>
            </a>
        ))}
      </div>
    </section>
  );
}
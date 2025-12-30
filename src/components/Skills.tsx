'use client';

import SkillCard from './SkillCard';

const skills = {
    programming: [
        { name: 'Java', icon: '/logos/java-icon.svg' },
        { name: 'Python', icon: '/logos/python-logo-only.svg' },
        { name: 'C', icon: '/logos/C_Programming_Language.svg' },
    ],
    web: [
        { name: 'HTML', icon: '/logos/HTML5-Logo.svg' },
        { name: 'CSS', icon: '/logos/w3_css-official.svg' },
        { name: 'JS', icon: '/logos/javascript-seeklogo.png' },
        { name: 'React', icon: '/logos/React-Logo.svg' },
        { name: 'Next.js', icon: '/logos/nextjs-icon-svgrepo-com.svg' },
    ],
    database: [
        { name: 'Postgresql', icon: '/logos/PostgreSQL_logo.3colors.svg' },
        { name: 'JDBC', icon: '/logos/java-icon.svg' },
        { name: 'SQL', icon: '/logos/sqlitebrowser.png' },
    ],
    tools: [
        { name: 'GIT', icon: '/logos/Git-Icon-1788C.svg' },
        { name: 'Docker', icon: '/logos/docker-mark-blue.svg' },
        { name: 'Dokploy', icon: '/logos/dokploy.svg' },
    ],
};

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen flex-col items-center justify-start w-full p-50">
            <h1 className="mb-20 font-extrabold text-5xl italic">Compétences</h1>
            <section className="flex justify-center mt-2">
                <div className="flex justify-end items-start w-[550px]">
                    <h2 className="font-extrabold text-3xl">LANGAGES DE PROGRAMMATION</h2>
                </div>
                <div className="flex flex-wrap w-[800px]">
                    {skills.programming.map((skill) => (
                        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </section>
            <section className="flex justify-center mt-2">
                <div className="flex justify-end items-start w-[550px]">
                    <h2 className="font-extrabold text-3xl">DÉVELOPPEMENT WEB</h2>
                </div>
                <div className="flex flex-wrap w-[800px]">
                    {skills.web.map((skill) => (
                        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </section>
            <section className="flex justify-center mt-2">
                <div className="flex justify-end items-start w-[550px]">
                    <h2 className="font-extrabold text-3xl">BASE DE DONNÉES</h2>
                </div>
                <div className="flex flex-wrap w-[800px]">
                    {skills.database.map((skill) => (
                        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </section>
            <section className="flex justify-center mt-2">
                <div className="flex justify-end items-start w-[550px]">
                    <h2 className="font-extrabold text-3xl">OUTILS ET ENVORONNEMENTS</h2>
                </div>
                <div className="flex flex-wrap w-[800px]">
                    {skills.tools.map((skill) => (
                        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Skills;

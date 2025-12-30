'use client';

import Image from 'next/image';

interface SkillCardProps {
    icon: string;
    name: string;
}

const SkillCard = ({ icon, name }: SkillCardProps) => {
    return (
        <div className="mb-8 text-xl p-20 ml-8 inline-flex items-center justify-around border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-xl bg-white/2.5 border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
            <Image width="40" height="40" src={icon} alt={`${name} logo`} />
            <span className="text-xl mx-3">{name}</span>
        </div>
    );
};

export default SkillCard;

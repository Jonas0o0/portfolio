'use client';

import { Github, Linkedin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center w-full max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-12">
            Parlons de votre prochain <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 underline decoration-purple-500/30">projet</span>.
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <motion.a
              href="mailto:jonas.facon@proton.me"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 bg-white text-gray-900 px-12 py-8 rounded-full text-2xl font-black transition-all shadow-2xl"
            >
              jonas.facon@proton.me
              <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform duration-300" />
            </motion.a>
          </div>

          <div className="mt-24 flex flex-wrap justify-center gap-12">
            <SocialLink href="https://www.linkedin.com/in/jonas-facon/" label="LinkedIn" icon={<Linkedin size={20} />} />
            <SocialLink href="https://github.com/Jonas0o0" label="GitHub" icon={<Github size={20} />} />
            <SocialLink href="https://discord.com/users/jonas0o0" label="Discord" icon={<MessageSquare size={20} />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ y: -5 }}
    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
  >
    {icon}
    {label}
  </motion.a>
);

export default Contact;

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 text-center text-gray-500 bg-gray-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-bold uppercase tracking-widest">Jonas Facon</p>
        <p className="text-[10px] uppercase tracking-[0.3em]">
          Built with Excellence &bull; 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full pt-4 pb-4 text-center text-sm text-gray-600 border-t border-gray-200">
            <p className="mb-1">Conçu avec passion par Jonas.</p>
            <p>&copy; {new Date().getFullYear()} Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;

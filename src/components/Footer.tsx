
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Anwar Zardoum</h2>
            <p className="text-gray-400 mt-1">Service de déménagement professionnel</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {currentYear} Anwar Zardoum. Tous droits réservés.</p>
            <div className="mt-2">
              <a href="tel:+21698508600" className="text-blue-400 hover:text-blue-300 transition-colors">
                +216 98 508 600
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

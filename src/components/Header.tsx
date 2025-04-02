
import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white w-full py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-700">Anwar Zardoum</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">À Propos</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <div className="flex items-center">
          <a 
            href="tel:+21698508600" 
            className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span>98 508 600</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

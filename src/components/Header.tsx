
import React, { useState } from 'react';
import { Phone, Globe, Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define available languages
const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' }
];

const Header = () => {
  const [currentLang, setCurrentLang] = useState('fr');

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    // In a real app, this would trigger actual translation
    console.log(`Language changed to ${langCode}`);
  };

  return (
    <header className="bg-white w-full py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-700">Anwar Zardoum</h1>
          <span className="ml-2 text-sm text-gray-500">Al Kalaa, Tunisie</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">À Propos</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors">
              <Languages className="w-5 h-5 mr-1" />
              <span className="hidden sm:inline">{languages.find(lang => lang.code === currentLang)?.name}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  className={`cursor-pointer ${currentLang === lang.code ? 'font-bold bg-blue-50' : ''}`}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
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

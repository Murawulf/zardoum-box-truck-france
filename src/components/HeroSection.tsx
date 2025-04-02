
import React from 'react';
import { Phone, Truck, PackageCheck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Service de Déménagement Professionnel
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Montage, démontage et déménagement de vos meubles par un professionnel avec camion Nissan
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+21698508600" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
            <a 
              href="#services" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <PackageCheck className="w-5 h-5" />
              Nos services
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute -bottom-10 right-0 w-1/3">
        <Truck className="w-full h-auto text-white opacity-10" />
      </div>
    </section>
  );
};

export default HeroSection;

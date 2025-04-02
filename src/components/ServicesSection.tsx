
import React from 'react';
import { Truck, Wrench, PackageOpen } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <PackageOpen className="w-12 h-12 text-blue-600" />,
      title: "Démontage de Meubles",
      description: "Démontage professionnel de tous types de meubles avec soin et précision pour garantir une manipulation sans dommages."
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: "Déménagement",
      description: "Transport sécurisé de vos meubles et effets personnels avec notre camion Nissan spacieux, adapté à tous types de déménagements."
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Montage de Meubles",
      description: "Assemblage et installation de vos meubles à votre nouvelle adresse, avec rapidité et expertise."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous offrons des services complets pour faciliter votre déménagement, du démontage à l'installation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

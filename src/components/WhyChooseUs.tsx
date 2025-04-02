
import React from 'react';
import { ShieldCheck, Clock, Truck, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Service Fiable",
      description: "Je garantis un service sûr et soigneux pour la manipulation de vos meubles et effets personnels."
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "Ponctualité",
      description: "Je respecte les délais convenus et m'assure que votre déménagement se déroule selon le planning établi."
    },
    {
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      title: "Équipement Adapté",
      description: "Mon camion Nissan est parfaitement adapté pour le transport de tous types de meubles en toute sécurité."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-blue-600" />,
      title: "Prix Compétitifs",
      description: "Je propose des tarifs abordables sans compromettre la qualité du service offert."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi Me Choisir</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un service personnalisé et professionnel pour répondre à tous vos besoins de déménagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{reason.title}</h3>
              <p className="text-gray-600 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

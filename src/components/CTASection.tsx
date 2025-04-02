
import React from 'react';
import { Phone, Truck } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      <div className="absolute -right-16 bottom-0 opacity-10">
        <Truck className="w-64 h-64 text-white" />
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt pour votre déménagement en Tunisie ?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contactez-moi dès aujourd'hui pour obtenir un devis gratuit et planifier votre déménagement sans stress à Al Kalaa et partout en Tunisie.
        </p>
        <a 
          href="tel:+21698508600" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors text-xl"
        >
          <Phone className="w-6 h-6" />
          Appelez au 98 508 600
        </a>
      </div>
    </section>
  );
};

export default CTASection;


import React from 'react';
import { Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt pour votre déménagement ?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contactez-moi dès aujourd'hui pour obtenir un devis gratuit et planifier votre déménagement sans stress.
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

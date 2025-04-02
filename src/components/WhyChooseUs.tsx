
import React from 'react';
import { ShieldCheck, Clock, Truck, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs = () => {
  const { translate } = useLanguage();

  const reasons = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: translate('whyChooseUs.reliable.title'),
      description: translate('whyChooseUs.reliable.description')
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: translate('whyChooseUs.punctual.title'),
      description: translate('whyChooseUs.punctual.description')
    },
    {
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      title: translate('whyChooseUs.equipment.title'),
      description: translate('whyChooseUs.equipment.description')
    },
    {
      icon: <DollarSign className="w-10 h-10 text-blue-600" />,
      title: translate('whyChooseUs.price.title'),
      description: translate('whyChooseUs.price.description')
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{translate('whyChooseUs.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translate('whyChooseUs.description')}
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
      
      {/* Add a gallery of moving images */}
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2070" alt="Moving truck" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=2074" alt="Moving boxes" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1582366796798-f978125267dd?q=80&w=2071" alt="Furniture assembly" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070" alt="Moving service" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1606170033648-5d55a3edf615?q=80&w=2070" alt="Box truck" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?q=80&w=2034" alt="Packing service" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1600607688066-89c9807e2147?q=80&w=2070" alt="Professional mover" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070" alt="Moving day" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


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
      
      {/* Updated image gallery of moving service images */}
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1586864387789-628af9feed72?q=80&w=2070" alt="Box truck for moving" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070" alt="Furniture assembly" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?q=80&w=2070" alt="Moving boxes and furniture" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070" alt="Moving furniture" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=2070" alt="Box truck loading" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?q=80&w=2070" alt="Moving truck" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1603794067602-9feaa4f70e0c?q=80&w=2070" alt="Moving day" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1547582304-f3dba6e370ac?q=80&w=2070" alt="Furniture disassembly" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

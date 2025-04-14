import React from 'react';
import { Truck, Wrench, PackageOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// ✅ Import local images
import s1 from '../components/s1.jpg';
import s2 from '../components/s2.jpg';
import s3 from '../components/s3.jpg';

const ServicesSection = () => {
  const { translate } = useLanguage();

  const services = [
    {
      icon: <PackageOpen className="w-12 h-12 text-blue-600" />,
      title: translate('services.disassembly.title'),
      description: translate('services.disassembly.description'),
      image: s1  // Local image
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: translate('services.moving.title'),
      description: translate('services.moving.description'),
      image: s2  // Local image
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: translate('services.assembly.title'),
      description: translate('services.assembly.description'),
      image: s3  // Local image
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{translate('services.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translate('services.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

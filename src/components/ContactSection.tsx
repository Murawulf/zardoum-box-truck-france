
import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { translate } = useLanguage();
  
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{translate('contact.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translate('contact.description')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-600 text-white p-8">
              <h3 className="text-2xl font-bold mb-6">{translate('contact.info')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{translate('contact.phone')}</h4>
                    <p className="text-blue-100">+216 98 508 600</p>
                    <a href="tel:+21698508600" className="inline-block mt-2 text-sm bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded transition-colors">
                      {translate('contact.callNow')}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{translate('contact.hours')}</h4>
                    <p className="text-blue-100">{translate('contact.weekdays')}</p>
                    <p className="text-blue-100">{translate('contact.sunday')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{translate('contact.serviceArea')}</h4>
                    <p className="text-blue-100">{translate('contact.coverage')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{translate('contact.quote')}</h3>
              <p className="text-gray-600 mb-6">
                {translate('contact.quoteDescription')}
              </p>
              <div className="mt-6">
                <a 
                  href="tel:+21698508600" 
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  98 508 600
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React from 'react';
import { User, Award, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import t1 from '../components/T.jpg'; // Local image import

const AboutSection = () => {
  const { translate } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left: Textual content with truck image below */}
          <div className="w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translate('about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {translate('about.description')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center">
                <User className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-gray-900 font-medium">
                  {translate('about.professional')}
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center">
                <Award className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-gray-900 font-medium">
                  {translate('about.experienced')}
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center">
                <ThumbsUp className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-gray-900 font-medium">
                  {translate('about.reliable')}
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              {translate('about.equipment')}
            </p>

            {/* Truck image under the text and categories */}
            <div className="flex justify-center mt-8">
              <img 
                src={t1} 
                alt="Truck" 
                className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 object-cover rounded-xl shadow-lg border-2 border-gray-200"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

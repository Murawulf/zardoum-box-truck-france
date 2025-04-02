
import React from 'react';
import { User, Award, ThumbsUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">À Propos d'Anwar Zardoum</h2>
            <p className="text-lg text-gray-600 mb-6">
              Fort de plusieurs années d'expérience dans le déménagement et le montage de meubles, je propose un service personnalisé et professionnel pour répondre à tous vos besoins de déménagement en Tunisie.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <User className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-gray-900 font-medium">Professionnel</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Award className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-gray-900 font-medium">Expérimenté</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <ThumbsUp className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-gray-900 font-medium">Fiable</span>
              </div>
            </div>
            <p className="text-lg text-gray-600">
              Équipé d'un camion Nissan adapté pour le transport de mobilier, je garantis un service sûr et efficace pour tous vos besoins de déménagement, qu'il s'agisse d'un simple meuble ou d'un appartement complet.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-blue-500 opacity-80 z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?q=80&w=1887')] bg-cover bg-center"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-white text-center p-6">
                  <h3 className="text-3xl font-bold mb-2">Anwar Zardoum</h3>
                  <p className="text-xl mb-4">Spécialiste du déménagement</p>
                  <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg">
                    Équipé d'un camion Nissan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

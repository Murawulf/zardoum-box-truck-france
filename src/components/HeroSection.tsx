
import React from 'react';
import { Phone, Truck, PackageOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const HeroSection = () => {
  const { translate } = useLanguage();

  const movingImages = [
    "https://images.unsplash.com/photo-6nIkztwmYMQ?q=80&w=2070",  // Delivery man with boxes in van
    "https://images.unsplash.com/photo-66NaCdBrkCs?q=80&w=2070",  // Brown cardboard boxes
    "https://images.unsplash.com/photo-crHhZlES310?q=80&w=2070",  // White moving truck
    "https://images.unsplash.com/photo-1584472135216-7177ff862540?q=80&w=2069",  // TV being wall mounted
    "https://images.unsplash.com/photo-1579750083105-7e6c73597219?q=80&w=2070"   // Chandelier installation
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-6nIkztwmYMQ?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {translate('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {translate('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+21698508600" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {translate('hero.callToAction')}
              </a>
              <a 
                href="#services" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                <PackageOpen className="w-5 h-5" />
                {translate('hero.services')}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {movingImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="relative overflow-hidden rounded-lg shadow-xl">
                        <img 
                          src={src} 
                          alt={`Moving service ${index + 1}`} 
                          className="w-full h-72 object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            <div className="absolute -bottom-10 -right-10 z-0 opacity-20">
              <Truck className="w-40 h-40 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

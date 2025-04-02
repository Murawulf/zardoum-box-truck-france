import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define types for our languages and translations
type Language = 'fr' | 'en' | 'ar';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations for all the text on the website
const translations = {
  // Header
  'nav.services': {
    fr: 'Services',
    en: 'Services',
    ar: 'الخدمات'
  },
  'nav.about': {
    fr: 'À Propos',
    en: 'About',
    ar: 'حول'
  },
  'nav.contact': {
    fr: 'Contact',
    en: 'Contact',
    ar: 'اتصل بنا'
  },
  
  // Hero Section
  'hero.title': {
    fr: 'Service de Déménagement Professionnel à Al Kalaa, Tunisie',
    en: 'Professional Moving Service in Al Kalaa, Tunisia',
    ar: 'خدمة نقل احترافية في القلعة، تونس'
  },
  'hero.description': {
    fr: 'Montage, démontage et déménagement de vos meubles par un professionnel avec camion Nissan sur toute la Tunisie',
    en: 'Assembly, disassembly and moving of your furniture by a professional with Nissan truck throughout Tunisia',
    ar: 'تركيب وتفكيك ونقل أثاثك بواسطة محترف مع شاحنة نيسان في جميع أنحاء تونس'
  },
  'hero.callToAction': {
    fr: 'Appeler maintenant',
    en: 'Call now',
    ar: 'اتصل الآن'
  },
  'hero.services': {
    fr: 'Nos services',
    en: 'Our services',
    ar: 'خدماتنا'
  },
  
  // Services Section
  'services.title': {
    fr: 'Nos Services',
    en: 'Our Services',
    ar: 'خدماتنا'
  },
  'services.description': {
    fr: 'Nous offrons des services complets pour faciliter votre déménagement, du démontage à l\'installation.',
    en: 'We offer comprehensive services to facilitate your move, from disassembly to installation.',
    ar: 'نقدم خدمات شاملة لتسهيل انتقالك، من التفكيك إلى التركيب.'
  },
  'services.disassembly.title': {
    fr: 'Démontage de Meubles',
    en: 'Furniture Disassembly',
    ar: 'تفكيك الأثاث'
  },
  'services.disassembly.description': {
    fr: 'Démontage professionnel de tous types de meubles avec soin et précision pour garantir une manipulation sans dommages.',
    en: 'Professional disassembly of all types of furniture with care and precision to ensure damage-free handling.',
    ar: 'تفكيك احترافي لجميع أنواع الأثاث بعناية ودقة لضمان التعامل دون أضرار.'
  },
  'services.moving.title': {
    fr: 'Déménagement',
    en: 'Moving',
    ar: 'نقل الأثاث'
  },
  'services.moving.description': {
    fr: 'Transport sécurisé de vos meubles et effets personnels avec notre camion Nissan spacieux, adapté à tous types de déménagements.',
    en: 'Secure transport of your furniture and personal belongings with our spacious Nissan truck, suitable for all types of moves.',
    ar: 'نقل آمن لأثاثك ومتعلقاتك الشخصية مع شاحنتنا نيسان الواسعة، المناسبة لجميع أنواع النقل.'
  },
  'services.assembly.title': {
    fr: 'Montage de Meubles',
    en: 'Furniture Assembly',
    ar: 'تركيب الأثاث'
  },
  'services.assembly.description': {
    fr: 'Assemblage et installation de vos meubles à votre nouvelle adresse, avec rapidité et expertise.',
    en: 'Assembly and installation of your furniture at your new address, with speed and expertise.',
    ar: 'تجميع وتركيب أثاثك في عنوانك الجديد، بسرعة وخبرة.'
  },
  
  // About Section
  'about.title': {
    fr: 'À Propos d\'Anwar Zardoum',
    en: 'About Anwar Zardoum',
    ar: 'عن أنور زردوم'
  },
  'about.description': {
    fr: 'Fort de plusieurs années d\'expérience dans le déménagement et le montage de meubles, je propose un service personnalisé et professionnel pour répondre à tous vos besoins de déménagement en Tunisie.',
    en: 'With several years of experience in moving and furniture assembly, I offer a personalized and professional service to meet all your moving needs in Tunisia.',
    ar: 'مع سنوات عديدة من الخبرة في النقل وتجميع الأثاث، أقدم خدمة شخصية واحترافية لتلبية جميع احتياجات النقل الخاصة بك في تونس.'
  },
  'about.professional': {
    fr: 'Professionnel',
    en: 'Professional',
    ar: 'محترف'
  },
  'about.experienced': {
    fr: 'Expérimenté',
    en: 'Experienced',
    ar: 'ذو خبرة'
  },
  'about.reliable': {
    fr: 'Fiable',
    en: 'Reliable',
    ar: 'موثوق'
  },
  'about.equipment': {
    fr: 'Équipé d\'un camion Nissan adapté pour le transport de mobilier, je garantis un service sûr et efficace pour tous vos besoins de déménagement, qu\'il s\'agisse d\'un simple meuble ou d\'un appartement complet.',
    en: 'Equipped with a Nissan truck suitable for furniture transportation, I guarantee a safe and efficient service for all your moving needs, whether it\'s a single piece of furniture or an entire apartment.',
    ar: 'مجهز بشاحنة نيسان مناسبة لنقل الأثاث، أضمن خدمة آمنة وفعالة لجميع احتياجات النقل الخاصة بك، سواء كانت قطعة أثاث واحدة أو شقة كاملة.'
  },
  'about.specialist': {
    fr: 'Spécialiste du déménagement',
    en: 'Moving specialist',
    ar: 'متخصص في النقل'
  },
  'about.truck': {
    fr: 'Équipé d\'un camion Nissan',
    en: 'Equipped with a Nissan truck',
    ar: 'مجهز بشاحنة نيسان'
  },
  
  // Why Choose Us
  'whyChooseUs.title': {
    fr: 'Pourquoi Me Choisir',
    en: 'Why Choose Me',
    ar: 'لماذا تختارني'
  },
  'whyChooseUs.description': {
    fr: 'Un service personnalisé et professionnel pour répondre à tous vos besoins de déménagement.',
    en: 'A personalized and professional service to meet all your moving needs.',
    ar: 'خدمة شخصية واحترافية لتلبية جميع احتياجات النقل الخاصة بك.'
  },
  'whyChooseUs.reliable.title': {
    fr: 'Service Fiable',
    en: 'Reliable Service',
    ar: 'خدمة موثوقة'
  },
  'whyChooseUs.reliable.description': {
    fr: 'Je garantis un service sûr et soigneux pour la manipulation de vos meubles et effets personnels.',
    en: 'I guarantee a safe and careful service for handling your furniture and personal belongings.',
    ar: 'أضمن خدمة آمنة وحريصة للتعامل مع أثاثك ومتعلقاتك الشخصية.'
  },
  'whyChooseUs.punctual.title': {
    fr: 'Ponctualité',
    en: 'Punctuality',
    ar: 'الالتزام بالمواعيد'
  },
  'whyChooseUs.punctual.description': {
    fr: 'Je respecte les délais convenus et m\'assure que votre déménagement se déroule selon le planning établi.',
    en: 'I respect agreed deadlines and ensure that your move goes according to the established schedule.',
    ar: 'أحترم المواعيد المتفق عليها وأضمن أن يتم نقلك وفقًا للجدول الزمني المحدد.'
  },
  'whyChooseUs.equipment.title': {
    fr: 'Équipement Adapté',
    en: 'Suitable Equipment',
    ar: 'معدات مناسبة'
  },
  'whyChooseUs.equipment.description': {
    fr: 'Mon camion Nissan est parfaitement adapté pour le transport de tous types de meubles en toute sécurité.',
    en: 'My Nissan truck is perfectly suited for safely transporting all types of furniture.',
    ar: 'شاحنتي نيسان مناسبة تمامًا لنقل جميع أنواع الأثاث بأمان.'
  },
  'whyChooseUs.price.title': {
    fr: 'Prix Compétitifs',
    en: 'Competitive Prices',
    ar: 'أسعار تنافسية'
  },
  'whyChooseUs.price.description': {
    fr: 'Je propose des tarifs abordables sans compromettre la qualité du service offert.',
    en: 'I offer affordable rates without compromising the quality of service provided.',
    ar: 'أقدم أسعارًا معقولة دون المساس بجودة الخدمة المقدمة.'
  },
  
  // Contact Section
  'contact.title': {
    fr: 'Contactez-Nous',
    en: 'Contact Us',
    ar: 'اتصل بنا'
  },
  'contact.description': {
    fr: 'Besoin d\'un devis ou d\'informations supplémentaires ? N\'hésitez pas à nous contacter.',
    en: 'Need a quote or additional information? Don\'t hesitate to contact us.',
    ar: 'بحاجة إلى عرض سعر أو معلومات إضافية؟ لا تتردد في الاتصال بنا.'
  },
  'contact.info': {
    fr: 'Informations de Contact',
    en: 'Contact Information',
    ar: 'معلومات الاتصال'
  },
  'contact.phone': {
    fr: 'Téléphone',
    en: 'Phone',
    ar: 'الهاتف'
  },
  'contact.callNow': {
    fr: 'Appeler maintenant',
    en: 'Call now',
    ar: 'اتصل الآن'
  },
  'contact.hours': {
    fr: 'Horaires',
    en: 'Hours',
    ar: 'ساعات العمل'
  },
  'contact.weekdays': {
    fr: 'Lundi - Samedi: 8h - 19h',
    en: 'Monday - Saturday: 8am - 7pm',
    ar: 'الاثنين - السبت: 8 ص - 7 م'
  },
  'contact.sunday': {
    fr: 'Dimanche: Sur rendez-vous',
    en: 'Sunday: By appointment',
    ar: 'الأحد: بموعد مسبق'
  },
  'contact.serviceArea': {
    fr: 'Zone de Service',
    en: 'Service Area',
    ar: 'منطقة الخدمة'
  },
  'contact.coverage': {
    fr: 'Toute la Tunisie',
    en: 'All of Tunisia',
    ar: 'جميع أنحاء تونس'
  },
  'contact.quote': {
    fr: 'Demander un Devis',
    en: 'Request a Quote',
    ar: 'طلب عرض سعر'
  },
  'contact.quoteDescription': {
    fr: 'Pour un devis personnalisé, appelez-nous directement ou laissez-nous vos coordonnées et nous vous contacterons dans les plus brefs délais.',
    en: 'For a personalized quote, call us directly or leave us your contact information and we will contact you as soon as possible.',
    ar: 'للحصول على عرض سعر مخصص، اتصل بنا مباشرة أو اترك لنا معلومات الاتصال الخاصة بك وسنتصل بك في أقرب وقت ممكن.'
  },
  
  // CTA Section
  'cta.title': {
    fr: 'Prêt pour votre déménagement en Tunisie ?',
    en: 'Ready for your move in Tunisia?',
    ar: 'هل أنت مستعد للانتقال في تونس؟'
  },
  'cta.description': {
    fr: 'Contactez-moi dès aujourd\'hui pour obtenir un devis gratuit et planifier votre déménagement sans stress à Al Kalaa et partout en Tunisie.',
    en: 'Contact me today to get a free quote and plan your stress-free move in Al Kalaa and throughout Tunisia.',
    ar: 'اتصل بي اليوم للحصول على عرض سعر مجاني وتخطيط نقلك بدون توتر في القلعة وفي جميع أنحاء تونس.'
  },
  'cta.callNow': {
    fr: 'Appelez au 98 508 600',
    en: 'Call 98 508 600',
    ar: 'اتصل على 98 508 600'
  },
  
  // Footer
  'footer.professionalService': {
    fr: 'Service de déménagement professionnel',
    en: 'Professional moving service',
    ar: 'خدمة نقل احترافية'
  },
  'footer.location': {
    fr: 'Al Kalaa, Tunisie',
    en: 'Al Kalaa, Tunisia',
    ar: 'القلعة، تونس'
  },
  'footer.rights': {
    fr: 'Tous droits réservés.',
    en: 'All rights reserved.',
    ar: 'جميع الحقوق محفوظة.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');

  // Function to set the language
  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    
    // For RTL support when using Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  // Function to translate text based on the current language
  const translate = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) return key;
    return translation[currentLanguage] || key;
  };

  // Init language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['fr', 'en', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const value = {
    currentLanguage,
    setLanguage,
    translate
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

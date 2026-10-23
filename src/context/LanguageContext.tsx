import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string, fallback?: string) => string;
}

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Nav & Brand
    'nav.trades': '10 Trades',
    'nav.work': 'Our Work',
    'nav.reviews': 'Reviews',
    'nav.coverage': 'NY, NJ & CT',
    'nav.estimate': 'Free Estimate',
    'nav.writtenEstimate': 'Free Written Estimate',
    'nav.call': 'Call',
    'brand.subtitle': 'Home Improvement Contractor',
    'brand.serving': 'Serving NY, NJ & CT',
    'brand.entity': 'Lic #13VH13437500 · Serving NY, NJ & CT',

    // Hero Section
    'hero.kicker.lic': 'Licensed & Insured Contractor LLC',
    'hero.kicker.serving': 'Serving NY, NJ and Connecticut',
    'hero.kicker.code': 'Tri-State Building Code Compliant',
    'hero.title.prefix': 'Master Craftsmanship.',
    'hero.title.highlight': 'Serving NY, NJ and Connecticut.',
    'hero.desc': 'Direct owner-supervised construction delivering structural composite decks, precision roofing, luxury kitchen and bath remodels, additions, and complete interior restorations across New York, New Jersey, and Connecticut. Guaranteed written timelines with zero subcontracting runaround.',
    'hero.selectPrompt': 'Select your project type for instant priority estimate:',
    'hero.allTrades': 'All 10 Trades',
    'hero.btn.consult': 'Schedule Free Consultation',
    'hero.btn.call': '(609) 356-9141',
    'hero.rating': '5.0 / 5.0',
    'hero.verifiedReviews': '(150+ Verified Reviews)',
    'hero.ratingSub': 'Top-Rated Licensed Home Improvement across NY, NJ & Connecticut',
    'hero.stat.years': '15+',
    'hero.stat.yearsLabel': 'Years Tri-State Experience',
    'hero.stat.pass': '100%',
    'hero.stat.passLabel': 'Township Code Pass Rate',
    'hero.stat.sub': '0%',
    'hero.stat.subLabel': 'Subcontractor Runaround',
    
    // Hero Badges & Stage
    'hero.badge.owner': 'Owner-Supervised Site',
    'hero.badge.today': 'TODAY',
    'hero.badge.ownerSub': 'Master Builder Vasquez On Daily Execution',
    'hero.badge.estimate': 'Guaranteed Written Estimate',
    'hero.badge.surprises': '0% SURPRISES',
    'hero.badge.estimateSub': '100% Township Inspection Approval Record',
    'hero.badge.dispatch': 'Serving NY, NJ & Connecticut',
    'hero.mobile.owner': 'Owner on Every Site',
    'hero.mobile.serving': 'Serving NY, NJ & CT',

    // Value Pillars
    'pillar.1.title': 'Written Price Guarantee',
    'pillar.1.desc': 'Fixed itemized quotes with zero hidden change orders',
    'pillar.2.title': 'Owner on Every Site',
    'pillar.2.desc': 'Master builder Vasquez directly leads daily jobsite execution',
    'pillar.3.title': 'Township Code Pass',
    'pillar.3.desc': 'Full permitting and 100% municipal inspection approval',
    'pillar.4.title': 'Total Site Protection',
    'pillar.4.desc': 'Dust containment, floor shield runners, and daily cleanup',

    // Trades Section
    'trades.kicker': 'One Company. All Solutions.',
    'trades.title': '10 Master Trades Under One Roof',
    'trades.desc': 'No juggling separate subcontractors. Select any trade to inspect our architectural specifications, NY, NJ, and CT building code compliance, and certified materials.',
    'trades.btn.quote': 'Get Priority Quote',
    'trades.btn.calc': 'Open Free Price Estimator',

    // Service Area Section
    'area.kicker': 'Tri-State Service Corridor',
    'area.title': 'Serving NY, NJ and Connecticut',
    'area.desc': 'We know New York, New Jersey, and Connecticut municipal building codes inside and out. Select your state or region to inspect active covered towns, dispatch windows, and municipal permit turnaround.',
    'area.filter.all': 'All Tri-State (NY, NJ, CT)',
    'area.filter.nj': 'New Jersey',
    'area.filter.ny': 'New York',
    'area.filter.ct': 'Connecticut',
    'area.requestVisit': 'Request On-Site Visit',
    'area.callDispatch': 'Call Dispatch',

    // Estimate Modal & Contact Form
    'modal.title': 'Request Your Free On-Site Quote',
    'modal.subtitle': 'Licensed Contractor · Serving NY, NJ & Connecticut',
    'modal.name': 'Full Name *',
    'modal.phone': 'Phone Number *',
    'modal.town': 'City, Township & State *',
    'modal.service': 'Trade Service Needed',
    'modal.submit': 'Send Priority Quote Request',
    'modal.successTitle': 'Estimate Request Received!',
    'modal.successDesc': 'Our master contractor will call you within 2 hours to review your project.',
    'modal.close': 'Close Window',

    // Footer
    'footer.companyDesc': 'We build, remodel, and elevate homes across New York, New Jersey, and Connecticut with master craftsmanship. Decks, patios, roofing, plumbing, remodeling, additions, masonry, painting, pressure washing, and tree trimming.',
    'footer.rights': 'All rights reserved. Serving NY, NJ and Connecticut.'
  },
  es: {
    // Nav & Brand
    'nav.trades': '10 Oficios',
    'nav.work': 'Nuestros Trabajos',
    'nav.reviews': 'Opiniones',
    'nav.coverage': 'NY, NJ y CT',
    'nav.estimate': 'Presupuesto Gratis',
    'nav.writtenEstimate': 'Presupuesto Escrito Gratuito',
    'nav.call': 'Llamar',
    'brand.subtitle': 'Contratista de Mejoras del Hogar',
    'brand.serving': 'Sirviendo NY, NJ y CT',
    'brand.entity': 'Lic #13VH13437500 · Sirviendo NY, NJ y CT',

    // Hero Section
    'hero.kicker.lic': 'Contratista Licenciado y Asegurado LLC',
    'hero.kicker.serving': 'Sirviendo NY, NJ y Connecticut',
    'hero.kicker.code': 'Cumplimiento de Códigos Triestatales',
    'hero.title.prefix': 'Maestría Artesanal.',
    'hero.title.highlight': 'Sirviendo NY, NJ y Connecticut.',
    'hero.desc': 'Construcción directa supervisada por el dueño: terrazas de compuesto estructural, techado de precisión, remodelación de cocinas y baños, ampliaciones y restauraciones completas en Nueva York, Nueva Jersey y Connecticut. Plazos garantizados por escrito sin intermediarios.',
    'hero.selectPrompt': 'Seleccione su tipo de proyecto para presupuesto prioritario:',
    'hero.allTrades': 'Los 10 Oficios',
    'hero.btn.consult': 'Agendar Consulta Gratuita',
    'hero.btn.call': '(609) 356-9141',
    'hero.rating': '5.0 / 5.0',
    'hero.verifiedReviews': '(150+ Reseñas Verificadas)',
    'hero.ratingSub': 'Contratista mejor calificado en Nueva York, Nueva Jersey y Connecticut',
    'hero.stat.years': '15+',
    'hero.stat.yearsLabel': 'Años de Experiencia Triestatal',
    'hero.stat.pass': '100%',
    'hero.stat.passLabel': 'Aprobación de Códigos Municipales',
    'hero.stat.sub': '0%',
    'hero.stat.subLabel': 'Desvíos de Subcontratistas',
    
    // Hero Badges & Stage
    'hero.badge.owner': 'Supervisado por el Dueño',
    'hero.badge.today': 'HOY',
    'hero.badge.ownerSub': 'Maestro Constructor Vasquez en Ejecución Diaria',
    'hero.badge.estimate': 'Presupuesto Escrito Garantizado',
    'hero.badge.surprises': '0% SORPRESAS',
    'hero.badge.estimateSub': '100% de Aprobación en Inspecciones Municipales',
    'hero.badge.dispatch': 'Sirviendo NY, NJ y Connecticut',
    'hero.mobile.owner': 'El Dueño en Cada Obra',
    'hero.mobile.serving': 'Sirviendo NY, NJ y CT',

    // Value Pillars
    'pillar.1.title': 'Garantía de Precio por Escrito',
    'pillar.1.desc': 'Cotizaciones fijas y detalladas sin costos ocultos imprevistos',
    'pillar.2.title': 'El Dueño en Cada Obra',
    'pillar.2.desc': 'El maestro Vasquez lidera directamente los trabajos diarios',
    'pillar.3.title': 'Aprobación de Códigos Locales',
    'pillar.3.desc': 'Tramitación completa y 100% de aprobación en inspecciones',
    'pillar.4.title': 'Protección Total de su Hogar',
    'pillar.4.desc': 'Contención de polvo, protectores de piso y limpieza diaria',

    // Trades Section
    'trades.kicker': 'Una Sola Empresa. Todas Las Soluciones.',
    'trades.title': '10 Oficios Maestros Bajo Un Mismo Techo',
    'trades.desc': 'Sin lidiar con subcontratistas separados. Inspeccione nuestras especificaciones arquitectónicas, cumplimiento de códigos de NY, NJ y CT, y materiales certificados.',
    'trades.btn.quote': 'Solicitar Presupuesto',
    'trades.btn.calc': 'Abrir Calculadora de Precios',

    // Service Area Section
    'area.kicker': 'Corredor de Servicio Triestatal',
    'area.title': 'Sirviendo NY, NJ y Connecticut',
    'area.desc': 'Conocemos los códigos de construcción de Nueva York, Nueva Jersey y Connecticut a la perfección. Seleccione su estado o región para consultar municipios activos y tiempos de respuesta.',
    'area.filter.all': 'Todo el Triestatal (NY, NJ, CT)',
    'area.filter.nj': 'Nueva Jersey',
    'area.filter.ny': 'Nueva York',
    'area.filter.ct': 'Connecticut',
    'area.requestVisit': 'Solicitar Visita en el Sitio',
    'area.callDispatch': 'Llamar al Despacho',

    // Estimate Modal & Contact Form
    'modal.title': 'Solicite su Presupuesto Gratuito en su Hogar',
    'modal.subtitle': 'Contratista Licenciado · Sirviendo NY, NJ y Connecticut',
    'modal.name': 'Nombre Completo *',
    'modal.phone': 'Número de Teléfono *',
    'modal.town': 'Ciudad, Municipio y Estado *',
    'modal.service': 'Servicio Requerido',
    'modal.submit': 'Enviar Solicitud de Presupuesto',
    'modal.successTitle': '¡Solicitud de Presupuesto Recibida!',
    'modal.successDesc': 'Nuestro maestro contratista le llamará dentro de 2 horas para revisar los detalles.',
    'modal.close': 'Cerrar Ventana',

    // Footer
    'footer.companyDesc': 'Construimos, remodelamos y elevamos hogares en Nueva York, Nueva Jersey y Connecticut con maestría artesanal. Terrazas, patios, techado, plomería, remodelaciones, ampliaciones, albañilería, pintura y lavado a presión.',
    'footer.rights': 'Todos los derechos reservados. Sirviendo NY, NJ y Connecticut.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('vasquez_app_lang');
      if (saved === 'es' || saved === 'en') return saved;
      // Auto-detect browser language if Spanish
      if (typeof navigator !== 'undefined' && navigator.language?.startsWith('es')) {
        return 'es';
      }
      return 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('vasquez_app_lang', newLang);
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  const t = (key: string, fallback?: string): string => {
    const val = TRANSLATIONS[lang]?.[key];
    if (val) return val;
    return fallback || TRANSLATIONS['en']?.[key] || key;
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

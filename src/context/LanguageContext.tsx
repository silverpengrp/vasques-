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
    'nav.trades': 'Trades',
    'nav.work': 'Work',
    'nav.reviews': 'Reviews',
    'nav.coverage': 'NY, NJ & CT',
    'nav.estimate': 'Free Estimate',
    'nav.writtenEstimate': 'Free Written Estimate',
    'nav.call': 'Call',
    'brand.subtitle': 'Home Improvement Contractor',
    'brand.serving': 'Serving NY, NJ & CT',
    'brand.entity': 'Lic #13VH13437500 · Serving NY, NJ & CT',
    'brand.slogan': 'One Company. All Solutions.',
    'brand.motto': 'WE BUILD. WE IMPROVE. YOU ENJOY.',

    // PWA Install Banner
    'pwa.title': 'Vasquez App',
    'pwa.badge': 'PWA',
    'pwa.desc': 'Add to Home Screen for fast estimates & offline access',
    'pwa.iosHint': 'Tap Share then "Add to Home Screen"',
    'pwa.gotIt': 'Got it',
    'pwa.install': 'Install App',
    'pwa.later': 'Later',

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
    'trades.trust.serving': 'Serving NY, NJ & Connecticut',
    'trades.trust.insurance': '$2,000,000 Liability Insured',
    'trades.trust.crew': 'Dedicated Permanent In-House Crew',
    'trades.requestEstimate': 'Request Free Estimate for',
    'trades.scopeTitle': 'Scope & Architectural Overview',
    'trades.specsTitle': 'Key Construction Specifications',
    'trades.materialsTitle': 'Certified Commercial Materials',
    'trades.codeGuarantee': 'Building Code & Permitting Guarantee',
    'trades.warrantyTitle': 'Warranty & Protection',
    'trades.crewPromiseTitle': 'Vasquez Direct Crew Promise',
    'trades.crewPromiseDesc': "All carpentry, roofing, framing, and masonry is completed by Carlos Vasquez and our dedicated permanent craftsmen. We never hand off your family's home to random third-party day labor.",
    'trades.scheduleConsult': 'Schedule Consultation for',

    // All Before & After Gallery
    'gallery.kicker': 'Verified Tri-State Transformations',
    'gallery.title': 'Master Craftsmanship In Action',
    'gallery.desc': 'Inspect the clean lines, structural longevity, and code-compliant installations delivered across New York, New Jersey, and Connecticut.',
    'gallery.filter.all': 'All Projects',
    'gallery.filter.deck': 'Decks & Patios',
    'gallery.filter.remodel': 'Kitchen & Bath',
    'gallery.filter.roof': 'Roofing',
    'gallery.before': 'Before Renovation',
    'gallery.after': 'Vasquez Finished Craft',
    'gallery.dragHint': 'Drag white handle left & right to move both images',
    'gallery.timeline': 'Timeline',
    'gallery.footprint': 'Footprint',
    'gallery.requestSimilar': 'Request Similar Transformation',
    'gallery.browseCategory': 'Browse All Projects In This Category',
    'gallery.clickThumbnail': 'Click any thumbnail to load',
    'gallery.fullInspect': 'Inspect Fullscreen',
    'gallery.modalTitle': 'High-Resolution Transformation Inspection',
    'gallery.modalClose': 'Close Inspection',

    // Service Area Section
    'area.kicker': 'Tri-State Service Corridor',
    'area.title': 'Serving NY, NJ and Connecticut',
    'area.desc': 'We know New York, New Jersey, and Connecticut municipal building codes inside and out. Select your state or region to inspect active covered towns, dispatch windows, and municipal permit turnaround.',
    'area.badge.title': 'Central Tri-State Mobilization',
    'area.badge.subtitle': 'Active Crews in NY, NJ & CT',
    'area.filterLabel': 'Filter State:',
    'area.filter.all': 'All Tri-State (NY, NJ, CT)',
    'area.filter.nj': 'New Jersey',
    'area.filter.ny': 'New York',
    'area.filter.ct': 'Connecticut',
    'area.activeMun': 'Active Municipalities Served in',
    'area.coveredTowns': 'Covered Towns & Townships',
    'area.recentProjects': 'Recent Projects in',
    'area.responseWindow': 'Estimate Response Window',
    'area.permittingKnowledge': 'Building Department Permitting Knowledge',
    'area.requestVisit': 'Request On-Site Visit',
    'area.callDispatch': 'Call Dispatch',

    // Reviews Section
    'reviews.kicker': 'Real Homeowner Testimonials',
    'reviews.title': 'Verified 5-Star Craftsmanship in Action',
    'reviews.filter.all': 'All Reviews',
    'reviews.filter.decks': 'Decks & Patios',
    'reviews.filter.roofing': 'Roofing',
    'reviews.filter.remodeling': 'Remodeling',
    'reviews.filter.painting': 'Masonry & Paint',
    'reviews.verified': 'Verified',
    'reviews.cta.title': 'Ready for the 5-Star Vasquez Standard on Your Home?',
    'reviews.cta.desc': 'All 10 trades performed under one contract. Fully licensed, bonded, and insured across NY, NJ, and Connecticut.',
    'reviews.cta.call': '(609) 481-8197',
    'reviews.cta.btn': 'Free Estimate',

    // Contact Section
    'contact.kicker': 'Direct Contractor Access',
    'contact.title': 'Schedule Your Free On-Site Consultation',
    'contact.desc': 'No high-pressure salespeople. You speak directly with our master builder who reviews your plans and provides a guaranteed written estimate.',
    'contact.hotlineTitle': 'Master Contractor Hotline',
    'contact.hotlineDesc': 'Call or text for immediate scheduling. Speak with ownership directly regarding blueprints, emergency roof tarping, plumbing leaks, or new deck consultations.',
    'contact.hotlineBtn': 'Call +1 (609) 481-8197 Now',
    'contact.hqTitle': 'Headquarters & Service Radius',
    'contact.hqDesc': 'Serving NY, NJ and Connecticut (Full Tri-State residential & commercial coverage)',
    'contact.hoursTitle': 'Operating Hours',
    'contact.hoursDesc': 'Monday – Saturday: 7:00 AM – 7:00 PM',
    'contact.emergencyDesc': '24/7 Priority Emergency Storm & Roof Repair',
    'contact.entityTitle': 'Tri-State Contractor Entity',
    'contact.entityDesc': 'Vasquez Home Improvement Contractor LLC · Serving NY, NJ & CT · Fully Insured',
    'contact.formTitle': 'Request Your Free Consultation',
    'contact.formDesc': 'Fill in your property location and project requirements. We respect your privacy and never sell information.',
    'contact.nameLabel': 'Your Full Name *',
    'contact.namePlaceholder': 'e.g. Michael Rossi',
    'contact.phoneLabel': 'Phone Number *',
    'contact.emailLabel': 'Email Address',
    'contact.townLabel': 'City, Township & State *',
    'contact.townPlaceholder': 'e.g. Princeton NJ, White Plains NY, or Stamford CT',
    'contact.serviceLabel': 'Trade Service Needed *',
    'contact.multipleTrades': 'Multiple Trades / Whole House',
    'contact.timeframeLabel': 'Ideal Start Timeframe',
    'contact.timeframe.emergency': 'Emergency (Next 48 Hours)',
    'contact.timeframe.soon': 'Within 2–3 Weeks',
    'contact.timeframe.medium': 'Next 1–2 Months',
    'contact.timeframe.planning': 'Flexible / Planning Phase',
    'contact.notesLabel': 'Project Scope / Notes',
    'contact.notesPlaceholder': 'Describe your vision, approximate square footage, existing conditions, or any specific materials...',
    'contact.submitBtn': 'Send Free Estimate Request',
    'contact.successTitle': 'Estimate Request Received!',
    'contact.successMessage': 'Our master builder will review your project details and reach out within 2 hours.',
    'contact.submitAnother': 'Submit Another Project Inquiry',

    // Estimate Modal
    'modal.title': 'Request Your Free On-Site Quote',
    'modal.subtitle': 'Licensed Contractor · Serving NY, NJ & Connecticut',
    'modal.name': 'Full Name *',
    'modal.phone': 'Phone Number *',
    'modal.town': 'City, Township & State *',
    'modal.service': 'Trade Service Needed',
    'modal.notes': 'Brief Project Description',
    'modal.notesPlaceholder': 'Describe what you want built, repaired, or updated...',
    'modal.submit': 'Send Priority Quote Request',
    'modal.successTitle': 'Estimate Request Received!',
    'modal.successDesc': 'Our master contractor will call you within 2 hours to review your project.',
    'modal.close': 'Close Window',
    'modal.directCall': 'Or call ownership directly:',

    // Mobile App Tab Bar
    'tab.home': 'Home',
    'tab.work': 'Our Work',
    'tab.call': 'Call',
    'tab.trades': 'Trades',
    'tab.estimate': 'Estimate',
    'tab.sheetTitle': 'Vasquez HIC App',
    'tab.reviews': '5-Star Reviews',
    'tab.coverage': 'NY, NJ & CT',

    // Footer
    'footer.companyDesc': 'We build, remodel, and elevate homes across New York, New Jersey, and Connecticut with master craftsmanship. Decks, patios, roofing, plumbing, remodeling, additions, masonry, painting, pressure washing, and tree trimming.',
    'footer.licenseBadge': 'Licensed & Fully Insured Contractor LLC',
    'footer.insuranceDetails': "General Liability Insurance • Workman's Compensation • Serving NY, NJ & CT",
    'footer.coreServices': 'Our 10 Core Services',
    'footer.directContact': 'Direct Contact',
    'footer.callOrText': 'Call Or Text',
    'footer.hours': 'Mon - Sat: 7:00 AM - 7:00 PM',
    'footer.emergency': '24/7 Emergency Storm Dispatch',
    'footer.getEstimate': 'Get Free Estimate',
    'footer.rights': 'All Rights Reserved.',
    'footer.backToTop': 'Back To Top'
  },
  es: {
    // Nav & Brand
    'nav.trades': 'Oficios',
    'nav.work': 'Trabajos',
    'nav.reviews': 'Opiniones',
    'nav.coverage': 'NY, NJ y CT',
    'nav.estimate': 'Presupuesto Gratis',
    'nav.writtenEstimate': 'Presupuesto Escrito Gratuito',
    'nav.call': 'Llamar',
    'brand.subtitle': 'Contratista de Mejoras del Hogar',
    'brand.serving': 'Sirviendo NY, NJ y CT',
    'brand.entity': 'Lic #13VH13437500 · Sirviendo NY, NJ y CT',
    'brand.slogan': 'Una Sola Empresa. Todas Las Soluciones.',
    'brand.motto': 'CONSTRUIMOS. MEJORAMOS. USTED DISFRUTA.',

    // PWA Install Banner
    'pwa.title': 'Aplicación Vasquez',
    'pwa.badge': 'PWA',
    'pwa.desc': 'Agregue a la pantalla de inicio para presupuestos rápidos y acceso sin conexión',
    'pwa.iosHint': 'Toque Compartir y luego "Agregar a pantalla de inicio"',
    'pwa.gotIt': 'Entendido',
    'pwa.install': 'Instalar App',
    'pwa.later': 'Más tarde',

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
    'trades.trust.serving': 'Sirviendo NY, NJ y Connecticut',
    'trades.trust.insurance': 'Seguro de Responsabilidad por $2,000,000',
    'trades.trust.crew': 'Equipo Propio Permanente Especializado',
    'trades.requestEstimate': 'Solicitar Presupuesto Gratuito para',
    'trades.scopeTitle': 'Alcance y Visión Arquitectónica',
    'trades.specsTitle': 'Especificaciones Clave de Construcción',
    'trades.materialsTitle': 'Materiales Comerciales Certificados',
    'trades.codeGuarantee': 'Garantía de Permisos y Códigos de Construcción',
    'trades.warrantyTitle': 'Garantía y Protección',
    'trades.crewPromiseTitle': 'Compromiso de Equipo Directo Vasquez',
    'trades.crewPromiseDesc': 'Toda la carpintería, techado, estructuras y albañilería es realizada por Carlos Vasquez y nuestro equipo permanente. Jamás delegamos el hogar de su familia a mano de obra subcontratada casual.',
    'trades.scheduleConsult': 'Agendar Consulta para',

    // All Before & After Gallery
    'gallery.kicker': 'Transformaciones Triestatales Verificadas',
    'gallery.title': 'Maestría Artesanal En Acción',
    'gallery.desc': 'Inspeccione la precisión en las líneas, durabilidad estructural y acabados conforme a códigos en Nueva York, Nueva Jersey y Connecticut.',
    'gallery.filter.all': 'Todos los Proyectos',
    'gallery.filter.deck': 'Terrazas y Patios',
    'gallery.filter.remodel': 'Cocinas y Baños',
    'gallery.filter.roof': 'Techados',
    'gallery.before': 'Antes de la Renovación',
    'gallery.after': 'Acabado Maestro Vasquez',
    'gallery.dragHint': 'Arrastre la manija blanca para comparar ambas imágenes',
    'gallery.timeline': 'Tiempo Estimado',
    'gallery.footprint': 'Superficie',
    'gallery.requestSimilar': 'Solicitar Transformación Similar',
    'gallery.browseCategory': 'Explorar Todos los Proyectos en Esta Categoría',
    'gallery.clickThumbnail': 'Haga clic en una miniatura para cargar',
    'gallery.fullInspect': 'Inspeccionar a Pantalla Completa',
    'gallery.modalTitle': 'Inspección de Transformación en Alta Resolución',
    'gallery.modalClose': 'Cerrar Inspección',

    // Service Area Section
    'area.kicker': 'Corredor de Servicio Triestatal',
    'area.title': 'Sirviendo NY, NJ y Connecticut',
    'area.desc': 'Conocemos los códigos de construcción de Nueva York, Nueva Jersey y Connecticut a la perfección. Seleccione su estado o región para consultar municipios activos y tiempos de respuesta.',
    'area.badge.title': 'Movilización Central Triestatal',
    'area.badge.subtitle': 'Equipos Activos en NY, NJ y CT',
    'area.filterLabel': 'Filtrar Estado:',
    'area.filter.all': 'Todo el Triestatal (NY, NJ, CT)',
    'area.filter.nj': 'Nueva Jersey',
    'area.filter.ny': 'Nueva York',
    'area.filter.ct': 'Connecticut',
    'area.activeMun': 'Municipios Activos Atendidos en',
    'area.coveredTowns': 'Ciudades y Municipios con Cobertura',
    'area.recentProjects': 'Proyectos Recientes en',
    'area.responseWindow': 'Tiempo de Respuesta para Presupuesto',
    'area.permittingKnowledge': 'Gestión de Permisos con Departamentos de Edificación',
    'area.requestVisit': 'Solicitar Visita en el Sitio',
    'area.callDispatch': 'Llamar al Despacho',

    // Reviews Section
    'reviews.kicker': 'Testimonios Reales de Propietarios',
    'reviews.title': 'Maestría 5 Estrellas Comprobada',
    'reviews.filter.all': 'Todas las Reseñas',
    'reviews.filter.decks': 'Terrazas y Patios',
    'reviews.filter.roofing': 'Techados',
    'reviews.filter.remodeling': 'Remodelaciones',
    'reviews.filter.painting': 'Albañilería y Pintura',
    'reviews.verified': 'Verificado',
    'reviews.cta.title': '¿Listo para el Estándar 5 Estrellas Vasquez en su Hogar?',
    'reviews.cta.desc': 'Los 10 oficios ejecutados bajo un solo contrato. Completamente licenciado, afianzado y asegurado en NY, NJ y Connecticut.',
    'reviews.cta.call': '(609) 481-8197',
    'reviews.cta.btn': 'Presupuesto Gratis',

    // Contact Section
    'contact.kicker': 'Acceso Directo al Contratista',
    'contact.title': 'Agende su Consulta Gratuita en su Hogar',
    'contact.desc': 'Sin vendedores agresivos. Usted habla directamente con nuestro maestro constructor, quien revisa sus planos y entrega un presupuesto garantizado por escrito.',
    'contact.hotlineTitle': 'Línea Directa del Maestro Contratista',
    'contact.hotlineDesc': 'Llame o envíe un mensaje para atención inmediata. Hable directamente con los propietarios sobre planos, lonas de emergencia para techos, fugas o terrazas nuevas.',
    'contact.hotlineBtn': 'Llamar al +1 (609) 481-8197 Ahora',
    'contact.hqTitle': 'Sede y Radio de Servicio',
    'contact.hqDesc': 'Sirviendo NY, NJ y Connecticut (Cobertura residencial y comercial en todo el Triestatal)',
    'contact.hoursTitle': 'Horario de Atención',
    'contact.hoursDesc': 'Lunes a Sábado: 7:00 AM – 7:00 PM',
    'contact.emergencyDesc': 'Atención de Emergencia 24/7 por Tormentas y Reparación de Techos',
    'contact.entityTitle': 'Entidad Contratista Triestatal',
    'contact.entityDesc': 'Vasquez Home Improvement Contractor LLC · Sirviendo NY, NJ y CT · Totalmente Asegurado',
    'contact.formTitle': 'Solicite su Consulta Gratuita',
    'contact.formDesc': 'Complete la ubicación de su propiedad y los requerimientos del proyecto. Respetamos su privacidad y nunca vendemos su información.',
    'contact.nameLabel': 'Su Nombre Completo *',
    'contact.namePlaceholder': 'ej. Miguel Rodríguez',
    'contact.phoneLabel': 'Número de Teléfono *',
    'contact.emailLabel': 'Correo Electrónico',
    'contact.townLabel': 'Ciudad, Municipio y Estado *',
    'contact.townPlaceholder': 'ej. Princeton NJ, White Plains NY, o Stamford CT',
    'contact.serviceLabel': 'Servicio de Oficio Requerido *',
    'contact.multipleTrades': 'Múltiples Oficios / Casa Completa',
    'contact.timeframeLabel': 'Plazo Estimado de Inicio',
    'contact.timeframe.emergency': 'Emergencia (Próximas 48 Horas)',
    'contact.timeframe.soon': 'En 2 a 3 Semanas',
    'contact.timeframe.medium': 'Próximos 1 a 2 Meses',
    'contact.timeframe.planning': 'Flexible / Fase de Planificación',
    'contact.notesLabel': 'Alcance del Proyecto / Notas',
    'contact.notesPlaceholder': 'Describa su visión, pies cuadrados aproximados, condiciones actuales o materiales deseados...',
    'contact.submitBtn': 'Enviar Solicitud de Presupuesto Gratis',
    'contact.successTitle': '¡Solicitud de Presupuesto Recibida!',
    'contact.successMessage': 'Nuestro maestro constructor revisará los detalles de su proyecto y le llamará dentro de 2 horas.',
    'contact.submitAnother': 'Enviar Otra Consulta de Proyecto',

    // Estimate Modal
    'modal.title': 'Solicite su Presupuesto Gratuito en su Hogar',
    'modal.subtitle': 'Contratista Licenciado · Sirviendo NY, NJ y Connecticut',
    'modal.name': 'Nombre Completo *',
    'modal.phone': 'Número de Teléfono *',
    'modal.town': 'Ciudad, Municipio y Estado *',
    'modal.service': 'Servicio Requerido',
    'modal.notes': 'Breve Descripción del Proyecto',
    'modal.notesPlaceholder': 'Describa lo que desea construir, reparar o remodelar...',
    'modal.submit': 'Enviar Solicitud de Presupuesto',
    'modal.successTitle': '¡Solicitud de Presupuesto Recibida!',
    'modal.successDesc': 'Nuestro maestro contratista le llamará dentro de 2 horas para revisar los detalles.',
    'modal.close': 'Cerrar Ventana',
    'modal.directCall': 'O llame a la gerencia directamente:',

    // Mobile App Tab Bar
    'tab.home': 'Inicio',
    'tab.work': 'Trabajos',
    'tab.call': 'Llamar',
    'tab.trades': 'Oficios',
    'tab.estimate': 'Presupuesto',
    'tab.sheetTitle': 'App Vasquez HIC',
    'tab.reviews': 'Reseñas 5 Estrellas',
    'tab.coverage': 'NY, NJ y CT',

    // Footer
    'footer.companyDesc': 'Construimos, remodelamos y elevamos hogares en Nueva York, Nueva Jersey y Connecticut con maestría artesanal. Terrazas, patios, techado, plomería, remodelaciones, ampliaciones, albañilería, pintura y lavado a presión.',
    'footer.licenseBadge': 'Contratista Licenciado y Totalmente Asegurado LLC',
    'footer.insuranceDetails': 'Seguro de Responsabilidad Civil • Compensación Laboral • Sirviendo NY, NJ y CT',
    'footer.coreServices': 'Nuestros 10 Servicios Principales',
    'footer.directContact': 'Contacto Directo',
    'footer.callOrText': 'Llamada o Mensaje',
    'footer.hours': 'Lun - Sáb: 7:00 AM - 7:00 PM',
    'footer.emergency': 'Despacho de Emergencia 24/7 por Tormentas',
    'footer.getEstimate': 'Obtener Presupuesto Gratis',
    'footer.rights': 'Todos los Derechos Reservados.',
    'footer.backToTop': 'Volver Arriba'
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

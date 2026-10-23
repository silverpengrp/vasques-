import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Quote, 
  Sparkles, 
  Hammer, 
  Home, 
  Paintbrush, 
  PhoneCall, 
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroReviewsSectionProps {
  onOpenEstimateModal?: () => void;
}

interface ReviewItem {
  id: string;
  name: string;
  location: string;
  county: string;
  service: string;
  serviceEs: string;
  tradeCategory: 'all' | 'roofing' | 'decks' | 'remodeling' | 'painting';
  icon: React.ElementType;
  rating: number;
  date: string;
  dateEs: string;
  review: string;
  reviewEs: string;
  projectHighlight: string;
  projectHighlightEs: string;
}

const FEATURED_REVIEWS: ReviewItem[] = [
  {
    id: 'hr-1',
    name: 'Robert & Maria Callahan',
    location: 'Toms River, NJ',
    county: 'Ocean County',
    service: 'Custom Composite Deck & Pergola',
    serviceEs: 'Terraza de Compuesto y Pérgola',
    tradeCategory: 'decks',
    icon: Hammer,
    rating: 5,
    date: 'Verified 2026 Project',
    dateEs: 'Proyecto Verificado 2026',
    review: 'Carlos and his crew built a two-level composite deck with custom black aluminum railings. They arrived at 7:00 AM sharp every day, kept our yard immaculate, and finished two days ahead of schedule. Best contractor in Ocean County by far.',
    reviewEs: 'Carlos y su equipo construyeron una terraza de compuesto de dos niveles con barandillas de aluminio negro. Llegaron a las 7:00 AM en punto todos los días, mantuvieron el patio impecable y terminaron dos días antes de lo previsto. El mejor contratista del condado de Ocean sin duda.',
    projectHighlight: 'Completed in 5 Days · Trex Transcend Deck',
    projectHighlightEs: 'Terminado en 5 Días · Terraza Trex Transcend'
  },
  {
    id: 'hr-2',
    name: 'David & Jennifer Kowalski',
    location: 'Cherry Hill, NJ',
    county: 'Camden County',
    service: 'Full Roof Replacement & Flashing',
    serviceEs: 'Reemplazo Completo de Techo y Sellado',
    tradeCategory: 'roofing',
    icon: Home,
    rating: 5,
    date: 'Verified 2026 Project',
    dateEs: 'Proyecto Verificado 2026',
    review: 'We had severe storm damage on our roof. Carlos inspected it the same afternoon and gave us a clear, honest written quote. The crew completed the full tear-off and GAF Timberline shingle install in 48 hours. Zero stray nails in our driveway.',
    reviewEs: 'Tuvimos graves daños por tormenta en nuestro techo. Carlos lo inspeccionó esa misma tarde y nos dio un presupuesto por escrito claro y honesto. El equipo completó la remoción total y la instalación de tejas GAF en 48 horas. Cero clavos sueltos en la entrada.',
    projectHighlight: '50-Year Warranty · Full Storm Restoration',
    projectHighlightEs: 'Garantía de 50 Años · Restauración por Tormenta'
  },
  {
    id: 'hr-3',
    name: 'Dr. Marcus Thorne',
    location: 'Princeton, NJ',
    county: 'Mercer County',
    service: 'Kitchen & Bath Remodeling',
    serviceEs: 'Remodelación de Cocina y Baño',
    tradeCategory: 'remodeling',
    icon: Sparkles,
    rating: 5,
    date: 'Verified 2026 Project',
    dateEs: 'Proyecto Verificado 2026',
    review: 'Having Vasquez handle both the plumbing, tile masonry, and custom cabinetry under one contract saved us thousands and endless stress. Carlos was on site inspecting every detail daily. True master craftsmanship.',
    reviewEs: 'Haber contratado a Vasquez para encargarse de la plomería, los azulejos y los gabinetes a medida bajo un solo contrato nos ahorró miles de dólares y mucho estrés. Carlos estuvo en la obra inspeccionando cada detalle a diario. Verdadera maestría.',
    projectHighlight: 'Waterfall Quartz Island & Custom Vanities',
    projectHighlightEs: 'Isla de Cuarzo Cascada y Tocadores a Medida'
  },
  {
    id: 'hr-4',
    name: 'Frank & Gina Santoro',
    location: 'Hoboken / Jersey City, NJ',
    county: 'Hudson County',
    service: 'Exterior Masonry & Painting',
    serviceEs: 'Albañilería y Pintura Exterior',
    tradeCategory: 'painting',
    icon: Paintbrush,
    rating: 5,
    date: 'Verified 2026 Project',
    dateEs: 'Proyecto Verificado 2026',
    review: 'Repointed our 1920s brick foundation and gave our exterior a modern paint makeover. Neighbors stop and ask who did the work constantly. Straightforward pricing, no surprise fees, and courteous crew.',
    reviewEs: 'Restauraron los cimientos de ladrillo de nuestra casa de 1920 y le dieron a la fachada una renovación moderna con pintura de alta calidad. Los vecinos se detienen constantemente a preguntar quién hizo el trabajo. Precios claros, sin costos sorpresa y un equipo respetuoso.',
    projectHighlight: 'Historic Brick Repointing & Full Exterior Coat',
    projectHighlightEs: 'Rejuntado de Ladrillos y Pintura Exterior Completa'
  }
];

export const HeroReviewsSection: React.FC<HeroReviewsSectionProps> = ({ onOpenEstimateModal }) => {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'roofing' | 'decks' | 'remodeling' | 'painting'>('all');

  const filteredReviews = selectedCategory === 'all' 
    ? FEATURED_REVIEWS 
    : FEATURED_REVIEWS.filter(r => r.tradeCategory === selectedCategory);

  return (
    <section 
      id="hero-reviews-section" 
      className="relative z-20 pt-12 sm:pt-16 pb-16 sm:pb-20 bg-gradient-to-b from-[#09152b] via-[#070e1c] to-[#040813] text-white border-t border-blue-500/30 shadow-2xl"
    >
      {/* Blueprint grid ambient texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER & QUICK TRADE FILTER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t('reviews.kicker')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {t('reviews.title')}
            </h2>
          </div>

          {/* Quick Trade Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400'
                  : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {t('reviews.filter.all')}
            </button>
            <button
              onClick={() => setSelectedCategory('decks')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'decks'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400'
                  : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {t('reviews.filter.decks')}
            </button>
            <button
              onClick={() => setSelectedCategory('roofing')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'roofing'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400'
                  : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {t('reviews.filter.roofing')}
            </button>
            <button
              onClick={() => setSelectedCategory('remodeling')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'remodeling'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400'
                  : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {t('reviews.filter.remodeling')}
            </button>
            <button
              onClick={() => setSelectedCategory('painting')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'painting'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400'
                  : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {t('reviews.filter.painting')}
            </button>
          </div>
        </div>

        {/* 5-STAR REVIEWS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredReviews.map((review) => {
            const TradeIcon = review.icon;
            const reviewText = lang === 'es' ? review.reviewEs : review.review;
            const serviceLabel = lang === 'es' ? review.serviceEs : review.service;
            const highlightText = lang === 'es' ? review.projectHighlightEs : review.projectHighlight;

            return (
              <div
                key={review.id}
                className="bg-slate-900/85 backdrop-blur-md border border-slate-800 hover:border-blue-500/60 rounded-3xl p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col justify-between group relative"
              >
                {/* Background Subtle Quote Icon */}
                <Quote className="absolute top-5 right-5 w-8 h-8 text-slate-800 group-hover:text-blue-900/40 transition-colors pointer-events-none" />

                <div>
                  {/* Rating Stars + Project Type */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 filter drop-shadow-[0_1px_3px_rgba(251,191,36,0.4)]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-lg border border-cyan-800/50">
                      <TradeIcon className="w-3 h-3" />
                      <span className="truncate max-w-[120px]">{serviceLabel}</span>
                    </div>
                  </div>

                  {/* Customer Review Quote */}
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic mb-4">
                    "{reviewText}"
                  </p>
                </div>

                {/* Footer with Verified Homeowner Details */}
                <div className="pt-3 border-t border-slate-800/90 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-black text-white group-hover:text-cyan-300 transition-colors">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-blue-400 shrink-0" />
                        <span>{review.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-800/40">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{t('reviews.verified')}</span>
                    </div>
                  </div>

                  {/* Highlight pill */}
                  <div className="text-[10px] text-slate-400 font-mono bg-slate-950/80 px-2 py-1 rounded-lg border border-slate-800 text-center">
                    {highlightText}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* BOTTOM ACTION CTA BANNER */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-blue-900/50 via-slate-900/80 to-blue-950/50 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-black text-white flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{t('reviews.cta.title')}</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              {t('reviews.cta.desc')}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+16094818197"
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all flex items-center gap-2 border border-slate-600"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              <span>{t('reviews.cta.call')}</span>
            </a>

            {onOpenEstimateModal && (
              <button
                onClick={onOpenEstimateModal}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-1.5 border border-blue-400/40 cursor-pointer"
              >
                <span>{t('reviews.cta.btn')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

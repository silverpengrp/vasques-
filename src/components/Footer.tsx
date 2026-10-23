import React from 'react';
import { Phone, Shield, MapPin, Clock, ArrowUp, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { VasquezLogoIcon } from './VasquezLogoIcon';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenEstimateModal: () => void;
  onSelectService: (serviceTitle: string) => void;
}

const SERVICE_TITLES_ES: Record<string, string> = {
  'Decks': 'Terrazas y Patios',
  'Patios': 'Patios y Adoquines',
  'Plumbing': 'Plomería Residencial',
  'Remodeling': 'Remodelación de Cocinas y Baños',
  'Additions': 'Ampliaciones y Estructuras',
  'Masonry': 'Albañilería y Piedra',
  'Roofing': 'Techados y Techos',
  'Painting': 'Pintura Interior y Exterior',
  'Pressure Washing': 'Lavado a Presión Comercial',
  'Tree Trimming': 'Poda y Cuidado de Árboles'
};

export const Footer: React.FC<FooterProps> = ({ onOpenEstimateModal, onSelectService }) => {
  const { t, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Master Logo Badge (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 p-1.5 rounded-full bg-gradient-to-b from-blue-600/40 to-blue-950/80 border-2 border-blue-400/60 shadow-xl shadow-blue-950/70 shrink-0 flex items-center justify-center">
                <VasquezLogoIcon className="w-full h-full filter drop-shadow-lg" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-wider leading-tight">
                  VASQUEZ
                </h3>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                  {t('brand.subtitle')}
                </p>
                <p className="text-xs text-slate-400 italic">
                  {t('brand.slogan')}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t('footer.companyDesc')}
            </p>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3.5 max-w-sm space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-blue-300 font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>{t('footer.licenseBadge')}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {t('footer.insuranceDetails')}
              </p>
            </div>
          </div>

          {/* 10 Services Quick Links (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              {t('footer.coreServices')}
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs">
              {SERVICES_DATA.map(service => {
                const localizedTitle = lang === 'es' && SERVICE_TITLES_ES[service.title] 
                  ? SERVICE_TITLES_ES[service.title] 
                  : service.title;
                return (
                  <button
                    key={service.id}
                    onClick={() => onSelectService(service.title)}
                    className="text-left text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                    <span className="truncate">{localizedTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Contact & Dispatch (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3">
              {t('footer.directContact')}
            </h4>
            
            <a
              href="tel:+16094818197"
              className="flex items-center gap-3 p-3.5 bg-slate-800/90 border border-slate-700 rounded-2xl hover:border-blue-500 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">{t('footer.callOrText')}</div>
                <div className="text-sm font-black text-white font-mono">+1 (609) 481-8197</div>
              </div>
            </a>

            <div className="space-y-2 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{t('brand.serving')} (NY, NJ, CT)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{t('footer.hours')}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t('footer.emergency')}</span>
              </div>
            </div>

            <button
              onClick={onOpenEstimateModal}
              className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-blue-600/20 transition-all cursor-pointer"
            >
              {t('footer.getEstimate')}
            </button>
          </div>

        </div>

        {/* Bottom copyright & Slogan banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Vasquez Home Improvement Contractor LLC. {t('footer.rights')}
          </div>

          <div className="text-blue-400 font-mono tracking-widest font-bold">
            {t('brand.motto')}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>{t('footer.backToTop')}</span>
            <ArrowUp className="w-4 h-4 text-blue-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

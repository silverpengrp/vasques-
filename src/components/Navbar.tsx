import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  ArrowRight, 
  Star,
  Layers,
  Sparkles
} from 'lucide-react';
import { VasquezLogoIcon } from './VasquezLogoIcon';
import { useLanguage } from '../context/LanguageContext';

// Crisp official vector flag icons for US and Spain
export const USAFlagIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-3.5" }) => (
  <svg 
    viewBox="0 0 640 480" 
    className={`rounded-[2px] shadow-xs overflow-hidden inline-block shrink-0 ${className}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#bd3d44" d="M0 0h640v480H0z" />
    <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640" />
    <path fill="#192f5d" d="M0 0h260v258.5H0z" />
    <g fill="#fff">
      {[
        [26, 26], [78, 26], [130, 26], [182, 26], [234, 26],
        [52, 52], [104, 52], [156, 52], [208, 52],
        [26, 78], [78, 78], [130, 78], [182, 78], [234, 78],
        [52, 104], [104, 104], [156, 104], [208, 104],
        [26, 130], [78, 130], [130, 130], [182, 130], [234, 130],
        [52, 156], [104, 156], [156, 156], [208, 156],
        [26, 182], [78, 182], [130, 182], [182, 182], [234, 182],
        [52, 208], [104, 208], [156, 208], [208, 208],
        [26, 234], [78, 234], [130, 234], [182, 234], [234, 234],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6.5" />
      ))}
    </g>
  </svg>
);

export const SpainFlagIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-3.5" }) => (
  <svg 
    viewBox="0 0 640 480" 
    className={`rounded-[2px] shadow-xs overflow-hidden inline-block shrink-0 ${className}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#c60b1e" d="M0 0h640v480H0z" />
    <path fill="#ffc400" d="M0 120h640v240H0z" />
    <g transform="translate(145, 175) scale(0.9)">
      <path d="M10 20 L20 5 L30 18 L40 5 L50 20 Z" fill="#ffc400" stroke="#c60b1e" strokeWidth="2" />
      <circle cx="20" cy="5" r="3" fill="#ffc400" />
      <circle cx="40" cy="5" r="3" fill="#ffc400" />
      <circle cx="30" cy="12" r="2.5" fill="#c60b1e" />
      <path d="M12 25 H48 V65 C48 80 30 95 30 95 C30 95 12 80 12 65 Z" fill="#c60b1e" stroke="#fff" strokeWidth="2" />
      <rect x="18" y="32" width="24" height="24" fill="#ffc400" />
      <circle cx="30" cy="44" r="5" fill="#003399" stroke="#ffc400" strokeWidth="1.5" />
      <rect x="2" y="35" width="5" height="55" rx="1.5" fill="#fff" />
      <rect x="53" y="35" width="5" height="55" rx="1.5" fill="#fff" />
      <path d="M-1 55 Q4 48 9 55" stroke="#c60b1e" strokeWidth="3" fill="none" />
      <path d="M51 55 Q56 48 61 55" stroke="#c60b1e" strokeWidth="3" fill="none" />
    </g>
  </svg>
);

interface NavbarProps {
  onOpenEstimateModal: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimateModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open to prevent awkward background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-slate-950 border-b ${
        scrolled 
          ? 'border-blue-500/50 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.9)] shadow-blue-950/60' 
          : 'border-slate-800 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.7)]'
      } before:content-[''] before:absolute before:inset-x-0 before:-top-[1000px] before:h-[1000px] before:bg-slate-950 before:pointer-events-none`}
    >
      {/* Subtle Top Specular Lighting Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Architectural Navigation Bar */}
        <nav className="flex items-center justify-between h-14 sm:h-16 relative">
            
            {/* LEFT: BRAND IDENTITY */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 sm:flex-initial">
              <a
                href="#hero-section"
                className="flex items-center gap-2 sm:gap-3 group focus:outline-none cursor-pointer min-w-0"
                aria-label="Vasquez Home Improvement Contractor LLC - Home"
              >
                {/* Circular Emblem Container with Wolf Icon (Crisp, perfectly sized on all screens) */}
                <div className="relative flex items-center justify-center p-0.5 sm:p-1 rounded-full bg-gradient-to-b from-blue-600/40 via-slate-800 to-slate-950 border-2 border-blue-400/70 shadow-lg shadow-blue-900/60 group-hover:scale-105 group-hover:border-cyan-300 transition-all duration-300 shrink-0">
                  <VasquezLogoIcon className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 filter drop-shadow-[0_4px_12px_rgba(0,102,255,0.7)]" />
                </div>

                {/* Company Name Typography */}
                <div className="flex flex-col text-left leading-none min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-sm sm:text-base md:text-lg font-black text-white tracking-wide uppercase font-sans group-hover:text-cyan-300 transition-colors truncate">
                      VASQUEZ
                    </span>
                    <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-extrabold tracking-widest uppercase bg-blue-950/90 text-cyan-300 border border-blue-700/80 shrink-0">
                      NY · NJ · CT
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1 min-w-0">
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-slate-300 tracking-wide uppercase truncate">
                      {t('brand.subtitle')}
                    </span>
                    <span className="hidden sm:inline text-slate-500 text-[10px]">·</span>
                    <span className="hidden sm:inline text-[10px] font-mono font-medium text-cyan-400 shrink-0">
                      Lic #13VH13437500
                    </span>
                    <span className="hidden md:inline text-slate-500 text-[10px]">·</span>
                    <span className="hidden md:inline text-[10px] font-bold text-emerald-400 shrink-0">
                      {t('brand.serving')}
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* CENTER: DESKTOP NAVIGATION CATEGORIES (Work, Trades, Reviews) */}
            <div className="hidden lg:flex items-center space-x-2 text-xs font-semibold text-slate-300">
              <button
                onClick={() => scrollTo('transformations-section')}
                className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t('nav.work')}</span>
              </button>

              <button
                onClick={() => scrollTo('services-section')}
                className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>{t('nav.trades')}</span>
              </button>

              <button
                onClick={() => scrollTo('hero-reviews-section')}
                className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{t('nav.reviews')}</span>
              </button>
            </div>

            {/* RIGHT: DESKTOP PHONE, ESTIMATE & TRANSLATE (FLAGS) BUTTONS */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              
              {/* Flag Language Switcher (US 🇺🇸 / Spain 🇪🇸) */}
              <div 
                className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-700/80 shadow-inner gap-1"
                title={lang === 'en' ? 'Language: English' : 'Idioma: Español'}
              >
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`p-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center ${
                    lang === 'en'
                      ? 'bg-blue-600/90 ring-2 ring-cyan-400 shadow-md shadow-blue-500/30 scale-105'
                      : 'opacity-50 hover:opacity-100 hover:bg-slate-800'
                  }`}
                  aria-label="Switch to English"
                  title="English (US)"
                >
                  <USAFlagIcon className="w-6 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setLang('es')}
                  className={`p-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center ${
                    lang === 'es'
                      ? 'bg-blue-600/90 ring-2 ring-cyan-400 shadow-md shadow-blue-500/30 scale-105'
                      : 'opacity-50 hover:opacity-100 hover:bg-slate-800'
                  }`}
                  aria-label="Cambiar a Español"
                  title="Español (ES)"
                >
                  <SpainFlagIcon className="w-6 h-4" />
                </button>
              </div>

              {/* Phone Button */}
              <a
                href="tel:+16094818197"
                className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-95 cursor-pointer flex items-center gap-2 border border-blue-400/50"
                title="Call (609) 481-8197"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white/20" />
                <span className="font-mono font-bold tracking-tight">(609) 481-8197</span>
              </a>

              {/* Free Estimate Button */}
              <button
                onClick={onOpenEstimateModal}
                className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 border border-blue-400/50"
              >
                <span>{t('nav.estimate')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* MOBILE ACTIONS: TRANSLATE TOGGLE & THREE-BAR MENU BUTTON */}
            <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0 ml-2">
              
              {/* Mobile Flag Language Toggle */}
              <div 
                className="flex items-center p-0.5 sm:p-1 rounded-xl bg-slate-900 border border-slate-700/80 shadow-inner gap-0.5 sm:gap-1 shrink-0"
                title={lang === 'en' ? 'Language: English' : 'Idioma: Español'}
              >
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`p-1 sm:p-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center ${
                    lang === 'en'
                      ? 'bg-blue-600/90 ring-2 ring-cyan-400 shadow-md shadow-blue-500/30 scale-105'
                      : 'opacity-50 hover:opacity-100 hover:bg-slate-800'
                  }`}
                  aria-label="Switch to English"
                  title="English (US)"
                >
                  <USAFlagIcon className="w-5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setLang('es')}
                  className={`p-1 sm:p-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center ${
                    lang === 'es'
                      ? 'bg-blue-600/90 ring-2 ring-cyan-400 shadow-md shadow-blue-500/30 scale-105'
                      : 'opacity-50 hover:opacity-100 hover:bg-slate-800'
                  }`}
                  aria-label="Cambiar a Español"
                  title="Español (ES)"
                >
                  <SpainFlagIcon className="w-5 h-3.5" />
                </button>
              </div>

              {/* Mobile Hamburger / Close Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-950/80 hover:bg-blue-900 border border-blue-500/50 text-white transition-all active:scale-95 cursor-pointer shadow-md shadow-blue-950/60 shrink-0"
                aria-label="Toggle Mobile Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white stroke-[2.5]" />
                ) : (
                  <Menu className="w-5 h-5 text-white stroke-[2.5]" />
                )}
              </button>
            </div>

        </nav>
      </div>

      {/* MOBILE SLIDE-DOWN DRAWER MENU WITH BACKDROP OVERLAY */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay - Closes menu on background tap */}
          <div 
            className="fixed inset-0 top-14 sm:top-16 z-40 bg-slate-950/80 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Fixed Dropdown Menu (Directly below navbar, never causes header height shift) */}
          <div 
            className="fixed top-14 sm:top-16 left-0 right-0 z-50 md:hidden bg-slate-950/98 backdrop-blur-2xl border-b border-blue-500/40 shadow-2xl px-4 py-4 animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="max-w-md mx-auto space-y-2.5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-1 rounded-full bg-blue-950/80 border-2 border-blue-400/60 shadow-md shrink-0">
                    <VasquezLogoIcon className="w-10 h-10 filter drop-shadow-md" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-black text-white uppercase tracking-wider truncate">Vasquez Home Improvement</div>
                    <div className="text-[11px] text-cyan-400 font-mono truncate">{t('brand.entity')}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 ml-2"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Switcher in Drawer */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 rounded-xl border border-slate-800 my-1">
                <span className="text-xs font-semibold text-slate-300">
                  {lang === 'en' ? 'Language / Idioma' : 'Idioma / Language'}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      lang === 'en'
                        ? 'bg-blue-600 text-white ring-1 ring-cyan-300 shadow-sm'
                        : 'opacity-60 hover:opacity-100 bg-slate-800'
                    }`}
                    aria-label="English"
                  >
                    <USAFlagIcon className="w-4 h-3" />
                    <span className="text-[11px] font-bold">English</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('es')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      lang === 'es'
                        ? 'bg-blue-600 text-white ring-1 ring-cyan-300 shadow-sm'
                        : 'opacity-60 hover:opacity-100 bg-slate-800'
                    }`}
                    aria-label="Español"
                  >
                    <SpainFlagIcon className="w-4 h-3" />
                    <span className="text-[11px] font-bold">Español</span>
                  </button>
                </div>
              </div>

              {/* Navigation Categories (Work, Trades, Reviews) */}
              <button
                type="button"
                onClick={() => scrollTo('transformations-section')}
                className="w-full text-left py-2.5 px-3 text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl text-xs font-bold flex items-center gap-2.5 cursor-pointer transition-colors"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t('nav.work')}</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('services-section')}
                className="w-full text-left py-2.5 px-3 text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl text-xs font-bold flex items-center gap-2.5 cursor-pointer transition-colors"
              >
                <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t('nav.trades')}</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('hero-reviews-section')}
                className="w-full text-left py-2.5 px-3 text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl text-xs font-bold flex items-center gap-2.5 cursor-pointer transition-colors"
              >
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <span>{t('nav.reviews')}</span>
              </button>

              <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
                {/* Phone Button */}
                <a
                  href="tel:+16094818197"
                  className="w-full py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-extrabold text-xs sm:text-sm rounded-xl text-center flex items-center justify-center gap-2 border border-blue-400/50 shadow-lg shadow-blue-600/30 active:scale-98 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span className="font-mono font-bold tracking-tight">(609) 481-8197</span>
                </a>

                {/* Free Estimate Button (Matching Blue/Cyan gradient) */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimateModal();
                  }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-black text-xs uppercase tracking-wider rounded-xl text-center shadow-lg shadow-blue-600/30 cursor-pointer flex items-center justify-center gap-2 border border-blue-400/50 active:scale-98 transition-all"
                >
                  <span>{t('nav.writtenEstimate')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

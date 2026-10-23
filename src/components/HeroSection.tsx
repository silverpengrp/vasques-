import React, { useState } from 'react';
import { 
  Phone, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Award,
  Layers,
  Sparkles,
  MapPin,
  ChevronRight
} from 'lucide-react';
import heroCraftsmenImg from '../assets/images/vasquez_hero_main.png';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onOpenEstimateModal: () => void;
  onSelectService: (serviceId: string) => void;
}

const CUSTOMER_AVATARS = [
  {
    name: 'Maria & Robert Callahan',
    location: 'Toms River, NJ',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    name: 'David Kowalski',
    location: 'Cherry Hill, NJ',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    name: 'Elena & Marcus Sterling',
    location: 'Princeton, NJ',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    name: 'Dr. Marcus Thorne',
    location: 'Hoboken, NJ',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    name: 'Gina & Frank Santoro',
    location: 'Jersey City, NJ',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80'
  }
];

const POPULAR_SERVICES = [
  { id: 'Decks', labelEn: 'Decks & Patios', labelEs: 'Terrazas y Patios' },
  { id: 'Remodeling', labelEn: 'Kitchen & Bath', labelEs: 'Cocina y Baño' },
  { id: 'Roofing', labelEn: 'Roofing & Siding', labelEs: 'Techos y Revestimiento' },
  { id: 'Framing', labelEn: 'Additions & Framing', labelEs: 'Ampliaciones y Estructuras' },
  { id: 'Flooring', labelEn: 'Hardwood & Tile', labelEs: 'Pisos y Azulejos' }
];

// Primary and fallback image paths engineered for universal GitHub Pages & static publishing
const UPLOADED_HERO_PATH = `${import.meta.env.BASE_URL}assets/aistudio/fd5093c5-25cf-4a5f-949c-8a732d615fe8-removebg-preview_c5601363.png`;
const RELATIVE_PUBLIC_HERO = `${import.meta.env.BASE_URL}vasquez_hero_main.png`;
const RELIABLE_HOSTED_HERO_FALLBACK = `${import.meta.env.BASE_URL}vasquez_white_jumper_hero.png`;

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenEstimateModal, 
  onSelectService 
}) => {
  const { t, lang } = useLanguage();

  // Clear any outdated localStorage override that might be pointing to obsolete previews
  React.useEffect(() => {
    try {
      localStorage.removeItem('vasquez_custom_hero_image');
    } catch {}
  }, []);

  const heroImage = heroCraftsmenImg || UPLOADED_HERO_PATH;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src !== heroCraftsmenImg) {
      target.src = heroCraftsmenImg;
    } else if (!target.src.includes('aistudio')) {
      target.src = UPLOADED_HERO_PATH;
    } else if (!target.src.includes('vasquez_hero_main.png')) {
      target.src = RELATIVE_PUBLIC_HERO;
    } else {
      target.src = RELIABLE_HOSTED_HERO_FALLBACK;
    }
  };

  const scrollToReviews = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('hero-reviews-section') || document.getElementById('reviews-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTrades = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section" 
      className="relative text-white overflow-hidden pt-1 sm:pt-4 pb-12 sm:pb-16"
      style={{
        background: 'linear-gradient(180deg, #050b16 0%, #081326 25%, #0c1e3d 55%, #081427 85%, #071630 100%)'
      }}
    >
      {/* Precision Blueprint Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px'
        }}
      />

      {/* Atmospheric Radial Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-radial from-blue-500/25 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-radial from-blue-600/20 to-transparent blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Top Trust Kicker: Clean Unboxed Editorial Metadata */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-cyan-300 font-semibold tracking-wide uppercase pt-1 pb-4 sm:pb-6">
          <span className="flex items-center gap-1.5 text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>{t('hero.kicker.lic')}</span>
          </span>
          <span aria-hidden="true" className="text-blue-400/50">·</span>
          <span className="font-mono text-cyan-200">Lic #13VH13437500</span>
          <span aria-hidden="true" className="text-blue-400/50 hidden sm:inline">·</span>
          <span className="text-emerald-300 font-bold hidden sm:inline">{t('hero.kicker.serving')}</span>
          <span aria-hidden="true" className="text-blue-400/50 hidden md:inline">·</span>
          <span className="text-blue-200/90 hidden md:inline">{t('hero.kicker.code')}</span>
        </div>

        {/* 2-Column Architectural Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Authoritative Editorial Story & Conversion Suite */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center space-y-6">
            
            {/* Primary Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                {t('hero.title.prefix')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-sky-400">
                  {t('hero.title.highlight')}
                </span>
              </h1>

              {/* Mobile Hero Image (Positioned directly above the description paragraph on mobile) */}
              <div className="block lg:hidden pt-2 pb-2 w-full">
                <div className="relative w-full flex flex-col items-center justify-center">
                  {/* Subtle mobile radial spotlight behind image */}
                  <div className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] bg-gradient-to-tr from-blue-600/30 via-cyan-500/18 to-transparent rounded-full blur-2xl pointer-events-none" />
                  
                  <img
                    src={heroImage}
                    alt="Vasquez Home Improvement - Master Craftsmen"
                    onError={handleImageError}
                    className="relative z-10 w-full max-w-[420px] sm:max-w-[500px] h-auto max-h-[380px] sm:max-h-[460px] object-contain select-none filter drop-shadow-[0_16px_36px_rgba(0,102,255,0.36)]"
                    loading="eager"
                  />

                  {/* Grounding floor shadow */}
                  <div className="w-2/3 h-5 bg-gradient-to-r from-transparent via-slate-950/80 to-transparent blur-sm -mt-3 pointer-events-none" />

                  {/* Sleek mobile proof pill */}
                  <div className="mt-2 z-10 bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2 text-[11px] text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="font-semibold text-white">{t('hero.mobile.owner')}</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-cyan-300 font-bold text-[10px]">{t('hero.mobile.serving')}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                {t('hero.desc')}
              </p>
            </div>

            {/* Quick Interactive Trade Selectors */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium">{t('hero.selectPrompt')}</span>
                <a 
                  href="#services-section" 
                  onClick={scrollToTrades}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-0.5 transition-colors"
                >
                  <span>{t('hero.allTrades')}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {POPULAR_SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectService(service.id);
                      onOpenEstimateModal();
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900/90 hover:bg-blue-600 border border-slate-700/80 hover:border-blue-400 text-slate-200 hover:text-white transition-all shadow-sm cursor-pointer flex items-center gap-1.5 active:scale-95 group"
                  >
                    <span>{lang === 'es' ? service.labelEs : service.labelEn}</span>
                    <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Primary Action Suite */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenEstimateModal}
                className="px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>{t('hero.btn.consult')}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:6093569141"
                className="px-5 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm active:scale-95"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="font-mono tracking-tight font-bold">{t('hero.btn.call')}</span>
              </a>
            </div>

            {/* Social Proof & 5-Star Homeowner Credibility */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-t border-slate-800/80">
              
              {/* Customer Avatar Stack */}
              <div className="flex items-center -space-x-2.5 shrink-0">
                {CUSTOMER_AVATARS.map((customer, idx) => (
                  <div 
                    key={idx}
                    className="relative inline-block w-10 h-10 rounded-full shadow-lg overflow-hidden bg-slate-800 ring-2 ring-slate-950 group/avatar transition-transform hover:scale-110 hover:z-20 cursor-pointer"
                    title={`${customer.name} (${customer.location})`}
                  >
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
                
                {/* Verified 150+ Badge */}
                <div 
                  className="relative flex items-center justify-center w-10 h-10 rounded-full ring-2 ring-slate-950 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white font-mono font-black text-xs shadow-lg shrink-0 cursor-pointer"
                  title="150+ Verified Homeowners Across NY, NJ & CT"
                >
                  +150
                </div>
              </div>

              {/* Review Link & Rating */}
              <a
                href="#hero-reviews-section"
                onClick={scrollToReviews}
                className="flex flex-col text-left group focus:outline-none cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-amber-400 text-amber-400 filter drop-shadow-[0_2px_4px_rgba(251,191,36,0.4)]" 
                      />
                    ))}
                  </div>
                  <span className="font-mono font-black text-sm text-white group-hover:text-cyan-300 transition-colors">
                    {t('hero.rating')}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {t('hero.verifiedReviews')}
                  </span>
                </div>
                
                <span className="text-xs text-slate-300 group-hover:text-white transition-colors mt-0.5">
                  {t('hero.ratingSub')}
                </span>
              </a>

            </div>

            {/* 3 Key Numerical Proof Anchors */}
            <div className="grid grid-cols-3 gap-4 pt-1 text-left">
              <div className="border-l-2 border-blue-500/60 pl-3">
                <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">{t('hero.stat.years')}</div>
                <div className="text-[11px] text-slate-400 font-medium">{t('hero.stat.yearsLabel')}</div>
              </div>
              <div className="border-l-2 border-cyan-500/60 pl-3">
                <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">{t('hero.stat.pass')}</div>
                <div className="text-[11px] text-slate-400 font-medium">{t('hero.stat.passLabel')}</div>
              </div>
              <div className="border-l-2 border-emerald-500/60 pl-3">
                <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">{t('hero.stat.sub')}</div>
                <div className="text-[11px] text-slate-400 font-medium">{t('hero.stat.subLabel')}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Craftsmen & House Graphic (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-7 xl:col-span-7 relative w-full flex-col items-center justify-center py-2 lg:py-0 select-none">
            
            {/* Multi-layered Architectural Spotlight & Halo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Core radiant sapphire/cyan backlight */}
              <div 
                className="w-[520px] xl:w-[640px] h-[520px] xl:h-[640px] bg-gradient-to-tr from-blue-600/30 via-cyan-500/18 to-transparent rounded-full blur-3xl animate-pulse" 
                style={{ animationDuration: '6s' }} 
              />
              {/* Concentric blueprint blueprint contour rings */}
              <div className="absolute w-[440px] xl:w-[540px] h-[440px] xl:h-[540px] rounded-full border border-blue-400/10 pointer-events-none" />
              <div className="absolute w-[600px] xl:w-[720px] h-[600px] xl:h-[720px] rounded-full border border-cyan-400/5 pointer-events-none" />
            </div>

            {/* Stage Showcase Container */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
              
              {/* Floating Top Header Badges */}
              <div className="w-full flex items-center justify-between px-2 xl:px-4 -mb-5 z-20 relative">
                {/* Badge 1: Owner-Supervised Active Site */}
                <div className="bg-slate-900/90 backdrop-blur-xl border border-cyan-500/35 shadow-[0_12px_32px_rgba(0,0,0,0.65)] rounded-2xl px-4 py-2.5 flex items-center gap-3 transition-transform hover:scale-105">
                  <div className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-black tracking-tight text-white flex items-center gap-1.5">
                      <span>{t('hero.badge.owner')}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-cyan-300 font-mono font-bold">{t('hero.badge.today')}</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium">{t('hero.badge.ownerSub')}</div>
                  </div>
                </div>

                {/* Badge 2: Corridor Location Pill */}
                <div className="hidden xl:flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-full text-[11px] text-blue-200 shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold text-cyan-300">{t('hero.badge.dispatch')}</span>
                </div>
              </div>

              {/* The Hero Image (Bundled First-Class Asset, with Public & Hosted Fallbacks) */}
              <div className="relative w-full flex items-center justify-center group">
                <img
                  src={heroImage}
                  alt="Vasquez Home Improvement - Master Craftsmen"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                  className="w-full max-w-[680px] sm:max-w-[780px] md:max-w-2xl lg:max-w-[850px] xl:max-w-[960px] 2xl:max-w-[1040px] h-auto max-h-[680px] sm:max-h-[780px] lg:max-h-[860px] xl:max-h-[940px] 2xl:max-h-[1020px] object-contain select-none transition-all duration-500 group-hover:scale-[1.015] filter drop-shadow-[0_24px_48px_rgba(30,64,175,0.4)]"
                  loading="eager"
                />
              </div>

              {/* Grounding floor shadow */}
              <div className="w-3/4 max-w-[620px] h-8 bg-gradient-to-r from-transparent via-slate-950/85 to-transparent blur-md -mt-6 pointer-events-none" />

              {/* Floating Bottom Badge: Guaranteed Written Estimate & Code Pass */}
              <div className="self-end -mt-6 mr-2 xl:mr-6 z-20 relative transition-transform hover:scale-105">
                <div className="bg-slate-900/90 backdrop-blur-xl border border-blue-500/35 shadow-[0_16px_36px_rgba(0,0,0,0.7)] rounded-2xl px-4 py-2.5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/30">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-black tracking-tight text-white flex items-center gap-1.5">
                      <span>{t('hero.badge.estimate')}</span>
                      <span className="text-[10px] text-cyan-300 font-mono font-bold">{t('hero.badge.surprises')}</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium">{t('hero.badge.estimateSub')}</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom 4 Architectural Value Pillars Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{t(`pillar.${idx}.title`)}</span>
                </div>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  {t(`pillar.${idx}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

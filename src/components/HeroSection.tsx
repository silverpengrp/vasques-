import React, { useEffect } from 'react';
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
  { id: 'Decks', label: 'Decks & Patios' },
  { id: 'Remodeling', label: 'Kitchen & Bath' },
  { id: 'Roofing', label: 'Roofing & Siding' },
  { id: 'Framing', label: 'Additions & Framing' },
  { id: 'Flooring', label: 'Hardwood & Tile' }
];

const VALUE_PILLARS = [
  {
    title: 'Written Price Guarantee',
    desc: 'Fixed itemized quotes with zero hidden change orders'
  },
  {
    title: 'Owner on Every Site',
    desc: 'Master builder Vasquez directly leads daily jobsite execution'
  },
  {
    title: 'Township Code Pass',
    desc: 'Full permitting and 100% township inspection approval'
  },
  {
    title: 'Total Site Protection',
    desc: 'Dust containment, floor shield runners, and daily cleanup'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenEstimateModal, 
  onSelectService 
}) => {
  useEffect(() => {
    try {
      localStorage.removeItem('vasquez_custom_hero_image');
    } catch {
      // Storage cleanup
    }
  }, []);

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
            <span>New Jersey Licensed Contractor LLC</span>
          </span>
          <span aria-hidden="true" className="text-blue-400/50">·</span>
          <span className="font-mono text-cyan-200">Lic #13VH13437500</span>
          <span aria-hidden="true" className="text-blue-400/50 hidden sm:inline">·</span>
          <span className="text-blue-200/90 hidden sm:inline">Fully Insured & Bonded</span>
          <span aria-hidden="true" className="text-blue-400/50 hidden md:inline">·</span>
          <span className="text-blue-200/90 hidden md:inline">Mercer · Middlesex · Ocean · Monmouth</span>
        </div>

        {/* 2-Column Architectural Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Authoritative Editorial Story & Conversion Suite */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center space-y-6">
            
            {/* Primary Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                Master Craftsmanship.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-sky-400">
                  Built for Central New Jersey Homes.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                Direct owner-supervised construction delivering structural composite decks, precision roofing, luxury kitchen and bath remodels, additions, and complete interior restorations. Guaranteed written timelines with zero subcontracting runaround.
              </p>
            </div>

            {/* Quick Interactive Trade Selectors */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium">Select your project type for instant priority estimate:</span>
                <a 
                  href="#services-section" 
                  onClick={scrollToTrades}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-0.5 transition-colors"
                >
                  <span>All 10 Trades</span>
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
                    <span>{service.label}</span>
                    <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
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
                  title="150+ Verified Homeowners Across Central NJ"
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
                    5.0 / 5.0
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    (150+ Verified Reviews)
                  </span>
                </div>
                
                <span className="text-xs text-slate-300 group-hover:text-white transition-colors mt-0.5">
                  Top-Rated Licensed Home Improvement in Mercer, Middlesex & Ocean
                </span>
              </a>

            </div>

            {/* 3 Key Numerical Proof Anchors */}
            <div className="grid grid-cols-3 gap-4 pt-1 text-left">
              <div className="border-l-2 border-blue-500/60 pl-3">
                <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">15+</div>
                <div className="text-[11px] text-slate-400 font-medium">Years Central NJ Experience</div>
              </div>
              <div className="border-l-2 border-cyan-500/60 pl-3">
                <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Township Code Pass Rate</div>
              </div>
              <div className="border-l-2 border-emerald-500/60 pl-3">
                <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">0%</div>
                <div className="text-[11px] text-slate-400 font-medium">Subcontractor Runaround</div>
              </div>
            </div>

          </div>

          {/* Right Column: Craftsmen & House Graphic (Prominent, High-Presence Presentation on Desktop) */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full flex flex-col items-center justify-center py-2 lg:py-0">
            
            {/* The Hero Image (Authentic Craftsmen Made Big & Prominent on Desktop) */}
            <div className="relative z-10 w-full flex items-center justify-center lg:justify-end">
              <img
                src="/vasquez_white_jumper_hero.png?v=8"
                alt="Vasquez Home Improvement - Full-body home renovation craftsmen, painter in white work jumper holding brush with dripping yellow paint and roller, carpenter with blue hardhat and toolbelt, in front of a blue and white craftsman house with extension ladder"
                referrerPolicy="no-referrer"
                className="w-full max-w-[680px] sm:max-w-[780px] md:max-w-2xl lg:max-w-[850px] xl:max-w-[960px] 2xl:max-w-[1040px] h-auto max-h-[680px] sm:max-h-[780px] lg:max-h-[860px] xl:max-h-[940px] 2xl:max-h-[1020px] object-contain select-none transition-transform duration-300 hover:scale-[1.01]"
                loading="eager"
              />
            </div>

          </div>

        </div>

        {/* Bottom 4 Architectural Value Pillars Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {VALUE_PILLARS.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{pillar.title}</span>
                </div>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

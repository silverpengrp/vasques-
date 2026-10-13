import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  ArrowRight, 
  Star,
  Layers,
  Sparkles,
  MapPin
} from 'lucide-react';
import { VasquezLogoIcon } from './VasquezLogoIcon';

interface NavbarProps {
  onOpenEstimateModal: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimateModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 sm:top-2 z-50 w-full px-2 sm:px-6 pt-1 sm:pt-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Floating Architectural Navigation Bar */}
        <nav 
          className={`relative transition-all duration-300 rounded-xl sm:rounded-2xl md:rounded-3xl border ${
            scrolled 
              ? 'bg-slate-950/98 backdrop-blur-2xl border-blue-500/50 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.9)] shadow-blue-950/60' 
              : 'bg-slate-900/95 backdrop-blur-xl border-slate-700/80 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.7)]'
          } px-3 sm:px-5 py-1.5 sm:py-2`}
        >
          {/* Subtle Top Specular Lighting Line */}
          <div className="absolute inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none rounded-full" />

          <div className="flex items-center justify-between h-14 sm:h-16 relative">
            
            {/* LEFT: BRAND IDENTITY */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#hero-section"
                className="flex items-center gap-3 group focus:outline-none cursor-pointer"
                aria-label="Vasquez Home Improvement Contractor LLC - Home"
              >
                {/* Circular Emblem Container with Wolf Icon (Enlarged & Illuminated) */}
                <div className="relative flex items-center justify-center p-1 rounded-full bg-gradient-to-b from-blue-600/40 via-slate-800 to-slate-950 border-2 border-blue-400/70 shadow-lg shadow-blue-900/60 group-hover:scale-108 group-hover:border-cyan-300 transition-all duration-300">
                  <VasquezLogoIcon className="w-12 h-12 sm:w-14 sm:h-14 filter drop-shadow-[0_4px_12px_rgba(0,102,255,0.7)]" />
                </div>

                {/* Company Name Typography */}
                <div className="flex flex-col text-left leading-none">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-black text-white tracking-wide uppercase font-sans group-hover:text-cyan-300 transition-colors">
                      VASQUEZ
                    </span>
                    <span className="hidden xl:inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-extrabold tracking-widest uppercase bg-blue-950/90 text-cyan-400 border border-blue-800/80">
                      NJ HIC LLC
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 tracking-wide uppercase">
                      Home Improvement Contractor
                    </span>
                    <span className="hidden sm:inline text-slate-500 text-[10px]">·</span>
                    <span className="hidden sm:inline text-[10px] font-mono font-medium text-cyan-400">
                      Lic #13VH13437500
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* CENTER: DESKTOP NAVIGATION CATEGORIES (10 Trades, Our Work, Reviews, Coverage) */}
            <div className="hidden lg:flex items-center space-x-1.5 text-xs font-semibold text-slate-300">
              <button
                onClick={() => scrollTo('services-section')}
                className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>10 Trades</span>
              </button>

              <button
                onClick={() => scrollTo('transformations-section')}
                className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Our Work</span>
              </button>

              <button
                onClick={() => scrollTo('hero-reviews-section')}
                className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Reviews</span>
              </button>

              <button
                onClick={() => scrollTo('service-area-section')}
                className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Coverage</span>
              </button>
            </div>

            {/* RIGHT: DESKTOP PHONE & ESTIMATE CTA BUTTONS */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              {/* Phone Button */}
              <a
                href="tel:+16094818197"
                className="px-4 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-95 cursor-pointer flex items-center gap-2 border border-blue-400/50"
                title="Call (609) 481-8197"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white/20" />
                <span className="font-mono font-bold tracking-tight">(609) 481-8197</span>
              </a>

              {/* Free Estimate Button */}
              <button
                onClick={onOpenEstimateModal}
                className="px-4 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 border border-blue-400/50"
              >
                <span>Free Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* MOBILE THREE-BAR MENU BUTTON (CLEAN & DIRECT) */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-blue-950/80 hover:bg-blue-900 border border-blue-500/50 text-white transition-all active:scale-90 cursor-pointer shadow-md shadow-blue-950/60"
                aria-label="Toggle Mobile Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-white stroke-[2.5]" />
                ) : (
                  <Menu className="w-6 h-6 text-white stroke-[2.5]" />
                )}
              </button>
            </div>

          </div>
        </nav>

        {/* MOBILE SLIDE-DOWN DRAWER MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-slate-950/98 backdrop-blur-2xl border border-blue-500/30 rounded-2xl p-4 shadow-2xl space-y-1.5 animate-in slide-in-from-top-2 text-white">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-1 rounded-full bg-blue-950/80 border-2 border-blue-400/60 shadow-md">
                <VasquezLogoIcon className="w-11 h-11 filter drop-shadow-md" />
              </div>
              <div>
                <div className="text-sm font-black text-white uppercase tracking-wider">Vasquez Home Improvement</div>
                <div className="text-[11px] text-cyan-400 font-mono">NJ Lic #13VH13437500 · Fully Insured</div>
              </div>
            </div>

            <button
              onClick={() => scrollTo('services-section')}
              className="w-full text-left py-2.5 px-3 text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl text-xs font-bold flex items-center gap-2.5 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-blue-400" />
              <span>10 Trades</span>
            </button>

            <button
              onClick={() => scrollTo('transformations-section')}
              className="w-full text-left py-2.5 px-3 text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl text-xs font-bold flex items-center gap-2.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Our Work</span>
            </button>

            <button
              onClick={() => scrollTo('hero-reviews-section')}
              className="w-full text-left py-2.5 px-3 text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl text-xs font-bold flex items-center gap-2.5 cursor-pointer"
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Reviews</span>
            </button>

            <button
              onClick={() => scrollTo('service-area-section')}
              className="w-full text-left py-2.5 px-3 text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl text-xs font-bold flex items-center gap-2.5 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Coverage</span>
            </button>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              {/* Phone Button */}
              <a
                href="tel:+16094818197"
                className="w-full py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-extrabold text-xs sm:text-sm rounded-xl text-center flex items-center justify-center gap-2 border border-blue-400/50 shadow-lg shadow-blue-600/30"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span className="font-mono font-bold tracking-tight">(609) 481-8197</span>
              </a>

              {/* Free Estimate Button (Matching Blue/Cyan gradient) */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimateModal();
                }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-black text-xs uppercase tracking-wider rounded-xl text-center shadow-lg shadow-blue-600/30 cursor-pointer flex items-center justify-center gap-2 border border-blue-400/50"
              >
                <span>Free Written Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Sparkles, 
  Layers, 
  Phone, 
  FileText,
  Star,
  MapPin,
  X
} from 'lucide-react';
import { VasquezLogoIcon } from './VasquezLogoIcon';
import { useLanguage } from '../context/LanguageContext';

interface MobileAppTabBarProps {
  onOpenEstimateModal: () => void;
  onSelectService: (serviceId: string) => void;
}

export const MobileAppTabBar: React.FC<MobileAppTabBarProps> = ({
  onOpenEstimateModal
}) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'home' | 'work' | 'trades' | 'estimate'>('home');
  const [sheetOpen, setSheetOpen] = useState(false);

  // Monitor scroll position to automatically reflect active tab on mobile
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const transEl = document.getElementById('transformations-section');
      const tradesEl = document.getElementById('services-section');

      if (transEl && tradesEl) {
        const transTop = transEl.offsetTop;
        const transBottom = transTop + transEl.offsetHeight;
        const tradesTop = tradesEl.offsetTop;
        const tradesBottom = tradesTop + tradesEl.offsetHeight;

        if (scrollPos >= transTop && scrollPos < transBottom) {
          setActiveTab('work');
        } else if (scrollPos >= tradesTop && scrollPos < tradesBottom) {
          setActiveTab('trades');
        } else if (scrollPos < transTop) {
          setActiveTab('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, tabKey: 'home' | 'work' | 'trades') => {
    setActiveTab(tabKey);
    setSheetOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 
        NATIVE-STYLE MOBILE BOTTOM NAVIGATION BAR (FIXED BOTTOM DOCK)
        Styled like iOS / modern Android bottom navigation bar with haptic active states
      */}
      <nav 
        aria-label="Mobile Application Navigation"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/92 backdrop-blur-2xl border-t border-blue-500/30 shadow-[0_-8px_30px_rgba(0,0,0,0.85)] safe-area-bottom select-none"
      >
        <div className="flex items-center justify-around px-2 py-1.5 max-w-lg mx-auto">
          
          {/* TAB 1: HOME */}
          <button
            onClick={() => scrollTo('hero-section', 'home')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all cursor-pointer active:scale-90 ${
              activeTab === 'home'
                ? 'text-cyan-400 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`p-1 rounded-xl transition-all ${activeTab === 'home' ? 'bg-blue-600/25 text-cyan-300' : ''}`}>
              <Home className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-[10px] tracking-tight mt-0.5">{t('tab.home')}</span>
          </button>

          {/* TAB 2: BEFORE & AFTER (WORK) */}
          <button
            onClick={() => scrollTo('transformations-section', 'work')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all cursor-pointer active:scale-90 relative ${
              activeTab === 'work'
                ? 'text-cyan-400 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`p-1 rounded-xl transition-all ${activeTab === 'work' ? 'bg-blue-600/25 text-cyan-300' : ''}`}>
              <Sparkles className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-[10px] tracking-tight mt-0.5">{t('tab.work')}</span>
            <span className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </button>

          {/* CENTER HERO ACTION: CALL CONTRACTOR */}
          <div className="relative -top-3">
            <a
              href="tel:+16094818197"
              className="w-13 h-13 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 text-white flex flex-col items-center justify-center shadow-lg shadow-blue-600/50 border-2 border-white/20 active:scale-90 transition-transform"
              aria-label="Call Vasquez Home Improvement Hotline"
            >
              <Phone className="w-5 h-5 text-white animate-pulse" />
              <span className="text-[8px] font-black uppercase tracking-tighter mt-0.5">{t('tab.call')}</span>
            </a>
          </div>

          {/* TAB 3: 10 TRADES */}
          <button
            onClick={() => scrollTo('services-section', 'trades')}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all cursor-pointer active:scale-90 ${
              activeTab === 'trades'
                ? 'text-cyan-400 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`p-1 rounded-xl transition-all ${activeTab === 'trades' ? 'bg-blue-600/25 text-cyan-300' : ''}`}>
              <Layers className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-[10px] tracking-tight mt-0.5">{t('tab.trades')}</span>
          </button>

          {/* TAB 4: FREE ESTIMATE (MODAL TRIGGER) */}
          <button
            onClick={onOpenEstimateModal}
            className="flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all cursor-pointer active:scale-90 text-blue-400 hover:text-cyan-300"
          >
            <div className="p-1 rounded-xl bg-blue-500/15 border border-blue-400/40 text-cyan-300 shadow-sm">
              <FileText className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-[10px] font-bold tracking-tight mt-0.5">{t('tab.estimate')}</span>
          </button>

        </div>
      </nav>

      {/* QUICK EXPLORE ACTION SHEET MODAL */}
      {sheetOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden bg-slate-950/80 backdrop-blur-md animate-in fade-in flex flex-col justify-end"
          onClick={() => setSheetOpen(false)}
        >
          <div 
            className="bg-slate-900 border-t border-blue-500/40 rounded-t-3xl p-5 shadow-2xl safe-area-bottom text-white animate-in slide-in-from-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grabber Pill Handle */}
            <div className="w-12 h-1.5 rounded-full bg-slate-700 mx-auto mb-4" />

            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <VasquezLogoIcon className="w-9 h-9" />
                <div>
                  <h4 className="text-sm font-black uppercase text-white">{t('tab.sheetTitle')}</h4>
                  <p className="text-[11px] text-cyan-400 font-mono">{t('brand.entity')}</p>
                </div>
              </div>
              <button 
                onClick={() => setSheetOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-bold">
              <button
                onClick={() => scrollTo('transformations-section', 'work')}
                className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center gap-2.5 hover:bg-slate-700 text-left"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t('nav.work')}</span>
              </button>
              <button
                onClick={() => scrollTo('services-section', 'trades')}
                className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center gap-2.5 hover:bg-slate-700 text-left"
              >
                <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t('nav.trades')}</span>
              </button>
              <button
                onClick={() => {
                  setSheetOpen(false);
                  const el = document.getElementById('hero-reviews-section') || document.getElementById('reviews-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center gap-2.5 hover:bg-slate-700 text-left"
              >
                <Star className="w-4 h-4 text-amber-400 shrink-0 fill-amber-400" />
                <span>{t('tab.reviews')}</span>
              </button>
              <button
                onClick={() => {
                  setSheetOpen(false);
                  const el = document.getElementById('service-area-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center gap-2.5 hover:bg-slate-700 text-left"
              >
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('tab.coverage')}</span>
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex gap-2">
              <a
                href="tel:+16094818197"
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-xl text-xs font-black uppercase text-center flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>(609) 481-8197</span>
              </a>
              <button
                onClick={() => {
                  setSheetOpen(false);
                  onOpenEstimateModal();
                }}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase text-center flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>{t('nav.estimate')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

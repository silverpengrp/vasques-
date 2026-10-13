import React, { useState, useEffect } from 'react';
import { Download, X, Share, CheckCircle2, ShieldCheck, Smartphone } from 'lucide-react';
import { VasquezLogoIcon } from './VasquezLogoIcon';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PWAInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running as installed standalone app
    const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    setIsStandalone(isStandaloneMode);

    // Detect iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isAppleDevice);

    // Check if dismissed before in localStorage
    const dismissed = localStorage.getItem('vasquez_pwa_banner_dismissed');
    if (dismissed && Date.now() - parseInt(dismissed) < 7 * 24 * 60 * 60 * 1000) {
      return;
    }

    // Capture Chrome / Android / Desktop PWA install event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Wait 3 seconds to avoid interrupting initial page experience
      setTimeout(() => {
        if (!isStandaloneMode) setShowBanner(true);
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // If iOS and not standalone, show iOS add-to-home hint after 4 seconds
    if (isAppleDevice && !isStandaloneMode) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 4000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setShowBanner(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('vasquez_pwa_banner_dismissed', Date.now().toString());
  };

  if (!showBanner || isStandalone) return null;

  return (
    <div className="fixed top-20 left-3 right-3 sm:left-auto sm:right-6 sm:w-96 z-50 animate-in slide-in-from-top-4 duration-300">
      <div className="bg-slate-900/98 backdrop-blur-2xl border-2 border-blue-500/60 rounded-3xl p-4 shadow-[0_15px_40px_rgba(0,102,255,0.35)] text-white relative">
        <button
          onClick={handleDismiss}
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-slate-400 hover:text-white bg-slate-800/80 cursor-pointer"
          aria-label="Close install prompt"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3">
          <div className="relative p-0.5 rounded-2xl bg-gradient-to-b from-blue-500 to-cyan-400 shrink-0 shadow-md">
            <VasquezLogoIcon className="w-11 h-11" />
          </div>
          <div className="pr-6">
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-black text-white leading-tight">Vasquez App</h4>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-black uppercase bg-blue-950 text-cyan-400 border border-blue-700">
                PWA
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
              Add to Home Screen for fast estimates & offline access
            </p>
          </div>
        </div>

        {isIOS && !deferredPrompt ? (
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-cyan-300">
            <span className="flex items-center gap-1.5">
              Tap <Share className="w-3.5 h-3.5 text-blue-400 inline" /> then <strong className="text-white">"Add to Home Screen"</strong>
            </span>
            <button
              onClick={handleDismiss}
              className="text-[10px] text-slate-400 hover:text-white underline cursor-pointer"
            >
              Got it
            </button>
          </div>
        ) : (
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-2">
            <button
              onClick={handleInstallClick}
              className="flex-1 py-2 px-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install App</span>
            </button>
            <button
              onClick={handleDismiss}
              className="py-2 px-3 bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-bold cursor-pointer"
            >
              Later
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

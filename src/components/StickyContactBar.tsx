import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface StickyContactBarProps {
  onOpenEstimateModal: () => void;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({ onOpenEstimateModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 p-2.5 px-4 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:+16094818197"
          className="flex-1 py-3 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 shadow-sm font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-blue-600 animate-pulse" />
          <span>Call (609) 481-8197</span>
        </a>

        <button
          onClick={onOpenEstimateModal}
          className="flex-1 py-3 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 active:scale-95 transition-transform cursor-pointer"
        >
          <span>Free Estimate</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

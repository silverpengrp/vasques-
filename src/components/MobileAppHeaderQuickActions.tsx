import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Star, 
  Phone, 
  FileText, 
  ArrowRight,
  Clock,
  MapPin,
  Check
} from 'lucide-react';
import { VasquezLogoIcon } from './VasquezLogoIcon';

interface MobileAppHeaderQuickActionsProps {
  onOpenEstimateModal: () => void;
  onSelectService: (serviceName: string) => void;
}

export const MobileAppHeaderQuickActions: React.FC<MobileAppHeaderQuickActionsProps> = ({
  onOpenEstimateModal,
  onSelectService
}) => {
  const [selectedQuickTrade, setSelectedQuickTrade] = useState<string | null>(null);

  const QUICK_ACTIONS = [
    { id: 'transformations-section', label: 'Before & After', sub: '9 Projects', icon: Sparkles, color: 'from-blue-600 to-cyan-500' },
    { id: 'services-section', label: '10 Trades', sub: 'All Specs', icon: Layers, color: 'from-indigo-600 to-blue-600' },
    { id: 'hero-reviews-section', label: '5.0 Reviews', sub: 'Verified', icon: Star, color: 'from-amber-500 to-orange-500' },
    { id: 'service-area-section', label: 'NJ Coverage', sub: '4 Counties', icon: MapPin, color: 'from-emerald-600 to-teal-500' }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden pt-3 px-3 pb-2 bg-gradient-to-b from-slate-950/90 to-transparent">
      {/* Horizontal App Action Chips Carousel */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 select-none">
        {QUICK_ACTIONS.map(action => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => scrollTo(action.id)}
              className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/90 border border-slate-800 text-white shadow-md active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <div className={`w-7 h-7 rounded-xl bg-gradient-to-tr ${action.color} flex items-center justify-center text-white shrink-0 shadow-xs`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="text-left leading-none">
                <div className="text-[11px] font-black tracking-tight">{action.label}</div>
                <div className="text-[9px] text-slate-400 font-medium mt-0.5">{action.sub}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';
import { Phone, Shield, MapPin, Clock, ArrowUp, Mail, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { VasquezLogoIcon } from './VasquezLogoIcon';

interface FooterProps {
  onOpenEstimateModal: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimateModal, onSelectService }) => {
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
                  HOME IMPROVEMENT CONTRACTOR LLC
                </p>
                <p className="text-xs text-slate-400 italic">
                  One Company. All Solutions.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We build, remodel, and elevate homes across New York, New Jersey, and Connecticut with master craftsmanship. Decks, patios, roofing, plumbing, remodeling, additions, masonry, painting, pressure washing, and tree trimming.
            </p>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3.5 max-w-sm space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-blue-300 font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>Licensed & Fully Insured Contractor LLC</span>
              </div>
              <p className="text-[11px] text-slate-400">
                General Liability Insurance • Workman's Compensation • Serving NY, NJ & CT
              </p>
            </div>
          </div>

          {/* 10 Services Quick Links (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Our 10 Core Services
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs">
              {SERVICES_DATA.map(service => (
                <button
                  key={service.id}
                  onClick={() => onSelectService(service.title)}
                  className="text-left text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                  <span className="truncate">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Contact & Dispatch (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3">
              Direct Contact
            </h4>
            
            <a
              href="tel:+16094818197"
              className="flex items-center gap-3 p-3.5 bg-slate-800/90 border border-slate-700 rounded-2xl hover:border-blue-500 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">Call Or Text</div>
                <div className="text-sm font-black text-white font-mono">+1 (609) 481-8197</div>
              </div>
            </a>

            <div className="space-y-2 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Serving NY, NJ & Connecticut (Tri-State Area)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Mon - Sat: 7:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>24/7 Emergency Storm Dispatch</span>
              </div>
            </div>

            <button
              onClick={onOpenEstimateModal}
              className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-blue-600/20 transition-all cursor-pointer"
            >
              Get Free Estimate
            </button>
          </div>

        </div>

        {/* Bottom copyright & Slogan banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Vasquez Home Improvement Contractor LLC. All Rights Reserved.
          </div>

          <div className="text-blue-400 font-mono tracking-widest font-bold">
            WE BUILD. WE IMPROVE. YOU ENJOY.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 text-blue-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

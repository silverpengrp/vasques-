import React, { useState } from 'react';
import { 
  SERVICES_DATA 
} from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  Hammer, 
  Droplets, 
  Home, 
  Sparkles, 
  Trees, 
  Paintbrush, 
  ShieldAlert, 
  BrickWall, 
  Armchair, 
  Layers, 
  Check, 
  Phone, 
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenEstimateModalWithService: (serviceTitle: string) => void;
  selectedServiceId?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onOpenEstimateModalWithService 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const renderTradeIcon = (id: string, className: string = "w-6 h-6") => {
    switch (id) {
      case 'decks':
        return <Layers className={className} />;
      case 'patios':
        return <Armchair className={className} />;
      case 'plumbing':
        return <Droplets className={className} />;
      case 'remodeling':
        return <Hammer className={className} />;
      case 'additions':
        return <Home className={className} />;
      case 'masonry':
        return <BrickWall className={className} />;
      case 'painting':
        return <Paintbrush className={className} />;
      case 'roofing':
        return <ShieldAlert className={className} />;
      case 'pressure-washing':
        return <Sparkles className={className} />;
      case 'tree-trimming':
        return <Trees className={className} />;
      default:
        return <Hammer className={className} />;
    }
  };

  const filteredServices = activeCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => {
        if (activeCategory === 'exterior') {
          return ['decks', 'patios', 'roofing', 'masonry', 'pressure-washing', 'tree-trimming'].includes(s.id);
        }
        if (activeCategory === 'interior') {
          return ['remodeling', 'plumbing', 'painting', 'additions'].includes(s.id);
        }
        return true;
      });

  return (
    <section id="services-section" className="py-20 md:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
              Official Sign Trade Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              10 Core Trade Services. <br />
              <span className="text-blue-600">
                One Master Contractor.
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every trade icon featured on our official emblem represents an in-house crew with specialized tools, NJ licensing compliance, and guaranteed workmanship.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-2xl shadow-sm shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'all' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 10 Trades
            </button>
            <button
              onClick={() => setActiveCategory('exterior')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'exterior' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Exterior & Grounds
            </button>
            <button
              onClick={() => setActiveCategory('interior')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'interior' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Interior & Remodeling
            </button>
          </div>
        </div>

        {/* 10 Services Grid on White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-white border border-slate-200 hover:border-blue-400 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/5 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    {renderTradeIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {String(idx + 1).padStart(2, '0')} / 10
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-bold text-blue-600 mt-0.5">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-700 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Metadata & Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{service.typicalDuration}</span>
                </div>

                <button
                  onClick={() => onOpenEstimateModalWithService(service.title)}
                  className="px-4 py-2 bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Get Quote</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Multi-Trade Coordination Guarantee Banner on Light Theme */}
        <div className="mt-12 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900">Need multiple trades handled on the same property?</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                We coordinate roofing, masonry, painting, and decks seamlessly with zero sub-contractor finger pointing.
              </p>
            </div>
          </div>

          <a
            href="tel:+16094818197"
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-md shadow-blue-600/20 transition-all shrink-0 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call +1 (609) 481-8197</span>
          </a>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  CheckCircle2,
  Navigation,
  Building2
} from 'lucide-react';

interface CountyArea {
  id: string;
  state: 'NJ' | 'NY' | 'CT';
  stateName: string;
  countyName: string;
  region: string;
  dispatchTime: string;
  permitStatus: string;
  towns: string[];
  recentJobs: string;
}

const SERVICE_AREAS: CountyArea[] = [
  // NEW JERSEY
  {
    id: 'mercer',
    state: 'NJ',
    stateName: 'New Jersey',
    countyName: 'Mercer County, NJ',
    region: 'Central New Jersey HQ',
    dispatchTime: 'Same-Day Priority Dispatch',
    permitStatus: 'Direct relations with municipal building departments & rapid plan approval',
    towns: ['Princeton', 'Hamilton', 'Lawrenceville', 'Robbinsville', 'West Windsor', 'Hopewell', 'Ewing', 'Trenton'],
    recentJobs: 'Complete kitchen remodels, second-story additions, architectural shingle roofs.'
  },
  {
    id: 'ocean-monmouth',
    state: 'NJ',
    stateName: 'New Jersey',
    countyName: 'Ocean & Monmouth, NJ',
    region: 'Jersey Shore & Coastal',
    dispatchTime: 'Within 24 Hours',
    permitStatus: 'Coastal wind load codes, stainless hurricane ties, & FEMA flood plain standards',
    towns: ['Toms River', 'Brick Township', 'Point Pleasant', 'Freehold', 'Marlboro', 'Manalapan', 'Red Bank', 'Middletown', 'Colts Neck'],
    recentJobs: 'Custom composite multi-level decks, storm damage roof restorations, luxury paver patios.'
  },
  {
    id: 'middlesex-north',
    state: 'NJ',
    stateName: 'New Jersey',
    countyName: 'Middlesex & North Jersey, NJ',
    region: 'Central & North Corridor',
    dispatchTime: 'Within 24 Hours',
    permitStatus: 'Full residential zoning setbacks, framing engineering, and building inspection pass',
    towns: ['Edison', 'Woodbridge', 'Old Bridge', 'East Brunswick', 'Paramus', 'Hoboken', 'Jersey City', 'Montclair', 'South Brunswick'],
    recentJobs: 'Open-concept interior renovations, James Hardie siding, commercial finish basements.'
  },
  {
    id: 'south-jersey',
    state: 'NJ',
    stateName: 'New Jersey',
    countyName: 'Burlington & Camden, NJ',
    region: 'South New Jersey',
    dispatchTime: 'Within 24–48 Hours',
    permitStatus: 'Licensed contractor credentials on file across all township building offices',
    towns: ['Cherry Hill', 'Mount Laurel', 'Marlton', 'Moorestown', 'Voorhees', 'Medford', 'Haddonfield', 'Cinnaminson'],
    recentJobs: 'Deck rebuilds, curbless master showers, foundation repointing, tree clearance.'
  },

  // NEW YORK
  {
    id: 'westchester-rockland',
    state: 'NY',
    stateName: 'New York',
    countyName: 'Westchester & Rockland, NY',
    region: 'Hudson Valley & Suburbs',
    dispatchTime: 'Within 24–48 Hours',
    permitStatus: 'New York State Uniform Code compliance, architectural plans & municipal filings',
    towns: ['White Plains', 'Yonkers', 'Scarsdale', 'New Rochelle', 'Rye', 'Mamaroneck', 'Nyack', 'Tarrytown', 'Ossining'],
    recentJobs: 'Slate and architectural roof replacements, structural deck expansions, luxury kitchen overhauls.'
  },
  {
    id: 'nyc-metro',
    state: 'NY',
    stateName: 'New York',
    countyName: 'New York City Metro, NY',
    region: 'Five Boroughs Metro',
    dispatchTime: 'Priority Scheduled Consultations',
    permitStatus: 'NYC Department of Buildings (DOB) compliance & landmark restoration expertise',
    towns: ['Staten Island', 'Brooklyn', 'Queens', 'Manhattan', 'The Bronx', 'Riverdale', 'Astoria', 'Bay Ridge'],
    recentJobs: 'Rooftop composite decks, brownstone masonry repointing, complete bathroom gut renovations.'
  },
  {
    id: 'long-island',
    state: 'NY',
    stateName: 'New York',
    countyName: 'Nassau & Suffolk, NY',
    region: 'Long Island Shore & Sound',
    dispatchTime: 'Within 24–48 Hours',
    permitStatus: 'Long Island municipal permit processing, windstorm fasteners, & moisture sealing',
    towns: ['Garden City', 'Great Neck', 'Manhasset', 'Oyster Bay', 'Huntington', 'Melville', 'Smithtown', 'Massapequa'],
    recentJobs: 'Multi-tiered outdoor living spaces, premium roofing systems, Hardie board siding transformations.'
  },

  // CONNECTICUT
  {
    id: 'fairfield-ct',
    state: 'CT',
    stateName: 'Connecticut',
    countyName: 'Fairfield County, CT',
    region: 'Connecticut Gold Coast',
    dispatchTime: 'Within 24–48 Hours',
    permitStatus: 'Connecticut State Building Code (CSBC) & Department of Consumer Protection registered',
    towns: ['Greenwich', 'Stamford', 'Norwalk', 'Westport', 'Darien', 'Fairfield', 'New Canaan', 'Ridgefield', 'Wilton'],
    recentJobs: 'Architectural composite decking, cedar shake & copper flashing roof builds, high-end master suite remodels.'
  },
  {
    id: 'new-haven-ct',
    state: 'CT',
    stateName: 'Connecticut',
    countyName: 'New Haven County, CT',
    region: 'South Central Connecticut',
    dispatchTime: 'Within 24–48 Hours',
    permitStatus: 'Municipal building inspector relations & 100% Connecticut code pass approval',
    towns: ['Milford', 'New Haven', 'Orange', 'Woodbridge', 'Branford', 'Guilford', 'Cheshire', 'Hamden'],
    recentJobs: 'Custom porticos, exterior waterproofing, full interior restorations, masonry walkways.'
  }
];

interface ServiceAreaSectionProps {
  onOpenEstimateModal: () => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onOpenEstimateModal }) => {
  const [selectedStateFilter, setSelectedStateFilter] = useState<'ALL' | 'NJ' | 'NY' | 'CT'>('ALL');
  const [selectedCountyId, setSelectedCountyId] = useState<string>('mercer');

  const filteredAreas = selectedStateFilter === 'ALL' 
    ? SERVICE_AREAS 
    : SERVICE_AREAS.filter(area => area.state === selectedStateFilter);

  const activeCounty = SERVICE_AREAS.find(c => c.id === selectedCountyId) || filteredAreas[0] || SERVICE_AREAS[0];

  return (
    <section id="service-area-section" className="py-20 md:py-28 bg-gradient-to-b from-[#071630] via-[#0a1e42] to-[#071630] text-slate-100 relative overflow-hidden border-t border-b border-blue-500/30 shadow-2xl">
      
      {/* Precision Blueprint Grid Architecture Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Atmospheric Ambient Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-radial from-blue-500/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-400/50 text-xs font-bold text-cyan-300 uppercase tracking-widest mb-3 shadow-inner">
              <Navigation className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tri-State Service Corridor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Serving NY, NJ and Connecticut
            </h2>
            <p className="mt-2 text-blue-100/90 text-sm sm:text-base max-w-2xl leading-relaxed">
              We know New York, New Jersey, and Connecticut municipal building codes inside and out. Select your state or region to inspect active covered towns, dispatch windows, and municipal permit turnaround.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-blue-950/80 rounded-2xl border border-blue-600/40 shadow-md backdrop-blur-md shrink-0">
            <div className="p-2 rounded-xl bg-blue-900/60 text-cyan-300">
              <Building2 className="w-5 h-5 text-cyan-400 shrink-0" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-white block">Central Tri-State Mobilization</span>
              <span className="text-emerald-300 font-semibold">Active Crews in NY, NJ & CT</span>
            </div>
          </div>
        </div>

        {/* State Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-300 mr-1">
            Filter State:
          </span>
          {[
            { id: 'ALL', label: 'All Tri-State (NY, NJ, CT)' },
            { id: 'NJ', label: 'New Jersey' },
            { id: 'NY', label: 'New York' },
            { id: 'CT', label: 'Connecticut' }
          ].map((tab) => {
            const isActive = selectedStateFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedStateFilter(tab.id as 'ALL' | 'NJ' | 'NY' | 'CT');
                  // If current selected area is not in the new filter, pick the first one
                  const targetList = tab.id === 'ALL' 
                    ? SERVICE_AREAS 
                    : SERVICE_AREAS.filter(a => a.state === tab.id);
                  if (targetList.length > 0 && !targetList.some(a => a.id === selectedCountyId)) {
                    setSelectedCountyId(targetList[0].id);
                  }
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-600/40 border border-cyan-400'
                    : 'bg-[#0b1c3d]/90 hover:bg-blue-900/70 text-blue-200 hover:text-white border border-blue-800/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* County Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
          {filteredAreas.map((county) => {
            const isSelected = county.id === activeCounty.id;
            return (
              <button
                key={county.id}
                onClick={() => setSelectedCountyId(county.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-cyan-400 shadow-lg shadow-blue-600/40 scale-[1.02]'
                    : 'bg-[#0b1c3d]/80 hover:bg-blue-900/60 text-blue-200 hover:text-white border-blue-800/60 shadow-xs backdrop-blur-md'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    isSelected ? 'text-cyan-100' : 'text-cyan-400'
                  }`}>
                    {county.region}
                  </span>
                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-blue-950/80 text-cyan-300 border border-blue-800'
                  }`}>
                    {county.state}
                  </span>
                </div>
                <div className="text-sm font-black leading-tight text-white">
                  {county.countyName}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected County Interactive Inspection Card */}
        <div className="bg-[#0b1c3d]/95 border border-blue-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-xl text-white">
          
          {/* Left 7 Cols: Towns List & Logistics */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">
                <span>Active Municipalities Served in {activeCounty.stateName}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
                <span>{activeCounty.countyName}</span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-blue-600/40 border border-blue-400/50 text-cyan-200 font-mono">
                  {activeCounty.state}
                </span>
              </h3>
            </div>

            {/* Towns Grid */}
            <div>
              <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-3">
                Covered Towns & Townships
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCounty.towns.map((town, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-950/70 border border-blue-600/40 text-blue-100 text-xs font-semibold"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{town}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-1">
                Recent Projects in {activeCounty.countyName}
              </div>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
                {activeCounty.recentJobs}
              </p>
            </div>

          </div>

          {/* Right 5 Cols: Dispatch Box & Fast Action */}
          <div className="lg:col-span-5 bg-blue-950/80 border border-blue-600/40 rounded-2xl p-6 sm:p-8 space-y-5">
            
            <div className="space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-blue-300 font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Estimate Response Window</span>
              </div>
              <div className="text-lg font-black text-white">
                {activeCounty.dispatchTime}
              </div>
            </div>

            <div className="pt-3 border-t border-blue-800/60 space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-blue-300 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Building Department Permitting Knowledge</span>
              </div>
              <p className="text-xs text-blue-100/90 leading-relaxed font-medium">
                {activeCounty.permitStatus}
              </p>
            </div>

            <div className="pt-3 border-t border-blue-800/60 space-y-2.5">
              <button
                onClick={onOpenEstimateModal}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer active:scale-95 border border-cyan-400/40"
              >
                <span>Request {activeCounty.countyName} On-Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+16094818197"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-900/60 hover:bg-blue-800 text-white font-bold text-xs rounded-xl border border-blue-600/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call Dispatch: +1 (609) 481-8197</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Layers, 
  ShieldAlert, 
  Hammer, 
  Home, 
  BrickWall, 
  PanelTop, 
  Paintbrush, 
  Droplets, 
  Sparkles, 
  Trees, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  FileCheck,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TradeDetail {
  id: string;
  name: string;
  shortName: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  blueprintCode: string;
  permitRequirement: string;
  warrantyPeriod: string;
  typicalDuration: string;
  materials: string[];
  keySpecs: string[];
  pricingGuide: string;
  description: string;
}

const TRADES: TradeDetail[] = [
  {
    id: 'decks',
    name: 'Decks & Outdoor Living',
    shortName: 'Decks',
    icon: Layers,
    tagline: 'Custom Trex Composite, Cedar & Multi-Tier Living',
    blueprintCode: 'NJ-IRC R507 COMPLIANT',
    permitRequirement: 'Footing depth 36"-42" frost line, ledger tension ties & framing inspection required',
    warrantyPeriod: '10-Year Structural & 25-Yr Manufacturer Warranty',
    typicalDuration: '3 – 7 Working Days',
    materials: ['Trex Transcend & Enhance', 'TimberTech AZEK', 'Kiln-Dried Douglas Fir 2x10', 'Stainless Concealed Fasteners'],
    keySpecs: [
      'Engineered ledger board attachment with code-approved Simpson Strong-Tie bolts',
      'Helical pile or concrete Sonotube footings below frost depth',
      'Continuous aluminum drink rail & tempered glass or cable infill',
      '12V low-voltage recessed stair risers & post cap illumination'
    ],
    pricingGuide: 'Starting at $4,500',
    description: 'We engineer multi-level composite and exotic hardwood decks designed to endure New Jersey freeze-thaw cycles without rotting, warping, or splintering.'
  },
  {
    id: 'roofing',
    name: 'Roofing & Architectural Shingles',
    shortName: 'Roofing',
    icon: ShieldAlert,
    tagline: '50-Year Architectural Shingle Systems & Leakproof Flashing',
    blueprintCode: 'NJ-UCC 130-MPH WIND RATED',
    permitRequirement: 'Township tear-off permit required; ice & water shield inspection at eaves and valleys',
    warrantyPeriod: '50-Year Non-Prorated GAF System Warranty',
    typicalDuration: '1 – 2 Days Complete Tear-Off',
    materials: ['GAF Timberline HDZ', 'Owens Corning Duration', 'TigerPaw Synthetic Underlayment', 'Aluminum Step & Chimney Flashing'],
    keySpecs: [
      'Complete strip-down to deck sheathing with replacement of rotted CDX plywood',
      'Dual-layer ice-and-water barrier at eaves, valleys, sidewalls, and chimneys',
      'Cobra continuous ridge ventilation system for balanced attic airflow',
      'Magnetic yard sweep to guarantee 100% nail removal for pets & tires'
    ],
    pricingGuide: 'Starting at $5,000',
    description: 'Certified roof replacements using high-definition architectural shingles engineered for coastal New Jersey winds, heavy snowfall, and heavy rain.'
  },
  {
    id: 'remodeling',
    name: 'Kitchen & Bath Remodeling',
    shortName: 'Remodeling',
    icon: Hammer,
    tagline: 'Open-Concept Living, Quartz Islands & Spa Enclosures',
    blueprintCode: 'NJ-IRC CH.11 SPACE STANDARDS',
    permitRequirement: 'Rough-in electrical, plumbing, framing and final township inspection package',
    warrantyPeriod: '10-Year Vasquez Craftsmanship Warranty',
    typicalDuration: '2 – 3 Weeks',
    materials: ['Custom Maple Shaker Cabinetry', '3cm Calacatta Quartz', 'Schluter-KERDI Waterproofing', 'Solid Brass Fixtures'],
    keySpecs: [
      'Structural load-bearing wall removal with engineered LVL beam installations',
      'Dedicated 20-amp appliance circuits & GFCI-protected code arrays',
      'Custom zero-threshold curbless walk-in showers with linear trench drains',
      'Moisture-resistant drywall & zero-VOC high-traffic paint finishes'
    ],
    pricingGuide: 'Starting at $6,000',
    description: 'From dream chef kitchens to tranquil master baths, our master carpenters and licensed tradesmen handle the complete turnkey transformation.'
  },
  {
    id: 'additions',
    name: 'Additions & Structural Framing',
    shortName: 'Additions',
    icon: Home,
    tagline: 'Second-Story Expansions, Sunrooms & In-Law Suites',
    blueprintCode: 'NJ-UCC ARCHITECTURAL STAMPED',
    permitRequirement: 'Zoning setback approval, stamped architectural plans, full phased municipal inspections',
    warrantyPeriod: '10-Year Structural Guarantee',
    typicalDuration: '4 – 8 Weeks',
    materials: ['2x6 Exterior Framing', 'Engineered LVL Headers', 'R-30 Eco Insulation', 'EnergyStar Argon Windows'],
    keySpecs: [
      'Poured foundation extension tied to existing foundation with epoxy rebar dowels',
      'Seamless roofline tie-in and exterior siding blending to match original home',
      'High-efficiency HVAC zone integration and dedicated sub-panel wiring',
      'Turnkey delivery from initial architectural blueprints to final Certificate of Occupancy'
    ],
    pricingGuide: 'Starting at $20,000',
    description: 'Expand your living space without moving. We build master suites, family rooms, sunrooms, and full second-story additions built to the highest architectural standards.'
  },
  {
    id: 'masonry',
    name: 'Masonry, Pavers & Hardscaping',
    shortName: 'Masonry',
    icon: BrickWall,
    tagline: 'Interlocking Paver Patios, Retaining Walls & Stone Fire Pits',
    blueprintCode: 'ICPI CERTIFIED INSTALLATION',
    permitRequirement: 'Zoning impervious coverage review; retaining walls over 4ft require stamped engineering',
    warrantyPeriod: '5-Year Base Settling Guarantee',
    typicalDuration: '3 – 6 Working Days',
    materials: ['Cambridge & Techo-Bloc Pavers', 'Pennsylvania Bluestone', 'Crushed Aggregate Base QP', 'Polymeric Jointing Sand'],
    keySpecs: [
      'Excavation to virgin subsoil with 6"-8" compacted gravel aggregate base',
      'Heavy geotextile stabilization fabric to prevent settlement and weed intrusion',
      'Concrete reinforced edge restraints and high-performance polymeric locking sand',
      'Built-in natural stone seating walls, fire pits, and outdoor kitchen islands'
    ],
    pricingGuide: 'Starting at $3,500',
    description: 'Durable, resort-style outdoor living spaces crafted with precision-cut natural stone and interlocking concrete pavers engineered for zero sinking.'
  },
  {
    id: 'siding',
    name: 'Siding & Exterior Enclosures',
    shortName: 'Siding',
    icon: PanelTop,
    tagline: 'James Hardie Fiber Cement, Insulated Vinyl & Trim Capping',
    blueprintCode: 'NJ-ENERGY CODE R-VALUE RATED',
    permitRequirement: 'Exterior building permit; moisture barrier flashing verification',
    warrantyPeriod: '30-Year Manufacturer Warranty',
    typicalDuration: '3 – 6 Days',
    materials: ['James Hardie ColorPlus', 'CertainTeed Monogram Vinyl', 'HydroGap Drainable Housewrap', 'Aluminum Custom Coil Trim'],
    keySpecs: [
      'Full removal of old siding with complete moisture inspection of exterior wall sheathing',
      'Breathable drainable weather barrier with tape-sealed joints around windows and doors',
      'Heavy-duty wind-lock perimeter nails and reinforced corner posts',
      'Custom aluminum bend capping on all exterior window sills and fascia boards'
    ],
    pricingGuide: 'Starting at $4,000',
    description: 'Transform your home exterior curb appeal and lower energy bills with insulated siding systems built to withstand New Jersey coastal storms.'
  },
  {
    id: 'painting',
    name: 'Interior & Exterior Painting',
    shortName: 'Painting',
    icon: Paintbrush,
    tagline: 'Precision Spray & Brush, Cabinet Enameling & Trim Finish',
    blueprintCode: 'LOW-VOC EPA LEAD-SAFE CERTIFIED',
    permitRequirement: 'No municipal permit needed; EPA lead-safe containment for pre-1978 homes',
    warrantyPeriod: '3-Year Peeling & Flaking Guarantee',
    typicalDuration: '2 – 5 Days',
    materials: ['Benjamin Moore Regal Select', 'Sherwin-Williams Emerald', 'Urethane Trim Enamel', 'Peel-Bond Primer'],
    keySpecs: [
      'Rigorous surface prep: scraping, power-sanding, nail hole filling, and elastomeric caulking',
      'Complete furniture masking and plastic containment with floor paper runners',
      'Two full topcoats applied with airless spray and back-rolling for ultra-smooth sheen',
      'Factory-smooth cabinet spray finishing with durable conversion varnish'
    ],
    pricingGuide: 'Starting at $1,200',
    description: 'Museum-grade interior and exterior paint finishes. Sharp razor lines, flawless drywall repairs, and durable coats that stay vibrant for years.'
  },
  {
    id: 'plumbing',
    name: 'Residential Plumbing & Repiping',
    shortName: 'Plumbing',
    icon: Droplets,
    tagline: 'Rough-Ins, Tankless Water Heaters & Leak Diagnostics',
    blueprintCode: 'NJ MASTER PLUMBING CODE',
    permitRequirement: 'Plumbing permit required for fixture relocations and water heater installs',
    warrantyPeriod: '5-Year Leak-Free Guarantee',
    typicalDuration: 'Same-Day to 3 Days',
    materials: ['Uponor PEX-A ProPEX', 'Cast Iron / PVC Drain Waste Vent', 'Navien Tankless Heaters', 'Brass Ball Valves'],
    keySpecs: [
      'Expansion PEX-A water distribution piping immune to scale and freeze burst',
      'High-capacity tankless gas water heater conversions for endless hot water',
      'Code-compliant slope and venting on all shower and toilet waste lines',
      'Whole-house pressure regulating valves and sediment backflow prevention'
    ],
    pricingGuide: 'Starting at $250',
    description: 'Complete residential plumbing solutions for kitchen expansions, bathroom suites, and emergency line repairs performed to exact code standards.'
  },
  {
    id: 'pressure-washing',
    name: 'Commercial Pressure Washing',
    shortName: 'Power Wash',
    icon: Sparkles,
    tagline: 'Soft-Wash Siding, Rotary Concrete & Paver Restoration',
    blueprintCode: 'ECO-SAFE BIODEGRADABLE',
    permitRequirement: 'No permit needed; environmentally compliant runoff protection',
    warrantyPeriod: '1-Year Algae-Free Surface Guarantee',
    typicalDuration: '2 – 6 Hours',
    materials: ['Soft-Wash Low Pressure System', 'Rotary Surface Cleaners', 'Bio-Safe Surfactants', 'Algaecide Treatment'],
    keySpecs: [
      'Low-pressure soft wash method that sanitizes vinyl and stucco without damaging seals',
      'High-pressure rotary surface scrubbing for deeply soiled concrete, brick, and pavers',
      'Specialized mildew treatments that kill algae at the spore level to prevent fast regrowth',
      'Safe on plants, landscaping, and outdoor furnishings with fresh rinse protection'
    ],
    pricingGuide: 'Starting at $280',
    description: 'Instantly restore the vibrant look of your siding, deck, roof, patio, and driveway with commercial hot-water pressure and gentle soft-washing.'
  },
  {
    id: 'tree-trimming',
    name: 'Tree Trimming & Hazard Mitigation',
    shortName: 'Tree Care',
    icon: Trees,
    tagline: 'Canopy Thinning, Roofline Clearance & Hazard Removal',
    blueprintCode: 'NJ PROPERTY CLEARANCE CODE',
    permitRequirement: 'Township tree preservation ordinance check where applicable',
    warrantyPeriod: '100% Debris Cleanout Guarantee',
    typicalDuration: 'Half Day to 1 Day',
    materials: ['Stihl Pro Chainsaws', 'Rigging Ropes & Pulleys', 'Hydraulic Wood Chipper', 'Stump Grinder'],
    keySpecs: [
      'Removal of dangerous limbs hanging over roofs, gutters, driveways, and power lines',
      'Aesthetic crown thinning to allow sunlight through and reduce wind drag during storms',
      'Full on-site wood chipping, branch hauling, and raking of lawn surfaces',
      'Emergency post-storm branch clearance and optional below-grade stump grinding'
    ],
    pricingGuide: 'Starting at $350',
    description: 'Protect your roof and property from violent coastal storm winds with precision tree pruning, branch lowering, and complete debris removal.'
  }
];

interface TradeMatrixSectionProps {
  onSelectServiceForEstimate: (tradeName: string) => void;
  onOpenCalculatorWithService: (serviceId: string) => void;
}

export const TradeMatrixSection: React.FC<TradeMatrixSectionProps> = ({
  onSelectServiceForEstimate,
  onOpenCalculatorWithService
}) => {
  const { t } = useLanguage();
  const [selectedTradeId, setSelectedTradeId] = useState<string>('decks');

  const activeTrade = TRADES.find(t => t.id === selectedTradeId) || TRADES[0];
  const IconComponent = activeTrade.icon;

  return (
    <section 
      id="services-section" 
      className="py-20 md:py-32 bg-gradient-to-b from-[#040c1a] via-[#081b3e] to-[#040c1a] text-slate-100 relative overflow-hidden border-t border-b border-cyan-500/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
    >
      {/* Precision Blueprint Grid Architecture Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Atmospheric Multi-Layered Cyan & Blue Radiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-radial from-blue-500/25 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* STAND-OUT ARCHITECTURAL SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Glowing Accent Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-cyan-950/90 border border-cyan-400/60 text-xs font-black text-cyan-300 uppercase tracking-widest mb-4 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
              </span>
              <FileCheck className="w-4 h-4 text-cyan-400" />
              <span>{t('trades.kicker')}</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
              {t('trades.title')}
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-blue-100/90 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal">
              {t('trades.desc')}
            </p>
          </div>

          {/* Trust Authority Badges (Right side) */}
          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2.5 shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-950/90 border border-blue-500/40 text-xs font-bold text-white shadow-md backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Serving NY, NJ & Connecticut</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-950/90 border border-blue-500/40 text-xs font-bold text-white shadow-md backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>$2,000,000 Liability Insured</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-950/90 border border-blue-500/40 text-xs font-bold text-white shadow-md backdrop-blur-md">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Dedicated Permanent In-House Crew</span>
            </div>
          </div>
        </div>

        {/* 10-TRADE INTERACTIVE ARCHITECTURAL SWITCHBOARD */}
        <div className="relative mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-2.5">
            {TRADES.map((trade, idx) => {
              const TradeIcon = trade.icon;
              const isSelected = trade.id === selectedTradeId;
              const tradeNumber = String(idx + 1).padStart(2, '0');
              
              return (
                <button
                  key={trade.id}
                  onClick={() => setSelectedTradeId(trade.id)}
                  className={`relative flex flex-col items-center justify-between p-3 rounded-2xl transition-all duration-300 cursor-pointer text-center group border ${
                    isSelected
                      ? 'bg-gradient-to-b from-blue-600 via-blue-500 to-cyan-600 text-white border-cyan-300 shadow-[0_0_30px_rgba(56,189,248,0.45)] scale-[1.04] z-20 ring-2 ring-cyan-400/50'
                      : 'bg-[#091838]/80 hover:bg-[#0d2250] text-blue-200 hover:text-white border-blue-800/60 hover:border-cyan-500/50 shadow-md backdrop-blur-md'
                  }`}
                >
                  {/* Micro Index Number */}
                  <span className={`text-[9px] font-mono font-black tracking-widest uppercase mb-1 ${
                    isSelected ? 'text-cyan-200' : 'text-blue-400/80 group-hover:text-cyan-300'
                  }`}>
                    {tradeNumber}
                  </span>

                  {/* Icon Well */}
                  <div className={`p-2 rounded-xl mb-1.5 transition-all duration-300 ${
                    isSelected 
                      ? 'bg-white/20 text-white shadow-inner scale-110' 
                      : 'bg-blue-950/80 text-cyan-400 group-hover:bg-blue-900 group-hover:scale-105'
                  }`}>
                    <TradeIcon className="w-5 h-5" />
                  </div>

                  {/* Label */}
                  <span className="text-[11px] font-black tracking-tight leading-tight line-clamp-1">
                    {trade.shortName}
                  </span>

                  {/* Active Indicator Pip */}
                  {isSelected && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE TRADE ARCHITECTURAL DRAFTING SPECIFICATION BOARD */}
        <div className="bg-[#091b3e]/95 border-2 border-blue-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-2xl text-white">
          
          {/* Subtle Blueprint Grid inside card */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px'
            }}
          />

          {/* Technical Corner Crosshairs */}
          <div className="absolute top-4 left-4 text-cyan-400/40 font-mono text-xs select-none pointer-events-none">+ 01</div>
          <div className="absolute top-4 right-4 text-cyan-400/40 font-mono text-xs select-none pointer-events-none">02 +</div>

          {/* Top Banner of Active Trade */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-blue-800/80">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 border-2 border-cyan-300/80 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/40">
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    {activeTrade.name}
                  </h3>
                  <span className="px-3 py-1 rounded-lg bg-blue-950/95 border border-cyan-400 text-cyan-300 text-[11px] font-mono font-black shadow-sm">
                    {activeTrade.blueprintCode}
                  </span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-blue-200/90 font-medium max-w-xl">
                  {activeTrade.tagline}
                </p>
              </div>
            </div>

            {/* Fast Action CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectServiceForEstimate(activeTrade.name)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all cursor-pointer active:scale-95 border border-cyan-300/60"
              >
                <span>Request Free Estimate for {activeTrade.shortName}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Trade Blueprint Spec Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left 7 Columns: Architectural Scope & Specifications */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Scope & Overview */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-950/60 border border-blue-700/50 shadow-inner">
                <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Scope & Architectural Overview</span>
                </h4>
                <p className="text-blue-100/90 text-sm leading-relaxed font-normal">
                  {activeTrade.description}
                </p>
              </div>

              {/* Key Specifications */}
              <div>
                <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Key Construction Specifications</span>
                </h4>
                <div className="space-y-2.5">
                  {activeTrade.keySpecs.map((spec, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-3 rounded-xl bg-blue-950/50 border border-blue-800/60 text-xs sm:text-sm text-blue-100 hover:border-cyan-400/50 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certified Materials */}
              <div className="pt-2">
                <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Certified Commercial Materials</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeTrade.materials.map((mat, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-950 to-blue-900 border border-blue-600/60 text-cyan-200 text-xs font-semibold shadow-xs"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Code, Warranty & Logistics Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0b1e42] to-[#071630] border-2 border-blue-500/40 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl">
              
              {/* Township Permitting Guarantee */}
              <div className="space-y-1.5">
                <div className="text-[11px] uppercase tracking-wider text-cyan-400 font-black flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>NJ Building Code & Permitting Guarantee</span>
                </div>
                <p className="text-xs text-blue-100/90 leading-relaxed font-medium">
                  {activeTrade.permitRequirement}
                </p>
              </div>

              {/* Warranty Protection */}
              <div className="pt-4 border-t border-blue-800/80">
                <div className="text-[11px] uppercase tracking-wider text-cyan-400 font-black flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Warranty & Protection</span>
                </div>
                <div className="text-sm font-bold text-white mt-1 leading-snug">
                  {activeTrade.warrantyPeriod}
                </div>
              </div>

              {/* Direct Crew Promise Card */}
              <div className="pt-4 border-t border-blue-800/80">
                <div className="bg-blue-900/50 border border-cyan-500/40 rounded-2xl p-4 text-xs text-blue-200 space-y-1.5 shadow-inner">
                  <div className="font-black text-cyan-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>Vasquez Direct Crew Promise</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-blue-100/90 font-medium">
                    All carpentry, roofing, framing, and masonry is completed by Carlos Vasquez and our dedicated permanent craftsmen. We never hand off your family's home to random third-party day labor.
                  </p>
                </div>
              </div>

              {/* Schedule On-Site Consultation Button */}
              <button
                onClick={() => onSelectServiceForEstimate(activeTrade.name)}
                className="w-full py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2 border border-cyan-400/50 active:scale-95"
              >
                <span>Schedule Consultation for {activeTrade.shortName}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

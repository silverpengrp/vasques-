import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  Check, 
  Layers, 
  ShieldAlert, 
  Hammer, 
  BrickWall, 
  Paintbrush, 
  PanelTop, 
  Droplets, 
  Sparkles,
  Info,
  BadgePercent
} from 'lucide-react';

interface TradeEstimatorConfig {
  id: string;
  name: string;
  unitLabel: string;
  minUnit: number;
  maxUnit: number;
  step: number;
  defaultUnit: number;
  ratePerUnit: {
    essential: number;
    architectural: number;
    estate: number;
  };
  baseFixedCost: number;
  unitPresetLabels: { [key: number]: string };
}

const TRADE_CONFIGS: TradeEstimatorConfig[] = [
  {
    id: 'decks',
    name: 'Decks & Outdoor Living',
    unitLabel: 'Square Feet',
    minUnit: 150,
    maxUnit: 1200,
    step: 25,
    defaultUnit: 400,
    ratePerUnit: {
      essential: 28,      // Pressure treated cedar
      architectural: 42,  // Trex Transcend composite
      estate: 62          // Ipe hardwood & cable railing
    },
    baseFixedCost: 1200,
    unitPresetLabels: {
      250: 'Townhouse Deck (12x20)',
      400: 'Suburban Standard (16x25)',
      650: 'Bi-Level Entertaining Deck',
      900: 'Estate Multi-Tier & Pergola'
    }
  },
  {
    id: 'roofing',
    name: 'Architectural Roofing',
    unitLabel: 'Roof Squares (100 sq ft each)',
    minUnit: 15,
    maxUnit: 60,
    step: 1,
    defaultUnit: 28,
    ratePerUnit: {
      essential: 420,     // 30-year architectural
      architectural: 560, // GAF Timberline HDZ + synthetic underlayment
      estate: 750         // Lifetime designer shingles + copper valleys
    },
    baseFixedCost: 1500,
    unitPresetLabels: {
      20: 'Ranch / Cape Cod (2,000 sq ft roof)',
      28: 'Standard Colonial (2,800 sq ft roof)',
      38: 'Large 2-Story (3,800 sq ft roof)',
      50: 'Luxury Estate / Multi-Gable'
    }
  },
  {
    id: 'remodeling',
    name: 'Kitchen & Bath Remodeling',
    unitLabel: 'Square Feet of Remodel Area',
    minUnit: 80,
    maxUnit: 800,
    step: 10,
    defaultUnit: 250,
    ratePerUnit: {
      essential: 85,      // Clean update & stock cabinetry
      architectural: 155, // Custom shaker + quartz waterfall
      estate: 245         // Chef layout, structural beam removal
    },
    baseFixedCost: 3500,
    unitPresetLabels: {
      100: 'Full Bathroom Remodel',
      250: 'Standard Modern Kitchen',
      450: 'Open Concept Kitchen & Dining',
      700: 'Full Floor Interior Overhaul'
    }
  },
  {
    id: 'masonry',
    name: 'Masonry & Paver Patios',
    unitLabel: 'Square Feet of Pavers',
    minUnit: 200,
    maxUnit: 1500,
    step: 50,
    defaultUnit: 500,
    ratePerUnit: {
      essential: 24,      // Interlocking concrete pavers
      architectural: 38,  // Cambridge multi-piece & stone fire pit
      estate: 54          // Natural bluestone & retaining seat walls
    },
    baseFixedCost: 900,
    unitPresetLabels: {
      300: 'Intimate Fire Pit Patio',
      500: 'Family Dining & BBQ Patio',
      800: 'Large Entertaining Hardscape',
      1200: 'Resort Style Backyard'
    }
  },
  {
    id: 'siding',
    name: 'Siding & Exterior Capping',
    unitLabel: 'Square Feet of Exterior Wall',
    minUnit: 800,
    maxUnit: 4000,
    step: 100,
    defaultUnit: 2200,
    ratePerUnit: {
      essential: 6.5,     // Premium insulated vinyl
      architectural: 11.5,// James Hardie fiber cement
      estate: 17.0        // Board & batten + cedar shake accents
    },
    baseFixedCost: 1200,
    unitPresetLabels: {
      1500: 'Small 1-Story Home',
      2200: 'Standard 2-Story Colonial',
      3200: 'Executive Suburban Residence'
    }
  },
  {
    id: 'painting',
    name: 'Interior / Exterior Painting',
    unitLabel: 'Square Feet of Wall & Ceiling',
    minUnit: 400,
    maxUnit: 4500,
    step: 100,
    defaultUnit: 1800,
    ratePerUnit: {
      essential: 2.5,     // Two coats quality latex
      architectural: 4.2, // Benjamin Moore Regal + full surface prep
      estate: 6.0         // Fine spray enameling & millwork
    },
    baseFixedCost: 500,
    unitPresetLabels: {
      800: '2-3 Bedroom Refresh',
      1800: 'Full House Interior Repaint',
      3000: 'Complete Interior & Exterior'
    }
  }
];

interface CostEstimatorSectionProps {
  onOpenEstimateModalWithDetails: (details: {
    service: string;
    size: number;
    tier: string;
    estimatedCost: string;
  }) => void;
}

export const CostEstimatorSection: React.FC<CostEstimatorSectionProps> = ({
  onOpenEstimateModalWithDetails
}) => {
  const [selectedTradeId, setSelectedTradeId] = useState<string>('decks');
  const [selectedTier, setSelectedTier] = useState<'essential' | 'architectural' | 'estate'>('architectural');
  
  const currentConfig = useMemo(() => {
    return TRADE_CONFIGS.find(c => c.id === selectedTradeId) || TRADE_CONFIGS[0];
  }, [selectedTradeId]);

  const [units, setUnits] = useState<number>(currentConfig.defaultUnit);

  // When switching trades, reset to default unit for that trade
  const handleTradeChange = (newTradeId: string) => {
    setSelectedTradeId(newTradeId);
    const cfg = TRADE_CONFIGS.find(c => c.id === newTradeId) || TRADE_CONFIGS[0];
    setUnits(cfg.defaultUnit);
  };

  // Add-on checkboxes
  const [includePermits, setIncludePermits] = useState<boolean>(true);
  const [includeDisposal, setIncludeDisposal] = useState<boolean>(true);
  const [includeLighting, setIncludeLighting] = useState<boolean>(false);

  // Financial calculations
  const calculation = useMemo(() => {
    const rate = currentConfig.ratePerUnit[selectedTier];
    const baseTradeCost = currentConfig.baseFixedCost + (units * rate);

    let addonCost = 0;
    if (includePermits) addonCost += 350; // NJ township filing assistance
    if (includeDisposal) addonCost += 480; // Roll-off container & haul-away
    if (includeLighting) addonCost += 850; // Integrated LED lighting array

    const totalEstimate = baseTradeCost + addonCost;
    const lowRange = Math.round(totalEstimate * 0.92);
    const highRange = Math.round(totalEstimate * 1.08);

    return {
      total: totalEstimate,
      low: lowRange,
      high: highRange,
      formattedRange: `$${lowRange.toLocaleString()} – $${highRange.toLocaleString()}`
    };
  }, [currentConfig, selectedTier, units, includePermits, includeDisposal, includeLighting]);

  const handleApplyToModal = () => {
    onOpenEstimateModalWithDetails({
      service: currentConfig.name,
      size: units,
      tier: selectedTier.toUpperCase(),
      estimatedCost: calculation.formattedRange
    });
  };

  return (
    <section id="calculator-section" className="py-20 md:py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      {/* Blueprint grid accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#64748b 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
            <Calculator className="w-4 h-4 text-blue-600" />
            <span>Interactive Scope & Budget Architect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Transparent Project Cost Estimator
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            No guessing games or inflated quotes. Configure your project dimensions and finish tier to generate a realistic New Jersey cost benchmark in seconds.
          </p>
        </div>

        {/* Main Estimator Architecture Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 7 COLS: Controls & Scope Selectors */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Trade Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                1. Select Trade Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {TRADE_CONFIGS.map(t => (
                  <button
                    key={t.id}
                    onClick={() => handleTradeChange(t.id)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedTradeId === t.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white hover:bg-slate-100/80 text-slate-800 border-slate-200'
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight">{t.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions / Footprint Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. Project Footprint ({currentConfig.unitLabel})
                </label>
                <div className="text-base sm:text-lg font-mono font-black text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  {units.toLocaleString()} {currentConfig.unitLabel}
                </div>
              </div>

              <input
                type="range"
                min={currentConfig.minUnit}
                max={currentConfig.maxUnit}
                step={currentConfig.step}
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>{currentConfig.minUnit} {currentConfig.unitLabel}</span>
                <span>{currentConfig.maxUnit} {currentConfig.unitLabel}</span>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {Object.entries(currentConfig.unitPresetLabels).map(([presetVal, label]) => (
                  <button
                    key={presetVal}
                    onClick={() => setUnits(Number(presetVal))}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors cursor-pointer ${
                      units === Number(presetVal)
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material & Finish Tier */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                3. Material & Finish Grade
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                <button
                  onClick={() => setSelectedTier('essential')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedTier === 'essential'
                      ? 'bg-white border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white/80 hover:bg-white border-slate-200'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900 mb-1">Essential Quality</div>
                  <div className="text-[11px] text-slate-500 leading-tight">
                    Code-compliant contractor grade materials built for dependable durability.
                  </div>
                </button>

                <button
                  onClick={() => setSelectedTier('architectural')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                    selectedTier === 'architectural'
                      ? 'bg-white border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white/80 hover:bg-white border-slate-200'
                  }`}
                >
                  <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded-md bg-blue-600 text-white text-[9px] font-extrabold uppercase">
                    Most Popular
                  </span>
                  <div className="text-xs font-bold text-slate-900 mb-1">Architectural Master</div>
                  <div className="text-[11px] text-slate-500 leading-tight">
                    Trex composite, GAF architectural shingles, quartz countertops & 10-yr warranty.
                  </div>
                </button>

                <button
                  onClick={() => setSelectedTier('estate')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedTier === 'estate'
                      ? 'bg-white border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white/80 hover:bg-white border-slate-200'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900 mb-1">Luxury Custom Estate</div>
                  <div className="text-[11px] text-slate-500 leading-tight">
                    Exotic hardwoods, custom millwork, designer metals & bespoke craftsmanship.
                  </div>
                </button>

              </div>
            </div>

            {/* Step 4: Optional Scope Add-Ons */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                4. Township & Site Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                
                <label className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includePermits}
                    onChange={(e) => setIncludePermits(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded-sm accent-blue-600"
                  />
                  <div>
                    <span className="font-semibold text-slate-800">NJ Permit Package</span>
                    <span className="block text-[10px] text-slate-400">Township filing & plans</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeDisposal}
                    onChange={(e) => setIncludeDisposal(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded-sm accent-blue-600"
                  />
                  <div>
                    <span className="font-semibold text-slate-800">Debris Haul-Away</span>
                    <span className="block text-[10px] text-slate-400">Roll-off dumpster disposal</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeLighting}
                    onChange={(e) => setIncludeLighting(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded-sm accent-blue-600"
                  />
                  <div>
                    <span className="font-semibold text-slate-800">Ambient LED Array</span>
                    <span className="block text-[10px] text-slate-400">12V transformer & wiring</span>
                  </div>
                </label>

              </div>
            </div>

          </div>

          {/* RIGHT 5 COLS: Real-Time Dynamic Estimate Output */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                <span>Estimated Investment Range</span>
                <span className="text-blue-600 font-mono">NJ Region 2026</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight text-blue-700">
                {calculation.formattedRange}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Includes material subtotal, licensed master labor, structural fastening, and cleanup.
              </p>
            </div>

            {/* Scope Summary Line Items */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
              <div className="flex justify-between items-center">
                <span>Selected Trade:</span>
                <span className="font-bold text-slate-900">{currentConfig.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Footprint / Scope:</span>
                <span className="font-bold text-slate-900">{units.toLocaleString()} {currentConfig.unitLabel}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Finish Specification:</span>
                <span className="font-bold text-slate-900 uppercase">{selectedTier}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Estimated Crew Duration:</span>
                <span className="font-bold text-slate-900">3 – 6 Working Days</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Warranty Included:</span>
                <span className="font-bold text-emerald-600">10-Year Craftsmanship Guarantee</span>
              </div>
            </div>

            {/* Transparency Note */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-500 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                Final written contract is delivered on-site with zero hidden fees. Payments are staged across project milestones.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleApplyToModal}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/25 transition-all cursor-pointer active:scale-95"
              >
                <span>Lock In Scope For Free On-Site Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-400">
                Or call Carlos Vasquez directly at <a href="tel:+16094818197" className="text-blue-600 font-bold hover:underline">+1 (609) 481-8197</a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

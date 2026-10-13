import React, { useState } from 'react';
import { Calculator, Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface CostCalculatorProps {
  onOpenEstimateModalWithDetails: (details: {
    service: string;
    size: number;
    tier: string;
    estimatedCost: string;
  }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenEstimateModalWithDetails }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('decks');
  const [projectSize, setProjectSize] = useState<number>(350); // e.g., sq ft or units
  const [materialTier, setMaterialTier] = useState<'standard' | 'premium' | 'luxury'>('premium');

  // Multiplier mapping based on trade
  const calculateEstimate = () => {
    let baseRate = 25; // per sq ft / unit
    let minPrice = 1000;

    switch (selectedServiceId) {
      case 'decks':
        baseRate = materialTier === 'standard' ? 28 : materialTier === 'premium' ? 42 : 58;
        minPrice = 3500;
        break;
      case 'patios':
        baseRate = materialTier === 'standard' ? 22 : materialTier === 'premium' ? 34 : 48;
        minPrice = 3000;
        break;
      case 'roofing':
        baseRate = materialTier === 'standard' ? 4.5 : materialTier === 'premium' ? 6.5 : 9.0;
        minPrice = 5000;
        break;
      case 'remodeling':
        baseRate = materialTier === 'standard' ? 80 : materialTier === 'premium' ? 140 : 220;
        minPrice = 6000;
        break;
      case 'painting':
        baseRate = materialTier === 'standard' ? 3.0 : materialTier === 'premium' ? 4.5 : 6.5;
        minPrice = 1200;
        break;
      case 'masonry':
        baseRate = materialTier === 'standard' ? 30 : materialTier === 'premium' ? 45 : 70;
        minPrice = 2500;
        break;
      case 'pressure-washing':
        baseRate = materialTier === 'standard' ? 0.35 : materialTier === 'premium' ? 0.55 : 0.85;
        minPrice = 280;
        break;
      case 'tree-trimming':
        baseRate = materialTier === 'standard' ? 2.0 : materialTier === 'premium' ? 3.5 : 5.0;
        minPrice = 400;
        break;
      case 'additions':
        baseRate = materialTier === 'standard' ? 140 : materialTier === 'premium' ? 200 : 290;
        minPrice = 20000;
        break;
      case 'plumbing':
        baseRate = materialTier === 'standard' ? 35 : materialTier === 'premium' ? 55 : 85;
        minPrice = 650;
        break;
      default:
        baseRate = 30;
        minPrice = 1000;
    }

    const calculated = Math.round(projectSize * baseRate);
    const finalAmount = Math.max(calculated, minPrice);
    
    const low = Math.round(finalAmount * 0.9);
    const high = Math.round(finalAmount * 1.15);

    return {
      average: finalAmount.toLocaleString('en-US'),
      range: `$${low.toLocaleString('en-US')} – $${high.toLocaleString('en-US')}`,
      rateText: `$${baseRate}/sq ft`
    };
  };

  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];
  const estimate = calculateEstimate();

  const handleLockInEstimate = () => {
    onOpenEstimateModalWithDetails({
      service: selectedService.title,
      size: projectSize,
      tier: materialTier,
      estimatedCost: estimate.range
    });
  };

  return (
    <section id="calculator-section" className="py-20 md:py-28 bg-slate-100 text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
            Transparent Contractor Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Instant NJ Project Cost Calculator
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your trade and project parameters below for an instant calculation backed by current New Jersey material and master labor benchmarks.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Form Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Select Trade Service */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Trade Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICES_DATA.map(service => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left truncate cursor-pointer ${
                        selectedServiceId === service.id
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Approximate Project Size */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    2. Approximate Size
                  </label>
                  <span className="text-sm font-mono font-bold text-blue-600">
                    {projectSize} {selectedServiceId === 'tree-trimming' ? 'Trees / Canopy Units' : 'Square Feet'}
                  </span>
                </div>

                <input
                  type="range"
                  min={selectedServiceId === 'tree-trimming' ? 1 : 50}
                  max={selectedServiceId === 'tree-trimming' ? 20 : 2500}
                  step={selectedServiceId === 'tree-trimming' ? 1 : 25}
                  value={projectSize}
                  onChange={(e) => setProjectSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />

                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                  <span>Small / Repair</span>
                  <span>Average Residential</span>
                  <span>Full Estate</span>
                </div>
              </div>

              {/* Step 3: Material & Finish Tier */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Material & Craftsmanship Grade
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setMaterialTier('standard')}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      materialTier === 'standard'
                        ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">Standard</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Quality Builder Grade</div>
                  </button>

                  <button
                    onClick={() => setMaterialTier('premium')}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      materialTier === 'premium'
                        ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-blue-600">Premium</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Most Popular in NJ</div>
                  </button>

                  <button
                    onClick={() => setMaterialTier('luxury')}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      materialTier === 'luxury'
                        ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-amber-600">Architectural</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Custom & Luxury Finish</div>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Output Card & CTA (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between text-xs text-blue-200 mb-1">
                  <span>Estimated Investment</span>
                  <span className="text-cyan-300 font-bold uppercase tracking-wider">Ballpark Range</span>
                </div>

                <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight mt-1">
                  {estimate.range}
                </div>

                <div className="text-xs text-blue-100 mt-2 font-medium">
                  {selectedService.title} · {projectSize} sq ft ({materialTier.toUpperCase()} GRADE)
                </div>

                {/* Estimate Inclusions */}
                <div className="mt-6 pt-4 border-t border-blue-800 space-y-2">
                  <div className="text-[11px] font-bold text-blue-200 uppercase tracking-wider mb-2">Estimate Includes:</div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>In-House Licensed NJ Crew & Foreman</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>Complete Debris Haul-Away & Site Cleanup</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>Vasquez 10-Year Workmanship Warranty</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={handleLockInEstimate}
                  className="w-full py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Request Locked-In Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-blue-200">
                  Actual quote confirmed in person following free on-site property measurements.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

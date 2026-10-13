import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Ruler, 
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface TransformationProject {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  sqft: string;
  beforeImg: string;
  afterImg: string;
  scopeSummary: string;
  materialsUsed: string[];
  permitPassed: string;
}

const TRANSFORMATIONS: TransformationProject[] = [
  {
    id: 'deck',
    title: 'Bi-Level Composite Deck & Modern Pergola',
    category: 'Decks & Outdoor Living',
    location: 'Toms River, NJ',
    duration: '6 Business Days',
    sqft: '680 sq ft',
    beforeImg: '/projects/deck_remodel_before_1791564905775.jpg',
    afterImg: '/projects/deck_remodel_finished_1791564892954.jpg',
    scopeSummary: 'Full teardown of splintered 25-year-old pine deck. Poured new 42" frost-line concrete footings, reinforced 2x10 joists, laid premium Trex Transcend grooved boards, installed matte black aluminum cable railings, and wired low-voltage warm LED stair lighting.',
    materialsUsed: ['Trex Transcend Composite', 'Black Powder-Coated Cable Railing', '42" Concrete Sonotubes', 'Integrated 12V Stair Lights'],
    permitPassed: 'Ocean County Building & Footing Inspection Passed'
  },
  {
    id: 'kitchen',
    title: 'Open-Concept Chef Kitchen & Quartz Waterfall',
    category: 'Full Kitchen Remodel',
    location: 'Princeton, NJ',
    duration: '14 Business Days',
    sqft: '340 sq ft',
    beforeImg: '/projects/kitchen_remodel_before_1791564933038.jpg',
    afterImg: '/projects/kitchen_remodel_finished_1791564920281.jpg',
    scopeSummary: 'Demolished outdated 1980s oak partition walls to create continuous open-concept living. Installed custom soft-close navy and white shaker cabinets, 9-foot Calacatta quartz waterfall edge island, Italian herringbone tile backsplash, and smart under-cabinet lighting.',
    materialsUsed: ['Calacatta Gold Quartz', 'Solid Maple Shaker Cabinets', 'Brushed Brass Hardware', 'White Oak Plank Flooring'],
    permitPassed: 'Mercer County Electrical, Plumbing & Framing Approved'
  },
  {
    id: 'bath',
    title: 'Spa Master Bath & Curbless Glass Wet Room',
    category: 'Luxury Bathroom Remodel',
    location: 'Cherry Hill, NJ',
    duration: '9 Business Days',
    sqft: '185 sq ft',
    beforeImg: '/projects/bath_remodel_before_1791564997436.jpg',
    afterImg: '/projects/bath_remodel_finished_1791564980863.jpg',
    scopeSummary: 'Removed failing fiberglass enclosure and dated yellow tiles. Complete subfloor reinforcement with Schluter-KERDI waterproofing membrane, curbless walk-in shower with herringbone marble, freestanding acrylic tub, dual white oak vanities, and matte black fixtures.',
    materialsUsed: ['Schluter Waterproofing System', 'Carrara Marble Herringbone', 'Matte Black Moen Fixtures', 'Custom Frameless 3/8" Glass'],
    permitPassed: 'Camden County Plumbing & Rough-in Inspection Certified'
  }
];

interface TransformationSliderProps {
  onOpenEstimateModalWithService: (serviceName: string) => void;
}

export const TransformationSlider: React.FC<TransformationSliderProps> = ({
  onOpenEstimateModalWithService
}) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentProject = TRANSFORMATIONS[activeProjectIndex];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) updatePosition(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) updatePosition(e.touches[0].clientX);
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <section id="transformations-section" className="py-20 md:py-28 bg-[#070e1c] text-slate-100 relative overflow-hidden">
      {/* Blueprint background grid accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Interactive Proof of Craftsmanship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Before & After Transformations
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              Slide the divider horizontally to reveal the raw pre-existing condition vs the finished master construction delivered by our dedicated crew.
            </p>
          </div>

          {/* Project Switcher Segmented Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-800/90 border border-slate-700/80 rounded-2xl shrink-0 self-start lg:self-auto overflow-x-auto max-w-full">
            {TRANSFORMATIONS.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeProjectIndex === idx
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {project.category}
              </button>
            ))}
          </div>
        </div>

        {/* The Split Screen Slider Canvas */}
        <div className="bg-slate-950 rounded-3xl p-4 sm:p-6 shadow-2xl relative">
          
          <div 
            ref={containerRef}
            className="relative w-full aspect-[16/9] md:aspect-[21/10] rounded-2xl overflow-hidden select-none cursor-ew-resize group shadow-inner"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onClick={(e) => updatePosition(e.clientX)}
          >
            {/* Background Image: AFTER (Finished Master Craftsmanship) */}
            <img 
              src={currentProject.afterImg}
              alt={`${currentProject.title} - Completed Finished Result`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />

            {/* Foreground Image Clipped: BEFORE */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none transition-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={currentProject.beforeImg}
                alt={`${currentProject.title} - Condition Before Renovation`}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />
            </div>

            {/* Split Line Divider */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize transition-none z-20 shadow-[0_0_12px_rgba(0,0,0,0.6)]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Draggable Circular Knob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-2xl border-2 border-blue-600 flex items-center justify-center text-blue-600 active:scale-95 transition-transform">
                <div className="flex items-center -space-x-1">
                  <ChevronLeft className="w-4 h-4 stroke-[3]" />
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </div>
              </div>
            </div>

            {/* Floating Tags */}
            <div className="absolute top-4 left-4 z-30 pointer-events-none">
              <span className="px-3 py-1 rounded-md bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-black uppercase tracking-wider text-rose-300 shadow-sm">
                Before Remodel
              </span>
            </div>

            <div className="absolute top-4 right-4 z-30 pointer-events-none">
              <span className="px-3 py-1 rounded-md bg-blue-600/90 backdrop-blur-md border border-blue-400 text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
                Vasquez Finished Craft
              </span>
            </div>

            {/* Subtle Hint on bottom center */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-white/90 font-medium">
                Drag handle left & right
              </span>
            </div>
          </div>

          {/* Project Technical Spec Sheet & Details Card */}
          <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Scope Breakdown */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {currentProject.title}
                </h3>
                <span className="text-xs text-sky-400 font-semibold">· {currentProject.location}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentProject.scopeSummary}
              </p>

              {/* Material Badges & Specs */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                {currentProject.materialsUsed.map((mat, i) => (
                  <span 
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300"
                  >
                    <Layers className="w-3 h-3 text-sky-400" />
                    <span>{mat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Metrics & Fast Action */}
            <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-2 gap-3 text-left">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sky-400" />
                    <span>Timeline</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">{currentProject.duration}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
                    <Ruler className="w-3 h-3 text-sky-400" />
                    <span>Footprint</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">{currentProject.sqft}</div>
                </div>
              </div>

              <div className="text-[11px] text-emerald-400 flex items-start gap-1.5 pt-2 border-t border-slate-800">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                <span>{currentProject.permitPassed}</span>
              </div>

              <button
                onClick={() => onOpenEstimateModalWithService(currentProject.category)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer active:scale-95"
              >
                <span>Request Similar Transformation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

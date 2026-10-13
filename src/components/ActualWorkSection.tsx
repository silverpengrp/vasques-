import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  ACTUAL_WORK_PROJECTS, 
  ActualWorkProject 
} from '../data/actualWorkData';
import { 
  Sparkles, 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Wrench, 
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Columns,
  Sliders,
  Layers,
  X
} from 'lucide-react';

interface ActualWorkSectionProps {
  onOpenEstimateModalWithService?: (serviceName: string) => void;
}

export const ActualWorkSection: React.FC<ActualWorkSectionProps> = ({
  onOpenEstimateModalWithService
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const [activeModalProject, setActiveModalProject] = useState<ActualWorkProject | null>(null);

  // Filter projects by category
  const filteredProjects = ACTUAL_WORK_PROJECTS.filter(project => {
    if (selectedCategory === 'all') return true;
    return project.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
           project.tradeType.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <section 
      id="actual-work-section" 
      className="py-20 md:py-28 bg-[#09152b] text-slate-100 relative overflow-hidden border-t border-blue-900/40"
    >
      {/* Blueprint Grid Atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Atmospheric Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/50 text-xs font-bold text-cyan-300 uppercase tracking-widest mb-3 shadow-inner">
              <Camera className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real Jobsite Photos · Authentic New Jersey Craft</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Actual Work: Before & After Proof
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Every photo below is authentic work completed by our crew in New Jersey. Compare the raw construction phase against the finished masterwork, with matching layout and camera angle for every project.
            </p>
          </div>

          {/* View Mode & Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle: Interactive Slider vs Side-by-Side */}
            <div className="flex items-center p-1 bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-xs">
              <button
                onClick={() => setViewMode('slider')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Interactive Slider Mode"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Slider</span>
              </button>
              <button
                onClick={() => setViewMode('side-by-side')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'side-by-side'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Side by Side Mode"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Side by Side</span>
              </button>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-slate-700/80 rounded-2xl overflow-x-auto max-w-full">
              {[
                { id: 'all', label: 'All 6 Projects' },
                { id: 'garage', label: 'Garage' },
                { id: 'sunroom', label: 'Sunroom' },
                { id: 'kitchen', label: 'Kitchen' },
                { id: 'hallway', label: 'Hardwood' },
                { id: 'staircase', label: 'Stairs' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedCategory(f.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === f.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <ActualWorkCard
              key={project.id}
              project={project}
              viewMode={viewMode}
              onInspect={() => setActiveModalProject(project)}
              onRequestService={() => {
                if (onOpenEstimateModalWithService) {
                  onOpenEstimateModalWithService(project.category);
                }
              }}
            />
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-blue-950/80 border border-blue-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 shrink-0 shadow-lg shadow-blue-500/30 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-cyan-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                All 6 Showcase Projects Completed to New Jersey Building Code
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                NJ License #13VH13437500 · 100% In-House Master Crews · Zero Subcontractor Markups
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (onOpenEstimateModalWithService) {
                onOpenEstimateModalWithService('General Contracting');
              }
            }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-95 cursor-pointer shrink-0 flex items-center gap-2 border border-blue-400/50"
          >
            <span>Book Your Free On-Site Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Fullscreen Inspector Modal */}
      {activeModalProject && (
        <ProjectInspectionModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onRequestService={() => {
            if (onOpenEstimateModalWithService) {
              onOpenEstimateModalWithService(activeModalProject.category);
            }
            setActiveModalProject(null);
          }}
        />
      )}
    </section>
  );
};

interface ActualWorkCardProps {
  project: ActualWorkProject;
  viewMode: 'slider' | 'side-by-side';
  onInspect: () => void;
  onRequestService: () => void;
}

const ActualWorkCard: React.FC<ActualWorkCardProps> = ({
  project,
  viewMode,
  onInspect,
  onRequestService
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleUpdate = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (isDragging) handleUpdate(e.clientX);
    };
    const onTouch = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) handleUpdate(e.touches[0].clientX);
    };
    const onUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchmove', onTouch);
      window.addEventListener('touchend', onUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchend', onUp);
    };
  }, [isDragging, handleUpdate]);

  const aspectClass = project.aspectRatio === 'vertical' 
    ? 'aspect-[4/5] sm:aspect-[3/4]' 
    : 'aspect-[16/10] sm:aspect-[4/3]';

  return (
    <div className="bg-slate-950/90 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-4 sm:p-5 shadow-xl transition-all flex flex-col justify-between group">
      
      {/* Top Header Card Info */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-900/60 text-cyan-300 border border-blue-700/60">
            {project.category}
          </span>
          <span className="hidden sm:inline text-slate-500 text-xs">·</span>
          <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
            <MapPin className="w-3 h-3 text-cyan-400" />
            <span>{project.location}</span>
          </span>
        </div>

        <button
          onClick={onInspect}
          className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 text-xs flex items-center gap-1 transition-colors cursor-pointer"
          title="Inspect Fullscreen"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px] font-semibold">Inspect</span>
        </button>
      </div>

      <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-3">
        {project.title}
      </h3>

      {/* Visual Image Container */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 mb-4 shadow-xl">
        
        {viewMode === 'slider' ? (
          /* INTERACTIVE BEFORE/AFTER SLIDER (EXACT SAME PERSPECTIVE & LAYOUT) */
          <div
            ref={containerRef}
            className={`relative w-full ${aspectClass} overflow-hidden select-none cursor-ew-resize`}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            onClick={(e) => handleUpdate(e.clientX)}
          >
            {/* AFTER IMAGE (Finished Master Craftsmanship) */}
            <img
              src={project.afterImg}
              alt={`${project.title} - Finished Master Result`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
            />

            {/* BEFORE IMAGE (Raw Work in Progress, Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={project.beforeImg}
                alt={`${project.title} - Before Renovation`}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Split Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full shadow-xl border-2 border-blue-600 flex items-center justify-center text-blue-600">
                <div className="flex items-center -space-x-1">
                  <ChevronLeft className="w-3.5 h-3.5 stroke-[3]" />
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-3 left-3 z-30 pointer-events-none">
              <span className="px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-rose-500/50 text-[10px] font-black uppercase tracking-wider text-rose-300 shadow-md">
                Before: In Progress
              </span>
            </div>

            <div className="absolute top-3 right-3 z-30 pointer-events-none">
              <span className="px-2.5 py-1 rounded-md bg-blue-600/90 backdrop-blur-md border border-cyan-400 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                After: Finished
              </span>
            </div>

            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-sm text-[10px] text-slate-300 font-medium">
                Drag slider to compare
              </span>
            </div>
          </div>
        ) : (
          /* SIDE BY SIDE VIEW (Direct Layout Match) */
          <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-900">
            {/* Before */}
            <div className={`relative ${aspectClass} rounded-xl overflow-hidden`}>
              <img
                src={project.beforeImg}
                alt={`${project.title} - Before`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/85 text-[10px] font-black text-rose-300 uppercase">
                Before
              </span>
            </div>

            {/* After */}
            <div className={`relative ${aspectClass} rounded-xl overflow-hidden`}>
              <img
                src={project.afterImg}
                alt={`${project.title} - After`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-blue-600/90 text-[10px] font-black text-white uppercase">
                After
              </span>
            </div>
          </div>
        )}

      </div>

      {/* Scope Summary & Craftsmanship Highlights */}
      <div className="space-y-3">
        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
          {project.scopeSummary}
        </p>

        {/* Highlights List */}
        <div className="space-y-1.5 pt-1">
          {project.craftsmanshipHighlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Footer Card Controls */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>{project.duration}</span>
            </span>
            <span className="flex items-center gap-1">
              <Wrench className="w-3 h-3 text-blue-400" />
              <span className="hidden sm:inline">{project.tradeType.split(',')[0]}</span>
            </span>
          </div>

          <button
            onClick={onRequestService}
            className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center gap-1 shadow-sm active:scale-95"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

    </div>
  );
};

interface ProjectInspectionModalProps {
  project: ActualWorkProject;
  onClose: () => void;
  onRequestService: () => void;
}

const ProjectInspectionModal: React.FC<ProjectInspectionModalProps> = ({
  project,
  onClose,
  onRequestService
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleUpdate = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (isDragging) handleUpdate(e.clientX);
    };
    const onTouch = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) handleUpdate(e.touches[0].clientX);
    };
    const onUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchmove', onTouch);
      window.addEventListener('touchend', onUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchend', onUp);
    };
  }, [isDragging, handleUpdate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-xl animate-in fade-in">
      <div 
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-y-auto max-h-[95vh] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4 pr-12">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-950 text-cyan-400 border border-blue-800">
              {project.category}
            </span>
            <span className="text-xs text-slate-400">· {project.location}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Trades: <span className="text-cyan-300 font-semibold">{project.tradeType}</span>
          </p>
        </div>

        {/* Interactive Fullscreen Slider */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-2xl mb-6"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onClick={(e) => handleUpdate(e.clientX)}
        >
          <img
            src={project.afterImg}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src={project.beforeImg}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
          </div>

          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.8)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl border-2 border-blue-600 flex items-center justify-center text-blue-600">
              <div className="flex items-center -space-x-1">
                <ChevronLeft className="w-4 h-4 stroke-[3]" />
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </div>
            </div>
          </div>

          <div className="absolute top-4 left-4 z-30 pointer-events-none">
            <span className="px-3 py-1 rounded-md bg-slate-950/90 text-xs font-black uppercase text-rose-300 border border-rose-500/50 shadow-md">
              Before Remodel
            </span>
          </div>
          <div className="absolute top-4 right-4 z-30 pointer-events-none">
            <span className="px-3 py-1 rounded-md bg-blue-600 text-xs font-black uppercase text-white border border-cyan-400 shadow-md">
              After: Finished Craft
            </span>
          </div>
        </div>

        {/* Detailed Scope & Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
          <div className="md:col-span-8 space-y-4">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                Scope of Work Executed
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {project.scopeSummary}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                Master Craftsmanship Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.craftsmanshipHighlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-slate-950/90 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs py-1 border-b border-slate-800">
                <span className="text-slate-400">Timeline:</span>
                <span className="font-bold text-white">{project.duration}</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-slate-800">
                <span className="text-slate-400">Location:</span>
                <span className="font-bold text-white">{project.location}</span>
              </div>
              {project.permitPassed && (
                <div className="flex items-start gap-1.5 text-[11px] text-emerald-400 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{project.permitPassed}</span>
                </div>
              )}
            </div>

            <button
              onClick={onRequestService}
              className="w-full py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Request Quote for This Trade</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

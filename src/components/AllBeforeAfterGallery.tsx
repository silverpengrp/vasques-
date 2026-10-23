import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  ALL_BEFORE_AFTER_PROJECTS, 
  MasterTransformationProject 
} from '../data/allBeforeAfterData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Sparkles,
  X,
  Ruler
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AllBeforeAfterGalleryProps {
  onOpenEstimateModalWithService?: (serviceName: string) => void;
}

export const AllBeforeAfterGallery: React.FC<AllBeforeAfterGalleryProps> = ({
  onOpenEstimateModalWithService
}) => {
  const { t, lang } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'deck' | 'remodel' | 'roof'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [wipePos, setWipePos] = useState<number>(50); // percentage 0 to 100%
  const [isDraggingWipe, setIsDraggingWipe] = useState<boolean>(false);
  const [activeModalProject, setActiveModalProject] = useState<MasterTransformationProject | null>(null);

  const wipeContainerRef = useRef<HTMLDivElement>(null);

  // Exact 4 filters requested
  const FILTER_OPTIONS: { id: 'all' | 'deck' | 'remodel' | 'roof'; label: string }[] = [
    { id: 'all', label: t('gallery.filter.all') },
    { id: 'deck', label: t('gallery.filter.deck') },
    { id: 'remodel', label: t('gallery.filter.remodel') },
    { id: 'roof', label: t('gallery.filter.roof') }
  ];

  // Filtered array
  const filteredProjects = ALL_BEFORE_AFTER_PROJECTS.filter(project => {
    if (selectedFilter === 'all') return true;
    return project.filterCategory === selectedFilter;
  });

  // Reset to first item when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setWipePos(50);
  }, [selectedFilter]);

  const activeProject = filteredProjects[currentIndex] || filteredProjects[0];

  // Carousel previous / next navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
    setWipePos(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
    setWipePos(50);
  };

  // Drag wipe divider logic: updates wipePos between 0% and 100%
  const handleWipeUpdate = useCallback((clientX: number) => {
    if (!wipeContainerRef.current) return;
    const rect = wipeContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setWipePos(pct);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDraggingWipe) handleWipeUpdate(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDraggingWipe && e.touches[0]) handleWipeUpdate(e.touches[0].clientX);
    };
    const onMouseUp = () => setIsDraggingWipe(false);

    if (isDraggingWipe) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDraggingWipe, handleWipeUpdate]);

  if (!activeProject) return null;

  return (
    <section 
      id="transformations-section" 
      className="py-16 sm:py-24 bg-gradient-to-b from-[#071630] via-[#0a1e42] to-[#071630] text-slate-100 relative overflow-hidden border-t border-b border-blue-500/30 shadow-2xl"
    >
      {/* Blueprint Grid Architecture Texture */}
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
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-radial from-blue-500/25 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-400/50 text-xs font-bold text-cyan-300 uppercase tracking-widest mb-3 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t('gallery.kicker')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              {t('gallery.title')}
            </h2>
            <p className="mt-2 text-blue-100/90 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t('gallery.desc')}
            </p>
          </div>

          {/* Exact 4 Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-blue-950/90 border border-blue-600/50 rounded-2xl shadow-lg shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            {FILTER_OPTIONS.map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-600/40'
                    : 'text-blue-200/80 hover:text-white hover:bg-blue-900/40'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 
          BLUE SLIDER CARD (Bi-Level Composite Deck & Modern Pergola)
        */}
        <div className="bg-[#0b1c3d]/95 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl text-white border border-blue-500/40">
          
          {/* Slider Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-blue-800/70">
            <div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-full font-black text-[11px] uppercase tracking-wider bg-blue-900/80 text-cyan-300 border border-blue-500/40">
                  {lang === 'es' && activeProject.category === 'Decks & Patios' 
                    ? 'Terrazas y Patios' 
                    : lang === 'es' && activeProject.category === 'Kitchen & Bath'
                    ? 'Cocinas y Baños'
                    : lang === 'es' && activeProject.category === 'Roofing'
                    ? 'Techados'
                    : activeProject.category}
                </span>
                <span className="text-blue-400">·</span>
                <span className="flex items-center gap-1 text-blue-200 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeProject.location}</span>
                </span>
                <span className="text-blue-400">·</span>
                <span className="text-cyan-300 font-semibold px-2 py-0.5 rounded-md bg-blue-950/80 border border-blue-700/60 text-[11px]">
                  {lang === 'es' && activeProject.badge === 'Master Craft' ? 'Acabado Maestro' : activeProject.badge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mt-1">
                {activeProject.title}
              </h3>
            </div>

            {/* Slider Navigation Controls (Previous / Next Arrows & Project Counter) */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-blue-300 font-mono mr-1">
                {currentIndex + 1} / {filteredProjects.length}
              </span>
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-blue-900/70 hover:bg-blue-600 text-blue-200 hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95 border border-blue-600/40"
                aria-label="Previous project"
                title="Previous Transformation"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-blue-900/70 hover:bg-blue-600 text-blue-200 hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95 border border-blue-600/40"
                aria-label="Next project"
                title="Next Transformation"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={() => setActiveModalProject(activeProject)}
                className="ml-1 p-2 rounded-xl bg-blue-900/70 hover:bg-blue-600 text-blue-200 hover:text-white transition-colors cursor-pointer border border-blue-600/40"
                title={t('gallery.fullInspect')}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 
            INTERACTIVE BEFORE & AFTER SLIDER CANVAS:
          */}
          <div className="my-6">
            <div
              ref={wipeContainerRef}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/10] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-2xl bg-slate-950 group border border-blue-500/30"
              onMouseDown={() => setIsDraggingWipe(true)}
              onTouchStart={() => setIsDraggingWipe(true)}
              onClick={(e) => handleWipeUpdate(e.clientX)}
            >
              {/* LEFT HALF CONTAINER: BEFORE IMAGE (Dynamically sized by wipePos) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none z-10"
                style={{ width: `${wipePos}%` }}
              >
                <img
                  src={activeProject.beforeImg}
                  alt={`${activeProject.title} - Condition Before Renovation`}
                  className="absolute inset-y-0 left-0 h-full max-w-none object-cover object-left"
                  style={{ 
                    width: wipeContainerRef.current ? `${wipeContainerRef.current.clientWidth}px` : '100%' 
                  }}
                />
                {/* Floating Left Tag */}
                <div className="absolute top-4 left-4 z-30 pointer-events-none">
                  <span className="px-3 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-rose-500/60 text-[11px] font-black uppercase tracking-wider text-rose-300 shadow-md">
                    {t('gallery.before')}
                  </span>
                </div>
              </div>

              {/* RIGHT HALF CONTAINER: AFTER IMAGE (Dynamically sized by 100 - wipePos) */}
              <div 
                className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none z-0"
                style={{ width: `${100 - wipePos}%` }}
              >
                <img
                  src={activeProject.afterImg}
                  alt={`${activeProject.title} - Completed Master Result`}
                  className="absolute inset-y-0 right-0 h-full max-w-none object-cover object-right"
                  style={{ 
                    width: wipeContainerRef.current ? `${wipeContainerRef.current.clientWidth}px` : '100%' 
                  }}
                />
                {/* Floating Right Tag */}
                <div className="absolute top-4 right-4 z-30 pointer-events-none">
                  <span className="px-3 py-1 rounded-md bg-blue-600/95 backdrop-blur-md border border-blue-400 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
                    {t('gallery.after')}
                  </span>
                </div>
              </div>

              {/* Split Line Wipe Divider */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_14px_rgba(0,0,0,0.9)]"
                style={{ left: `${wipePos}%` }}
              >
                {/* Draggable Button Knob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-2xl border-2 border-blue-600 flex items-center justify-center text-blue-600 active:scale-95 transition-transform hover:shadow-blue-500/40">
                  <div className="flex items-center -space-x-1">
                    <ChevronLeft className="w-4 h-4 stroke-[3]" />
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* Interactive Drag Hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-[11px] text-white font-medium shadow-sm">
                  {t('gallery.dragHint')}
                </span>
              </div>
            </div>
          </div>

          {/* Project Details Sheet (Below Canvas in Blue Card) */}
          <div className="pt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Scope Breakdown */}
            <div className="lg:col-span-8 space-y-3">
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
                {activeProject.scopeSummary}
              </p>

              {/* Materials & Spec Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeProject.materialsUsed.map((mat, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-950/70 border border-blue-600/40 text-xs text-blue-100 font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{mat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Metrics & Quick Quote Action */}
            <div className="lg:col-span-4 bg-blue-950/80 border border-blue-600/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-2 gap-3 text-left">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-blue-300 font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{t('gallery.timeline')}</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">{activeProject.duration}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-blue-300 font-semibold flex items-center gap-1">
                    <Ruler className="w-3 h-3 text-cyan-400" />
                    <span>{t('gallery.footprint')}</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">{activeProject.sqft || (lang === 'es' ? 'Alcance Completo' : 'Full Scope')}</div>
                </div>
              </div>

              <div className="text-[11px] text-emerald-400 flex items-start gap-1.5 pt-2 border-t border-blue-800/60 font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                <span>{activeProject.permitPassed}</span>
              </div>

              <button
                onClick={() => {
                  if (onOpenEstimateModalWithService) {
                    onOpenEstimateModalWithService(activeProject.category);
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer active:scale-95 border border-cyan-400/40"
              >
                <span>{t('gallery.requestSimilar')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Project Carousel Thumbnail Strip */}
          <div className="mt-8 pt-6 border-t border-blue-800/60">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                {t('gallery.browseCategory')} ({filteredProjects.length})
              </span>
              <span className="text-xs text-cyan-400 font-semibold">
                {t('gallery.clickThumbnail')}
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-2">
              {filteredProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setWipePos(50);
                  }}
                  className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer group ${
                    currentIndex === idx
                      ? 'border-cyan-400 ring-2 ring-cyan-400/50 shadow-md shadow-cyan-500/25 scale-102'
                      : 'border-blue-900/60 opacity-60 hover:opacity-100 hover:border-blue-500'
                  }`}
                  title={p.title}
                >
                  <img
                    src={p.afterImg}
                    alt={p.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-white truncate text-left opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Inspector Modal */}
      {activeModalProject && (
        <MasterInspectionModal
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

interface MasterInspectionModalProps {
  project: MasterTransformationProject;
  onClose: () => void;
  onRequestService: () => void;
}

const MasterInspectionModal: React.FC<MasterInspectionModalProps> = ({
  project,
  onClose,
  onRequestService
}) => {
  const { t, lang } = useLanguage();
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const handleUpdate = useCallback((clientX: number) => {
    if (!modalContainerRef.current) return;
    const rect = modalContainerRef.current.getBoundingClientRect();
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
        className="relative w-full max-w-5xl bg-[#0b1c3d] border border-blue-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-y-auto max-h-[95vh] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-blue-950 hover:bg-blue-900 text-blue-200 hover:text-white transition-colors cursor-pointer border border-blue-700/60"
          aria-label={t('gallery.modalClose')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4 pr-12">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-950 text-cyan-400 border border-blue-600">
              {project.category}
            </span>
            <span className="text-xs text-blue-300">· {project.location}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-blue-200 mt-1">
            {lang === 'es' ? 'Oficios Involucrados:' : 'Trades Involved:'} <span className="text-cyan-300 font-semibold">{project.tradeType}</span>
          </p>
        </div>

        {/* Interactive Fullscreen Slider */}
        <div
          ref={modalContainerRef}
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-2xl mb-6 bg-slate-950"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onClick={(e) => handleUpdate(e.clientX)}
        >
          {/* Left: Before Image Frame */}
          <div 
            className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none z-10"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={project.beforeImg}
              alt="Before"
              className="absolute inset-y-0 left-0 h-full max-w-none object-cover object-left"
              style={{ 
                width: modalContainerRef.current ? `${modalContainerRef.current.clientWidth}px` : '100%' 
              }}
            />
            <div className="absolute top-4 left-4 z-30 pointer-events-none">
              <span className="px-3 py-1 rounded-md bg-slate-950/90 text-xs font-black uppercase text-rose-300 border border-rose-500/50 shadow-md">
                {t('gallery.before')}
              </span>
            </div>
          </div>

          {/* Right: After Image Frame */}
          <div 
            className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none z-0"
            style={{ width: `${100 - sliderPos}%` }}
          >
            <img
              src={project.afterImg}
              alt="After"
              className="absolute inset-y-0 right-0 h-full max-w-none object-cover object-right"
              style={{ 
                width: modalContainerRef.current ? `${modalContainerRef.current.clientWidth}px` : '100%' 
              }}
            />
            <div className="absolute top-4 right-4 z-30 pointer-events-none">
              <span className="px-3 py-1 rounded-md bg-blue-600 text-xs font-black uppercase text-white border border-cyan-400 shadow-md">
                {t('gallery.after')}
              </span>
            </div>
          </div>

          {/* Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_15px_rgba(0,0,0,0.9)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl border-2 border-blue-600 flex items-center justify-center text-blue-600">
              <div className="flex items-center -space-x-1">
                <ChevronLeft className="w-4 h-4 stroke-[3]" />
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Scope & Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
          <div className="md:col-span-8 space-y-4">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-300 mb-1">
                {lang === 'es' ? 'Alcance del Trabajo Ejecutado' : 'Scope of Work Executed'}
              </h4>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                {project.scopeSummary}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-300 mb-2">
                {lang === 'es' ? 'Materiales y Especificaciones' : 'Materials & Specifications'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.materialsUsed.map((mat, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-blue-950/80 border border-blue-600/40 text-xs text-blue-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-blue-950/90 border border-blue-600/40 rounded-2xl p-4 sm:p-5 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs py-1 border-b border-blue-800">
                <span className="text-blue-300">{t('gallery.timeline')}:</span>
                <span className="font-bold text-white">{project.duration}</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-blue-800">
                <span className="text-blue-300">{lang === 'es' ? 'Ubicación:' : 'Location:'}</span>
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
              className="w-full py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2 border border-cyan-400/50"
            >
              <span>{lang === 'es' ? 'Solicitar Presupuesto para Este Oficio' : 'Request Quote for This Trade'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

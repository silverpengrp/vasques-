import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/servicesData';
import { MapPin, Clock, ArrowRight, Check, Eye, X, Layers, ShieldCheck } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onOpenEstimateModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenEstimateModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [inspectProject, setInspectProject] = useState<ProjectItem | null>(null);

  const filtered = PROJECTS_DATA.filter(p => {
    if (selectedFilter === 'all') return true;
    return p.category.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  const featured = PROJECTS_DATA[0];

  return (
    <section id="projects-section" className="py-20 md:py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      {/* Blueprint grid subtle accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#64748b 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
              Verified New Jersey Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Master Craftsmanship In Action
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Inspect the clean lines, structural longevity, and code-compliant installations delivered across Mercer, Middlesex, Ocean, and Monmouth counties.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button Segmented Controls) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-2xl shadow-xs shrink-0">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'deck', label: 'Decks & Patios' },
              { id: 'remodel', label: 'Kitchen & Bath' },
              { id: 'roof', label: 'Roofing' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase Project */}
        <div className="mb-10 bg-slate-50 rounded-3xl overflow-hidden transition-all shadow-lg hover:shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden group">
            <img
              src={featured.afterImg}
              alt={featured.title}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setInspectProject(featured)}
              className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Fullscreen</span>
            </button>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Unboxed Metadata Header */}
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="text-blue-600 font-bold uppercase tracking-wider">Featured Masterwork</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-blue-600" />
                  {featured.location}
                </span>
                <span aria-hidden="true">·</span>
                <span>{featured.duration}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {featured.title}
              </h3>
              
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {featured.description}
              </p>

              {/* Highlights */}
              <div className="mt-6 space-y-2 pt-4 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>680 sq ft multi-level elevated living space with powder-coated pergola</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Hidden fastener installation with zero exposed screws</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Ocean County township permit approved & structural sign-off</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">Turnkey Delivery</span>
              <button
                onClick={onOpenEstimateModal}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-blue-600/20 active:scale-95"
              >
                <span>Request Similar Build</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Projects Grid on Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <div
              key={project.id}
              className="group bg-slate-50 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.afterImg}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category kicker */}
                  <div className="absolute bottom-3 left-4 text-xs font-bold text-white bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {project.category}
                  </div>

                  <button
                    onClick={() => setInspectProject(project)}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/70 hover:bg-slate-900 text-white transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
                    title="Inspect photo"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6">
                  {/* Clean Metadata without pills */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-600" />
                      {project.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-600" />
                      {project.duration}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenEstimateModal}
                  className="w-full py-2.5 bg-white hover:bg-blue-600 text-slate-800 hover:text-white font-bold text-xs rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Inquire About This Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Inspect Modal Dialog */}
      {inspectProject && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
          onClick={() => setInspectProject(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
              <img
                src={inspectProject.afterImg}
                alt={inspectProject.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setInspectProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-sky-400 font-bold uppercase tracking-wider">{inspectProject.category} · {inspectProject.location}</div>
                <h4 className="text-xl font-black mt-0.5">{inspectProject.title}</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">{inspectProject.description}</p>
              </div>

              <button
                onClick={() => {
                  setInspectProject(null);
                  onOpenEstimateModal();
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shrink-0 cursor-pointer"
              >
                Get Quote Like This
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

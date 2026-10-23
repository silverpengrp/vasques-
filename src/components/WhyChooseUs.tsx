import React from 'react';
import { ShieldCheck, Users, Award, Check } from 'lucide-react';
import helmetStickerImg from '../assets/images/vasquez_blue_helmet_sticker_transparent.png';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us-section" className="py-20 md:py-28 bg-slate-100 text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
            The Contractor Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Why New Jersey Homeowners Choose Vasquez LLC
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Built on integrity, skilled hands, and our core promise: <span className="text-blue-600 font-bold">One Company. All Solutions.</span>
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white border border-slate-200 hover:border-blue-400 rounded-3xl p-8 transition-all shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                Licensed, Insured & Bonded
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Rest easy knowing your residential property is safeguarded. We carry full commercial general liability insurance, comprehensive worker's compensation, and pull all township permits.
              </p>
            </div>
            
            <ul className="space-y-2 text-xs text-slate-700 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>NJ Home Improvement Contractor LLC Certified</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>$2,000,000 Commercial General Liability</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>100% Township Code & Inspection Sign-Off</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 hover:border-blue-400 rounded-3xl p-8 transition-all shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                In-House Master Tradesmen
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                We never subcontract your project to anonymous crews. Our seasoned carpenters, roofers, masons, and painters have worked together for years under strict Vasquez standards.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>On-Site Foreman Supervised Daily</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Direct Daily Progress Briefings</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Bilingual Communication (English & Spanish)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 hover:border-blue-400 rounded-3xl p-8 transition-all shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                10-Year Craftsmanship Guarantee
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Quality isn't an afterthought. We back all deck installations, roof replacements, additions, and masonry rebuilds with our formal 10-year written structural warranty.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>10-Year Structural Workmanship Warranty</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Fixed Milestone Payment Schedule</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Zero Unexpected Change Orders</span>
              </li>
            </ul>
          </div>

        </div>

        {/* The Heritage of the Helmet Contractor Emblem Banner on White Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex justify-center">
              <div className="w-44 h-44 md:w-52 md:h-52 flex items-center justify-center p-2 relative group">
                <img
                  src={helmetStickerImg}
                  alt="Vasquez Blue Helmet Contractor Sticker Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)] group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                The Vasquez Contractor Seal
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Master Craftsmanship, Safety & Verified Reliability
              </h3>
              <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                The official Vasquez contractor safety helmet seal represents our foundational pledge to every New Jersey homeowner: rigorous jobsite safety, precision engineering, and durable construction that stands the test of time. Vasquez Home Improvement Contractor LLC constructs and repairs roofs, decks, siding, and additions with unwavering integrity.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-blue-700 font-bold">
                <span>· Licensed & Insured NJ Contractor</span>
                <span>· 100% In-House Accountable</span>
                <span>· +1 (609) 481-8197</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

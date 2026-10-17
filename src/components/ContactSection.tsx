import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    service: initialService || 'Decks',
    timeframe: 'As soon as possible',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-20 md:py-28 bg-gradient-to-b from-[#071630] via-[#0a1e42] to-[#071630] text-slate-100 relative overflow-hidden border-t border-b border-blue-500/30 shadow-2xl">
      
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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-400/50 text-xs font-bold text-cyan-300 uppercase tracking-widest mb-3 shadow-inner">
            <span>Direct Contractor Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Schedule Your Free On-Site Consultation
          </h2>
          <p className="mt-3 text-blue-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            No high-pressure salespeople. You speak directly with our master builder who reviews your plans and provides a guaranteed written estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone Box */}
            <div className="bg-[#0b1c3d]/95 border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl text-white">
              <div className="relative z-10">
                <span className="text-xs font-black text-cyan-400 uppercase tracking-widest block mb-1">
                  Master Contractor Hotline
                </span>
                <a
                  href="tel:+16094818197"
                  className="text-2xl sm:text-3xl font-black text-white hover:text-cyan-300 transition-colors font-mono tracking-tight block mb-2"
                >
                  +1 (609) 481-8197
                </a>
                <p className="text-xs text-blue-100/90 leading-relaxed mb-6">
                  Call or text for immediate scheduling. Speak with ownership directly regarding blueprints, emergency roof tarping, plumbing leaks, or new deck consultations.
                </p>

                <a
                  href="tel:+16094818197"
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 border border-cyan-400/40 active:scale-95"
                >
                  <Phone className="w-4 h-4 text-cyan-200" />
                  <span>Call +1 (609) 481-8197 Now</span>
                </a>
              </div>
            </div>

            {/* Quick Details List */}
            <div className="bg-[#0b1c3d]/90 border border-blue-500/40 rounded-3xl p-6 space-y-4 shadow-xl backdrop-blur-xl text-white">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Headquarters & Service Radius</h4>
                  <p className="text-xs text-blue-200/90 mt-0.5">Serving NY, NJ and Connecticut (Full Tri-State residential & commercial coverage)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-blue-800/60">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Operating Hours</h4>
                  <p className="text-xs text-blue-200/90 mt-0.5">Monday – Saturday: 7:00 AM – 7:00 PM</p>
                  <p className="text-[11px] text-cyan-300 font-bold mt-0.5">24/7 Priority Emergency Storm & Roof Repair</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-blue-800/60">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Tri-State Contractor Entity</h4>
                  <p className="text-xs text-blue-200/90 mt-0.5">Vasquez Home Improvement Contractor LLC · Serving NY, NJ & CT · Fully Insured</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b1c3d]/95 border border-blue-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl text-white">
            {formSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-400 flex items-center justify-center text-emerald-300 mb-4 shadow-lg shadow-emerald-900/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">Estimate Request Received!</h3>
                <p className="mt-2 text-blue-100 text-sm max-w-md">
                  Thank you, <strong className="text-white">{formData.fullName || 'Neighbor'}</strong>. Our master builder will review your project details and reach out within 2 hours at <span className="text-cyan-300 font-mono font-bold">{formData.phone || 'your phone'}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-blue-900/60 border border-blue-600/50 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-black text-white mb-2">
                  Request Your Free Consultation
                </h3>
                <p className="text-xs text-blue-200/90 mb-6">
                  Fill in your property location and project requirements. We respect your privacy and never sell information.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Rossi"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#071630] border border-blue-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-blue-300/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(609) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#071630] border border-blue-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-blue-300/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#071630] border border-blue-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-blue-300/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                      City, Township & State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Princeton NJ, White Plains NY, or Stamford CT"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#071630] border border-blue-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-blue-300/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                      Trade Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#071630] border border-blue-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      {SERVICES_DATA.map(s => (
                        <option key={s.id} value={s.title} className="bg-slate-900 text-white">{s.title}</option>
                      ))}
                      <option value="Multiple Trades" className="bg-slate-900 text-white">Multiple Trades / Whole House</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                      Ideal Start Timeframe
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full bg-[#071630] border border-blue-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Emergency (Next 48 Hours)" className="bg-slate-900 text-white">Emergency (Next 48 Hours)</option>
                      <option value="Within 2-3 Weeks" className="bg-slate-900 text-white">Within 2–3 Weeks</option>
                      <option value="Next 1-2 Months" className="bg-slate-900 text-white">Next 1–2 Months</option>
                      <option value="Flexible / Planning Phase" className="bg-slate-900 text-white">Flexible / Planning Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                    Project Scope / Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your vision, approximate square footage, existing conditions, or any specific materials..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-[#071630] border border-blue-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl p-3 text-xs text-white placeholder-blue-300/40 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 border border-cyan-400/40"
                >
                  <Send className="w-4 h-4 text-cyan-200" />
                  <span>Send Free Estimate Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

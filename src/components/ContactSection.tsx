import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  initialService?: string;
}

const SERVICE_TITLES_ES: Record<string, string> = {
  'Decks': 'Terrazas y Patios',
  'Patios': 'Patios y Adoquines',
  'Plumbing': 'Plomería Residencial',
  'Remodeling': 'Remodelación de Cocinas y Baños',
  'Additions': 'Ampliaciones y Estructuras',
  'Masonry': 'Albañilería y Piedra',
  'Roofing': 'Techados y Techos',
  'Painting': 'Pintura Interior y Exterior',
  'Pressure Washing': 'Lavado a Presión Comercial',
  'Tree Trimming': 'Poda y Cuidado de Árboles'
};

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const { t, lang } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    service: initialService || 'Decks',
    timeframe: 'soon',
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
            <span>{t('contact.kicker')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="mt-3 text-blue-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t('contact.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone Box */}
            <div className="bg-[#0b1c3d]/95 border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl text-white">
              <div className="relative z-10">
                <span className="text-xs font-black text-cyan-400 uppercase tracking-widest block mb-1">
                  {t('contact.hotlineTitle')}
                </span>
                <a
                  href="tel:+16094818197"
                  className="text-2xl sm:text-3xl font-black text-white hover:text-cyan-300 transition-colors font-mono tracking-tight block mb-2"
                >
                  +1 (609) 481-8197
                </a>
                <p className="text-xs text-blue-100/90 leading-relaxed mb-6">
                  {t('contact.hotlineDesc')}
                </p>

                <a
                  href="tel:+16094818197"
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 border border-cyan-400/40 active:scale-95"
                >
                  <Phone className="w-4 h-4 text-cyan-200" />
                  <span>{t('contact.hotlineBtn')}</span>
                </a>
              </div>
            </div>

            {/* Quick Details List */}
            <div className="bg-[#0b1c3d]/90 border border-blue-500/40 rounded-3xl p-6 space-y-4 shadow-xl backdrop-blur-xl text-white">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">{t('contact.hqTitle')}</h4>
                  <p className="text-xs text-blue-200/90 mt-0.5">{t('contact.hqDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-blue-800/60">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">{t('contact.hoursTitle')}</h4>
                  <p className="text-xs text-blue-200/90 mt-0.5">{t('contact.hoursDesc')}</p>
                  <p className="text-[11px] text-cyan-300 font-bold mt-0.5">{t('contact.emergencyDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-blue-800/60">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">{t('contact.entityTitle')}</h4>
                  <p className="text-xs text-blue-200/90 mt-0.5">{t('contact.entityDesc')}</p>
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
                <h3 className="text-2xl font-black text-white">{t('contact.successTitle')}</h3>
                <p className="mt-2 text-blue-100 text-sm max-w-md">
                  {lang === 'es' ? (
                    <>
                      Gracias, <strong className="text-white">{formData.fullName || 'Estimado Propietario'}</strong>. {t('contact.successMessage')}{' '}
                      <span className="text-cyan-300 font-mono font-bold">{formData.phone || 'su teléfono'}</span>.
                    </>
                  ) : (
                    <>
                      Thank you, <strong className="text-white">{formData.fullName || 'Neighbor'}</strong>. {t('contact.successMessage')} at{' '}
                      <span className="text-cyan-300 font-mono font-bold">{formData.phone || 'your phone'}</span>.
                    </>
                  )}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-blue-900/60 border border-blue-600/50 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  {t('contact.submitAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-black text-white mb-2">
                  {t('contact.formTitle')}
                </h3>
                <p className="text-xs text-blue-200/90 mb-6">
                  {t('contact.formDesc')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                      {t('contact.nameLabel')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('contact.namePlaceholder')}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#071630] border border-blue-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-blue-300/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                      {t('contact.phoneLabel')}
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
                      {t('contact.emailLabel')}
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
                      {t('contact.townLabel')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('contact.townPlaceholder')}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#071630] border border-blue-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-blue-300/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                      {t('contact.serviceLabel')}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#071630] border border-blue-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      {SERVICES_DATA.map(s => {
                        const title = lang === 'es' && SERVICE_TITLES_ES[s.title] ? SERVICE_TITLES_ES[s.title] : s.title;
                        return (
                          <option key={s.id} value={s.title} className="bg-slate-900 text-white">{title}</option>
                        );
                      })}
                      <option value="Multiple Trades" className="bg-slate-900 text-white">{t('contact.multipleTrades')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                      {t('contact.timeframeLabel')}
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full bg-[#071630] border border-blue-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="emergency" className="bg-slate-900 text-white">{t('contact.timeframe.emergency')}</option>
                      <option value="soon" className="bg-slate-900 text-white">{t('contact.timeframe.soon')}</option>
                      <option value="medium" className="bg-slate-900 text-white">{t('contact.timeframe.medium')}</option>
                      <option value="planning" className="bg-slate-900 text-white">{t('contact.timeframe.planning')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                    {t('contact.notesLabel')}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t('contact.notesPlaceholder')}
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
                  <span>{t('contact.submitBtn')}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

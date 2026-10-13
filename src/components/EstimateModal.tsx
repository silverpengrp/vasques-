import React, { useState } from 'react';
import { X, Phone, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  calculationDetails?: {
    service: string;
    size: number;
    tier: string;
    estimatedCost: string;
  } | null;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  calculationDetails
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(
    calculationDetails?.service || preselectedService || 'Decks'
  );
  const [town, setTown] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left overflow-hidden text-slate-900">
        
        {/* Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600"></div>

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center justify-center animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Estimate Request Received!</h3>
            <p className="mt-2 text-slate-600 text-sm max-w-sm">
              Thank you, <strong className="text-slate-900">{fullName || 'Neighbor'}</strong>. Our master contractor will call you within 2 hours at <span className="text-blue-600 font-mono font-bold">{phone || 'your phone number'}</span> to review measurements.
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Licensed NJ Contractor · Free Consultation</span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Request Your Free On-Site Quote
            </h3>

            {calculationDetails && (
              <div className="my-3 p-3 rounded-2xl bg-blue-50 border border-blue-200 text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900">{calculationDetails.service}</span>
                  <span className="text-slate-500 block text-[11px]">{calculationDetails.size} sq ft · {calculationDetails.tier.toUpperCase()}</span>
                </div>
                <span className="text-sm font-mono font-black text-blue-700">{calculationDetails.estimatedCost}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(609) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Township / City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Princeton, NJ"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Trade Service Needed
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none transition-colors cursor-pointer"
                >
                  {SERVICES_DATA.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Multiple Trades">Multiple Trades / Whole House</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Project Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe what you want built, repaired, or updated..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl p-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Submit For Guaranteed Written Estimate</span>
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Or call ownership directly:</span>
              <a href="tel:+16094818197" className="font-mono font-bold text-blue-600 hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                +1 (609) 481-8197
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

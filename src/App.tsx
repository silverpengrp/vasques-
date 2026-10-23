/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AllBeforeAfterGallery } from './components/AllBeforeAfterGallery';
import { TradeMatrixSection } from './components/TradeMatrixSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { HeroReviewsSection } from './components/HeroReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileAppTabBar } from './components/MobileAppTabBar';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { EstimateModal } from './components/EstimateModal';

export default function App() {
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string>('Decks');

  const handleOpenEstimateModal = () => {
    setEstimateModalOpen(true);
  };

  const handleOpenWithService = (serviceName: string) => {
    setModalService(serviceName);
    setEstimateModalOpen(true);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      {/* PWA In-App Install Prompt Banner */}
      <PWAInstallBanner />

      {/* Top Floating Glassmorphism Navigation Bar */}
      <Navbar
        onOpenEstimateModal={handleOpenEstimateModal}
        onSelectService={handleOpenWithService}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 1. HERO SECTION (Official Decal & Direct Hotline) */}
        <HeroSection
          onOpenEstimateModal={handleOpenEstimateModal}
          onSelectService={handleOpenWithService}
        />

        {/* 2. 10 MASTER TRADES UNDER ONE ROOF (Blue background, architectural services - no pricing or time) */}
        <TradeMatrixSection
          onSelectServiceForEstimate={handleOpenWithService}
          onOpenCalculatorWithService={() => handleOpenWithService('Decks')}
        />

        {/* 3. MASTER CRAFTSMANSHIP IN ACTION: ALL BEFORE & AFTER IMAGES IN BLUE SLIDER CARD (Bi-Level Composite Deck & Modern Pergola) */}
        <AllBeforeAfterGallery
          onOpenEstimateModalWithService={handleOpenWithService}
        />

        {/* 4. INTERACTIVE NEW JERSEY TOWNSHIP COVERAGE MAP */}
        <ServiceAreaSection
          onOpenEstimateModal={handleOpenEstimateModal}
        />

        {/* 5. VERIFIED 5-STAR HOMEOWNER REVIEWS & TESTIMONIALS (At the very bottom) */}
        <HeroReviewsSection
          onOpenEstimateModal={handleOpenEstimateModal}
        />

        {/* 7. DIRECT MASTER CONTRACTOR CONSULTATION & EMERGENCY LINE */}
        <ContactSection
          initialService={modalService}
        />

      </main>

      {/* Footer */}
      <Footer
        onOpenEstimateModal={handleOpenEstimateModal}
        onSelectService={handleOpenWithService}
      />

      {/* Modern App-Style Bottom Tab Bar (Replacing legacy sticky contact bar) */}
      <MobileAppTabBar
        onOpenEstimateModal={handleOpenEstimateModal}
        onSelectService={handleOpenWithService}
      />

      {/* Free Written Estimate Modal */}
      <EstimateModal
        isOpen={estimateModalOpen}
        onClose={() => setEstimateModalOpen(false)}
        preselectedService={modalService}
      />
      </div>
    </LanguageProvider>
  );
}
